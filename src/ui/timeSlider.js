let availableDates = []
let onChangeCallback = null;
let currentFormat = 'date';

// Inicialización del slider con fechas
function formatDate(dateString) {
    const date = new Date(dateString);

    if (currentFormat === 'year') {
        return date.getFullYear();
    }

    const options = {day: 'numeric', month:'long',year:'numeric'};
    return date.toLocaleDateString('en-EN',options)
}

export function initTimeSlider(dates, onChange,format='date') {

    const container = document.getElementById('time-slider-container')
    const slider = document.getElementById('time-slider')
    const label = document.getElementById('time-label')

    //Almacenaje del estado 
    availableDates = dates;
    onChangeCallback = onChange;
    currentFormat = format

    if (!dates || dates.length === 0) return;

    // Configuración del slider
    slider.min = 0;
    slider.max = dates.length - 1;
    slider.step = 1;
    slider.value = dates.length-1

    // Muestra del label inicial
    label.textContent = `Date: ${formatDate(dates[slider.value])}`;

    //Evento para actualizar la fecha de la capa 
    let debounceTimer;
    
    slider.oninput = (e) => {
        const index = e.target.value;
        const selectedDate = availableDates[index];

        label.textContent = `Date: ${formatDate(selectedDate)}`;

        clearTimeout(debounceTimer)

        debounceTimer = setTimeout(() => {
            if (onChangeCallback) {
                onChangeCallback(selectedDate)
            }
        }, 150)
    };

    //Mostrar Slider
    container.classList.remove('hidden-control')

}

export function updateSliderDates(newDates, format='date') {
    const slider = document.getElementById('time-slider')
    const label = document.getElementById('time-label')

    availableDates = newDates
    currentFormat = format;

    slider.min = 0
    slider.max = newDates.length - 1

    let index = slider.value 

    if (index >= newDates.length) {
        index = newDates.length -1 
    }
    slider.value = index

    const selectedDate = availableDates[index]
    label.textContent = `Date: ${formatDate(selectedDate)}`
}

export function showTimeSlider() {
    document.getElementById('time-slider-container').classList.remove('hidden-control');
}

export function hideTimeSlider() {
    document.getElementById('time-slider-container').classList.add('hidden-control')
}