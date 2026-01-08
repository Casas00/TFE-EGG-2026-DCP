/**
 * createMap
 * Crea y configura la instancia principal del mapa OpenLayers.
 *
 * Descripción:
 *  Inicializa el mapa con la vista por defecto, las capas base y el grupo de capas
 *  cargados desde `map/layers/*`. Se devuelve la instancia `ol.Map` para ser usada
 *  por la aplicación (main.js).
 *
 * Exporta:
 *  - createMap(): function
 *
 * Dependencias:
 *  - ol/Map, view (src/map/view/view.js), base layers (src/map/layers/baseLayers.js)
 *
 * Ejemplo de uso:
 *  import { createMap } from './map/createMap';
 *  const map = createMap();
 *
 * Notas:
 *  - El target del mapa asume que existe un div con id="map" en index.html.
 *  - Si se requiere un overlay inicial (popup), se puede pasar posteriormente.
 */

import Map from 'ol/Map.js';
import { ortoLayer,topoLayer,topoGris } from './layers/baseLayers';
import { grupo } from './layers/vector/dataLayers';
import { view } from './view/view';

// --- Mapa ---
export function createMap () {
    const map = new Map({
        target: 'map',
        overlays: [],
        layers: [
            topoGris,
            topoLayer,
            ortoLayer,
            grupo
        ],
        view: view
    });

    return map
}

