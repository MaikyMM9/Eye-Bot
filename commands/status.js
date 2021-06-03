const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply("Er is geen gebruiker genoemd!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    message.delete();

    var gebruikerEmbed = new discord.MessageEmbed()
.setTitle("Gegevens")
.setDescription(`Dit zijn de gegevens van ${user}`)
.addField(`${user} is gejoind op:`,  user.joinedAt)
// .addField(`Wanneer ${user} op discord is aangemeld:`, user.createdAt)
.addField(`Het ID van ${user}`, user.id)


var logChannel = message.member.guild.channels.cache.find(channels => channels.name === "staff-logs")
   logChannel.send(gebruikerEmbed)

   gebruikerEmbed.delete(60000);



}
module.exports.help = {
    name: "status"

}