async function handleGiteaPullRequest() {
    try {
        const response = await fetch(window.location.href);

        if (!response.ok) {
            if (response.status === 403) {
                alert("You need to be connected to the VPN to view this page.");
                return; 
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }

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

        setTimeout(() => {
            for (const swiftFile of document.querySelectorAll('span.file')) {
                if (swiftFile.textContent.trim().endsWith('.swift') && swiftFile.offsetParent !== null) {
                    swiftFile.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    break;
                }
            }
        }, 500); 

    } catch (error) {
        console.error("Error handling Gitea pull request:", error);
        alert("An error occurred while processing this page. Please try again.");
    }
}

handleGiteaPullRequest();