const Discord = module.require("discord.js");
const bigInt = module.require("big-integer");
var botID = bigInt("401417247379161088");


exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor("RoLancer")
        .setDescription(`This is RoLancer's info!`)
        .setColor("#18d2f7")
        .addField("Creator", "Crunnism")
        .addField("Status", "Work in progress")
        .addField("Prefix", ".")
        .addField("ID", botID);

    message.channel.send({embed: embed});
    console.log(`Botinfo command used by ${message.author.username}`);
}

exports.help = {
    name: "botinfo"
}