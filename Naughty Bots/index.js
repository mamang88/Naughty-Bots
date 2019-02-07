const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const querystring = require("querystring");

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
		let args = messageArray.slice(1);
		let bicon= bot.user.displayAvatarURL;
    let charname=querystring.escape(args.join(" "););
    let number1= Math.floor(Math.random() * 12) + 1;
    let number2=Math.floor(Math.random() * 12) + 1;
    let url="https://www.novaragnarok.com/ROChargenPHP/newsig/" + charname + "/" + number1 +"/"+number2;
    let botembed = new Discord.RichEmbed()
    .setDescription("Characther card")
    .setImage(url);
    return message.channel.send(botembed);

	}
});

bot.login(process.env.TOKEN);
