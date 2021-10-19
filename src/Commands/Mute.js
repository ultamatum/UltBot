const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'Mute a user',
    execute(message, args)
    {
        const target = message.mentions.users.first();

        if (target)
        {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'User')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

            let user = message.guild.members.cache.get(target.id);

            console.log(`User ${target} has been muted by ${message.author}`)

            user.roles.remove(mainRole.id);
            user.roles.add(muteRole.id);

            if (args[1])
            {
                try 
                {
                    setTimeout(function ()
                    {
                        user.roles.add(mainRole.id);
                        user.roles.remove(muteRole.id);

                        console.log(`User ${target} has been unmuted automatically`)
                    }, ms(args[1]));

                    message.reply(`User ${target} has been muted for ${args[1]}`);
                }
                catch (error)
                {
                    message.reply('Invalid syntax, the time must be a number (ex: 10s, 10m, 10h)')
                }
            }
            else
            {
                message.reply(`User ${target} has been muted indefinetely`);
            }

        } else
        {
            message.reply('Unable to find user');
        }
    }
}