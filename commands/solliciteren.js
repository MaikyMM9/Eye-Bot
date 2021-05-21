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
        .addField("De persoon:", message.author)
        .addField("Het motivatie bericht:", motievatieBericht)
        .setTimestamp()


        logChannel.send(aanvraagEmbed).then(async msg => {

            var emoji = await promptMessage(msg, message.author, ["✅", "❌"]);
    
            if (emoji === "✅") {
    
                msg.delete();
    
                var accepteerEmbed = new discord.MessageEmbed()
                    .setTitle(`Je bent aangenomen op de: ${message.guild.name} server met deze rol: ${rol} `)
                    .setDescription("Je krijgt binnen nu en 1 dag een bericht.")
                  
    
    
    
    
                sollicitant.send(accepteerEmbed);
    
            
    
    
    
    
            } else if (emoji === "❌") {
                
    
                msg.delete();
                message.reply("Sollicitatie geweigerd!")
    
                var weigerEmbed = new discord.MessageEmbed()
                    .setTitle("**Sollicitatie geweigerd!**")
                    .setDescription(`Je sollicitatie aanvraag voor de rol: ${rol} op de ${message.guild.name} server is geweigerd! We begrijpen dat dit vervelen is om te horen. Je mag na 2 maanden nog een keer solliciteren!`)
    
                sollicitant.send(weigerEmbed)
    
    
    
            }
    
    
    
    
    
    
        });
    


}
module.exports.help = {
    name: "solliciteren"

}