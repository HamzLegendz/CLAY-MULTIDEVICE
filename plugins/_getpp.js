import fetch from 'node-fetch';

let handler = async (m, { conn, command }) => {
    try {
        let who = m.isGroup 
            ? (m.mentionedJid[0] || m.quoted?.sender || m.sender)
            : (m.quoted?.sender || m.sender);
            
        let pp = await conn.profilePictureUrl(who, 'image').catch(() => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
        conn.sendFile(m.chat, pp, "profile.png", 'Selesai...', m, {
            jpegThumbnail: await (await fetch(pp)).arrayBuffer()
        });
    } catch {
        let pp = await conn.profilePictureUrl(m.sender, 'image').catch(() => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
        conn.sendFile(m.chat, pp, 'profile_fallback.png', "Selesai...", m, {
            jpegThumbnail: await (await fetch(pp)).arrayBuffer()
        });
    }
};

handler.help = ['getpp <@tag/reply>'];
handler.tags = ['group'];
handler.command = /^(getpp)$/i;

export default handler;