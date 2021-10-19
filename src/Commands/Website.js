module.exports = {
    name: 'website',
    description: "Command that links to my Website",
    execute(message, args)
    {
        message.channel.send('https://www.ultamatum.dev');
    }
}