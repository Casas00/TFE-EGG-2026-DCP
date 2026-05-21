import { showTimeSlider } from "./timeSlider";

const overlay = document.getElementById('tutorial-overlay');

const title = document.getElementById('tutorial-title');
const media = document.getElementById('tutorial-media')
const text = document.getElementById('tutorial-text');

const nextBtn = document.getElementById('tutorial-next');
const prevBtn = document.getElementById('tutorial-prev');

const skipBtn = document.getElementById('tutorial-skip');

const tutorialBtn = document.getElementById('tutorial-btn');
const mediaContainer = document.getElementById('tutorial-media-container')

import dataGalleryGif from '../assets/gifsTutorial/DataGalleryGif.gif'
import layerSwitcherGif from '../assets/gifsTutorial/LayerSwitcherGif.gif'
import sliderGif from '../assets/gifsTutorial/SliderGif.gif'
import drawToolsGif from '../assets/gifsTutorial/drawToolsGif.gif'
import EndpointsGif from '../assets/gifsTutorial/EndpointsGif.gif'

const tutorialSteps = [
    {
        title:'Welcome',
        text:'Welcome to the CTTC GeoExplorer. This platform allows interactive visualisation and analysis of gesoaptial datasets.'
    },
    {
        title:'Data Gallery',
        text:'Use the Data Gallery to browse datasets, add or remove layers, and access metadata information.',
        media: dataGalleryGif
    },
    {
        title:'Layer Switcher',
        text:'Manage layer visibility and organise active layers.',
        media: layerSwitcherGif
    },
    {
        title:'Temporal Slider',
        text:'Temporal datasets can be explored using the time slider.',
        media: sliderGif
    },
    {
        title:'Draw Tools',
        text:'Create points, polylines or polygons, and clipg geometries directly on the map.',
        media: drawToolsGif
    },
    {
        title:'Endpoints',
        text:'Access WMS or WFS endpoint to connect dataset into external GIS software.',
        media: EndpointsGif
    },
    {
        title:'Tutorial Complete',
        text:'You can reopen this tutorial anytime using the Quick Tour button.',
    }


];
let currentStep = 0;

export function initTutorial() {
    const tutorialSeen = localStorage.getItem('tutorialSeen');

    if (!tutorialSeen) {
        startTutorial()
    }
};
function showStep(index) {
    const step = tutorialSteps[index];

    title.textContent = step.title;
    text.textContent = step.text;
    media.src = step.media || '';

    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';

    nextBtn.textContent = index === tutorialSteps.length - 1 ? 'Finish' : 'Next';
};
function nextStep() {
    if (currentStep < tutorialSteps.length - 1) {
        currentStep++
        showStep(currentStep);
    } else {
        closeTutorial()
    }
};

function prevStep() {
    if (currentStep > 0) {
        currentStep--
        showStep(currentStep)
    }
}; 

function closeTutorial() {
    overlay.classList.add('hidden-control');

    localStorage.setItem('tutorialSeen','true');
};
export function startTutorial() {
    currentStep = 0;
    overlay.classList.remove('hidden-control');

    showStep(currentStep);
};

nextBtn.addEventListener('click', nextStep)

prevBtn.addEventListener('click', prevStep)

skipBtn.addEventListener('click',closeTutorial)
tutorialBtn.addEventListener('click', () => {
    startTutorial()
})

