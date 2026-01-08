import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import TileWMS from 'ol/source/TileWMS.js';

import { projection } from '../projection/projectionEPSG';
import { topo } from './vector/dataLayers';

// --- MAPAS BASE ---

// -- TOPOGRÁFICO --
 let topoSource = new TileWMS({
  projection: projection,
  url: 'https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wms?',
  params: {'LAYERS':'topografic'}
});

export let topoLayer = new TileLayer({
  source: topoSource,
  type: 'base',
  visible: true

})

// -- TOPOGRÁFICO GRIS --
 let grisSource = new TileWMS({
  projection: projection,
  url: 'https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wms?',
  params: {'LAYERS':'topografic-gris'}
});

export let topoGris = new TileLayer({
  source: grisSource,
  type: 'base',
  visible: false
})

// -- ORTOFOTO --

let ortoSource = new TileWMS({
  projection: projection,
  url: 'https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?',
  params: {'LAYERS':'ortofoto_color_vigent'}
})

export let ortoLayer = new TileLayer({
  source: ortoSource,
  type:'base',
  visible: false
});


export const misMapasBase = {
  'topo': topoLayer,        
  'topo-gris': topoGris,
  'orto': ortoLayer     
};

