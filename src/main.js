require('dotenv').config()
const Discord = require('discord.js')

const client = new Discord.Client({
	intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
})

client.once('ready', () => {
	console.log('Ultbot is online!')
})

client.login()
