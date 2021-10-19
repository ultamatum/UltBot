module.exports = {
    name: 'unmute',
    description: 'Unmutes a user',
    execute(message, args)
    {
        const target = message.mentions.users.first();

        if (target)
        {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'User')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

            let user = message.guild.members.cache.get(target.id);

            console.log(`User ${target} has been unmuted by ${message.author}`)

            user.roles.add(mainRole.id);
            user.roles.remove(muteRole.id);

            message.reply(`User ${target} has been unmuted`);
        } else
        {
            message.reply('Unable to find user');
        }
    }
}