const {
	SlashCommandBuilder,
} = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription(
			'Get info about a user or the server!'
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName('user')
				.setDescription('Info about a user')
				.addUserOption((option) =>
					option
						.setName('target')
						.setDescription('The user')
				)
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName('server')
				.setDescription('Info about the server')
		),
	async execute(interaction) {
		if (
			interaction.options.getSubcommand() === 'user'
		) {
			const user =
				interaction.options.getUser('target')

			if (!user) user = interaction.user

			await interaction.reply(
				`User's tag: ${user.tag}\nUser's id: ${user.id}`
			)
		} else if (
			interaction.options.getSubcommand() === 'server'
		) {
			await interaction.reply(
				`Server's name: ${interaction.guild.name}\nServer's id: ${interaction.guild.id}`
			)
		}
	},
}
