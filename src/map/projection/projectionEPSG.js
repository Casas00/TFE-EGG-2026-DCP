import Projection from 'ol/proj/Projection.js';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';

/**
 * @module projectionEPSG
 * 
 * Define y registras las proyecciones personalizadas por el visor.
 * 
 * Este módulo registra definiciones EPSG en proj4 y las integra en 
 * OpenLayers, permitiendo su uso global en vistas, capas y fuentes 
 *   
 */

proj4.defs('EPSG:3857','+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs');
//proj4.defs("EPSG:3035","+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
register(proj4);

/**
 * Proyección principal utilizada por el visor 
 * 
 * Corresponde a la proyeccion EPSG:3857 (WGS84 - Web Mercato),
 * expresada en metros y registrada previamente mediante proj4.
 * 
 * @type {import("ol/proj/Projection").default}
 */

export let projection = new Projection({
  code: 'EPSG:3857',
  units: 'm',
});