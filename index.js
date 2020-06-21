const botconfig = require("./botconfig.json");
const botsecrets = requre("./botsecrets.json")
const colors = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async ()=>{
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Driving you crazy", {type: "STREAMING"});
})

bot.on('message', async (message) =>{
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.Slice[0];

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello")
    }
})

bot.login(botsecrets.token);