// Mind Lift AI – Prepared Architecture
// Safe placeholder AI (no API calls yet)

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

const systemPrompt = `
You are Mind Lift, a calm, supportive AI designed for teens.
You help with:
- Mental health support (non-clinical)
- Study strategies
- Motivation
You are kind, reassuring, and never judgmental.
`;

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = sender;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function fakeAIResponse(userText) {
  const responses = [
    "I'm here with you. Want to tell me more?",
    "That sounds stressful — let's break it down together.",
    "You're not alone in feeling this way.",
    "We can take this one step at a time.",
    "Try focusing on what you can control right now."
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = fakeAIResponse(text);
    addMessage(reply, "bot");
  }, 600);
}

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

