module.exports = {
    name: 'marco',
    description: "Marco-Polo test command",
    execute(message, args)
    {
        message.channel.send('Polo!');
    }
}