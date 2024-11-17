import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (conn, update) => {
    const { id: groupId, participants, action } = update

    // Hanya lanjutkan jika aksi adalah 'demote' (penurunan pangkat)
    if (action === 'demote') {
        // Ambil metadata grup untuk mendapatkan daftar admin terbaru
        const groupMetadata = await conn.groupMetadata(groupId)
        const admins = groupMetadata.participants.filter(p => p.admin).map(a => a.id)

        // Loop melalui peserta yang di-demote
        for (let demotedUser of participants) {
            // Temukan kemungkinan admin yang melakukan demote, jika dapat dideteksi
            const demoter = groupMetadata.participants.find(
                p => admins.includes(p.id) && !areJidsSameUser(p.id, demotedUser)
            )

            // Dapatkan JID dari admin yang melakukan demote atau beri nilai 'Tidak Diketahui'
            const demoterJid = demoter ? demoter.id : 'Tidak Diketahui'

            // Kirim pesan ke grup untuk menginformasikan tentang demote
            await conn.sendMessage(
                groupId, 
                { 
                    text: `Admin @${demoterJid.split('@')[0]} telah menurunkan pangkat @${demotedUser.split('@')[0]} menjadi anggota biasa.` 
                },
                { mentions: [demoterJid, demotedUser] }
            )
        }
    }
}

// Mendaftarkan handler untuk menangani event `group-participants.update`
handler.groupParticipantsUpdate = true

export default handler