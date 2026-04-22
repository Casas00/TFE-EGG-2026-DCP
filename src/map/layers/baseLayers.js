import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import TileWMS from 'ol/source/TileWMS.js';
import { projection } from '../projection/projectionEPSG';


// --- MAPAS BASE ---

// -- TOPOGRÁFICO --
export let OpenStreetMaps = new TileLayer({
  source: new OSM(),
  type: 'base',
  visible: true

})

// -- TOPOGRÁFICO GRIS --
 let grisSource = new TileWMS({
  projection: projection,
  url: 'https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wms?',
  params: {'LAYERS':'estandard-gris'}
});

export let topoGris = new TileLayer({
  source: grisSource,
  type: 'base',
  visible: false
})

// -- ORTOFOTO --

let worldSource = new TileWMS({
  projection: projection,
  url: 'https://tiles.maps.eox.at/wms?',
  params: {'LAYERS':'s2cloudless-2023_3857'}
})

export let worldLayer = new TileLayer({
  source: worldSource,
  type:'base',
  visible: false
});


export const misMapasBase = {
  'osm': OpenStreetMaps,        
  'topo-gris': topoGris,
  'WI': worldLayer     
};

