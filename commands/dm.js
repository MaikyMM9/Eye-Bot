const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{



if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.author + "Deze commando is alleen voor de staff leden!")



message.delete();


var dmMessage = args.slice(1).join(' ');
var dmPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

var userEmbed = new discord.MessageEmbed()
    .setTitle("**U hebt een bericht verstuurd**")
    .setColor("#470191")
    .addField("Naar:", dmPerson)
    .addField("Het bericht dat u heeft verstuurd:", dmMessage)
    .setFooter("Eye")

message.author.send(userEmbed)

var dmEmbed = new discord.MessageEmbed()
.setTitle("**U hebt een bericht ontvangen van een Staff-Lid!**")
.setColor("#470191")
.addField("Het bericht:" , dmMessage)
.addField("Dit bericht is niet antwoordbaar", "Dit houd in dat je dit bericht kunt beantwoorden via de Beheerder!")
.setFooter("Eye")

dmPerson.send(dmEmbed)


}

module.exports.help = {
    name: "dm"
}