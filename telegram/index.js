const { Telegraf } = require('telegraf');

const port = 3100;
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
  ctx.reply("You said:");
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
