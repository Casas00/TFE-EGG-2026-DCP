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
  params: {'LAYERS':'comarcas'},
  visible:false
})

export let comarcas = new TileLayer({
  source: source3,
  title: 'Comarcas Catalunya',
  type:'overlay',
  visible:false
})



// --- Grupo ---
export let grupo = new LayerGroup({
  title: 'Capas',
  layers:[
    topo,
    cobertes,
    comarcas
  ]
})