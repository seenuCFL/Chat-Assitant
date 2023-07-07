// background.js

// Function to toggle the visibility of the chat window in the content script
function toggleChatWindow(tab) {
    chrome.tabs.sendMessage(tab.id, { action: 'toggleChatWindow' });
  }
  
  // Add a click event listener to the browser action (AI chat button/icon in the toolbar)
  chrome.browserAction.onClicked.addListener(toggleChatWindow);
  