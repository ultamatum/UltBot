module.exports = {
    name: 'getuserbyid',
    description: 'Returns a users @ given their discord ID',
    execute(message, args)
    {
        if (args[0])
        {
            message.reply(`It's <@${args[0]}>`);
        } else
        {
            message.reply('Invalid syntax please provide a user ID (looks like a bunch of numbers)');
        }
    }
}