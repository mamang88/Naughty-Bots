const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready",async ()=> {
	console.log(`[Start] ${new Date()}`);
	console.log(`${bot.user.username} is online`);
	bot.user.setActivity("From tohir Computer", {type: "WATCHING"});
});

bot.on("message", async message => {
	if(message.author.bot)return;
	let prefix = "!";
	let messageArray = message.content.split(" ");

	if(messageArray[0] == prefix+"sig"){
		return message.channel.send("[url=http://www.novaragnarok.com][img=http://www.novaragnarok.com/ROChargenPHP/newsig/NameHere/1/1][/url]");

	}
});

bot.login("process.env.TOKEN");
