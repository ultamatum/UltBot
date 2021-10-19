module.exports = {
    name: 'twitter',
    description: "Command that links to my Twitter",
    execute(message, args)
    {
        message.channel.send('https://twitter.com/UltamatumDev');
    }
}