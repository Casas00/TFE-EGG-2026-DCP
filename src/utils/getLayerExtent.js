const capabilitiesCache = {};

export async function getLayerExtent(workspace, layerName) {
    if (!capabilitiesCache[workspace]) {
        const url = `geoserver/${workspace}/wms?service=WMS&request=GetCapabilities`;

        const response = await fetch(url);
        const xmlText = await response.text();

        const parse = new DOMParser();
        capabilitiesCache[workspace] = parse.parseFromString(xmlText, "text/html");
    }

    const xml = capabilitiesCache[workspace]
    const layers = xml.getElementsByTagName("Layer")

    for (const layer of layers) {
        const nameNode = layer.getElementsByTagName("Name")[0];

        if (nameNode && nameNode.textContent === layerName) {
            const bboxes = layer.getElementsByTagName("BoundingBox")

            for (const bbox of bboxes) {
                if (bbox.getAttribute("CRS") === 'EPSG:4326') {
                    return [
                        parseFloat(bbox.getAttribute("miny")),
                        parseFloat(bbox.getAttribute("minx")),
                        parseFloat(bbox.getAttribute("maxy")),
                        parseFloat(bbox.getAttribute("maxx"))
                    ]
                }
            }
        }
    }  

    return null

}