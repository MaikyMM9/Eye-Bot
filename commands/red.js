const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("ADMINISTRATOR"))
    return;

    client.user.setStatus('dnd')



}
module.exports.help = {
name: "red"

}

