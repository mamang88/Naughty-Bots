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

	//return message.channel.send(messageArray[0]+ "\n" + messageArray[1]+ "\n" +messageArray[2]);
	if(messageArray[0] == prefix+"sig"){
		https://www.novaragnarok.com/ROChargenPHP/newsig/

	}
});

bot.login("process.env.TOKEN");
