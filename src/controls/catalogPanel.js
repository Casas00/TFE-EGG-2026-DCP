import { catalogData } from "../map/layers/data/catalogConfig";
import { addLayer, removeLayer, isLayerActive } from "../map/layers/data/layerManager";
import { showMetaadata } from "../ui/metadataPanel";
import { closeMainPanels } from "../main";
import { showDatasetInfo } from "../ui/datasetInfo";

export function initCatalogPanel() {

    const toggleBtn = document.getElementById('data-button-toggle')
    const panel = document.getElementById('data-gallery-panel')

    toggleBtn.addEventListener('click', () => {

      const isOpen = !panel.classList.contains('hidden-control');

      closeMainPanels();

      if (!isOpen) {
        panel.classList.remove('hidden-control');
      }

    })

    generateCatalog(panel);

}

function generateCatalog(panel) {

  panel.innerHTML = ""; // limpiar por si acaso

  catalogData.forEach(category => {

    // Contenedor categoría
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("catalog-category");

    const categoryHeader = document.createElement("div");
    categoryHeader.classList.add("category-header");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = category.category;

    const arrow = document.createElement("span");
    arrow.classList.add("arrow-icon");
    arrow.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

    categoryHeader.appendChild(titleSpan);
    categoryHeader.appendChild(arrow);

    // Contenedor subcategorías
    const subContainer = document.createElement("div");
    subContainer.classList.add("subcategory-container");
    subContainer.style.display = "none";

    if (category.datasetInfo) {

    const datasetInfoRow = document.createElement("div");

    datasetInfoRow.classList.add("dataset-info-row");

    datasetInfoRow.innerHTML = `
        <i class="fa-solid fa-circle-info"></i>
        <span>Dataset Information</span>
    `;

    datasetInfoRow.addEventListener('click', (e) => {

        e.stopPropagation();

        showDatasetInfo(category);

    });

    subContainer.appendChild(datasetInfoRow);
    }

    category.subcategories.forEach(sub => {

      const subDiv = document.createElement("div");
      subDiv.classList.add("catalog-subcategory");

      const subHeader = document.createElement("div");
      subHeader.classList.add("subcategory-header");
      subHeader.textContent = sub.name;

      subDiv.appendChild(subHeader);

      const layerContainer = document.createElement("div");
      layerContainer.classList.add("layer-container");
      layerContainer.style.display = "none";

      sub.layers.forEach(layer => {

        const layerRow = document.createElement("div");
        layerRow.classList.add("catalog-layer");
        layerRow.dataset.layerId = layer.id

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("layer-name");
        nameSpan.textContent = layer.name;

        const actionsContainer = document.createElement("div");
        actionsContainer.classList.add("layer-actions");

        const addBtn = document.createElement("button");
        addBtn.classList.add("layer-btn","add-btn");
        addBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';

        const infoBtn = document.createElement("button");
        infoBtn.classList.add("layer-btn","info-btn");
        infoBtn.innerHTML = '<i class="fa-solid fa-circle-info"></i>';

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("layer-btn","remove-btn");
        removeBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';

        addBtn.addEventListener('click', (e) => {
          e.stopPropagation();

          if (isLayerActive(layer.id)) return;

          addLayer(layer)

          layerRow.classList.add('layer-added');
          addBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        })

        infoBtn.addEventListener('click', (e) => {
          showMetaadata(layer)
        })

        removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();

          removeLayer(layer.id)

          layerRow.classList.remove("layer-added")
          addBtn.innerHTML = '<i class="fa-solid fa-plus"></i>'
        })

        actionsContainer.appendChild(addBtn);
        actionsContainer.appendChild(infoBtn);
        actionsContainer.appendChild(removeBtn);

        layerRow.appendChild(nameSpan);
        layerRow.appendChild(actionsContainer);

        layerContainer.appendChild(layerRow)
      });

      subDiv.appendChild(layerContainer);
      subContainer.appendChild(subDiv);

      // Toggle subcategoría
      subHeader.addEventListener("click", () => {
        layerContainer.style.display =
          layerContainer.style.display === "none" ? "block" : "none";
      });

    });
    
    categoryDiv.appendChild(categoryHeader);
    categoryDiv.appendChild(subContainer);
    panel.appendChild(categoryDiv);

    // Toggle categoría
    categoryHeader.addEventListener("click", () => {
      const isOpen = subContainer.style.display === "block";

      subContainer.style.display = isOpen ? "none" : "block";
      arrow.innerHTML = isOpen
        ? '<i class="fa-solid fa-chevron-right"></i>'
        : '<i class="fa-solid fa-chevron-down"></i>';
    });

  });
}

