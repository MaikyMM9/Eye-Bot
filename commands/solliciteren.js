const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    //*solliciteren rol motiviatie
    if (!args[0]) return message.reply("Er is geen rol genoemd.");

    if (!args[1]) return message.reply("Er is geen leeftijd meegestuurd!");

    if (!args[2]) return message.reply("Er is geen motivatie bericht meegestuurd!");


    var rol = args[0];

    var leeftijd = args[1];

    var motievatieBericht = args.slice(2).join(" ");

    var sollicitant = message.author;

    var logChannel = client.channels.cache.find(channels => channels.name === "staff-logs")

    message.author.send("Je sollicitatie is verzonden! Je aanvraag word bekeken door onze staff leden. Je hoort binnenkort of je bent aangenomen!")

    var aanvraagEmbed = new discord.MessageEmbed()
        .setTitle("Solicitatie aanvraag")
        .setColor("yellow")
        .setDescription("Iemand heeft een solicitatie achtergelaten")
        .addField("De persoon:", sollicitant)
        .addField("Voor de rol:", rol)
        .addField("leeftijd:", leeftijd)
        .addField("Het motivatie bericht:", motievatieBericht)
        .setTimestamp()

    var accepteerEmbed = new discord.MessageEmbed()
        .setColor("green")
        .setTitle(`${sollicitant}`)
        .setDescription(`Dit is de uitslag van ${sollicitant} die solliciteerde voor de rol: ${rol} met de leeftijd: ${leeftijd}`)
        .addField(`De uitslag van de sollicitatie is:`, `aangenomen!`)
        .setTimestamp()

    var weigerEmbed = new discord.MessageEmbed()
        .setColor("red")
        .setTitle(`${sollicitant}`)
        .setDescription(`it is de uitslag van ${sollicitant} die solliciteerde voor de rol: ${rol} met de leeftijd: ${leeftijd}`)
        .addField(`De uitslag van de sollicitatie is:`, `geweigerd!`)
        .setTimestamp()


    const embedMessage = await logChannel.send(aanvraagEmbed);

    embedMessage.react('✅').then(() => embedMessage.react('❌'));

    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    embedMessage.awaitReactions(filter, { max: 1 })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '✅') {
                embedMessage.delete();
                sollicitant.send("Je aanvraag is bekeken door staff leden. De uitslag van je aanvraag is: **aangenomen**. Je krijgt zo snel mogelijk bericht")
                logChannel.send(accepteerEmbed)
            } else if (reaction.emoji.name === '❌') {
                embedMessage.delete();
                sollicitant.send("Je aanvraag is bekeken door staff leden. De uitslag van je aanvraag is: **niet aangenomen**. We begrijpen dat dit niet leuk is om te horen! Je mag na 2 maanden nog een keer solliciteren!")
                logChannel.send(weigerEmbed)
            }
        })






}
module.exports.help = {
    name: "solliciteren"

}