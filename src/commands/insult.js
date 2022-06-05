const {
	SlashCommandBuilder,
} = require('@discordjs/builders')

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
		const possReplies = [
			"I love what you've done with your hair. How do you get it to come out of your nostrils like that?",
			'Your face makes onions cry.',
			'You have so many gaps in your teeth it looks like your tongue is in jail.',
			"You are like a cloud. When you disappear, it's a beautiful day.",
			'I thought of you today. It reminded me to take out the trash.',
			'Somewhere out there is a tree tirelessly producing oxygen for you. You owe it an apology.',
			"Don't be ashamed of who you are. That's your parent's job.",
			"If you were an inanimate object, you'd be a participation trophy.",
			'Hey, you have something on your chin. No, the 3rd one down.',
			"You look like something I'd draw with my left hand.",
			'If I throw a stick, will you go away?',
			"You're a person of rare intelligence. It's rare when you show any.",
			'Your birth certificate is an apology letter from the condom factory.',
			"The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
			"If I wanted to kill myself I'd climb your ego and jump to your IQ.",
			'Some babies were dropped on their heads but you were clearly thrown at a wall.',
			"I'd slap you, but that would be animal abuse.",
			'The last time I saw something like you, I flushed it.',
			"I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
		]

		if (!user) {
			await interaction.reply({
				content: 'Specify a user!',
				ephemeral: true,
			})
		} else {
			await interaction.channel.send(
				`${
					possReplies[
						Math.floor(
							Math.random() *
								possReplies.length
						)
					]
				} <@${user.id}>`
			)
			await interaction.reply({
				content: "I've insulted them for you <3",
				ephemeral: true,
			})
		}
	},
}
