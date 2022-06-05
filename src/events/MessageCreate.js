module.exports = {
	name: 'messageCreate',
	execute(message) {
		if (message.author.bot) return

		const messageText = message.content.toLowerCase()

		let possReplies = []

		if (
			messageText.includes('fuck u') ||
			messageText.includes('fuck you')
		) {
			possReplies = ['u wish 😉', 'you wish 😉']
		}

		if (
			messageText ==
			`i love you <@${message.client.user.id}>`
		) {
			possReplies = [
				"I don't love you, whore",
				'I love you too ❤️',
			]
		}

		if (possReplies.length > 0) {
			message
				.reply(
					possReplies[
						Math.floor(
							Math.random() *
								possReplies.length
						)
					]
				)
				.then(() =>
					console.log(
						`Replied to message "${message.content}" from ${message.author.tag}`
					)
				)
				.catch(console.error)
		}
	},
}
