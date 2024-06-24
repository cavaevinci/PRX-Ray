# PRX-Ray Chrome Extension

PRX-Ray is a Chrome extension designed to streamline your code review process on Gitea, a self-hosted Git service. It focuses on simplifying the viewing of pull requests (PRs) by automatically filtering and focusing on Swift files.

## Features

* **Automatic Swift File Focus:**  
    - PRX-Ray automatically collapses (folds) all non-Swift files within Gitea pull requests.
    - After folding, the extension smoothly scrolls the page to the first visible `.swift` file, allowing you to quickly start reviewing the relevant code changes.
* **VPN Error Detection:**
    - If the Gitea pull request page is inaccessible due to a VPN issue (resulting in a 403 Forbidden error), PRX-Ray alerts you to connect to the VPN.
* **Version Display:**
    - The extension's popup window displays the current version number, making it easy to keep track of updates.
* **Customization (Planned):**
    - Future versions will include a customizable options page where you can select which file types to filter and choose between folding or completely hiding them.

## Installation

1. **Download:** Clone or download this repository to your local machine.
2. **Open Chrome Extensions:** Go to `chrome://extensions` in your browser.
3. **Enable Developer Mode:** Toggle the "Developer mode" switch in the top right corner.
4. **Load Unpacked:** Click the "Load unpacked" button and select the directory where you saved this extension's files.
5. **Pin Extension:** (Optional) Right-click the PRX-Ray icon in your toolbar and choose "Pin" to keep it easily accessible.

## Usage

1. **Visit a Gitea Pull Request:** Navigate to a pull request page on your Gitea instance.
2. **Automatic Filtering:** PRX-Ray will automatically fold all non-Swift files.
3. **Scroll to Swift:** The page will smoothly scroll to the first visible Swift file.
4. **VPN Alert:** If you encounter a 403 error, you'll be prompted to connect to the VPN if it's required for access.

![_66e4a8b8-9df2-4832-a7ec-409a7c5e542c](https://github.com/cavaevinci/PRX-Ray/assets/112208299/4b422062-9476-4af5-8b76-06ed0a045e92)