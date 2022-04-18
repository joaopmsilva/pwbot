const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const config = require("./config.json");

client.once('ready', () => {
	console.log('Bot Online');
});

client.on("messageCreate", message => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0) return;
  
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  
	if (command === 'deshawn') {
	  message.channel.send('my nigga');
	} else

	if (command === "myname") {
		let name = args[0];
		message.reply(`Hello ${name}, kill yourself`);
	}

	if (command === "mention") {
		let member = message.mentions.members.first();
		// let reason = args.slice(1).join(" ");
		message.reply(`testing ${member}`);
	}

	if (command === "say"){
		let text = args.join(" ");
		message.delete();
		message.channel.send(text);
	  }

  });

client.login(config.token);