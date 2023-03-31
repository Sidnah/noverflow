chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/noverflow.js"]
  });
  chrome.action.setIcon({
    tabId: tab.id,
    path: 'images/active.png'
  });
  chrome.action.setBadgeBackgroundColor({
    tabId: tab.id,
    color: '#71d163'
  });
  chrome.action.setBadgeText({
    tabId: tab.id,
    text: '✓'
  });
});