import MousePosition from 'ol/control/MousePosition.js';
import { projection } from '../map/projection/projectionEPSG';

export const mousePositionControl = new  MousePosition({
    coordinateFormat: function(coordinate) {
        return `X: ${coordinate[0].toFixed(3)} <br> Y: ${coordinate[1].toFixed(3)}`

    },
    projection: projection,
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position')

})