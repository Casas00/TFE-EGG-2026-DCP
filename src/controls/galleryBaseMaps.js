/**
 * Inicializa la Galería de Mapas Base.
 * * @param {Object} layersDict - Diccionaro con las capas base.
 * Ej: {'osm': capaOsm, 'pnoa':capaPnoa}
 */

import { closeMainPanels } from "../main";

export function initBaseGallery(layersDict) {
    
    // Referencias del DOM
    const toggleBtn = document.getElementById('gallery-toggle-button');
    const panel = document.getElementById('gallery-panel');
    const cards = document.querySelectorAll('.basemap-card');

    // Toggle del Panle (Abrir/Cerrar)
    toggleBtn.addEventListener('click', () => {

        const isOpen = !panel.classList.contains('hidden-control');

        closeMainPanels();

        if (!isOpen) {
            panel.classList.remove('hidden-control');
        }
    })

    // Lógica Selección de capas
    cards.forEach(card => {
        card.addEventListener('click', () => {
            
            // 1. Obtención del ID de la capa desde el atributo 'data-layer'
            const layerId = card.getAttribute('data-layer');

            // 2. Validar si tenemos esa capa en nuestro diccionario
            if (layersDict[layerId]) {

                // 3. Desactiva todas las capas y enciende la elegida
                // Object.values -> Devuelve un array con todas las capas del dicc
                Object.values(layersDict).forEach(layer => {
                    layer.setVisible(false);
                });

                // Activamos solo la capa elegida
                layersDict[layerId].setVisible(true);

                // 4. Actualización del estilo visual 
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });
    });
}