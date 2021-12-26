const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let csgopng = ""
    var konusecici = [
"**\<a:isiltilar:918137617059561513> Hangi Takımı Tutuyorsun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **7XAB7CE**",
"**\<a:isiltilar:918137617059561513> Futbolcu Olsaydın Hangi Takımda Oynardın?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **8XAB7CE**",
"**\<a:isiltilar:918137617059561513> En Sevdiğin Futbolcu?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **9XAB7CE**",
"**\<a:isiltilar:918137617059561513> En Sevdiğin Takım Nedir?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **9XAB7CE**",
"**\<a:isiltilar:918137617059561513> En Sevdiğin Stoper Futbolcu?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **6XAB7CE**",
"**\<a:isiltilar:918137617059561513> Fenerbahçe Hakkında Ne Düşünüyorsun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **5XAB7CE**",
"**\<a:isiltilar:918137617059561513> Sana Göre Bu Senenin Şampiyonu Kim Olur?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **4XAB7CE**",
"**\<a:isiltilar:918137617059561513> Ronaldo Sana Göre Messi'den İyi mi?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **3XAB7CE**",
"**\<a:isiltilar:918137617059561513> Şampiyonlar Ligi'nden Favori Takımın?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **2XAB7CE**",
"**\<a:isiltilar:918137617059561513> VAR Sistemini Adaletli Buluyor musun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **1XAB7CE**",
"**\<a:isiltilar:918137617059561513> Sana Göre Bu Sezon Kim Küme Düşer?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **1BCBX7E**",
"**\<a:isiltilar:918137617059561513> En Keyifli Oynanan Futbol Ligi Hangisi?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **1BCBX7E**",
"**\<a:isiltilar:918137617059561513> Sevmediğin Takım Var mı?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **2BCBX7E**",
"**\<a:isiltilar:918137617059561513> Trabzonspor'un Oynayışını Seviyor musun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **3BCBX7E**",
"**\<a:isiltilar:918137617059561513> Sana Göre Bu Yıl İlk 3'de Hangi Takım Yer Alır?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **4BCBX7E**",
"**\<a:isiltilar:918137617059561513> Süperlig'e Tahminen Hangi Takımlar Yükselir?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **5BCBX7E**",
"**\<a:isiltilar:918137617059561513> Muslera'yı Kaleci Olarak Beğeniyor musun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **6BCBX7E**",
"**\<a:isiltilar:918137617059561513> Altay'ı Kaleci Olarak Beğeniyor musun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **7BCBX7E**",
"**\<a:isiltilar:918137617059561513> Sence Futbol Şans Oyunu mu?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **8BCBX7E**",
"**\<a:isiltilar:918137617059561513> Beşiktaş'ı Şampiyon Olarak Görüyor musun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **9BCBX7E**",
"**\<a:isiltilar:918137617059561513> Sence İyi Atak Yapan Bir Takım Var mı?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **1A7XLX7E**",
"**\<a:isiltilar:918137617059561513> Konyaspor'u Şampiyon Adayı Olarak Görüyor musun? - 2021** \n \n \<:acikyildiz:918137606666080306> Soru ID: **2A7XLX7E**",
"**\<a:isiltilar:918137617059561513> Sana Hitap Eden Bir Takım Var mı?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **3A7XLX7E**",
"**\<a:isiltilar:918137617059561513> Seni Derinden Etkileyen Bir Gol Var mı?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **4A7XLX7E**",
"**\<a:isiltilar:918137617059561513> Maçları Hangi Platformda İzlersin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **5A7XLX7E**",
"**\<a:isiltilar:918137617059561513> Tek mi Maç İzlemek, Yoksa Ailecek mi?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **4A7XLX7E**",
    ]
    var konusecici = konusecici[Math.floor(Math.random(1) * konusecici.length)]
    const embed  = new Discord.MessageEmbed()
    .setDescription(`${konusecici}`)
.setThumbnail(message.author.avatarURL())
.setDescription(`${konusecici}`)
.setAuthor(`Spor Kategorisi İçin Rastgele Yazı Aşağıda Verilmiştir;`)
    .setFooter("BETA | powered by Libertus ~ https://discord.gg/Ur3a9Wt999")
.setColor('RANDOM');

    return message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kb-spor','konubul spor'],
  permLevel: 0
};
exports.help = {
  name: 'konubulspor',
  description: '',
  usage: 'konubulspor'
};