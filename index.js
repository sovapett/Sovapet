const { Telegraf } = require('telegraf');

const bot = new Telegraf('7942874816:AAFn9H8Nf-TfsU8-ZJhy8Who7aAKxhW_r7Y');

bot.start((ctx) => {
  ctx.reply('Привет! Нажми на кнопку ниже, чтобы запустить игру SovaPet прямо в Telegram.', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: '▶ Запустить игру',
          web_app: { url: 'https://sovapet.vercel.app' }
        }
      ]]
    }
  });
});

bot.launch();
console.log("SovaPetBot запущен");
