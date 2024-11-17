import fetch from 'node-fetch';

const nodeToRegion = {
    ae1: '🇦🇪 United Arab Emirates',
    bg1: '🇧🇬 Bulgaria',
    br1: '🇧🇷 Brazil',
    ch1: '🇨🇭 Switzerland',
    cz1: '🇨🇿 Czech Republic',
    de1: '🇩🇪 Germany',
    de4: '🇩🇪 Germany',
    es1: '🇪🇸 Spain',
    fi1: '🇫🇮 Finland',
    fr2: '🇫🇷 France',
    hk1: '🇭🇰 Hong Kong',
    hr1: '🇭🇷 Croatia',
    id1: '🇮🇩 Indonesia',
    il1: '🇮🇱 Israel',
    il2: '🇮🇱 Israel',
    in1: '🇮🇳 India',
    ir1: '🇮🇷 Iran',
    ir3: '🇮🇷 Iran',
    ir5: '🇮🇷 Iran',
    it2: '🇮🇹 Italy',
    jp1: '🇯🇵 Japan',
    kz1: '🇰🇿 Kazakhstan',
    lt1: '🇱🇹 Lithuania',
    md1: '🇲🇩 Moldova',
    nl1: '🇳🇱 Netherlands',
    nl2: '🇳🇱 Netherlands',
    pl1: '🇵🇱 Poland',
    pl2: '🇵🇱 Poland',
    pt1: '🇵🇹 Portugal',
    rs1: '🇷🇸 Serbia',
    ru1: '🇷🇺 Russia',
    ru2: '🇷🇺 Russia',
    ru3: '🇷🇺 Russia',
    se1: '🇸🇪 Sweden',
    tr1: '🇹🇷 Turkey',
    tr2: '🇹🇷 Turkey',
    ua1: '🇺🇦 Ukraine',
    ua2: '🇺🇦 Ukraine',
    ua3: '🇺🇦 Ukraine',
    uk1: '🇬🇧 United Kingdom',
    us1: '🇺🇸 United States',
    us2: '🇺🇸 United States',
    us3: '🇺🇸 United States'
};

const handler = async (m, { text, conn }) => {
    if (!text) return conn.reply(m.chat, '```[🔍] .check-host url```', m);

    try {
        const response = await fetch(`https://check-host.net/check-http?host=${text}&max_nodes=43`, {
            headers: { 'Accept': 'application/json' }
        });
        const data = await response.json();
        const { request_id: requestId, permanent_link: reportLink } = data;

        conn.reply(m.chat, `Cek dimulai. ID Permintaan: ${requestId}\nTautan laporan permanen: ${reportLink}`, m);

        const response1 = await fetch(`https://check-host.net/check-result/${requestId}`, {
            headers: { 'Accept': 'application/json' }
        });
        const resultData = await response1.json();

        let results = '';
        for (const [node, data] of Object.entries(resultData)) {
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(result => {
                    const region = nodeToRegion[node.split('.')[0]];
                    if (region) {
                        results += `\n=========================\n📍 **Wilayah:** ${region}\n📶 **Status:** ${result[3]} ${result[2]}\n⏱️ **Waktu Respons:** ${result[1] * 1000} ms\n🌐 **IP:** ${result[4]}\n=========================\n`;
                    }
                });
            }
        }

        if (!results) {
            conn.reply(m.chat, 'Tidak ada hasil yang valid ditemukan.', m);
            return;
        }

        await conn.reply(m.chat, results, m);
    } catch (error) {
        conn.reply(m.chat, 'Gagal memulai cek HTTP. Silakan coba lagi nanti.', m);
    }
};

handler.help = ['check-host'];
handler.tags = ['tools'];
handler.command = /^(check-host)$/i;

export default handler;