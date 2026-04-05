export function showMetaadata(layerConfig) {

    const container = document.getElementById('metadata-popup');
    const content = document.getElementById('metadata-content')

    const metadata = layerConfig.metadata;

    if (!metadata) {
        content.innerHTML = "<p>No metadata available</p>";
        return
    }
    
    const base = metadata.base || {};
    const details = metadata.details || [];

    let detailsRow = details.map(item => `
            <tr>
                <td><b>${item.label}:</b></td>
                <td>${item.value}</td>
            </tr>
        `).join('');

        content.innerHTML = `
            <h3>${base.title || ''}</h3>
            <p>${base.description}</p>
            
            <table>
                <tr><td><b>Source:</b></td><td>${base.source || ''}</td></tr>
                <tr><td><b>Autorship:</b></td><td>${base.authorship || ''}</td></tr>
                <tr><td><b>Dates:</b></td><td>${base.dates || ''}</td></tr>
                <tr><td><b>CRS:</b></td><td>${base.crs || ''}</td></tr>
            
                ${detailsRow}
            </table>
        `;
    
    container.classList.remove('hidden-control')

}