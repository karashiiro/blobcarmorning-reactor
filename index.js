const Discord = require("discord.js");

const client = new Discord.Client();

const yourGuildId = "550702475112480769"; // Your guild ID here
const yourBlobCarMorningId = "674126282778476561"; // Your blobcarmorning ID here

let blobcarmorning;

function getBlobCarMorning() {
	const guild = client.guilds.resolve(yourGuildId);
	const emoji = guild.emojis.resolve(yourBlobCarMorningId);
	blobcarmorning = emoji;
	return emoji;
}

async function onMessage(message) {
	if (message.content.includes(":blobcarmorning:")) {
		await message.react(blobcarmorning || getBlobCarMorning());
	}
}

client.on("message", onMessage);

client.login(process.env.DISCORD_BOT_TOKEN);
