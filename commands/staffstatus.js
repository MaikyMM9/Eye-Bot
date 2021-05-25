const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    
    var modID = "843564244880195657";
    var membersWithModRole = message.guild.roles.cache.get(modID).members;

    var helperID = "843564244880195656";
    var membersWithHelpRole = message.guild.roles.cache.get(helperID).members;

   

   var genoegModerators = membersWithModRole.size == 2
   var genoegHelpers = membersWithHelpRole.size == 3



var statusEmbed = new discord.MessageEmbed()
.setTimestamp()
.setTitle("Status")
.setDescription("Dit is de status voor sollicitatie-aanvragen! Als er genoeg staff leden zijn hoef je niet te solliciteren!")
.addField("Mensen met de rol moderator:", membersWithModRole)
.addField("Mensen met de rol moderator:", membersWithHelpRole)
.addField("Moderators nodig:", "3")
.addField("Helpers nodig:", "4")
.setFooter("Eye");

message.channel.send(statusEmbed);



}
module.exports.help = {
name: "staffstatus"

}