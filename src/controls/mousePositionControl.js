import MousePosition from 'ol/control/MousePosition.js';
import { projection } from '../map/projection/projectionEPSG';

/**
 * @module mousePositionControl
 * 
 * Control de OpenLayers que muestra en tiempo real
 * las coordeandas del cursor sobre el visor 
 * 
 * Utiliza la proyección definida en le sistema 
 * y requiere la existencia de un elemento HTML 
 * con id `mouse-position` como contenedor del control
 */

/**
 * Instancia del control MousePosition utilizada en el visor
 * 
 * @type {import ("ol/control/MousePosition").default}
 */

export const mousePositionControl = new  MousePosition({
    coordinateFormat: function(coordinate) {
        return `X: ${coordinate[0].toFixed(3)} <br> Y: ${coordinate[1].toFixed(3)}`

    },
    projection: projection,
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position')

})