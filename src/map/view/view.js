import View from 'ol/View.js';
import { projection } from '../projection/projectionEPSG';

/**
 * Vista principal del visor OpenLayers.
 * 
 * Define la proyección, las coordenadas iniciales del mapa y el nivel de zoom 
 * utilizandos para el mapa principal. Esta vista es compartida 
 * entre los dinstitnos módulos del visor. 
 * 
 * @type {import("ol/View").default}
 */

export const view = new View({
            projection: projection,
            center: [500000,6000000],
            zoom:5
})