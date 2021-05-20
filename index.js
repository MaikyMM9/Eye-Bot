const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const levelFile = require("./data/levels.json");

const fs = require("fs");




const client = new discord.Client();
client.login(process.env.token);
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) comsole.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden!");

        return;

    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);

        console.log(`De file ${f} is geladen!`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});




client.on("ready", async () => {

    console.log(`${client.user.username} is ingelogd en online!`);


});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

    var discordInvite = JSON.parse(fs.readFileSync("./data/discordInviteFiltering.json"))

    var logChannel = message.member.guild.channels.cache.find(channels => channels.name === "staff-logs")

    var msg = message.content.toLowerCase();


    //     if (command === `Hey eye`)

    // if (message.member.name == Maiky)

    //         return message.channel.send("Hallo!")







    for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

        var theSwearWord = swearWords["vloekwoorden"][i]

        if (msg.includes(swearWords["vloekwoorden"][i])) {

            message.delete();

            var scheldUserEmbed = new discord.MessageEmbed()
                .setTitle("Een gebruiker heeft gescholden!")
                .setColor("#470191")
                .setFooter(message.member.displayName)
                .setTimestamp()
                .setDescription(`${message.author} was aan het schelden!`)
                .addField("In:", message.channel)
                .addField("Het scheldwoord:", theSwearWord)

            message.author.send(`Wil je in vervolg niet het woord: **${theSwearWord}** gebruiken in de **${message.guild.name}** server?`)



            return message.reply("Het gebruiken van scheldwoorden is niet toegestaan!").then(msg => msg.delete({ timeout: 3000 })).then(logChannel.send(scheldUserEmbed));



        }



    }


    for (let a = 0; a < discordInvite["invites"].length; a++) {

        var theSwearWord = discordInvite["invites"]
        var theInvite = discordInvite["invites"][a]

        if (msg.includes(discordInvite["invites"][a])) {

            message.delete();

            var inviteEmbed = new discord.MessageEmbed()
                .setTitle("Een gebruiker heeft gescholden!")
                .setColor("#470191")
                .setFooter(message.member.displayName)
                .setTimestamp()
                .setDescription(`${message.author} Heeft een invite gestuurd!`)
                .addField("In:", message.channel)
                .addField("Gedetecteerde trigger bericht:", message.content);
                

                message.author.send(`Wil je in vervolg niet een invite sturen in de **${message.guild.name}** server?`)



                return message.reply("Het sturen van invites is niet toegestaan!").then(msg => msg.delete({ timeout: 3000 })).then(logChannel.send(inviteEmbed));
    









        }



    }




















    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    RandomXp(message);



    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, arguments);

    // if (command === `${prefix}Welkom`)
    //     return message.channel.send("Dit is een test bericht!")



    if (command === `Welkom`)
        return message.channel.send("Hallo!")

});

function RandomXp(message) {

    var randomNumber = Math.floor(Math.random() * 15) + 1;

    var idUser = message.author.id;

    if (!levelFile[idUser]) {
        levelFile[idUser] = {
            xp: 0,
            level: 0

        }

    }

    levelFile[idUser].xp += randomNumber;

    var levelUser = levelFile[idUser].level;
    var xpUser = levelFile[idUser].xp;

    var nextLevelXp = levelUser * 300;

    if (nextLevelXp == 0) nextLevelXp = 100;

    if (xpUser >= nextLevelXp) {
        levelFile[idUser].level += 1;

        fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err => {

            if (err) console.log(err);
        });


    }


}