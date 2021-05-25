const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    

var statusEmbed = new discord.MessageEmbed()
.setTitle("Status")
.setTimestamp()
.setDescription("Dit is de status voor sollicitatie-aanvragen!")
.addField("Moderators nog nodig:", "1")
.addField("Helpers nog nodig:", "2")
.setFooter("Eye")

message.channel.send(statusEmbed);



}
module.exports.help = {
name: "staffstatus"

}