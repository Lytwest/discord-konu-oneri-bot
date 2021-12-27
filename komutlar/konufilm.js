const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let west = ""
    var konusecici = [
"**\<a:isiltilar:918137617059561513> Netflix'de Hangi Tür Filmleri Seyrediyorsun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **7XAB7CE**",
"**\<a:isiltilar:918137617059561513> Hangi Platformlarda Film İzliyorsun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **8XAB7CE**",
"**\<a:isiltilar:918137617059561513> Sevmediğin Filmler Var mı?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **9XAB7CE**",
"**\<a:isiltilar:918137617059561513> Sevdiğin Film Var mı?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **9XAB7CE**",
"**\<a:isiltilar:918137617059561513> En Son Hangi Tür Filmleri İzledin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **6XAB7CE**",
"**\<a:isiltilar:918137617059561513> Aksiyon Filmlerini Beğeniyor musun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **5XAB7CE**",
"**\<a:isiltilar:918137617059561513> Komedi Filmlerini Beğeniyor musun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **4XAB7CE**",
"**\<a:isiltilar:918137617059561513> Recep İvedik Serisini Beğeniyor musun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **3XAB7CE**",
"**\<a:isiltilar:918137617059561513> Çocukken Hangi Tür Filmler İzlerdin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **2XAB7CE**",
"**\<a:isiltilar:918137617059561513> Osmanlı Konulu Filmleri Seviyor musun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **1XAB7CE**",
"**\<a:isiltilar:918137617059561513> En Sevdiğin Oyuncu - Aktör Kim?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **1BCBX7E**",
"**\<a:isiltilar:918137617059561513> En Sevdiğin Çizgi Film Nedir?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **1BCBX7E**",
"**\<a:isiltilar:918137617059561513> Gündelik Olarak Film İzler misin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **2BCBX7E**",
"**\<a:isiltilar:918137617059561513> Gündelik En Fazla Hangi Film Kanallarını İzlersin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **3BCBX7E**",
"**\<a:isiltilar:918137617059561513> Macera Türü Filmleri Sever misin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **4BCBX7E**",
"**\<a:isiltilar:918137617059561513> Netflix mi, BluTV mi?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **5BCBX7E**",
"**\<a:isiltilar:918137617059561513> Eğer Mümkün Olsaydı Hangi Aktör ya da Oyuncu Olurdun?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **6BCBX7E**",
"**\<a:isiltilar:918137617059561513> Sürekli Dizi İzler miydin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **7BCBX7E**",
"**\<a:isiltilar:918137617059561513> Aşk Türü mü, Komedi mi?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **8BCBX7E**",
"**\<a:isiltilar:918137617059561513> Anna Taylor Joy'un Filmlerini Sever misin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **9BCBX7E**",
"**\<a:isiltilar:918137617059561513> Stranger Things İzler misin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **1A7XLX7E**",
"**\<a:isiltilar:918137617059561513> En Son Hangi Filmi İzledin?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **2A7XLX7E**",
"**\<a:isiltilar:918137617059561513> Sana Hitap Eden Bir Dizi Var mı?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **3A7XLX7E**",
"**\<a:isiltilar:918137617059561513> Seni Derinden Etkileyen Bir Film Var mı?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **4A7XLX7E**",
"**\<a:isiltilar:918137617059561513> Televizyonda Karşında Filmden Fazla Reklam mı Çıkıyor?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **5A7XLX7E**",
"**\<a:isiltilar:918137617059561513> Eğer Bir Yönetmen Olsaydın Hangi Tür Film Yapardın?** \n \n \<:acikyildiz:918137606666080306> Soru ID: **4A7XLX7E**",
    ]
    var konusecici = konusecici[Math.floor(Math.random(1) * konusecici.length)]
    const embed  = new Discord.MessageEmbed()
    .setDescription(`${konusecici}`)
.setThumbnail(message.author.avatarURL())
.setDescription(`${konusecici}`)
.setAuthor(`Film Kategorisi İçin Rastgele Yazı Aşağıda Verilmiştir;`)
    .setFooter("BETA | powered by Libertus ~ https://discord.gg/VR9EtvrcXC")
.setColor('RANDOM');

    return message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kb-film'],
  permLevel: 0
};
exports.help = {
  name: 'konubulfilm',
  description: '',
  usage: 'konubulfilm'
};
