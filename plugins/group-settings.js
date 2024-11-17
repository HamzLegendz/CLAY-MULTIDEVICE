let handler = async (m, { conn, args, usedPrefix, command }) => {
    let groupAction = {
        'open': 'not_announcement',
        'close': 'announcement'
    }[(args[0] || '').toLowerCase()];

    if (!groupAction) {
        return conn.reply(m.chat, `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} open* - untuk membuka grup
  *○ ${usedPrefix + command} close* - untuk menutup grup
`.trim(), m);
    }

    await conn.groupSettingUpdate(m.chat, groupAction);

    let successMessage = groupAction === 'announcement'
        ? "🔒 Grup telah ditutup. Sekarang hanya admin yang bisa mengirim pesan."
        : "🔓 Grup telah dibuka. Semua anggota kini dapat mengirim pesan.";
    
    conn.reply(m.chat, successMessage, m);
};

handler.help = ['group *open / close*', 'gc *open / close*'];
handler.tags = ['group'];
handler.command = /^(group|gc)$/i;

handler.admin = true;
handler.botAdmin = true;

export default handler;