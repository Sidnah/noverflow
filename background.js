chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    files: ["scripts/noverflow.js"],
    target: { tabId: tab.id }
  });
});