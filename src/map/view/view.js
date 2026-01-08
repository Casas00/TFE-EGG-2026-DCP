import View from 'ol/View.js';
import { projection } from '../projection/projectionEPSG';

export let view = new View({
            projection: projection,
            center: [416763.267,4584242.093],
            zoom:11.5
})