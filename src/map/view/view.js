import View from 'ol/View.js';
import { projection } from '../projection/projectionEPSG';

export let view = new View({
            projection: projection,
            center: [500000,6000000],
            zoom:5
})