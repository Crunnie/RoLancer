const Discord = module.require("discord.js");
const fs = module.require("fs");

exports.run = (client, message, args) => {
    {
        let clID = "&400708214825549825"

        if(!message.member.roles.has(clID)) return message.channel.send("You need to be verified in order to do it!")

        message.guild.createChannel(`support-${message.author.username}`)
        message.reply("support channel created!")
        console.log(`created support channel for ${message.author.username}`)

        //a database needs to be scripted...

    }
}

module.exports.help = {
    name: "ticket"
}