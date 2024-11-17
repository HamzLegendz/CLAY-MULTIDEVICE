import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let wktugeneral = `${wibh}:${wibm}:${wibs}`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/*============= MAIN INFO =============*/
global.owner = [['66962130137', 'Hamz', true]]
global.mods = ['6289520430523']
global.prems = []
global.nomorbot = '6289520430523'
global.nomorown = '66962130137'

/*============= WATERMARK =============*/
global.readMore = readMore
global.author = 'Hamz'
global.namebot = 'I Am Clay'
global.wm = '© Clay-MD'
global.watermark = wm
global.wm3 = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Sticker Dibuat oleh ${namebot}\ngithub.com/HamzLegendz\n{nomorbot}`
global.stickauth = `© Clay By Hamz`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

//*============= SOSMED =============*/
global.sig = 'https://www.instagram.com/hamz_corez'
global.sgh = 'https://github.com/HamzLegendz'
global.sch = 'https://whatsapp.com/channel/0029Vau1XlPIXnljXO4lPO3z'
global.sgc = 'https://chat.whatsapp.com/IoCVSJBXffE8UgrLpBAaSU'
global.url = 'https://chat.whatsapp.com/IoCVSJBXffE8UgrLpBAaSU'
global.sgw = 'https://yandex.com'
global.sdc = '-'
global.sfb = 'https://www.facebook.com/'
global.snh = 'https://www.instagram.com/hamz_corez'
global.ch = '🥏CLAY-MULTIDEVICE'
/*============= DONASI =============*/
global.pdana = '085272386405'
global.povo = '-'
global.pgopay = '085272386405'
global.plinkaja = '-'
global.ppulsa = '089520430523'
global.ppulsa2 = '-'
global.psaweria = 'https://saweria.co/HamzLegendz'
global.bank1 = '-'
global.bank2 = '-'


/*============= TAMPILAN =============*/
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '┅═┅═❏ *DASHBOARD* ❏═┅═┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============= RESPON =============*/
global.wait = 'Please Wait...'
global.eror = 'Error!'

/*============= WEB API KEY =============*/
global.openai = 'sk-svcacct-jl3x7VozgiY8NM0eFizMT3BlbkFJmGCv2XWMnLLcMzkVGueY'  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'HamzLegendz'  //openAI Organization name
global.xzn = 'HamzLegendz'

global.APIs = {
  // name: 'https://website'
  xzn : 'https://skizo.tech/',
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'

  'https://skizo.tech/' : 'HamzLegendz',
}
/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '99'
/*============= OTHER =============*/
global.namedoc = 'Clay-Md'
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.thumbdoc = 'https://files.catbox.moe/uc6pxk.jpg'
global.thumb = 'https://files.catbox.moe/uc6pxk.jpg' //Main Thumbnail
global.thumb2 = 'https://files.catbox.moe/xlznv7.jpg'
global.imagebot = 'https://files.catbox.moe/71bkwf.jpg'
global.giflogo = 'https://files.catbox.moe/uc6pxk.jpg'
global.thumbs = ['https://files.catbox.moe/uc6pxk.jpg']
global.thumbnailUrl = [
  '-'
]
global.foter1 = '    ⦅ CLAY-MULTIDEVICE ⦆   '
global.foter2 = 'Simple Bot Whatsapp By HamzLegendz'
global.foter3 = 'Clay-Md'
global.foter4 = 'HamzLegendz'
global.fotonya1 = 'https://files.catbox.moe/a1xihq.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://files.catbox.moe/uc6pxk.jpg' //ini juga ganti 
global.flaaa = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://files.catbox.moe/a6uayl.jpg']
global.thumblvlup = [
  'https://i.pinimg.com/originals/a0/34/8a/a0348ae908d8ac4ced76df289eb41e1a.jpg',
  'https://i.pinimg.com/originals/be/3b/47/be3b477371cc249e49fd0bb3284de7d7.jpg',
  'https://i.pinimg.com/originals/63/c3/37/63c337596b3391df0e72a9729ceca7b6.jpg',
  'https://i.pinimg.com/originals/db/ed/5a/dbed5afac55d266602d0ca0c67622bb9.jpg'
]

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

/*============= RESPON GAME =============*/
global.benar = 'Good Job! ◕◡◕'
global.salah = 'Not Bad! ◕◠◕'
global.dikit = "Dikit Lagi, Semangat!!"


/*============= RPG GAME =============*/
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
