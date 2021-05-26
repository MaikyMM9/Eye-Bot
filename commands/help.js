const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.reply("Je hebt zojuist de commands aangevraagd! Deze kun je vinden in je DM!")

    var commandsEmbed = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("white")
        .setTitle("De commands")
        .addField("De prefix van deze server is:", "*")
        .addField("*Welkom", "Deze command is om te testen of de bot het doet!")
        // .addField("*staffstatus", "Hiermee kun je de sollicitatie aanvragen checken!")
        .addField("*help", "Dit is om de commands op te roepen!")
        .addField("*server-info", "Hiermee krijg je de server info")
        .addField("*bot-info", "Hiermee krijg je de info van de bot!")
        .addField("*solliciteren <rol> <leeftijd> <motivatie bericht>", "Hiermee kun jij solliciteren voor een bepaalde rol!")
        .addField("**Staff commands**", "Hier onder vind je de commands voor staff-leden.")
        .addField("*warn <gebruiker> <reden>", "Hiermee kun jij iemand waarschuwen!")
        .addField("*aankondiging <bericht>", "Hiermee krijgt de hele server een melding over een mededeling/aankondiging!")
        .addField("*dm <gebruiker> <bericht>", "Hiermee stuur je via de bot een privé bericht naar de getagde gebruiker")
        .addField("*say <bericht>", "Hiermee kun jij de bot iets laten zeggen.")
        .addField("*embedsay <bericht>", "Hiermee Hiermee kun jij de bot iets laten zeggen, maar dan in een embed!")
        .addField("*clear <hoeveelheid>", "Hiermee verwijder je het aantal berichten wat je hebt opgegeven!")
        .addField("*kick <gebruiker> <reden>", "Hiermee kun je iemand verwijderen van de server(deze persoon kan wel weer deelnemen)")
        .addField("*ban <gebruiker> <reden>", "Hiermee kun je iemand permanent verbannen van de server")
        .addField("**Exclusieve Pass-Leden commands**", "Hier onder vind je de commands voor de Pass-Leden.")
        .addField("*ping" , "Laat jouw ping zien!");

        message.author.send(commandsEmbed)




}
module.exports.help = {
    name: "help"

}