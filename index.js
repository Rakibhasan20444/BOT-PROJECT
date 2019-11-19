

const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require("./config");

bot.on('ready', () => {
  console.log('This bot is online!');
  bot.user.setActivity('With Rakib', { type: 'STREAMING'}).catch(console.error);
})

bot.on('message', message => {
  if (!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(config.prefix.length).split(" ");
  const command = args.shift();

  switch (command) {
    case 'ping':
      message.channel.send('||HI!||')
      break;
    case 'website':
      message.channel.send('youtube.com/TheNoobGaming')
      break;
    case 'Rakib':
      message.channel.send('Hii i am rakib londa & i am Pagol')
      break; 
    case 'info':
      if (args[1] === 'version') {
        message.channel.send('Version 1.0.1')

      } else {
        message.channel.send('invalid Args')

      }
      break;

  }

})

bot.login(process.env.token);

