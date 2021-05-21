const discord = require("discord.js");


module.exports.run = async (client, message, args) => {



    if (!message.member.roles.cache.has('845293879339384852')) {
        return message.channel.send("Je beschikt niet over de Game-Pass")

    }

    if (message.member.roles.cache.has('845293879339384852')) {



        var ping = Date.now() - message.createdTimestamp + " ms";



        message.channel.send("Jouw ping is: `" + `${Date.now() - message.createdTimestamp}` + " ms`");

    }

}


module.exports.help = {
    name: "ping"
}