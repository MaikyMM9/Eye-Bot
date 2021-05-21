const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(message.author + " Deze commando kun jij helaas niet gebruiken!")

    var role1 = message.guild.roles.cache.find(r => r.id === "843564244821344283");

    var aankondiging = args.join(" ")

    var aankondigingEmbed = new discord.MessageEmbed()
        .setTitle("Aankondiging")
        .setColor("#86ceb1")
        .setDescription('Nieuwe aankoniging!')
        .addField(`De aankondiging:`, aankondiging)
        .addField(`Verstuurd door:`, message.author)
        .setFooter("Eye")




    var aankondigingChannel = message.member.guild.channels.cache.find(channels => channels.name === "aankondigingen❗")

    if (!aankondigingChannel) return message.author.send("Geen kanaal gevonden!")

    aankondigingChannel.send(`${role1}`)
    aankondigingChannel.send(aankondigingEmbed).then(aankondigingEmbed.react('✅'));








}
module.exports.help = {
    name: "aankondiging"

}