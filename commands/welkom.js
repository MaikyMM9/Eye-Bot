const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.delete();

message.channel.send("Hallo!").then(message.react('✅'))


}
module.exports.help = {
name: "Welkom"

}