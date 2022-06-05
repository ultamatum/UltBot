require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
const {
	Client,
	Intents,
	Collection,
} = require('discord.js')

const client = new Client({
	intents: [Intents.FLAGS.GUILDS],
})

client.commands = new Collection()
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)

	// Set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command)
}

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`)
})

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return

	const command = client.commands.get(
		interaction.commandName
	)

	if (!command) return

	try {
		await command.execute(interaction)
	} catch (error) {
		console.error(error)
		await interaction.reply({
			content:
				'There was an error while executing this command!',
			ephemeral: true,
		})
	}
})

client.login()
