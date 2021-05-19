const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.author + "Deze commando is alleen voor de staff leden!")

    var botMessage = args.join(" ")

    message.delete();

    message.channel.send(botMessage)




}
module.exports.help = {
    name: "say"

}
