# Phishing Detection and Reporting Browser Extension

## Overview
This browser extension allows users to report suspicious websites that may be involved in phishing activities. It provides a simple interface to view the current website and report any potential phishing attempts.

## Key Features
- Displays the current website's hostname in the popup.
- Allows users to report suspicious websites as potential phishing attempts.
- Processes these reports through background scripts.

## File Structure
```
browser/
├── manifest.json         # Extension configuration
├── background.js         # Background script for handling reports
├── content.js            # Content script for webpage interaction
├── icons/                # Extension icons
│   ├── icon48.png
│   └── icon128.png
└── popup/                # Popup UI
    ├── popup.html
    ├── popup.css
    └── popup.js
```

## Installation
1. Clone the repository to your local machine.
2. Open your browser and navigate to the extensions page (e.g., chrome://extensions).
3. Enable "Developer mode."
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage
- Click on the extension icon to open the popup.
- The current website's hostname will be displayed.
- If you suspect a website is phishing, click the "Report" button to send a report.

## Contributing
Feel free to submit issues or pull requests to improve the extension.

## License
This project is licensed under the MIT License.
