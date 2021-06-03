const discord = require("discord.js");

module.exports.run = async (client, message, args) => {




    if (message.member.roles.cache.has('849980919573512212')) {
        return message.channel.send("Je bent al geverifieerd!")

    }

    var role = message.guild.roles.cache.find(role => role.name === "Geverivieerd✔");


    var verifiërenembed = new discord.MessageEmbed()
        .setTimestamp()
        .setTitle("Weet je zeker dat je jezelf wilt verifiëren?")






    const embedMessage = await message.channel.send(verifiërenembed);

    embedMessage.react('✅').then(() => embedMessage.react('❌'));

    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    embedMessage.awaitReactions(filter, { max: 1 })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '✅') {
                embedMessage.delete();
                message.member.guild.roles.add(role);
                message.author.send("Je bent nu geverifieerd!")
                var logChannel = message.member.guild.channels.cache.find(channels => channels.name === "staff-logs")
                logChannel.send(`${message.author} is nu geverifieerd!`)

            } else if (reaction.emoji.name === '❌') {
                embedMessage.delete();
                message.author.send("Je bent niet geverifieerd!")

            }
        })









}
module.exports.help = {
    name: "verifiëren"

}