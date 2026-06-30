import LayerGroup from "ol/layer/Group";
import TileLayer from "ol/layer/Tile";
import { TileWMS } from "ol/source";
import { addLegend,removeLegend, reorderLegends} from "../../../ui/legendManager";
import { initTimeSlider,showTimeSlider,hideTimeSlider, updateSliderDates } from "../../../ui/timeSlider.js";
import { updateLegend } from "../../../ui/legendManager";
import { applyClipToLayer } from "../../../controls/drawTools.js";
import { getLayerExtent } from "../../../utils/getLayerExtent.js";
import { map } from "../../../main.js";
import {transformExtent} from 'ol/proj.js'; 


const activeLayers = {}

let currentDates = []

function datesComaprative(a,b) {
    if (a.length !== b.length) return false;
    return a.every((val,i) => val === b[i])
}

export async function addLayer(layerConfig) {

    const {id, name, workspace, layerName, type, datatype} = layerConfig;

    if (activeLayers[id]) {
        console.log(`Layer ${id} is alredy active`);
        return;
    }

    if (type !== 'wms') {
        console.warn(`Layer type ${type} not supported yet`)
    }
    
    let time = null;

    if (layerConfig.temporal) {
        const dates = layerConfig.time.available;
        time = dates[dates.length - 1];
    }

    const style = layerConfig.style || null;

    const params = {
            LAYERS: `${layerName}`,
            TILED: true,
        }

    if (time) {
        params.TIME = time;
    }

    const Z_INDEX = {
        RASTER: 0,
        VECTOR: 10,
        DRAW: 20
    };

    const source = new TileWMS({
        url: `/geoserver/${workspace}/wms`,
        params: params,
        crossOrigin: 'anonymous',
        serverType: 'geoserver'
    });

    const layer = new TileLayer({
        source: source,
        title: `${name}`,
        type: 'overlay',
        visible: true,
        layerId: id,
        datatype: datatype
    });

    layer.set('config', layerConfig)
    layer.set('initialTime',time)
    layer.setZIndex(Z_INDEX[layerConfig.datatype.toUpperCase()]);


    dynamicGroup.getLayers().push(layer);
   
    activeLayers[id] = layer;

    console.log(`Layer ${id} added`)

    addLegend(layerConfig)

    applyClipToLayer(layer)


    layer.on("change:visible", () => {

        if (layer.getVisible()) {
            addLegend(layerConfig);
        } else {
            removeLegend(id);
        }

        updateSliderState()

    });

    reorderLegends(dynamicGroup.getLayers().getArray())
    updateSliderState();

    if (layerConfig.id === 'max_ndvi') {
        document.getElementById('ndvi-selector').classList.remove('hidden-control')
    } 

    const extent = await getLayerExtent(workspace, layerName);
    console.log(extent)

    if (extent) {
        map.getView().fit(transformExtent(extent, 'EPSG:4326','EPSG:3857'), {
            duration: 1200,
            padding: [60,60,60,60]
        });
    }

}

export function removeLayer(id) {
    const layer = activeLayers[id];

    if (!layer) {
        console.log(`Layer ${id} not found`);
        return;
    }

    dynamicGroup.getLayers().remove(layer);

    delete activeLayers[id];

    console.log(`Layer ${id} removed`);

    removeLegend(id);

    reorderLegends(dynamicGroup.getLayers().getArray())
    updateSliderState();

    if (id === 'max_ndvi' ) {
        document.getElementById('ndvi-selector').classList.add('hidden-control')
    }
}

export function isLayerActive(id) {
    return !!activeLayers[id];
}

let globalTime = null;

export function updateAllLayersTime(globalTime) {

    Object.values(activeLayers).forEach(layer => {
        const config = layer.get('config');

        if (!config?.temporal) return

        const closestDate = getClosestTime(globalTime, config.time.available);

        let paramsUpdate = {
            TIME: closestDate
        }

        if (config.styleConfig?.type === 'byYear') {
            const year = new Date(closestDate).getFullYear().toString()

            const variable = config.styleConfig.variable;
            const styleName = config.styleConfig.pattern.replace('{year}',year).replace('{variable}',variable)

            paramsUpdate.STYLES = styleName
        }

        layer.getSource().updateParams(paramsUpdate);

        updateLegend(config,paramsUpdate)
    })

}

export function updateLayerVaribale(layerId, variable) {

    const layer = activeLayers[layerId];
    if (!layer) return;

    const config = layer.get('config');
    if (!config.styleConfig) return;

    config.styleConfig.variable = variable;

    const currentTime = layer.getSource().getParams().TIME;

    updateAllLayersTime(currentTime);
}

function getClosestTime(targetDate,availableDates) {
    const target = new Date(targetDate);

    let closest = availableDates[0];
    let minDiff = Math.abs(new Date(closest) - target)

    availableDates.forEach(date => {
        const diff = Math.abs(new Date(date) - target)

        if (diff < minDiff) {
            minDiff = diff;
            closest = date;
        }
    })

    return closest
}

function hasTemporalLayers() {
    return Object.values(activeLayers).some(layer => {
        const config = layer.get('config');
        return config?.temporal && layer.getVisible();
    });
}

function getAllAvailableDates() {
    const allDates = new Set()

    Object.values(activeLayers).forEach(layer => {

        if (!layer.getVisible()) return; 

        const config = layer.get('config')

        if (config?.temporal) {
            config.time.available.forEach(date => {
                allDates.add(date)
            })
        }
    })
    
    return Array.from(allDates).sort((a,b) => new Date(a) - new Date(b))
}

let sliderInitilized = false;
function updateSliderState() {

    if (hasTemporalLayers()) {
        const newDates = getAllAvailableDates()

        const datesChanged = !datesComaprative(newDates,currentDates)

        if (!sliderInitilized) {
            initTimeSlider(newDates, updateAllLayersTime,getTimeFormat())
            sliderInitilized = true
            currentDates = newDates
        } else if (datesChanged) {
            updateSliderDates(newDates, getTimeFormat())
            currentDates = newDates
        }

        showTimeSlider()
        console.log("Update Dates:", newDates)
    } else {
        globalTime = null;
        sliderInitilized = false;
        currentDates = []
        hideTimeSlider()
    }
}

function getTimeFormat() {
    const formats = new Set();

    Object.values(activeLayers).forEach(layer => {
        if (!layer.getVisible()) return;

        const config = layer.get('config');
        if (config?.temporal) {
            formats.add(config.time.format || 'date')
        }
    })

    if (formats.size === 1) {
        return[...formats][0]
    }

    return 'date'

}

export const dynamicGroup = new LayerGroup({
    title: 'Data Layers',
    layers: []
})