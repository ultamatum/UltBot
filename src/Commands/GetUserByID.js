module.exports = {
    name: 'getuserbyid',
    description: 'Returns a users @ given their discord ID',
    execute(message, args)
    {
        if (args[0])
        {
            message.guild.members.fetch({ user: args[0], cache: false })
                .then(value =>
                {
                    message.reply(`It's ${value}`)
                })
                .catch(console.error);
        } else
        {
            message.reply('Invalid syntax please provide a user ID (looks like a bunch of numbers)');
        }
    }
}