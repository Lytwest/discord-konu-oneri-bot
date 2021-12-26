const Discord = require("discord.js");
const db = require("orio.db");

exports.run = async (client, message, args) => {
let prefix = client.ayarlar.prefix
      
let eklenti = new Discord.MessageEmbed()  
.setAuthor(``, client.user.avatarURL())
.setColor('GREEN')
 .setDescription(`
\<a:nokta:830441156151214090> **Konu Bul Sistemi**
Aşağıdaki Komutlardan Sorular Oluşturabilir, **Q&A** Yapabilirsiniz!
`)
.addField(`\<a:isiltilar:918137617059561513>   **Film Hakkında Konu**`,` \ **.kb-film** - Filmler Hakkında Soru Konuları Bulur.`,true)
.addField(`\<a:isiltilar:918137617059561513> **Spor Hakkında Konu**`,`\**.kb-spor** - Spor Hakkında Soru Konuları Bulur.\ `,true)
.addField(`\<a:isiltilar:918137617059561513>   **Karışık Konu Seçici**`,`\**.kb-karışık** - Karışık Soru Konuları Bulur (Spor,Tarih). `,true)
.addField(`\<a:isiltilar:918137617059561513>  **Destek Sunucusu**`,`\ **.destek** Botun Destek Sunucusuna Katılarak Yardım Al. `,true)
.addField(`\<a:isiltilar:918137617059561513>  **Soru Önerisi**`,`\ **.soruöner** Görmek İstediğiniz Soruları İletebilirsiniz. `,true)
.setImage('https://media.discordapp.net/attachments/896667967272648714/907509878837358602/image0-1-1-1-1-2.gif',true)
	.setFooter(`⚡ powered by Libertus ~ https://discord.gg/VR9EtvrcXC`)
.setTimestamp();
  message.react("\<a:beyaztik:861361647925723147>")

 message.channel.send(eklenti) 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',   
  description: '',
  usage: ''
};