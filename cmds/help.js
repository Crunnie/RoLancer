const Discord = module.require("discord.js");

exports.run = async (bot, message, args) => {
        let embed = new Discord.RichEmbed()
            .setAuthor("RoLancer", "https://cdn.discordapp.com/avatars/401417247379161088/906ac73eb00c08332c88a00e4a630559.png?size=2048")
            .setDescription("A multi-purpose bot for RoLancer!")
            .setColor("#18d2f7")
            .addField("Commands list", ".cmds")
            .addField("Developer", "Crunnism")
            .addField("Need a hand?", `~~*gives hand*~~ Trigger the "support (wip)" command!`)
;
        message.author.send({embed: embed});
        console.log(`Help command used by ${message.author.username}`);


}

exports.help = {
    name: "help"
}