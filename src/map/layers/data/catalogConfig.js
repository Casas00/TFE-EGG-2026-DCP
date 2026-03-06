export const catalogData = [
    {
        category: 'Coastal Monitoring',
        subcategories: [
            {
                name: "Shoreline",
                layers: [
                    {
                        id: 'shoreline2023',
                        name: 'Shoreline 2023',
                        workspace: 'pruebas_cttc',
                        layerName: 'linea_costa',
                        type:'wms',
                        datatype: 'vector'

                    }
                ]
            }
        ]
    },
    {
        category: "Air Quality",
        subcategories: [
            {
                name: "NO2",
                layers: [
                    {
                        id: 'no2Surface',
                        name: 'NO2 Surface',
                        workspace: 'pruebas_cttc',
                        layerName:'no2_surface',
                        type:'wms',
                        datatype: 'raster'

                    },
                    {
                        id: 'no2Mean',
                        name: 'NO2 Mean',
                        workspace: 'pruebas_cttc',
                        layerName:'no2_mean',
                        type:'wms',
                        datatype:'raster'

                    }
                ]
            },
            {
                name: 'AirCrowd',
                layers: [
                    {
                        id: 'dadesCalculades',
                        name: 'Dades Calculades',
                        workspace:'pruebas_cttc' ,
                        layerName: 'dadescalculades',
                        type: 'wms',
                        datatype: 'vector'

                    },
                    {
                        id: 'dadesCalibrades',
                        name: 'Dades Calibrades',
                        workspace:'pruebas_cttc' ,
                        layerName: 'dadescalibrades',
                        type: 'wms',
                        datatype:'vector'

                    },
                    {
                        id: 'dadesDescarregades',
                        name: 'Dades Descarregades',
                        workspace:'pruebas_cttc' ,
                        layerName: 'dadesdescarregades',
                        type: 'wms',
                        datatype:'vector'

                    },
                    {
                        id: 'dadesInterpolades',
                        name:'Dades Interpolades',
                        workspace: 'pruebas_cttc',
                        layerName:'dadesInterpolades',
                        type:'wms',
                        datatype:'raster'

                    }
                ]
            }
        ]
    },
    {
        category: "Rice Monitoring",
        subcategories: [
            {
                name: "Global Production",
                layers: []
            },
            {
                name: "Type Production",
                layers: []
            }
        ]
    },
    {
        category: "Geohazards",
        subcategories: [

        ]
    }

];