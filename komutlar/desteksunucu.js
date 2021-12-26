const Discord = require("discord.js");

exports.run = (client, message) => {
  const Lytwest = new Discord.MessageEmbed()

    .setColor("GREEN")
    .setImage(
      "https://media.discordapp.net/attachments/896667967272648714/907509878837358602/image0-1-1-1-1-2.gif"
    )
    .setDescription(
      `

**\<a:isiltilar:918137617059561513> Botun Destek Sunucusuna Katılmak İçin;    [Buraya Tıkla!](https://discord.gg/VR9EtvrcXC)**`
    )

    .setFooter("⚡ powered by Libertus ~ https://discord.gg/VR9EtvrcXC")

  return message.channel.send(Lytwest).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek'],
  permLevel: 0
};

exports.help = {
  name: "desteksunucusu",
  description: "Destek Sunucusunu Gösterir.",
  usage: "desteksunucusu"
};




