const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready",async ()=> {
	console.log(`[Start] ${new Date()}`);
	console.log(`${bot.user.username} is online`);
	bot.user.setActivity("From tohir Computer", {type: "WATCHING"});
});

bot.login("NTMzODA4NjQyMjkwNjE0Mjgy.DzxZyg._al-LfwujpOUY_h4A6I8azz1nbI");
