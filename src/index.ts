import {Telegraf, Context} from 'telegraf';
import {config} from 'dotenv';

config();

if (typeof process.env.tgToken !== 'string') {
  throw new Error('Telegram token has not have empty!');
}

const bot = new Telegraf(process.env.tgToken);

bot.start((ctx : Context ) => ctx.reply('Hi! I money flow control bot!'));

bot.launch();
