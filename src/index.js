const Discord = require('discord.js')
const fs = require('fs');
var security = require('../.pass.json');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

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

client.on('messageCreate', message =>
{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (client.commands.has(command))
    {
        client.commands.get(command).execute(message, args, Discord);
    }
});

client.login(security.token);