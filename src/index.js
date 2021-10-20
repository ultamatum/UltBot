const Discord = require('discord.js')
const fs = require('fs');
var security = require('../.pass.json');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '>';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles)
{
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>
{
    console.log('UltBot is online!');
});

client.on('guildMemberAdd', member =>
{
    let welcomeRole = member.guild.roles.cache.find(role => role.name === 'User');

    console.log(`User ${member} joined the server`);

    member.roles.add(welcomeRole);
    member.guild.channels.cache.get('900142036081057872').send(`Welcome <@${member.user.id}>`);
});

client.on('messageCreate', message =>
{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (client.commands.has(command))
    {
        client.commands.get(command).execute(message, args, Discord, client);
    }
});

client.login(security.token);