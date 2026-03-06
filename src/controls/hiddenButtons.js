import { topo,cobertes } from "../map/layers/vector/dataLayers";

export function actualizarVisibilidadTopo() {
    const estaVisible = topo.getVisible();
    document.getElementById('info-topo-button').classList.toggle('hidden-control', !estaVisible);}

topo.on('change:visible',actualizarVisibilidadTopo);
