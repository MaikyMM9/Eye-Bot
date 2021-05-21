const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

message.channel.send("Hallo!").then(message.react(':white_check_mark:'))



}
module.exports.help = {
name: "Welkom"

}