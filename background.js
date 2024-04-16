// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.darkPatternDetected) {
        console.log(`Dark Pattern Detected: ${message.patternType}`);
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
            title: `Dark Pattern Alert: ${message.patternType}`,
            message: `Details: ${message.detail}`,
            priority: 2
        });
    }
});
