const API_KEY = 'YOUR_SAFE_BROWSING_API_KEY';
const API_URL = 'https://safebrowsing.googleapis.com/v4/threatMatches:find';

chrome.webNavigation.onCompleted.addListener(async ({ tabId, url }) => {
  const domain = new URL(url).hostname;
  
  // Check Safe Browsing API
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      client: { clientId: "PhishGuard", clientVersion: "1.0" },
      threatInfo: {
        threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
        platformTypes: ["ANY_PLATFORM"],
        threatEntryTypes: ["URL"],
        threatEntries: [{ url }]
      }
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await response.json();
  if (data.matches) {
    chrome.tabs.sendMessage(tabId, {
      type: 'PHISH_ALERT',
      message: 'Known phishing site detected!'
    });
  }
});

// Track visited domains
const userHistory = new Set();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    const domain = new URL(tab.url).hostname;
    if (userHistory.has(domain)) return;
    userHistory.add(domain);
  }
});