import yts from 'yt-search';
import fetch from 'node-fetch';

const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    throw `*🛑 PERMINTAAN TIDAK LENGKAP!*\n\n*Contoh penggunaan:* \n> *${usedPrefix}${command} judul video*`;
  }

  await conn.sendMessage(m.chat, {
    react: { text: '🔍', key: m.key }
  });

  try {
    const res = await yts(text);
    if (!res || !res.all || res.all.length === 0) {
      throw '❌ Video tidak ditemukan. Coba judul lain.';
    }

    const video = res.all[0]; // Take the first result for better accuracy

    const { title, thumbnail, url, ago, views, timestamp, author } = video;
    const caption = `🎬 *YouTube Search Result*\n\n📡 *Judul:* ${title}\n⏱️ *Durasi:* ${timestamp}\n🔎 *Penonton:* ${views}\n🗃 *Diupload:* ${ago}\n📇 *Channel:* ${author.name}\n\n📥 *Mengirim audio, mohon tunggu...*`;

    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption,
      contextInfo: {
        externalAdReply: {
          title: '🎧 YouTube Audio',
          body: 'Audio sedang diproses...',
          previewType: 'PHOTO',
          thumbnail: await (await fetch(thumbnail)).buffer(),
          sourceUrl: url
        }
      }
    }, { quoted: m });

    const apiUrl = `https://api.vreden.my.id/api/ytmp3?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw `API request failed with status ${response.status} - ${response.statusText}`;
    }

    const data = await response.json();
    if (data.result && data.result.download && data.result.download.url) {
      const audioUrl = data.result.download.url;
      await conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    } else {
      throw '❌ Gagal mendapatkan audio dari API.';
    }

  } catch (error) {
    console.error('Error:', error);
    throw `Terjadi kesalahan: ${error.message || 'Kesalahan tidak diketahui'}`;
  }
};

handler.help = ['play'].map(v => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(play)$/i;
handler.limit = false;
handler.register = false;

export default handler;
