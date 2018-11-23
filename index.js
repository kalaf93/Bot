const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})
const token = process.env.token;
bot.login('token')

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
  })

  bot.on('message', message => {
    if (message.content === 'Bonjour') {
      message.reply('Bonjour :clap::skin-tone-1:  !')
    }
  })

  bot.on('message', message => {
    if (message.content === 'youtube') {
      message.reply('Hein    : https://www.youtube.com/c/kalafYT   !')
    }
  })

  bot.on('message', message => {
    if (message.content === 'twitch') {
      message.reply('Hein    : https://www.twitch.tv/kalaf_93/   !')
    }
  })

  bot.on('message', message => {
    if (message.content === '-help') {
      message.reply(' Commande du bot: youtube twitch ping bonjour ! ')
    }
  })

// Ready? Set? Go!
bot.on('ready', () => {

    bot.user.setStatus("Online"); //dnd , online , ldle
    bot.user.setGame("-help");
    console.log("Prêt au fonctionnement");
  });

