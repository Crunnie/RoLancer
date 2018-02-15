const Discord = module.require("discord.js");

exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription(`This is ${message.author.username}'s info!`)
        .setImage(`${message.author.avatarURL}`)
        .setColor("#18d2f7")
        .addField("Username", message.author.tag)
        .addField("ID", message.author.id)
        .addField("Account created on", message.author.createdAt);

    message.channel.send({embed: embed});
    console.log(`MyInfo command used by ${message.author.username}`);
}

exports.help = {
    name: "myinfo"
}