const Discord = module.require("discord.js");

exports.run = (client, message, args) => 
{
    {
        const member = message.mentions.members.first();
        if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply("you don't have enough permissions to do that :confused:");

        if (!member) return message.reply(`invalid usage. Please do ${botSettings.prefix}ban [mention user]`);
        member.ban({
            reason: `banned by ${message.author.tag}`
        });

        console.log(`Ban command used by ${message.author.username}`);
    }
}

module.exports.help = {
    name: "ban"
}