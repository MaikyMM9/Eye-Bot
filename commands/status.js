const discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    if (!args[0]) return message.reply("Er is geen gebruiker genoemd!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!message.member.user.roles.cache.has('849980919573512212')) {
message.channel.send("Deze gebruiker is net geverifieerd!")
        return;
    }

    if (message.member.user.roles.cache.has('849980919573512212')) {


        message.delete();

        var gebruikerEmbed = new discord.MessageEmbed()
            .setTitle("Gegevens")
            .setThumbnail(member.user.displayAvatarURL({size: 4096}))
            .addField(`Bijnaam van ${user}:`, member.nickname, true)
            .setDescription(`Dit zijn de gegevens van ${user}`)
            .addField(`${user} is gejoind op:`, user.joinedAt)
            .addField(`${user} zijn account is aangemaakt op:`, member.user.createdAt)
            .addField(`Het ID van ${user}`, user.id)


        var logChannel = message.member.guild.channels.cache.find(channels => channels.name === "staff-logs")
        logChannel.send(gebruikerEmbed)

        gebruikerEmbed.delete(60000);


    }
}
module.exports.help = {
    name: "status"

}