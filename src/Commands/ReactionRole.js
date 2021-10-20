module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message",
    async execute(message, args, discord, client)
    {
        const channel = '900153877985366077';

        const pinkRole = message.guild.roles.cache.find(role => role.name === "Pink");
        const blueRole = message.guild.roles.cache.find(role => role.name === "Blue");

        const pinkEmoji = '🟥'
        const blueEmoji = '🟦'

        const embed = new discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose your name colour')
            .setDescription('Choosing an emoji will change the colour of your name in the chat\n\n'
                + `${pinkEmoji} for a pink colour\n`
                + `${blueEmoji} for a blue colour`)

        let messageEmbed = await message.channel.send({ embeds: [embed] });
        messageEmbed.react(pinkEmoji);
        messageEmbed.react(blueEmoji);

        const filter = (reaction, user) =>
        {
            return (reaction.emoji.name === pinkEmoji || reaction.emoji.name === blueEmoji);
        }

        client.channels.cache.get(channel).messages.fetch(messageEmbed.id);

        const collector = messageEmbed.createReactionCollector({ filter });

        collector.on('collect', async (reaction, user) =>
        {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);

            if (reaction.emoji.name === pinkEmoji)
            {
                await reaction.message.guild.members.cache.get(user.id).roles.add(pinkRole);
            }

            if (reaction.emoji.name === blueEmoji)
            {
                await reaction.message.guild.members.cache.get(user.id).roles.add(blueRole);
            }
        })

        collector.on('end', collected =>
        {
            console.log(`Collected ${collected.size} items`);
        });

        /*client.on('messageReactionAdd', async (reaction, user) =>
        {
            console.log('reaction added')

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return
            if (!reaction.message.guild) return

            if (reaction.message.channel.id == channel)
            {
                if (reaction.emoji.name === pinkEmoji)
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pinkRole);
                }

                if (reaction.emoji.name === blueEmoji)
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueRole);
                }
            }
            else
            {
                return
            }
        })

        client.on('messageReactionRemove', async (reaction, user) =>
        {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return
            if (!reaction.message.guild) return

            if (reaction.message.channel.id == channel)
            {
                if (reaction.emoji.name === pinkEmoji)
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pinkRole);
                }

                if (reaction.emoji.name === blueEmoji)
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueRole);
                }
            }
            else
            {
                return
            }
        })*/
    }
}