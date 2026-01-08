/* Modulo centrado en la funcionalida del botón (Casa).
Reubicar la escena a la posición establecida por coordenas */


export function initHomeButton(map) {
  
  const botonCentrado = document.getElementById('centrado');

  const homeCoords = [416763.267, 4584242.093];
  const homeZoom = 11.5;

  
  if (botonCentrado) { 
    botonCentrado.addEventListener('click', function() {
      
      // Usamos el objeto 'map' que recibimos por parámetro
      map.getView().animate({
        center: homeCoords,
        zoom: homeZoom,
        duration: 1000
      });
      
    });
  } else {
    console.warn("El botón #centrado no se encontró en el HTML");
  }
}