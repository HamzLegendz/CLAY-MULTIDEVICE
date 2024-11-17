import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `MASUKAN LINK!!!\n*Contoh:* ${usedPrefix}${command} https://www.mediafire.com/file/2v2x1p0x58qomva/WhatsApp_Messenger_2.24.21.8_beta_By_WhatsApp_LLC.apk/file`;
    
    conn.sendMessage(m.chat, { react: { text: "🔁", key: m.key } });

    try {
        let response = await fetch(`https://api.vreden.my.id/api/mediafiredl?url=${text}`);
        if (!response.ok) throw new Error(`Gagal mengunduh file, periksa kembali URL-nya.`);
        
        let result = await response.json();
        if (!result || result.status !== 200 || !result.result || !result.result[0].link) throw new Error(`File tidak ditemukan atau format data API tidak sesuai.`);

        const fileData = result.result[0];
        
        await conn.sendFile(m.chat, fileData.link, fileData.nama, 
            `*📑 Name:* ${fileData.nama}\n*🗃️ Ukuran:* ${fileData.size}\n*🗂️ Type:* ${fileData.mime}`, m
        );
        conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
    } catch (error) {
        conn.sendMessage(m.chat, `Error: ${error.message}`, m);
    }
}

handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.premium = false
handler.register = false

export default handler