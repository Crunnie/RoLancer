const Discord = module.require("discord.js");

exports.run = (client, message, args) => 
{
    const member = message.mentions.members.first();
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("you don't have enough permissions to do that :confused:");

    //needs the database for ticket.js to check channel...

    message.channel.delete()


}

module.exports.help = {
    name: "close"
}