const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {


    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Deze commando is alleen voor de staff leden!");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen permissie!");

    if (!args[0]) return message.reply("Er is geen gebruiker genoemd!");

    if (!args[1]) return message.reply("Er zijn geen redenen meegegeven!");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reden = args.slice(1).join(" ");

    if (!warnUser) return message.reply("De genoemde gebruiker is niet gevonden!");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Deze gebruiker kan geen waarschuwing ontvangen!");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0

    }

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), err => {

        if (err) console.log(err);
    });

    var warnEmbed = new discord.MessageEmbed()
        .setColor("#470191")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Gewarnde gebruiker: ${warnUser} (${warnUser.id})
         Gewarnd door:** ${message.author}
         **Reden: ** ${reden}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

    var logChannel = message.member.guild.channels.cache.find(channels => channels.name === "staff-logs")
   


    



    if (warns[warnUser.id].warns == 1) {

       
        logChannel.send(warnEmbed)
        warnUser.send(`Je hebt zojuist een waarschuwing ontvangen in de server: ${message.guild.name} met de volgende reden: ${reden}. Let op! Bij 3 waarschuwingen is een verbanning het vervolg!`)


    } else if (warns[warnUser.id].warns == 2) {

        logChannel.send(warnEmbed)

        var pasOpEmbed = new discord.MessageEmbed()
            .setColor("#470191")
            .setFooter(message.member.displayName)
            .setTimestamp()
            .addField("Pas op, nog 1 warn tot een verbanning. Aantal warns:", warns[warnUser.id].warns);
        message.channel.send(pasOpEmbed)
        warnUser.send(pasOpEmbed)



    } else if (warns[warnUser.id].warns == 3) {

     

        var verbannenUserEmbed = new discord.MessageEmbed()
            .setColor("#470191")
            .setFooter(message.member.displayName)
            .setTimestamp()
            .addField(`${warnUser.name} is verbannen wegens 3 warnings`, "U kunt deze verbanning intrekken in instellingen!")

            logChannel.send(verbannenUserEmbed);








        var banUserEmbed = new discord.MessageEmbed()
            .setTitle(`Je bent verbannen uit de: ${message.guild.name} server! `)
            .addField(`Met de volgende reden ben je verbannen:`, `te veel warnings`)


        warnUser.send(banUserEmbed);




        warnUser.ban({ reason: "Te veel warnings" }).catch(err => {


            if (err) return message.reply("Er is iets fout gegaan!");






        });







    }










}


module.exports.help = {
    name: "warn"

}