import sjcl from 'sjcl';

let handler = async (m, { conn, command }) => {
    try {
        if (!m.quoted || !m.quoted.text) {
            return m.reply('❌ Balas pesan teks dengan perintah `.enc` untuk mengenkripsi teks tersebut!');
        }

        const text = m.quoted.text;
        const encryptedText = encrypt(text, 'HamzLegendz');
        await m.reply(encryptedText);

    } catch (e) {
        await m.reply('❌ Terjadi kesalahan: ' + (e.message || 'Kesalahan tidak diketahui'));
    }
};

handler.help = ['enc'];
handler.tags = ['tools'];
handler.command = /^\enc$/i;
handler.owner = true;
export default handler;

function encrypt(text, key) {
    const encrypted = sjcl.encrypt(key, text, {
        v: 1,
        iter: 100000, // Iterasi tinggi untuk keamanan ekstra
        ks: 256, // Ukuran kunci 256-bit untuk AES-256
        ts: 128, // Ukuran tag otentikasi lebih tinggi
        mode: 'ccm', // Mode CCM untuk enkripsi yang lebih aman
        salt: sjcl.random.randomWords(4, 0), // Salt acak untuk memperkuat keamanan
        iv: sjcl.random.randomWords(4, 0) // IV acak untuk tiap enkripsi
    });
    return JSON.parse(encrypted).ct; // Hanya mengembalikan bagian ciphertext
}
