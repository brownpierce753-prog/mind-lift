function scrollToChat() {
  document.getElementById("chat").scrollIntoView({ behavior: "smooth" });
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const message = input.value.trim();

  if (!message) return;

  chatBox.innerHTML += `<div class="user">You: ${message}</div>`;
  input.value = "";

  setTimeout(() => {
    chatBox.innerHTML += `<div class="bot">${generateReply(message)}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

function generateReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("stress") || msg.includes("anxious")) {
    return "It sounds like you’re carrying a lot. Want to slow down together for a moment?";
  }
  if (msg.includes("study") || msg.includes("school")) {
    return "Let’s focus. Try a 25-minute deep work session with no distractions.";
  }
  if (msg.includes("tired") || msg.includes("burned")) {
    return "Rest isn’t weakness. It’s part of growth.";
  }
  return "I hear you. Tell me more about what’s on your mind.";
}
