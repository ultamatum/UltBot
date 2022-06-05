const {
	SlashCommandBuilder,
} = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user')
		),
	async execute(interaction) {
		const user = interaction.options.getUser('user')

		if (!user) {
			await interaction.reply(
				`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
			)
		} else {
			await interaction.reply(
				`User's tag: ${user.tag}\nUser's id: ${user.id}`
			)
		}
	},
}
