import Map from 'ol/Map.js';
import { worldLayer,OpenStreetMaps,topoGris } from './layers/baseLayers';
import { view } from './view/view';
import { dynamicGroup } from './layers/data/layerManager';


/**
 * Crea y devuelve el mapa principal del visor OpenLayers
 * 
 * El mapa se inicializa con las capas base y vectoriales definidas 
 * en el proyecto, una vista preconfigurada y se asociad al elemento
 * HTML con id "map".
 * 
 * @returns {import('ol/Map').default} Instancia del mapa de OpenLayers
 */

export function createMap () {
    const map = new Map({
        target: 'map',
        overlays: [],
        layers: [
            topoGris,
            worldLayer,
            OpenStreetMaps,
            dynamicGroup
        ],
        view: view
    });

    return map
}

