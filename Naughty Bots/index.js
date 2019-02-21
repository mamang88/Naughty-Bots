const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const querystring = require("querystring");

bot.on("ready",async ()=> {
	console.log(`[Start] ${new Date()}`);
	console.log(`${bot.user.username} is online`);
	bot.user.setActivity("From tohir Computer", {type: "WATCHING"});
});

bot.on("guildMemberAdd", async member =>{
  //add role klo mw diaktifin apus "//" atau "/*" & "*/"
  /*
  var role=member.guild.role("name", "namarolenya");
  member.addRole(role);
  */

  //kirim pesan ke channel tertentu
  var channel = member.guild.channels.find(`name`,"welcome");
  if(channel)channel.send(`welcome ${member} to wkwkwk land`);

});
bot.on("guildMemberRemove",async member=>{

  //kirim pesan ke channel tertentu
  var channel = member.guild.channels.find(`name`,"welcome");
  if(channel)channel.send(`Bye bitch ${member}`);

});

bot.on("message", async message => {
	if(message.author.bot)return;
	let prefix = "!";
	let messageArray = message.content.split(" ");

	if(messageArray[0] == prefix+"sig"){
		let args = messageArray.slice(1);
    let charname=querystring.escape(args.join(" "));
    let number1= Math.floor(Math.random() * 11) + 1;
    let number2=Math.floor(Math.random() * 11) + 1;
    let url="https://www.novaragnarok.com/ROChargenPHP/newsig/" + charname + "/" + number1 +"/"+number2;
    let botembed = new Discord.RichEmbed()
		.setTitle("NovaRO Character")
    .setDescription(args.join(" ")+"'s Character Card.")
		.setThumbnail("https://images-ext-2.discordapp.net/external/b-E8mrzqz8625X090AnjZsmQkeuCxh6fiaYbP0jYLKs/https/www.novaragnarok.com/themes/nova/img/img/logo_new_.png")
    .setImage(url);
    return message.channel.send(botembed);

	}
});

bot.login(process.env.TOKEN);
