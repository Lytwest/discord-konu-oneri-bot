const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**\<a:isiltilar:918137617059561513>   Öneri Bildirmek için Bir Öneri Yazınız.**')

const embed = new Discord.MessageEmbed()
.setTitle("Westeria Soru Önerim Sistemi")
	.setImage('https://media.discordapp.net/attachments/896667967272648714/907509878837358602/image0-1-1-1-1-2.gif')
.setColor('GREEN')
.setDescription(`**\<a:isiltilar:918137617059561513> Öneri Kanalı** ${message.channel.name} \n **\<a:isiltilar:918137617059561513>   Konu Önerilen Sunucu** \`${message.guild.name}\` \n **\<a:isiltilar:918137617059561513> Öneri Bildiren Kullanıcı** <@${message.author.id}> \n **\<a:isiltilar:918137617059561513>  Önerilen Konu :** \`${istek}\``)
client.channels.cache.get('924687066963517450').send(embed) //SUNUCU ID GİRİNİZ
  
message.channel.reply("\<a:isiltilar:918137617059561513>  Öneri Bildiriminiz İletildi, Teşekkürler.").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'soruöner',
  description: 'Soru Önerileri',
  usage: 'soruöner'
}
