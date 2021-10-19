const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'embed',
    description: "Testing embeds in messages",
    execute(message, args, discord)
    {
        const embed = new discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Testing')
            .setURL('https://ultamatum.dev')
            .setAuthor('Alexander Gray')
            .setDescription('Test Embed')
            .addFields(
                { name: 'Test 1', value: 'Dicks' },
                { name: 'Test 2', value: 'Tits' },
                { name: 'Test 3', value: 'Bits' },
            )
            .setImage('https://i.redd.it/f5se4xixhan41.jpg')
            .setFooter('Butt stuff is pog');

        message.channel.send({ embeds: [embed] });
    }
}
