module.exports = {
    name: 'kick',
    description: 'Command to kick a member',
    execute(message, args)
    {
        const user = message.mentions.users.first();

        if (user)
        {
            const userTarget = message.guild.members.cache.get(user.id);
            userTarget.kick();
            message.reply(`User ${user} has been kicked`);
        }
        else
        {
            message.reply("That user is not in this server")
        }
    }
}