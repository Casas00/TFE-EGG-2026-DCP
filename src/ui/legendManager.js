const legendPanel = document.getElementById("legend-container");
const legendContainer = document.getElementById("legend-content");

if (!legendPanel || !legendContainer) {
    console.warn("Legend panel not found in DOM")
}

export function addLegend(layerConfig) {

    const {id, workspace, layerName, name} = layerConfig;

    if (document.getElementById(`legend-${id}`)) {
        return;
    }

    const legendUrl = `http://coastal-monitoring:8080/geoserver/${workspace}/wms?REQUEST=GetLegendGraphic&FORMAT=image/png&LAYER=${workspace}:${layerName}`;

    const legendItem = document.createElement("div");
    legendItem.classList.add("legend-item");
    legendItem.id = `legend-${id}`;

    const title = document.createElement("div");
    title.textContent = name;

    const img = document.createElement("img");
    img.src = legendUrl;

    legendItem.appendChild(title);
    legendItem.appendChild(img);
    legendContainer.appendChild(legendItem)

    updateLegendPanelVisibility();
}

export function removeLegend (layerId) {

    const legendItem = document.getElementById(`legend-${layerId}`);

    if (legendItem) {
        legendItem.remove();
    }

    updateLegendPanelVisibility();
}

function updateLegendPanelVisibility() {

    if (legendContainer.children.length === 0) {
        legendPanel.style.display = "none";
    } else {
        legendPanel.style.display = "block";
    }

}

export function reorderLegends(layersArray) {

    const legendItems = {};

    
    Array.from(legendContainer.children).forEach(item => {
        const id = item.id.replace("legend-", "");
        legendItems[id] = item;
    });

    
    legendContainer.innerHTML = "";

    
    layersArray.slice().reverse().forEach(layer => {

        const layerId = layer.get("layerId");

        if (legendItems[layerId]) {
            legendContainer.appendChild(legendItems[layerId]);
        }

    });

}

export function updateLegend(layerConfig,params) {
    const {workspace, layerName, id} = layerConfig

    let legendUrl = `/geoserver/${workspace}/wms?` +
        `REQUEST=GetLegendGraphic&FORMAT=image/png&LAYER=${layerName}`;

    if (params.STYLES) {
        legendUrl += `&STYLE=${params.STYLES}`
    }
    const img = document.querySelector(`#legend-${id} img`)

    if (img) {
        img.src = legendUrl
    }
}