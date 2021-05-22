const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.react('👍').then(() => message.react('👎'));

    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    message.awaitReactions(filter, { max: 1 })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '👍') {
                message.reply('you reacted with a thumbs up.');
            } else {
                message.reply('you reacted with a thumbs down.');
            }
        })
        .catch(collected => {
            message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
        });

message.channel.send("Hallo!")



}
module.exports.help = {
name: "Welkom"

}