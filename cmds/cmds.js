const Discord = module.require("discord.js");

exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor("Command's List")
        .setDescription(`This is a list of all commands. Each command has a short description and status (working (:white_check_mark:), not working (:no_entry_sign:), WIP (:construction_worker:))`)
        .setColor("#18d2f7")
        .addField("Ban", `Required perms: "Ban Members", Status: :white_check_mark:`)
        .addField("botinfo", `Shows info about me, Status: :white_check_mark:`)
        .addField("close", "Closes ticket channels, Status: :construction_worker: right now closes everything (admin perms only).")
        .addField("kick", `Required perms: "Kick Members", Status: :white_check_mark:`)
        .addField("mute", `Required perms: "Manage Messages", Status: :white_check_mark:`)
        .addField("myinfo", `Shows info about user, Status: :white_check_mark:`)
        .addField("ping", `Shows bot's ping, Status: :white_check_mark:`)
        .addField("ticket", "Creates a channel where you can talk to support members, Status: :construction_worker: but useable.")
        .addField("unmute", `Required perms: "Manage Messages", Status: :white_check_mark:`)

    message.channel.send({embed: embed});
    console.log(`Cmd command used by ${message.author.username}`);
}

exports.help = {
    name: "cmds"
}