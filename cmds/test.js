const Discord = module.require("discord.js");

exports.run = (client, message, args) => {
    {
        message.channel.send("Holly molly I am working!");
        console.log("I'm working!");
    }
}

module.exports.help = {
    name: "test"
}