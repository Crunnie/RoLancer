const Client = require('discord.js');
const bot = new Client.Client();
const botSettings = require('./config.json');
const fs = require("fs");
const bigInt = require("big-integer")
const tickets = require('./supportChannels.json');

const pfx = botSettings.prefix
bot.commands = new Client.Collection();

fs.readdir('./cmds/', (err, files) => {
    if(err) console.error(err);

    let jsFiles = files.filter(f => f.split(".").pop () === "js");
    if(jsFiles.length<= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsFiles.length} commands!`);

    jsFiles.forEach((f, i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready for deployment!`);
    console.log(`ID: ${bot.user.id}, Server Count:${bot.guilds.size}`);
    bot.user.setActivity(`Crunnism is working on me!`);
    bot.user.setStatus("dnd");
    console.log("Game and Status has been set!");
});
// || ${bot.guilds.size} servers


bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0]
    let args = messageArray.slice(1);

    if(!command.startsWith(pfx)) return;

    let cmd = bot.commands.get(command.slice(pfx.length));
    if(cmd) cmd.run(bot, message, args);
});

bot.login(botSettings.token);