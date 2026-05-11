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
    return `
        <div class="mouse-title">WGS84 Coordinates</div>
        <div class="mouse-coords">
            <span>Long: ${coordinate[0].toFixed(5)}º</span><br>
            <span>Lat: ${coordinate[1].toFixed(5)}º</span>
        </div>
        `;
    },
    projection: 'EPSG:4326',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position')

})