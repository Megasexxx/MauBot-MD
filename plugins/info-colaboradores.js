let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://qu.ax/ZnYx.jpeg`
let vs12txt = `💫 *EQUIPO STAFF*
🥷 *Bot:* ${gt}
☁️ *Versión:* ${vs}

👑 *Propietario:*

• Diego-YL-177
☘️ *Rol:* Propietario
✨️ *Número:* ${nomorown}
🏆 *GitHub:* https://github.com/Diego-YL-177

💫 *Colaboradores:*

• GataNina-Li
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/593968263524
🏆 *GitHub:* https://github.com/GataNina-Li

• elrebelde21
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/573147616444
🏆 *GitHub:* https://github.com/elrebelde21

• KatashiFukushima
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/51948705559
🏆 *GitHub:* https://github.com/KatashiFukushima

• AzamiJs
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/5214434703586
🏆 *GitHub:* https://github.com/AzamiJs

• Alba070503
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/59169082575
🏆 *GitHub:* https://github.com/Alba070503

• Danixl.Js
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/595983799436
🏆 *GitHub:* https://github.com/DanixlJs ` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://telegra.ph/file/d727fd3d71f0937434021.jpg', 'cb.jpg', vs12txt.trim(),
//En esta imagen vas a poner el url de la imagen grande
 fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developer 👑`,
body: `💭 Staff Oficial`,
mediaType: 1,
sourceUrl: ig,
thumbnailUrl: img
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(staff|colaboradores)$/i
export default handler
