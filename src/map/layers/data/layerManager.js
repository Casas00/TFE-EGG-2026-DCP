import LayerGroup from "ol/layer/Group";
import TileLayer from "ol/layer/Tile";
import { TileWMS } from "ol/source";

const activeLayers = {}

export function addLayer(layerConfig) {

    const {id, name, workspace, layerName, type} = layerConfig;

    if (activeLayers[id]) {
        console.log(`Layer ${id} is alredy active`);
        return;
    }

    if (type !== 'wms') {
        console.warn(`Layer type ${type} not supported yet`)
    }
    
    const source = new TileWMS({
        url: `/geoserver/${workspace}/wms`,
        params: {
            LAYERS: `${layerName}`,
            TILED: true
        },
        crossOrigin: 'anonymous'
    });

    const layer = new TileLayer({
        source: source,
        title: `${name}`,
        type: 'overlay',
        visible: true
    });

    dynamicGroup.getLayers().push(layer);

    activeLayers[id] = layer;

    console.log(`Layer ${id} added`)

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
}

export function isLayerActive(id) {
    return !!activeLayers[id];
}

export const dynamicGroup = new LayerGroup({
    title: 'Data Layers',
    layers: []
})