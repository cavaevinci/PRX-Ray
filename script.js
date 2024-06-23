const fileSpans = document.querySelectorAll('span.file');
fileSpans.forEach(span => {
    const filename = span.textContent.trim();
    console.log(filename);

    if (!filename.endsWith('.swift')) {
        const foldButton = span.parentNode.querySelector('.fold-file');
        if (foldButton) {
            foldButton.click();
        } else {
            console.warn("No fold button found for file:", filename);
        }
    }
});