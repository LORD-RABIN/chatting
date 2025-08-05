document.addEventListener("DOMContentLoaded", () => {
  const messagesContainer = document.querySelector(".messages-content");
  const input = document.querySelector(".message-input");
  const sendBtn = document.querySelector(".message-submit");

  // scroll chat to bottom
  function scrollToBottom() {
  const messagesContainer = document.querySelector('.messages');
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

  // add a message (user or bot)
  function addMessage(text, isUser = true) {
    const msgElement = document.createElement("div");
    msgElement.classList.add("message");
    if (isUser) {
      msgElement.classList.add("message-personal");
    } else {
      // Add bot avatar
      const avatar = document.createElement("figure");
      avatar.classList.add("avatar");
      const img = document.createElement("img");
      img.src = "uu.jpeg"; // bot avatar
      avatar.appendChild(img);
      msgElement.appendChild(avatar);
    }
    msgElement.appendChild(document.createTextNode(text));
    messagesContainer.appendChild(msgElement);
    scrollToBottom();
  }

  // mini AI knowledge base
// ...existing code...
 const knowledgeBase = [
    { pattern: /hello|hi|hey/i, replies: [
      "Hey there 👋", 
      "Hi! How are you today?", 
      "Hello! 😊", 
      "Greetings!", 
      "Hey! Nice to see you!",
      "Hiya! What brings you here today?",
      "Hello, friend! 👋",
      "Hey! Ready to chat?",
      "Hi! How can I help you?",
      "Hey! Hope you're having a great day!"
    ] },
    { pattern: /how are you/i, replies: [
      "I'm doing great 😁", 
      "Just a bot, but I feel awesome!", 
      "Better now that you're here! 💡", 
      "I'm always ready to chat!", 
      "Feeling chatty today!",
      "I'm fantastic, thanks for asking!",
      "Doing well! How about you?",
      "I'm here and ready to help!",
      "I'm as good as a bot can be!",
      "I'm running smoothly, thanks!"
    ] },
    { pattern: /your name/i, replies: [
      "I'm your friendly chatbot 🤖", 
      "You can call me ChatBuddy!", 
      "I go by many names, but you can call me Buddy!", 
      "My name is whatever you want it to be!",
      "Some call me Bot, some call me Friend!",
      "You can name me anything you like!",
      "I answer to ChatBot, Buddy, or Pal!",
      "I'm your digital companion!",
      "I don't have a real name, but you can give me one!",
      "Just call me your chat assistant!"
    ] },
    { pattern: /bye|goodbye/i, replies: [
      "Goodbye! 👋", 
      "See you soon!", 
      "Take care! ❤️", 
      "Bye! Have a wonderful day!", 
      "Hope to chat again soon!",
      "Farewell! Until next time.",
      "Bye-bye! Stay awesome!",
      "Catch you later!",
      "See you around!",
      "Wishing you a great day ahead!"
    ] },
    { pattern: /help/i, replies: [
      "Sure! You can ask me about greetings, how I'm doing, or just chat 😊", 
      "I'm here to help! Try saying hello or asking about my name.", 
      "Need assistance? Just type your question!",
      "Ask me anything, I'll do my best!",
      "I'm always here to help you out.",
      "Type your question and I'll try to answer!",
      "Let me know what you need help with.",
      "I'm your virtual helper!",
      "What can I do for you today?",
      "Help is my middle name!"
    ] },
    { pattern: /weather/i, replies: [
      "I can't check the weather, but I hope it's nice where you are!", 
      "Weather bots are cool, but I'm more of a chat bot!", 
      "I wish I could tell you, but I live in the cloud!",
      "Sorry, I don't have weather data, but I hope it's sunny!",
      "Maybe check your favorite weather app?",
      "I hope it's not raining where you are!",
      "No umbrella needed for chatting with me!",
      "I live in cyberspace, so it's always perfect here!",
      "Let me know if you see a rainbow!",
      "Whatever the weather, I'm here for you!"
    ] },
    { pattern: /joke/i, replies: [
      "Why did the computer go to the doctor? Because it had a virus! 😂", 
      "Why do programmers prefer dark mode? Because light attracts bugs!", 
      "I would tell you a joke about UDP, but you might not get it.",
      "Why was the math book sad? Because it had too many problems.",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why don't robots get scared? Because they have nerves of steel!",
      "Why did the developer go broke? Because he used up all his cache.",
      "Why did the robot go on vacation? To recharge his batteries!",
      "Why did the function break up with the variable? Because it had constant issues.",
      "Why do Java developers wear glasses? Because they don't see sharp!"
    ] },
    { pattern: /thank(s| you)/i, replies: [
      "You're welcome!", 
      "No problem!", 
      "Anytime!", 
      "Glad I could help!",
      "Happy to help!",
      "My pleasure!",
      "You're very welcome!",
      "No worries!",
      "Always here for you!",
      "It was nothing!"
    ] },
  ];

  const randomReplies = [
    "Interesting... tell me more 🤔",
    "Wow, really?",
    "That's cool! 😎",
    "I hadn’t thought about that before.",
    "Can you explain that a bit more?",
    "Fascinating! Go on...",
    "I love learning new things from you!",
    "That sounds exciting!",
    "Hmm, that's something to think about.",
    "Do you want to talk more about it?",
    "That's a unique perspective!",
    "I appreciate you sharing that.",
    "Let's dive deeper into that!",
    "You always have something interesting to say.",
    "I'm curious to hear more!",
    "That makes sense.",
    "Tell me more about your thoughts.",
    "I'm listening!",
    "That's a great point.",
    "What else is on your mind?"
  ];
//

  // get bot reply
// ...existing code...

  function botReply(userMsg) {
    let reply;

    // Simple AI logic: math solver
    if (/^what is (\d+)\s*([\+\-\*\/])\s*(\d+)\??$/i.test(userMsg)) {
      const [, a, op, b] = userMsg.match(/^what is (\d+)\s*([\+\-\*\/])\s*(\d+)\??$/i);
      switch (op) {
        case '+': reply = `${a} + ${b} = ${Number(a) + Number(b)}`; break;
        case '-': reply = `${a} - ${b} = ${Number(a) - Number(b)}`; break;
        case '*': reply = `${a} * ${b} = ${Number(a) * Number(b)}`; break;
        case '/': reply = b == 0 ? "Division by zero is undefined!" : `${a} / ${b} = ${Number(a) / Number(b)}`; break;
      }
    }

    // Simple AI logic: current time
    if (!reply && /what.*time|current time|clock/i.test(userMsg)) {
      const now = new Date();
      reply = `The current time is ${now.toLocaleTimeString()}.`;
    }

    // Simple AI logic: current date
    if (!reply && /what.*date|today's date|current date/i.test(userMsg)) {
      const now = new Date();
      reply = `Today's date is ${now.toLocaleDateString()}.`;
    }

    // check knowledge base
    if (!reply) {
      for (let item of knowledgeBase) {
        if (item.pattern.test(userMsg)) {
          const possibleReplies = item.replies;
          reply = possibleReplies[Math.floor(Math.random() * possibleReplies.length)];
          break;
        }
      }
    }

    // fallback random reply
    if (!reply) {
      reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
    }

    setTimeout(() => addMessage(reply, false), 800); // delay for realism
  }

 function sendMessage() {
    const userMsg = input.value.trim();
    if (!userMsg) return;
    addMessage(userMsg, true);
    input.value = "";
    botReply(userMsg);
  }
  // event listeners
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
});



