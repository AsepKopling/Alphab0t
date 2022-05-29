const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa : 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz' : 'your key', // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

global.self_mode = false
global.autobio = false
global.msg_connected = false
global.user_register = true
global.anti_delete = false
global.anticall = true
global.auto_welcome_msg = true
global.auto_leave_msg = true
global.prefix = "."
global.language = "ind"
global.ownerNumberr = "6281233738677"
global.ownerbot = ['6281233738677@s.whatsapp.net','6285770800154@s.whatsapp.net'] // .owner
global.ownername = "FikriiSky𓅂"
global.botname = "Shark-Sky"
global.thumb = "thumbnail_1.jpg"
global.thumbnail ="thumbnail_2_1.jpg"
global.fakethumb ="thumbnail_1.jpg"
global.donasi ="donasi.jpg"
global.captionpay ="Scan untuk melakukan pembayaran"
global.fake = "「  ALPHABOT  」\nCreated By FikriiSky𓅂"
global.alphaVersion = [2, 2143, 3] //WhatsApp web version

/* Available type menu

['document', 'troli', 'troli2', 'katalog', 'katalog2', 'list', 'location', 'image']

*/
global.typeMenu = 'document'

//foto menu size maks 50kb
global.allmenu = 'https://telegra.ph/file/89ca848162fbe7c009aa5.jpg'
global.downloadcmd = 'https://telegra.ph/file/91804f4be4985dbbfd592.jpg'
global.groupcmd = 'https://telegra.ph/file/862554b09d8552d505dce.jpg'
global.convertcmd = 'https://telegra.ph/file/a949fd9866aa895e0ce03.jpg'
global.funcmd = 'https://telegra.ph/file/4715bfa5daa9e6eb67943.jpg'
global.makercmd = 'https://telegra.ph/file/8552cd21a44611d0b43eb.jpg'
global.othercmd = 'https://telegra.ph/file/318149b6907a8567fc15b.jpg'
global.ownercmd = 'https://telegra.ph/file/ba59f54d7fb877874abc7.jpg'
global.storagecmd = 'https://telegra.ph/file/d74d46ca5a786ce98bf3b.jpg'
global.tagcmd = 'https://telegra.ph/file/de12e2541d0365cc85754.jpg'
global.upcmd = 'https://telegra.ph/file/60ac1e56821c2243c1851.jpg'
global.cecancmd = 'https://telegra.ph/file/2e3607cd1260bb7cadac7.jpg'
global.telegramcmd = 'https://telegra.ph/file/9e2a7a4e3e328e3684457.jpg'
global.nsfwcmd = 'https://telegra.ph/file/dba8a85a60d4f209b2df3.jpg'
global.asupancmd = 'https://telegra.ph/file/5e9f5bc9d90caed691c60.jpg'
global.imageeffectcmd = 'https://telegra.ph/file/05bb235a3901692986bdd.jpg'
global.cogancmd = 'https://telegra.ph/file/4edf1aa0c350af73c8fe5.jpg'
global.quotescmd = 'https://telegra.ph/file/dfe5d96cb33c62c6cc0d6.jpg'
global.animecmd = 'https://telegra.ph/file/3205c94cc5ea33d1c1d8d.jpg'
global.textprocmd = 'https://telegra.ph/file/798b1ef2fb90fe8b0b9e3.jpg'
global.photooxycmd = 'https://telegra.ph/file/2af36841b2c9b1617040c.jpg'
global.soundcmd = 'https://telegra.ph/file/4063d52b77f5ce6fd24cc.jpg'
global.kerangcmd = 'https://telegra.ph/file/505ad8612db63cc241307.jpg'
global.primboncmd = 'https://telegra.ph/file/061a9fb8be8906952a605.jpg'
global.islamiccmd = 'https://telegra.ph/file/23894e22bceef35c768de.jpg'
global.ephoto360cmd = 'https://telegra.ph/file/216bcd11169a279e6f734.jpg'
global.logocmd = 'https://telegra.ph/file/8e86e6d28bb9db3dea40b.jpg'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	delete require.cache[file]
	require(file)
})
