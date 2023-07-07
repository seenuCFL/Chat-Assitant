// content.js

// Create the AI chat window element
const chatWindow = document.createElement('div');
chatWindow.id = 'ai-chat-window';
chatWindow.style.display = 'none'; // Initially hide the chat window

// Add the chat window to the page
document.body.appendChild(chatWindow);

// Function to toggle the chat window visibility
function toggleChatWindow() {
  chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

// Add a click event listener to the AI chat button/icon on the page
const aiButton = document.createElement('div');
aiButton.id = 'ai-chat-button';
aiButton.addEventListener('click', toggleChatWindow);

// Add the AI chat button/icon to the page
document.body.appendChild(aiButton);
