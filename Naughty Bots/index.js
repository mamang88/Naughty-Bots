const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready",async ()=> {
	console.log(`[Start] ${new Date()}`);
	console.log(`${bot.user.username} is online`);
	bot.user.setActivity("From tohir Computer", {type: "WATCHING"});
});

bot.on("message", async message => {
	let prefix = "!";
	let messageArray = message.content.split(" ");

	return message.channel.send(messageArray[0]);
});

bot.login("NTMzODA4NjQyMjkwNjE0Mjgy.DzxZyg._al-LfwujpOUY_h4A6I8azz1nbI");
