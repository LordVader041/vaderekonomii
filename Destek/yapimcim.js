const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Vader Ekonomi | Yapımcım")
.setDescription(`
**Botu Kodlayan** | **\` lordvader0 \`**

**Botun Sahibi** | <@594793510717358091>  


`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapimcim","yapımcı","yapimci"],
  };
  
  exports.help = {
    name: 'yapımcım'
  };
