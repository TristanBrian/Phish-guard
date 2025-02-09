chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = new URL(tabs[0].url);
    document.getElementById('status').textContent = `Currently viewing: ${url.hostname}`;
  });
  
  document.getElementById('report').addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'REPORT_PHISHING' });
  });