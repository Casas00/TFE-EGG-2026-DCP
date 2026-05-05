
import 'ol/ol.css';  
import 'ol-layerswitcher/dist/ol-layerswitcher.css'; 
import './style.css'


import Overlay from 'ol/Overlay.js';
import { createMap } from './map/createMap';
import { switcher } from './controls/layerSwitcher';
import { initHomeButton } from './controls/recenterButton';
import { mousePositionControl } from './controls/mousePositionControl';
import { initDrawTool } from './controls/drawTools';
import { scaleMetric } from './utils/scaleLine';
import { misMapasBase } from './map/layers/baseLayers';
import { initBaseGallery } from './controls/galleryBaseMaps';
import { initCatalogPanel } from './controls/catalogPanel';
import { initGetFeatureInfo } from './ui/getFeatureInfo';
import { updateLayerVaribale,dynamicGroup } from './map/layers/data/layerManager';

// -- Creación del Mapa
const map = createMap()

// -- Coordenadas --
map.addControl(mousePositionControl)

// --- Llamada a la función de botón de centrado --- 
initHomeButton(map)

// --- Llamada a la función de dibujo ---
initDrawTool(map,dynamicGroup)

// --- Incorporación del ScaleLine al mapa ---
map.addControl(scaleMetric)

// --- Llamada y confgiuración del LayerSwitcher ---

map.addControl(switcher);

// -- Eliminación del Bloque de Texto del Layer Switcher (">>") --
const lsButton = document.querySelector('.layer-switcher > button');

// Observa los cambios de clase "shown" en el layer switcher
const lsContainer = document.querySelector('.layer-switcher');

const observer = new MutationObserver(() => {

    if (lsContainer.classList.contains('shown')) {

        document.getElementById('gallery-panel')?.classList.add('hidden-control');
        document.getElementById('data-gallery-panel')?.classList.add('hidden-control')

    }

    lsButton.textContent = '';

})

observer.observe(lsContainer, { attributes: true, attributeFilter: ['class'] });

// --- Llamada Galeria de Mapas Base ---
initBaseGallery(misMapasBase);

// --- Llamada Galeria de Datos ---
initCatalogPanel();

// --- GetFeatureInfo --- 
initGetFeatureInfo(map)

// --- NDVI Dropdown ---
const ndvi_dropdown = document.getElementById('ndvi-dropdown')

ndvi_dropdown.addEventListener('change', e => {
    const value = e.target.value;
    updateLayerVaribale('max_ndvi',value)
})
/*
const rice_dropdown = document.getElementById('rice-dropdown')

rice_dropdown.addEventListener('change', e => {
    const value = e.target.value;
    updateLayerVaribale('yield_est',value)
})*/

document.getElementById('metadata-close').onclick = () => {
    document.getElementById('metadata-popup').classList.add('hidden-control')
}



export function closeMainPanels() {

    document.getElementById('gallery-panel')?.classList.add('hidden-control');

    document.getElementById('data-gallery-panel')?.classList.add('hidden-control');

    const layerSwitcher = document.querySelector('.layer-switcher');
    if (layerSwitcher) {
        layerSwitcher.classList.remove('shown')
    }
}

// ABOUT BUTTON
const aboutBtn = document.getElementById('about-btn');
const aboutPanel = document.getElementById('about-panel');

aboutBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    aboutPanel.classList.toggle('hidden-control');
})

document.addEventListener('click', (e) => {
    if (!e.target.closest('#hidden-control')) {
        aboutPanel.classList.add('hidden-control')
    }
})
