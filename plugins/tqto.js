import { createHash } from 'crypto'
import fetch from 'node-fetch'

let mentions = [
 '6285624763201@s.whatsapp.net',
 '6283897383328@s.whatsapp.net',
 '628999389641@s.whatsapp.net'
];
let handler = async function (m, { text, usedPrefix, command }) {
  let cap = `*BIG THANKS TO*
    
Terutama Terimakasih Teruntuk Kang Penyedia Panel:
@${mentions[0].split('@')[0]}\n➸ @${mentions[1].split('@')[0]}\n\nTerimakasih Juga Untuk Kang Banned:\n➸ @${mentions[2].split('@')[0]}

─────────────────────
• Allah Swt
• My ortu
• King Of El-Manuk ( Me )
• Nurutomo
• Adiwajshing
• ShirokamiuRyzen (penyedia api)
• Yanxiao
• Lexxy Developer ( my Friends )
• Radzz ( my Friends )
• Renzsy ( my Friends )
• Aby ( My Friends )
• VisualX ( My Team )
• Asep
• Tio
• All Pengguna Bot
• Penyedia Layanan API Lainnya
• Orang-orang yang Support
─────────────────────`
conn.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: 'TQTO',
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: cap,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: sch,
            thumbnailUrl: global.thumb2,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: nomorbot
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363279451240749@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

conn.sendMessage(m.chat, {audio: fs.readFileSync('./vn/tqto.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
  
handler.tags = ['main']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}