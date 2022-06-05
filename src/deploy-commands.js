require('dotenv').config()
const {
	SlashCommandBuilder,
} = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')

const commands = [
	new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong!'),
	new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
].map((command) => command.toJSON())

const rest = new REST({ version: '9' }).setToken(
	process.env.DISCORD_TOKEN
)

;(async () => {
	try {
		console.log(
			'Started refreshing application (/) commands.'
		)

		await rest.put(
			Routes.applicationCommands(
				process.env.DISCORD_CLIENT_ID
			),
			{ body: commands }
		)

		console.log(
			'Successfully reloaded application (/) commands.'
		)
	} catch (error) {
		console.error(error)
	}
})()
