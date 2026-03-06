
import 'ol/ol.css';  
import 'ol-layerswitcher/dist/ol-layerswitcher.css'; 
import './style.css'


import Overlay from 'ol/Overlay.js';
import { createMap } from './map/createMap';
import { cobertes, grupo, topo } from './map/layers/vector/dataLayers';
import { switcher } from './controls/layerSwitcher';
import { initHomeButton } from './controls/recenterButton';
import { mousePositionControl } from './controls/mousePositionControl';
import { initDrawTool } from './controls/drawTools';
import { scaleMetric } from './utils/scaleLine';
import { misMapasBase } from './map/layers/baseLayers';
import { initBaseGallery } from './controls/galleryBaseMaps';
import { initCatalogPanel } from './controls/catalogPanel';
import { initGetFeatureInfo } from './ui/getFeatureInfo';




// -- Creación del Mapa
const map = createMap()

// -- Coordenadas --
map.addControl(mousePositionControl)

// --- Llamada a la función de botón de centrado --- 
initHomeButton(map)

// --- Llamada a la función de dibujo ---
initDrawTool(map,grupo)

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
        lsButton.textContent = ''; // elimina el texto "»"
    } else {
        lsButton.textContent = ''; // opcional: mantiene vacío
    }
});

observer.observe(lsContainer, { attributes: true, attributeFilter: ['class'] });

// --- Llamada Galeria de Mapas Base ---
initBaseGallery(misMapasBase);

// --- Llamada Galeria de Datos ---
initCatalogPanel();

// --- GetFeatureInfo --- 
initGetFeatureInfo(map)