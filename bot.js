const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.js");
const ms = require("ms")
const fs = require("fs");
const db = require("orio.db");
const disbut = require('discord-buttons');
disbut(client);
const chalk = require("chalk");
const express = require("express");

const app = express()


app.get('/', (req, res) => res.send('Poliéncé Başarıyla Aktif Oldu!')) 
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))


  client.login(ayarlar.TOKEN || process.env.TOKEN);

client.ayarlar = ayarlar

    client.on("message", async message => {
      let client = message.client;
      if (message.author.bot) return;

      let prefix = ayarlar.prefix;

      if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0].slice(prefix.length);
      let params = message.content.split(" ").slice(1);
      let cmd;
      if (client.commands.has(command)) {
        cmd = client.commands.get(command);
      } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
      }
      if (cmd) {
        cmd.run(client, message, params);
      }
    });


    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    fs.readdir("./komutlar/", (err, files) => {
      if (err) console.error(err);
      console.log(`Toplamda ${files.length} Komut Var!`);
      files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        console.log(`${props.help.name} İsimli Komut Aktif!`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
        });
      });
    });

    client.reload = command => {
      return new Promise((resolve, reject) => {
        try {
          delete require.cache[require.resolve(`./komutlar/${command}`)];
          let cmd = require(`./komutlar/${command}`);
          client.commands.delete(command);
          client.aliases.forEach((cmd, alias) => {
            if (cmd === command) client.aliases.delete(alias);
          });
          client.commands.set(command, cmd);
          cmd.conf.aliases.forEach(alias => {
            client.aliases.set(alias, cmd.help.name);
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    };

    client.load = command => {
      return new Promise((resolve, reject) => {
        try {
          let cmd = require(`./komutlar/${command}`);
          client.commands.set(command, cmd);
          cmd.conf.aliases.forEach(alias => {
            client.aliases.set(alias, cmd.help.name);
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    };

    client.unload = command => {
      return new Promise((resolve, reject) => {
        try {
          delete require.cache[require.resolve(`./komutlar/${command}`)];
          let cmd = require(`./komutlar/${command}`);
          client.commands.delete(command);
          client.aliases.forEach((cmd, alias) => {
            if (cmd === command) client.aliases.delete(alias);
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    };
    
client.on('message', async msg => {
  let prefix = ayarlar.prefix 
  if(msg.content == `<@!851328252428812338>`) return msg.channel.send(`> \<a:isiltilar:918137617059561513> Yardım Menüsü İçin: **.yardım**`);
});
client.on('ready', () => {
    client.user.setStatus("LISTENING");
 client.user.setActivity(`powered by Libertus`)
 console.log(`${client.user.tag} isimli bot başarıyla şu an aktifleştirildi!`);
});
