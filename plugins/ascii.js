import figlet from 'figlet';

let handler = async (m, { conn, text }) => {
  // Memastikan ada teks yang dikirim
  if (!text) {
    throw 'Silakan kirim teks yang ingin diubah ke ASCII! Format: .ascii [Big ,Block , Speed, Lean, Slant, Doom, Ghost, Star Wars, Ivrit, Standard] <teks>';
  }

  // Daftar font yang dapat digunakan
  const availableFonts = ['Big', 'Block', 'Speed', 'Lean', 'Slant', 'Doom', 'Ghost', 'Star Wars', 'Ivrit', 'Standard'];
  
  // Memisahkan font dan teks
  let [font, ...asciiText] = text.split(' ');
  asciiText = asciiText.join(' ');

  // Memastikan font yang dipilih ada dalam daftar
  if (!availableFonts.includes(font)) {
    // Jika font tidak valid, beri tahu pengguna font yang tersedia
    throw `Font yang Anda pilih tidak valid. Gunakan salah satu font berikut:\n\n${availableFonts.join(', ')}`;
  }

  try {
    // Mengonversi teks ke ASCII menggunakan figlet dengan font yang dipilih
    const asciiResult = await new Promise((resolve, reject) => {
      figlet.text(asciiText, { font: font }, (err, result) => {
        if (err) {
          reject('Terjadi kesalahan saat mengonversi teks.');
        } else {
          resolve(result);
        }
      });
    });

    // Mengirim hasil ASCII ke chat
    await conn.sendMessage(m.chat, { text: asciiResult }, { quoted: m });
  } catch (err) {
    m.reply(err);
  }
};

handler.help = ['ascii <font> <teks>'];
handler.tags = ['tools'];
handler.command = /^ascii$/i;

export default handler;