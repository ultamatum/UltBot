const Discord = require('discord.js')
var security = require('../.pass.json');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '>';

client.once('ready', () =>
{
    console.log('UltBot is online!');
});

client.on('messageCreate', message =>
{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (command === 'marco')
    {
        message.channel.send('polo!');
    }

    if (command === 'twitter')
    {
        message.channel.send('https://twitter.com/UltamatumDev');
    }

    if (command === 'website')
    {
        message.channel.send('https://www.ultamatum.dev');
    }
});

client.login(security.token);