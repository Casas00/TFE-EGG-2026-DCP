import Projection from 'ol/proj/Projection.js';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';

proj4.defs('EPSG:25831',"+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
//proj4.defs("EPSG:3035","+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
register(proj4);

export let projection = new Projection({
  code: 'EPSG:25831',
  units: 'm',
});