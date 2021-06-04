const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Deze commando is alleen voor de staff leden!")



    if (!args[0]) return message.reply("Er is geen gebruiker genoemd!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user.roles.cache.has('849980919573512212')) {
        message.channel.send("Deze gebruiker is niet geverifieerd!")
        return;
    }

    if (user.roles.cache.has('849980919573512212')) {


        message.delete();
        var status = user.user.presence.status;


        var nickname = user.username;

        if (nickname == 0 || undefined) nickname = "Geen bijnaam";
        var gebruikerEmbed = new discord.MessageEmbed()
            .setTitle("Gegevens")
            .setThumbnail(user.user.displayAvatarURL)
            .addField(`Bijnaam van ${user.user.tag}:`, nickname, true)
            .setDescription(`Dit zijn de gegevens van ${user.username}`)
            .addField(`${user.user.tag} is gejoind op:`, user.joinedAt)
            .addField(`${user.user.tag} zijn account is aangemaakt op:`, user.user.createdAt)
            .addField("Status:", status)
            .addField(`Het ID van ${user.user.tag}`, user.id)


        var logChannel = message.member.guild.channels.cache.find(channels => channels.name === "staff-logs")
        logChannel.send(gebruikerEmbed)

        gebruikerEmbed.delete(60000);


    }
}
module.exports.help = {
    name: "status"

}