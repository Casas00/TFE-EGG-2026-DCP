
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Draw from 'ol/interaction/Draw.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js';
import { getVectorContext } from "ol/render";
import LayerGroup from 'ol/layer/Group.js'; // Importante para detectar grupos

export function initDrawTool(map, layerToClip = null) {

    // 1. Capa visual para los dibujos (Líneas amarillas)
    const source = new VectorSource();
    const vectorLayer = new VectorLayer({
        source: source,
        title: 'Mis Dibujos',
        style: new Style({
            fill: new Fill({ color: 'rgba(255,255,255,0.1)' }),
            stroke: new Stroke({ color: '#ffcc33', width: 2 }),
            image: new CircleStyle({ radius: 4, fill: new Fill({ color: '#ffcc33' }) }),
        }),
    });
    map.addLayer(vectorLayer);

    // --- VARIABLES DE ESTADO ---
    let clipGeometry = null;
    let drawInteraction;
    let isClippingMode = false;

    // --- DOM ---
    const toggleBtn = document.getElementById('draw-toggle-button');
    const toolsPanel = document.getElementById('draw-tools');
    const btnPoint = document.getElementById('draw-point');
    const btnLine = document.getElementById('draw-line');
    const btnPolygon = document.getElementById('draw-polygon');
    const btnClip = document.getElementById('draw-clip'); // Tijeras
    const btnClear = document.getElementById('draw-clear');
    
    const botonesHerramientas = [btnPoint, btnLine, btnPolygon, btnClip];


    // --- 2. LÓGICA DE RECORTE (RECURSIVA) ---

    // A. Aplica el evento a una capa individual (hoja del árbol)
    const attachClipToLayer = (layer) => {
        
        layer.on('prerender', (evt) => {
            if (!clipGeometry) return;

            try {
                const ctx = evt.context;
                const vectorContext = getVectorContext(evt);
                
                ctx.save(); // Guardado del estado del canvas
                ctx.beginPath(); // Comienzo de la máscara
                
                // Dibujo del polígono
                vectorContext.setStyle(new Style({ fill: new Fill({ color: 'black' }) }));
                vectorContext.drawGeometry(clipGeometry);
                
                ctx.clip(); // Recorte efectivo
            } catch (error) {
                // Si salta esto, es que alguna capa del grupo no tiene crossOrigin: 'anonymous'
                console.warn("Error recortando capa (revisa CORS):", layer.get('title'));
            }
        });

        layer.on('postrender', (evt) => {
            if (!clipGeometry) return;
            const ctx = evt.context;
            ctx.restore();
        });
    };

    // B. Función Recursiva: Navega por grupos y subgrupos
    const aplicarRecorteRecursivo = (elemento) => {
        if (!elemento) return;

        if (elemento instanceof LayerGroup) {
            // Si es grupo, bajamos un nivel
            elemento.getLayers().forEach(child => aplicarRecorteRecursivo(child));
        } else {
            // Si es capa, aplicamos lógica
            attachClipToLayer(elemento);
        }
    };

    // C. Función Recursiva de Refresco: Fuerza el repintado
    const refrescarRecursivo = (elemento) => {
        if (!elemento) return;

        if (elemento instanceof LayerGroup) {
            elemento.getLayers().forEach(child => refrescarRecursivo(child));
        } else {
            elemento.changed();
        }
    }

    // --- INICIALIZACIÓN ---
    // Aplicamos los listeners a todo el árbol del grupo nada más empezar
    if (layerToClip) {
        aplicarRecorteRecursivo(layerToClip);
    }


    // --- 3. INTERACCIÓN ---
    function activarInteraccion(tipo, botonClicado, isClip = false) {
        
        // Limpieza de interacciones previas
        if (drawInteraction) map.removeInteraction(drawInteraction);
        botonesHerramientas.forEach(b => b?.classList.remove('active'));

        isClippingMode = isClip;
        if (!tipo) return;

        if (botonClicado) botonClicado.classList.add('active');

        drawInteraction = new Draw({ source: source, type: tipo });

        drawInteraction.on('drawend', (e) => {
            
            if (isClippingMode && layerToClip) {
      
                clipGeometry = e.feature.getGeometry();
                
                refrescarRecursivo(layerToClip);
            } 
        });

        map.addInteraction(drawInteraction);
    }

    // --- 4. LISTENERS DE BOTONES ---

    toggleBtn.addEventListener('click', () => {
        toolsPanel.classList.toggle('hidden-control'); // Asegúrate que coincide con tu CSS (.control-oculto o .hidden-control)
        if (toolsPanel.classList.contains('hidden-control')) {
            activarInteraccion(null);
        }
    });

    // Herramientas normales
    btnPoint.addEventListener('click', () => activarInteraccion('Point', btnPoint, false));
    btnLine.addEventListener('click', () => activarInteraccion('LineString', btnLine, false));
    btnPolygon.addEventListener('click', () => activarInteraccion('Polygon', btnPolygon, false));

    // Herramienta RECORTE
    btnClip.addEventListener('click', () => {
        clipGeometry = null;
        if(layerToClip) refrescarRecursivo(layerToClip);
        source.clear();
        activarInteraccion('Polygon', btnClip, true); // Modo Clip = true
    });

    // Borrar Todo
    btnClear.addEventListener('click', () => {
        source.clear();
        clipGeometry = null;
        if(layerToClip) refrescarRecursivo(layerToClip);
    });
}
