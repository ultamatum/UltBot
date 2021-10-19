module.exports = {
    name: 'ban',
    description: 'Command to ban a member',
    execute(message, args)
    {
        const user = message.mentions.users.first();

        if (user)
        {
            const userTarget = message.guild.members.cache.get(user.id);
            userTarget.ban();
            message.reply(`User ${user} has been banned`);
        }
        else
        {
            message.reply("That user is not in this server")
        }
    }
}