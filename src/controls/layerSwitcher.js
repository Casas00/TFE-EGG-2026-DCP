import LayerSwitcher from 'ol-layerswitcher/dist/ol-layerswitcher.js';

/**
 * @module layerSwitcher
 * 
 * Control de capas del visor basado en la librería externa 
 * `ol-layerswitcher`.
 * 
 * Permite alternar la visibilidad de las capas agregadas al mapa,
 * siempre que estén definidas y tengan la propiedad `title`
 */

/**
 * Instancia del control LayerSwitcher utilizada en el visor
 * 
 * @type {import("ol-layerswitcher").default} 
 */

export let switcher = new LayerSwitcher({
  activationMode: 'click',
  startActive: false,
  tipLabel: 'LayerSwitcher'
});

