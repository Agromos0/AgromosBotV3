function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *Agromos*

  

  
  
  
  
  

  
  

  
 *≡ HELPERS*
  *Creador*
▢ ANGEL YT
▢ WhatsApp : wa.me/523931678470
  *Bot oficial*
▢ https://chat.whatsapp.com/GNgvKstDSQg3xeEGdXTQMu
▢ WhatsApp : wa.me/523931806576
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
