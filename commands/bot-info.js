const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Bot-info")
    .setDescription(`Hier is de info van eye!`)
    .setColor("#2c3e50")
    .addFields(
        { name: "Botnaam", value: client.user.username },
        { name: "Bot gemaakt door:", value: "Maiky#2099" },
        { name: "Bot gemaakt op", value: client.user.createdAt },
        { name: `Bot word gebruikt op zoveel servers:`, value: client.guilds.cache.size }


    );

return message.channel.send(botEmbed)






}
module.exports.help = {
    name: "bot-info"

}