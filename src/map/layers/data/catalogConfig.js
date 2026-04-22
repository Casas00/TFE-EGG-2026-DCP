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
              format: "date",
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
                description: ' NO2 concentration in the land surface in Catalonia ',
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
              format: "date",
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
                description: 'Mean NO2 concentration in the land surface in Catalonia',
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
            name: "Calculated Data",
            workspace: "AirCrowd",
            layerName: "dadesCalculades",
            type: "wms",
            datatype: "vector",

            temporal: true,
            time: {
              default: "latest",
              format: "date",
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
                title: 'Calculated Data',
                description: 'Calculated Data',
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
           name: 'Calibrated Data',
           workspace: 'AirCrowd',
           layerName: 'dadesCalibrades',
           type: 'wms',
           datatype: 'vector',

            temporal: true,
            time: {
              default: "latest",
              format: "date",
              available: [
                "2019-01-02","2019-01-04","2019-01-05","2019-01-06","2019-01-09","2019-01-10",
                "2019-01-11","2019-01-12","2019-01-13","2019-01-15","2019-01-16","2019-01-18",
                "2019-01-20","2019-01-21","2019-01-23","2019-01-25","2019-01-26","2019-01-28",
                "2019-01-29","2019-01-30","2019-02-02","2019-02-04","2019-02-05","2019-02-06",
                "2019-02-09","2019-02-10","2019-02-11","2019-02-12","2019-02-13","2019-02-15",
                "2019-02-16","2019-02-18","2019-02-20","2019-02-21","2019-02-23","2019-02-25",
                "2019-02-26","2019-02-28","2019-03-02","2019-03-04","2019-03-05","2019-03-06",
                "2019-03-09","2019-03-10","2019-03-11","2019-03-12","2019-03-13","2019-03-15",
                "2019-03-16","2019-03-18","2019-03-20","2019-03-21","2019-03-23","2019-03-25",
                "2019-03-26","2019-03-28","2019-03-29","2019-03-30","2019-04-10","2019-04-11",
                "2019-04-12","2019-04-15","2019-04-21","2019-04-23","2019-04-26","2019-05-10",
                "2019-05-11","2019-05-12","2019-05-15","2019-05-21","2019-05-23","2019-05-26",
                "2019-06-12","2019-06-15","2019-06-21","2019-06-23","2020-01-05","2020-01-07",
                "2020-01-21","2020-01-22","2020-01-28","2020-01-30","2020-02-05","2020-02-07",
                "2020-02-21","2020-02-22","2020-02-28","2020-03-05","2020-03-07","2020-03-21",
                "2020-03-22","2020-03-28","2020-03-30","2020-04-05","2020-04-07","2020-04-21",
                "2020-04-22","2020-04-28","2020-04-30","2020-05-05","2020-05-07","2020-05-21",
                "2020-05-22","2020-05-28","2020-05-30","2020-06-05","2020-06-07","2020-06-30"
              ]
            },
            metadata: {
              base: {
                title: 'Calibrated Data',
                description: 'Calibrated Data',
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
           name: 'Downloaded Data',
           workspace: 'AirCrowd',
           layerName: 'dadesDescarregades',
           type: 'wms',
           datatype: 'vector',
           
            temporal: true,
            time: {
              default: "latest",
              format: "date",
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
                title: 'Downloaded Data',
                description: 'Downloaded Data',
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
           name: 'Station Data',
           workspace: 'AirCrowd',
           layerName: 'dadesEstacio',
           type: 'wms',
           datatype: 'vector',
           
            temporal: true,
            time: {
              default: "latest",
              format: "date",
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
                title: 'Station Data',
                description: 'Station Data',
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
            name: "Interpolated Data",
            workspace: "AirCrowd",
            layerName: "dadesInterpolades",
            type: "wms",
            datatype: "raster",

            temporal: true,
            time: {
              default: "latest",
              format: "date",
              available: [
                "2019-07-10","2019-07-11","2019-07-26","2019-11-21","2019-11-23",
                "2019-12-12","2019-12-15","2020-03-05","2020-03-07","2020-09-21",
                "2020-09-22","2020-09-28","2020-09-29","2020-10-05"
              ]
            },
            metadata: {
              base: {
                title: 'Interpolated Data',
                description: 'Interpolated Data',
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
              format: "year",
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
                description: 'Dataset containing NDVI and NDWI values derived from Sentienl-2 for analysis of rice cultivation.',
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
          },
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
              format: "year",
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
                description: 'Dataset showing normalized annual rice production. In addition to containing the variety of rice produced per plot as of 2021',
                source: 'CTTC - Geomatics Department',
                authorship: 'CTTC',
                dates: '2018 - 2024',
                crs: 'EPSG:4326 - WGS84'
              },
              details: [
                {label:'Geometry Type', value: 'Polygon'},
                {label:'Attributes',value:'Yearly Production of crops (Normalised)'}
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
              format: "year",
              available: [
                "2022-07-01","2023-07-01","2024-07-01"
              ]
            },
            metadata: {
              base: {
                title: 'Cultivation Technique',
                description: 'Dataset containing the rice cultivation technique. Dry or Traditional (flood)',
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