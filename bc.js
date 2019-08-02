client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help") {
          const embed = new Discord.RichEmbed()
 
 
   .setColor('RANDOM')
  .setTimestamp()
.addField("⦁`#bc  --> 『 برودكاست الكل 』**`⦁",' ‎ ')
.addField("⦁`#bco --> 『 برودكاست وان الاين 』**`⦁",' ‎ ')
.addField("⦁`#bcs --> 『 يرودكاست كرسال عادى 』**`⦁",' ‎ ')
.addField("⦁`#bca --> 『 برودكاست الى رتب معين 』**`⦁",' ‎ ')
.addField("⦁`#bce --> 『 برودكاست متعداد بركشن 』**`⦁",' ‎ ')
.setFooter('HDD BOT')
 
 
   message.channel.send({embed});
 
    }
});


client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply(":pencil2: | **يجب عليك كتابة كلمة او جملة لإرسال البرودكاست ...**");
                    }
                        message.channel.send(`هل متاكيد من البرودكاست من رسال بردكاست خاص بك ..؟
						
						\nمحتوى الرسال: \`${args}\``).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ok_hand: | **تم رسال بروكاست** ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("")
                                            .addField(":triangular_flag_on_post: | **سيرفر**", message.guild.name)
                                            .addField(":incoming_envelope: | **مرسل**", message.author.username)
                                            .addField(":e_mail: | **رسالة**", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send(":x: | **تم الغاء برودكاست ...**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send(":x: | **للأسف لا تمتلك صلاحية `ADMINISTRATOR` ..**");
                }
                    if(!args) {
                        return message.reply(":pencil2: | **يجب عليك كتابة كلمة او جملة لإرسال البرودكاست ...**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ok_hand: | **تم رسال بروكاست** ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("")
                                            .addField(":triangular_flag_on_post: | **سيرفر** : ", message.guild.name)
                                            .addField(":incoming_envelope: | **مرسل** : ", message.author.username)
                                            .addField(":e_mail: | **رسالة** : ", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send(":x: | **تم الغاء برودكاست...**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});

client.on("message", message => {
    var prefix = "!";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bcs') {
        if (!args[1]) {
    message.channel.send(":pencil2: | ** رجاء اكتب رسال البرودكاست ... **");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle(':outbox_tray: | جاري ارسال رسالتك') 
            .addBlankField(true)
            .addField(':busts_in_silhouette: | عدد الاعضاء المرسل لهم', message.guild.memberCount , true)        
            .addField(':e_mail: | الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });
	
client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "bca")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("** قم بكتابة الرسالة 。。。 :pencil2:** | `！rolebc role message`")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply(":x: | **لا يوجد رتب بهذا اسم**")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(`${codes}`)
            })
            message.channel.send(`:white_check_mark: | **لقد تم ارسال هذه الرسالة الى ** ${message.guild.members.filter(m => m.roles.get(role.id)).size}** عضو**:busts_in_silhouette:`)
        }
    });
	
client.on('message', message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'bce')) {
     let filter = m => m.author.id === message.author.id;
 
 let recembed = new Discord.RichEmbed()
 .setTitle(`${client.user.username}`)
 .setDescription(`
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰
 🎖 | يرسل البرودكاست إلى دور محدد دون تضمين
 
 🏅 | يرسل البرودكاست إلى دور محدد باستخدام التضمين
 
 📭 | يرسل البرودكاست لجميع الأعضاء مع تضمين
 
 📧 | يرسل البرودكاست لجميع الأعضاء دون تضمين
 
 🔵 | يرسل البرودكاست للأعضاء عبر الإنترنت فقط دون تضمين
 
 🔷 | يرسل البرودكاست للأعضاء عبر الإنترنت فقط مع تضمين
 
 ❌ | لإلغاء العملية 
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰`)
 
 message.channel.sendEmbed(recembed).then(msg => { 
     msg.react('🎖')
     .then(() => msg.react('🏅'))
     .then(() => msg.react('📭'))
     .then(() => msg.react('📧'))
     .then(() => msg.react('🔵'))
     .then(() => msg.react('🔷'))
     .then(() => msg.react('❌'))

 
             let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
 
             let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
 
             let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
             let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
 
             let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8

             let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8

             let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
 
             let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
 
             let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
     
             let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
 
             let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });

             let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                 
             let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });

             let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
 
 embedonlineonly.on('collect', r => {

    let msge;
    message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
    
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
               msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
                   if(collected.first().content === 'نعم') {
   message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
   
   
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: | **برودكاست جديد**`)
           .addField('🔰 **سيرفر** 🔰', message.guild.name)
           .addField('🚩 **مرسل** 🚩', message.author.username)
           .addField('📜 **رسالة** 📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           m.send(`${m}`)
           
       })
   }})
   if(collected.first().content === 'لا') {
   message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: | **برودكاست جديد**`)
           .addField('🔰 **سيرفر** 🔰', message.guild.name)
           .addField('🚩 **مرسل** 🚩', message.author.username)
           .addField('📜 **رسالة** 📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
       })
   }
                 
   })
               })
           })
       })
 
       
 onlineonly.on('collect', r => {
    let msge;
    message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            msge = collected.first().content;
            msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {

                if(collected.first().content === 'نعم') {
message.channel.send(`**:white_check_mark: تم إرسال الرسالة الأعضاء :loudspeaker:**`);
                

message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`) 
m.send(`${m}`)       
        
    })
}
if(collected.first().content === 'لا') {
message.channel.send(`**:white_check_mark: تم إرسال الرسالة الأعضاء :loudspeaker:**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`) 
                
    })}
})
})
        })
    })
})

 embedmsg.on('collect', r => {
     let msge;
  message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
                 if(collected.first().content === 'نعم') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
 
 
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: | **برودكاست جديد**`)
         .addField('🔰** سيرفر **🔰', message.guild.name)
         .addField('🚩 **مرسل** 🚩', message.author.username)
         .addField('📜 **رسالة** 📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         m.send(`${m}`)
         
     })
 }})
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: تم إرسال الرسالة الأعضاء :loudspeaker:**`);
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: | **برودكاست جديد**`)
         .addField('🔰** سيرفر **🔰', message.guild.name)
         .addField('🚩 **مرسل** 🚩', message.author.username)
         .addField('📜 **رسالة** 📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
     })
 }
               
 })
             })
         })
     })
 
 
    
 
 
 
 normalmsg.on('collect', r => {
     let msge;
     message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'نعم') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
                 
 
     message.guild.members.forEach(m => {
 m.send(`${msge}`) 
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
     message.guild.members.forEach(m => {
         m.send(`${msge}`) 
                 
     })}
 })
 })
         })
     })
 })
 
 onlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit(':pencil2: **| الان يرجاء اكتب اسم رتب**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'نعم') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
                 
 
             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
 m.send(`${msge}`) 
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
         m.send(`${msge}`) 
                 
     })}
 })
 })
         })
     })
 })
 })
 });
 
 
 
 embedonlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit(':pencil2: |** الان يرجاء كتب اسم رتب**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'نعم') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
                 
 
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: | **برودكاست جديد**`)
         .addField('**🔰 سيرفر 🔰**', message.guild.name)
         .addField('**🚩 مرسل 🚩**', message.author.username)
         .addField('**📜 رسالة 📜**', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: | **برودكاست جديد**`)
         .addField('**🔰 سيرفر 🔰**', message.guild.name)
         .addField('**🚩 مرسل 🚩**', message.author.username)
         .addField('**📜 رسالة 📜**', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
                 
     })}
 })
 })
         })
     })
 })
 })
 })
     cancel.on('collect', r => {
         let cancelembed = new Discord.RichEmbed()
         .setTitle(':x: | **تم الإلغاء بنجاح**')
      message.channel.sendEmbed(cancelembed)
         embedmsg.stop();
         normalmsg.stop();
         onlyrole.stop();
         embedonlyrole.stop();
         embedonlineonly.stop()
         onlineonly.stop()
         cancel.stop();
     })
 })
    }});
    
    client.login(process.env.BOT_TOKEN);
