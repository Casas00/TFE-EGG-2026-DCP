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
            }
          }
        ]
      }
    ]
  }
];