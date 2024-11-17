import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Kirim tautan TikTok yang ingin kamu unduh.`;
  m.reply(`⏳ Sedang memproses tautanmu...`);

  try {
    let response = await fetch(`https://api.ryzendesu.vip/api/downloader/ttdl?url=${text}`);
    if (!response.ok) throw `Gagal mengambil data. Pastikan tautan valid.`;
    let data = await response.json();

    if (data.code !== 0 || !data.data) throw `Gagal memproses tautan ini.`;

    let result = data.data;
    let video = result.play;
    let audio = result.music;
    let title = result.title || "Tidak ada judul.";
    let nickname = result.author?.nickname || "Tidak diketahui";
    let likeCount = result.digg_count || "0";
    let commentCount = result.comment_count || "0";
    let shareCount = result.share_count || "0";

    await conn.sendFile(
      m.chat,
      video,
      'tiktok.mp4',
      `📹 *Judul*: ${title}\n👤 *Pembuat*: ${nickname}\n👍 *Suka*: ${likeCount}\n💬 *Komentar*: ${commentCount}\n🔁 *Bagikan*: ${shareCount}`,
      m
    );

    await conn.sendMessage(m.chat, {
      audio: { url: audio },
      mimetype: 'audio/mpeg',
      ptt: true,
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    throw `Terjadi kesalahan saat memproses tautan ini. Silakan coba lagi nanti.`;
  }
};

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i;
handler.limit = true;
handler.register = true;

export default handler;