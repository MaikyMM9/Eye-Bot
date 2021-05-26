const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    
    var modID = "843564244880195657";
    var membersWithModRole = message.guild.roles.cache.get(modID).members;

    var helperID = "843564244880195656";
    var membersWithHelpRole = message.guild.roles.cache.get(helperID).members;

   

//    var genoegModerators = membersWithModRole.size == 2
//    var genoegHelpers = membersWithHelpRole.size == 3



var statusEmbed = new discord.MessageEmbed()
.setTimestamp()
.setTitle("Status")
.setDescription("Dit is de status voor sollicitatie-aanvragen! Als er genoeg staff leden zijn hoef je niet te solliciteren!")
.addField("Mensen met de rol moderator:", membersWithModRole.size)
.addField("Mensen met de rol helper:", membersWithHelpRole.size)
.addField("Moderators nodig:", "3")
.addField("Helpers nodig:", "4")
.setFooter("Eye");

message.channel.send(statusEmbed);


setInterval(
    async () => {
      try {
        const message = await client.channels.get('847039423634735134').fetchMessage('847039600165781514')
        await message.edit(new Discord.MessageEmbed(statusEmbed).setDescription('Last Time updated: ' + getTime()))
      } catch (error) {
        console.error(error)
      }
    },
    1000
  )



}
module.exports.help = {
name: "staffstatus"

}