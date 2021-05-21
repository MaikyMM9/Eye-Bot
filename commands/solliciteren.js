const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    //*solliciteren rol motiviatie
    if (!args[0]) return message.reply("Er is geen rol genoemd.");

    if (!args[1]) return message.reply("Er is geen motivatie bericht meegestuurd!");

    var rol = args[0];

    var motievatieBericht = args.slice(1).join(" ");

    var sollicitant = message.author;

    var logChannel = client.channels.cache.find(channels => channels.name === "staff-logs")

    message.author.send("Je sollicitatie is verzonden! Je aanvraag word bekeken door onze staff leden. Je hoort binnenkort of je bent aangenomen!")

    var aanvraagEmbed = new discord.MessageEmbed()
        .setTitle("Solicitatie aanvraag")
        .setDescription("Iemand heeft een solicitatie achtergelaten")
        .addField("De persoon:", sollicitant)
        .addField("Het motivatie bericht:", motievatieBericht)
        .setTimestamp()


        logChannel.send(aanvraagEmbed)

        client.on("messageReactionAdd", async (reaction, user) => {


            if(reaction.content === "✅"){



            }else if(reaction.content === "❌"){

                
            }

        });



}
module.exports.help = {
    name: "solliciteren"

}