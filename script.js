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
            // After folding, scroll to the first visible .swift file
            setTimeout(() => {
            const swiftFiles = document.querySelectorAll('span.file');
            for (const swiftFile of swiftFiles) {
                if (swiftFile.textContent.trim().endsWith('.swift') && swiftFile.offsetParent !== null) {
                    swiftFile.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    break; 
                }
            }
            }, 500);
        }
    })
    .catch(error => {
        console.error("Error checking page status:", error);
    });