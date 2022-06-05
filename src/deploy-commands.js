require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
const {
	SlashCommandBuilder,
} = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')

const commands = []

const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	commands.push(command.data.toJSON())
}

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
