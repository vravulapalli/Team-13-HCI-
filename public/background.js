const knownDarkPatternsUrls = [
    "https://www.amazon.com",
    "https://www.etsy.com",
    "https://www.booking.com",
    "https://www.flipkart.com",
    'https://www.wsjwine.com',
    'https://www.ross-simons.com'
  ];

function checkAndSetBadge(tab) {
    if (knownDarkPatternsUrls?.find((u) => tab?.url?.includes(u))) {
        checkAndAlert(tab);
        chrome.action.setBadgeBackgroundColor({ color: '#FF0000', tabId: tab.id });
        // chrome.action.setBadgeTextColor({ color: '#FFF', tabId: tab.id });
        chrome.action.setBadgeText({ text: 'Warn', tabId: tab.id });
    } else {
        chrome.action.setBadgeText({ text: '', tabId: tab.id });
    }
}

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        checkAndSetBadge(tab);
    });
});

function checkAndAlert(tab) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: () => {
            alert("Caution: This site has been identified to use dark patterns.");
        }
    });
}

// Also update badge when a tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Ensure URL changes trigger badge check
    if (changeInfo.url) {
        checkAndSetBadge(tab);
    }
});
