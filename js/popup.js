document.addEventListener('DOMContentLoaded', () => {
    const versionElement = document.getElementById('version');
    const manifest = chrome.runtime.getManifest();
    versionElement.textContent += manifest.version;
});