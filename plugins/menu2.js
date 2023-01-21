
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
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
┗━━━━━━━━━━━━━┛
const pp = await (await fetch('https://i.ibb.co/1RS6nJf/Screenshot-20220519-091526.jpg')).buffer()
    
    conn.sendHydrated(m.chat, m2, '▢ ToxicVIP  ┃ ᴮᴼᵀ\n▢ \fg98._\n', pp, '', 'YouTube', null, null, [
     ['⏍ Info', '/botinfo'],
      ['⌬ Grupos', '/gpdylux']
    ], m)
    
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2'] 
//handler.register = true
export default handler
