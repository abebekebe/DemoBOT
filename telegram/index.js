const { Telegraf } = require('telegraf');
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Bot is alive");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const bot = new Telegraf(process.env.BOT);

// Simple text response
bot.start((ctx) => {
  ctx.reply('Welcome! This is your new Telegram bot.');
});

// Echo the received message
bot.on('text', (ctx) => {
    const chatId = msg.chat.id;
    const userInput = msg.text;
    const msg_id = msg.message_id;
    
  ctx.reply('You said: ' + userInput + " chatId: " + chatId + " messageId: " + msg_id);
});

// Listen for /help command
bot.command('help', (ctx) => {
  ctx.reply('How can I help you?');
});

// Error handling
bot.catch((err) => {
  console.log('Error: ', err);
});

// Launch the bot
bot.launch();
console.log('Bot is running...');
