import Overlay from "ol/Overlay";
import { dynamicGroup } from "../map/layers/data/layerManager";

export function initGetFeatureInfo(map) {

    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer');

    const overlay = new Overlay({
        element: container,
        positioning:'bottom-center',
        offset: [0,10],
        stopEvent: true
    });

    map.addOverlay(overlay);

    closer.onclick = function () {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };

    map.on("singleclick", function(evt) {

        const viewResolution = map.getView().getResolution();
        const layers = dynamicGroup.getLayers().getArray().filter(Boolean);

        const layersReversed = layers.slice().reverse();

        let targetLayer = null;

        for (let layer of layersReversed) {

            if (!layer.getVisible()) continue;

            if (layer.get("datatype") == "raster") continue;

            targetLayer = layer;
            break;

        }

        if (!targetLayer) {
            overlay.setPosition(undefined);
            return;
        }

        const source = targetLayer.getSource();
        console.log(source)
        const url = source.getFeatureInfoUrl(
            evt.coordinate,
            viewResolution,
            map.getView().getProjection().getCode(),
            {
                'INFO_FORMAT': 'text/html',
                'QUERY_LAYERS': source.getParams().LAYERS
            }
        );

        console.log(url)

        if (url) {  
        
            content.innerHTML = "Loading data...";
            overlay.setPosition(evt.coordinate);

            fetch(url)
                .then(r => r.text())
                .then(html => {

                    const parser = new DOMParser();

                    const doc = parser.parseFromString(html, 'text/html');

                    const cells = doc.querySelectorAll('td');

                    if (cells.length === 0) {

                        overlay.setPosition(undefined);

                        return;
                    }

                    content.innerHTML = html;

                    overlay.setPosition(evt.coordinate);

                })

                .catch(() => {
                    content.innerHTML = "Error loading data"
                })
            
        }
    

    });

}