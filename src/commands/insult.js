const {
	SlashCommandBuilder,
} = require('@discordjs/builders')
const { readFileSync, promises: fsPromises } = require('fs')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('insult')
		.setDescription('Insults a user')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The target of insult')
				.setRequired(true)
		),
	async execute(interaction) {
		const user = interaction.options.getUser('user')
		const contents = readFileSync(
			'./assets/insults.txt',
			'utf-8'
		)
		const possReplies = contents.split(/\r?\n/)

		await interaction.channel.send(
			`${
				possReplies[
					Math.floor(
						Math.random() * possReplies.length
					)
				]
			} <@${user.id}>`
		)
		await interaction.reply({
			content: "I've insulted them for you ❤️",
			ephemeral: true,
		})
	},
}
