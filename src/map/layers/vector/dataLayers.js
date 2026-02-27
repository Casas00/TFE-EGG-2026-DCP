/**
 * dataLayers
 * Definición y configuración de las capas WMS / Tile / Group usadas por el visor.
 *
 * Descripción:
 *  Contiene las fuentes y capas WMS (TileWMS) utilizadas actualmente (ej. capas de cobertura,
 *  topografía y otros servicios). Exporta objetos Layer y LayerGroup para ser montados
 *  en la creación del mapa.
 *
 * Exporta:
 *  - grupo: LayerGroup principal que agrupa las capas del proyecto.
 *  - cobertes, topo, ...: capas individuales (TileLayer).
 *
 * Notas:
 *  - Las URLs de WMS están configuradas con parámetros por defecto (LAYERS, FORMAT, VERSION).
 *  - Para datasets con gran densidad se recomienda usar TileWMS o vector tiles (según disponibilidad).
 */


import TileWMS from 'ol/source/TileWMS.js';
import TileLayer from 'ol/layer/Tile.js';
import LayerGroup from 'ol/layer/Group.js';

import { projection } from '../../projection/projectionEPSG';


// --- LAYERS---


// Topográficos
let source1 = new TileWMS({
  projection: projection,
  url:'https://geoserveis.icgc.cat/icc_mapesmultibase/utm/wms/service?',
  params:{'LAYERS':'topo'},
  crossOrigin: 'anonymous'
});

export let topo = new TileLayer({
  source:source1,
  title:'Topográfico',
  type: 'overlay',
  visible: false
});

// Cubiertas de Suelo
let source2 = new TileWMS({
 projection: projection,
 url:'https://geoserveis.icgc.cat/servei/catalunya/cobertes-sol/wms?',
 params:{'LAYERS':'cobertes_2009'},
 crossOrigin: 'anonymous'
});

export let cobertes = new TileLayer({
  source:source2,
  title:'Cobertes de Sol',
  type: 'overlay',
  visible: false
});


// PRUEBA ACCESO DATOS SERVIDOR
let source3 = new TileWMS({
  projection: projection,
  url: 'http://localhost:8080/geoserver/pruebas_cttc_vector/wms?',
  params: {'LAYERS':'comarcas'}
})

export let comarcas = new TileLayer({
  source: source3,
  title: 'Comarcas Catalunya',
  type:'overlay',
  visible:false

})

// PRUEBA ACCESO SERVIDOR RASTER
let sourceTIFF = new TileWMS({
    projection: projection,
    url: 'http://localhost:8080/geoserver/pruebas_cttc_raster/wms?',
    params: {'LAYERS':'EGMS_L3_E36N20'},
})

export let pruebatiff = new TileLayer({
  source: sourceTIFF,
  title: 'EGMS',
  type:'overlay',
  visible: false
})

let sourceCosta = new TileWMS({
  projection: projection,
  url: 'http://coastal-monitoring:8080/geoserver/pruebas_cttc/wms?',
  params:{'LAYERS':'linea_costa'}
})

export let linea_costa = new TileLayer({
  source: sourceCosta,
  title:'Linea Costa',
  type:'overlay',
  visible:true
})


let calculadesSource = new TileWMS({
  projection: projection,
  url: 'http://coastal-monitoring:8080/geoserver/pruebas_cttc/wms?',
  params: {'LAYERS':'	dadescalculades'}
})

export let dadesCalculades = new TileLayer({
  source: calculadesSource,
  title: 'DadesCalculades',
  type:'overlay',
  visible:true
})

let calibradesSource = new TileWMS({
  projection: projection,
  url: 'http://coastal-monitoring:8080/geoserver/pruebas_cttc/wms?',
  params: {'LAYERS':'	dadescalibrades'}
})

export let dadesCalibrades = new TileLayer({
  source: calibradesSource,
  title: 'DadesCalibrades',
  type:'overlay',
  visible:true
})

let carregadesSource = new TileWMS({
  projection: projection,
  url: 'http://coastal-monitoring:8080/geoserver/pruebas_cttc/wms?',
  params: {'LAYERS':'	dadesdescarregades'}
})

export let dadesDescarregades = new TileLayer({
  source: carregadesSource,
  title: 'DadesDescarregades',
  type:'overlay',
  visible:true
})

let estaconSource = new TileWMS({
  projection: projection,
  url: 'http://coastal-monitoring:8080/geoserver/pruebas_cttc/wms?',
  params: {'LAYERS':'	dadesestacio'}
})

export let dadesEstacio = new TileLayer({
  source: estaconSource,
  title: 'Dades Estacio',
  type:'overlay',
  visible:true
})

let interpoladasSource = new TileWMS({
  projection: projection,
  url: 'http://coastal-monitoring:8080/geoserver/pruebas_cttc/wms?',
  params: {'LAYERS':'	dadesInterpolades'}
})

export let dadesInterpolades = new TileLayer({
  source: interpoladasSource,
  title: 'Dades Interpolades',
  type:'overlay',
  visible:false
})


// --- Grupo ---
export let grupo = new LayerGroup({
  title: 'Capas',
  layers:[
    comarcas]
})