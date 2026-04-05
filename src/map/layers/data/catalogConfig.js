export const catalogData = [
  {
    category: "Air Quality",
    subcategories: [
      {
        name: "NO2",
        layers: [
          {
            id: "no2surface",
            name: "NO2 Surface",
            workspace: "AirCrowd",
            layerName: "no2_surface",
            type: "wms",
            datatype: "raster",

            temporal: true,
            time: {
              default: "latest",
              available: [
                "2023-12-21","2023-12-22","2023-12-23","2023-12-24","2023-12-25",
                "2023-12-26","2023-12-27","2023-12-28","2023-12-29","2023-12-30",
                "2023-12-31","2024-01-10","2024-01-15","2024-01-24","2024-01-31",
                "2024-02-01","2024-02-23","2024-03-01","2024-03-18","2024-03-19","2024-03-20"
              ]
            },
            metadata: {
              base: {
                title: 'NO2 Surface',
                description: 'Concentración de NO2 en la superficie terrestre en Cataluña',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2023 - 2024',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label: 'Geometry Type', value: 'Raster'}
              ]
            }
          },
          {
            id: "no2mean",
            name: "NO2 Mean",
            workspace: "AirCrowd",
            layerName: "no2_mean",
            type: "wms",
            datatype: "raster",

            temporal: true,
            time: {
              default: "latest",
              available: [
                "2023-12-21","2023-12-22","2023-12-23","2023-12-24","2023-12-25",
                "2023-12-26","2023-12-27","2023-12-28","2023-12-29","2023-12-30",
                "2023-12-31","2024-01-10","2024-01-15","2024-01-24","2024-01-31",
                "2024-02-01","2024-02-23","2024-03-01","2024-03-18","2024-03-19","2024-03-20"
              ]
            },
            metadata: {
              base: {
                title: 'NO2 Mean',
                description: 'Concentración media NO2 en la superficie terrestre en Cataluña',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2023 - 2024',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label: 'Geometry Type', value: 'Raster'}
              ]
            }
          }
        ]
      },
      {
        name: "AirCrowd",
        layers: [
          {
            id: "dadesCalculades",
            name: "Dades Calculades",
            workspace: "AirCrowd",
            layerName: "dadesCalculades",
            type: "wms",
            datatype: "vector",

            temporal: true,
            time: {
              default: "latest",
              available: [
                "2019-07-10","2019-07-11","2019-07-15","2019-07-23","2019-07-26",
                "2019-08-26","2019-08-28","2019-08-29","2019-08-30","2019-09-02",
                "2019-09-04","2019-09-05","2019-09-06","2019-09-09","2019-09-13",
                "2019-09-16","2019-09-18","2019-09-20","2019-11-21","2019-11-23",
                "2019-12-12","2019-12-15","2020-03-05","2020-03-07","2020-09-21",
                "2020-09-22","2020-09-28","2020-09-29","2020-10-05"
              ]
            },
            metadata: {
              base: {
                title: 'Dades Calculades',
                description: 'Datos Calculados',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2019 - 2020',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label: 'Geometry Type', value: 'Vector'}
              ]
            }
          },
          {
           id: "dadesCalibrades",
           name: 'Dades Calibrades',
           workspace: 'AirCrowd',
           layerName: 'dadesCalibrades',
           type: 'wms',
           datatype: 'vector',

            temporal: true,
            time: {
              default: "latest",
              available: [
                "2019-07-10","2019-07-11","2019-07-15","2019-07-23","2019-07-26",
                "2019-08-26","2019-08-28","2019-08-29","2019-08-30","2019-09-02",
                "2019-09-04","2019-09-05","2019-09-06","2019-09-09","2019-09-13",
                "2019-09-16","2019-09-18","2019-09-20","2019-11-21","2019-11-23",
                "2019-12-12","2019-12-15","2020-03-05","2020-03-07","2020-09-21",
                "2020-09-22","2020-09-28","2020-09-29","2020-10-05"
              ]
            },
            metadata: {
              base: {
                title: 'Dades Calibrades',
                description: 'Datos Calibrades',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2019 - 2020',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label: 'Geometry Type', value: 'Vector'}
              ]
            }
          },
          {
           id: "dadesDescarregades",
           name: 'Dades Descarregades',
           workspace: 'AirCrowd',
           layerName: 'dadesDescarregades',
           type: 'wms',
           datatype: 'vector',
           
            temporal: true,
            time: {
              default: "latest",
              available: [
                "2019-07-10","2019-07-11","2019-07-15","2019-07-23","2019-07-26",
                "2019-08-26","2019-08-28","2019-08-29","2019-08-30","2019-09-02",
                "2019-09-04","2019-09-05","2019-09-06","2019-09-09","2019-09-13",
                "2019-09-16","2019-09-18","2019-09-20","2019-11-21","2019-11-23",
                "2019-12-12","2019-12-15","2020-03-05","2020-03-07","2020-09-21",
                "2020-09-22","2020-09-28","2020-09-29","2020-10-05"
              ]
            },
            metadata: {
              base: {
                title: 'Dades Descarregades',
                description: 'Datos Descargados',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2019 - 2020',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label: 'Geometry Type', value: 'Vector'}
              ]
            }
          },
          {
            id: "dadesEstacio",
           name: 'Dades Estacio',
           workspace: 'AirCrowd',
           layerName: 'dadesEstacio',
           type: 'wms',
           datatype: 'vector',
           
            temporal: true,
            time: {
              default: "latest",
              available: [
                "2019-07-10","2019-07-11","2019-07-15","2019-07-23","2019-07-26",
                "2019-08-26","2019-08-28","2019-08-29","2019-08-30","2019-09-02",
                "2019-09-04","2019-09-05","2019-09-06","2019-09-09","2019-09-13",
                "2019-09-16","2019-09-18","2019-09-20","2019-11-21","2019-11-23",
                "2019-12-12","2019-12-15","2020-03-05","2020-03-07","2020-09-21",
                "2020-09-22","2020-09-28","2020-09-29","2020-10-05"
              ]
            },
            metadata: {
              base: {
                title: 'Dades Estación',
                description: 'Datos Calculados',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2019 - 2020',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label: 'Geometry Type', value: 'Vector'}
              ]
            }
          },
          {
            id: "dadesInterpolades",
            name: "Dades Interpolades",
            workspace: "AirCrowd",
            layerName: "dadesInterpolades",
            type: "wms",
            datatype: "raster",

            temporal: true,
            time: {
              default: "latest",
              available: [
                "2019-07-10","2019-07-11","2019-07-26","2019-11-21","2019-11-23",
                "2019-12-12","2019-12-15","2020-03-05","2020-03-07","2020-09-21",
                "2020-09-22","2020-09-28","2020-09-29","2020-10-05"
              ]
            },
            metadata: {
              base: {
                title: 'Dades Interpolades',
                description: 'Datos Interpolades',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2019 - 2020',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label: 'Geometry Type', value: 'Raster'}
              ]
            }
          }
        ]
      }
    ]
  },

  {
    category: "Rice Monitoring",
    subcategories: [
      {
        name: "NDVI / NDWI",
        layers: [
          {
            id: "max_ndvi",
            name: "Max NDVI | Min NDWI",
            workspace: "Sen2Rice",
            layerName: "max_ndvi",
            type: "wms",
            datatype: "vector",

            temporal: true,
            time: {
              default: "latest",
              available: [
                "2018-07-01","2019-07-01","2020-07-01","2021-07-01",
                "2022-07-01","2023-07-01","2024-07-01"
              ]
            },
            styleConfig: {
              type:'byYear',
              variable: 'max_ndvi',
              options: ['max_ndvi','min_ndwi','ti_ndvi'],
              pattern: '{year}_{variable}'
            },
            metadata: {
              base: {
                title: 'Max NDVI / Min NDWI Dataset',
                description: 'Dataset que contiene valores de NDVI y NDWI derivados de Sentienl-2 para el análisis del cultivo de arroz',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2018 - 2024',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label: 'Geometry Type', value: 'Polygon'},
                {label: 'Attributes', value:'NDVI Index, NDWI Index, TI NDVI'}
              ]
            }
          }
        ]
      },
      {
        name: "Production",
        layers: [
          {
            id: "yield_est",
            name: "Yield Estimation",
            workspace: "Sen2Rice",
            layerName: "yield_estimation",
            type: "wms",
            datatype: "vector",

            temporal: true,
            time: {
              default: "latest",
              available: [
                "2018-07-01","2019-07-01","2020-07-01","2021-07-01",
                "2022-07-01","2023-07-01","2024-07-01"
              ]
            },
            styleConfig: {
              type:'byYear',
              pattern: '{year}_norm_yield'
            },
            metadata: {
              base: {
                title: 'Yield Estimation',
                description: 'Dataset que muestra la producción normalizada de arroz anual. Ademas de contener la variedad de arroz producida por parcela a partir de 2021',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2018 - 2024',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label:'Geometry Type', value: 'Polygon'},
                {lable:'Attributes',value:'Yearly Production of crops (Normalised)'}
              ]
            }
          },
          {
            id: "cult_tech",
            name: "Cultivation Technique",
            workspace: "Sen2Rice",
            layerName: "cultivation_technique",
            type: "wms",
            datatype: "vector",

            temporal: true,
            time: {
              default: "latest",
              available: [
                "2022-07-01","2023-07-01","2024-07-01"
              ]
            },
            metadata: {
              base: {
                title: 'Cultivation Technique',
                description: 'Dataset que muestra la técnica que cultivo de arroz. Indundación (traditional) o Seco (dry).',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2018 - 2024',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label:'Geometry Type',value:'Polygon'},
                {label:'Attributes',value:'Extension (ha),irrigation method'}
              ]
            }
          }
        ]
      }
    ]
  }
];