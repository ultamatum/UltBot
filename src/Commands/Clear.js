module.exports = {
    name: 'clear',
    description: "Clears all messages",
    async execute(message, args)
    {
        if (message.member.roles.cache.has('900095347152547840'))
        {
            if (!args[0]) return message.reply('Invalid Syntax: Correct syntax is >Clear <amount>')

            if (args[0] > 100) return message.reply("Number must be less than 100");
            if (args[0] < 0) return message.reply("Number must be greater than 0");


            await message.channel.messages.fetch({ limit: args[0] }).then(messages =>
            {
                message.channel.bulkDelete(messages);
            })
        }
        else
            message.reply('Insufficient Permissions')
    }
}
