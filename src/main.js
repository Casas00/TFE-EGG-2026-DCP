
import 'ol/ol.css';  
import 'ol-layerswitcher/dist/ol-layerswitcher.css'; 
import './style.css'


import Overlay from 'ol/Overlay.js';
import { createMap } from './map/createMap';
import { cobertes, grupo, topo } from './map/layers/vector/dataLayers';
import { Switcher } from './controls/layerSwitcher';
import { initHomeButton } from './controls/recenterButton';
import { actualizarVisibilidadTopo,actualizarVisibilidadPopup } from './controls/hiddenButtons';
import { mousePositionControl } from './controls/mousePositionControl';
import { initDrawTool } from './controls/drawTools';
import { scaleMetric } from './utils/scaleLine';
import { misMapasBase } from './map/layers/baseLayers';
import { initBaseGallery } from './controls/galleryBaseMaps';



// -- Creación del Mapa
const map = createMap()

// -- Coordenadas --
map.addControl(mousePositionControl)

// --- Pop-up (tabla) ---
const container = document.getElementById("popup")
const content = document.getElementById("popup-content")
const closer = document.getElementById("popup-closer")

const overlay = new Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
}) 

map.addOverlay(overlay)

// -- Configuración del pop-up

closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;

};

// 4. Evento Pop-up
map.on('singleclick', function (evt) {
  const viewResolution = map.getView().getResolution();
  

  const url = cobertes.getSource().getFeatureInfoUrl(
    evt.coordinate,
    viewResolution,
    'EPSG:25831',
    {
      'INFO_FORMAT': 'text/html', 
      'QUERY_LAYERS': 'cobertes_2009'
    }
  );

  if (url) {
    fetch(url)
      .then((response) => response.text()) 
      .then((html) => {
        content.innerHTML = html;
        overlay.setPosition(evt.coordinate);
      })
      .catch((err) => {
        console.error("Error cargando info:", err);
      });
  }
});


// --- Llamada las funciones de visibilidad de elementos en función de la capa ---

actualizarVisibilidadTopo()
actualizarVisibilidadPopup()

// --- Llamada a la función de botón de centrado --- 
initHomeButton(map)

// --- Llamada a la función de dibujo ---
initDrawTool(map,grupo)

// --- Incorporación del ScaleLine al mapa ---
map.addControl(scaleMetric)

// --- Llamada y confgiuración del LayerSwitcher ---

map.addControl(Switcher);

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



