export function showDatasetInfo(dataset) {

    const popup = document.getElementById('dataset-info-popup');
    const content = document.getElementById('dataset-info-content');
    const info = dataset.datasetInfo;

    let html = `
        <h2>${dataset.category}</h2>
    `;

     // DESCRIPTION
    if (info.description?.length) {

    html += `
        <div class="dataset-section">
            <h3>Description</h3>
            <div class="dataset-rich-content">
                ${info.description.map(item => `
                    <div class="dataset-rich-item">
                        ${item.text ? `
                            <p>${item.text}</p>
                        ` : ''}
                        ${item.image ? `
                            <img
                                src="${item.image}"
                                class="dataset-inline-image"
                            />
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    }

    // PROJECT
    if (info.project?.length) {

        const projectTexts = info.project.filter(item => item.text);
        const projectImages = info.project.filter(item => item.image);
        
        html += `
        <div class="dataset-section">
            <h3>Project</h3>
            ${projectTexts.map(item => `
                <p>${item.text}</p>
            `).join('')}
            <div class="dataset-inline-images-container">
                ${projectImages.map(item => `
                    <img
                        src="${item.image}"
                        class="dataset-inline-image"
                    />
                `).join('')}
            </div>
        </div>
    `;
    }

    // ORGANISATIONS
    if (info.organisation?.length) {
        html += `
            <div class="dataset-section">
                <h3>Organisations</h3>

                <div class="org-tags-container">
                    ${info.organisation.map(org => `
                        <span class="org-tag">${org}</span>
                    `).join('')}
                </div>
            </div>
`;
    }

    // FUNDING
    if (info.funding?.length) {

    const fundingTexts = info.funding
        .filter(item => item.text);

    const fundingImages = info.funding
        .filter(item => item.image);

    html += `
        <div class="dataset-section">
            <h3>Funding</h3>
            ${fundingTexts.map(item => `
                <p>${item.text}</p>
            `).join('')}
            <div class="dataset-inline-images-container">
                ${fundingImages.map(item => `
                    <img
                        src="${item.image}"
                        class="dataset-inline-image"
                    />
                `).join('')}
            </div>
        </div>
    `;
}

    // PUBLICATIONS
    if (info.publications?.length) {
        html += `
            <div class="dataset-section">
                <h3>Publications</h3>

                <ul>
                    ${info.publications.map(pub => `
                        <li>
                            <a href="${pub.url}" target="_blank">
                                ${pub.title}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    if (info.endpoints?.length) {
        html += `
            <div class="dataset-section">
                <h3>Endpoints</h3>

                <ul>
                    ${info.endpoints.map(pub => `
                        <li>
                            <a href="${pub.url}" target="_blank">
                                ${pub.service}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    if (info.logos?.length) {

    html += `
        <div class="dataset-section">

            <h3>Partners</h3>

            <div class="dataset-logos-container">

                ${info.logos.map(logo => `
                    <img
                        src="${logo}"
                        class="dataset-logo"
                    />
                `).join('')}

            </div>

        </div>
    `;
}

    content.innerHTML = html;
    popup.classList.remove('hidden-control');
}


document.getElementById('dataset-info-close').onclick = () => {
    document
        .getElementById('dataset-info-popup')
        .classList.add('hidden-control');
};