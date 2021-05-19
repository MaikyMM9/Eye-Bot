const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Deze commando is alleen voor de staff leden!");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Geen permissie!");

    if (!args[0]) return message.reply("Er is geen gebruiker genoemd!");

    if (!args[1]) return message.reply("Er zijn geen redenen meegegeven!");

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reden = args.slice(1).join(" ");

    if (!banUser) return message.reply("De genoemde gebruiker is niet gevonden!")

    var embedPrompt = new discord.MessageEmbed()
        .setTitle("Verificatie (reageer binnen 30 seconden)")
        .setColor("#470191")
        .setDescription(`Wil je ${banUser} verbannen uit de server?`)


    var embed = new discord.MessageEmbed()
        .setColor("#470191")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Verbannen gebruiker: ${banUser} (${banUser.id})
    Verbannen door:** ${message.author}
    **Reden: ** ${reden}`);


    message.channel.send(embedPrompt).then(async msg => {

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        if (emoji === "✅") {

            msg.delete();

            var banUserEmbed = new discord.MessageEmbed()
                .setTitle(`Je bent verbannen uit de: ${message.guild.name} server! `)
                .addField(`Met de volgende reden ben je verbannen:`, reden)
              




            banUser.send(banUserEmbed);

            banUser.ban({ reason: reden }).catch(err => {


                if (err) return message.reply("Er is iets fout gegaan!");
                





            });

            message.channel.send(embed)

            var logChannel = message.member.guild.channels.cache.find(channels => channels.name === "staff-logs")
            logChannel.send(embed)




        } else if (emoji === "❌") {
            var logChannel = message.member.guild.channels.cache.find(channels => channels.name === "staff-logs")

            msg.delete();
            message.reply("Geanuleerd!").then(m => m.delete(5000));

            var annuleerEmbed = new discord.MessageEmbed()
                .setTitle("**BAN GEANNULEERD!**")
                .setDescription(`De ban van: ${banUser} is geannuleerd!`)

            logChannel.send(annuleerEmbed)



        }






    });


}








async function promptMessage(message, author, time, reactions) {

    time *= 1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);




}


module.exports.help = {
    name: "ban"

}