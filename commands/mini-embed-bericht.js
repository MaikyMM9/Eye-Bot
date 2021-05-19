const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry je kunt dit niet doen");



    message.delete();
    
    
    var embedBericht = args.join(" ");
    
    
    var embed = new discord.MessageEmbed()
    
    
    .setDescription(embedBericht)
    
    
         message.channel.send(embed)
}

module.exports.help = {
    name: "embedsay"
}