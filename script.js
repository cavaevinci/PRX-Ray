fetch(window.location.href)
    .then(response => {
        if (!response.ok && response.status === 403) {
            alert("You need to be connected to the VPN to view this page.");
        } else {
            const fileSpans = document.querySelectorAll('span.file');
            fileSpans.forEach(span => {
                const filename = span.textContent.trim();
                if (!filename.endsWith('.swift')) {
                    const foldButton = span.parentNode.querySelector('.fold-file');
                    if (foldButton) {
                        foldButton.click();
                    }
                }
            });
        }
    })
    .catch(error => {
        console.error("Error checking page status:", error);
    });