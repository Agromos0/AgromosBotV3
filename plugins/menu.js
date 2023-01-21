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
║═ *𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
║⇎ *💚𝗛ola, ${username}💚*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
║⇎ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟 𝑑𝑒𝑙 𝐵𝑜𝑡: 𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃* 
║⇎ *𝑁𝑢𝑚𝑒𝑟𝑜 𝑑𝑒𝑙 𝑐𝑟𝑒𝑎𝑑𝑜𝑟:* *wa.me/523931806576 (𝑁𝑜 𝐵𝑜𝑡)*
║⇎ *𝑁𝑢𝑚𝑒𝑟𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡 𝑜𝑓𝑖𝑐𝑖𝑎𝑙²:* *wa.me/595983186566 (𝐸𝐿 𝑆𝐴𝑁𝑇𝐼 𝐵𝑂𝑇 𝑂𝐹𝐼𝐶𝐼𝐴𝐿 𝑌 𝐸𝑋 𝐴𝐶𝑇𝑂𝑅 𝑁𝑂𝑃𝑂𝑅)*
║⇎ *𝑁𝑢𝑚𝑒𝑟𝑜 𝑑𝑒𝑙 𝐵𝑜𝑡 𝑜𝑓𝑖𝑐𝑖𝑎𝑙:* *wa.me/18178659441 (𝑂𝐹𝐼𝐶𝐴𝐿 𝐷𝐸 𝐴𝐺𝑅𝑂𝑀𝑂𝑆)*
╰══╡💚⚡💚⚡💚⚡💚╞══╯
