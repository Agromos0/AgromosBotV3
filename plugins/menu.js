//let vn = './media/mariana.mp3
//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/menu-agromos-bot.mp3'
let menu =`
══〘 💚⚡💚⚡💚⚡💚 〙═╮
║═ *TOXIC VIP-𝐵𝑂𝑇*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
║⇎ *💚𝗛ola, ${username}💚*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
║⇎ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟 𝑑𝑒𝑙 𝐵𝑜𝑡: 𝐴NGEL YT* 
║⇎ *𝑁𝑢𝑚𝑒𝑟𝑜 𝑑𝑒𝑙 𝑐𝑟𝑒𝑎𝑑𝑜𝑟:* *wa.me/523931678470 (𝑁𝑜 𝐵𝑜𝑡)*
║⇎ *𝑁𝑢𝑚𝑒𝑟𝑜 𝑑𝑒𝑙 𝐵𝑜𝑡 𝑜𝑓𝑖𝑐𝑖𝑎𝑙:* *wa.me/18178659441 (𝑂𝐹𝐼𝐶𝐴𝐿 𝐷𝐸 ANGEL YT)*
╰══╡💚⚡💚⚡💚⚡💚╞══╯
┏━━━━━━━━━━━━━┓
║═ *INFORMACIÓN DEL BOT*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
┣ ➱💚 _${usedPrefix}creador_
┣ ➱💚 _${usedPrefix}donar_
┣ ➱💚 _${usedPrefix}bot_
┣ ➱💚 _${usedPrefix}infot_
┣ ➱💚 _${usedPrefix}help_
┣ ➱💚 _${usedPrefix}delete_
┗━━━━━━━━━━━━━┛`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇', '𝙼𝙴𝙽𝚄 𝙽𝚄𝙴𝚅𝙾', `#menunuevo`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'menu-agromos-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
