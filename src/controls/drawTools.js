import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Draw from 'ol/interaction/Draw.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js';

let clipGeometry = null;
let mapRef = null; // <-- Añadimos una referencia global para el mapa en este módulo

export function initDrawTool(map, layerToClip = null) {
    mapRef = map; // <-- Guardamos la referencia del mapa al inicializar

    // 1. Capa visual para los dibujos (Líneas amarillas)
    const source = new VectorSource();
    const vectorLayer = new VectorLayer({
        source: source,
        title: 'Geometries',
        style: new Style({
            fill: new Fill({ color: 'rgba(255,255,255,0.1)' }),
            stroke: new Stroke({ color: '#ffcc33', width: 2 }),
            image: new CircleStyle({ radius: 4, fill: new Fill({ color: '#ffcc33' }) }),
        })
    });
    map.addLayer(vectorLayer);

    // --- VARIABLES DE ESTADO ---
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
                setClipGeometry(e.feature.getGeometry(), layerToClip);
            } 
        });

        map.addInteraction(drawInteraction);
    }

    // --- 4. LISTENERS DE BOTONES ---
    toggleBtn.addEventListener('click', () => {
        toolsPanel.classList.toggle('hidden-control'); 
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
        setClipGeometry(null, layerToClip);
        source.clear();
        activarInteraccion('Polygon', btnClip, true);
    });

    // Borrar Todo
    btnClear.addEventListener('click', () => {
        source.clear();
        setClipGeometry(null, layerToClip);
    });
}

export function applyClipToLayer(layer) {

    layer.on('prerender', (evt) => {
        if (!clipGeometry) return;
        if (!evt.frameState) return;

        const ctx = evt.context;
        // Obtenemos el pixelRatio para evitar desfases en monitores modernos
        const pixelRatio = evt.frameState.pixelRatio; 

        // Verificamos que tengamos la referencia del mapa
        if (!mapRef) return;

        const rings = clipGeometry.getCoordinates();
        if (!rings || !rings.length) return;

        const exteriorRing = rings[0];
        if (!exteriorRing || exteriorRing.length < 3) return;

        ctx.save();
        ctx.beginPath();

        try {
            exteriorRing.forEach((coord, i) => {
                if (!Array.isArray(coord) || coord.length < 2) return;

                // Utilizamos el método del mapa que es el más robusto para esto
                const pixel = mapRef.getPixelFromCoordinate(coord);
                if (!pixel) return;

                // Multiplicamos por el ratio de pixeles del dispositivo
                const x = pixel[0] * pixelRatio;
                const y = pixel[1] * pixelRatio;

                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });

            ctx.closePath();
            ctx.clip();

        } catch (e) {
            console.warn("Clip error:", e);
        }
    });

    layer.on('postrender', (evt) => {
        if (!clipGeometry) return;
        evt.context.restore();
    });
}

export function setClipGeometry(geometry, layerGroup) {
    clipGeometry = geometry;
    // Forzamos el redibujado de las capas del grupo para que se aplique/quite el recorte
    layerGroup.getLayers().forEach(layer => layer.changed());
}