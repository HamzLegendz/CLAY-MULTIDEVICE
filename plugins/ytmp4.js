import fetch from 'node-fetch';

const youtubeDownloader = {
  detail: async (url) => {
    try {
      const response = await (await fetch(`https://cdn59.savetube.su/info?url=${url}`)).json();
      const data = response.data;
      const result = {
        title: data.title,
        url: data.url,
        duration: data.durationLabel,
        thumbnail: data.thumbnail_formats[0].url,
        id: data.id,
        access: data.key,
      };
      return result;
    } catch (error) {
      return {
        status: false,
        message: error.message,
      };
    }
  },

  media: async (type, quality, key) => {
    try {
      const response = await (await fetch(`https://cdn51.savetube.su/download/${type}/${quality}/${key}`)).json();
      const data = response.data;
      if (data && data.downloadUrl) {
        return {
          url: data.downloadUrl,
        };
      } else {
        return {
          status: false,
          message: 'Download URL not found.',
        };
      }
    } catch (error) {
      return {
        status: false,
        message: error.message,
      };
    }
  },

  download: async (url) => {
    try {
      const data = await youtubeDownloader.detail(url);
      const { access } = data;
      const mediaResult = await youtubeDownloader.media('video', '720', access); // Always use 720p quality

      return {
        data,
        media: mediaResult,
      };
    } catch (error) {
      return {
        status: false,
        message: error.message,
      };
    }
  },
};

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let v = text;
  let input = `[!] *wrong input*
  
Ex : ${usedPrefix + command} https://youtube.com/watch?v=bzpXVCqNCoQ`;

  if (!text) return m.reply(input);

  // Call the download method from youtubeDownloader
  youtubeDownloader.download(v).then((result) => {
    if (result.status === false) {
      return m.reply(`[!] Error: ${result.message}`);
    }

    const video = result.media.url;
    const title = result.data.title;
    const duration = result.data.duration;
    const channel = result.data.id; // You can use the channel ID or modify based on available data
    const publish = 'Unknown'; // You can customize based on the available data
    const view = 'Unknown'; // You can customize based on the available data

    // Send the video file along with details in the message
    conn.sendFile(m.chat, video, title + '.mp4', `
乂 *Y T M P 4*

⚘ *Title* : ${title}
⚘ *Channel* : ${channel}
⚘ *Publish* : ${publish}
⚘ *Duration* : ${duration}
⚘ *Resolution* : 720p
⚘ *URL* : ${text}

${global.namebot}
`, m);
  }).catch((error) => {
    m.reply(`[!] Error: ${error}`);
  });
};

handler.help = ['ytmp4 <link yt>'];
handler.tags = ['downloader'];
handler.command = /^(ytmp4|ytv)$/i;
handler.limit = false;
handler.register = false;

export default handler;