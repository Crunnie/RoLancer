const Discord = module.require("discord.js");

exports.run = (client, message, args) => {
    {
        const then = Date.now()
        message.channel.send(`pinging...`).then(m => {
            m.edit(`Pong! **Ping:** ${Date.now() - then}ms`)
        });
        console.log(`Ping command used by ${message.author.username}`);
    }
}

module.exports.help = {
    name: "ping"
}