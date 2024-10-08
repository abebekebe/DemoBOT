const { Telegraf } = require('telegraf');
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Bot is alive!");
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

// Listen for /help command
bot.help((ctx) => ctx.reply('Send me a sticker'))
// Echo the received message
bot.on('text', (ctx) => {
      const userInput = ctx.message.first_name;
  ctx.reply('You said:' + userInput);
});

// Error handling
bot.catch((err) => {
  console.log('Error: ', err);
});

// Launch the bot
bot.launch();
console.log('Bot is running...');
