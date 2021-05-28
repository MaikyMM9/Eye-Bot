const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Deze commando is alleen voor de staff leden!")

    var botMessage = args.join(" ")

    message.delete();
    var sayEmbed = new discord.MessageEmbed()
        .setTimestamp()
        .setTitle("De command say is gebruikt")
        .addField("Door:", message.author)
        .addField("In:", message.channel)
        .addField("Het bericht", botMessage)
        var logChannel = message.member.guild.channels.cache.find(channels => channels.name === "staff-logs")
        
    message.channel.send(botMessage)
    logChannel.send(sayEmbed)




}
module.exports.help = {
    name: "say"

}
