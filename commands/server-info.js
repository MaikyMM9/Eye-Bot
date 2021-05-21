const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.MessageEmbed()
        .setTitle("Server-info")
        .setDescription("Hier is informatie over de server.")
        .setColor("#2d234f")
        .setThumbnail(icon)
        .addField("Bot naam:", client.user.username)
        .addField("Je bent gejoined op:", message.member.joinedAt)
        .addField("Members:", message.guild.memberCount)
        .addField("Eigenaar:", message.guild.owner)
        .setFooter("Eye")




    return message.channel.send(serverEmbed);

}














module.exports.help = {
    name: "server-info"
}