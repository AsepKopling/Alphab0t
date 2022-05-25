/*

	あ GK KASI CREDIT YT ZEEONE OFC, GK USAH RE UPLOAD
	あ SUSAH" NGE FIX, LU CUMA NUMPANG NAMA DOANG
	
	あ JASA RUN HEROKU BISA PC wa.me/62887435047326 BIAR BOT NYA GAK TERLALU DELAY
	
*/   
require('./settings')
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ChatModification,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const os = require('os')
const axios = require('axios').default
const cheerio = require("cheerio")
const Util = require('util')
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const zee = require('xfarr-api')
const util = require('util')
const webp = require('node-webpmux')
const { error } = require("qrcode-terminal")
const ytdl = require('ytdl-core');

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const {animek, fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
const { parseMention } = require('./lib/simple')
const _sewa = require("./lib/sewa");
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { msgFilter } = require('./lib/antispam')
const { virtex, vipi } = require('./lib/virtex.js')
const setTtt = require('./lib/tictactoe.js')
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premiun");
const { bytesToSize, TelegraPh, telesticker, uploadImages } = require('./lib/uploadimage')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { list_aov } = require('./shop/aov')
const { list_cod } = require('./shop/cod')
const { list_sausage } = require('./shop/sausage')
const { list_lol } = require('./shop/lol')
const { list_valo } = require('./shop/valo')
const { list_price } = require('./shop/price')
const { allpayment } = require('./shop/allpayment')
const { pc_sewa } = require('./shop/sewa')
const { gcbotwa } = require('./shop/grupbot')
const { donasibot } = require('./shop/donasi')
const { infobot } = require('./shop/infobot')
const { jadibut } = require('./shop/jadibot')

const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const  _premium = JSON.parse(fs.readFileSync('./src/premiun.json'));
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync("./src/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const tictactoe = JSON.parse(fs.readFileSync("./src/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./src/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./src/tttlose.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const _nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./src/family100.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./src/siapakahaku.json'))
const tebakanime = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./src/tebakkalimat.json'))
const tebakkata = JSON.parse(fs.readFileSync('./src/tebakkata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./src/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./src/tekateki.json'))
const susunkata = JSON.parse(fs.readFileSync('./src/susunkata.json'))

const  sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'))


//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
var creator = ownername
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = ind //language
const Exif = require('./lib/exif')
const exif = new Exif()

zeksApikey = 'Alphabott' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya
thumbnail = thumb
pp_bot = fs.readFileSync(`image/${thumbnail}`)
pp_bot2 = fs.readFileSync(`image/${thumbnail}`)
hit_today = []
blocked = []
ban = []
limitawal = "50"
gcounttprem = "50" 
gcounttuser = "25" 

let multi = true
let nopref = false
let single = false
let prefa = prefix
let menusimple = false
let Mloc = false

banChats = self_mode
autorespon = true
offline = false
readGc = true 
readPc = false 
antitrol = false 
bugc = false
autovn = true
autoketik = false
autoregister = user_register
typemenu = typeMenu
baper = ownername
apiku = 'https://api.zeeoneofc.xyz/'
gc_wa_lu = 'https://chat.whatsapp.com/KpS9eHNALBs3mXXJGtzuZE' //klo gk punya gc wa gk usah di ganti 👍
targetpc = ownerNumberr
owner = targetpc
numbernye = '0'
waktu = 'Nothing'
alasan = 'Nothing'
botname = botname
ownername = ownername
peknem = ownername
ownerNumber = ownerNumberr
cr = ownername
petik = '```'
titik =`...`
enter ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

//Credit For 404 SQUAD ( Gk usah di hapus mek)
//Lingz
//Felix
//Lenz
//Arya
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		blocked
		m = simple.smsg(alpha, mek)
		let { isQuotedDocument} = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
			}
			const getCommandPosition = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
						}
						})
						if (position !== null) {
							return position
							}
					}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ' '
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
const reply2 = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await alpha.chatRead(jid)
})
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Gua mau kick tapi gua bukan admin 🤙`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n' + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (autovn) {
	if (autovn === false) return
await alpha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await alpha.updatePresence(from, Presence.composing)
}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''
        const isMedias = /image|video|sticker|audio/.test(m.quoted ? m.quoted.mtype : m.mtype)      
		const runtime = process.uptime() 
		const timestampi = speed();
		const latensii = speed() - timestampi
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]
		const ownerNumberr = [`${targetpc}@s.whatsapp.net`]
		const ownerNumberrr = `${targetpc}@s.whatsapp.net`
		const isOwner = ownerNumberr.includes(sender)
		const getGroupAdminss = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdminss(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const alphaNumber = [`62887435047326@s.whatsapp.net`, `918156874290@s.whatsapp.net` , `62857101331033@s.whatsapp.net`]
		const isCreator = alphaNumber.includes(sender)
		const isPremium = isOwner || isCreator || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
		const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply2(lang.benned())
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const ini_mark = `0@s.whatsapp.net`
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
					const belipremgame = (sender, asu) => {
						var found = false;
						Object.keys(glimit).forEach((i) => {
							if(glimit[i].id == sender){
								found = i
								}
							})
						if (found !== false) {
							glimit[found].glimit += asu;
							fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
							}
						}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}

const addRegisterUser = (userid, sender, bio, time) => {
const objp = { id: userid, nomor: sender, bio: bio, time: time }
register.push(objp)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const cekUser = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}

const isRegister = cekUser(sender)
					
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

					const addLevelingId = (sender) => {
						const obj = { id: sender, xp: 1, level: 1 }
						_level.push(obj)
						fs.writeFileSync('./src/level.json', JSON.stringify(_level))
						}
					const nebal = (angka) => {
						return Math.floor(angka)
						}
					function randomNomor(angka){
						return Math.floor(Math.random() * angka) + 1
						}
					const levelRole = getLevelingLevel(sender)
					const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
					//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    //by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
        if (isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
            const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + wib;     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
if (autobio){
if (autobio === false) return           
		    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptimer = clockString(_uptime);
      await alpha.setStatus(`I'm ${botname} 🤖 | ${uptimer} ⏰ | Status : ${status} | ${register.length} Users`).catch((_) => _);
      settingstatus = new Date() * 1;
    }}
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: '```[ ✓ ]``` Success',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
				admin: 'Only Group Admin',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
       const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `Whatsapp Bot 〽️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Whatsapp Bot 〽️\nBy ${ownername}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})}
           
       const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            alpha.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	alpha.sendMessage(from, hasil, type, options).catch(e => {
            	alpha.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
			
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}
			
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '62887435047326@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

//TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir (+${playScore} XP)` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await alpha.sendMessage(room.x, str, text, { contextInfo:{ mentionedJid: alpha.parseMention(str) } })
	    await alpha.sendMessage(room.o, str, text, { contextInfo:{ mentionedJid: alpha.parseMention(str) } })
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

    _sewa.expiredCheck(alpha, sewa)
    
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
if (!isRegister){
addRegisterUser(sender, pushname, '-', wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
}
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCreator && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply2("admin bebas");
        reply2("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        alpha.groupRemove(from, [sender]);
      }
    }
    if (isGroup && !isCmd && !mek.key.fromMe) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								await alpha.sendMessage(from, `* -----「 LEVEL UP 」-----*\n\n📛 *User :* ${pushname}\n🆔 *Nomer :* @${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* ${getBalance(sender, balance)}\n👛 *Dompet :* ${checkATMuser(sender)}\n✴️ *Role :* ${role}\n\nCongrats 🎉`,text, {quoted: mek, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
								}
							} catch (err) {
								console.error(err)
							}
						}
    alpha.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     alpha.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./image/${thumbnail}`), sendEphemeral: true, contextInfo:{mentionedJid:alpha.parseMention(ckck)}})
                }}}}})

        if (isGroup && !mek.key.fromMe) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        alpha.sendMessage(from, `Jangan tag, dia sedang afk\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {quoted:mek})
                       // alpha.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: alpha.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    alpha.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }

          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('s.whatsapp.net')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mpeg' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}  
for (let i = 0; i < filter.length ; i++) {
      if (budy == filter[i].Filter) {
      alpha.sendMessage(from, filter[i].Jawaban, text, {quoted: mek})
      }
      }  
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      alpha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
    };

// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakgambar`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
 // SIAPA AKU
if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `siapakahaku`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakkalimat[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkalimat`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebakkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK LIRIK
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebaklirik`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEKA TEKI
if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tekateki`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// SUSUN KATA
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete susunkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `susunkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete caklontong[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `caklontong`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// FAMILY 100
if (('family100'+m.chat in family) && !isCmd && !mek.key.fromMe) {
            kuis = true
            let room = family['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            alpha.sendMessage(m.chat, caption, text, { contextInfo: { mentionedJid: alpha.parseMention(caption) }}).then(mes => { return family['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete family['family100'+m.chat]
        }

// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakanime[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakanime`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
            if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in Private', 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
					}
           ////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		if (isCmd && isGroup){
		console.log('\x1b[1;31m~\x1b[1;37m>', '|\x1b[1;32m CMD \x1b[1;37m|', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		addBalance(sender, randomNomor(20), balance)
		const uangsaku = Math.floor(Math.random() * 10) + 90
		addKoinUser(sender, uangsaku)
			}	
			await alpha.updatePresence(from, Presence.available)
          if (!mek.key.fromMe && !isOwner && !isCreator && banChats === true) return
(function(_0x159b78,_0x4e8b0e){const _0x5f5c4a=_0x159b78();function _0x559026(_0xe9c2a9,_0x1f8127,_0x3d50ad,_0x3c81a3){return _0x2507(_0x3c81a3-0x26a,_0xe9c2a9);}function _0x28bffb(_0x4b1034,_0x5a1fa3,_0x2b066c,_0xf62aa5){return _0x2507(_0x2b066c-0xf,_0x4b1034);}while(!![]){try{const _0x15125a=parseInt(_0x559026(0x799,0x1008,0xe37,0xb60))/(0x1115+-0x55b*-0x4+-0x2680)*(parseInt(_0x559026(0xc31,0x745,0x547,0x977))/(-0x1876+0x5f*-0x2f+0x29e9))+parseInt(_0x28bffb(0x6db,0xd07,0x83f,0x90a))/(-0x2235+-0x1*0x5ed+0x2825)*(parseInt(_0x559026(0xab,-0x6e,-0x1f,0x4ab))/(0x1*-0x3c6+-0x2271+-0x1*-0x263b))+parseInt(_0x28bffb(0x301,0x819,0x534,0x489))/(-0x2547*0x1+0x1*-0x131d+0x3869)*(parseInt(_0x28bffb(0x1055,0xe08,0xb6f,0xc62))/(0x1c96+0x40+-0x1cd0))+-parseInt(_0x28bffb(-0x152,0x1c4,0x28e,0x1e))/(-0xdb*0x11+0x14f+0xd43)+parseInt(_0x28bffb(0x578,0x614,0x8c6,0xb82))/(-0x2334+0x18*-0x19b+-0x1*-0x49c4)+parseInt(_0x559026(0xf37,0xa72,0x8d8,0xaff))/(0x13cf+0x2454+-0x381a)+-parseInt(_0x28bffb(0x113,0x669,0x220,-0x105))/(-0x1387+-0x1ad6+0x1*0x2e67);if(_0x15125a===_0x4e8b0e)break;else _0x5f5c4a['push'](_0x5f5c4a['shift']());}catch(_0x1651a1){_0x5f5c4a['push'](_0x5f5c4a['shift']());}}}(_0x5b71,0x2cdb*-0x4+0x7ecb9*-0x1+0xcb336));const reply=_0x351b6e=>{function _0x51283b(_0x243577,_0x3e11ed,_0x36a9c5,_0x4bec1a){return _0x2507(_0x3e11ed-0x26,_0x36a9c5);}const _0x96b2af={};_0x96b2af[_0x4ed0af(0xff7,0xb19,0xe19,0xed3)]='PHOTO';function _0x4ed0af(_0x1dd7c6,_0x3a16fb,_0x471b28,_0xfbe0e4){return _0x2507(_0x3a16fb-0x245,_0xfbe0e4);}const _0x3a09a0=_0x96b2af;alpha[_0x51283b(0xa9a,0x93a,0x981,0xc53)+'e'](from,_0x351b6e,text,{'quoted':mek,'contextInfo':{'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':_0x3a09a0[_0x51283b(0xc1f,0x8fa,0x693,0x8d4)],'thumbnailUrl':'','thumbnail':fs['readFileSy'+'nc'](_0x4ed0af(0xc0f,0xa9c,0x6cd,0xaed)+thumbnail),'sourceUrl':''+apiku}}});};function _0x2507(_0x5366e3,_0x1cd1c0){const _0x4d8a93=_0x5b71();return _0x2507=function(_0x370d2d,_0x166057){_0x370d2d=_0x370d2d-(-0x1*0x1ced+-0x1767*-0x1+0x73b);let _0x49ba31=_0x4d8a93[_0x370d2d];return _0x49ba31;},_0x2507(_0x5366e3,_0x1cd1c0);}if(!isGroup&&!isCmd&&!command&&!mek['key']['fromMe']&&!autorespon){simi=await fetchJson(_0x150c54(0x1bc,0x5fe,0x5c5,0x522)+'i.simsimi.'+_0x150c54(0x9ac,0x9cf,0xdef,0xcd2)+_0x342471(0x54f,0x984,0xa6b,0xb1f)+_0x342471(0x1ab,0x2d0,0x674,0xa00)+cmd),sami=simi[_0x342471(0x376,-0x73,0x2fb,-0xe1)];const _0x4f20e8={};_0x4f20e8['forwarding'+'Score']=0x1fc,_0x4f20e8[_0x150c54(0x3fc,0xec,0x54a,0x4be)+'d']=!![],alpha['sendMessag'+'e'](from,'_'+sami+'_',text,{'thumbnail':fs['readFileSy'+'nc']('image/'+thumbnail),'sendEphemeral':!![],'quoted':mek,'contextInfo':_0x4f20e8});}const sendButDoc=async(_0x3c8ce6,_0x41c39c,_0x5c3201,_0x1f0261,_0x399652,_0x53451a)=>{const _0x45d9d5={};_0x45d9d5[_0x47b028(0xbda,0x861,0xd28,0x93f)]=_0x47b028(-0x11a,0x5e0,0x1f5,0x25e)+'utu.be/1O2'+_0x47b028(0x96f,0x316,0x8b7,0x6c1),_0x45d9d5[_0x474df1(0x964,0xc8d,0xc2b,0x82f)]=_0x47b028(-0x105,0x1c6,0x242,0x25e)+_0x47b028(0xcc,0x56d,0x807,0x2f5)+_0x474df1(0x4f7,0x497,0x46c,0x74c),_0x45d9d5['mPCtE']=_0x474df1(0x35a,0x5d,0x508,0x788)+_0x47b028(0x781,-0x1dc,0x172,0x2cd)+_0x474df1(0x109d,0xa48,0xc28,0xb4c),_0x45d9d5[_0x474df1(0x8ef,0xe69,0x984,0xa78)]=function(_0x40b65c,_0x3fe799){return _0x40b65c*_0x3fe799;},_0x45d9d5[_0x474df1(0x5e5,0x288,0x4a1,-0x36)]=_0x47b028(0xf4d,0x720,0x6c4,0xa71)+_0x474df1(0x10e9,0x8d3,0xdbc,0xca2)+_0x474df1(0x143,0x866,0x605,0x162)+'-officedoc'+_0x474df1(0x11ef,0xc97,0xdc0,0xaee)+_0x47b028(0x1c7,-0x20c,0x129,0x16a)+_0x474df1(-0x73,0x5dc,0x42a,0x7e5),_0x45d9d5[_0x474df1(0x1052,0x1067,0xb45,0x8a9)]=_0x47b028(0xe1a,0x6f8,0xda1,0xa71)+'n/vnd.open'+'xmlformats'+_0x474df1(0xc0a,0xb72,0xe3a,0xedd)+'ument.word'+_0x47b028(0x429,0x888,0x96b,0x835)+_0x474df1(0x31a,0xb9c,0x69f,0x96e)+'t',_0x45d9d5[_0x474df1(0x58d,0xe05,0x8d7,0x41c)]=_0x47b028(0x6de,0xa95,0x545,0xa71)+_0x47b028(0x951,0x994,0x9e0,0xb12)+_0x474df1(0x178,0x2e9,0x605,0x6cc)+_0x474df1(0xbde,0xe8f,0xe3a,0xa5a)+_0x474df1(0xbc2,0xda7,0x9f0,0x729)+_0x47b028(0xbd8,0x461,0xbb7,0x7da)+_0x474df1(0xfa9,0x114e,0xd46,0x1051)+_0x474df1(0x4b2,0x5e9,0x6b7,0x44e),_0x45d9d5[_0x474df1(0xbfd,0x604,0xb2b,0xdb0)]=function(_0x406c01,_0x9646ed){return _0x406c01*_0x9646ed;},_0x45d9d5[_0x47b028(0xcc0,0xb1d,0x995,0xaba)]=_0x47b028(0x8e0,0xa6c,0x5b2,0x90e)+_0x474df1(0x8aa,0x304,0x46d,0x91d)+'VF3r/5012f'+'bb87660.pn'+'g',_0x45d9d5[_0x47b028(-0xea,0x628,-0x18a,0x175)]=_0x47b028(0x5b1,0xd4e,0xba4,0x99b),_0x45d9d5[_0x474df1(0x6fa,0x5bf,0x6e2,0x2ba)]=_0x47b028(0x974,0xc29,0x87e,0xa05)+'u',_0x45d9d5[_0x474df1(0x969,0xc2d,0xb54,0xd0b)]=_0x474df1(0x33b,0x421,0x6b3,0x1d3),_0x45d9d5[_0x47b028(0x109,0x84e,0x1c1,0x53e)]=_0x47b028(0x7ec,0x59,0x1de,0x38c),_0x45d9d5[_0x474df1(0x94c,0xc3a,0x960,0x4ed)]=_0x474df1(0xd5d,0x611,0xa00,0x8c0)+_0x474df1(0x735,0x1e0,0x6b7,0x728),_0x45d9d5[_0x474df1(0xc4e,0x641,0x9fe,0x9a1)]=_0x474df1(0xa24,0x91c,0x9c3,0xaa8),_0x45d9d5[_0x474df1(0x6f7,0xbf9,0x974,0xc62)]=_0x474df1(0xae2,0xd38,0xbae,0xecf)+_0x47b028(0xd6b,0xb54,0x703,0x99c),_0x45d9d5['DFMgJ']=_0x47b028(0x86d,0x3de,0xa10,0x6ea)+'NkBAVg8GMe'+_0x47b028(0xf36,0x5d5,0xc89,0xab4)+_0x474df1(0xa9e,0x103a,0xdf2,0x978)+_0x47b028(0x549,0x6ac,0x166,0x3a7),_0x45d9d5[_0x474df1(0x107c,0x86d,0xcde,0x8f2)]=_0x474df1(0x802,0x6b1,0x743,0x415)+_0x47b028(0x2b9,0x6ec,0x9aa,0x4bc)+_0x474df1(0xbd8,0xad2,0x82d,0x366)+_0x47b028(0x3d6,-0xa6,0x668,0x37d)+_0x47b028(0x674,0x7a6,0x4f8,0x7cc);const _0xa31e42=_0x45d9d5,_0x99bca7=[_0xa31e42[_0x474df1(0xd24,0x753,0xbe9,0xc9f)],_0x47b028(0x104,0x552,0x62c,0x25e)+_0x47b028(0x17b,0x456,0x275,0x4dc)+_0x47b028(0x602,0xa3f,0xaee,0x833),_0xa31e42[_0x47b028(0xe0a,0xdb0,0x59f,0x981)],_0xa31e42[_0x47b028(0x29d,0x629,0x603,0x76a)]],_0x1c1700=_0x99bca7[Math[_0x47b028(-0xc,0x5c0,0x651,0x3e8)](_0xa31e42[_0x474df1(0x9fe,0x863,0x984,0x59d)](Math['random'](),_0x99bca7[_0x47b028(0x31a,-0x84,0x72,0x1a5)]))],_0x4470d9=['applicatio'+_0x47b028(0x107b,0xef6,0xa2f,0xb9a),_0xa31e42[_0x47b028(0x1dd,0x8b,-0x236,0x1f7)],_0xa31e42[_0x474df1(0xd2b,0xa76,0xb45,0xe2c)],_0xa31e42['fuxmN']],_0x4da83a=_0x4470d9[Math[_0x47b028(0x47,0x2ff,-0x5c,0x3e8)](_0xa31e42[_0x47b028(0x556,0xbe3,0x781,0x881)](Math[_0x47b028(0x9be,0x62,0x2af,0x503)](),_0x4470d9[_0x474df1(0x97b,0x572,0x44f,0x683)]))];try{pp_userb=await alpha[_0x474df1(0x4db,0x91b,0x9ee,0xe04)+_0x474df1(0xf98,0xa1c,0xab5,0xbf1)](sender);}catch{pp_userb=_0xa31e42[_0x474df1(0x975,0xcee,0xd64,0xcfb)];}pp_userz=await getBuffer(pp_userb);const _0x38661a={};_0x38661a[_0x474df1(0xaee,0xc8d,0xa06,0xaf2)]=_0xa31e42[_0x474df1(0x291,0x360,0x41f,0x935)],_0x38661a[_0x47b028(0xb69,0xd2e,0x7b6,0x91e)]={},_0x38661a['type']=0x1,_0x38661a[_0x47b028(0xb69,0xd2e,0x7b6,0x91e)][_0x47b028(0xc14,0xeb2,0x9e7,0x9ae)+'t']=_0xa31e42['lPZRm'];const _0x1f1e2e={};_0x1f1e2e['buttonId']=_0xa31e42[_0x474df1(0x702,0xbe4,0xb54,0x102e)],_0x1f1e2e[_0x47b028(0x9ec,0x8b7,0xa0a,0x91e)]={},_0x1f1e2e['type']=0x1,_0x1f1e2e[_0x47b028(0x9ec,0x8b7,0xa0a,0x91e)]['displayTex'+'t']=_0xa31e42[_0x474df1(0xc48,0x53c,0x7e8,0x81a)];const _0x138a74={};_0x138a74[_0x47b028(0x7c2,0x715,0x858,0x9ae)+'t']=_0xa31e42[_0x47b028(0x60f,0x9eb,0x607,0x6b6)];function _0x47b028(_0x1414f1,_0x1f4879,_0x85a2da,_0x4d3eef){return _0x342471(_0x85a2da,_0x1f4879-0xe,_0x4d3eef- -0x1b7,_0x4d3eef-0xef);}const _0x441502={};_0x441502[_0x47b028(0x62a,0x6f8,0x41d,0x75c)]='infobot',_0x441502[_0x474df1(0x10e1,0x8ee,0xbc8,0x741)]=_0x138a74,_0x441502[_0x474df1(0x1c5,-0xcf,0x461,0x184)]=0x1;const _0x440302=[_0x38661a,_0x1f1e2e,_0x441502],_0x3c7f21={};_0x3c7f21[_0x474df1(0xe0c,0xadc,0xd0c,0xdb6)+'t']=_0x41c39c,_0x3c7f21['footerText']=_0x5c3201,_0x3c7f21[_0x47b028(0xa47,0xabd,0x91e,0xa63)]=_0x440302,_0x3c7f21[_0x47b028(0x2f3,0x67c,0x177,0x39a)]=_0xa31e42[_0x47b028(0x9f0,0x818,0x902,0x754)],_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)]={},_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)][_0x474df1(0x733,0x345,0x4a9,0x6ba)]='https://mm'+_0x474df1(0x1e1,0x1db,0x502,0x876)+'.net/d/f/A'+'o-k40Q-gO_'+_0x474df1(0x886,0xb10,0x7f7,0x6a1)+_0x474df1(0xbbc,0xdb1,0xdbf,0x8ba)+_0x47b028(0x85,0x7bd,0x41c,0x341)+'eXI.enc',_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)]['mimetype']=_0x4da83a,_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)][_0x47b028(0x9ce,0x95,0x9e0,0x524)]=_0x474df1(0x670,0xa98,0x853,0xb82)+_0x47b028(0x865,0x1e9,0x882,0x698)+_0x474df1(0xbd3,0x726,0xbc2,0xbf0)+_0x47b028(0xc9e,0xddc,0x475,0x915)+_0x474df1(0x4b5,0x6fc,0x544,0xd9),_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)][_0x474df1(0x10c9,0xbbb,0xbc1,0x6fa)]=_0xa31e42[_0x474df1(0x4da,0x7e9,0x974,0xcff)],_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)]['pageCount']=0x3e7,_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)][_0x474df1(0x9ae,0xb9f,0xaf8,0xd69)]=_0xa31e42[_0x47b028(0x8e8,0xf1b,0x94b,0xaff)],_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)]['fileName']=botname+'\x20|\x20'+ownername,_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)][_0x47b028(0x5fd,0x578,0xc7a,0xa30)+_0x474df1(0x72e,-0xae,0x47e,0x920)]=_0xa31e42[_0x47b028(0x69c,0xe11,0x9b7,0xa34)],_0x3c7f21[_0x47b028(0x50d,0x90c,0x7ee,0x9cd)+_0x47b028(0x842,0x8a7,0x7c7,0x691)][_0x47b028(0x4e3,0x4e8,0x615,0x67b)+_0x474df1(0xad4,0xc71,0xdc1,0xaba)]=pp_bot2;const _0x1e9d79=_0x3c7f21,_0x8be20e={};_0x8be20e[_0x47b028(0x50f,0x65f,0x9e2,0x605)]=_0x1c1700,_0x8be20e[_0x47b028(0x585,0xa87,0x397,0x672)]=0x2,_0x8be20e[_0x47b028(0x30a,0x47e,0x323,0x608)]=''+ucapannya2,_0x8be20e[_0x474df1(0xbf5,0xa44,0xa96,0xf3b)]=''+tampilTanggal,_0x8be20e[_0x474df1(0xcd5,0x96a,0xb7d,0xc92)+'rl']='',_0x8be20e[_0x474df1(0x4a1,0x321,0x429,0x6a4)]=pp_userz;const _0x149603={};_0x149603[_0x47b028(0x468,0xe3c,0xbfc,0x916)+_0x47b028(0x709,0xa9b,0x7a0,0x870)]=0x3b9aca00,_0x149603[_0x474df1(0x6b4,0x2da,0x4ee,0x75b)+'d']=!![],_0x149603[_0x474df1(0xceb,0xf05,0xcfa,0x1047)+_0x474df1(0xae9,0xc5c,0x9f8,0xccd)]=!![];function _0x474df1(_0x264ec1,_0x38de2d,_0x18321a,_0x241a0f){return _0x342471(_0x241a0f,_0x38de2d-0x17d,_0x18321a-0xf3,_0x241a0f-0x33);}_0x149603[_0x47b028(0x4b2,0xe5b,0x894,0x931)+'id']=[_0x1f0261,_0x399652,_0x53451a],_0x149603[_0x47b028(0xc3,0x627,0x2ef,0x231)+_0x47b028(0x7b7,0x2b3,0x606,0x7a7)]=_0x8be20e;const _0x3ec03c={};_0x3ec03c[_0x474df1(0x682,0x500,0xa35,0xa6d)+'o']=_0x149603,_0x3ec03c[_0x474df1(0x1dc,0x6a6,0x4ed,0x16d)]=fgif,_0x3ec03c[_0x47b028(0xeee,0xd15,0x8b7,0xa50)+_0x474df1(0xf0c,0xbc4,0x9f8,0xb99)]=!![],alpha[_0x47b028(0x97d,0x754,0x7bc,0x88f)+'e'](_0x3c8ce6,_0x1e9d79,MessageType[_0x474df1(0x64b,0xf63,0xb62,0x886)+_0x47b028(0x458,0xa56,0x477,0x602)],_0x3ec03c);},sendButLocation=async(_0x3ac84e,_0x51ebc2,_0x4e46ea,_0x495556,_0x48d593=[],_0x30e54f={})=>{kma=_0x495556;function _0x22ac2f(_0x52f68c,_0x31ed77,_0x1588e2,_0x1e2940){return _0x342471(_0x1e2940,_0x31ed77-0xa,_0x1588e2-0x1af,_0x1e2940-0xfa);}const _0x1d2223=await alpha[_0x2e6eaa(0xb76,0xe72,0xfc8,0xc22)+_0x2e6eaa(0xcd3,0x5b4,0x97f,0x9c9)](_0x3ac84e,kma,MessageType['location'],{'thumbnail':kma});mhan=_0x1d2223[_0x22ac2f(0x827,0x710,0xa7e,0x9e0)][_0x2e6eaa(0xd70,0xb48,0xc67,0xdaa)+_0x22ac2f(0xf15,0xcc2,0xe5f,0x1341)]?_0x1d2223[_0x22ac2f(0x6a1,0xce9,0xa7e,0xd12)][_0x22ac2f(0xe20,0x10a3,0xd49,0xa94)+'essage']:_0x1d2223;const _0x232a3f={};_0x232a3f[_0x22ac2f(0x3fd,0x29b,0x626,0x9c3)+_0x2e6eaa(0xee5,0x97b,0xc17,0xa58)]=mhan[_0x2e6eaa(0xd12,0xf7b,0x5ad,0xadf)][_0x2e6eaa(0x79f,0xbac,0x5e9,0x687)+_0x22ac2f(0x74f,0xc8f,0x9f7,0xc9b)],_0x232a3f[_0x22ac2f(0x11fe,0x1094,0xdc8,0xb3f)+'t']=_0x51ebc2,_0x232a3f[_0x2e6eaa(0x73b,0xae0,0xa68,0x7f1)]=_0x4e46ea,_0x232a3f[_0x22ac2f(0xa15,0xab7,0xdc9,0xffe)]=_0x48d593,_0x232a3f['headerType']=0x6;function _0x2e6eaa(_0xe07ec8,_0x726433,_0x7a590b,_0x3b6b34){return _0x342471(_0xe07ec8,_0x726433-0x176,_0x3b6b34-0x210,_0x3b6b34-0x124);}const _0x2577d8=_0x232a3f;alpha[_0x2e6eaa(0x1097,0x884,0xa76,0xc56)+'e'](_0x3ac84e,_0x2577d8,MessageType[_0x22ac2f(0xb1c,0x6f6,0xc1e,0xb90)+_0x22ac2f(0xd8a,0xba2,0x968,0x47c)],_0x30e54f);},sendButVideo=async(_0x12523c,_0x2959d6,_0x3d311b,_0x4b8727,_0x2ceee3=[],_0x318571={})=>{const _0xd1a723={};function _0x14a8f6(_0x3e219f,_0x4dc48d,_0x1b0c8e,_0x17993f){return _0x342471(_0x1b0c8e,_0x4dc48d-0x1ed,_0x3e219f-0x12b,_0x17993f-0x1dc);}function _0x2edd6c(_0x2d48b8,_0x4201ba,_0x437cb1,_0x137712){return _0x342471(_0x437cb1,_0x4201ba-0x1e7,_0x2d48b8- -0x40f,_0x137712-0x1e5);}_0xd1a723['KSNAt']='ephemeralM'+_0x2edd6c(0x8a1,0xd5b,0xb26,0x807);const _0x13c1e2=_0xd1a723;kma=_0x4b8727;const _0x39f2ed=await alpha['prepareMes'+_0x2edd6c(0x3aa,0xe3,0x62b,0x881)](_0x12523c,kma,MessageType[_0x14a8f6(0x5b3,0x255,0x805,0x7c7)]);mhan=_0x39f2ed[_0x14a8f6(0x9fa,0x629,0xc6d,0x5d0)][_0x13c1e2[_0x2edd6c(0x6cd,0x406,0x676,0x867)]]?_0x39f2ed['message'][_0x14a8f6(0xcc5,0xdb8,0xe36,0x11fb)+_0x2edd6c(0x8a1,0x50a,0x567,0x40a)]:_0x39f2ed;const _0x20ebca={};_0x20ebca[_0x2edd6c(0x156,0x2d6,-0x11,-0x313)+'ge']=mhan[_0x14a8f6(0x9fa,0x710,0x790,0x96f)][_0x14a8f6(0x690,0x7c7,0x1da,0xac4)+'ge'],_0x20ebca[_0x2edd6c(0x80a,0x851,0xaa2,0xb25)+'t']=_0x2959d6,_0x20ebca[_0x14a8f6(0x70c,0x38f,0x8d1,0x9ac)]=_0x3d311b,_0x20ebca[_0x14a8f6(0xd45,0xe5c,0xabf,0x8d2)]=_0x2ceee3,_0x20ebca[_0x2edd6c(0x142,-0x357,-0x216,0x496)]=0x5;const _0x198de9=_0x20ebca;alpha['sendMessag'+'e'](_0x12523c,_0x198de9,MessageType[_0x14a8f6(0xb9a,0x1054,0x774,0x10a6)+_0x14a8f6(0x8e4,0x555,0x8ba,0x871)],_0x318571);},sendButImage=async(_0x2ff3b2,_0x10cd51,_0x5a81f4,_0x657d8,_0x5ce627=[],_0x9d20b4={})=>{const _0x167412={};_0x167412[_0x2df910(0xce9,0x3ce,0x535,0x83f)]='ephemeralM'+_0x2df910(0x13bf,0xbcc,0x1339,0xf12);const _0x20d0b8=_0x167412;kma=_0x657d8;const _0x5cd457=await alpha[_0x2df910(0x91c,0xf46,0xc46,0xc74)+_0x4a1745(0x91a,0x8db,0xaef,0xdf3)](_0x2ff3b2,kma,MessageType[_0x2df910(0xf17,0xa41,0xcea,0xafe)],{'thumbnail':Buffer[_0x4a1745(0x74d,0x29a,0xc51,0x4a2)](-0x724+0x1249+-0xb25)});function _0x4a1745(_0x5b4a44,_0x36f0d3,_0xf709cb,_0x416ac3){return _0x150c54(_0x5b4a44-0x1d1,_0x416ac3,_0xf709cb-0x6,_0x5b4a44-0x9e);}mhan=_0x5cd457['message'][_0x20d0b8[_0x4a1745(0x73e,0xb3f,0x5eb,0x7cf)]]?_0x5cd457[_0x4a1745(0xa30,0xccb,0xe0c,0x7c0)][_0x4a1745(0xcfb,0xf9c,0x827,0xe2b)+_0x4a1745(0xe11,0xbd5,0xec2,0xb83)]:_0x5cd457;const _0x1f3a86={};_0x1f3a86['imageMessa'+'ge']=mhan[_0x4a1745(0xa30,0x6e6,0x597,0xcd6)][_0x4a1745(0x53a,0x8b2,0x229,0x1c9)+'ge'];function _0x2df910(_0x3051e7,_0x334f2a,_0xf31766,_0x39830c){return _0x342471(_0x3051e7,_0x334f2a-0x79,_0x39830c-0x262,_0x39830c-0xc3);}_0x1f3a86['contentTex'+'t']=_0x10cd51,_0x1f3a86[_0x4a1745(0x742,0x466,0x407,0x77e)]=_0x5a81f4,_0x1f3a86[_0x2df910(0x1029,0x10e2,0x1006,0xe7c)]=_0x5ce627,_0x1f3a86[_0x2df910(0xa19,0xc89,0xa8f,0x7b3)]=0x4;const _0x3f4010=_0x1f3a86;alpha[_0x4a1745(0xba7,0xeff,0xaf0,0x968)+'e'](_0x2ff3b2,_0x3f4010,MessageType[_0x4a1745(0xbd0,0x8fe,0xe60,0x844)+_0x4a1745(0x91a,0x45f,0xc17,0xdd4)],_0x9d20b4);};if(autoregister){if(autoregister===![])return;const _0x3ec85a={};_0x3ec85a['displayTex'+'t']=_0x150c54(0x846,0x8b8,0x1c5,0x4a4);const _0x2ba6bd={};_0x2ba6bd[_0x342471(0xa53,0x974,0x913,0x53a)]=_0x150c54(0xab9,0x927,0x112f,0xc7d),_0x2ba6bd[_0x342471(0x733,0xfd2,0xad5,0xb8d)]=_0x3ec85a,_0x2ba6bd[_0x342471(0x898,0x7dc,0x36e,-0x5f)]=_0x342471(0x8f0,0x5a1,0x91a,0x3f9);const _0x591888={};_0x591888[_0x342471(0xd79,0x7df,0xb65,0xa32)+'t']=_0x150c54(0x1001,0xf1a,0x1047,0xd37)+_0x342471(0xb12,0xc1a,0x877,0xd0a);const _0x4c0f4c={};_0x4c0f4c['buttonId']='register\x20o'+'ff',_0x4c0f4c[_0x150c54(0x9d1,0x856,0x6d9,0xb98)]=_0x591888,_0x4c0f4c[_0x150c54(0xa4,-0xb5,-0xfe,0x431)]=_0x342471(0xb36,0xb03,0x91a,0x7df);let gaklopo=[_0x2ba6bd,_0x4c0f4c];if(isCmd&&!mek[_0x150c54(0xa67,0x58b,0x8f2,0x69f)][_0x150c54(0xe4d,0x616,0xdd7,0x987)]&&!isOwner&&!isCreator&&!isRegister)return sendButMessage(from,_0x150c54(0x653,0xe6b,0xafb,0xa1a)+sender[_0x342471(0x100a,0x100e,0xae2,0x6a2)]('@')[0x1*-0x11e4+-0x13f0+0x25d4]+(_0x150c54(0x1199,0xcc7,0xb4a,0xdad)+'m\x20terdafta'+_0x150c54(0x694,0x43b,0x777,0x890)+'\x20database.'+_0x150c54(0xee,0x382,0x5e1,0x46c)+'verifikasi'+_0x150c54(0x776,0x6fa,0xc0c,0x9a9)+_0x342471(-0xeb,0x792,0x424,0x3bc)+_0x342471(0xc77,0xba9,0xca4,0x10a5)+_0x150c54(0x103a,0xce3,0xa92,0xc86)+_0x150c54(0x55b,0x85e,0x318,0x836)+_0x342471(0x10aa,0x8e4,0xcd4,0x992)+_0x150c54(0x11a,0x5c1,0x190,0x60c)+_0x342471(0x8a2,0x13e,0x3e7,0x840)),'©\x20'+ownername,gaklopo,{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});}const sendTroli=async(_0x5d5cab,_0xd85680={})=>{const _0x2db264={};_0x2db264[_0x1c822a(0x4ab,0x959,0x5b7,0x86e)]=_0x1c822a(0x4f1,0x9c4,0x6ce,0xabd)+_0x1c822a(0x9d,-0x1ee,0x166,-0x370),_0x2db264[_0x1c822a(0xb1f,0x402,0x61b,0x612)]='3595319159'+_0x4b7b1d(0x41e,0x46,0x561,0x471),_0x2db264[_0x4b7b1d(0x448,0x7a6,0x885,0xda0)]='INQUIRY',_0x2db264[_0x4b7b1d(0x10d8,0xa9a,0xdec,0x109b)]=_0x1c822a(0xa5e,0x3a5,0x773,0x7c1),_0x2db264[_0x4b7b1d(0xd7d,0xbff,0xca7,0x859)]='ZEEONE\x20OFC',_0x2db264[_0x1c822a(0x422,-0x297,0xf6,0x228)]=_0x4b7b1d(0xfe0,0x10f5,0xc8a,0xfa1)+'4W5fYrjbea'+'kPiI3/Xxar'+_0x1c822a(0x869,0xacc,0x97d,0xb9c)+_0x4b7b1d(0xa9a,0x901,0xe14,0x958);function _0x4b7b1d(_0x4fa5b6,_0x3e1cf1,_0x5de6f0,_0x1e8bae){return _0x342471(_0x1e8bae,_0x3e1cf1-0x1d7,_0x5de6f0-0x17f,_0x1e8bae-0x153);}const _0x75fbd2=_0x2db264;let _0x218e47=fs[_0x4b7b1d(0x6f4,0x3f5,0x550,0x6c1)+'nc'](_0x4b7b1d(0xcb7,0xf3b,0xb08,0xf42)+thumbnail);imeu=await alpha['prepareMes'+_0x1c822a(0x4f4,0x46e,0x42c,0x2c)](_0x75fbd2[_0x4b7b1d(0xae0,0xfe3,0xac3,0xf58)],_0x218e47,image),imeg=imeu[_0x1c822a(0x1a9,0x9d2,0x542,0x916)]['imageMessa'+'ge'];const _0x40518f={};_0x40518f['forwarding'+_0x4b7b1d(0x10d6,0x78d,0xba6,0xa74)]=0x3,_0x40518f[_0x4b7b1d(0x5db,0x460,0x57a,0x4b8)+'d']=!![];function _0x1c822a(_0x4e7ab6,_0x1dc229,_0x4b5e76,_0x39cead){return _0x342471(_0x1dc229,_0x1dc229-0xb4,_0x4b5e76- -0x38d,_0x39cead-0xe);}res=await alpha[_0x4b7b1d(0x66b,0x687,0xb91,0xe1b)+_0x1c822a(-0x1b6,0x426,0x25d,0x36d)+_0x1c822a(-0x178,0x4f4,0x13e,-0x34b)](from,{'orderMessage':{'orderId':_0x75fbd2['GHdVA'],'thumbnail':fs['readFileSy'+'nc'](_0x1c822a(0xa63,0x21a,0x5fc,0x181)+thumbnail),'itemCount':0x7e5,'status':_0x75fbd2[_0x4b7b1d(0x940,0xa1c,0x885,0x9c5)],'surface':_0x75fbd2[_0x1c822a(0xb01,0x722,0x8e0,0xa3f)],'orderTitle':_0x75fbd2['ItByS'],'message':_0x5d5cab,'sellerJid':'6288743504'+'7326@s.wha'+_0x1c822a(0x71c,0xb2e,0x7a9,0xa3e),'token':_0x75fbd2[_0x1c822a(0x2d4,-0x3be,0xf6,0x5bd)],'contextInfo':_0x40518f}},_0xd85680),alpha[_0x4b7b1d(0x629,0x74a,0x56a,0x8c8)+_0x1c822a(0x19f,-0x6f,0x42c,0x857)](res);},sendTroli2=async(_0x25b8f1,_0x5a2d9b={})=>{function _0x457150(_0x522254,_0x4d036b,_0x57595b,_0x4b9a00){return _0x150c54(_0x522254-0xa0,_0x522254,_0x57595b-0x85,_0x4d036b- -0x5c6);}const _0xe050ad={};_0xe050ad[_0x465871(0x67c,0x63d,0x184,0x50b)]=_0x465871(0x1067,0xcf2,0x95a,0xd66)+_0x457150(-0x250,-0x10,0x345,0x360),_0xe050ad['LkefQ']=_0x465871(0x957,0x9e5,0xa7f,0x836);function _0x465871(_0x586acf,_0x43cb6b,_0x4df14f,_0x130383){return _0x150c54(_0x586acf-0x105,_0x130383,_0x4df14f-0x1f,_0x43cb6b-0x1d4);}_0xe050ad[_0x457150(0x525,0x2ff,0x1bf,0x3df)]=_0x457150(0xc6,0x5fd,0x685,0x966),_0xe050ad[_0x457150(-0x4b1,-0x77,0x2f2,-0x1c6)]='ZEEONE\x20OFC',_0xe050ad[_0x457150(0x92,0x13e,0x2f2,0x89)]='6288743504'+_0x465871(0x9cb,0x6ec,0x8f0,0x44a)+_0x465871(0xb81,0xdcd,0x12f2,0xa18),_0xe050ad[_0x465871(0x9c4,0xd00,0xe89,0xdb5)]=_0x465871(0x11b9,0xda2,0xfa9,0x10d6)+_0x457150(0x299,0x37b,0x401,0x7b5)+_0x457150(0x347,0x595,0x9f6,0x42e)+_0x457150(0x70d,0x807,0x4e0,0x32d)+'0FGwkw==',_0xe050ad[_0x457150(0x369,0x615,0x360,0xb44)]=_0x457150(0xe1,-0x215,-0x4d5,0x1b7),_0xe050ad['gMUSU']=_0x457150(-0x3f9,-0x95,-0xcb,-0x214);const _0x3f4f39=_0xe050ad;let _0x1ac656=fs[_0x465871(0x30a,0x668,0x7f8,0x35b)+'nc'](_0x457150(0x84f,0x486,0x130,0x44)+thumbnail);imeu=await alpha[_0x465871(0x11dd,0xca9,0x976,0xa76)+'sage'](_0x3f4f39[_0x457150(-0x1ca,-0x15d,-0x308,-0x39)],_0x1ac656,image),imeg=imeu[_0x457150(0x86c,0x3cc,0x3a4,0x474)]['imageMessa'+'ge'];const _0xbdbce5={};_0xbdbce5['forwarding'+_0x465871(0xca5,0xcbe,0xe95,0x1090)]=0x3,_0xbdbce5[_0x465871(0x781,0x692,0x515,0x199)+'d']=!![],res=await alpha[_0x457150(0xcc,0x50f,0x33a,0x5e2)+'sageFromCo'+_0x465871(0x263,0x762,0x267,0x302)](from,{'orderMessage':{'orderId':_0x457150(0x5cb,0x99,0x13,0x168)+'00587','thumbnail':fs[_0x457150(-0x616,-0x132,0x13,-0x53e)+'nc'](_0x465871(0x10cc,0xc20,0x7f7,0xfb4)+thumbnail),'itemCount':0x7e5,'status':_0x3f4f39['LkefQ'],'surface':_0x3f4f39[_0x465871(0x6bc,0xa99,0x896,0xaac)],'orderTitle':_0x3f4f39[_0x457150(-0x2dd,-0x77,0x133,0x59)],'message':_0x25b8f1,'sellerJid':_0x3f4f39[_0x465871(0x8ad,0x8d8,0x708,0xd2c)],'token':_0x3f4f39[_0x465871(0xdd9,0xd00,0xf88,0xde8)],'totalAmount1000':_0x3f4f39['EykQq'],'totalCurrencyCode':_0x3f4f39[_0x457150(0x5fd,0x264,0x2e8,0x20e)],'contextInfo':_0xbdbce5}},_0x5a2d9b),alpha[_0x457150(0x60,-0x118,0x8e,-0x26c)+_0x465871(0xd97,0xa50,0xd2e,0x563)](res);},sendKatalog2=async(_0x28f628,_0x126a64={})=>{const _0x2df9={};_0x2df9[_0x24a4d4(0xaee,0x781,0x684,0x77b)]=_0x279e0d(0x4ce,0x698,0x38c,0x489);const _0x1622db=_0x2df9;let _0xc5e57d=fs[_0x24a4d4(-0x63,-0x148,0x2cd,0x265)+'nc']('./image/'+thumbnail);imeu=await alpha['prepareMes'+_0x24a4d4(0x618,0x70f,0x58e,0x64d)](_0x24a4d4(0x831,0xc79,0xbde,0x8ef)+'pp.net',_0xc5e57d,image,{'thumbnail':_0xc5e57d}),imeg=imeu[_0x24a4d4(0x32d,0x22c,0x840,0x763)]['imageMessa'+'ge'];function _0x279e0d(_0x55a114,_0x15f684,_0x1bd82c,_0x178229){return _0x150c54(_0x55a114-0x1a1,_0x55a114,_0x1bd82c-0x1c6,_0x15f684- -0x1df);}const _0x4bcada={};_0x4bcada[_0x279e0d(-0x123,0x37f,0x1ee,0x19c)+'ge']=imeg,_0x4bcada['productId']=_0x24a4d4(0x2f8,0x7e1,-0x3d,0x430)+_0x24a4d4(0x2bb,0x394,-0x98,0x276),_0x4bcada[_0x24a4d4(0x955,0x434,0x905,0x653)]=_0x24a4d4(0x88c,0xa66,0xc3f,0x9ef)+'OT',_0x4bcada['descriptio'+'n']=_0x28f628,_0x4bcada[_0x279e0d(0x289,0x42f,0x858,0xe5)+'de']=_0x1622db[_0x24a4d4(0x594,0x458,0x6b8,0x77b)],_0x4bcada['priceAmoun'+_0x24a4d4(0xbbe,0xcc6,0xd4d,0xbe0)]=_0x279e0d(0x419,0x766,0xaf2,0x85d)+_0x279e0d(0x994,0xb08,0xf51,0xd8d)+_0x24a4d4(0xf10,0x7fc,0x65e,0xa37),_0x4bcada['productIma'+_0x279e0d(0xe8b,0x98f,0x942,0xc06)]=0x1;const _0x3ff2ce={};_0x3ff2ce[_0x24a4d4(0xa51,0x934,0xae9,0x961)+_0x24a4d4(0xb18,0xbaf,0xc4d,0x8bb)]=0x3e7,_0x3ff2ce[_0x279e0d(-0x3f,0x2df,-0xfc,0x6ac)+'d']=!![];const _0x58bf1d={};_0x58bf1d[_0x279e0d(0x97e,0xbae,0x8d9,0xa38)]=_0x4bcada;function _0x24a4d4(_0x1dcfe6,_0x1e7349,_0x2b0529,_0x4a5d91){return _0x342471(_0x2b0529,_0x1e7349-0x15,_0x4a5d91- -0x16c,_0x4a5d91-0x12e);}_0x58bf1d[_0x279e0d(0x2a2,0x40a,0x92d,-0x117)+_0x24a4d4(0x7a9,0x819,0x793,0x819)]=_0x24a4d4(0x6ca,0x7ff,0xc69,0xa2c)+_0x279e0d(0x4a6,0x339,0x174,0x5ab)+_0x24a4d4(0xe87,0xd41,0xbf0,0x9ca),_0x58bf1d[_0x24a4d4(0x83a,0x900,0x72b,0x7d6)+'o']=_0x3ff2ce;const _0x599aa3={};_0x599aa3[_0x24a4d4(0x629,0x3e2,0x4f4,0x778)+'sage']=_0x58bf1d,res=await alpha[_0x279e0d(0xbc8,0x8f6,0x3f1,0xb33)+_0x279e0d(0x53d,0x4ce,0x8fa,0x310)+_0x279e0d(-0x2a,0x3af,0x426,0x77)](from,_0x599aa3,_0x126a64),alpha['relayWAMes'+_0x279e0d(0x2fc,0x69d,0x6e0,0x476)](res);},sendKatalog3=async(_0x800177,_0x5751e5={})=>{const _0x5d0602={};_0x5d0602['WmvxA']='0@s.whatsa'+_0xfc7157(0x536,0x264,0x3b5,0x208),_0x5d0602[_0xfc7157(0x3ea,0xb5,0x160,0x3bf)]=_0xfc7157(0x587,0x726,-0xd,0x2b1)+_0xfc7157(0x2c8,-0x20,-0x3ed,0xf7),_0x5d0602[_0xfc7157(0x9d7,0xb51,0x6e8,0x639)]=_0xfc7157(0x8a5,0xb97,0xe55,0x929);const _0x5ab642=_0x5d0602;let _0x1396fa=fs[_0x496dae(0x378,0x38,-0x27,0x3f0)+'nc'](_0xfc7157(0x826,0x828,0x4a0,0x69e)+thumbnail);imeu=await alpha[_0xfc7157(0x28a,0x580,0xac2,0x727)+_0x496dae(0x764,0x420,-0x5,0x325)](_0x5ab642[_0x496dae(0x98,0x4cf,0x408,0x434)],_0x1396fa,image,{'thumbnail':_0x1396fa}),imeg=imeu[_0xfc7157(0xf3,0x87b,0x19e,0x5e4)]['imageMessa'+'ge'];const _0x2a3084={};_0x2a3084[_0x496dae(0x1da,0x102,0x39e,-0x301)+'ge']=imeg,_0x2a3084[_0xfc7157(0x5b2,0x49e,0x8eb,0x401)]=_0x5ab642[_0xfc7157(-0x113,0x873,0x63d,0x3bf)],_0x2a3084[_0xfc7157(0x6cb,0x8d8,0x977,0x4d4)]='ALL\x20MENU\x20B'+'OT';function _0xfc7157(_0x30a9d9,_0x265298,_0x523b4c,_0x530a32){return _0x150c54(_0x30a9d9-0x1b1,_0x523b4c,_0x523b4c-0x89,_0x530a32- -0x3ae);}_0x2a3084[_0xfc7157(0x3f9,0x7c5,0x960,0x4a0)+'n']=_0x800177,_0x2a3084['currencyCo'+'de']=_0xfc7157(0x1f4,0x652,0x206,0x4c9),_0x2a3084['priceAmoun'+_0xfc7157(0x7a8,0xbfe,0x5f2,0xa61)]='9999999',_0x2a3084[_0xfc7157(0x385,0xa7f,0x7eb,0x897)+_0xfc7157(0x7b7,0x937,0x7ab,0x4e3)]=_0x5ab642[_0xfc7157(0x40e,0x952,0x189,0x639)],_0x2a3084['productIma'+_0x496dae(0x933,0x712,0x27f,0x5c6)]=0x1;const _0x52f3cf={};_0x52f3cf['forwarding'+_0x496dae(0x67b,0x68e,0x704,0xa0e)]=0x3e7,_0x52f3cf['isForwarde'+'d']=!![];function _0x496dae(_0x56ba6d,_0x4125d1,_0x42ef0d,_0x519c9e){return _0x342471(_0x56ba6d,_0x4125d1-0x77,_0x4125d1- -0x399,_0x519c9e-0xb7);}const _0x5b4c33={};_0x5b4c33[_0x496dae(0x753,0x931,0x8ad,0x811)]=_0x2a3084,_0x5b4c33[_0xfc7157(-0x2c,-0xf3,0x3f9,0x23b)+_0xfc7157(0x9e9,0x25a,0x4d4,0x69a)]=_0xfc7157(0xb14,0x5a3,0x787,0x8ad)+_0xfc7157(-0x199,0x5a6,0x4a6,0x16a)+_0xfc7157(0x70b,0x66a,0x8f3,0x84b),_0x5b4c33[_0xfc7157(0x583,0x878,0x779,0x657)+'o']=_0x52f3cf;const _0x169ced={};_0x169ced[_0x496dae(0x2f7,0x54b,0x90a,0x7b0)+_0xfc7157(0x549,0x9b4,0x9f8,0x4ce)]=_0x5b4c33,res=await alpha['prepareMes'+_0x496dae(0x0,0x251,0x195,-0x42)+_0x496dae(-0x266,0x132,0x44e,0x4f0)](from,_0x169ced,_0x5751e5),alpha['relayWAMes'+_0x496dae(0x174,0x420,0x3da,0x31d)](res);},sendKatalog=async(_0x2cff2c,_0x135fe4,_0x29825f,_0x5e92de={})=>{const _0x2664ee={};_0x2664ee[_0x54be92(0xdec,0xd26,0xa9b,0x110b)]=_0x54be92(0x727,0x350,0x9f8,0x7a9)+_0x54be92(0x56d,0x586,0x911,0xa73),_0x2664ee['kPTTv']=_0x54be92(0xd9f,0x975,0x106e,0x1243),_0x2664ee['WDOZY']='6288743504'+_0x54be92(0x5e0,0x30e,0xa85,0x918)+_0x132478(0x45f,0x76e,0x6f5,0x5a4);const _0x39a39a=_0x2664ee;let _0x65d2b6=fs[_0x132478(-0xee,0x221,-0x70,-0x356)+'nc'](_0x54be92(0xb14,0x6f6,0x743,0xb5b)+thumbnail);imeu=await alpha[_0x54be92(0xb9d,0x1081,0xff0,0x7d0)+'sage'](_0x54be92(0xbe6,0xfb9,0xc51,0xeb5)+'pp.net',_0x65d2b6,image,{'thumbnail':_0x65d2b6}),imeg=imeu[_0x54be92(0xa5a,0x99d,0xd8a,0x87d)][_0x54be92(0x564,0x94,0x733,0x64b)+'ge'];const _0x2e1a85={};_0x2e1a85['productIma'+'ge']=imeg,_0x2e1a85[_0x54be92(0x877,0x650,0xbf1,0x79e)]=_0x39a39a[_0x132478(0xb41,0x4a6,0x820,0x9f1)],_0x2e1a85[_0x132478(0x67e,0x36e,0x37e,0x16c)]=_0x2cff2c;function _0x54be92(_0x1d1460,_0x155fd8,_0x3c441c,_0x15138a){return _0x342471(_0x3c441c,_0x155fd8-0x1b,_0x1d1460-0x18b,_0x15138a-0x1a3);}_0x2e1a85[_0x54be92(0x916,0x71d,0xd8d,0xce1)+'n']=_0x29825f,_0x2e1a85[_0x54be92(0x6d6,0x988,0x4d4,0x260)+'de']=_0x132478(0x693,0x41b,0x373,-0x38),_0x2e1a85[_0x132478(0xa02,0x19c,0x4f6,0x960)+_0x54be92(0xed7,0xf5d,0x1193,0xa27)]=_0x135fe4,_0x2e1a85[_0x54be92(0xd0d,0x9b4,0xec6,0xbe8)+_0x132478(0x80e,-0x45,0x38d,-0xd8)]=_0x39a39a[_0x132478(0x4eb,0x874,0x868,0x4c4)],_0x2e1a85[_0x132478(-0x2c7,0x566,0x5a,-0x65)+'geCount']=0x1;const _0x8dfc02={};function _0x132478(_0x458384,_0x999a8c,_0x138f34,_0x52dd54){return _0x150c54(_0x458384-0x12e,_0x999a8c,_0x138f34-0x6a,_0x138f34- -0x504);}_0x8dfc02[_0x132478(0xae6,0x6ff,0x68c,0x988)+_0x54be92(0xbb2,0x9aa,0xe6a,0xc79)]=0x3,_0x8dfc02[_0x54be92(0x586,0x3de,0x58c,0x455)+'d']=!![];const _0x3abb2a={};_0x3abb2a[_0x54be92(0xe55,0xb74,0x1311,0x11b5)]=_0x2e1a85,_0x3abb2a[_0x132478(-0x368,-0xf9,0xe5,-0x206)+_0x54be92(0xb10,0xec4,0x876,0xcbe)]=_0x39a39a[_0x54be92(0x788,0x4d2,0x541,0x815)],_0x3abb2a[_0x54be92(0xacd,0xdcf,0xbba,0x9bf)+'o']=_0x8dfc02;const _0x5be69a={};_0x5be69a['productMes'+_0x54be92(0x944,0xe24,0xbef,0x6eb)]=_0x3abb2a,res=await alpha['prepareMes'+_0x54be92(0x775,0x309,0x80f,0x3a5)+'ntent'](from,_0x5be69a,_0x5e92de),alpha[_0x132478(-0x71,-0x3a5,-0x56,0x44b)+_0x132478(0x1a9,0x1ef,0x378,-0x7)](res);},sendList=async _0x3ebdb5=>{const _0x21cfcb={};_0x21cfcb[_0x3448fd(0x76a,0x5fa,0x15b,0x54d)]=_0x3448fd(0x9f5,0x70a,0x110,0x513)+'ECT',_0x21cfcb['mgLtC']=_0x3448fd(0xc8e,0x86c,0x6d1,0x970)+'ot',_0x21cfcb[_0x3448fd(0x965,0x943,0xb97,0xa51)]=_0x3448fd(0x900,0x3ca,0x743,0x8e2)+'enu\x20bot',_0x21cfcb[_0x3448fd(0x482,0xa,0x615,0x2db)]=_0x3448fd(0xb65,0x1072,0xf77,0xcf4)+_0x3448fd(0x5ae,-0x97,0x44a,0x306),_0x21cfcb[_0x45e928(0x742,0x4db,0xb84,0x582)]='allmenu';function _0x3448fd(_0x1003f1,_0x36b6f1,_0x4e87b5,_0x3bfa8d){return _0x150c54(_0x1003f1-0x16,_0x4e87b5,_0x4e87b5-0x1e,_0x3bfa8d- -0x107);}_0x21cfcb[_0x3448fd(0xac0,0xc51,0x4a1,0x935)]='Sub\x20Menu\x20k'+_0x45e928(0x74c,0x3b7,0x7d0,0xb37),_0x21cfcb[_0x3448fd(0x6f4,0x645,0x433,0x70e)]='📩\x20〉ɞ\x20Downl'+_0x3448fd(0x7cc,0x423,0x5e,0x34c),_0x21cfcb[_0x3448fd(0x636,0x564,0x8d2,0x985)]=_0x3448fd(0xb62,0xbf2,0xc92,0x8aa)+_0x45e928(0x620,0xb15,0x38f,0x5a4)+_0x3448fd(0xd6a,0xef8,0x906,0xba1),_0x21cfcb['TSiDG']=_0x3448fd(0x870,0x6ba,0x5bb,0xa86)+'d',_0x21cfcb[_0x45e928(0x82a,0x4c2,0xb60,0x48d)]=_0x45e928(0xa48,0x794,0x7c1,0x9e0)+_0x3448fd(0xa0d,0x8f1,0x6fa,0x7da)+_0x45e928(0xab0,0x5e5,0xc33,0x689),_0x21cfcb[_0x3448fd(0x542,0xc6b,0x888,0x926)]='groupcmd',_0x21cfcb[_0x45e928(0xac8,0xb44,0xb2f,0x8c2)]=_0x3448fd(0xc92,0x943,0x377,0x7e1)+_0x45e928(0x4d3,0x11b,0x8ae,0x16c),_0x21cfcb['mUdZr']=_0x45e928(0x942,0x808,0xdbd,0xb96)+_0x45e928(0x622,0x9d2,0x85c,0x54a),_0x21cfcb['xXWMD']=_0x45e928(0x670,0x3b9,0xb29,0x628)+_0x3448fd(0xd33,0xca6,0xca6,0xc20)+'onvert_',_0x21cfcb['cKYXP']=_0x3448fd(0x6de,0x67e,0x63f,0xb2d),_0x21cfcb['KWrdX']='Sub\x20Menu\x20k'+_0x3448fd(0x87b,0x77e,0x4a6,0x4d0),_0x21cfcb[_0x3448fd(0x7e9,0x7b1,0x317,0x3a0)]=_0x45e928(0x5f0,0x871,0x44f,0xa06)+'enu',_0x21cfcb[_0x3448fd(0xde1,0x10e8,0xba3,0xbf4)]=_0x3448fd(0x506,0xd50,0x5dd,0x884)+'uk\x20bermain'+_0x3448fd(0x676,0x364,0x8d7,0x4eb)+'t_',_0x21cfcb[_0x3448fd(0x89a,0xb16,0xb16,0x988)]='funcmd',_0x21cfcb[_0x3448fd(-0xa9,0x50f,0x12c,0x301)]='Sub\x20Menu\x20k'+'e-5',_0x21cfcb[_0x45e928(0x6cf,0xa21,0x8f1,0x883)]=_0x45e928(0x15c,-0x1ff,0x405,0x335)+_0x45e928(0x38a,-0x7a,0x2b7,-0xc6),_0x21cfcb[_0x45e928(0x629,0xf4,0x260,0x4de)]=_0x3448fd(0xa8b,0x75f,0x1059,0xc75),_0x21cfcb[_0x3448fd(0xe25,0x686,0x673,0x996)]=_0x45e928(0x5a7,0xa16,0x151,0x590)+_0x3448fd(0x1e0,0x5a2,0xb4,0x34e),_0x21cfcb[_0x3448fd(0x193,0x185,0x1b8,0x5f9)]=_0x45e928(0x730,0x9fd,0x7e8,0xb5d)+_0x3448fd(0x210,0x154,0x90d,0x5c4);function _0x45e928(_0x3a4e2c,_0x570d57,_0x588840,_0x41fc25){return _0x342471(_0x570d57,_0x570d57-0x81,_0x3a4e2c- -0x27e,_0x41fc25-0x1b2);}_0x21cfcb['wZNKs']=_0x45e928(0x140,0x119,-0x1e2,0xca)+_0x45e928(0x47c,0x86,0x769,0x553)+_0x45e928(0xaaf,0x759,0xc20,0x78c)+_0x3448fd(0x512,0xf5,0x77,0x522),_0x21cfcb[_0x3448fd(0x7a5,0x586,0x768,0xa7d)]=_0x45e928(0x8dc,0x6e7,0xd7f,0x95d),_0x21cfcb[_0x45e928(0x32c,-0x1ed,0x528,0x83a)]=_0x45e928(0x3d1,0x437,0x2c2,0x28b)+'sus\x20owner\x20'+_0x45e928(0x75,0x212,-0x12a,0x513),_0x21cfcb[_0x45e928(0x57a,0x8c,0x7ce,0x7d7)]=_0x3448fd(0x884,0x6f9,0x702,0x667),_0x21cfcb[_0x45e928(0x1dd,0xa,-0x20b,-0x2c7)]=_0x45e928(0x5a7,0x96b,0x230,0xa4c)+'e-8',_0x21cfcb['tHKXE']=_0x3448fd(0x48f,0x778,0x1e9,0x43c)+_0x45e928(0x60a,0xa16,0x46c,0x624),_0x21cfcb[_0x45e928(0x5a5,0x967,0x89f,0x808)]=_0x45e928(0x323,0x7cf,0x38f,0x1a0),_0x21cfcb[_0x45e928(0xacb,0x6ee,0xf21,0xacc)]=_0x3448fd(0xc46,0x683,0xdc1,0xa59)+'enu',_0x21cfcb[_0x3448fd(0x31e,0xa7e,0xaa0,0x7dd)]=_0x3448fd(0x653,0xed5,0x6d7,0xb46)+_0x3448fd(0x495,0x585,0x1e9,0x4d5)+_0x45e928(0x3fb,0x923,0x19c,0x41d)+_0x3448fd(0x1014,0x648,0xe20,0xb2e),_0x21cfcb['QIibM']=_0x45e928(0x704,0xb4d,0x3b1,0x867),_0x21cfcb[_0x45e928(0x217,0x550,0x5d5,0x6c)]=_0x45e928(0x5a7,0x9d7,0xa94,0x441)+_0x3448fd(0x9ca,0xd98,0xb70,0x933),_0x21cfcb[_0x3448fd(0xcdf,0xc4d,0xe5a,0xa01)]=_0x45e928(0x3ae,0x725,0x610,0x22b)+'nu',_0x21cfcb[_0x45e928(0x2e2,-0x8e,0x3b1,0x739)]='_Mempostin'+'g\x20status\x20m'+'enggunakan'+_0x3448fd(0x6c6,0x2fb,0xcea,0x7c0),_0x21cfcb[_0x3448fd(0x471,0x678,0x624,0x740)]=_0x45e928(0xaae,0x9b0,0xb63,0x910),_0x21cfcb['MdBda']=_0x3448fd(0xc33,0x53a,0x7c0,0x7e1)+_0x3448fd(0x63c,0xaf3,0x3b0,0x72d),_0x21cfcb['HAKLj']=_0x3448fd(0x576,0x389,0x79d,0x75e)+'\x20Cecan',_0x21cfcb['tipnM']=_0x45e928(0x5a7,0x4b9,0x615,0x1c0)+_0x45e928(0xab4,0x7bb,0xe7b,0xf3a),_0x21cfcb[_0x3448fd(0xed8,0xb0a,0x8ec,0x9df)]=_0x3448fd(0x7f7,0x490,0x600,0x2e6)+_0x3448fd(0x484,0xadd,0x612,0x842)+'r',_0x21cfcb[_0x45e928(0x75e,0x9c3,0x39c,0x392)]=_0x45e928(0x1f2,0x19c,0x588,0xd6)+'d',_0x21cfcb['apyzU']=_0x3448fd(0xb01,0x9b6,0xc26,0x7e1)+_0x45e928(0x311,-0x173,-0x145,0x16c),_0x21cfcb['YINEP']=_0x45e928(0x493,0x923,0x857,0x10e)+_0x3448fd(0x810,0xa73,0x7fe,0x5d0)+'mengandung'+_0x3448fd(0x243,-0x2e,0x144,0x4ed)+'_',_0x21cfcb['rhQkD']=_0x45e928(0x862,0xcf0,0xad9,0xbd5),_0x21cfcb[_0x3448fd(0x3dc,0x501,0x4fb,0x7cc)]='Sub\x20Menu\x20k'+_0x45e928(0x6dc,0x9ae,0xbef,0x802),_0x21cfcb[_0x45e928(0x170,0x59e,0x1e3,-0x357)]=_0x3448fd(0x926,0x328,0x84a,0x427)+_0x3448fd(0x9f5,0x632,0xcc6,0x99d),_0x21cfcb[_0x3448fd(0x74b,0x9fb,0x6ac,0x8da)]=_0x3448fd(0x774,0xbf5,0xd73,0x887)+'deo\x20asupan'+_0x45e928(0x9ce,0x4b2,0xe84,0x947),_0x21cfcb[_0x3448fd(0x5de,0x424,0x3a7,0x48e)]=_0x45e928(0x7bd,0xb51,0x56c,0xa17),_0x21cfcb[_0x45e928(0x816,0x942,0xca5,0x31d)]='_Merubah\x20f'+'oto\x20menjad'+_0x3448fd(0x8ba,0x968,0x8ee,0x5b7)+_0x45e928(0x39f,0x86,0x344,0x191)+_0x45e928(0x9a2,0xc94,0x4d8,0x8ca)+'_',_0x21cfcb['lOuQC']=_0x3448fd(0x454,0x7f6,0x702,0x764)+_0x3448fd(0x219,0x99a,0x1f6,0x4df),_0x21cfcb[_0x3448fd(0xfed,0x94a,0xf8b,0xca5)]=_0x3448fd(0x2c9,0xba9,0xc62,0x7e1)+'e-16',_0x21cfcb[_0x45e928(0x9f0,0xa17,0x866,0xb57)]=_0x45e928(0x109,0x2a7,0x297,-0xd4)+_0x3448fd(0x78a,0x9ce,0xfcd,0xcbf),_0x21cfcb[_0x3448fd(0x64a,0xb98,0x704,0xa2c)]=_0x3448fd(0x980,0xd95,0xb9a,0xcfc)+_0x45e928(0x287,0x378,-0x1b9,-0x279),_0x21cfcb[_0x45e928(0x8c3,0x508,0xb43,0x981)]=_0x45e928(0x5a7,0x6fd,0x57e,0x4d4)+_0x45e928(0x3c9,0x6a1,0x704,0x55a),_0x21cfcb['sFyuv']=_0x45e928(0xa25,0x504,0x975,0x84a)+'s\x20Menu',_0x21cfcb[_0x45e928(0x626,0x25f,0xa3f,0xa0b)]='_Kata-kata'+_0x3448fd(0x510,0x402,0xad5,0x64c)+'&\x20menyesat'+'kan_',_0x21cfcb[_0x3448fd(0x9b,0x56c,0x51c,0x488)]=_0x45e928(0xa22,0xe37,0xc3f,0xc1d),_0x21cfcb['RHujn']=_0x3448fd(0x707,0xabc,0xb68,0x7e1)+_0x3448fd(0x5c6,0x1c5,0x4c7,0x2dc),_0x21cfcb[_0x45e928(0x189,-0x220,0x373,0x54a)]='👸\x20〉ɞ\x20Anime'+_0x45e928(0x38a,-0xa5,0x69a,0x10d),_0x21cfcb[_0x45e928(0x85b,0x6e2,0x992,0x829)]=_0x45e928(0x9ea,0x5c5,0x8f1,0x947),_0x21cfcb[_0x45e928(0x32a,0x678,-0xe0,0xdc)]=_0x45e928(0x5a7,0x4c0,0x640,0x1c7)+_0x3448fd(0x23c,0x1c5,0x1f1,0x4c5),_0x21cfcb[_0x45e928(0x278,0x73f,0x561,0x5fc)]=_0x3448fd(0xd9,0x25e,0xf4,0x2cc)+_0x45e928(0x701,0x36a,0x670,0x61d),_0x21cfcb[_0x3448fd(0xe46,0x55c,0xc88,0x910)]=_0x3448fd(0x7d3,0x6c0,0xad2,0x848),_0x21cfcb['wAhZy']=_0x3448fd(0x610,0x97f,0x69c,0x7e1)+_0x45e928(0x4ea,0x941,0x6e0,0x38e),_0x21cfcb[_0x45e928(0x77f,0xbf9,0xafd,0x648)]='🗯️\x20〉ɞ\x20Photo'+'oxy\x20Menu',_0x21cfcb['zWUwa']='_Logo\x20make'+_0x45e928(0x305,0x52b,0x2cd,0x698)+_0x3448fd(0xc73,0xa8b,0x74c,0xbb9),_0x21cfcb['HEwVa']=_0x3448fd(0x6c9,0x2b0,0x70b,0x7e1)+_0x45e928(0x9ac,0x499,0x679,0xcfe),_0x21cfcb[_0x3448fd(0xa56,0x5cd,0x486,0x6df)]='_Random\x20mu'+'sik\x20berdur'+_0x45e928(0xacc,0xc5e,0x9f5,0x632)+'_',_0x21cfcb['bnHMA']=_0x45e928(0xa07,0xbd9,0xd60,0xccb),_0x21cfcb[_0x3448fd(0x161,0x954,0x2bd,0x672)]=_0x45e928(0x5a7,0x684,0x459,0x3d8)+_0x3448fd(0x838,0x21a,0x10a,0x552),_0x21cfcb['mrgRP']=_0x3448fd(0x9ba,0xa40,0xb6f,0xc57)+_0x45e928(0x994,0x4f3,0xc33,0x85b),_0x21cfcb[_0x45e928(0x94,-0x23a,0xd,0x1f6)]=_0x3448fd(0x1030,0xaaa,0xaf5,0xbe9),_0x21cfcb[_0x45e928(0xab5,0xc21,0x5ae,0xcc5)]=_0x45e928(0x728,0x6c3,0x6a8,0x609)+_0x45e928(0x124,-0x131,0x398,0x2a3),_0x21cfcb[_0x3448fd(0x49f,0xb6a,0xac6,0x714)]=_0x3448fd(0xc0f,0xd18,0xe4b,0xb12)+_0x3448fd(0x6fc,0x480,-0x110,0x36c),_0x21cfcb[_0x45e928(0x5f6,0xaff,0x9bb,0x3de)]='primboncmd',_0x21cfcb[_0x45e928(0x14f,-0x9a,0x13e,0x627)]=_0x3448fd(0x7a4,0x475,0xab4,0x7e1)+_0x3448fd(0x5d3,0x958,0x318,0x5e7),_0x21cfcb['FdRNg']=_0x45e928(0x440,0x1f9,0x88e,0x218)+_0x45e928(0x853,0x6f5,0x326,0x997),_0x21cfcb[_0x45e928(0x244,0xb6,0x648,0x4ab)]='_Menampilk'+_0x45e928(0x5e9,0x4d1,0x90f,0x4df)+'lamic_',_0x21cfcb[_0x45e928(0x525,0x6cb,0x488,0x45)]=_0x45e928(0x182,-0x318,0x4e5,-0xeb),_0x21cfcb['okVIG']=_0x3448fd(0x9ef,0xd38,0xce2,0xcde)+_0x3448fd(0x9aa,0xd81,0x5d2,0x9ea)+_0x45e928(0x429,0x19f,0x159,0x94)+_0x45e928(0x45c,-0xc9,0x49,0x2ed)+_0x3448fd(0x217,0x7ae,0x3f2,0x682),_0x21cfcb[_0x3448fd(0x39,0x4b2,0x720,0x53e)]=_0x3448fd(0xc5a,0x102d,0x9b6,0xcb3)+'md',_0x21cfcb[_0x45e928(0x6d,0x433,0x4ee,0x60)]=_0x45e928(0x5a7,0x7b7,0x5b5,0x80e)+_0x3448fd(0x42c,0x21f,0x47c,0x6c3),_0x21cfcb[_0x3448fd(0x16f,0x2d3,0x41b,0x2ca)]=_0x3448fd(0x322,0x258,0xa0c,0x711)+'Maker',_0x21cfcb[_0x3448fd(0x95a,0x81e,0x590,0x94c)]=_0x45e928(0x2a0,-0x210,0x442,0x28c),_0x21cfcb[_0x3448fd(0x5ba,0x4ec,0x820,0x9fc)]=_0x3448fd(0x1181,0xd03,0x103b,0xc58)+_0x45e928(0x6de,0x234,0x8d5,0xa44),_0x21cfcb['oDnbh']=_0x45e928(0x578,0xa5b,0x412,0x848)+_0x45e928(0x914,0x86a,0x907,0xa56),_0x21cfcb[_0x3448fd(0x7a4,0xff,-0x42,0x45f)]=_0x45e928(0xac0,0x627,0x932,0x600)+'t\x20ini_',_0x21cfcb['qTFEq']=_0x45e928(0x819,0x77c,0xcc1,0x4a0)+_0x45e928(0x200,0x248,-0x28a,0x6d6),_0x21cfcb[_0x45e928(0x75b,0x6c3,0xa41,0x77e)]='_Orang²\x20ya'+_0x3448fd(-0xcd,0x6bb,0x136,0x462)+_0x3448fd(0x7c5,0xd81,0x7fe,0xc48)+'usi\x20dalam\x20'+_0x3448fd(0x13c,0x302,0x30a,0x649);const _0x3aa42a=_0x21cfcb;let _0x49cf61=alpha[_0x3448fd(0x8c1,0xbeb,0x765,0x9ce)+'sageFromCo'+'ntent'](from,{'listMessage':{'title':'LIST\x20MENU\x20'+_0x45e928(0x877,0x47b,0x6bd,0x355),'description':_0x45e928(0x134,0x4d2,0x1bf,-0x183)+sender[_0x3448fd(0x786,0xc1f,0x671,0xa9e)]('@')[0xf98*-0x2+0x2686*0x1+0x1*-0x756]+(_0x3448fd(0x601,0xa87,0xb97,0x98b)+_0x45e928(0x2ad,0x18b,0x72a,-0xde)+_0x45e928(0x9b9,0x758,0x982,0xe37)+'\x20ini\x20adala'+'h\x20list\x20men'+'u\x20bot\x20sila'+_0x3448fd(0x14d,0x1a9,0x5ce,0x341)+_0x3448fd(0x9aa,0xc2e,0xbe1,0x89f)+_0x45e928(0xa39,0x834,0x604,0xcc4)),'buttonText':_0x45e928(0x3fe,0x73a,0x2e8,0x8d6)+'E','footerText':'©\x20'+creator,'listType':_0x3aa42a[_0x3448fd(0x76,0x64f,0x77f,0x54d)],'sections':[{'title':_0x3aa42a[_0x3448fd(0xc38,0x8ec,0xa20,0xcd8)],'rows':[{'title':_0x3aa42a['tTtYt'],'description':_0x3aa42a['QgELa'],'rowId':_0x3aa42a['UbWHp']}]},{'title':_0x3aa42a[_0x45e928(0x6fb,0x6f4,0xa82,0x765)],'rows':[{'title':_0x3aa42a[_0x3448fd(0x997,0x32b,0x300,0x70e)],'description':_0x3aa42a[_0x3448fd(0x5d5,0xab9,0x6ae,0x985)],'rowId':_0x3aa42a[_0x3448fd(0xcf8,0xef0,0x531,0x9db)]}]},{'title':_0x3448fd(0xa49,0xc2f,0x76a,0x7e1)+_0x45e928(0x1d5,0x5ac,-0xde,0x334),'rows':[{'title':_0x45e928(0x65a,0x3df,0xa88,0x14c)+'\x20Menu','description':_0x3aa42a[_0x3448fd(0x6c8,0xc4e,0x7e4,0xa64)],'rowId':_0x3aa42a[_0x3448fd(0x5e3,0x81a,0x4d1,0x926)]}]},{'title':_0x3aa42a[_0x45e928(0xac8,0x88a,0xc3d,0xac9)],'rows':[{'title':_0x3aa42a[_0x3448fd(0x67a,0xc7e,0x9cb,0xa6d)],'description':_0x3aa42a['xXWMD'],'rowId':_0x3aa42a[_0x45e928(0xe8,-0x3b8,0x447,-0x229)]}]},{'title':_0x3aa42a[_0x3448fd(0x52b,-0x15e,0x20c,0x2cd)],'rows':[{'title':_0x3aa42a[_0x45e928(0x166,0x3ae,-0x1ea,0x2ca)],'description':_0x3aa42a[_0x45e928(0x9ba,0x50e,0x589,0xc80)],'rowId':_0x3aa42a[_0x45e928(0x74e,0xb31,0x224,0x2a5)]}]},{'title':_0x3aa42a[_0x45e928(0xc7,0x4ba,0x4a,0x216)],'rows':[{'title':_0x3aa42a[_0x3448fd(0x924,0xe3e,0x786,0x909)],'description':_0x45e928(0x383,0x24a,0x69a,0x5a9)+_0x45e928(0x798,0x6f2,0x6f3,0x4a6)+_0x45e928(0x4fe,0xb0,0x8af,0x419)+'an\x20bot_','rowId':_0x3aa42a[_0x45e928(0x629,0x8d0,0x6a4,0x8d0)]}]},{'title':_0x3aa42a[_0x3448fd(0xac4,0xb43,0x772,0x996)],'rows':[{'title':_0x3aa42a[_0x45e928(0x3bf,0x866,0x6e7,0x842)],'description':_0x3aa42a[_0x45e928(0xa30,0x5a7,0x5c5,0xa21)],'rowId':_0x3aa42a[_0x45e928(0x843,0x673,0xc0e,0x328)]}]},{'title':_0x3448fd(0x506,0x452,0xc49,0x7e1)+_0x3448fd(0xc6e,0xbba,0xb6a,0xa97),'rows':[{'title':_0x45e928(0x85c,0x6fa,0x477,0x417)+_0x3448fd(0x1fc,0x5dc,0x4fc,0x5c4),'description':_0x3aa42a[_0x3448fd(0x3fd,0x36e,0x19e,0x566)],'rowId':_0x3aa42a[_0x45e928(0x57a,0x84e,0x792,0x84a)]}]},{'title':_0x3aa42a[_0x45e928(0x1dd,0x1ee,0x29d,-0xf)],'rows':[{'title':_0x3aa42a['tHKXE'],'description':_0x3448fd(0xff3,0x8db,0xabb,0xb46)+_0x3448fd(0xacd,0x99c,0x7ed,0xbb3)+'ia\x20di\x20data'+_0x3448fd(0xf23,0x853,0x847,0xbd7),'rowId':_0x3aa42a[_0x45e928(0x5a5,0x15d,0x667,0xa02)]}]},{'title':_0x45e928(0x5a7,0xab1,0x761,0x3c9)+_0x3448fd(0xc91,0xabd,0x83c,0xd01),'rows':[{'title':_0x3aa42a[_0x3448fd(0xd6d,0xf59,0xd62,0xd05)],'description':_0x3aa42a[_0x45e928(0x5a3,0x50c,0xac8,0x6ed)],'rowId':_0x3aa42a['QIibM']}]},{'title':_0x3aa42a[_0x45e928(0x217,0x738,0x6e9,-0x286)],'rows':[{'title':_0x3aa42a[_0x3448fd(0xbc0,0xa52,0x9ed,0xa01)],'description':_0x3aa42a[_0x3448fd(0x5ca,0x363,0x63b,0x51c)],'rowId':_0x3aa42a['CbtFx']}]},{'title':_0x3aa42a[_0x3448fd(0xd94,0x903,0x969,0xc76)],'rows':[{'title':_0x3aa42a[_0x3448fd(0x6b9,0x8dd,0xabd,0xbba)],'description':_0x3448fd(0x7c7,0x7b9,0xbd8,0xb68)+_0x45e928(0x33f,0x29c,0x30f,0x5ec)+_0x45e928(0x12f,0x531,0x5a8,-0x24b)+_0x3448fd(0x84f,0x892,0x87c,0x9ac),'rowId':_0x3448fd(0x433,0x268,0x6cc,0x4ee)}]},{'title':_0x3aa42a['tipnM'],'rows':[{'title':_0x3aa42a[_0x3448fd(0xcab,0x673,0x4e0,0x9df)],'description':_0x3448fd(0x1f7,0x2ef,-0x1a,0x516)+_0x45e928(0x7f,0x2c2,-0x14c,-0xa5)+_0x45e928(0x772,0x73e,0x609,0xaec),'rowId':_0x3aa42a[_0x45e928(0x75e,0x456,0xbf6,0x716)]}]},{'title':_0x3aa42a[_0x45e928(0x72d,0xc31,0x21c,0x9f9)],'rows':[{'title':'👙\x20〉ɞ\x20Nsfw\x20'+_0x3448fd(-0xbd,0x1f8,0x147,0x351),'description':_0x3aa42a[_0x3448fd(0xa9f,0x84e,0xea3,0xafb)],'rowId':_0x3aa42a[_0x45e928(0x814,0x97d,0xaad,0x87a)]}]},{'title':_0x3aa42a[_0x3448fd(0x8f5,0x651,0x886,0x7cc)],'rows':[{'title':_0x3aa42a[_0x3448fd(0x7f8,0x43d,0x4e5,0x3aa)],'description':_0x3aa42a[_0x3448fd(0x695,0xe03,0x732,0x8da)],'rowId':_0x3aa42a[_0x45e928(0x254,0x690,-0x1f8,0x560)]}]},{'title':_0x45e928(0x5a7,0x3cc,0x471,0x445)+_0x45e928(0xf4,-0x1c9,0x1eb,-0x3e9),'rows':[{'title':_0x45e928(0x5e0,0x37d,0x9d9,0x5d2)+_0x45e928(0x3e5,0x5a2,0x585,-0x151),'description':_0x3aa42a['opmZL'],'rowId':_0x3aa42a[_0x45e928(0x14e,-0x2c7,0x618,0x113)]}]},{'title':_0x3aa42a[_0x45e928(0xa6b,0xe69,0x95c,0x708)],'rows':[{'title':_0x3aa42a['AWnrN'],'description':_0x3aa42a[_0x3448fd(0x81e,0xd5d,0xd2c,0xa2c)],'rowId':_0x3448fd(0x3e,0x77b,0x399,0x413)}]},{'title':_0x3aa42a['CMuBz'],'rows':[{'title':_0x3aa42a[_0x45e928(0x4d2,0x36d,0x38d,0x542)],'description':_0x3aa42a[_0x3448fd(0x73a,0xcd3,0x6b9,0x860)],'rowId':_0x3aa42a[_0x45e928(0x24e,-0x13,0xb2,-0x133)]}]},{'title':_0x3aa42a[_0x45e928(0x1b7,0x5c5,0x20f,-0x350)],'rows':[{'title':_0x3aa42a[_0x3448fd(0x360,0x242,0x5d1,0x3c3)],'description':_0x3448fd(0x1a1,0x30a,0x2d4,0x662)+_0x3448fd(0x53c,0x893,0x1a9,0x4b9),'rowId':_0x3aa42a['LJIxj']}]},{'title':_0x3aa42a['qtswc'],'rows':[{'title':_0x3aa42a[_0x45e928(0x278,0x1f1,0x4a2,0x2fd)],'description':_0x45e928(0x6c,-0x146,0x33f,-0x3c1)+_0x45e928(0x95,-0x5d,-0x303,-0xbe)+_0x45e928(0x251,0x158,0x2e1,0x61c),'rowId':_0x3aa42a[_0x45e928(0x6d6,0x244,0x4fb,0x747)]}]},{'title':_0x3aa42a[_0x45e928(0x113,0x15c,-0x225,0x216)],'rows':[{'title':_0x3aa42a['yZZCx'],'description':_0x3aa42a[_0x3448fd(0x89d,0x7f0,0x28c,0x589)],'rowId':_0x3448fd(0xf17,0xa4c,0xa39,0xc45)+'d'}]},{'title':_0x3aa42a[_0x3448fd(0x849,0xa69,0xad5,0xb77)],'rows':[{'title':_0x45e928(0x51f,0x2ae,0x8f2,0x752)+_0x3448fd(0x786,0x63b,0x5ca,0x5c4),'description':_0x3aa42a['qhToY'],'rowId':_0x3aa42a['bnHMA']}]},{'title':_0x3aa42a[_0x3448fd(0x311,0x568,0x1f5,0x672)],'rows':[{'title':_0x3aa42a[_0x3448fd(0xa42,0x6a6,0x344,0x781)],'description':'_Hem\x20apaya'+'..._','rowId':_0x3aa42a[_0x3448fd(0x3bc,0x3f6,-0x268,0x2ce)]}]},{'title':_0x3448fd(0xa0f,0xa68,0x723,0x7e1)+'e-23','rows':[{'title':_0x3aa42a[_0x45e928(0xab5,0xf80,0x8e9,0xe31)],'description':_0x3aa42a[_0x3448fd(0x7b2,0x3eb,0x371,0x714)],'rowId':_0x3aa42a[_0x45e928(0x5f6,0x20f,0x8b2,0x626)]}]},{'title':_0x3aa42a[_0x45e928(0x14f,0x3f8,-0x3ca,-0x232)],'rows':[{'title':_0x3aa42a[_0x45e928(0x930,0x934,0xb6c,0xaf2)],'description':_0x3aa42a[_0x45e928(0x244,0x1c6,-0x123,0x1)],'rowId':_0x3aa42a['xoGLv']}]},{'title':_0x45e928(0x5a7,0x398,0x1ae,0x9c5)+_0x3448fd(0x9e8,0x184,0x853,0x5dc),'rows':[{'title':'📸\x20〉ɞ\x20Ephot'+_0x45e928(0x8c,0x2f6,0x33b,0x121),'description':_0x3aa42a[_0x45e928(0x5e2,0x7bf,0xaef,0x5c5)],'rowId':_0x3aa42a[_0x45e928(0x304,0x70a,0x6ff,0x125)]}]},{'title':_0x3aa42a[_0x45e928(0x6d,-0x47d,-0x179,0x8b)],'rows':[{'title':_0x3aa42a[_0x3448fd(0x171,0x60b,0x5c5,0x2ca)],'description':_0x3448fd(0xcce,0xc41,0xe1e,0xcde)+'ogo\x20game\x20k'+_0x45e928(0x741,0x24b,0x759,0x8a2),'rowId':_0x3aa42a[_0x3448fd(0x6c6,0xc26,0x9e8,0x94c)]}]},{'title':_0x3aa42a[_0x45e928(0x7c2,0x58e,0xad0,0x839)],'rows':[{'title':_0x3aa42a[_0x3448fd(0x827,0x9fe,0x39e,0x5dd)],'description':_0x3aa42a[_0x3448fd(0x341,0x689,0x2ac,0x45f)],'rowId':'sc'}]},{'title':_0x45e928(0x2e1,0x91,0x233,0xb6)+'on','rows':[{'title':_0x3aa42a[_0x3448fd(0xda6,0x698,0xbc8,0xb55)],'description':_0x3aa42a[_0x45e928(0x75b,0x23e,0x8c8,0x623)],'rowId':'tq'}]}]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x1095e1={};_0x1095e1['waitForAck']=!![],alpha[_0x3448fd(0x77a,0x5dc,0x666,0x3a7)+_0x3448fd(0x27f,0xb59,0x6a3,0x775)](_0x49cf61,_0x1095e1);},sendImageMaker=async(_0xda329f,_0x46004c,_0x4b05bd)=>{const _0x5c7734={};_0x5c7734[_0x11800a(0xb9b,0xbe0,0x914,0xa3d)]=_0x11800a(0x11b1,0xe79,0x1012,0xbf9)+_0xd4e84a(0x6ab,0xa0b,0x81c,0x73f)+_0x11800a(0xa53,0xac7,0xed0,0xbff)+'ipt,\x20*/*,\x20'+'q=0.01',_0x5c7734[_0xd4e84a(0x4f9,0x32a,0x4a1,0x665)]=_0xd4e84a(0x7ec,0x56b,0x4ae,0x78c)+_0xd4e84a(0x711,0x350,0x2ad,0x4a5),_0x5c7734[_0x11800a(0x11fb,0xd60,0xfe1,0xd0f)]='no-cache',_0x5c7734[_0xd4e84a(0x87f,0x1c9,0x560,0x5bb)]=_0x11800a(0x79e,0x92e,0xacc,0x9a6),_0x5c7734[_0xd4e84a(-0xbc,0x525,0x88,0x349)]=_0x11800a(0x56f,0x553,0x93b,0x3f9),_0x5c7734[_0xd4e84a(-0x4b6,0x1e2,-0xfe,0xab)]=_0xd4e84a(0x4ea,0x2fa,0x572,0x513)+'n',_0x5c7734[_0xd4e84a(0xaae,0x455,0x884,0x6a2)]=_0xd4e84a(0x1f7,-0x35d,0x77,0x254),_0x5c7734[_0x11800a(0x53d,0xa4c,0x9a6,0xab5)]=_0x11800a(0xd66,0xd21,0xfd3,0x7f0),_0x5c7734[_0x11800a(0x130a,0xde1,0xe56,0xbca)]='XMLHttpReq'+_0xd4e84a(0x788,0x26a,0x496,0x370),_0x5c7734['otOXS']=_0xd4e84a(-0x165,-0x7,0x34f,-0x1aa)+_0xd4e84a(0x303,0x44,-0xe6,-0x5f3)+'t.com/',_0x5c7734[_0xd4e84a(0x47c,0x502,0x1a9,0x6b2)]=function(_0x1036f3,_0x3f9703){return _0x1036f3===_0x3f9703;},_0x5c7734['ZNDca']='DNHTT',_0x5c7734[_0x11800a(0xa88,0xcd5,0x111f,0xc65)]=_0xd4e84a(0x3c,-0x18d,0x367,0x0)+_0xd4e84a(0x342,-0x72,0xa4,-0x43c)+'oba\x20bebera'+'pa\x20saat\x20la'+'gi',_0x5c7734['oxcmw']=_0xd4e84a(0xa86,0xae6,0x744,0x89d)+'essage',_0x5c7734[_0x11800a(0xa06,0xe85,0x9e5,0xd18)]=_0x11800a(0xd26,0x811,0x9a5,0x7de),_0x5c7734[_0x11800a(0x85e,0xbb7,0x945,0xe48)]=_0x11800a(0x407,0x8f6,0xd12,0xdf0),_0x5c7734[_0xd4e84a(0x8cf,0x8ca,0x8fc,0x595)]=_0xd4e84a(0x962,-0x4,0x4b2,0x219);const _0x3f8999=_0x5c7734,_0x6a354=await alpha['prepareMes'+'sage'](from,_0xda329f,MessageType[_0xd4e84a(0x752,0x41c,0x446,0x77b)],{'thumbnail':Buffer['alloc'](-0x126d*0x1+0x3*0xa8b+-0x82*0x1a)});let _0x288104=_0x6a354[_0xd4e84a(0x999,0x4c7,0x479,-0xaf)][_0x3f8999['oxcmw']]?_0x6a354[_0xd4e84a(0x53b,0x177,0x479,0x27)][_0xd4e84a(0xc4d,0x508,0x744,0x2e8)+_0xd4e84a(0x36e,0x5d9,0x85a,0xc26)]:_0x6a354;const _0x2669ba={};_0x2669ba['buttonId']=_0x3f8999['TbTmT'],_0x2669ba['buttonText']={},_0x2669ba[_0xd4e84a(0x1fd,-0x330,-0xe8,0x338)]=0x1,_0x2669ba['buttonText'][_0x11800a(0xe8b,0xdb6,0xc35,0xb58)+'t']=_0x3f8999[_0xd4e84a(0x33a,0x655,0x510,0x7ba)];const _0x1dcf55={};_0x1dcf55[_0x11800a(0xfd0,0xdb6,0x11dc,0x1245)+'t']=_0x3f8999[_0xd4e84a(0xc18,0xb97,0x8fc,0x415)];const _0x127d0e={};_0x127d0e['buttonId']=_0xd4e84a(0x6fd,0x955,0x4d8,0x333);function _0xd4e84a(_0x4db7da,_0x300e94,_0x426347,_0x3659fd){return _0x342471(_0x4db7da,_0x300e94-0x153,_0x426347- -0x456,_0x3659fd-0x1ca);}_0x127d0e[_0x11800a(0x112c,0xd26,0x117c,0x102b)]=_0x1dcf55,_0x127d0e[_0x11800a(0x2dd,0x5bf,0x724,0x4f4)]=0x1;const _0x26c840=[_0x2669ba,_0x127d0e],_0x2ba13d={'contentText':_0x46004c,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x11800a(0x9b1,0x543,0x299,0x4c7)+'\x20by\x20@')+_0x4b05bd[_0xd4e84a(0x47b,0xb64,0x68c,0x97a)]('@')[0x3*0xbf7+0x3be*-0x3+-0x18ab],'buttons':_0x26c840,'headerType':0x4,'imageMessage':_0x288104[_0x11800a(0xdfc,0xb20,0xdf5,0xf44)][_0x11800a(0x76c,0x62a,0x9f0,0xb1c)+'ge']},_0x3eae21={};_0x3eae21[_0xd4e84a(0x9d9,0x41b,0x692,0x235)+'id']=[_0x4b05bd];function _0x11800a(_0x5cf7ca,_0xbeed97,_0xfb02fa,_0x34997c){return _0x342471(_0x34997c,_0xbeed97-0xcb,_0xbeed97-0x251,_0x34997c-0x11b);}const _0x343cd1={};_0x343cd1['quoted']=mek,_0x343cd1[_0xd4e84a(0x44f,0x63e,0x4ec,0x9aa)+'o']=_0x3eae21,alpha[_0xd4e84a(0x639,0x859,0x5f0,0x557)+'e'](from,_0x2ba13d,MessageType[_0x11800a(0xc79,0xcc0,0xafb,0xf09)+'sage'],_0x343cd1)[_0xd4e84a(0x8cd,0x8c5,0x4c6,0x2e8)](_0x4a3438=>{function _0x2fef6e(_0x1d1acf,_0x46ad06,_0x4d79bc,_0x647334){return _0xd4e84a(_0x4d79bc,_0x46ad06-0x83,_0x46ad06- -0x49,_0x647334-0x125);}function _0x26755b(_0x5c0d34,_0x4ff3b2,_0x49f8d5,_0x53e574){return _0x11800a(_0x5c0d34-0x6b,_0x53e574- -0x64,_0x49f8d5-0x7f,_0x4ff3b2);}const _0x35fb15={'IWhgM':function(_0x56ac73,_0x28a85b){return _0x56ac73(_0x28a85b);}};if(_0x3f8999[_0x2fef6e(-0x167,0x160,0x638,0x5f1)](_0x3f8999[_0x2fef6e(0x3f6,0x55,0xa9,0x4e4)],_0x3f8999['ZNDca']))reply(_0x3f8999[_0x2fef6e(0x384,0x5e5,0x5ca,0x226)]);else{const _0xac5edb={};_0xac5edb[_0x2fef6e(-0x18e,0x364,0x771,0x7fc)]=_0x3f8999['NksyT'],_0xac5edb[_0x2fef6e(0x6c3,0x2dc,-0xd8,0x4ed)+_0x26755b(0xa31,0xe2b,0x9fb,0xede)]=_0x3f8999[_0x26755b(0x7c6,0xd2d,0x769,0xae4)],_0xac5edb[_0x26755b(0x9bc,0xb3e,0x8e8,0x885)+'rol']=_0x2fef6e(0x297,-0x81,0x55,0x7f),_0xac5edb['pragma']=_0x3f8999[_0x2fef6e(0x918,0x670,0x3e7,0x49e)],_0xac5edb[_0x2fef6e(0xbc3,0x6c4,0x735,0x686)+_0x26755b(0x1ee,0x5ef,0x28d,0x719)]=_0x3f8999['dVtmm'],_0xac5edb[_0x2fef6e(0xb4a,0x6c4,0x3e9,0x9ce)+'mode']=_0x3f8999['QpZEF'],_0xac5edb['sec-fetch-'+_0x2fef6e(-0x248,0x19b,0x5df,0x45b)]=_0x3f8999['GbGFR'],_0xac5edb[_0x2fef6e(0x401,0x5b5,0x3ac,0x9ef)]='1',_0xac5edb[_0x26755b(0x5fb,0xbcc,0xf20,0xafd)+_0x2fef6e(-0x5c,0x125,0x3a6,0xce)]=_0x3f8999[_0x2fef6e(0xccf,0x83b,0x958,0x34c)],_0xac5edb[_0x2fef6e(-0x2ac,-0x178,-0x5f4,0x6d)+_0x2fef6e(0xc4,-0xf0,-0x1a8,0x332)]=_0x3f8999[_0x2fef6e(0x781,0x35c,0x864,0x19c)],_0xac5edb[_0x26755b(0x97f,0x3df,0x179,0x64e)+'d-with']=_0x3f8999['JoHut'];const _0x487ab0={};_0x487ab0[_0x2fef6e(0x33b,0x76b,0x445,0x4a4)]=_0xac5edb,_0x487ab0['referrer']=_0x3f8999[_0x2fef6e(-0xd7,0x16b,-0x15a,0x113)],_0x487ab0[_0x26755b(0xd34,0x97e,0xa18,0xdaa)+_0x2fef6e(0x534,0x8a3,0xd35,0x4b7)]=_0x26755b(0xc2f,0xa8f,0xf05,0xc44),_0x487ab0[_0x2fef6e(0x4f4,0x504,0x38c,0x93c)]=null,_0x487ab0[_0x2fef6e(0x16b,-0x72,-0x89,-0x152)]='GET',_0x487ab0[_0x26755b(0x828,0x91e,0xa3a,0xb06)]=_0x3f8999[_0x26755b(0xb23,0x3d5,0x4f4,0x6cb)],_0x4dfd83(_0x26755b(0xac0,0x7c9,0xa74,0x992)+'w.pinteres'+_0x2fef6e(0x55,0x3ec,0x800,0x15f)+'urce/BaseS'+_0x2fef6e(0x426,0x123,0x364,-0xa6)+_0x2fef6e(0x4a5,0x67c,0x38b,0xa20)+_0x26755b(0x1229,0x100b,0xfbb,0xed5)+_0x26755b(0x64f,0x978,0x3b7,0x8bf)+_0x2fef6e(0x5b9,0x79f,0xc3d,0x988)+_0x26755b(0xbcd,0x501,0x771,0x751)+_0x3801e1+(_0x26755b(0x7b8,0xcb9,0xbca,0xca5)+_0x2fef6e(0x8a,-0x7d,0x376,0x3f2)+_0x2fef6e(-0x1b2,0x291,0x578,0x19a)+_0x2fef6e(-0x297,0x26e,0x290,0x314)+_0x2fef6e(0x59c,0x676,0x6d9,0x1b9)+_0x26755b(0xe50,0xea1,0x956,0xa59)+_0x2fef6e(0x42d,0x834,0x7eb,0x367)+'22')+_0x32997d+(_0x2fef6e(0x2e5,-0x65,0x496,-0x542)+'cope%22%3A'+_0x2fef6e(0x945,0x57b,0x2c8,0x67b)+_0x2fef6e(0x69d,0x3da,-0x9f,-0x110)+_0x2fef6e(0x1c5,0x5ed,0xa24,0x9e1)+_0x26755b(0xfab,0x6d6,0xe5d,0xaf9)+_0x26755b(0x888,0xb05,0x4ff,0x8fc)+'false%7D%2'+_0x2fef6e(0x1d0,0x1ef,-0x205,0x6ff)+_0x2fef6e(-0x91,0x2e3,0xc1,0x725)+_0x2fef6e(0xa15,0x5bb,0x5b1,0x2cb)+_0x2fef6e(0x70,0x4fb,0xee,0x939)+'59'),_0x487ab0)[_0x26755b(0x8d7,0x68e,0x34e,0x77a)](_0x2af165=>_0x2af165[_0x2fef6e(-0x4b6,-0x12,0x435,0x3a)]())[_0x2fef6e(0x448,0xee,0x45c,0x608)](_0x374f28=>{const _0x5ecbc1=_0x374f28[_0x96e9d4(0xcae,0xb47,0x508,0x7b7)+'esponse'][_0x245961(0x7fe,0x5d1,0xcbb,0x945)][_0x245961(0x4dc,0x7c2,0x30c,0x11d)][_0x5644e7[_0x96e9d4(0x55c,0x4e,0x744,0x43b)](_0x297a2c[_0x245961(0x48b,0x3c3,0x7e0,-0x62)]()*_0x374f28[_0x245961(0x6ec,0xb76,0x1bf,0x7e6)+'esponse'][_0x245961(0x7fe,0x565,0xb36,0x7cd)][_0x245961(0x4dc,0x632,0x407,0x34b)][_0x245961(0x12d,0xc6,0x2,0x5b1)])];function _0x96e9d4(_0x3b2b30,_0x276441,_0x8fc0b5,_0x1a7b56){return _0x26755b(_0x3b2b30-0x186,_0x276441,_0x8fc0b5-0x128,_0x1a7b56- -0x351);}var _0x5c50a4=[];const _0x9b2806={};_0x9b2806['link']=_0x5ecbc1[_0x96e9d4(0x25f,0x652,0x16a,0x53e)][_0x96e9d4(0x8c9,0x169,-0x62,0x40a)][_0x96e9d4(0x1ca,0x1a3,0x2ab,0x252)],_0x5c50a4[_0x96e9d4(0xff8,0x6db,0xfe2,0xb27)](_0x9b2806);function _0x245961(_0x5f259e,_0x18500b,_0x2042cc,_0x457940){return _0x26755b(_0x5f259e-0x9b,_0x18500b,_0x2042cc-0x1eb,_0x5f259e- -0x41c);}_0x35fb15[_0x245961(0x2e8,0x55e,0x108,0x11d)](_0x57b836,_0x5c50a4);})[_0x2fef6e(0x451,0x47d,0x3,0x3cb)](_0x100fa3);}});},{soundmenu,primbonmenu,kerangmenu,groupmenu,quotesmenu,animemenu,coganmenu,helpmenu,convertmenu,funmenu,downloadmenu,makermenu,textpromenu,photooxymenu,telestiker,othermenu,ownermenu,set_stc_cmd,storagemenu,cecanmenu,tagmenu,upmenu,nsfwmenu,asupanmenu,image_effect,islamicmenu,logomenu,ephoto360menu,allmenu}=require(_0x342471(0x56a,0xb58,0x6cc,0x611)+_0x150c54(0x677,0x727,0x616,0x928)),isBtMsg=type==_0x150c54(0x24d,0x478,0xa62,0x71c)+_0x342471(0x65,-0x5e,0x389,0x7ed)+'ge'?mek['message'][_0x342471(0x972,0x754,0x659,0x393)+_0x342471(0x70d,0x12a,0x389,0x502)+'ge'][_0x342471(0x264,0x237,0x4c9,0x844)+'splayText']:'',isStMsg=type==_0x342471(0xc25,0xbb3,0xd3b,0x108a)+_0x342471(0x7c8,0x8cb,0xba6,0xdf7)?mek[_0x150c54(0x6d8,0xb52,0x772,0x992)][_0x342471(0xdd4,0x9a3,0xd3b,0xe49)+_0x150c54(0x867,0xf8e,0xd04,0xc69)][_0x342471(0x504,0x6b2,0x7bf,0x87e)]:'',stc=mek[_0x150c54(0xe66,0x8a9,0x4a0,0x992)][_0x342471(0x407,0xa07,0x4f2,0x36f)+_0x150c54(0x5a3,0x6a2,0x468,0x87c)],msc=mek[_0x342471(0x8f8,0x505,0x8cf,0x553)][_0x150c54(0x78d,0xbf0,0x719,0x7e8)+'ge'];wew=fs['readFileSy'+'nc'](_0x150c54(0xa0c,0x869,0xc4a,0xbb3)+thumbnail),alfa2=_0x150c54(0x49d,0x1af,-0x7e,0x426)+_0x342471(0x5e8,0x620,0xa8f,0xc45)+_0x150c54(0xac7,0xb01,0xcab,0x793),alfa3=_0x150c54(0xdc9,0xd9c,0xa9e,0x894)+_0x150c54(0xa4a,0x7ba,0xded,0x8c3)+'sapp.net',sub_yt_zeeone_ofc=type==_0x150c54(0x120e,0xeb0,0xbc6,0xdfe)+_0x150c54(0xe3b,0x95a,0x815,0xc69)?mek[_0x150c54(0xd32,0x4e2,0xc2f,0x992)]['listRespon'+_0x342471(0xf54,0xc75,0xba6,0xac7)][_0x342471(0x493,0x95f,0x7bf,0x6b2)]:'',subscribezeeoneofc=type=='buttonsRes'+_0x342471(0x96,0x651,0x389,0x49f)+'ge'?mek[_0x150c54(0xde1,0xcb5,0x848,0x992)][_0x150c54(0xb90,0xb7f,0xb69,0x71c)+_0x150c54(0x1fd,0x16b,-0x65,0x44c)+'ge'][_0x342471(0xbbe,0xa45,0x6b4,0xa56)+'ttonId']:'';if(subscribezeeoneofc==_0x342471(0xd7f,0x1062,0xb52,0xaf5)){console[_0x342471(0x36b,0x73c,0x344,0x2f7)](color(time,_0x150c54(0x75e,0x4e1,0x2d8,0x61b)),color(_0x150c54(0xae9,0x790,0x7b2,0x908)+_0x150c54(0xb52,0x9e4,0xabe,0x8a6)));const _0x3a77e6={};_0x3a77e6[_0x150c54(0x513,0xb96,0x8ae,0x882)]=_0x150c54(0xb87,0x50c,0x885,0x9e9)+'enu\x20bot',_0x3a77e6[_0x342471(0x568,0x2e0,0x78b,0xc37)+'n']='_Semua\x20fit'+_0x150c54(0x67b,0x28f,0x871,0x40d),_0x3a77e6[_0x342471(0x7a4,0x381,0x499,0x451)]=_0x150c54(0x914,0xb15,0x961,0xaed);const _0x568d51={};_0x568d51[_0x342471(0xa76,0xc7a,0x7bf,0xcdf)]=_0x150c54(0x790,0xa23,0xf76,0xa77)+'ot',_0x568d51[_0x342471(0x811,0x70f,0x658,0x84f)]=[_0x3a77e6];const _0x46ffa7={};_0x46ffa7[_0x150c54(0x740,0x8b0,0x6a9,0x882)]='📩\x20〉ɞ\x20Downl'+_0x342471(0x324,0x55e,0x390,0x29),_0x46ffa7[_0x342471(0xc38,0x653,0x78b,0xb37)+'n']=_0x150c54(0xe24,0x7d1,0x671,0x9b1)+_0x342471(0xb1e,0x6ba,0x89e,0xd7e)+_0x342471(0xf3a,0xe36,0xbe5,0x1109),_0x46ffa7['rowId']=_0x150c54(0x89a,0xeb9,0xa46,0xb8d)+'d';const _0x58831e={};_0x58831e[_0x150c54(0xda6,0xaf9,0x67d,0x882)]=_0x342471(0x5ae,0x88c,0x825,0xa11)+_0x342471(0xeec,0xedf,0x9ca,0xa0f),_0x58831e['rows']=[_0x46ffa7];const _0x164cc5={};_0x164cc5[_0x150c54(0x761,0x810,0x7e1,0x882)]='👨‍👨‍👧‍👦\x20〉ɞ\x20Group'+_0x150c54(0x430,0x792,0xa48,0x6cb),_0x164cc5[_0x342471(0xad3,0xb0a,0x78b,0x5c5)+'n']=_0x342471(0x8ec,0xf5f,0xcc6,0xa00)+_0x342471(0xd3a,0x3de,0x81e,0xa16)+_0x342471(0x113e,0x118f,0xd2e,0x1089),_0x164cc5['rowId']=_0x342471(0x844,-0x7a,0x333,0x326);const _0xd42601={};_0xd42601[_0x342471(0x6d4,0x68c,0x7bf,0x394)]=_0x150c54(0xae7,0x98e,0x653,0x8e8)+_0x150c54(0x66a,0x52,0x910,0x516),_0xd42601[_0x342471(0x77c,0x952,0x658,0x6f6)]=[_0x164cc5];const _0x37d6de={};_0x37d6de[_0x342471(0x3a5,0xbe5,0x7bf,0x54e)]=_0x342471(0xcc7,0x6b9,0xbc0,0x845)+'rt\x20Menu',_0x37d6de[_0x150c54(0x9a7,0x963,0x7f5,0x84e)+'n']=_0x150c54(0xdf0,0x598,0xa0d,0x9b1)+'an\x20fitur\x20c'+_0x150c54(0x677,0x935,0x570,0x410),_0x37d6de[_0x342471(0x95d,0x3d0,0x499,0x86f)]='convertcmd';const _0x4ebbac={};_0x4ebbac['title']=_0x342471(0x44b,0xd39,0x825,0xd14)+'e-3',_0x4ebbac[_0x342471(0x601,0x37b,0x658,0xa7e)]=[_0x37d6de];const _0x5172fb={};_0x5172fb[_0x150c54(0x4d1,0x895,0xd22,0x882)]=_0x150c54(0x690,0x91b,0xcda,0x931)+_0x150c54(0x59f,0x866,0xb62,0xa90),_0x5172fb[_0x342471(0xc56,0x40a,0x78b,0x310)+'n']='_Fitur\x20unt'+'uk\x20bermain'+'\x20dengan\x20bo'+'t_',_0x5172fb['rowId']=_0x342471(0x998,0x17,0x537,0x902);const _0x1340fa={};_0x1340fa[_0x342471(0x3c0,0x709,0x7bf,0x65c)]=_0x150c54(0x542,0xa2b,0xcbb,0x8e8)+_0x342471(0x686,0x1c9,0x514,-0x19),_0x1340fa[_0x150c54(0x391,0x834,0x455,0x71b)]=[_0x5172fb];const _0x1170ec={};_0x1170ec[_0x342471(0x7f1,0x339,0x7bf,0xa8f)]='🎨\x20〉ɞ\x20Maker'+_0x342471(0xb18,0x87f,0x608,0x219),_0x1170ec[_0x150c54(0x714,0xa38,0xa08,0x84e)+'n']=_0x150c54(0x957,0x33b,0x221,0x6c4)+_0x150c54(0x96c,0xb65,0xfc6,0xad9)+_0x342471(0x6d3,0x990,0x77c,0x54c)+'an\x20bot_',_0x1170ec[_0x342471(0x417,0x99b,0x499,0x18b)]=_0x150c54(0x1297,0x927,0xe78,0xd7c);const _0x2cf30d={};_0x2cf30d[_0x150c54(0x8f8,0x50c,0xd75,0x882)]=_0x150c54(0x3dd,0x954,0x717,0x8e8)+_0x342471(0x8c7,0xa01,0xc08,0xd19),_0x2cf30d['rows']=[_0x1170ec];const _0x106e88={};_0x106e88[_0x150c54(0x748,0x3bc,0x60b,0x882)]=_0x150c54(0x75e,0xe15,0xeda,0xa71)+'\x20Menu',_0x106e88[_0x342471(0xab5,0x45d,0x78b,0x900)+'n']=_0x150c54(0x847,0x87c,0x470,0x481)+_0x342471(0x4a0,0x510,0x6fa,0xb0d)+_0x150c54(0xb78,0xe1f,0x1265,0xdf0)+_0x150c54(0x1b0,0x208,0x594,0x629),_0x106e88[_0x150c54(0x11e,0x5d4,0x32e,0x55c)]='othercmd';const _0x124422={};_0x124422[_0x150c54(0xa32,0x4fe,0x61f,0x882)]=_0x342471(0xd22,0x4c8,0x825,0x5bd)+_0x150c54(0x955,0x91d,0x416,0x455),_0x124422[_0x342471(0x2c1,0x9aa,0x658,0xa9a)]=[_0x106e88];const _0x15068a={};_0x15068a[_0x150c54(0x5b1,0xaa3,0xa88,0x882)]=_0x342471(0x876,0xf7f,0xada,0xca5)+'\x20Menu',_0x15068a[_0x150c54(0xc2a,0x808,0x418,0x84e)+'n']=_0x150c54(0x2a1,0x2d9,0x26a,0x712)+_0x342471(0x544,0x204,0x51b,0x73d)+'bot_',_0x15068a[_0x342471(0x1aa,0x453,0x499,0x141)]=_0x150c54(0x9b1,0xc32,0xb0e,0x76e);const _0x34fd5d={};_0x34fd5d[_0x150c54(0x756,0x5fe,0xc6f,0x882)]=_0x342471(0x552,0x52e,0x825,0x2ec)+_0x150c54(0xf0d,0xf43,0x766,0xb9e),_0x34fd5d['rows']=[_0x15068a];const _0x580335={};_0x580335[_0x150c54(0x6b0,0xd3f,0xbf0,0x882)]=_0x150c54(0x38b,0x1e6,0x6fe,0x543)+'ge\x20Menu',_0x580335[_0x342471(0x6d4,0x4ca,0x78b,0x840)+'n']=_0x342471(0x1099,0xac5,0xb8a,0x814)+_0x150c54(0x99e,0x7be,0xfdd,0xcba)+_0x342471(0xd0b,0xa25,0x998,0xaf5)+_0x342471(0x9d8,0x100f,0xc1b,0xc83),_0x580335['rowId']=_0x342471(0x792,0xac8,0x5a1,0xa6c);const _0x47e5d2={};_0x47e5d2[_0x342471(0xba8,0x6e0,0x7bf,0x87c)]=_0x150c54(0x75f,0x413,0x464,0x8e8)+'e-8',_0x47e5d2['rows']=[_0x580335];const _0x3caa39={};_0x3caa39[_0x342471(0x964,0x7f6,0x7bf,0xbdf)]=_0x342471(0xf16,0x74a,0xa9d,0x82c)+_0x150c54(0x906,0xb13,0xe2f,0xa90),_0x3caa39[_0x150c54(0x679,0xc17,0x51f,0x84e)+'n']=_0x342471(0xd06,0x81c,0xb8a,0xf65)+_0x150c54(0x465,0x736,0x2dc,0x5dc)+_0x342471(0x1ca,0x3d9,0x679,0x5c2)+'roup_',_0x3caa39[_0x342471(0x931,0x3d2,0x499,0x98d)]=_0x150c54(0x84a,0x8dd,0xac4,0xa45);const _0x13f6af={};_0x13f6af[_0x150c54(0x6d8,0x3c1,0x3fa,0x882)]='Sub\x20Menu\x20k'+_0x342471(0xdad,0x90f,0xd45,0x11cd),_0x13f6af[_0x342471(0x4e0,0x1cc,0x658,0x9b3)]=[_0x3caa39];const _0x7051b9={};_0x7051b9[_0x342471(0x633,0x843,0x7bf,0xac6)]=_0x342471(0x154,0xa70,0x62c,0x152)+'nu',_0x7051b9[_0x342471(0xaec,0x5c5,0x78b,0x33a)+'n']='_Mempostin'+'g\x20status\x20m'+'enggunakan'+_0x342471(0x616,0x386,0x804,0x948),_0x7051b9[_0x342471(0x9b1,0x411,0x499,0xdb)]=_0x150c54(0xab0,0x90f,0x987,0xdef);const _0x1b2da9={};_0x1b2da9[_0x150c54(0x7bc,0x727,0x6b5,0x882)]='Sub\x20Menu\x20k'+_0x342471(0x49e,0x677,0x977,0x47a),_0x1b2da9[_0x342471(0x68e,0x5cd,0x658,0x699)]=[_0x7051b9];const _0x5acc9d={};_0x5acc9d[_0x150c54(0x506,0xb67,0x843,0x882)]=_0x150c54(0x4d5,0x35c,0x79b,0x865)+_0x150c54(0xd42,0x7bf,0x568,0x952),_0x5acc9d[_0x150c54(0xafa,0x54c,0x455,0x84e)+'n']=_0x342471(0x803,0xe1d,0xbac,0x1033)+_0x342471(0x297,0xa4f,0x5bd,0x2d1)+_0x150c54(0x2a9,0x2c4,0x1e0,0x470)+_0x342471(0xc5e,0xde4,0x9f0,0x5a0),_0x5acc9d[_0x150c54(0x77d,0x6c9,0x28b,0x55c)]=_0x342471(0x47c,0x5f3,0x532,0x7ad);const _0x12794a={};_0x12794a[_0x342471(0x391,0xca7,0x7bf,0x616)]=_0x342471(0x8f2,0xcab,0x825,0x60c)+_0x150c54(0xb17,0x6d6,0xa25,0x834),_0x12794a[_0x150c54(0x8da,0x5e5,0x886,0x71b)]=[_0x5acc9d];const _0x26f124={};_0x26f124[_0x342471(0x3d0,0x302,0x7bf,0xa64)]='🕹️\x20〉ɞ\x20Teleg'+_0x150c54(0xc1c,0x807,0x89a,0x949)+'r',_0x26f124['descriptio'+'n']='_Sticker\x20t'+'elegram\x20Ra'+_0x150c54(0x937,0x9b7,0x68a,0xab3),_0x26f124[_0x150c54(0x357,0x7fe,0x7c4,0x55c)]=_0x342471(0x4ad,0x363,0x470,0x597)+'d';const _0x12143c={};_0x12143c[_0x150c54(0xaa7,0x899,0xcbb,0x882)]='Sub\x20Menu\x20k'+'e-12',_0x12143c[_0x150c54(0x92d,0x62d,0x9eb,0x71b)]=[_0x26f124];const _0x7bd81c={};_0x7bd81c[_0x150c54(0x8e4,0x4ce,0xc0c,0x882)]=_0x150c54(0x7ef,0x967,0xaa2,0x830)+_0x342471(-0x16c,-0x117,0x395,0x719),_0x7bd81c['descriptio'+'n']='_Gambar\x20ka'+_0x150c54(0x631,0x5c6,0x82c,0x6d7)+_0x342471(0xa97,0xd3f,0x996,0xeb1)+'\x20unsur\x2018+'+'_',_0x7bd81c[_0x150c54(0x90a,0x2d7,0x15c,0x55c)]=_0x342471(0x99a,0xd15,0xae0,0xd87);const _0x52cfc1={};_0x52cfc1['title']='Sub\x20Menu\x20k'+_0x150c54(0x9d3,0x5ff,0x6ba,0x652),_0x52cfc1['rows']=[_0x7bd81c];const _0x4c48ca={};_0x4c48ca[_0x150c54(0xbb3,0x59a,0x5be,0x882)]='🎦\x20〉ɞ\x20Asupa'+'n\x20Menu',_0x4c48ca[_0x150c54(0x511,0x70e,0x819,0x84e)+'n']=_0x342471(0x566,0x6cb,0x8cb,0xa69)+'deo\x20asupan'+_0x150c54(0xfae,0x1081,0xab0,0xd0f),_0x4c48ca[_0x150c54(0x9ce,0x936,0x1bd,0x55c)]=_0x150c54(0x971,0xf5e,0xced,0xafe);const _0x9e7f6d={};_0x9e7f6d[_0x150c54(0xbcd,0x861,0x7ee,0x882)]=_0x342471(0x516,0xb85,0x825,0x340)+_0x150c54(0xa82,0x5dc,0xef4,0xa1d),_0x9e7f6d['rows']=[_0x4c48ca];const _0x1932b9={};_0x1932b9[_0x150c54(0x9e6,0xbf5,0x58e,0x882)]=_0x342471(0x395,0x9e1,0x85e,0x8b2)+'\x20Effect',_0x1932b9[_0x342471(0x76a,0x9cb,0x78b,0x375)+'n']=_0x150c54(0xa04,0x557,0x858,0x855)+_0x150c54(0x2e7,0x842,0x7eb,0x492)+_0x150c54(0x75b,0x43b,0x5ea,0x6be)+'narik\x20deng'+'an\x20bot\x20ini'+'_',_0x1932b9['rowId']=_0x342471(0x790,0x436,0x7a8,0x647)+_0x342471(0x8f5,0x5e2,0x523,0x481);const _0x31c859={};_0x31c859[_0x342471(0xa43,0x372,0x7bf,0x713)]=_0x342471(0x9ca,0x612,0x825,0x3d2)+_0x342471(0x418,0x3bc,0x372,0x4f6),_0x31c859[_0x342471(0x7d1,0x6a1,0x658,0xae3)]=[_0x1932b9];const _0x33d14b={};_0x33d14b['title']=_0x150c54(0x4d3,0x538,0x8a3,0x44a)+_0x342471(0x1010,0xa1b,0xd03,0x1133),_0x33d14b[_0x342471(0xc08,0x764,0x78b,0x34f)+'n']=_0x150c54(0x1005,0x1215,0xe44,0xe03)+_0x342471(0x516,0x1a4,0x505,0x48c),_0x33d14b[_0x150c54(0xea,0x9ea,0x879,0x55c)]=_0x150c54(0x879,0x367,0x19e,0x51a);const _0x49dfc1={};_0x49dfc1['title']=_0x150c54(0xaba,0xe1d,0x8d3,0x8e8)+_0x342471(0x3cb,0x9ed,0x548,0x8ba),_0x49dfc1[_0x342471(0x237,0x33c,0x658,0x71a)]=[_0x33d14b];const _0x1af944={};_0x1af944[_0x150c54(0x5a9,0x4ce,0xbae,0x882)]=_0x150c54(0xa7b,0xce5,0x126a,0xd66)+_0x150c54(0x4de,0x2eb,0x2b8,0x61e),_0x1af944[_0x150c54(0xc17,0x4aa,0x6f2,0x84e)+'n']=_0x342471(0x11bd,0xc43,0xce4,0xd69)+_0x342471(0x374,0x92a,0x690,0x3cb)+_0x342471(0x498,0xe81,0x97d,0xb1f)+_0x342471(0xbbd,0x546,0x7b1,0xa80),_0x1af944[_0x150c54(0x172,0x2d0,0x31d,0x55c)]=_0x342471(0x8b5,0xfa0,0xca0,0xcc5);const _0x33a167={};_0x33a167[_0x342471(0xc5d,0x42b,0x7bf,0x70e)]=_0x342471(0x7e5,0x4e4,0x825,0x67a)+_0x150c54(0xa9c,0x615,0x4fc,0x70a),_0x33a167[_0x150c54(0x3c3,0x9c9,0x739,0x71b)]=[_0x1af944];const _0x47c2f0={};_0x47c2f0[_0x342471(0x5b2,0x738,0x7bf,0x8ae)]=_0x150c54(0x2e9,0xada,0x3ef,0x776)+'\x20Menu',_0x47c2f0[_0x150c54(0x77f,0x370,0x8d6,0x84e)+'n']=_0x150c54(0xc3f,0x2fe,0x8cf,0x769)+_0x150c54(0x2a5,0x2a8,0x223,0x5c0),_0x47c2f0[_0x342471(0x2a6,0x76e,0x499,0x645)]=_0x342471(0xc28,0xa71,0xc68,0xccf);const _0x409161={};_0x409161['title']='Sub\x20Menu\x20k'+_0x150c54(0x4cd,-0xe3,-0x8,0x3e3),_0x409161[_0x150c54(0x94b,0xa2d,0xbd8,0x71b)]=[_0x47c2f0];const _0x5982fa={};_0x5982fa[_0x150c54(0x3bd,0x877,0xc2a,0x882)]=_0x342471(0x534,-0x117,0x310,0x68b)+_0x342471(0xe22,0x53c,0x97f,0xcaf),_0x5982fa[_0x342471(0xca9,0x871,0x78b,0x962)+'n']=_0x150c54(0x7b6,0x112,0x8cf,0x3ad)+_0x342471(0x5a3,0x3e9,0x313,0xf8)+_0x342471(0x640,0x690,0x4cf,0x4c0),_0x5982fa[_0x342471(0x7bb,0x5f2,0x499,0x32d)]='textprocmd';const _0x202dff={};_0x202dff['title']=_0x150c54(0x817,0x6e3,0x7a7,0x8e8)+_0x342471(0x577,0x1ee,0x509,0x658),_0x202dff['rows']=[_0x5982fa];const _0x272bcf={};_0x272bcf['title']='🗯️\x20〉ɞ\x20Photo'+_0x150c54(0x1165,0xf3a,0xb33,0xd21),_0x272bcf[_0x150c54(0x8af,0x7b7,0x9c0,0x84e)+'n']=_0x342471(0x5fe,0x452,0x2ea,0x1e3)+_0x150c54(0x2e1,0xb32,0x68d,0x646)+_0x342471(0x70c,0xbf8,0xbfd,0xcc4),_0x272bcf[_0x342471(0x87,0x619,0x499,0x553)]=_0x342471(0xf3f,0xe80,0xc89,0xa29)+'d';const _0x441648={};_0x441648['title']=_0x342471(0x76b,0xd4f,0x825,0x841)+_0x342471(0xc8a,0x485,0x768,0x7f1),_0x441648['rows']=[_0x272bcf];const _0x1ad024={};_0x1ad024[_0x342471(0x371,0x6a5,0x7bf,0x7dd)]=_0x342471(0x424,0x324,0x79d,0x853)+_0x342471(0x5ff,0x74c,0x608,0x382),_0x1ad024['descriptio'+'n']='_Random\x20mu'+'sik\x20berdur'+_0x342471(0x8bf,0x11c2,0xd4a,0x124f)+'_',_0x1ad024['rowId']=_0x150c54(0x124d,0xaa4,0x1174,0xd48);const _0x1addce={};_0x1addce[_0x342471(0x3e1,0x6ac,0x7bf,0xb49)]=_0x150c54(0x505,0x882,0x945,0x8e8)+'e-21',_0x1addce[_0x342471(0x707,0x5d7,0x658,0x17a)]=[_0x1ad024];const _0x5c666b={};_0x5c666b[_0x150c54(0x612,0x42e,0x351,0x882)]=_0x150c54(0x101f,0xc8d,0x11f7,0xd5e)+'g\x20Menu',_0x5c666b[_0x342471(0x5f7,0xc46,0x78b,0x77c)+'n']=_0x150c54(0x1da,0x730,0x85f,0x3c2)+_0x150c54(0x77c,0x6ca,0xa2a,0xba1),_0x5c666b[_0x150c54(0x743,0x49e,0x96f,0x55c)]=_0x342471(0xd42,0xae4,0xc2d,0xb80);const _0x438ce6={};_0x438ce6[_0x342471(0x4b6,0x72c,0x7bf,0x6e5)]=_0x342471(0x445,0x5a1,0x825,0x7d2)+_0x150c54(0x137,0x14d,0x7a5,0x659),_0x438ce6[_0x150c54(0x5c5,0x7d0,0x6e9,0x71b)]=[_0x5c666b];const _0x4c3317={};_0x4c3317[_0x342471(0xc3e,0xa84,0x7bf,0xb71)]=_0x342471(0xc66,0xd27,0x9a6,0xe6e)+_0x150c54(0x201,0x70d,0x376,0x465),_0x4c3317[_0x342471(0x9a2,0x343,0x78b,0x974)+'n']=_0x150c54(0x8df,0x1108,0xe53,0xc19)+'asa\x20depan_',_0x4c3317[_0x150c54(0x4e1,0x2f9,0x7f0,0x55c)]='primboncmd';const _0x11fb18={};_0x11fb18[_0x150c54(0xb1f,0x515,0x968,0x882)]='Sub\x20Menu\x20k'+_0x150c54(0xae2,0xac6,0x3ae,0x8c4),_0x11fb18['rows']=[_0x4c3317];const _0xb759cd={};_0xb759cd['title']=_0x150c54(0x46e,0x5d3,0x255,0x781)+_0x150c54(0xfea,0x9de,0xc61,0xb94),_0xb759cd[_0x342471(0x8ff,0x830,0x78b,0x509)+'n']=_0x342471(0x6fe,0xa59,0x8ee,0x4f3)+'an\x20menu\x20is'+_0x342471(0x99e,0x1d5,0x6ca,0xa76),_0xb759cd[_0x342471(0x3ad,0x589,0x499,0xc2)]=_0x150c54(0x7e7,0x146,0x5c8,0x4c3);const _0x42759c={};_0x42759c[_0x150c54(0x4a8,0x5a9,0xcfd,0x882)]=_0x150c54(0xcee,0xd20,0xdeb,0x8e8)+_0x150c54(0xa17,0x5b7,0x28d,0x6ee),_0x42759c['rows']=[_0xb759cd];const _0x30ea8c={};_0x30ea8c[_0x150c54(0xa49,0x388,0x6cf,0x882)]=_0x342471(0xc0d,0xa5c,0x8f2,0x621)+_0x150c54(0x1ad,0x611,0x8b2,0x3cd),_0x30ea8c['descriptio'+'n']=_0x150c54(0xeb0,0xe0b,0xae4,0xde5)+'ogo\x20keren\x20'+'dari\x20web\x20e'+'photo360.c'+_0x150c54(0xba2,0xc46,0x9d5,0x789),_0x30ea8c[_0x342471(0x948,0x307,0x499,0x7c7)]='ephoto360c'+'md';const _0x33f1fc={};_0x33f1fc[_0x150c54(0x55b,0xd9f,0x910,0x882)]='Sub\x20Menu\x20k'+_0x342471(0x318,0x67d,0x620,0x556),_0x33f1fc[_0x150c54(0x918,0x3ac,0x3f7,0x71b)]=[_0x30ea8c];const _0x33c4c3={};_0x33c4c3[_0x150c54(0x74d,0xd94,0x483,0x882)]='🖼️\x20〉ɞ\x20Logo\x20'+'Maker',_0x33c4c3[_0x342471(0x724,0x9ca,0x78b,0x627)+'n']=_0x342471(0x92b,0x10db,0xd22,0x1201)+_0x150c54(0x6e9,0x395,0x3bc,0x7b6)+_0x150c54(0x9ac,0x7fc,0x8ee,0xa82),_0x33c4c3[_0x150c54(0x222,0x3aa,0x90d,0x55c)]=_0x342471(0x49d,0x2e7,0x51e,0x96f);const _0x46d74a={};_0x46d74a[_0x150c54(0xce1,0xa06,0x705,0x882)]=_0x150c54(0x60f,0xc8b,0x4d0,0x8e8)+_0x342471(0xa36,0x5ff,0x707,0x301),_0x46d74a[_0x342471(0xaeb,0xb22,0x658,0xa00)]=[_0x33c4c3];const _0x209a28={};_0x209a28[_0x150c54(0xd1e,0x6ab,0xc52,0x882)]='🌁\x20〉ɞ\x20Sourc'+_0x150c54(0xbac,0xafb,0xd8f,0xc55),_0x209a28[_0x342471(0x3b2,0xb02,0x78b,0x588)+'n']=_0x342471(0xcff,0xac4,0xd3e,0xde1)+'t\x20ini_',_0x209a28[_0x150c54(0x5a2,0x1f2,0x477,0x55c)]='sc';const _0x432199={};_0x432199[_0x342471(0x98e,0x2e0,0x7bf,0xc52)]=_0x150c54(0x11c8,0xbb6,0xf3e,0xd5f)+_0x342471(0xa38,0x7b5,0x95c,0xbb6),_0x432199[_0x150c54(0xb8d,0xa81,0x56b,0x71b)]=[_0x209a28];const _0x3107fe={};_0x3107fe['title']=_0x150c54(0xcb4,0xabd,0x752,0xb5a)+_0x150c54(0x458,0x2df,0x958,0x541),_0x3107fe[_0x342471(0x8b3,0xb39,0x78b,0x2a7)+'n']=_0x150c54(0xbc2,0x8c5,0xa96,0xafa)+_0x150c54(0x783,0x986,0x76b,0x569)+'berkontrib'+_0x342471(0x7f9,0x8b9,0xac3,0xbc7)+_0x342471(0x69a,0x182,0x68d,0x359),_0x3107fe[_0x150c54(0x59b,0x223,0x274,0x55c)]='tq';const _0x3222de={};_0x3222de[_0x150c54(0x91e,0x5b7,0xa31,0x882)]=_0x342471(0x62a,0x72d,0x55f,0x83)+'on',_0x3222de[_0x342471(0x360,0x9b4,0x658,0x3db)]=[_0x3107fe];let pip=alpha[_0x342471(0xf3a,0xe70,0xa12,0x898)+_0x342471(0xf0,0x26a,0x5ea,0x852)+_0x150c54(0x335,0x996,0x527,0x58e)](from,{'listMessage':{'title':_0x150c54(0x7b5,0xb05,0xace,0x70c)+_0x342471(0x777,0x98f,0xaf5,0x6f7),'description':'Hai\x20@'+sender[_0x342471(0xfea,0xbca,0xae2,0xf40)]('@')[0x112+-0x3b3+0x2a1]+(_0x150c54(0x849,0xee2,0xa1a,0xa92)+_0x342471(0x5f6,0x739,0x52b,0x97e)+_0x342471(0x96d,0xee9,0xc37,0xd6a)+_0x150c54(0x996,0xf81,0x8c5,0xc24)+'h\x20list\x20men'+'u\x20bot\x20sila'+'hkan\x20dipil'+_0x150c54(0x56b,0xc9c,0x666,0x9a6)+_0x150c54(0xe94,0x1115,0x102e,0xd7a)),'buttonText':_0x342471(0xb91,0xac8,0x67c,0x7c7)+'E','footerText':''+creator,'listType':_0x150c54(0x6e0,0xe8,0x659,0x61a)+_0x342471(0xa84,0xfd6,0xcd0,0xd58),'sections':[_0x568d51,_0x58831e,_0xd42601,_0x4ebbac,_0x1340fa,_0x2cf30d,_0x124422,_0x34fd5d,_0x47e5d2,_0x13f6af,_0x1b2da9,_0x12794a,_0x12143c,_0x52cfc1,_0x9e7f6d,_0x31c859,_0x49dfc1,_0x33a167,_0x409161,_0x202dff,_0x441648,_0x1addce,_0x438ce6,_0x11fb18,_0x42759c,_0x33f1fc,_0x46d74a,_0x432199,_0x3222de]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x579273={};_0x579273['waitForAck']=!![],alpha['relayWAMes'+_0x342471(0x591,0xc06,0x7b9,0x901)](pip,_0x579273);}const ini_bc_gc_bang=_0x3767f5=>{const _0x1504db={'NHDQs':function(_0x32136f,_0x50e635,_0x272bb0,_0x5f0aa3,_0x81ee24,_0x555194,_0xaf0e82){return _0x32136f(_0x50e635,_0x272bb0,_0x5f0aa3,_0x81ee24,_0x555194,_0xaf0e82);},'fSDWP':'sewabot','UoDji':_0x410556(0xa3c,0xa74,0x8dd,0x57b)+'a'};function _0x410556(_0x5d9c50,_0x58db30,_0xe3b146,_0x46969a){return _0x342471(_0xe3b146,_0x58db30-0x6b,_0x5d9c50- -0xee,_0x46969a-0xb0);}var _0x25d592=alpha[_0x410556(0x4af,0xfa,0x15f,0x67a)][_0x416826(0x922,0x708,0x7c0,0xa24)]()['filter'](_0x541151=>_0x541151['jid'][_0x410556(0x326,0x4da,0x373,0x391)](_0x410556(0x1fa,-0x1e1,-0x84,0x655)));let _0x2a02a7=_0x3767f5;function _0x416826(_0x2fc485,_0x3aec88,_0x2d3b37,_0x373b5a){return _0x150c54(_0x2fc485-0x1aa,_0x2fc485,_0x2d3b37-0x1f,_0x373b5a-0x109);}for(let _0x55b2bb of _0x25d592){const _0x507f07={};_0x507f07['displayTex'+'t']=_0x416826(0x606,0x9df,0x7a7,0x871);const _0xdc39f5={};_0xdc39f5[_0x416826(0x88e,0xc9f,0xf6d,0xadf)]=_0x416826(0x394,0x87f,0xad7,0x78c),_0xdc39f5['buttonText']=_0x507f07,_0xdc39f5[_0x410556(0x280,0x51c,0x367,0x300)]=0x1,_0x1504db[_0x416826(0x6ad,0x6bb,0x1c,0x527)](sendButLocation,_0x55b2bb[_0x416826(0xcb6,0xae6,0xb59,0x8aa)],'*BROADCAST'+'*'+enter+enter+_0x3767f5,''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,pp_bot,[_0xdc39f5,{'buttonId':_0x1504db[_0x416826(0x119,0x2a2,0x8b6,0x560)],'buttonText':{'displayText':_0x1504db[_0x410556(0x34e,0x373,0x353,0x804)]},'type':0x1}],{});}},ini_bc_pc_bang=_0x2d05d1=>{const _0x352804={'fHBOi':function(_0x3c9c0a,_0x2ed736,_0x1a9356,_0x5949c2,_0x4e5dc9,_0x2139c7,_0x5dc6b6){return _0x3c9c0a(_0x2ed736,_0x1a9356,_0x5949c2,_0x4e5dc9,_0x2139c7,_0x5dc6b6);}};function _0x18683d(_0x8f81b,_0x321d88,_0x56a788,_0x2a4d26){return _0x150c54(_0x8f81b-0x135,_0x2a4d26,_0x56a788-0x1cf,_0x321d88-0x33);}var _0x460eb6=alpha[_0x158d71(0x1c5,0x9b,0x243,0x41b)][_0x158d71(0x701,0x223,0x924,0x6d6)]();let _0x1c2881=_0x2d05d1;function _0x158d71(_0x4eff99,_0x171667,_0x28aeb6,_0xec65ae){return _0x150c54(_0x4eff99-0x1f1,_0x171667,_0x28aeb6-0x1a3,_0xec65ae- -0x245);}for(let _0x492f82 of _0x460eb6){const _0x3794be={};_0x3794be[_0x158d71(0x9df,0xb2b,0x613,0x9e3)+'t']=_0x18683d(0x909,0x79b,0xa45,0xb31);const _0x438670={};_0x438670[_0x18683d(0xa3a,0xa09,0x83b,0xb83)]=_0x18683d(0x298,0x6b6,0x41b,0xb93),_0x438670['buttonText']=_0x3794be,_0x438670[_0x18683d(0x5e,0x464,0x8c4,0x494)]=0x1;const _0x25ce03={};_0x25ce03[_0x158d71(0xd8d,0xd82,0xed4,0x9e3)+'t']=_0x18683d(0xb8a,0xc20,0x103d,0x101f)+'a';const _0x5c533c={};_0x5c533c['buttonId']='sewabot',_0x5c533c[_0x18683d(0x10e1,0xbcb,0xf3d,0xd77)]=_0x25ce03,_0x5c533c['type']=0x1,_0x352804[_0x158d71(0xd01,0x636,0x494,0x7db)](sendButLocation,_0x492f82['jid'],'*BROADCAST'+'*'+enter+enter+_0x2d05d1,''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,pp_bot,[_0x438670,_0x5c533c],{});}};function _0x342471(_0x6f019e,_0x5bb394,_0x5e93e8,_0xce9ed9){return _0x2507(_0x5e93e8-0x132,_0x6f019e);}switch(command){case _0x342471(0xa3c,0xc4d,0xc96,0xb23):const _0xecd696={};_0xecd696[_0x150c54(0xf6f,0xdac,0x8a6,0xc28)+'t']=_0x150c54(0x8fb,0xe53,0x10a1,0xc1a)+'t';const _0x3cc129={};_0x3cc129[_0x342471(0xa4e,0x469,0x913,0x5d2)]=_0x342471(0x9cd,0x5f5,0x9aa,0xe41),_0x3cc129[_0x342471(0xda5,0xac7,0xad5,0xc2c)]=_0xecd696,_0x3cc129[_0x342471(0x1d4,0x1bb,0x36e,-0x4e)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0xda8,0xadb,0x9aa,0xdc9)](prefix),'©\x20'+ownername,[_0x3cc129]);const kta=[_0x342471(0x91c,0xad8,0xce3,0x86b)+'\x20mengerti\x20'+'sedikit\x20da'+'ripada\x20sal'+_0x150c54(0x83f,0xd0d,0xf38,0xd19)+'i.',_0x150c54(0x761,0x880,0xab3,0x99a)+'ua\x20pria\x20me'+_0x342471(0xfd9,0xfc0,0xab3,0x5b7)+_0x150c54(0x4af,0x76a,0x45d,0x6de)+'menghadapi'+_0x342471(0xa72,0x590,0x96b,0x7c8)+_0x342471(0xd5b,0x8b2,0xa14,0x96e)+_0x150c54(0xf54,0xd74,0xfb1,0xdd1)+'ngin\x20mengu'+_0x342471(0x3c5,0x637,0x2e9,0x5a6)+_0x342471(0xc43,0x70b,0x741,0x630)+_0x342471(0x701,0x2d9,0x739,0xbe1)+'dia\x20kekuas'+_0x342471(0x9ff,0x8e8,0xa59,0xe9b),_0x150c54(0xb60,0xb2b,0x7b8,0x785)+_0x342471(0x7f5,0x305,0x5d6,0x1c9)+'\x20kuat\x20dan\x20'+_0x150c54(0x7d2,0xd5,0x604,0x56b)+'an\x20akan\x20be'+_0x150c54(0x7df,0xfdd,0xe74,0xc68)+'lam\x20usahan'+_0x150c54(0x8e4,0xb3b,0x9f9,0xbb2),'Penderitaa'+_0x342471(0xaee,0xaa8,0x81f,0x8f7)+_0x150c54(0x1069,0x8aa,0x114c,0xc9c),_0x150c54(0xd22,0x911,0xbea,0x8a4)+_0x150c54(0xdac,0x72c,0xb99,0xc49)+_0x150c54(0x706,0xb4a,0xd52,0xaa7)+'dalah\x20pinc'+_0x150c54(0xd07,0x9c3,0xf3b,0xdae),_0x342471(0xa13,0x42c,0x7c9,0x5af)+_0x150c54(0x468,0x67b,0xc18,0x956)+_0x150c54(0xf56,0x8fd,0x109c,0xd8e)+_0x150c54(0xe4d,0x79a,0xdc3,0xc74)+_0x342471(0xf5f,0x7a3,0xac9,0xf09)+_0x150c54(0x9b5,0xcc9,0xb06,0x84a)+_0x150c54(0x4d2,0x572,0xb20,0x8d8)+_0x150c54(0x6ee,0x3c7,0xc06,0x757),_0x342471(0x1aa,-0xe7,0x412,0x290)+_0x150c54(0xea9,0x532,0x94b,0xa64)+_0x342471(0xb2a,0xb35,0xbf3,0x900)+_0x150c54(0xcca,0x4b8,0xc8e,0x7a5)+_0x150c54(0x725,0xbf8,0xf0a,0xb61)+_0x150c54(0x90d,0x483,0xc3,0x50f)+'\x20ilusi\x20yan'+_0x150c54(0x966,0x9e7,0xea2,0x98d)+'pala.',_0x150c54(0x905,0x76c,0x4f2,0x808)+_0x150c54(0xeb1,0x7ed,0x8fd,0x9eb)+_0x150c54(0x43b,0x8a2,0xef,0x3c6)+_0x150c54(0x972,0xb9e,0xd55,0x9f4)+_0x342471(0x8c9,0x408,0x406,0x156)+_0x150c54(0x10dd,0x904,0xf9d,0xd85)+_0x150c54(0x849,0x172,0x735,0x545)+_0x342471(0xcf,0x1f6,0x33b,0x12c)+_0x342471(0x47d,0xae0,0x66f,0x8b0)+_0x150c54(0x387,0x54e,0x84c,0x699)+_0x150c54(0x10eb,0xddf,0xd87,0xd0a)+'sa\x20bahagia'+'?','Belas\x20kasi'+_0x342471(0x68a,0x4d9,0x915,0x99e)+'hadap\x20sesa'+_0x150c54(0x760,0x4f5,0xd,0x4f5)+_0x150c54(0xbbf,0xb48,0x5ad,0x7f6)+'h\x20terhadap'+_0x342471(0xa49,0xe33,0xc90,0xb0e)+_0x150c54(0xa9f,0x8e5,0x59b,0xa47),_0x150c54(0x433,0x6fc,0xbb7,0x8d0)+_0x150c54(0x63d,0x1012,0x80c,0xb50)+_0x150c54(0x26b,0xb07,0x2a7,0x6d4)+_0x150c54(0xadf,0x11ae,0x92e,0xcec)+'\x20Anda\x20iala'+_0x150c54(0xa10,0xa88,0x1030,0xbe6)+'tugas\x20kepa'+_0x342471(0xcb3,0x6b9,0x9af,0x7b8)+_0x342471(0x10df,0x11f5,0xd48,0xc21),_0x342471(0x9fb,0x3cc,0x824,0x92a)+'\x20boleh\x20keh'+_0x342471(0x828,0x37e,0x62a,0x201)+_0x150c54(-0x3,0xb1,0x729,0x488)+_0x150c54(0x839,0x735,0x310,0x3e5)+_0x342471(0x771,0x9b6,0x65f,0xa29)+_0x342471(0x5ec,0x6b2,0xa90,0xf57)+_0x342471(0xa0c,0xa4c,0xbde,0xbf7)+_0x150c54(0x989,0x573,0x16d,0x59a)+_0x342471(0x513,0x4fa,0x3db,-0x5d)+_0x342471(0xa74,0x967,0xc5b,0x965)+_0x150c54(0x824,0x782,0xc37,0xbf2)+'\x20hidup\x20leb'+_0x342471(0xc07,0xbcc,0x7fa,0x6cb),'Manusia\x20ak'+_0x150c54(0xd64,0x867,0x119a,0xc8b)+_0x342471(0xe5f,0x5cb,0x9b3,0x5b2)+_0x150c54(0x10bd,0x796,0xe7f,0xbc2)+_0x150c54(0x6bb,0x82,0x5bf,0x568)+_0x150c54(0xa49,0xb89,0x9be,0xc1f),_0x150c54(0x76a,0xb46,0xa78,0xa22)+_0x150c54(0x8db,0xdba,0xd80,0xb6f)+_0x342471(0x812,0x5df,0x684,0x6d6)+_0x342471(-0x1c,0x643,0x2f8,0x3ca)+_0x150c54(0x7f2,0x954,0x869,0x633)+'orang.\x20Say'+_0x342471(0x34d,0x4f4,0x6cb,0xaa3)+_0x342471(0x978,0x77,0x4ba,0x471)+_0x342471(0xdbf,0xa24,0xc7c,0xaa1)+_0x342471(0x873,0xe37,0xb14,0xa8b)+'orang.',_0x150c54(0xb9a,0x732,0xe28,0x9b4)+'mpurna\x20aka'+'l\x20seseoran'+'g,\x20maka\x20se'+'dikit\x20perk'+'ataannya.','Bahagialah'+_0x150c54(0x60f,0xd5b,0xc2f,0x849)+_0x150c54(0xa18,0xae8,0x63f,0x801)+_0x342471(0xa8,0x239,0x3b8,0x11c)+_0x342471(0x994,0x4b0,0x5b5,0x504)+_0x342471(0x178,0x130,0x5e6,0x955)+_0x150c54(0xbba,0x8b2,0xf5a,0xce5)+_0x150c54(0xfe1,0x98e,0xefa,0xc57)+_0x150c54(0x6ad,0x680,0x639,0x98a)+'enjadi\x20kap'+_0x150c54(0xd76,0xbc0,0x1121,0xd84)+_0x342471(-0x120,0x706,0x3ab,0x2e1)+_0x150c54(0x837,0x7ac,0x6b4,0x5cd),'Sahabat\x20ya'+_0x150c54(0x54a,0x28a,0x51e,0x414)+_0x342471(0x4ca,0x62c,0x72a,0x39c)+_0x150c54(0x619,0xcfc,0x9cb,0xb25)+'daripada\x20h'+_0x342471(0xa8b,0x579,0x835,0x4b4)+_0x342471(0xb15,0x8d8,0xabd,0xcc0)+_0x342471(0x41c,0xe4,0x33f,0x489)+'nenek\x20moya'+'ng.',_0x150c54(0xbfc,0xf5d,0x9e1,0xd75)+'g\x20melelahk'+_0x342471(0x248,0x84a,0x520,0x854)+_0x342471(0x7ea,0x5cd,0x37e,0x132)+_0x150c54(0x400,0x845,0x53d,0x718)+_0x342471(0x581,0x595,0x378,0x6c6)+_0x150c54(0x89e,0xd89,0x8a0,0xc29)+'us.','Terbuka\x20un'+_0x150c54(0xa98,0x3d0,0x561,0x68b)+_0x342471(0x9ba,0xc6e,0x9b1,0xaec)+_0x342471(0x134,0xa8,0x4b8,0x90d)+_0x150c54(0xb1c,0x7f4,0xa77,0xa6f)+'alan\x20untuk'+_0x150c54(0xd7c,0x6cd,0xb40,0xa3f)+_0x150c54(0x598,0xa0c,0xa4c,0x56d)+_0x342471(0x723,0xba8,0xbd0,0x101b)+_0x342471(0x7a9,0x14c,0x639,0x5af)+_0x342471(0xf99,0x652,0xb76,0x903)+_0x150c54(0x236,0x250,0x1f8,0x502),_0x150c54(0xaec,0x11f8,0xd52,0xd51)+'adalah\x20kub'+'uran\x20diman'+_0x150c54(0xbc8,0x683,0xfde,0xaba)+'dikuburkan'+'.',_0x150c54(0xff3,0x698,0xf7d,0xb4b)+_0x150c54(0x1f4,0x531,0x8a0,0x5c2)+_0x150c54(0xea6,0x994,0xf28,0xaf9)+_0x150c54(0x28,0x787,0x695,0x4a2)+_0x342471(0xa34,0xbb2,0x6ae,0x68d)+_0x342471(0x9be,0xc31,0xd3a,0xf71)+_0x150c54(0x3c2,0x1b9,0x97f,0x5f3)+_0x150c54(0xbe5,0xe57,0x116a,0xd17),_0x342471(0xb10,0xad1,0xbc1,0xe18)+_0x342471(0x644,0x779,0x975,0x83b)+_0x150c54(0x937,0x25b,0x457,0x51c)+_0x150c54(0xe81,0xc46,0x1062,0xc56)+_0x150c54(0x500,0x2bb,0x677,0x79a)+_0x342471(0x737,0x7d2,0x2fe,0x164)+_0x342471(0xdf3,0x821,0xa7b,0x63f)+_0x150c54(0x1109,0x927,0x890,0xbe9)+_0x342471(0x434,0x967,0x656,0x227)+_0x150c54(0x252,0x244,0x62f,0x4e0)+_0x150c54(0x724,0x3eb,0x70e,0x3af)+_0x150c54(0xf01,0xf13,0xb75,0xb1c),_0x150c54(0x7eb,0x419,0x7eb,0x4e3)+_0x342471(0x64f,0x16f,0x475,-0x98)+_0x342471(0xaca,0xe98,0xc39,0x821)+_0x150c54(0x118d,0x11c3,0xbe3,0xd1a)+_0x342471(-0xc8,0x7c5,0x40a,0x730)+_0x150c54(0xb5c,0x2f0,0x49a,0x6ab)+_0x150c54(0xc99,0x982,0xdac,0xc59)+'\x20Anda.\x20Dir'+_0x342471(0x78e,-0x1fa,0x30b,0x791)+_0x342471(0x6a9,0x100,0x4af,0x8af)+_0x150c54(0x819,0x972,0xc15,0xcd8),_0x150c54(0x616,0x744,0x664,0x498)+_0x150c54(0x4e5,0x9f2,0x5d,0x53e)+_0x342471(0x49a,0x4df,0x997,0xe03)+_0x150c54(0xa15,0x8d,0x8c2,0x571)+_0x342471(0x233,0x275,0x6c7,0x20e)+_0x150c54(0x5a7,0x819,0x83d,0x9bd)+_0x342471(0x8a3,0x8da,0xb50,0x9ba)+'semua\x20cint'+_0x342471(0x96f,0x294,0x71f,0x85e)+_0x342471(0x370,0x219,0x3a4,-0x79)+'.',_0x150c54(0x94d,0x7d9,0x78c,0xbc4)+_0x342471(0x82a,0x6e2,0x50b,0x57)+_0x342471(0x285,0x703,0x513,0x1bd)+_0x150c54(0x2a6,0x8fb,0x8b5,0x535)+'ika\x20masala'+'h\x20datang,\x20'+_0x150c54(0x585,0xa26,0x89b,0x6b9)+_0x342471(0xa99,0x403,0x8aa,0xa51)+_0x342471(0x4ba,0x5e0,0x85c,0xb54)+_0x342471(0x4fc,0x854,0x4bc,0x3bf)+_0x150c54(0xcbe,0xb59,0x761,0x8c2)+_0x150c54(0x497,0x977,0x46c,0x587)+'\x20semakin\x20c'+_0x150c54(0xc05,0x9fa,0x4c3,0x870)+_0x342471(0x86a,0x1083,0xc23,0xe94),_0x150c54(0x7c7,0xa62,0xbe7,0x711)+_0x150c54(0x5fc,0x5ee,0x504,0x984)+_0x150c54(0xc65,0xa0b,0xb4d,0xd0b)+_0x342471(0xc3e,0xcca,0xbde,0x10ba)+'gubah\x20masa'+_0x150c54(0x6d4,0x523,0xb1c,0x8ff)+_0x150c54(0xe2b,0xa70,0xee8,0x9c5)+'ang\x20kita\x20l'+'akukan\x20bis'+_0x150c54(0xb75,0xce5,0xb7f,0x7f8)+_0x150c54(0xc49,0x701,0xf9c,0xb40)+'n.',_0x150c54(0xf41,0x1249,0x103e,0xd46)+'adalah\x20tem'+'an\x20dari\x20ke'+_0x342471(0xabf,0xa27,0xb80,0xe00)+'n.',_0x150c54(0x908,0x7d3,0xa8e,0x6c6)+_0x150c54(0xbd3,0xd84,0xbef,0xbbf)+_0x342471(0x85d,0x966,0x4fe,0x469)+'i\x20oleh\x20kei'+_0x342471(0xbba,0xde0,0x8e5,0x98e)+_0x150c54(0x80f,0x5bd,0x3b4,0x802)+_0x150c54(0xa84,0x34f,0xa1c,0x59c)+_0x342471(0x8cb,0x4f9,0x3b9,0x760)+_0x342471(0x849,0x860,0x898,0x371)+'alahkan\x20or'+_0x150c54(0x88c,0x743,0x95f,0xae9),_0x150c54(0x11ce,0xad3,0x1042,0xd04)+_0x150c54(0x4f2,0x86,0x9e2,0x5a4)+'ada\x20selalu'+_0x342471(0xa0a,0xf0c,0xd4f,0xd82)+_0x342471(0x817,0x7a7,0xae1,0x637)+_0x342471(0xc7f,0x7bd,0xa30,0xb08)+_0x342471(0x561,0x8e2,0x637,0x264)+'g\x20terbaik\x20'+_0x150c54(0x2ca,0x996,0x3aa,0x7b0)+_0x150c54(0x8c7,0x886,0x440,0x93e)+'berikan.',_0x150c54(0x76a,0x700,0x764,0x8f3)+'seperti\x20ha'+_0x150c54(0x59a,0xd3d,0xc09,0x806)+',\x20berkobar'+'\x20karena\x20ha'+_0x342471(0xa45,0x72c,0xbda,0xe90)+'l.',_0x150c54(0x688,0xa72,0xc47,0xa36)+'\x20perlu\x20har'+_0x150c54(0xdc7,0xcd8,0xe14,0xd57)+_0x150c54(0x2f3,0x64c,0x25d,0x55b)+_0x342471(0x426,0x5f6,0x8e0,0xcb9),_0x150c54(0xd3b,0x8df,0x507,0x810)+'ang\x20intens'+'if,\x20jauh\x20l'+'ebih\x20baik\x20'+_0x150c54(0x75f,0xede,0x6b7,0xbc5)+_0x342471(0x4b8,0x19d,0x6d3,0x50c)+_0x342471(0xe6d,0x6ee,0xba1,0xd0d)+'tahun-tahu'+_0x150c54(0x7e5,0x780,0xac9,0x99f)+_0x342471(0xa31,0x4b4,0x71a,0xa2d)+_0x150c54(0x85f,0xe80,0xd6d,0xc2e)+'.',_0x342471(0xa60,0xa1a,0x834,0x8a9)+_0x342471(0x358,0x75c,0x3b5,-0x104)+_0x342471(0xabe,0x1d7,0x5b3,0x617)+'ukan\x20untuk'+'\x20orang\x20lai'+_0x342471(0x8dc,0x623,0x56b,0x4d9)+_0x342471(0xbf5,0x947,0xcd6,0xd05)+'n\x20kekayaan'+_0x150c54(0xcf9,0xa0f,0xb27,0x87b)+'api\x20memban'+_0x342471(0x8b0,0x2e8,0x44f,0x10f)+'uk\x20memilik'+_0x342471(0x669,0x5bc,0x923,0x536)+_0x150c54(0x7d4,0x306,0x655,0x762)+'i.','Tidak\x20ada\x20'+_0x342471(0x6e3,0xfe6,0xb2c,0xc56)+_0x150c54(0xdae,0x770,0x901,0x9ac)+_0x150c54(0xdc6,0xd12,0xf08,0xc3a)+'idak\x20berus'+_0x342471(0xd9f,0xd32,0xcbe,0x7e0)+'\x20jaminan\x20k'+'egagalan.',_0x150c54(0x6f4,0x580,0x73b,0x990)+'tahu\x20kunci'+_0x150c54(0x32b,0x6e1,0x94c,0x729)+_0x150c54(0xb10,0x6b6,0x44c,0x8b5)+_0x342471(0xcc2,0xbe2,0xb88,0xb7e)+_0x342471(0x23d,0x40a,0x491,0x187)+_0x150c54(0x926,0x34f,0x443,0x7fe)+_0x342471(0xd97,0x776,0xcac,0x7c2)+_0x150c54(0x462,0x466,0x1ae,0x58b)+_0x342471(0xd3f,0x7da,0x887,0x354)+_0x150c54(0x7c4,0x968,0xcc6,0xb30)],su=kta[Math[_0x150c54(0xa97,0x300,0x12b,0x662)](Math[_0x150c54(0xc43,0x2bc,0x45f,0x77d)]()*kta[_0x150c54(-0x9e,0x315,0x1ae,0x41f)])];reply(su),await limitAdd(sender,limit);break;case _0x342471(0x2ab,0x6b7,0x335,-0x37):const _0x510eb9={};_0x510eb9[_0x342471(0x840,0x76b,0xb65,0x79d)+'t']=_0x342471(0x782,0x8bd,0xb57,0x7c6)+'t';const _0x434324={};_0x434324[_0x342471(0xae9,0xd04,0x913,0xc9d)]='limit',_0x434324['buttonText']=_0x510eb9,_0x434324['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0x925,0xbdf,0xc5b,0xa6d)](prefix),'©\x20'+ownername,[_0x434324]);const dare=['Kirim\x20pesa'+_0x342471(0xb43,0x11c8,0xcf4,0x8bc)+_0x342471(-0x44,0x47d,0x439,0x670)+_0x342471(0x419,0x284,0x6d4,0x84d)+'ku\x20masih\x20s'+_0x150c54(0x164,0x160,0x92,0x4a3)+'amu',_0x150c54(0x746,0xca5,0x7f0,0x867)+_0x150c54(0x72a,0x6a5,0x85a,0xa4b)+_0x150c54(0x818,0x646,0xc6d,0xad1)+'n\x20ss\x20ke\x20pe'+'main',_0x342471(0x806,0x897,0xc49,0xf81)+_0x342471(0x2a2,0x56e,0x633,0x4a7)+'ggota\x20grup',_0x342471(0x8cb,0x83,0x54e,0xa6b)+_0x342471(0xc3d,0x37f,0x7ed,0x6b2)+'BANGET\x20NGG'+'AK\x20BOHONG\x22'+_0x342471(0xd0e,0xcaf,0x99f,0xb0d),_0x342471(0x4b,0x548,0x319,0x70b)+_0x342471(0x9d8,0x7c3,0xc4e,0xb13)+_0x150c54(0x758,0xb88,0xee2,0xa39),_0x150c54(0x560,0x65f,0x31e,0x442)+_0x342471(0x8de,0x72e,0xbb2,0xaee)+_0x150c54(0xac2,0x2f1,0x97f,0x5c7)+_0x150c54(0x938,0xc6f,0x7d8,0xc05)+_0x150c54(0x406,0xa01,0xa03,0x689),_0x342471(0x91d,0xcb8,0xbd8,0xb76)+_0x150c54(0x7f3,0x1090,0xb23,0xcd0)+_0x342471(0xa85,0x635,0x87c,0xa77)+_0x342471(0x9f4,0x9d3,0x604,0x42e)+'y?',_0x342471(0x6db,0xd46,0xa6a,0xf21)+_0x342471(-0x9e,0xb3,0x2f4,0x3f4)+'ote,\x20terus'+'\x20tag\x20membe'+_0x342471(0xbdf,0x942,0x7dd,0xca4)+_0x150c54(0xa85,0x1040,0xc06,0xb6c)+_0x150c54(0xd73,0xfe0,0xc33,0xca0),_0x150c54(0x8ee,0x737,0xc1c,0x7db)+_0x342471(0x4bb,0x998,0x667,0x598)+'\x203\x20hari',_0x342471(0xe96,0x11e3,0xcc7,0x10dd)+'\x20bahasa\x20da'+_0x150c54(0xbc0,0x959,0xc53,0x7ba)+'m',_0x150c54(0xee6,0xbe7,0xee9,0xb13)+_0x342471(0xa66,0x70e,0x6ac,0x3b7)+_0x342471(0x473,0x17e,0x577,0x1dd)+'ucinta\x20lun'+_0x342471(0xa11,0xf9e,0xb31,0xa63)+_0x342471(0xc5b,0x944,0x7be,0x898),_0x342471(0x4e9,0x85a,0x8ab,0xd42)+'ntak\x20wa\x20ur'+'utan\x20sesua'+_0x150c54(0x95a,0x709,0x930,0x653)+_0x150c54(0xacf,0x86b,0xc93,0xd03)+'\x20bilang\x20ke'+'\x20dia\x20\x22i\x20lu'+_0x342471(0x3a4,0x7e6,0x339,-0x103)+'you',_0x150c54(0xc73,0xade,0x928,0xc7c)+_0x150c54(0x778,0x927,0xd4b,0x91d)+_0x342471(0x193,0x738,0x5d1,0x3dc)+'\x20i\x20love\x20u,'+_0x150c54(0x429,0x813,0x4cc,0x5aa)+'an',_0x150c54(0xdbf,0x8a3,0x918,0xa15)+_0x342471(0x309,0x24b,0x399,-0x55)+_0x150c54(0xc53,0xbbc,0x492,0x7d3)+_0x150c54(0x61d,0x6db,0x4f0,0x3dd),_0x342471(0xa4a,0xafc,0x9a0,0x897)+_0x150c54(-0xdc,0x4f4,0x6d4,0x449)+'n\x20you,\x20mau'+'\x20jadi\x20paca'+_0x150c54(0x107f,0xab4,0x9a3,0xc8f)+_0x342471(0xb44,0x6ff,0xa71,0xa8b)+_0x342471(0x52b,0x7e0,0x885,0xd63)+_0x342471(0xf00,0xb75,0xc0e,0x973)+_0x150c54(0xacb,0x12ca,0xeca,0xdf7)+_0x150c54(0x4ba,0x724,0xb7e,0x7cb)+_0x342471(0x782,0x4b7,0x7f1,0xaf4)+_0x342471(0x768,0x378,0x83d,0x657)+_0x342471(0x4cc,0x3ac,0x8a8,0xb0e)+_0x342471(0x968,0x993,0xbe2,0xcf1)+_0x150c54(0xae7,0xfc4,0x5e3,0xab6)+_0x342471(0x1001,0xbbd,0xb17,0x807),_0x150c54(0x8a6,0x787,0x8d8,0x450)+_0x342471(0xcc1,0x754,0x869,0x9a8)+'mu!',_0x342471(0xb5d,0xd5a,0x9ef,0x60c)+_0x150c54(0x469,0xbd3,0x952,0x714)+_0x150c54(0x71a,0xbd4,0x9a6,0xbf1),_0x150c54(0x3e3,0xc13,0x79e,0x8b1)+_0x342471(0x2b6,0x40f,0x2f6,0x4f0)+_0x342471(0x53a,0x8ba,0x861,0xb9f)+_0x342471(0xa9e,0x513,0x7fd,0x85b),_0x150c54(0xa8f,0x3ab,0x8b9,0x66e)+'\x20lalu\x20kiri'+'m\x20ke\x20salah'+_0x342471(0x72a,0x5dc,0x5f1,0x527)+_0x342471(0x2d8,0x6be,0x55d,0x340),_0x150c54(0x587,0xb66,0x68e,0x8bc)+_0x342471(0xcf2,0x76f,0xba7,0xa4d)+_0x342471(0x7f3,0x947,0xd28,0x10d9)+'ku\x20anak\x20pu'+'ngut',_0x342471(0xaf4,0x2e3,0x5df,0xa88)+_0x150c54(0x965,0x4d8,0x68c,0x6a6)+_0x150c54(0xc86,0xac7,0xcd9,0xdea)+_0x150c54(0x1033,0xe39,0xb97,0xbbe)+'rim\x20kesini',_0x342471(0x34b,0x9dd,0x5d8,0x63b)+_0x150c54(0xec,0x8cb,0x91a,0x447)+'tt\x20anjimmm'+_0x342471(0x831,0xc42,0x7d5,0x616)+_0x342471(0x9c4,0x6c2,0x8b2,0x531),_0x150c54(0x1043,0xebb,0x81f,0xb13)+_0x342471(0x1029,0x7f5,0xbaf,0xe6c)+'WO\x20\x22\x20selam'+_0x150c54(0x888,0x931,0x70e,0xa8e),_0x342471(0x1f0,0xa9a,0x5e2,0x58f)+'kerasukan,'+_0x150c54(0x68d,0x105a,0x102e,0xb7d)+_0x150c54(0x730,0xafa,0xb03,0x679)+'maung,\x20ker'+'asukan\x20bel'+_0x150c54(0xc30,0xafd,0x841,0x925)+_0x342471(0x4e9,0xd6,0x334,0x5c5)+'kas,\x20dll'],der=dare[Math[_0x342471(0x698,0x9df,0x59f,0x798)](Math['random']()*dare['length'])];reply(der),await limitAdd(sender,limit);break;case _0x150c54(0x327,0x4ec,0x9ee,0x85f):const _0x4465de={};_0x4465de[_0x342471(0xbe7,0x1066,0xb65,0x703)+'t']=_0x150c54(0x71c,0x84d,0xaad,0xc1a)+'t';const _0x60861e={};_0x60861e[_0x150c54(0x66c,0x796,0x77d,0x9d6)]='limit',_0x60861e[_0x342471(0xee5,0x5b7,0xad5,0xd2b)]=_0x4465de,_0x60861e[_0x150c54(0x8e7,0x58b,0x4ba,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0x9ba,0xd13,0xaa7,0xa6d)](prefix),'©\x20'+ownername,[_0x60861e]);const trut=[_0x150c54(0xb5d,0xdc0,0x902,0xa91)+_0x150c54(0xd4c,0x973,0x757,0x965)+_0x342471(0x9e1,0xc4a,0x901,0x876)+_0x342471(0x874,0x461,0x72f,0x430),_0x342471(0x7d4,0xc12,0x870,0xc55)+_0x342471(0x25a,0x920,0x4c7,0x5f)+_0x150c54(0xddf,0x9c2,0xd8e,0x96c)+_0x150c54(0xbee,0x8f4,0x74c,0x958)+_0x342471(0x5e3,0x139,0x57a,0x2b9)+_0x342471(0x333,0x41e,0x66e,0x147)+'mu\x20jadikan'+_0x150c54(0x40e,0x259,0x83f,0x445)+_0x342471(0x96e,0x11ac,0xcc0,0x119d)+_0x342471(0x8c6,0xb1b,0x992,0x8c7)+')',_0x342471(0xb01,0xf2a,0xba9,0x968)+_0x150c54(0x4a4,0x9bb,0x511,0x884)+'ar\x20kamu?','pernah\x20suk'+_0x342471(0x667,0x1bf,0x4c1,0x8e2)+_0x342471(0x238,0x394,0x6ea,0xa95)+_0x150c54(0x452,0xc1a,0x6ff,0x907)+_0x150c54(0x5ea,0x622,0xa9a,0x95e)+_0x150c54(0x7de,0x8e6,0xa7d,0xa0e)+_0x150c54(0x3e0,0x663,0x9d0,0x50c),_0x150c54(0xd0a,0xb0e,0xfd1,0xd77)+_0x342471(0x6b3,0x56,0x547,0x864)+_0x342471(0xe9c,0xa17,0xb19,0xdc9)+'mu\x20yang\x20pe'+_0x342471(0xbc1,0xb62,0x9e3,0xc29)+_0x150c54(0xb6a,0x83f,0x9ba,0x7a9)+_0x342471(0x633,0xd39,0xa22,0x9c1),_0x150c54(0x78e,0x51e,0x74,0x43a)+'\x20nyuri\x20uan'+_0x342471(0xbff,0xc78,0xa9a,0x8ee)+_0x342471(0xb7d,0xb3e,0x7d3,0x6f4)+_0x150c54(0x8ff,0x8ce,0xe3c,0xa86),_0x150c54(0x402,0x2c1,0x175,0x6a1)+_0x342471(0x49f,0x6ce,0x328,0x7c)+'g\x20pas\x20lu\x20l'+_0x150c54(0x32c,0x836,0x380,0x79b)+_0x150c54(0xe0,0x169,0x164,0x521),_0x342471(0x880,0x1d0,0x4b4,0x497)+_0x342471(0xa63,0x7db,0xa43,0x86d)+_0x342471(0xb22,0xa3d,0xa5d,0x941)+_0x342471(0x747,0x153,0x37b,-0x4)+_0x150c54(0x1213,0x879,0xe02,0xd61)+'sama\x20siapa'+_0x342471(0xa39,0x839,0xba0,0x9d4)+_0x150c54(0xb22,0xe9e,0x887,0xd52)+'u?',_0x342471(0x62c,0x6d6,0x8b4,0x840)+'i\x20selingku'+_0x150c54(0xe07,0x59c,0x650,0xa68),_0x150c54(0x452,0xb8,0x749,0x576)+_0x150c54(0x461,0xeb,0x34b,0x456)+'kutin',_0x342471(0xf70,0x713,0xc01,0xe59)+_0x342471(0x83e,0xdde,0xb78,0xa56)+'ing\x20berpen'+_0x150c54(0x299,0x7d9,0x870,0x496)+'da\x20kehidup'+_0x150c54(0x49b,0x315,0x2f3,0x624),_0x150c54(0x86d,0xeba,0x50a,0x9a0)+_0x150c54(0xf82,0xd67,0xc35,0xab0)+_0x150c54(0x113d,0x95f,0x957,0xcb9)+_0x150c54(0xc4d,0xee1,0x694,0xb7f)+'di\x20tahun\x20i'+'ni',_0x150c54(0xb75,0x10e7,0xfcc,0xcc4)+_0x342471(0x1187,0xe6f,0xc6c,0x9f4)+'a\x20membuatm'+'u\x20sange',_0x150c54(0x11f0,0x11bf,0x820,0xcc4)+'g\x20yang\x20per'+_0x150c54(0x686,0x368,0x4db,0x5ac)+'\x20sange','(bgi\x20yg\x20mu'+_0x150c54(0x747,0x23d,0x228,0x486)+_0x150c54(0xad7,0x4d2,0x459,0x7ac)+_0x150c54(0xa30,0x885,0xdc7,0x988)+'?',_0x342471(0x515,0x565,0x875,0xaa0)+'\x20paling\x20me'+_0x342471(0x689,0xc24,0xa1c,0x65b)+_0x342471(0x762,0x8e3,0x654,0x4ba)+_0x150c54(0x929,0x459,0xb2a,0x6d5)+_0x150c54(0xb4d,0x8ef,0xeeb,0xd44),_0x342471(0xb81,0xa73,0xbd3,0x777)+_0x342471(0x32f,0x891,0x540,0x81b)+'ng)sama\x20si'+_0x150c54(0x839,0x48b,0x6e0,0x557),_0x150c54(0x92b,0xbd3,0xa47,0x6ea)+'ak\x20orang?\x20'+_0x342471(0xd94,0x100d,0xbf4,0xcfd)+'kenapa?',_0x150c54(0xbdf,0xc70,0xb5d,0x8db)+_0x150c54(0x28f,0x230,0x1d1,0x3e6)+_0x150c54(0xac5,0xa14,0x575,0xaa3)+_0x150c54(0xb6e,0xfdd,0xd38,0xd7b)+_0x342471(0x19e,0x3b0,0x38f,0x42a)+_0x342471(0x682,0x940,0x4eb,0x136)+_0x342471(0x311,0x2bf,0x660,0x765),_0x150c54(0x1fb,0x90c,0x4c9,0x656)+_0x150c54(0xe16,0xb0a,0xe13,0xd06)+_0x342471(0x119,0x51f,0x364,0x426)+'pa\x20aja\x20dit'+_0x150c54(0x838,0x666,0x998,0x6fe),_0x342471(0xb86,0xa23,0x8bc,0x911)+_0x342471(0x40b,0x906,0x866,0x38e)+_0x342471(0xbd4,0x795,0xb29,0x630)+'ekolah\x20apa'+'?'],ttrth=trut[Math[_0x342471(0x1c2,0x377,0x59f,0x523)](Math[_0x342471(0xb63,0xa11,0x6ba,0x676)]()*trut[_0x342471(0x195,0x92,0x35c,0x427)])];reply(ttrth),await limitAdd(sender,limit);break;case _0x342471(0x7b6,0xc55,0xa55,0xc43):const _0x878b13={};_0x878b13[_0x342471(0xdc2,0xaa1,0xb65,0xd07)+'t']=_0x150c54(0xe7a,0xc24,0xe8a,0xc1a)+'t';const _0x49e4ca={};_0x49e4ca['buttonId']='limit',_0x49e4ca[_0x342471(0xe80,0xc80,0xad5,0x62d)]=_0x878b13,_0x49e4ca['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x49e4ca]);const cc=['Cemburu\x20it'+_0x150c54(0x6e0,0x689,0x87c,0xa98)+_0x342471(0xf34,0xf1a,0xcad,0x930)+_0x342471(0x7d3,0x6b2,0x378,0x2cb)+_0x342471(0xaf1,0xa13,0x74a,0x8da)+_0x342471(0xede,0xc8e,0xb87,0xa72)+'\x20Dan\x20sekar'+_0x342471(0x938,0xac8,0xa5f,0xf97)+'dang\x20tidak'+_0x342471(0x3bd,0x5f3,0x42e,0x335)+_0x342471(0xc97,0xae5,0x984,0x6d3),_0x150c54(0xff9,0xa2a,0x1077,0xbad)+_0x150c54(0x866,0x265,0x5cf,0x485)+_0x342471(0x6d2,0x2c1,0x3a0,0x225)+'n,\x20kalau\x20k'+_0x342471(0x964,0x801,0x8d9,0xcdb)+'lin\x20aku,\x20a'+_0x150c54(0x878,0x87f,0x9f6,0x655)+_0x150c54(0x94f,0x303,0x1a2,0x63e)+_0x342471(0x30d,0x7f0,0x4dc,0x98c)+_0x150c54(0xb03,0xa87,0x8bc,0xade)+_0x342471(0xdb7,0xd53,0x889,0x564),_0x342471(0x5b4,0xe15,0x91d,0x8f2)+'\x20pernah\x20ce'+_0x342471(0xac3,0xa21,0xd43,0xeac)+_0x342471(0xa1f,0x763,0x9e6,0xcbd)+_0x342471(0xce3,0xfbf,0xc4d,0xb90)+_0x342471(0xc88,0xf76,0xc93,0x9fe),_0x342471(0x8c4,0x5dd,0x6c8,0x508)+'perasaan\x20c'+_0x342471(0xba0,0x99b,0xa6e,0xa93)+_0x150c54(0x3dd,0x631,0x151,0x421)+_0x150c54(0xbff,0x756,0xc20,0xbf6)+'tu\x20hubunga'+'n,\x20aku\x20tid'+_0x342471(0x495,0x456,0x778,0xc6e)+_0x342471(0x10b2,0xf51,0xcab,0xb88)+'eh\x20itu\x20kar'+_0x150c54(0x116,0x32,0x3f5,0x528)+_0x150c54(0x11a6,0x1129,0xbe0,0xcdb)+_0x150c54(0x9c9,0xe07,0x9f7,0xd02)+_0x150c54(0x291,0x3cb,0x691,0x74a),_0x342471(0x5a0,0x21c,0x355,0xcd)+'yang\x20kita\x20'+_0x150c54(0xb19,0x34e,0xbd0,0x727)+_0x150c54(0xb9b,0x11f1,0xbda,0xe17)+_0x150c54(0x82a,0x78c,0x580,0x616)+'ada\x20akhirn'+_0x150c54(0xb6b,0xbc7,0x709,0xb1f)+_0x150c54(0xbee,0x962,0x6a6,0xa27)+_0x342471(0x91c,0x80f,0xb9d,0xf93)+_0x342471(0x9bf,0xcac,0xa5e,0x615)+_0x150c54(0x5cf,0x385,0x458,0x6da),'Jangan\x20rin'+_0x150c54(0x677,0x383,0x895,0x827)+'rat.\x20Kau\x20t'+_0x150c54(0xba9,0x8b4,0x59e,0x829)+_0x150c54(0xad6,0x553,0x78c,0x91e)+_0x150c54(0xb59,0x11cc,0x944,0xcf6),_0x150c54(0x4b6,0xcab,0x986,0x79c)+_0x150c54(0x10f1,0xa39,0xdc6,0xd2a)+_0x342471(0x4c1,0xa47,0x87a,0x9b1)+_0x342471(0xc6b,0xa0b,0x9bc,0xe99)+_0x342471(0xcbb,0xa3f,0xb05,0xe20)+'ang\x20bohong'+'\x20ke\x20kamu.','Jika\x20hujan'+_0x342471(0x1081,0x9f4,0xc03,0x8ba)+_0x342471(0xde6,0xe97,0x9d4,0xe63)+_0x342471(0xb50,0x5d3,0xa67,0x805)+'.\x20Sebab\x20ji'+_0x342471(0x1f6,0x315,0x2fc,-0x167)+_0x150c54(0x587,0x538,0x473,0x905)+'iapa\x20yang\x20'+'akan\x20menja'+_0x342471(0x4d0,0x321,0x78c,0x4f7),'Kalau\x20menc'+'intaimu\x20ad'+_0x342471(0xc05,0xcf7,0xb9f,0xd00)+'ahan,\x20yasu'+_0x150c54(0x455,0x9ac,0xa42,0x8ab)+_0x150c54(0x7e1,0x6e4,0x654,0x41d)+'\x20terus\x20saj'+'a.','PR-ku\x20adal'+_0x150c54(0xc00,0x7ab,0xd6e,0x950)+'kanmu.\x20Leb'+'ih\x20kuat\x20da'+_0x342471(0x998,0x9ea,0x6e4,0x747)+_0x342471(0x895,0x4ab,0x4d5,0x527)+_0x342471(0xd04,0xb4c,0xa4a,0xadf)+_0x150c54(0x101e,0x9ad,0x100c,0xc97)+_0x342471(0x383,0x6ef,0x843,0x537)+'a\x20dari\x20Bio'+'logi.',_0x150c54(0xc16,0x4dc,0x55a,0x79c)+'\x20ninggalin'+_0x342471(0x76e,0x40b,0x316,0x511)+_0x150c54(0xd65,0xad3,0xa7c,0xd14)+_0x150c54(0x4f1,0x48a,0x45f,0x609)+_0x342471(0xd1,0x3ed,0x486,0xc3)+_0x150c54(0x8b8,0xbc3,0x4e9,0x799)+'\x20kamu.\x20Aku'+_0x150c54(0x7ea,0x467,0xa9a,0x86e)+'u\x20kecewa.',_0x150c54(0xf14,0x729,0xc07,0xbad)+_0x342471(0x4e4,0xba,0x3c2,0xd1)+_0x150c54(0x1cb,0x175,0x220,0x463)+_0x342471(0xa0a,0x480,0x5b9,0x9f5)+_0x342471(0x70a,0x548,0x8d9,0xd15)+_0x150c54(0x1126,0xa0c,0xc6a,0xde8)+_0x150c54(0x58b,0x68a,0xb01,0x655)+_0x342471(0x602,0x5e1,0x57b,0x921)+'\x20Bisaku\x20cu'+_0x150c54(0xfa0,0xc9d,0x5ed,0xade)+_0x150c54(0xd0f,0x113d,0x8b3,0xd29),'Dik\x20jangan'+_0x342471(0x1097,0xb40,0xd06,0xca7)+_0x342471(0x4bd,0x8ca,0x701,0x2b4)+_0x150c54(0x474,0x416,0x6f5,0x8ac)+_0x150c54(0xa1d,0xf49,0x645,0xa14)+'hmu.',_0x150c54(0xee7,0x1051,0xe47,0xd39)+_0x342471(0x6e8,0x645,0x5ca,0x9d2)+_0x342471(0x798,0x7b4,0x80c,0x3c2)+'\x20yang\x20dulu'+',\x20waktu\x20me'+'mbawa\x20aku\x20'+'pergi,\x20tet'+_0x150c54(0x5a6,0x9bf,0x300,0x520)+_0x342471(0xdae,0x71c,0xbc5,0xc4b)+'ama,\x20bersi'+'fat\x20menjal'+_0x150c54(0x6a6,0x55e,0xbda,0x922)+'\x20ke\x20depan.',_0x342471(0x44d,0x9ac,0x4a9,0x5e5)+_0x150c54(0x71e,0x9dc,0x683,0xb8b)+'bagian\x20ter'+'besar\x20dari'+_0x150c54(0xbda,0x82b,0x891,0x6f3)+'Aku\x20bisa\x20s'+_0x342471(0xc68,0x57b,0x940,0x9f9)+_0x342471(0x76d,0x6ec,0x4e2,0x395)+'akukan\x20apa'+_0x342471(0xc56,0xfca,0xbf6,0xa1e)+'\x20inginkan,'+_0x150c54(0x6a0,0x17c,0x23b,0x48d)+_0x150c54(0x12a4,0xe27,0xc78,0xdb2)+_0x150c54(0x3ae,0xc5e,0x9ff,0x83d)+_0x342471(0xde9,0xdfb,0xc1d,0xd18)+_0x342471(0xb50,0xd7a,0xb83,0xc46)+'bagimu.'],si=cc[Math[_0x342471(0x3d7,0x78e,0x59f,0x103)](Math[_0x342471(0x22c,0xaa9,0x6ba,0x488)]()*cc[_0x150c54(0x30e,0x1d4,0x4f,0x41f)])];reply(si),await limitAdd(sender,limit);break;case _0x150c54(0x9ba,0x394,0x3db,0x7b7)+_0x150c54(0x87c,0x760,0xeab,0xb5c):const _0x35ed53={};_0x35ed53[_0x342471(0xe90,0xbdd,0xb65,0x711)+'t']='Check\x20Limi'+'t';const _0x3a46d5={};_0x3a46d5[_0x150c54(0xe12,0xa4c,0xb50,0x9d6)]='limit',_0x3a46d5[_0x342471(0xd93,0xad6,0xad5,0xd36)]=_0x35ed53,_0x3a46d5[_0x342471(0x5f0,0x7ec,0x36e,0x7f8)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0x60d,0xbd4,0xbdc,0xa6d)](prefix),'©\x20'+ownername,[_0x3a46d5]);const kata_lucu=['“Orang\x20bij'+_0x342471(0x4c5,0x9f5,0x506,0x109)+_0x150c54(0x549,0x661,0xaf2,0x7d5)+_0x342471(0x7f4,0x4ff,0x946,0xa47)+'menikah\x20me'+_0x150c54(0x32f,0x13b,0x862,0x5b3)+_0x342471(0x1d6,0x15a,0x50c,0x454)+_0x150c54(0xc59,0x94f,0xc78,0xa80)+_0x150c54(0x92c,0x17c,0x8b0,0x59e),_0x150c54(0xf52,0xfd2,0xd8a,0xdc4)+_0x150c54(0x9fd,0xf32,0x856,0xb9b)+'suksesan\x20y'+_0x342471(0xbae,0x3bb,0x8db,0x9fa)+'da…kebohon'+_0x150c54(0xbdb,0xe21,0xabb,0xdf2)+_0x150c54(0x11d5,0x12f6,0x11c6,0xe16)+_0x150c54(0x6d7,0x102,0x8de,0x5fc)+_0x150c54(0x1bf,0x15d,-0x22,0x4a9),_0x150c54(0x3bb,0x553,0x67a,0x670)+'i\x20memegang'+_0x342471(0x8ce,0xbf1,0x8ff,0xca1)+_0x150c54(0x607,0xa97,0x88f,0xa96)+_0x150c54(0x1101,0xd03,0x1196,0xd5c)+_0x342471(0x568,0x685,0x398,-0x79),_0x342471(0xd9d,0xd95,0x9b9,0x58a)+_0x342471(0x4f3,0x79b,0x2ed,0x56f)+_0x342471(0xbc8,0x9b8,0xcc4,0xc33)+_0x150c54(0xc16,0xc7d,0x5dd,0x755)+'\x20ini.\x20Peke'+'rjaan\x20sebe'+_0x342471(0x207,0x568,0x6cf,0x713)+_0x150c54(0xa98,0x100,0x1c5,0x5af)+_0x150c54(0xc43,0xb64,0x891,0x982)+_0x150c54(0x276,0x60d,0x33b,0x530)+'k\x20dikerjak'+_0x342471(0xc63,0xd32,0xc98,0x10a4),_0x150c54(0xa18,0xc48,0xa34,0x9ec)+_0x342471(0xace,0xc1f,0x72e,0xc58)+_0x150c54(0x56,0x868,0x27f,0x3b2)+_0x342471(0xacf,0xb84,0x68a,0xa6a)+_0x150c54(0x9c8,0xcfc,0x50d,0x7ec)+_0x150c54(0xae5,0xad4,0x571,0x7bb)+'mu,\x20siangn'+_0x150c54(0x604,0xe96,0x935,0x9d2)+_0x342471(0x4c1,0x9fb,0x7ec,0xa55)+_0x342471(0xc1b,0x66a,0x9b5,0xa81)+_0x150c54(0x864,0x6c0,0x64d,0x3f5)+'mu,\x20dan\x20ma'+'lamnya\x20aku'+_0x150c54(0xdbe,0x668,0x3eb,0x887)+_0x342471(0x7dc,0x467,0x45c,0x138)+_0x150c54(0x6af,0x420,0x16e,0x5c6)+_0x342471(0xe5a,0x5d9,0xaaa,0xb51),_0x150c54(0xdc5,0xc81,0xa08,0xb36)+_0x150c54(0x8b2,0x71e,0x6fe,0x71d)+_0x342471(0x1008,0xb55,0xb55,0xa40)+_0x342471(0xa55,0xa32,0xb95,0x7cb)+_0x342471(0x6ce,0xa30,0x788,0x476)+'ka\x20kamu\x20ma'+'sih\x20jomblo'+_0x342471(0x914,0x5fb,0x9e8,0x8a1)+_0x342471(0xaeb,0x7c1,0x624,0x276)+_0x150c54(0x695,0x8d4,0x74c,0x6dc)+'mu\x20telah\x20m'+_0x342471(0xac9,0x486,0x8bd,0x63b)+'aat\x20masih\x20'+_0x150c54(0x611,0xc8b,0xafe,0x9f2),_0x150c54(0xcd,0x364,0x1f1,0x423)+'n\x20itu\x20bera'+'wal\x20dari\x20s'+_0x342471(0xca4,0xa3f,0x8f5,0x9ec)+'an,\x20dan\x20im'+_0x150c54(0xbd4,0xb94,0xed5,0xddd)+_0x150c54(0x70e,0x82d,0x617,0x698)+'ta\x20tidur.\x20'+_0x342471(0xdc9,0xeff,0xbc6,0xca1)+_0x342471(0x1c4,0x73c,0x30c,0x559)+_0x150c54(0xa81,0xc23,0xe63,0xa57)+'ses\x20maka\x20l'+'ebih\x20baik\x20'+_0x342471(0x454,0xac8,0x670,0x588)+'ekarang\x20ju'+_0x150c54(0xa9e,0x669,0x43b,0x932),'“Wanita\x20ya'+_0x150c54(0x939,0xb25,0x4c4,0x668)+_0x342471(0x200,0x2ed,0x5d2,0x458)+_0x342471(0x607,0xc0b,0x724,0x485)+_0x342471(0x515,0x449,0x70c,0x228)+_0x150c54(0xc07,0xa96,0xf8d,0xbe5)+_0x342471(0xbc4,0xcca,0x9b0,0x83f)+'menyenangk'+_0x342471(0x6ea,0xce8,0x828,0x3f3)+_0x342471(0x308,0x5ae,0x341,0x7b8)+_0x342471(0xab5,0xfca,0xb7c,0xace)+_0x150c54(0x419,0x40a,0x2bf,0x45e),_0x342471(0x433,0xace,0x6b8,0xaef)+_0x150c54(0xa0f,0x8fc,0x9e9,0x90f)+_0x342471(0x1d9,0xa31,0x5c7,0x8a1)+_0x342471(0x7a3,0x748,0x7d9,0x7ee)+'t\x20yang\x20kua'+'t.”',_0x342471(0x1ba,-0xf6,0x32e,-0x28)+'\x20tetangga,'+'\x20Tetapi\x20ja'+_0x150c54(0x4c4,0x43d,0x84f,0x7bf)+_0x342471(0xdee,0x869,0xc8a,0x103c)+_0x342471(0x9f1,0x4d1,0x5b1,0x376),_0x342471(0x716,0x8be,0x838,0x7af)+_0x150c54(0xcfc,0xbae,0xa9c,0xac5)+'a…Masih\x20ad'+_0x150c54(0xe98,0x11e7,0x1230,0xd42)+_0x342471(0x101e,0xf1b,0xbb3,0x76b)+'a.”',_0x342471(0x6fe,0x6fe,0x76a,0x4e7)+'aik\x20untuk\x20'+'mewujudkan'+_0x342471(0x334,0x5c7,0x46c,0x4a5)+_0x342471(0xa33,0x6e9,0x720,0x46f)+'gun\x20dari\x20t'+_0x342471(0x2b9,0x45e,0x7e0,0x7f2)+_0x342471(0x7ca,0x6ce,0x54c,0x3ca),_0x342471(0x4a9,0x89f,0x4c3,0x97c)+_0x150c54(0xc69,0xc12,0xdf5,0xb56)+_0x342471(0x577,0x9ae,0x8b0,0xc5c)+_0x150c54(0x84b,-0x5a,0x6b4,0x40e)+_0x150c54(0x10ca,0x756,0x7f1,0xc3d)+_0x150c54(0xa89,0x645,0x6e7,0x92d)+'iam\x20cepiri'+_0x342471(0x82e,0x8b5,0x799,0x811),_0x150c54(0x677,0xd93,0xb9a,0xae0)+_0x342471(0x8cf,0x3f1,0x4c0,0x55f)+_0x150c54(0xe01,0x8c0,0xe5c,0xa43)+_0x150c54(0xa69,0x8bb,0xd89,0xdd0)+_0x150c54(0x124a,0x1253,0xc74,0xde6)+_0x150c54(0x351,0x5f8,0x2ea,0x6ce)+_0x342471(0x7c7,0xbc7,0x779,0x5ed)+_0x150c54(0xe04,0xf6b,0x101b,0xdbd)+_0x150c54(0x7dd,0x7b3,0x1139,0xc77)+'\x20ketika\x20ka'+'mu\x20jatuh\x20k'+_0x342471(0x33d,0x70c,0x383,0x6f3)+_0x150c54(0xed4,0xb7b,0xa0d,0xa02)+_0x150c54(0xb9f,0xae7,0xd43,0xc5a)+'nmu\x20yang\x20a'+_0x342471(0x788,0x928,0x485,0x287)+_0x150c54(-0x53,0x11a,-0x57,0x4ac),_0x150c54(0x8d0,0x464,0x492,0x86a)+_0x342471(0x942,0x555,0x63e,0x711)+_0x150c54(0xa24,0x551,0xba3,0x7ea)+_0x342471(0x8fe,0xc07,0x7b3,0x38a)+_0x150c54(0x52d,0xb04,0x50f,0x84d)+_0x342471(0x12f,0x84d,0x5f0,0x68f)+_0x150c54(0x3e8,0x4fe,0x710,0x4c1)+_0x342471(0x6ca,0x771,0x892,0xb71)+_0x150c54(0xaf4,0xb3b,0xfc0,0xcc7)+_0x342471(-0x166,0x29b,0x32f,0x29b)+_0x150c54(0x435,0x1f0,0x530,0x692)+'rsebut\x20sam'+'pai\x20tua.”',_0x150c54(-0x7a,0x447,0x797,0x46d)+_0x342471(0xba,0x947,0x469,0x795)+_0x342471(0x611,0xbe6,0xaa2,0xf3a)+_0x342471(0x3c6,0x41e,0x79a,0xbe8)+_0x342471(0x6b6,0x84,0x3dd,0x4ed)+_0x150c54(0x9d2,0xf74,0xbdc,0xa9b)+_0x150c54(0xfb,0x29e,0x2dc,0x4ba)+_0x150c54(0x80b,0x970,0x81d,0x6f1)+_0x342471(0xd0c,0x61d,0xaf9,0x684)+_0x150c54(-0x18,0x6ef,0x4b1,0x4b8)+_0x342471(0x67e,0x179,0x4f9,0xba)+_0x342471(0x1f0,0x2a5,0x478,0x7ae),_0x342471(0xc96,0x638,0x87f,0x5d9)+_0x150c54(0x130,0x8ef,0x83e,0x5a2)+_0x150c54(0xbb3,0x7e5,0xc59,0xbd3)+_0x150c54(0x10c6,0x840,0xc55,0xd50)+'enguasai\x20p'+_0x342471(0x99b,0x34a,0x6fd,0x68f)+'ulit,\x20tapi'+_0x342471(0x780,0xbeb,0xad4,0x968)+'as\x20itu\x20ada'+_0x342471(0xa45,0x1d0,0x60c,0x17a)+_0x150c54(0xe6c,0x1048,0x948,0xc1b)+'isa\x20mencon'+_0x342471(0x1147,0x7f7,0xca8,0x858)+_0x150c54(0xfaa,0xc99,0x8fe,0xc6d),_0x342471(0xac3,0xc90,0xd01,0xa65)+_0x150c54(0x7ac,0x708,0xe9f,0xb9b)+'berhasilan'+_0x342471(0x3db,0x654,0x539,0x1ed)+_0x342471(0x874,0x508,0x963,0xe27)+'kebohongan'+_0x150c54(0xfbd,0xe4a,0xbe2,0xb9b)+_0x150c54(0xcbc,0xf04,0xd91,0xbe1)+_0x342471(0x7e1,0x599,0x5fe,0xa0d)+_0x150c54(0x4eb,0x9ef,0xa3f,0x5eb),_0x150c54(0x96a,0xaa0,0xfc1,0xd54)+'elak\x20tawa\x20'+_0x342471(0x499,0x980,0x84a,0x4fa)+'sehat.\x20Gel'+_0x342471(0xbe,0x1fd,0x31c,0x7fb)+_0x342471(0x13b,0x209,0x371,0x62a)+'e\x20bawah\x20da'+_0x342471(0x42f,0x8b7,0x75d,0xafe)+_0x150c54(0xc91,0xb7e,0xd1d,0xc50)+_0x342471(0x5a2,0xac8,0x6b0,0xa53)+_0x150c54(0xf7b,0xb69,0xfab,0xafd),_0x150c54(0x8cb,0xce4,0x47f,0x899)+_0x150c54(0x96e,0x946,0xa23,0xcf8)+'engan\x20hart'+_0x342471(0xa8d,0x945,0xc70,0xf97)+_0x150c54(0x5b0,0x213,0x6c2,0x44f)+'ya\x20ngiler\x20'+_0x150c54(0x6d1,0x5ee,0x4ad,0x957)+_0x342471(0x619,0x8d5,0x4a4,0x1c2),'“Pakaian\x20i'+'tu\x20adalah\x20'+_0x342471(0x802,-0x1e7,0x30f,0x6f1)+_0x342471(0x7f4,0x89c,0xb5d,0x99b)+_0x150c54(0x992,0xa64,0x7f0,0x588)+_0x150c54(0x360,0x395,0x9b2,0x4bc)+_0x150c54(0xd71,0xc24,0x6ef,0xa11)+_0x342471(0x5c3,0x4ae,0x683,0x55e)+_0x342471(0xe8a,0x794,0xb24,0x907)+_0x150c54(0x436,0x982,0x538,0x893)+'indah.”',_0x150c54(-0xba,0x730,0x1be,0x46f)+_0x342471(0x46f,0x712,0x6f1,0x9af)+_0x342471(0x655,0x1bb,0x6bf,0x462)+_0x150c54(0xd05,0x932,0xbf9,0xdd9)+_0x342471(0xf4,0x241,0x440,0xed)+_0x342471(0x843,0xf83,0xbd5,0xb28)+_0x150c54(0x975,0xbc1,0x714,0xa58)+_0x342471(0x9bc,0x1100,0xcd2,0xa0d)+_0x342471(0x859,0x515,0x47f,0x5ea)+_0x342471(0x75e,0x75f,0x737,0xa57),_0x150c54(0x4ee,0x676,0x1f0,0x5d8)+'rnah\x20jatuh'+_0x342471(0x59d,0x767,0x65d,0xb2b)+'a\x20sekampun'+_0x150c54(0x4ca,0xbc2,0x81e,0x8cc)+_0x342471(0x6e4,0xf60,0xaa1,0x8d9)+_0x342471(0xc1f,0x95f,0xa0a,0xcb3)+_0x342471(0xaff,0x84d,0x748,0x66f)+'na\x20kalau\x20s'+_0x150c54(0x8a9,0xbd7,0x111e,0xc7a)+_0x150c54(0xa1c,0x951,0x62f,0xa04),'“Berlatih\x20'+'membuat\x20ki'+'ta\x20menjadi'+_0x150c54(0xa6d,0xe1a,0xb8a,0xc90)+_0x342471(0x661,0x23a,0x39e,-0x72)+_0x150c54(0xb41,0x8c8,0x8c0,0x767)+_0x342471(0x1073,0xa98,0xd56,0xc31)+_0x150c54(0x908,0xb26,0xf44,0xc51)+_0x150c54(0xaea,0xab9,0xbaf,0xada)+_0x342471(0xeac,0xa1a,0xbd1,0xce1)+_0x150c54(0x9af,0xba2,0x661,0x791)+_0x342471(0x8d7,0xbf7,0xc80,0x88c),'“Gara\x20gara'+'\x20nila\x20seti'+_0x150c54(0x46c,0x437,0x7a4,0x903)+_0x150c54(0x2ee,0x3ef,0x269,0x696)+'elanga…\x20Ga'+_0x342471(0xc26,0xad3,0xb21,0xbfb)+_0x150c54(0xa36,0x7df,0x3ce,0x6dd)+_0x150c54(0x423,0x383,0x4d4,0x7ee)+_0x150c54(0xbec,0x100d,0xafe,0xcc5)+_0x150c54(0x815,0x3fc,0x87b,0x46b),_0x150c54(0x8fa,0x5af,-0x17,0x47e)+_0x342471(0x861,0xa70,0x54d,0x730)+_0x150c54(0x547,0xdbb,0x6b4,0x88d)+'in\x20banyak\x20'+'yang\x20kita\x20'+_0x342471(0xe2b,0x887,0xc05,0x94d)+_0x342471(0x628,0x320,0x770,0xb83)+_0x150c54(0x8fd,0x44c,0x4c0,0x835)+_0x150c54(0xf0d,0x625,0x927,0xa99)+_0x150c54(0xa1f,0x699,0xc2f,0x858)+_0x342471(0x472,0x32a,0x81a,0x57d)+_0x342471(0x5fc,0xd0a,0xad6,0xa37)+_0x342471(0x18b,0x79c,0x37c,0x115)+_0x150c54(0xb1f,0x1233,0x10dc,0xd76)+_0x150c54(0xa64,0xcac,0x754,0x80e)+_0x342471(0x2f9,0x334,0x672,0x80d)+'ikit\x20yang\x20'+_0x150c54(0x192,0x8d7,0x682,0x439)+_0x342471(0x5bb,0x933,0x8d2,0x4f3)+_0x342471(0x78c,0x270,0x324,0x762)+'buk\x20belaja'+_0x342471(0x1125,0x110b,0xd04,0xa76),_0x342471(0xbde,0x6e6,0xa47,0x538)+_0x150c54(0x1ec,0x594,0x56a,0x697)+'batu\x20oleh\x20'+_0x150c54(0xfa8,0xf38,0x959,0xba6)+_0x150c54(0xb6c,0x41b,0x5e9,0x817)+_0x150c54(0x58a,0x97f,0xe2b,0x962)+_0x150c54(0x1039,0xe19,0xd4e,0xb41)+_0x150c54(0xa5e,0x387,0xa21,0x7dc)+'aslah\x20deng'+_0x150c54(0xd88,0x12d1,0x12e4,0xe00)+_0x342471(0x277,0x404,0x5e5,0x5d4)+'ar\x20bunga\x20k'+_0x342471(0x2fc,0x181,0x5a0,0x33c)+_0x150c54(0xc5b,0xb46,0xd48,0xa7e)+'akan\x20potny'+_0x150c54(0x844,0x827,0x98b,0x7a3)+_0x342471(0xb39,0xe00,0xcf9,0xb77),'“Wanita\x20ca'+_0x342471(0xb54,0x798,0xb4f,0xaf6)+_0x150c54(0x24d,0x1b8,0x447,0x4d4)+_0x342471(0xa65,0x30e,0x846,0x3bc)+_0x342471(0xfe3,0x9d4,0xba8,0x703)+_0x150c54(0x470,0x51b,0xa4c,0x75d)+'gkan,\x20apal'+'agi\x20yang\x20j'+_0x342471(0x20f,0x8ed,0x3f2,0x6c5),'“Carilah\x20i'+_0x150c54(0x80a,0xa7,-0x141,0x3b4)+_0x342471(0x83,0x4a7,0x562,0x41f)+_0x150c54(0xa80,0xdac,0xcb9,0x885)+'ke\x20Beha)\x20a'+_0x150c54(0xa13,0xbd3,0x678,0x7d6)+_0x150c54(0x94f,0x912,0x782,0x7d9)+_0x150c54(0x3ff,0xc96,0xc3a,0x780)+'Ingin\x20Namb'+'ah)\x20&\x20jadi'+'lah\x20suami\x20'+'yang\x20SIAGA'+_0x342471(0x8b2,0xd18,0xaa6,0xaab)+_0x150c54(0x1dd,0xaea,0x3fc,0x681)+_0x342471(0x246,0x3f9,0x5db,0x648)+'ja).”',_0x342471(0x779,0xb5d,0x9b9,0xdda)+_0x150c54(0x5f1,0x694,0x134,0x3b0)+'\x20yang\x20bera'+_0x342471(0xcc4,0xccf,0x8fc,0x53d)+'-beratnya\x20'+'pekerjaan\x20'+_0x342471(0xefe,0xf9b,0xb7d,0x6fc)+_0x150c54(0x1153,0x96d,0x1161,0xc41)+'gan\x20jika\x20k'+_0x342471(0xe0e,0xd66,0x94a,0x53f)+_0x342471(0x648,0x93d,0xa7c,0xc89)+_0x342471(0x602,0x706,0x9f8,0xa8f)],kata_lucu_=kata_lucu[Math[_0x150c54(0x825,0x7dd,0x4a6,0x662)](Math[_0x342471(0xbd8,0x64e,0x6ba,0xad4)]()*kata_lucu[_0x150c54(0x2,0x521,0x95,0x41f)])];reply(kata_lucu_),await limitAdd(sender,limit);break;case _0x342471(0x67e,0x6c0,0x45a,0x2c0)+_0x342471(0xa90,0x1b3,0x61e,0x4f0):const _0x21502b={};_0x21502b[_0x342471(0x944,0xc2b,0xb65,0xde9)+'t']='Check\x20Limi'+'t';const _0x1f6f29={};_0x1f6f29[_0x342471(0xa56,0x8eb,0x913,0xa7f)]='limit',_0x1f6f29[_0x342471(0x811,0x79f,0xad5,0xc20)]=_0x21502b,_0x1f6f29['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xba1,0xa73,0x733,0xa6d)](prefix),'©\x20'+ownername,[_0x1f6f29]);const longtong=[_0x150c54(0x9fc,0xfbd,0x932,0xda6)+'\x20diam\x20dan\x20'+'kelihatan\x20'+_0x150c54(0xdbf,0xd93,0x866,0xb2b)+_0x342471(0xd55,0xc8a,0x965,0x837)+_0x342471(0x767,0x810,0x691,0x400)+'an\x20bodohny'+'a\x20lebih\x20ke'+'lihatan','Saat\x20yang\x20'+_0x150c54(0x6d3,0xd23,0x7bb,0xb0b)+_0x342471(0x784,0x697,0x4e4,0x485)+_0x150c54(0x9ce,0xf9e,0xc80,0xc7b)+'minum\x20kopi'+'\x20adalah\x20se'+_0x342471(0x5c9,0x7ee,0x63c,0x264)+_0x150c54(0xd7a,0xad5,0xb6b,0xabc)+_0x150c54(-0x104,0x37e,0x581,0x416),_0x342471(0x9ad,0x963,0x67e,0x9fe)+_0x150c54(0x112d,0xc9b,0xe29,0xdd3)+_0x342471(0x6e2,0xb88,0x7c7,0xb9f)+'gan\x20mendid'+_0x150c54(0x6bb,0x5e1,0xde4,0x994)+_0x150c54(0xa3f,0xfeb,0x934,0xd94)+_0x342471(0x153,0x538,0x429,0xce)+_0x342471(0x7fe,0x118,0x446,0x407)+'wanita\x20sam'+_0x342471(0xc03,0x722,0x853,0x88d)+'endidik\x20se'+'buah\x20kelua'+_0x342471(0x151,0xb8,0x458,-0x60),_0x150c54(0x76e,0xc14,0xc4b,0xae8)+_0x342471(0x717,0x3de,0x408,0x2b6)+_0x342471(0x7d8,0xb39,0x6e8,0x766)+_0x150c54(0x25d,0xc2,0x141,0x3ca)+_0x150c54(0xa5c,0xcf8,0x822,0x842)+_0x342471(0xd8d,0xc08,0xb32,0xab2)+_0x342471(0x8a9,0x309,0x4ed,0x56b)+'i',_0x150c54(0x20d,0x101,0x307,0x505)+_0x150c54(0x996,0x7f7,0x962,0x783)+'gan\x20takut\x20'+_0x342471(0xd1a,0x8a7,0xc36,0xbfa)+_0x342471(0x7e9,0x755,0x939,0x58d)+_0x342471(0x2f6,0x692,0x3ea,0x783)+_0x342471(0xb2f,0x717,0x61f,0x22b)+'adalah\x20yan'+'g\x20Anda\x20cin'+_0x342471(0xc44,0x812,0xcbb,0xa49),_0x342471(0xcd2,0xd11,0x95f,0x8aa)+_0x150c54(0x989,0x9d9,0xb76,0xa44)+'\x20orang\x20yan'+_0x342471(0x3f7,0xa8c,0x5f8,0x3de)+'\x20banyak\x20ng'+_0x150c54(0x3cb,0x445,0x515,0x859)+_0x150c54(0xcf5,0x5d7,0xe9f,0x9b0)+'i.\x20Makanya'+_0x342471(0x5d,0x23e,0x318,0x6d6)+_0x342471(0x758,0x9bb,0x871,0x368)+_0x342471(0xae7,0xff1,0xc6a,0xc9c)+_0x150c54(0xd70,0x1026,0x993,0xcc9)+_0x150c54(0xe07,0xbdc,0x7db,0xbd6)+_0x342471(0x100e,0xc8a,0xc88,0x79e),_0x342471(0xbac,0x7aa,0x80a,0x655)+_0x150c54(0x57f,0x9a,0x1c6,0x440)+'kaki\x20lima\x20'+_0x150c54(0x8b3,0xbf6,0xbf0,0xc44)+_0x150c54(0xe1e,0x1121,0xa8a,0xdff)+_0x342471(0xde4,0x1148,0xcec,0x1013)+_0x150c54(0xbc1,0x3e4,0x3f5,0x8f4)+'ernyata\x20pe'+_0x150c54(0x63,0x1a1,0x615,0x59b)+_0x150c54(0xf96,0xcee,0xe97,0xb04)+_0x150c54(0x581,0x593,0xcc6,0x8aa)+_0x342471(0x226,0x581,0x59e,0x80d),_0x342471(0xa84,0xc18,0xaaf,0xd14)+_0x150c54(0x744,0xb4c,0x6ec,0x9cd)+'anan,\x20tapi'+'\x20kalo\x20peng'+_0x150c54(-0x1e,0x33a,0x656,0x460)+'lu\x20sih\x20nam'+_0x150c54(0x18e,0x9ef,0x1b2,0x6ba)+_0x342471(0xc3,0xb09,0x5e0,0x7c4),_0x150c54(0xa79,0x5f5,0x75b,0xa4f)+_0x342471(0x54e,0x3b7,0x699,0x5a1)+_0x150c54(0x603,0x7bc,0x76f,0x7b1)+_0x342471(0x91f,0x808,0x8ba,0x3d8)+_0x342471(0x63e,0x1bd,0x375,0x491)+_0x150c54(0x1a8,0x379,0x2f0,0x6b7)+'lebih\x20baik'+_0x150c54(0x964,0x1134,0x8b6,0xd82)+_0x150c54(0x9db,0x1205,0x1189,0xd13)+_0x150c54(0x838,0x9e4,0x3cc,0x612)+_0x342471(0x9b8,0xb17,0xadd,0xb8f),'Saya\x20tidak'+_0x342471(0xf3a,0xd7b,0xc9a,0xaa9)+'a\x20istri\x20sa'+_0x342471(0xb80,0xa85,0xae4,0x893)+_0x342471(0x50f,0x708,0x5c3,0xa9e)+_0x342471(0x74d,0x4db,0x66a,0x652)+_0x342471(0xb78,0x936,0x798,0x980)+_0x342471(0x772,0x841,0x5ba,0x924)+_0x342471(0xcd0,0x931,0xa4e,0x698)+'sangan\x20hid'+_0x150c54(0x5b6,0xb68,0xc20,0x8b7),_0x150c54(0xa72,0x6b1,0xb1d,0x7ef)+_0x150c54(0x3ef,0x54a,0x740,0x504)+_0x342471(0x7a9,0xad2,0x82e,0x8bf)+_0x342471(0x8ad,0x432,0x53d,0x8a0)+_0x342471(0xba5,0xc34,0xb48,0xcb8)+'rah.\x20Saya\x20'+'pasrahkan\x20'+'anak\x20saya\x20'+_0x342471(0x7bd,0x7c9,0x7eb,0xc83)+'tua\x20saya,\x20'+_0x150c54(0x9e2,0x8ad,0x717,0x64c)+_0x342471(0xb10,0x65b,0x676,0x23c)+_0x150c54(0xa0c,0x797,0x990,0x715),_0x150c54(0xc08,0xb6b,0x9ea,0xc70)+_0x342471(0x90f,0x70f,0x9a7,0x54a)+_0x150c54(0x1077,0xbbc,0xdc4,0xd62)+_0x342471(0xedf,0xff9,0xae7,0xc36)+_0x342471(0x365,0x832,0x65e,0x2ff)+_0x150c54(0xed7,0x62f,0x99d,0xabe)+_0x150c54(0x77b,0x8b7,0x715,0xc4c)+_0x150c54(0x369,0x94,0x94f,0x4a6)+_0x150c54(0x927,0x8c4,0xa4a,0x673)+_0x150c54(0x110,0x105,0x23d,0x570)+_0x150c54(0x81a,0x639,0x220,0x551)+'\x20balasan\x20d'+_0x150c54(0xc65,0x93a,0xfb9,0xbb6),'Apakah\x20tak'+'ut\x20itu\x20pen'+_0x342471(0x386,0x692,0x7c8,0xaee)+_0x150c54(0x5bd,0x7ec,0x719,0x74c)+_0x150c54(0x6e6,0xd4d,0xc53,0xc09)+_0x342471(0x393,0x6af,0x7fc,0xcea)+_0x342471(0x82,0x435,0x45e,0x4fa),_0x342471(0x4b3,0x229,0x5fa,0x4f5)+'g\x20sukses\x20a'+_0x150c54(0xbf5,0x6cc,0xefe,0xa95)+_0x150c54(0x8a5,0xcd0,0x69c,0xadb)+_0x150c54(0x1040,0x1100,0x762,0xc2b)+_0x342471(0x5c3,0x4f1,0x44e,0x6a0)+_0x150c54(0x1242,0xc83,0x1136,0xdbf)+_0x150c54(0xc3b,0xeea,0x774,0xb8a)+_0x342471(0x7b9,0x1141,0xc42,0xb2e)+_0x150c54(-0x6b,0x39d,-0x9d,0x3d7)+'kan\x20istrin'+'ya\x20setiap\x20'+_0x342471(0x829,0x4f4,0x83b,0x3f0),_0x342471(0xba8,0x1000,0xb62,0x83c)+_0x342471(0x68a,0x9cb,0xab0,0x68c)+_0x342471(0x603,0x4ef,0x80e,0x71b)+_0x150c54(0x1053,0x1037,0x9a5,0xcbc)+_0x150c54(0x828,0xef1,0x9c0,0xbe8)+_0x150c54(0x4c1,0x339,0xb2e,0x70e)+_0x150c54(0x9ce,0x4f6,0x848,0x725)+_0x150c54(0xab1,0x6a3,0xb45,0x643)+'jomblo',_0x150c54(0xc86,0xaa0,0xa4c,0xb83)+_0x342471(0x410,0xc03,0x7cf,0xbef)+_0x150c54(0x5ae,0x9c1,0x5ec,0x856)+_0x150c54(0x663,0x1d6,0x21f,0x57a)+_0x150c54(0x746,0xdd,0x7b8,0x4d0)+_0x150c54(0xf21,0xd14,0xcc6,0xbd1)+_0x342471(0x49c,0x5d4,0x430,0x3ef)+_0x150c54(0x190,0x3cb,0x25e,0x4d6)+_0x150c54(0x93d,0xd04,0x4c3,0x9a1)+'uah\x20negara'+_0x150c54(0x8b8,0xac7,0x9d2,0x7b3)+_0x150c54(0x812,0xa9d,0x7a0,0xc61)+'engan\x20ada\x20'+_0x342471(0x8ce,0x8ca,0x6f6,0x820)+'oruptor\x20di'+_0x342471(0x4df,0x628,0x969,0x8bf)+'rsebut',_0x150c54(0x7c5,0x7c6,0x398,0x691)+'t\x20dipastik'+_0x150c54(0x76d,0x434,0x90a,0x805)+_0x150c54(0x62d,0x5e3,0x71,0x4e4)+'sa\x20tidak\x20m'+_0x342471(0xa94,0x52e,0x6a0,0x78d)+_0x150c54(0xe24,0xc3a,0xab4,0xb77)+_0x342471(0x83f,0x3fb,0x54a,0x5bb)+_0x342471(0xa7d,0xb21,0xb16,0xdc8)+_0x150c54(0xcb4,0x10e9,0xbbb,0xda0)+_0x150c54(0x41f,0x7f3,0x4b3,0x4d1)+_0x342471(0x47e,0xaba,0x6e1,0x4d0)+_0x342471(0xf2a,0xc8a,0xb6a,0x66b)+'dang\x20berpu'+_0x150c54(0xe0a,0x703,0x941,0xab5),'Putus\x20cint'+'a\x20bagi\x20wan'+_0x342471(0x79f,0x6a0,0x53a,0x2dc)+'\x20kehancura'+'n.\x20Tapi,\x20b'+_0x342471(0x91b,0x17,0x4d6,0x9da)+_0x342471(0x9f3,0xca6,0xc3b,0xc53)+_0x150c54(0x1f,0x15c,0x856,0x487),_0x150c54(0xfab,0xd94,0xec8,0xa81)+_0x342471(0x1029,0xaf3,0xb60,0x671)+'jadi\x20orang'+_0x342471(0xece,0xda6,0xbf2,0x729)+_0x342471(0x5bd,0xa7e,0x575,0x9cc)+'miskin\x20tid'+_0x150c54(0x6a7,0x91d,0x663,0x5ba)+_0x150c54(0x9ab,0x11b3,0x1213,0xdce)+'ng\x20kaya',_0x342471(0xae1,0xe53,0xa4c,0xafe)+'tidak\x20ada\x20'+'hubunganny'+_0x150c54(0xc84,0x93b,0xe1f,0xa87)+'aya\x20atau\x20m'+'iskin.\x20Tap'+_0x342471(0x97d,0x120b,0xd41,0xd93)+_0x342471(0x7bc,0x38,0x33e,0x2e3)+'ngan\x20erat\x20'+'dengan\x20bij'+'aksana'],longtong_=longtong[Math[_0x342471(0x749,0x1b4,0x59f,0x2b9)](Math[_0x150c54(0x877,0xa6e,0xad4,0x77d)]()*longtong['length'])];reply(longtong_),await limitAdd(sender,limit);break;case _0x342471(0x8b,-0x101,0x3c6,0x2f7):case _0x342471(0x6f7,0x51f,0x6d1,0xb1c):case _0x342471(0x5b3,0x609,0x3d2,0x372)+'o':{const _0x1d25cf={};_0x1d25cf[_0x150c54(0x8b9,0xefe,0x10a8,0xc28)+'t']='Check\x20Limi'+'t';const _0x256062={};_0x256062[_0x342471(0x467,0xc14,0x913,0xc10)]='limit',_0x256062['buttonText']=_0x1d25cf,_0x256062[_0x342471(0x842,0x124,0x36e,-0x106)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xf0a,0xc5a,0x921,0xa6d)](prefix),'©\x20'+ownername,[_0x256062]);const _0x2608eb={};_0x2608eb[_0x342471(0xfbe,0x95f,0xb65,0xbfb)+'t']=_0x150c54(0xf78,0xee1,0xe8f,0xd12);const _0x2f9411={};_0x2f9411['buttonId']=_0x342471(0x96f,0xec5,0xc97,0x10cb),_0x2f9411[_0x342471(0xc3c,0x683,0xad5,0xc8a)]=_0x2608eb,_0x2f9411['type']=0x1;if(!isNsfw&&!mek['key']['fromMe']&&!isOwner&&!isCreator)return sendButMessage(from,lang['nsfwmo'](),'©\x20'+ownername,[_0x2f9411]);function hentai(){function _0x1dadc0(_0x153a32,_0x288acf,_0x110ec5,_0x4c5055){return _0x150c54(_0x153a32-0xd1,_0x153a32,_0x110ec5-0x9a,_0x4c5055-0xbb);}const _0x3dde01={'qPzOO':function(_0x326e9f,_0x50dd5d){return _0x326e9f===_0x50dd5d;},'TSFtb':_0xdebc99(0x4dc,0x809,0xb3b,0x49b),'STmUh':function(_0x5f4817,_0x478e52){return _0x5f4817(_0x478e52);},'SkquY':_0xdebc99(0x98a,0x561,0x59a,0x59e)+_0x1dadc0(0xda3,0x955,0x1292,0xd89)+'\x20>\x20ul\x20>\x20li'+_0x1dadc0(0x87d,0xb33,0xb77,0x70a),'qhCmn':_0xdebc99(0x45c,0x927,0x938,0x783),'dfZRr':_0x1dadc0(0x106d,0xa5a,0xde8,0xd3d)+'2','iHyyT':_0xdebc99(0x802,0x87d,0xa63,0x865)+_0xdebc99(-0x79,0x377,0x620,0x4e2),'tigug':_0x1dadc0(0x12a4,0x103f,0xac2,0xed5),'MInpU':'header\x20>\x20d'+_0x1dadc0(0x103,0x6f5,0x39e,0x47e)+_0xdebc99(0x79e,0x44c,0x706,0x860)+_0xdebc99(0xbea,0x8df,0x539,0xa0f)+_0xdebc99(-0x138,0xb1,-0x17f,-0x1fc),'BdDrP':'in\x20','OhCwi':function(_0x9473e7,_0x24a2fd){return _0x9473e7(_0x24a2fd);},'iuynG':_0x1dadc0(0x676,0xfe7,0xe66,0xb5b)+'iv.entry-a'+_0x1dadc0(0xa98,0x8ec,0xaaf,0xc3c)+_0xdebc99(0x72c,0x8be,0x4f4,0xc43)+_0xdebc99(0x898,0x4fc,0x298,0x7ef)+_0x1dadc0(0xf2b,0xd90,0xba5,0xcb2),'mbxBe':_0x1dadc0(0x8fe,0xc54,0xcb2,0xb5b)+_0xdebc99(0x7ba,0x32b,0x725,0xe5)+_0xdebc99(0x2ff,0x77c,0x809,0x399)+'\x20>\x20p\x20>\x20spa'+_0xdebc99(0x848,0x67f,0x690,0x401)+_0xdebc99(0x35a,0x443,0x223,0x50a),'btPFo':_0x1dadc0(0x4f1,0x1d5,0x813,0x6b4),'mYtiZ':'img','viplz':_0xdebc99(0x50d,0x8aa,0x7e5,0x418),'RhMHY':function(_0x3332c0,_0x4d6ac8){return _0x3332c0(_0x4d6ac8);},'vlMnL':'video\x20>\x20a','QZJSZ':function(_0x410033,_0x4a3eea){return _0x410033*_0x4a3eea;},'UqcYk':_0x1dadc0(0xfa4,0xe47,0x132a,0xe7b),'HuStH':function(_0x5cd940,_0x673b0){return _0x5cd940*_0x673b0;},'ZZHbQ':function(_0x506827,_0x164120){return _0x506827+_0x164120;},'xmLTF':'https://sf'+_0x1dadc0(0x4f5,0x9cd,0x4da,0x8df)+_0x1dadc0(0x971,0xd57,0xecb,0xbfe)};function _0xdebc99(_0x1b0141,_0x33a4aa,_0x193fd2,_0x1544eb){return _0x342471(_0x193fd2,_0x33a4aa-0x2a,_0x33a4aa- -0x342,_0x1544eb-0xd7);}return new Promise((_0x9f3168,_0x148ac2)=>{function _0x2daf2e(_0x3ba5f2,_0x1cb2c7,_0x59f5ba,_0x1c3ff9){return _0xdebc99(_0x3ba5f2-0xfe,_0x1c3ff9- -0xe,_0x59f5ba,_0x1c3ff9-0x125);}function _0x289838(_0x44a9cf,_0x59d615,_0x4b1bdf,_0x29252b){return _0x1dadc0(_0x44a9cf,_0x59d615-0x1aa,_0x4b1bdf-0x1be,_0x29252b-0xe0);}const _0x76f76={'ywsGu':function(_0x121be4,_0x3a9e1a){return _0x3dde01['STmUh'](_0x121be4,_0x3a9e1a);},'DXyCg':_0x3dde01[_0x289838(0x8e2,0xa40,0x7cb,0x838)],'XGlrz':_0x3dde01[_0x289838(0x91d,0x7d4,0x871,0x975)],'QdvEx':_0x3dde01['tigug'],'hmwnA':_0x3dde01[_0x2daf2e(0xacd,0xc54,0x86c,0x7bd)],'mIgpJ':_0x3dde01['BdDrP'],'fwGfm':function(_0x436daf,_0x8ee0b){return _0x3dde01['OhCwi'](_0x436daf,_0x8ee0b);},'dJOtd':_0x3dde01[_0x289838(0xea0,0xaee,0xac0,0xf4b)],'qeVXT':function(_0x1e16f2,_0x5f3a8c){return _0x3dde01['OhCwi'](_0x1e16f2,_0x5f3a8c);},'iTtQt':_0x3dde01['mbxBe'],'XcBig':_0x2daf2e(0x5e3,-0x419,0x3e3,0xd8),'cypXL':_0x3dde01[_0x2daf2e(0x8dd,0x9b4,0x3c6,0x649)],'HuONO':function(_0x5ba69e,_0x146693){return _0x3dde01['STmUh'](_0x5ba69e,_0x146693);},'YYAJA':'src','SUuuw':_0x3dde01[_0x2daf2e(0x70d,0x7af,0x9af,0x9d0)],'BDniq':_0x3dde01[_0x289838(0x5e7,0x627,0x392,0x654)],'Wkjyd':function(_0x1f851a,_0x134290){function _0x22c190(_0x7f84da,_0x531256,_0x20c4e2,_0x3719f5){return _0x289838(_0x20c4e2,_0x531256-0x133,_0x20c4e2-0x175,_0x531256-0x38);}return _0x3dde01[_0x22c190(0xb59,0xa05,0x6a2,0xc87)](_0x1f851a,_0x134290);},'SXhbf':_0x3dde01[_0x289838(0xd08,0x6ba,0xa27,0xa66)],'BkqQF':function(_0x673bfe,_0x5b883c){function _0x530250(_0x39ae71,_0x482f88,_0x2286a4,_0x37690f){return _0x289838(_0x37690f,_0x482f88-0x1db,_0x2286a4-0x7d,_0x39ae71- -0x127);}return _0x3dde01[_0x530250(0x679,0x95c,0x550,0x9ec)](_0x673bfe,_0x5b883c);}};if(_0x3dde01['qPzOO'](_0x3dde01[_0x2daf2e(0xc76,0xc5e,0xbbd,0x8ed)],_0x3dde01[_0x2daf2e(0xdf2,0x7d2,0xc8a,0x8ed)])){const _0x2bc200=Math[_0x289838(0xc02,0xb0b,0x2fa,0x7fd)](_0x3dde01[_0x289838(0xf68,0x1261,0x99b,0xdfa)](Math[_0x289838(0xa86,0x5b2,0x8c1,0x918)](),0x1968+0x203f+0x2*-0x1a93));axios[_0x2daf2e(0x93b,0x7eb,0xa88,0x795)](_0x3dde01[_0x289838(0x1270,0xe96,0x1464,0xf93)](_0x3dde01[_0x2daf2e(-0x208,0xf3,-0x134,-0x39)],_0x2bc200))[_0x289838(0x35b,0x7e3,0x7ba,0x7eb)](_0x4f6dae=>{function _0x493c18(_0x4613a0,_0x40d766,_0x467634,_0x5bc13b){return _0x2daf2e(_0x4613a0-0x187,_0x40d766-0x168,_0x4613a0,_0x467634-0xc1);}function _0x58d6ae(_0x13670d,_0x4be7fb,_0x5a80a7,_0x3e44bf){return _0x289838(_0x5a80a7,_0x4be7fb-0x111,_0x5a80a7-0x110,_0x13670d- -0x1e6);}if(_0x3dde01['qPzOO'](_0x58d6ae(0xbc3,0xc85,0x1026,0x10f9),_0x3dde01[_0x58d6ae(0xbe8,0x7e4,0xb2c,0xf75)])){const _0x185fb3=cheerio[_0x58d6ae(0xbc1,0x929,0xf84,0xa29)](_0x4f6dae[_0x58d6ae(0xaa5,0xf8e,0xf40,0x814)]),_0x2735bd=[];_0x3dde01[_0x493c18(0x7b2,0x1a2,0x2cd,-0x13b)](_0x185fb3,_0x3dde01[_0x493c18(-0x407,0x3d,0xfb,-0x306)])[_0x493c18(-0x17a,0x781,0x292,0x61d)](function(_0x55b500,_0x2ef9c0){function _0x427286(_0x39d50d,_0x32d73c,_0x599ac5,_0x587974){return _0x493c18(_0x587974,_0x32d73c-0x184,_0x39d50d- -0x20b,_0x587974-0x14);}function _0x5ce130(_0x37c4f5,_0x5c9e6c,_0x3d4e7c,_0x42749a){return _0x493c18(_0x3d4e7c,_0x5c9e6c-0x66,_0x5c9e6c- -0x3a,_0x42749a-0x18a);}_0x2735bd[_0x5ce130(0xa36,0x9c2,0x696,0x7e1)]({'title':_0x76f76[_0x5ce130(-0xd9,0x324,0x1b,0x390)](_0x185fb3,_0x2ef9c0)['find'](_0x76f76[_0x5ce130(0x34f,0x60d,0x9cb,0x9c3)])[_0x427286(0x5b5,0x8e5,0x769,0x9d7)](),'link':_0x185fb3(_0x2ef9c0)[_0x5ce130(0x4e9,0x1e9,0x6b8,0x46)](_0x76f76[_0x427286(0x4de,0x733,0x740,0x87)])[_0x427286(0x307,-0xc,0x750,-0x4c)](_0x76f76[_0x5ce130(0x96d,0x737,0xb99,0x698)]),'category':_0x76f76['ywsGu'](_0x185fb3,_0x2ef9c0)[_0x5ce130(0x472,0x1e9,0x3b2,-0x1d6)](_0x76f76[_0x427286(0x6a3,0x2d2,0x549,0x373)])[_0x5ce130(0x4a3,0x786,0x83c,0x3fd)]()['replace'](_0x76f76['mIgpJ'],''),'share_count':_0x76f76['fwGfm'](_0x185fb3,_0x2ef9c0)[_0x427286(0x18,-0x28d,0xcd,-0x4e)](_0x76f76['dJOtd'])[_0x5ce130(0xa61,0x786,0x85d,0x364)](),'views_count':_0x76f76[_0x5ce130(0x975,0x95d,0x4f7,0xc85)](_0x185fb3,_0x2ef9c0)[_0x427286(0x18,-0x250,-0x107,0x545)](_0x76f76['iTtQt'])[_0x5ce130(0x670,0x786,0x801,0xb28)](),'type':_0x185fb3(_0x2ef9c0)[_0x427286(0x18,0x1e6,0x345,0x48e)](_0x76f76[_0x5ce130(0x43b,0x325,-0x17c,0xe9)])['attr'](_0x5ce130(-0x155,0xa5,-0x1d,0x24d))||_0x76f76[_0x427286(0x4f3,0xbe,0x6a4,0x123)],'video_1':_0x76f76[_0x5ce130(0x96a,0xa10,0x9dc,0x623)](_0x185fb3,_0x2ef9c0)[_0x5ce130(-0x283,0x1e9,0x642,0x606)](_0x76f76['XcBig'])[_0x5ce130(0x7a0,0x4d8,0x590,0x20a)](_0x76f76['YYAJA'])||_0x76f76[_0x427286(0x78c,0x799,0x3bb,0x409)](_0x185fb3,_0x2ef9c0)[_0x5ce130(0x507,0x1e9,0x283,0x6ee)](_0x76f76['SUuuw'])[_0x427286(0x307,0x2e3,-0xaa,0x316)](_0x76f76[_0x427286(0x41d,0x845,0xe5,0x414)]),'video_2':_0x76f76[_0x5ce130(0x7e9,0x56d,0x92a,0x91c)](_0x185fb3,_0x2ef9c0)[_0x5ce130(-0x183,0x1e9,-0xdf,0xb2)](_0x76f76[_0x427286(0x3b3,0x2b7,0x2ce,-0x17c)])[_0x427286(0x307,0xd6,0x4cd,0x462)](_0x76f76['QdvEx'])||''});}),_0x3dde01[_0x58d6ae(0x5d4,0x4f4,0xf3,0x1b8)](_0x9f3168,_0x2735bd);}else{const _0x341f63=_0x3f8d6e['resource_r'+_0x493c18(0x29d,-0x16f,0x173,-0x389)][_0x58d6ae(0xaa5,0x97e,0xac5,0xb60)]['results'][_0x3efe9a[_0x58d6ae(0x617,0x3fa,0x4bf,0x618)](_0x76f76[_0x58d6ae(0x5a6,0x266,0xa81,0x88d)](_0x26699e[_0x493c18(0x294,0x562,0x42b,0x52e)](),_0x70ace5[_0x58d6ae(0x993,0xcbc,0x941,0x7fb)+_0x58d6ae(0x47a,0x79f,0x5fd,0x348)][_0x58d6ae(0xaa5,0x818,0x5f1,0x619)][_0x58d6ae(0x783,0xa7a,0x59d,0xbae)][_0x58d6ae(0x3d4,0x6aa,0x5d6,0x48b)]))];var _0x32e3f2=[];const _0x147897={};_0x147897[_0x493c18(0x946,0xc76,0x948,0x52c)]=_0x341f63[_0x58d6ae(0x71a,0xaeb,0x9d3,0x74b)][_0x58d6ae(0x5e6,0x480,0x343,0x8fa)][_0x58d6ae(0x42e,0x379,0x99,0xe0)],_0x32e3f2['push'](_0x147897),_0x325292(_0x32e3f2);}});}else{let _0x2863d2=_0x3dde01['STmUh'](_0x1869f7,_0x1e7fd8)['attr'](_0x3dde01[_0x2daf2e(-0x2fc,-0x247,0x15e,0x16d)]);_0x2863d2&&(_0xfebc9f=_0x2863d2);}});}hentai()[_0x342471(0x45c,0x3fe,0x58d,0x538)](async _0x261ced=>{const _0x55f434={'ZJyNF':function(_0x2338a4,_0x1e92c1){return _0x2338a4(_0x1e92c1);}};result=_0x261ced[Math['floor'](Math[_0x5e2f58(0x426,0x523,0x7aa,0xf5)](),_0x261ced[_0x3aa45d(0x308,-0x376,-0x14e,-0x52a)])];function _0x5e2f58(_0x5a4770,_0x306c4a,_0xf50627,_0x2ff2ef){return _0x342471(_0x2ff2ef,_0x306c4a-0xc2,_0x306c4a- -0x197,_0x2ff2ef-0xf3);}function _0x3aa45d(_0x5d76a4,_0x2d906c,_0x35ab96,_0xa2f9c3){return _0x342471(_0x2d906c,_0x2d906c-0x1a9,_0x35ab96- -0x4aa,_0xa2f9c3-0x4f);}alpha[_0x3aa45d(0x6f,0x5cf,0x59c,0xa08)+'e'](m[_0x3aa45d(0x9aa,0x6e0,0x567,0x5c7)],await _0x55f434[_0x5e2f58(0xfc5,0xb2c,0xd1e,0xce0)](getBuffer,result[_0x3aa45d(0x49c,-0x190,0x241,0x3e6)]),video,{'caption':'⭔\x20Title\x20:\x20'+result[_0x3aa45d(-0x1e0,0x29f,0x315,0x633)]+(_0x5e2f58(0x257,0x46e,0x7fb,0x2ba)+_0x5e2f58(0x31e,0x3da,0x8,-0x119))+result[_0x3aa45d(0x87,-0x3ea,-0x16a,0xe4)]+(_0x3aa45d(-0x13d,-0x3c3,-0x5a,-0xcd)+_0x5e2f58(0x227,0x200,0x167,0x3d1))+result[_0x5e2f58(-0x33a,0x1d7,-0x93,0x62b)]+(_0x3aa45d(-0x245,-0x5f4,-0x1a6,-0x3f9)+'\x20')+result[_0x3aa45d(0x681,0x51c,0x3ac,-0x18b)+'t']+(_0x5e2f58(-0x27f,0x26c,0x11f,-0x4a)+':\x20')+result[_0x5e2f58(0x799,0x49b,0x167,0x3b0)+'t']+('\x0a⭔\x20Source\x20'+':\x20')+result[_0x3aa45d(0x57c,0x714,0x72d,0x35c)]+('\x0a⭔\x20Media\x20U'+_0x5e2f58(0x1f1,0x369,0x2aa,0x4de))+result[_0x5e2f58(0x4e2,0x554,0x837,0x118)],'quoted':mek});});}case'solog':case _0x150c54(-0x84,0x48e,-0xbe,0x46a):case _0x342471(0x66b,0xb95,0xae6,0xc21):case _0x342471(0x1b8,0x390,0x3bc,0x27f):case _0x342471(0x763,0xda9,0xba2,0xaf6):case'les':case'erokemo':case'bj':case _0x150c54(0x66f,0x8df,0xacf,0x6d8):case _0x342471(-0xa9,-0x5d,0x40b,0x2cc):case _0x150c54(0x11f,0x154,0x31b,0x464):case _0x342471(0xd26,0xcdd,0xb59,0x9f4):case _0x342471(0x53f,0x45d,0x7f5,0x51d)+'gif':case _0x342471(0xd66,0xea9,0xcaf,0xd15):case _0x150c54(0xb0d,0xac0,0x412,0x651):case _0x342471(0x854,0x87d,0x6b5,0x546):case'hug':case _0x342471(0x34a,0x149,0x626,0x696):case _0x150c54(0xa0,0x66c,0x18b,0x40c):case _0x342471(0x4bd,0x3b5,0x75e,0x3da):case _0x150c54(0xbe7,0x113c,0xbe2,0xd49):case _0x150c54(0xa8a,0x915,0x593,0x764):case _0x342471(0x6f4,0x78a,0x3b7,0x39f):case _0x342471(0xa76,0x67c,0x732,0x83a):case'ngif':const _0x794b82={};_0x794b82[_0x150c54(0xfff,0xc8b,0xbb4,0xc28)+'t']=_0x150c54(0x80f,0x910,0xe04,0xc1a)+'t';const _0x48f621={};_0x48f621[_0x150c54(0x803,0xc7a,0x96b,0x9d6)]=_0x150c54(0xde7,0xa3b,0x749,0xa6d),_0x48f621[_0x342471(0x94c,0x89d,0xad5,0xa36)]=_0x794b82,_0x48f621[_0x150c54(0x793,0x492,0x2d3,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0x822,0xe74,0x9aa,0xb1b)](prefix),'©\x20'+ownername,[_0x48f621]);const _0x536844={};_0x536844['displayTex'+'t']=_0x150c54(0x11ca,0x1242,0xa82,0xd12);const _0x3e2783={};_0x3e2783[_0x342471(0xe1d,0x55a,0x913,0x649)]='nsfw\x20on',_0x3e2783[_0x342471(0xf7c,0x6f5,0xad5,0xa92)]=_0x536844,_0x3e2783['type']=0x1;if(!isNsfw&&!mek['key'][_0x342471(0xaa4,0x5d5,0x8c4,0xda3)]&&!isOwner&&!isCreator)return sendButMessage(from,lang[_0x342471(0x924,0x51d,0x7bb,0x5e0)](),'©\x20'+ownername,[_0x3e2783]);var ini_gif=await fetchJson(_0x342471(0x7ec,0x674,0x841,0x6cf)+_0x150c54(0xfe,0x2e8,0x8a7,0x52a)+'pi/v2/img/'+command),ini_gif_=await getBuffer(ini_gif[_0x342471(0x6e6,0x424,0x3b6,-0xf0)]);alpha[_0x342471(0x9ee,0x63f,0x5f5,0x551)+_0x342471(0xa13,0xf2d,0xd11,0x1124)](m[_0x342471(0xd36,0x831,0xa11,0xba4)],ini_gif[_0x150c54(-0x4a,0x5f1,0x58,0x479)],mek,{'packname':q[_0x342471(0xdda,0xf33,0xae2,0x7e8)]('|')[-0x7ee+-0x8cf+0x10bd]?q[_0x150c54(0x933,0x91b,0xeef,0xba5)]('|')[-0x1*-0x1e7+-0x8d*-0x26+-0xa7*0x23]:packname,'author':q[_0x342471(0xb35,0x6f8,0xae2,0x654)]('|')[-0xb99+-0x16b9+0x3*0xb71]?q['split']('|')[-0x5*-0x493+-0x68a+-0x1054]:author});break;case _0x150c54(0x936,0xf40,0x8e0,0xa94):case _0x150c54(0x89a,0x7da,0xb56,0x9b6):case'woof':case'gasm':case'solo':case _0x342471(0x3bb,0x31e,0x598,0x686):case _0x150c54(0xb89,0x625,0x508,0x67e):case _0x342471(0x5f5,-0x7,0x468,0x4eb):case _0x342471(0x5af,0xb6b,0x736,0x989):case _0x150c54(-0xa6,0x7b3,0x3ec,0x428):case _0x342471(0x6f3,0xeb,0x507,0x49b):case _0x150c54(0xed7,0xc41,0xb28,0xaf5):case _0x342471(0x931,0x22c,0x4a1,0x939):case _0x150c54(0xcbc,0x893,0xdcf,0xccc):case'eroyuri':case _0x150c54(0xf71,0xc88,0xec9,0xaf2):case _0x342471(0xcdd,0xa48,0xcd7,0xaa0):case _0x342471(0xa43,0x511,0x5e9,0x47f):case _0x342471(0x9ab,0xdd2,0xc63,0x799):case _0x150c54(0x196,0x858,0x3b4,0x47d):case'hentai':case _0x150c54(0x706,0x31d,0x3dc,0x77a):case _0x150c54(0x1c2,0x86f,0x230,0x527):case _0x150c54(0x548,0x482,0x111,0x62d):case _0x150c54(0xa9f,0xb12,0xaba,0xcb2):case _0x342471(0xa55,0xc6e,0xce2,0x11c5)+'r':case _0x150c54(0x630,0x77b,0xa7b,0x72c):case _0x150c54(0xf90,0x121e,0xba3,0xdc8):case _0x150c54(0xb07,0x440,0x83d,0x62c):case _0x342471(0xc31,0xf55,0xa24,0xdab):case'femdom':case _0x342471(0xcfe,0x9e4,0xbd6,0x830):case'lewd':case _0x150c54(0x48a,0x3a1,0x344,0x703):case _0x342471(0xc2e,0x2a8,0x71d,0x828):case'lewdk':const _0x5a0a1a={};_0x5a0a1a[_0x342471(0xa90,0xf7c,0xb65,0x92c)+'t']=_0x150c54(0x891,0xe53,0xf80,0xc1a)+'t';const _0x1700f9={};_0x1700f9[_0x342471(0x539,0x799,0x913,0xbf0)]='limit',_0x1700f9[_0x150c54(0x964,0x7ba,0x72e,0xb98)]=_0x5a0a1a,_0x1700f9['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0xce8,0x620,0x9aa,0xe24)](prefix),'©\x20'+ownername,[_0x1700f9]);const _0xd3cc9f={};_0xd3cc9f['displayTex'+'t']=_0x150c54(0xe8d,0xf49,0xc06,0xd12);const _0x19b32e={};_0x19b32e[_0x342471(0x5c8,0xd97,0x913,0x3e8)]=_0x150c54(0x10f0,0xb21,0x1047,0xd5a),_0x19b32e[_0x150c54(0x88d,0xb32,0xf7a,0xb98)]=_0xd3cc9f,_0x19b32e[_0x150c54(0x57d,0x6d,-0xe3,0x431)]=0x1;if(!isNsfw&&!mek[_0x342471(0x193,0x844,0x5dc,0x292)][_0x150c54(0xea6,0x99e,0x4f1,0x987)]&&!isOwner&&!isCreator)return sendButMessage(from,lang[_0x342471(0xaad,0xbe8,0x7bb,0x5b4)](),'©\x20'+ownername,[_0x19b32e]);var ini_img=await fetchJson('https://ne'+_0x150c54(0x960,0x37f,0x38d,0x52a)+'pi/v2/img/'+command);sendFileFromUrl(m[_0x150c54(0x80e,0xd1b,0x7af,0xad4)],ini_img[_0x150c54(0x314,0x85b,0x8c3,0x479)],lang[_0x342471(0x757,0x7a9,0x2fb,-0x146)](),mek)[_0x150c54(0xe9f,0x670,0x5d8,0x9df)](_0x9efc13=>{function _0x483603(_0x512400,_0xbf8298,_0x3ad6f5,_0x1d75fd){return _0x342471(_0x3ad6f5,_0xbf8298-0x1d4,_0x1d75fd- -0x4e8,_0x1d75fd-0x120);}reply(lang[_0x483603(0x8f1,-0xe3,0x129,0x3eb)]());}),await limitAdd(sender,limit);break;case _0x342471(0x9f0,0x7d4,0x66b,0x92e):case _0x342471(-0xd3,0x1b2,0x436,-0xba):{const _0x283f7c={};_0x283f7c[_0x150c54(0x10c3,0x890,0x6fb,0xc28)+'t']='Check\x20Limi'+'t';const _0x407dc3={};_0x407dc3[_0x150c54(0x7b0,0x8e2,0xcd2,0x9d6)]=_0x150c54(0xc21,0xa22,0xbfc,0xa6d),_0x407dc3[_0x342471(0xbac,0xac4,0xad5,0x5f9)]=_0x283f7c,_0x407dc3[_0x150c54(-0x31,0x20,0x764,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0x99e,0x5f7,0x9aa,0x57b)](prefix),'©\x20'+ownername,[_0x407dc3]);let pe=await fetchJson('https://wa'+'ifu.pics/a'+_0x150c54(0x76d,0xc7a,0xb5e,0x857)+'fu')[_0x342471(0x3f5,0x1ef,0x58d,0x86b)](async _0x1ce9e4=>{const _0x3dbd0d={'QtSrw':function(_0x2ce833,_0x248af2,_0xf0ad66,_0xf81c74,_0x236587){return _0x2ce833(_0x248af2,_0xf0ad66,_0xf81c74,_0x236587);}};function _0x5ee50b(_0x319ed1,_0x5f2792,_0x4b4fc1,_0x34ccb9){return _0x150c54(_0x319ed1-0x1de,_0x319ed1,_0x4b4fc1-0x137,_0x5f2792- -0xad);}function _0xa7d60f(_0x496c71,_0x5c9726,_0x2586b4,_0x883d3e){return _0x150c54(_0x496c71-0x1db,_0x496c71,_0x2586b4-0x1c1,_0x5c9726- -0x2e);}_0x3dbd0d[_0x5ee50b(0x751,0xbf2,0xdf1,0xec5)](sendFileFromUrl,m[_0x5ee50b(0x9fd,0xa27,0xe93,0x5b2)],_0x1ce9e4[_0x5ee50b(0x6ed,0x3cc,0x771,0x3c9)],lang[_0xa7d60f(-0x6,0x390,0x89b,-0x90)](),mek);});await limitAdd(sender,limit);}break;case _0x150c54(0xb95,0x7a9,0xd71,0xcab):const _0x204329={};_0x204329[_0x342471(0x9c2,0xace,0xb65,0xf07)+'t']='Check\x20Limi'+'t';const _0x1199a4={};_0x1199a4[_0x150c54(0xa67,0x589,0x79a,0x9d6)]='limit',_0x1199a4[_0x150c54(0xd34,0xad6,0x77a,0xb98)]=_0x204329,_0x1199a4['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x1199a4]);const pref='Usage:\x20'+enter+(_0x342471(0x1040,0xe5b,0xbfa,0xfd0)+_0x342471(0xd64,0xa37,0xb6e,0xa3b)+_0x150c54(0x620,0x65a,0x22f,0x459)+_0x342471(0x150,0x2e6,0x31b,0x74b)+_0x150c54(0x798,0xd90,0xb8a,0xad0)+_0x342471(0xe1d,0x9d3,0xb3b,0xd07)+_0x150c54(0x5c0,0xa92,0x5c1,0x591)+_0x150c54(0x3fc,0x8f0,0x71c,0x8ad)+_0x150c54(0x9ff,0xf13,0xa24,0xacc)+_0x150c54(0x3fc,0x5fa,0x682,0x8fa)+_0x342471(-0x51,0x370,0x452,0x83b)+'|pink|purp'+_0x150c54(0x9e0,0xa5b,0xa65,0xbb7)+_0x150c54(0x689,0xb78,0xd51,0x8a5))+enter+enter+_0x342471(0x96,0xf5,0x380,0x819)+enter+'\x20'+prefix+(_0x150c54(0x631,0x67,0x398,0x48e)+_0x150c54(0x6db,0xc32,0x1005,0xc01)+_0x342471(0x4d,0x2f7,0x367,0x803));if(args[_0x150c54(0x2ce,0x491,0x29a,0x41f)]<0x2127+0x1b*0x25+0x769*-0x5)return reply(pref);var kntl_=args['join']('\x20'),nama_=kntl_[_0x150c54(0x7cf,0x753,0x102d,0xba5)]('|')[0x16c4+0x1639+-0x2cfd*0x1],impostor_=kntl_[_0x342471(0xe1b,0x99e,0xae2,0x67f)]('|')[-0x9*0x41d+-0xb*0x2b4+0x42c2],color_=kntl_['split']('|')[-0x2683+0x1032+0x1653];const _0x58b755={};_0x58b755[_0x342471(0x65,0x188,0x42d,0xff)]=_0x150c54(0xefa,0xd86,0xba9,0xba8);var amongus=await getBuffer(_0x150c54(0x948,0x4ec,0x7ad,0x5ed)+'cefron.nl/'+'api/ejecte'+_0x342471(0x504,0xd50,0x9b7,0x88f)+nama_+_0x342471(0x28,0x1fa,0x50f,0x4ce)+impostor_+_0x150c54(0x53f,0x860,0xac,0x53d)+color_,_0x58b755);amongusp=''+lang[_0x342471(0x6ce,0x28e,0x2fb,0x686)]()+enter+enter+(_0x342471(0xa1,0x18,0x374,0x83c)+_0x342471(0x420,0x414,0x607,0xa7b)+_0x150c54(-0x86,0x2e3,0x43a,0x400)+_0x342471(0x973,0x2b,0x501,0x84)+_0x150c54(0x3ec,0x405,0x55f,0x42d)),alpha[_0x342471(0xd17,0xdd2,0xa46,0x5ca)+'e'](from,amongus,image,{'thumbnail':Buffer['alloc'](0x4f*0x16+0x1*-0xf97+0x8cd),'caption':lang[_0x150c54(0x149,0x57,0xcb,0x3be)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x150c54(0x54b,0x592,0x22d,0x413):case'trump':case'tweet':if(args[_0x150c54(0x168,0x5cd,0x886,0x41f)]<-0x7+-0x1487+0x148f)return reply('..');const _0x1aa8b0={};_0x1aa8b0[_0x342471(0xa0c,0xddd,0xb65,0xef1)+'t']='Check\x20Limi'+'t';const _0x458679={};_0x458679[_0x150c54(0xde1,0xed6,0x997,0x9d6)]=_0x150c54(0x92a,0x8ac,0xe25,0xa6d),_0x458679[_0x150c54(0xc2f,0xdb9,0x7f7,0xb98)]=_0x1aa8b0,_0x458679[_0x150c54(0x62e,0x4be,0x749,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0x762,0x4fd,0x9aa,0xd3b)](prefix),'©\x20'+ownername,[_0x458679]);let trump=args[_0x150c54(0x92e,0x73a,0xc53,0xb4a)]('\x20');const _0x5616b4={};_0x5616b4['method']=_0x150c54(0x788,0x918,0xadf,0xba8);let trump1=await fetchJson('https://ne'+'kobot.xyz/'+_0x150c54(0x1267,0xda4,0xeba,0xd64)+_0x150c54(0x969,0x1177,0x11b6,0xd20)+_0x150c54(0x83e,0x668,0xb42,0x790)+_0x342471(0x42d,0x57e,0x95b,0x510)+trump+_0x342471(0x6c6,0xbb7,0x806,0x36f),_0x5616b4),trump2=await getBuffer(trump1[_0x342471(0xdbd,0x582,0x8cf,0xdf8)]);alpha[_0x342471(0x51a,0xe4f,0xa46,0x83c)+'e'](from,trump2,image,{'thumbnail':Buffer[_0x150c54(0x6c5,0x269,0x1e6,0x6af)](0xeb0+-0x15d*-0x11+-0x1*0x25dd),'caption':lang[_0x342471(0x19a,0x7f,0x2fb,0x63e)](),'quoted':mek}),await limitAdd(sender,limit);break;case'cmm':if(args[_0x342471(0x55f,0x5a,0x35c,0x65)]<-0x43c+-0x3*-0xad9+-0x1*0x1c4e)return reply('..');const _0x5c9a0f={};_0x5c9a0f[_0x342471(0x719,0x743,0xb65,0xa34)+'t']=_0x342471(0xb8a,0xa1b,0xb57,0xccd)+'t';const _0x5ac8f2={};_0x5ac8f2[_0x150c54(0x974,0x99e,0xf08,0x9d6)]=_0x342471(0x4d6,0xbef,0x9aa,0xab2),_0x5ac8f2['buttonText']=_0x5c9a0f,_0x5ac8f2['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xc7c,0xc15,0x739,0xa6d)](prefix),'©\x20'+ownername,[_0x5ac8f2]);let cmm=args[_0x150c54(0x106f,0xf1d,0xc40,0xb4a)]('\x20');const _0x57a672={};_0x57a672[_0x342471(0x2a4,0x25f,0x42d,0x92b)]=_0x150c54(0x8e8,0x108b,0xd5f,0xba8);let anuuu=await fetchJson(_0x150c54(0xcdb,0x78f,0x9f9,0x904)+_0x342471(0x4a8,0x776,0x33c,0x737)+_0x150c54(0xe7b,0x119c,0xdb0,0xd64)+'en?type=ch'+_0x342471(0xbd,0x6e5,0x572,0x224)+_0x342471(0x99f,0x443,0x587,0x9c6)+cmm+_0x342471(0x726,0x3c5,0x806,0x505),_0x57a672),bbuffer=await getBuffer(anuuu['message']);alpha[_0x150c54(0x83e,0xb42,0x6c9,0xb09)+'e'](from,bbuffer,image,{'thumbnail':Buffer[_0x342471(0x394,0x699,0x5ec,0x22b)](-0x194d+0x8a1+0x4*0x42b),'caption':lang['success'](),'quoted':mek}),await limitAdd(sender,limit);break;case'kanna':if(args[_0x342471(0x4e5,0x58d,0x35c,-0x13f)]<-0x10*-0x125+-0x9d5+-0x87a)return reply('..');let kanna=args[_0x150c54(0xbc3,0xd46,0xb49,0xb4a)]('\x20');const _0x4e118c={};_0x4e118c[_0x342471(-0xfd,0x82b,0x42d,0x12f)]=_0x342471(0xc37,0xa5c,0xae5,0xec6);var anu_=await fetchJson('https://ne'+'kobot.xyz/'+_0x150c54(0x1152,0xa48,0x89e,0xd64)+_0x342471(0x371,0x83d,0x635,0x6a8)+_0x342471(0x63f,0x6f0,0x890,0x899)+'t='+kanna+_0x342471(0x385,0x32b,0x806,0x84c),_0x4e118c);let buffer_h=await getBuffer(anu_['message']);alpha[_0x150c54(0xf88,0x9a4,0xc2a,0xb09)+'e'](from,buffer_h,image,{'thumbnail':Buffer[_0x342471(0x590,0x833,0x5ec,0x8c0)](-0x84b*-0x1+-0x12cc+-0xa81*-0x1),'caption':lang[_0x342471(-0x9c,0x36,0x2fb,0x1d3)](),'quoted':mek}),await limitAdd(sender,limit);break;case'sc':case _0x342471(0x67b,0x883,0x428,0x77a):case _0x150c54(0xead,0xfd7,0x929,0xd1c):try{opo=await fetchJson(_0x342471(0x423,0x2a1,0x746,0x23a)+_0x342471(0xec2,0x64f,0xb30,0xe7d)+'eeoneofc.r'+_0x342471(0xbbd,0xdda,0x917,0xbda)+_0x342471(0x4aa,0x774,0x896,0x878));}catch{const _0x2b3f10={};_0x2b3f10[_0x150c54(0x799,0x26f,0x3df,0x4d3)]=_0x342471(0x9dc,0x7e0,0xb51,0x6c3)+'cript\x20Bot\x20'+':\x20https://'+'youtube.co'+_0x342471(0xcac,0x11d6,0xca6,0xf97)+'ofc',opo=_0x2b3f10;}let kl=opo[_0x342471(0x6ec,0x47,0x410,-0x53)];var sjakolan=await getBuffer(_0x342471(0xe23,0xeea,0xc2b,0x84d)+_0x342471(0x650,0xb60,0x833,0x3c8)+_0x150c54(0x3f5,0x918,0x556,0x54d)+_0x150c54(0x712,0x66a,0xb49,0x8df)+_0x150c54(0xa31,0x5c5,0xb7b,0x8ce));const _0x3f3dae={};_0x3f3dae[_0x150c54(0xf6c,0xe47,0xde2,0xc28)+'t']=_0x150c54(0x8e8,0x8f0,0x1039,0xddc);const _0x2c980f={};_0x2c980f[_0x342471(0x71e,0xb2e,0x913,0xd9a)]=_0x150c54(0x808,0xe59,0xcf7,0xc15),_0x2c980f[_0x342471(0xcbc,0x59c,0xad5,0x656)]=_0x3f3dae,_0x2c980f[_0x342471(0x464,0x45e,0x36e,0x20a)]=0x1;const _0x46a9e0={};_0x46a9e0[_0x150c54(0x7fc,0x9e2,0xca2,0xc28)+'t']='✓\x20OWNER';const _0x1fb848={};_0x1fb848[_0x342471(0xdbf,0xa69,0x913,0x614)]='owner',_0x1fb848['buttonText']=_0x46a9e0,_0x1fb848[_0x342471(-0x58,0x102,0x36e,0x74e)]=0x1,sendButLocation(from,kl,''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x150c54(0x6ef,-0x12,0x906,0x48c)+ini_mark['split']('@')[-0x3*0x819+-0x1*0x1625+0x8*0x5ce],sjakolan,[_0x2c980f,_0x1fb848],{'contextInfo':{'mentionedJid':[ini_mark]}});break;case _0x150c54(0x442,0x660,0x372,0x838):{if(args['length']<0x2069+0x240f+-0x4477)return reply(_0x342471(0x33f,0x738,0x820,0xcc3)+'ntah\x20*'+(prefix+command)+_0x150c54(0x4bc,0x2c0,0x580,0x658));const _0x50a3bf={};_0x50a3bf[_0x150c54(0x10f3,0x8f6,0xf2b,0xc28)+'t']='Enable';const _0xb8884b={};_0xb8884b[_0x150c54(0xa6e,0x8fa,0xd9d,0x9d6)]='nsfw\x20on',_0xb8884b[_0x150c54(0xf32,0x8c5,0xd44,0xb98)]=_0x50a3bf,_0xb8884b[_0x342471(0x88c,0x438,0x36e,0x6a7)]=0x1;if(!isNsfw&&!mek['key']['fromMe']&&!isOwner&&!isCreator)return sendButMessage(from,lang['nsfwmo'](),'©\x20'+ownername,[_0xb8884b]);function xnxxsearch(_0x23f8a8){function _0x4c14ac(_0x543d32,_0x40a5ea,_0x4fc254,_0x21631e){return _0x342471(_0x21631e,_0x40a5ea-0x4d,_0x40a5ea- -0x1d,_0x21631e-0x1c4);}const _0x14c372={'ZYmhj':_0x4c14ac(0x725,0x83a,0xa7b,0x8a7),'dqUwb':function(_0x947623,_0x41e7a3){return _0x947623===_0x41e7a3;},'XBRRv':function(_0xb1679e,_0x44abe2){return _0xb1679e(_0x44abe2);},'Titxr':_0x4c14ac(0xf76,0xa43,0x717,0x515),'pBNMx':_0x4c14ac(0x455,0x86d,0x80d,0xc47),'xJvdb':_0x4c14ac(0x93e,0x7a2,0x9ed,0x377),'RQJKq':'div.mozaiq'+'ue','QUbuu':function(_0x3cc93a,_0x286a52){return _0x3cc93a<_0x286a52;},'kpsod':function(_0x238b37,_0x164d97){return _0x238b37(_0x164d97);},'LZCsE':'https://ww'+_0x4c14ac(0xb14,0xab5,0xa3a,0xce9),'RqTSI':function(_0x1ae1b1,_0x5c6640,_0x37097e){return _0x1ae1b1(_0x5c6640,_0x37097e);},'HqcDg':function(_0x55d6cb,_0x107876){return _0x55d6cb*_0x107876;},'hXudE':_0x53b80b(0x5af,0xcfe,0x95b,0x6f8)};function _0x53b80b(_0x17c036,_0x4bf2cc,_0x2f02e5,_0x19bc0e){return _0x150c54(_0x17c036-0x49,_0x17c036,_0x2f02e5-0x27,_0x2f02e5- -0x24d);}return new Promise((_0x35a148,_0x6420f6)=>{function _0x383057(_0x21499f,_0x2013da,_0x5dfff3,_0x226cb4){return _0x53b80b(_0x226cb4,_0x2013da-0x12d,_0x2013da- -0x284,_0x226cb4-0x19c);}const _0x56cd44={'SNwAK':_0x14c372['ZYmhj'],'kmDhM':function(_0x105f24,_0xbe38ea){function _0x2b5313(_0x1af195,_0x2d48eb,_0x1c1554,_0x2659f3){return _0x2507(_0x1c1554- -0x17a,_0x2659f3);}return _0x14c372[_0x2b5313(0x41d,-0x6a,0x5c,0xa2)](_0x105f24,_0xbe38ea);},'KEaED':'grlvv','nJdKI':function(_0x669ccf,_0x43bcc2){function _0x4de254(_0xc37633,_0x21de48,_0x47fde5,_0x169094){return _0x2507(_0x169094- -0x252,_0x47fde5);}return _0x14c372[_0x4de254(0x313,0x380,0xb7a,0x7a9)](_0x669ccf,_0x43bcc2);},'EmxSS':_0x14c372['Titxr'],'KvDgt':_0x14c372['pBNMx'],'XVTQZ':_0x14c372['xJvdb'],'AQQaY':_0x14c372[_0x383057(0x1ba,0x307,0x70c,0x533)],'xRBHp':function(_0x590a8a,_0x7d8bf4){return _0x14c372['QUbuu'](_0x590a8a,_0x7d8bf4);},'PHOvU':function(_0x533783,_0x436dd4){function _0x400234(_0x17e4bb,_0x30c80e,_0x35c34c,_0x4cbca6){return _0x383057(_0x17e4bb-0xaf,_0x4cbca6-0x374,_0x35c34c-0xb8,_0x30c80e);}return _0x14c372[_0x400234(0x823,0xdc,0x2a2,0x41c)](_0x533783,_0x436dd4);}},_0x41fc08=_0x14c372[_0x44ec74(0x809,0x32f,0xb7d,0x3d8)];function _0x44ec74(_0x4441ce,_0x154983,_0x12f067,_0x5f318d){return _0x4c14ac(_0x4441ce-0x115,_0x4441ce- -0x14e,_0x12f067-0x1e2,_0x12f067);}_0x14c372[_0x44ec74(0x886,0x7a9,0xbc2,0x882)](fetch,_0x41fc08+_0x44ec74(0x2d0,0x1ab,-0x11d,0x9f)+_0x23f8a8+'/'+(Math['floor'](_0x14c372[_0x44ec74(0x6c1,0x9ee,0x1da,0xae6)](Math[_0x44ec74(0x54f,0x13a,0x3a6,0x4a5)](),0x273*0x6+0x1*-0x14bd+0x60e))+(-0xa1a+-0x7*-0x137+-0x29*-0xa)),{'method':_0x14c372[_0x383057(-0x269,0x17,0x1dc,0x414)]})['then'](_0x5afc4a=>_0x5afc4a['text']())['then'](_0x18b371=>{const _0x411865={'Xziwl':function(_0x40e3a2,_0x39b776){return _0x40e3a2(_0x39b776);},'SawWV':'href','ePUwv':_0x56cd44[_0x35bfd8(0x3cd,0x2ca,0x2fd,0xfe)],'Mybrr':function(_0x397c2b,_0x537a1d){function _0xb6037e(_0x7577ae,_0x2d1b6b,_0x48b58a,_0x2e80e3){return _0x35bfd8(_0x7577ae-0xb3,_0x2d1b6b-0x29,_0x2d1b6b-0x221,_0x48b58a);}return _0x56cd44[_0xb6037e(0xa12,0x572,0x95a,0xc1)](_0x397c2b,_0x537a1d);},'VsSUF':_0x56cd44['KEaED'],'VXQPf':function(_0xb1758f,_0x5165bd){return _0x56cd44['nJdKI'](_0xb1758f,_0x5165bd);},'NbdNC':_0x56cd44[_0x1ca950(0x2d5,0x49d,0x44b,0x42e)],'CUZdX':function(_0x3d23f5,_0x180b2f){return _0x56cd44['nJdKI'](_0x3d23f5,_0x180b2f);},'soUiT':_0x56cd44['KvDgt'],'zhpDC':_0x56cd44[_0x35bfd8(0x520,0x5ac,0x1f1,0x290)]},_0x2a198d={};_0x2a198d['xmlMode']=![];let _0x431331=cheerio[_0x1ca950(0xd99,0xc22,0x6d5,0x90b)](_0x18b371,_0x2a198d);function _0x1ca950(_0x16140d,_0x1aec78,_0x29e164,_0x137412){return _0x44ec74(_0x137412- -0xd3,_0x1aec78-0x13,_0x29e164,_0x137412-0x103);}let _0x4bd460=[],_0x1ad4eb=[],_0x5b5c61=[],_0x30b996=[];_0x56cd44['nJdKI'](_0x431331,_0x56cd44[_0x1ca950(0x35e,0x2a2,0x5bd,0x2a8)])['each'](function(_0x1f4c40,_0x10eac8){function _0x5c36f3(_0x3c09ed,_0x525ef7,_0x308e9f,_0x3b6c2e){return _0x1ca950(_0x3c09ed-0xc1,_0x525ef7-0x154,_0x308e9f,_0x525ef7-0x57);}function _0x565bc2(_0x222a31,_0x2ce868,_0x3317a3,_0x1e0109){return _0x35bfd8(_0x222a31-0x148,_0x2ce868-0xf9,_0x2ce868-0x6b2,_0x222a31);}_0x411865[_0x565bc2(0xf2b,0xc67,0xdbe,0x8da)](_0x5c36f3(0x317,0x54a,0x881,0x439),_0x411865[_0x5c36f3(0x4c6,0x6ca,0x829,0x31e)])?_0x17e25b(_0xf07511[_0x5c36f3(0x945,0x6ec,0x1b8,0x7b8)]()):_0x411865[_0x5c36f3(0x38c,0x789,0x38c,0xa12)](_0x431331,_0x10eac8)[_0x565bc2(0xbeb,0x6c6,0x7f5,0x355)](_0x411865['NbdNC'])[_0x565bc2(0x4d2,0x735,0x715,0x33d)](function(_0x1e1780,_0x11535d){function _0x32c55e(_0xc6a1bc,_0x2f6f0e,_0x32b0eb,_0x591b9a){return _0x5c36f3(_0xc6a1bc-0x1f0,_0xc6a1bc- -0x224,_0x591b9a,_0x591b9a-0x94);}function _0xf770da(_0x440e8c,_0x1e19c6,_0x208835,_0x4a18a6){return _0x565bc2(_0x208835,_0x1e19c6- -0x97,_0x208835-0xa9,_0x4a18a6-0x3c);}_0x1ad4eb['push'](_0x41fc08+_0x411865[_0x32c55e(0x197,-0x23f,0x41,0x310)](_0x431331,_0x11535d)[_0xf770da(0x818,0x62f,0x53c,0x1fd)]('a')[_0x32c55e(0x396,0x1be,0x815,-0x70)](_0x411865['SawWV'])[_0x32c55e(0xea,-0x3e1,0x3b,0x51e)](_0x411865['ePUwv'],'/'));});}),_0x56cd44[_0x1ca950(0x18d,0x5b1,0x26d,0x6ac)](_0x431331,'div.mozaiq'+'ue')[_0x35bfd8(-0x34,-0x36b,0x83,0x43a)](function(_0x212e99,_0x367afe){function _0x55768d(_0x2d1e1b,_0x23e6c8,_0x1184a7,_0x32df81){return _0x1ca950(_0x2d1e1b-0x156,_0x23e6c8-0x2d,_0x23e6c8,_0x1184a7-0x3d8);}const _0x2cd422={'oemGk':function(_0x55db0c,_0x2a8384){return _0x55db0c(_0x2a8384);},'LMDwU':_0x411865[_0x55768d(0xa6b,0x6cc,0xb7f,0xe04)]};function _0x3a5e8d(_0x467caf,_0x296e5b,_0x10fa79,_0x4662bf){return _0x35bfd8(_0x467caf-0x1e5,_0x296e5b-0x1da,_0x4662bf-0x2,_0x296e5b);}_0x411865[_0x3a5e8d(0x35f,0x3a8,0xd0,0x106)](_0x431331,_0x367afe)['find'](_0x3a5e8d(0x5f1,0x515,0x4d4,0x2c7)+'under')[_0x3a5e8d(-0x65,0x5a6,-0x2c5,0x85)](function(_0x165f8a,_0x940252){function _0x173d65(_0x478919,_0x52ac7c,_0x27b912,_0x23909c){return _0x3a5e8d(_0x478919-0xf3,_0x52ac7c,_0x27b912-0x4a,_0x478919-0x719);}_0x5b5c61['push'](_0x411865['CUZdX'](_0x431331,_0x940252)[_0x173d65(0x72f,0x7d5,0x895,0xac5)](_0x411865[_0x31377c(0x687,0x3ec,0x1cc,0x276)])[_0x173d65(0xccc,0xa41,0x7fa,0xfaf)]());function _0x31377c(_0x3c1648,_0x485c01,_0x584643,_0x46805f){return _0x55768d(_0x3c1648-0xc8,_0x584643,_0x46805f- -0x28f,_0x46805f-0x11c);}_0x431331(_0x940252)[_0x173d65(0x72f,0x2f5,0x4e3,0xb0d)]('a')[_0x173d65(0x79e,0xb38,0x2ab,0x423)](function(_0x212bd8,_0x5b9d61){function _0x3ce0bb(_0x41149b,_0x2c07f8,_0x411b59,_0x3f967c){return _0x173d65(_0x3f967c- -0x222,_0x411b59,_0x411b59-0x15e,_0x3f967c-0x3);}function _0x27c084(_0x9f9e63,_0x138616,_0x4568cd,_0x3a9a3b){return _0x173d65(_0x4568cd- -0x581,_0x3a9a3b,_0x4568cd-0x12e,_0x3a9a3b-0x1cc);}_0x4bd460[_0x3ce0bb(0xf78,0x1166,0xa01,0xce6)](_0x2cd422[_0x27c084(0x45d,0x803,0x2fe,0x485)](_0x431331,_0x5b9d61)['attr'](_0x2cd422[_0x3ce0bb(0x959,0x9b6,0xfb6,0xb6c)]));});});});for(let _0x53f5f2=0xb8f*-0x1+0x12f9+-0x76a;_0x56cd44['xRBHp'](_0x53f5f2,_0x4bd460[_0x1ca950(-0x3a8,0x28d,-0x34a,0x11e)]);_0x53f5f2++){const _0x16b080={};_0x16b080[_0x1ca950(0x231,0xa6f,0xa2e,0x581)]=_0x4bd460[_0x53f5f2],_0x16b080[_0x35bfd8(0x756,0x524,0x64d,0x462)]=_0x5b5c61[_0x53f5f2],_0x16b080[_0x1ca950(0x987,0xb19,0xab8,0x999)]=_0x1ad4eb[_0x53f5f2],_0x30b996[_0x1ca950(0x845,0x5c8,0xcc1,0xa4d)](_0x16b080);}function _0x35bfd8(_0x5c28df,_0x4782cc,_0x15bbf7,_0x65ad76){return _0x383057(_0x5c28df-0x18,_0x15bbf7- -0x90,_0x15bbf7-0x103,_0x65ad76);}const _0x4f373c={};_0x4f373c[_0x35bfd8(0x7e,-0x364,0x7e,-0x27d)]=0xc8,_0x4f373c[_0x1ca950(0x986,0xb03,0x7c8,0x70a)]=!![],_0x4f373c[_0x1ca950(0xea3,0x6b7,0x4df,0x9f0)]=_0x30b996,_0x56cd44[_0x1ca950(0x6fc,0x625,0x4d2,0x585)](_0x35a148,_0x4f373c);})[_0x44ec74(0x7b1,0x492,0x5a8,0x529)](_0x9055f3=>_0x6420f6({'code':0x1f7,'status':![],'result':_0x9055f3}));});}xnxxsearch(''+q)[_0x342471(0x27b,0x383,0x58d,0x4b0)](async _0x2cef9a=>{const _0x15201b={'qrdum':function(_0x397ee2,_0x38877e){return _0x397ee2(_0x38877e);},'xXTJh':function(_0x85adc9,_0x193b57){return _0x85adc9+_0x193b57;}};let _0x4e3a85=_0x5a239a(0x78b,0x864,0xb91,0xcab)+'XNXX\x20SEARC'+_0x5a239a(0x1df,0x5db,0x22a,0x44e)+_0x5a239a(0x9e3,0x751,0x632,0xa8a);for(let _0x248eb1 of _0x2cef9a['result']){_0x4e3a85+=_0x5a239a(0x3a,0x285,-0x16,0x562)+'*\x20'+_0x248eb1[_0x5a239a(0x5e5,0x4d7,0x789,0x272)]+'\x0a',_0x4e3a85+='*📚\x20Url\x20:*\x20'+_0x248eb1['link']+(_0x4cbeda(0xd07,0xd95,0x8d9,0x8cd)+_0x4cbeda(0xd25,0xb7e,0x808,0x87c)+_0x4cbeda(0x892,0xabf,0x808,0xc3d)+'----------'+'----------'+_0x4cbeda(0x58d,0x38,0x4d9,0x287));}function _0x4cbeda(_0x263417,_0x112e78,_0x73f16b,_0x1401c6){return _0x342471(_0x263417,_0x112e78-0x8d,_0x73f16b- -0x243,_0x1401c6-0xf);}function _0x5a239a(_0x519a27,_0x458434,_0x5c580a,_0x316417){return _0x150c54(_0x519a27-0x2e,_0x5c580a,_0x5c580a-0x8c,_0x458434- -0x3ab);}const _0x436386={};_0x436386['caption']=_0x4e3a85,_0x436386[_0x4cbeda(0x266,0x298,0x1b7,0x32b)]=mek,await alpha[_0x4cbeda(0x345,0xbde,0x803,0x78c)+'e'](m[_0x4cbeda(0x479,0xa60,0x7ce,0x98b)],await _0x15201b[_0x4cbeda(-0x1d1,0x66d,0x231,0x3dd)](getBuffer,_0x15201b[_0x5a239a(0xd5,0x5be,0x64e,0x101)](picak,_0x4cbeda(0xc00,0xb1c,0x6fa,0x1dd)+'h')),image,_0x436386);})[_0x150c54(0x5aa,0xbe6,0xd9f,0x9df)](_0x397af6=>{const _0x9a69d3={'nUFjP':function(_0x313061,_0x494766){return _0x313061(_0x494766);}};function _0x2cf78b(_0x5acf0e,_0x2cebf1,_0x28b17d,_0x521ea2){return _0x342471(_0x5acf0e,_0x2cebf1-0x162,_0x521ea2- -0x19b,_0x521ea2-0x8f);}function _0x5229e3(_0x250e22,_0xb3e230,_0x3636e0,_0x4df3e0){return _0x342471(_0x3636e0,_0xb3e230-0x1af,_0xb3e230- -0x99,_0x4df3e0-0x49);}_0x9a69d3[_0x5229e3(0x515,0x6b0,0x7ca,0x1b9)](reply,lang[_0x5229e3(0x652,0x83a,0x592,0x585)]());});}break;case _0x150c54(0xe37,0x836,0xe9b,0xbdd):case'xnxxdownlo'+'ad':{const _0x3a84db={};_0x3a84db[_0x342471(0xf65,0x650,0xb65,0xe40)+'t']='Enable';const _0x9910b8={};_0x9910b8[_0x342471(0xe1b,0x6bb,0x913,0xc27)]='nsfw\x20on',_0x9910b8['buttonText']=_0x3a84db,_0x9910b8[_0x342471(0x399,0xd7,0x36e,-0xcf)]=0x1;if(!isNsfw&&!mek['key'][_0x342471(0x6e0,0x95f,0x8c4,0x480)]&&!isOwner&&!isCreator)return sendButMessage(from,lang[_0x150c54(0xb69,0x797,0x9ff,0x87e)](),'©\x20'+ownername,[_0x9910b8]);if(args[_0x342471(0x3ae,0x464,0x35c,0x695)]<0x1f1d+-0x1*0x212a+-0x1*-0x20e)return reply(_0x150c54(0xa65,0x885,0xd99,0x8e3)+_0x342471(0x6fb,0xbe1,0x6ad,0xb6b)+(prefix+command)+(_0x150c54(0x551,0xae8,0xf1e,0x9e8)+'ww.xnxx.co'+'m/video-13'+_0x342471(0x62a,0x432,0x4bf,0x465)+_0x150c54(-0x2c,0x1f8,0x6b8,0x4f2)+_0x150c54(0x192,0x96f,0xa4b,0x63f)+_0x342471(0xb4c,0x797,0xc77,0x10cc)+_0x150c54(0x144,0xab1,0xa2d,0x5ea)+_0x342471(0x47d,0x49,0x359,0x6b8)+_0x150c54(0x97e,0x11aa,0xb28,0xde0)+_0x150c54(0xde3,0xc0a,0x10c0,0xcd3)+_0x342471(0xc5,0x4fa,0x35d,-0x15e)+_0x150c54(0x11ca,0x936,0xd8a,0xd07)+_0x342471(0x7f1,0x1e9,0x3d4,0x475)));function xnxxdl(_0x44375d){const _0x2de05f={'GyUqc':function(_0x4545d9,_0x24e526){return _0x4545d9(_0x24e526);},'wkMcZ':'meta[prope'+_0x362883(0x28c,0x791,0x305,0x266)+'tle\x22]','Aehdl':'meta[prope'+_0x1a2f96(0x280,0x26,-0x504,0xcc)+'deo:type\x22]','guxsj':_0x362883(0x6df,0x8ba,0xb5b,0x796)+'rty=\x22og:vi'+_0x362883(0x23d,0x1c1,0x6c4,0x39e)+']','cWolG':_0x362883(0x6df,0x8df,0x27a,0xbc5)+'rty=\x22og:vi'+_0x362883(0x660,0x68c,0x7eb,0x13d)+'\x22]','ntNqu':_0x362883(0x3fa,0x860,0x7e,0x21d)+_0x362883(0x4c4,0x889,0x8b9,0x251),'JFhLB':_0x1a2f96(0xb9,-0x68,0x408,0x4a0)+_0x362883(0x5d9,0x2cf,0x8dd,0x579)+_0x1a2f96(0x56a,0x66e,0x416,0x32d)+'.*?)\x27\x5c);','pLRyZ':'html5playe'+_0x362883(0x5d9,0x1f5,0x8c6,0x4a8)+_0x362883(0x15a,-0xd2,0x25b,0x166)+'(.*?)\x27\x5c);','NeoQy':_0x362883(0x1e,0x84,0x15a,-0x457)+_0x362883(0x5d9,0x8ec,0x863,0x226)+'HLS\x5c(\x27(.*?'+_0x1a2f96(0xbee,0x703,0x392,0x42b),'DWFSF':_0x362883(0x1e,0x1df,-0x28,-0x37b)+_0x1a2f96(0xab8,0x840,0x7d6,0x641)+_0x362883(0x686,0x19e,0x346,0x425)+_0x362883(0x789,0x628,0x599,0x5d5),'pDFQv':_0x1a2f96(0x132,-0x68,0x2b8,0x298)+_0x1a2f96(0x8bb,0x840,0x954,0x4ca)+_0x362883(-0x21,-0x333,-0x255,-0x5a)+'*?)\x27\x5c);','Bwlku':_0x362883(0x1e,0x30b,0x161,0x365)+'r.setThumb'+_0x1a2f96(0x8e5,0x500,0x712,0x71d)+_0x362883(0x5e3,0x40a,0x4ec,0x4cc),'vYBGb':function(_0x2f1e8f,_0x13c529){return _0x2f1e8f===_0x13c529;},'bSZTQ':_0x362883(0x3dd,0x63,0xfc,0x7a6),'bgsOM':function(_0x46aa26,_0x2f1e2e,_0x200bfc){return _0x46aa26(_0x2f1e2e,_0x200bfc);}};function _0x1a2f96(_0x144cc5,_0x3d1935,_0x5d5cb4,_0x569fc5){return _0x150c54(_0x144cc5-0x19d,_0x144cc5,_0x5d5cb4-0x130,_0x3d1935- -0x451);}function _0x362883(_0x636c4d,_0x278dd2,_0x4550c3,_0x5dc66a){return _0x150c54(_0x636c4d-0x10b,_0x5dc66a,_0x4550c3-0xea,_0x636c4d- -0x3cb);}return new Promise((_0x3785d4,_0x4ed669)=>{function _0x2719c9(_0x4e3153,_0x5e3e2b,_0x57d27a,_0x4df90e){return _0x362883(_0x4df90e- -0x1cc,_0x5e3e2b-0xa2,_0x57d27a-0xfc,_0x4e3153);}const _0x265bbb={'ceZhp':function(_0x4a4247,_0x1bbce5){function _0x148427(_0x3e7aca,_0x14176f,_0x36cf6b,_0x185731){return _0x2507(_0x14176f- -0x2ed,_0x36cf6b);}return _0x2de05f[_0x148427(0x4c9,0x2b6,-0x261,0x32c)](_0x4a4247,_0x1bbce5);},'LoUAS':_0x2de05f[_0x2719c9(0x24f,0x381,0x53c,0x537)],'Fxrxd':_0x334867(0x85c,0xc9f,0xb45,0x89d),'qpFzr':_0x2de05f[_0x2719c9(0x67,0x3ed,-0x1e4,0x103)],'MnRsL':_0x2de05f[_0x2719c9(0x379,0x240,0x83e,0x5d9)],'HKYmQ':_0x2de05f[_0x2719c9(0xf0,0xab5,0x6b9,0x57d)],'JPBMh':_0x2de05f[_0x2719c9(0x6a3,0x6f5,0xb11,0x856)],'VJMQv':_0x2de05f[_0x2719c9(0x27d,0x6e1,0x8dc,0x598)],'OwLvW':_0x2de05f['pLRyZ'],'KCfLJ':_0x2de05f[_0x334867(0xc5b,0xe81,0xab9,0xa92)],'KuQUV':_0x2de05f[_0x2719c9(0x10f,-0x37,0x1f8,0x3d8)],'fqWTL':_0x2de05f[_0x334867(0x94a,0xc2b,0xaf8,0x91f)],'lSwuL':_0x2de05f[_0x334867(0x505,0x52d,0x677,0x41f)]};function _0x334867(_0x24c053,_0x3c2feb,_0x52fdec,_0x2abcd3){return _0x1a2f96(_0x2abcd3,_0x3c2feb-0x5b5,_0x52fdec-0xba,_0x2abcd3-0x17d);}if(_0x2de05f[_0x334867(0x5db,0x7ad,0xc8b,0x52c)](_0x2de05f['bSZTQ'],_0x334867(0x738,0x90c,0xbe7,0x9ea))){const _0x1133fa={};_0x1133fa[_0x334867(0x855,0x654,0x456,0x80c)]=_0x334867(0x941,0xd0c,0xb01,0xbfa),_0x2de05f[_0x2719c9(0xab3,0xb19,0x74b,0x753)](fetch,''+_0x44375d,_0x1133fa)[_0x334867(0xce0,0x7b4,0xb9f,0x817)](_0x3f0ce1=>_0x3f0ce1[_0x2719c9(0x374,0x462,0x719,0x57b)]())[_0x334867(0x96e,0x7b4,0xb86,0x4c6)](_0x185283=>{const _0x21e689={};_0x21e689[_0x32a073(0x965,0x92c,0xafb,0xca7)]=![];let _0x12c050=cheerio[_0x32a073(0xb6c,0xe03,0xb06,0xc0c)](_0x185283,_0x21e689);const _0x400ca0=_0x265bbb[_0x32a073(0x667,0x55f,0x95a,0x9ab)](_0x12c050,_0x265bbb['LoUAS'])[_0x1ab98d(0x6c8,0x968,0x2ff,0x5a3)](_0x265bbb['Fxrxd']),_0x381fbf=_0x12c050('meta[prope'+_0x32a073(0x717,0x55d,0x3e5,0x68e)+_0x1ab98d(0x9d9,0x51e,0x573,0x62f))[_0x1ab98d(0x634,0x630,0x36d,0x5a3)](_0x265bbb['Fxrxd']),_0x5d4812=_0x265bbb[_0x1ab98d(0xb8a,0xbb6,0xb86,0x6ea)](_0x12c050,_0x32a073(0x86d,0x750,0x880,0xaaa)+_0x32a073(0x1277,0x1161,0x959,0xd6a)+_0x32a073(0x18f,0x64a,0x496,0x613))[_0x1ab98d(0x978,0xa70,0xd8,0x5a3)](_0x265bbb[_0x32a073(0x976,-0x62,0x11b,0x4bb)]),_0x903a8a=_0x265bbb[_0x1ab98d(0x4b1,0x91f,0x7bc,0x6ea)](_0x12c050,_0x265bbb[_0x32a073(0x1011,0x9ee,0xbcf,0xb62)])[_0x1ab98d(0x924,0x24e,0x2eb,0x5a3)](_0x265bbb[_0x1ab98d(0x3bb,-0x254,0x54f,0x1fa)]),_0x1ab463=_0x265bbb[_0x32a073(0xd58,0x7d5,0xabc,0x9ab)](_0x12c050,_0x265bbb[_0x32a073(0x414,0xa02,0xb83,0x8fd)])[_0x32a073(0x36b,0x363,0x97d,0x864)](_0x265bbb[_0x32a073(0x340,-0x18,0x80c,0x4bb)]);function _0x1ab98d(_0x349de8,_0x3af1e3,_0x42c6a3,_0x2095e0){return _0x2719c9(_0x3af1e3,_0x3af1e3-0x13b,_0x42c6a3-0xb9,_0x2095e0-0x2d6);}const _0x313766=_0x265bbb[_0x32a073(0xecf,0x81e,0x8cd,0x9ab)](_0x12c050,_0x265bbb[_0x32a073(0x952,0xd9,0x113,0x5e2)])[_0x32a073(0x659,0xaac,0x7a0,0x864)](_0x265bbb['Fxrxd']),_0x20e364=_0x12c050(_0x265bbb['JPBMh'])['text']();function _0x32a073(_0x1f1ae9,_0x5b6645,_0x3419d7,_0x16b8b4){return _0x334867(_0x1f1ae9-0xdb,_0x16b8b4- -0x164,_0x3419d7-0x7a,_0x3419d7);}const _0x343d62=_0x265bbb[_0x32a073(0xd21,0x6a1,0x996,0x9ab)](_0x12c050,_0x1ab98d(0xc50,0x724,0xc3b,0x8d5)+_0x32a073(0xd6f,0xa88,0xb69,0x8da)+_0x32a073(0xf98,0x879,0x8c0,0xd22)+_0x1ab98d(-0x11b,0x82e,0x20f,0x33e))[_0x1ab98d(0x730,0x6e4,0x3c7,0x822)](),_0x84f894={'low':(_0x343d62[_0x32a073(0xa49,0x32d,0x63d,0x644)](_0x265bbb[_0x32a073(0x802,0x8b8,0x4ab,0x5f6)])||[])[-0xbf8+0x24fa+0xad*-0x25],'high':_0x343d62[_0x32a073(0x4d5,0xad2,0x576,0x644)](_0x265bbb[_0x32a073(0x932,0xa2d,0x884,0xcdf)]||[])[0x98f+-0xea2+0x514],'HLS':_0x343d62['match'](_0x265bbb['KCfLJ']||[])[-0x1c*0x1+0x916*0x3+-0x1b25],'thumb':_0x343d62[_0x1ab98d(-0xbb,0x419,0x5f3,0x383)](_0x265bbb[_0x32a073(0xd40,0xd17,0xde4,0xccf)]||[])[-0xac8+0x264d+-0xdc2*0x2],'thumb69':_0x343d62[_0x1ab98d(0x6e2,0x520,-0x11c,0x383)](_0x32a073(0x772,0x6a3,0x4d1,0x3e9)+_0x32a073(0x7cd,0xa54,0x10e6,0xc91)+_0x1ab98d(0x97f,0xa0e,0x658,0x582)+_0x1ab98d(0x4fc,0x27c,0x34b,0x3fb)||[])[-0x510*-0x1+-0x144*0x6+-0x289*-0x1],'thumbSlide':_0x343d62['match'](_0x265bbb['fqWTL']||[])[-0x46d+0x455*-0x3+-0x1*-0x116d],'thumbSlideBig':_0x343d62['match'](_0x265bbb[_0x32a073(0x48c,0x56a,0xa23,0x589)]||[])[-0x1c6b+-0x12ac+-0x16*-0x224]},_0x53cbc6={};_0x53cbc6['title']=_0x400ca0,_0x53cbc6[_0x1ab98d(0x509,0x99b,0xb36,0x6fb)]=_0x44375d,_0x53cbc6[_0x1ab98d(0xf64,0x668,0xe15,0xaf0)]=_0x381fbf,_0x53cbc6[_0x1ab98d(0x68a,0x21a,0x9ce,0x69e)]=_0x5d4812,_0x53cbc6[_0x1ab98d(0x28c,0x466,0x638,0x600)]=_0x903a8a,_0x53cbc6[_0x1ab98d(-0x17f,-0x1c6,0x332,0x103)]=_0x1ab463,_0x53cbc6[_0x32a073(0x4c5,0xb3a,0xa86,0x85a)+'t']=_0x313766,_0x53cbc6['info']=_0x20e364,_0x53cbc6[_0x32a073(0x718,0x518,0x5b6,0x574)]=_0x84f894;const _0x57bd63={};_0x57bd63[_0x32a073(0x958,0xba1,0xa70,0xa0b)]=0xc8,_0x57bd63[_0x32a073(0x1082,0xb98,0x87a,0xcf1)]=_0x53cbc6,_0x265bbb[_0x1ab98d(0x9f2,0x646,0x9c4,0x6ea)](_0x3785d4,_0x57bd63);})[_0x2719c9(0x459,0x6b7,0x428,0x448)](_0x2a1758=>_0x4ed669({'code':0x1f7,'status':![],'result':_0x2a1758}));}else _0x1d6c16=_0x334867(0xbff,0xcec,0xb35,0x877)+_0x2719c9(0x1aa,0xff,-0x28f,-0x15a)+_0x334867(0x2a6,0x6c7,0x394,0x81f)+_0x334867(0x518,0x6a4,0x2f1,0x1d9)+'g';});}xnxxdl(args[-0xb8f+-0x24bf+0x304e])['then'](async _0x4e13ce=>{function _0x505ec7(_0x5bce83,_0x5739d2,_0x292453,_0x1b5b8e){return _0x342471(_0x5739d2,_0x5739d2-0x87,_0x1b5b8e- -0x126,_0x1b5b8e-0x120);}const _0x3cc2d3={'feeYT':function(_0x4b30c5,_0x2644a5,_0x50ba4d,_0x45da48,_0xacea0){return _0x4b30c5(_0x2644a5,_0x50ba4d,_0x45da48,_0xacea0);}};let _0x455c27=_0x355dd9(0x89,-0x45c,0x4ff,0x386)+_0x355dd9(0x4d1,0xa04,0x55d,0x89a)+'\x20」----*\x0a\x09\x0a'+_0x505ec7(0x67a,0x871,0x519,0x90f)+_0x4e13ce[_0x505ec7(0xa37,0xfb1,0x91f,0xb08)][_0x505ec7(0xaf6,0xa50,0x940,0x699)]+(_0x505ec7(0x7e9,0xc46,0xdae,0xaf0)+':\x20')+_0x4e13ce[_0x505ec7(0x669,0x7fb,0xc51,0xb08)][_0x355dd9(0x44,-0x321,-0x3f6,-0x344)]+('\x0a🎭\x20Width\x20:'+'\x20')+_0x4e13ce[_0x355dd9(0x71d,0xaa2,0xc30,0x55f)]['videoWidth']+(_0x355dd9(0x447,0x2ca,0x514,0x910)+':\x20')+_0x4e13ce[_0x505ec7(0xa5f,0xe27,0xe77,0xb08)][_0x355dd9(0x286,0x1a2,-0xf3,0x2af)+'t']+_0x505ec7(0x25d,0x74e,0x378,0x4f6)+_0x4e13ce[_0x355dd9(0x71d,0x7ad,0xb27,0xbc5)][_0x355dd9(0x3e8,0x827,0x745,0x1f9)];function _0x355dd9(_0x508477,_0x32d685,_0xc1a2af,_0x4d6b38){return _0x150c54(_0x508477-0xf2,_0xc1a2af,_0xc1a2af-0xd2,_0x508477- -0x5d4);}await sendFileFromUrl(m[_0x355dd9(0x500,0x32d,0x2fd,0x51e)],_0x4e13ce[_0x355dd9(0x71d,0xa70,0x373,0x84b)]['image'],_0x455c27,m),_0x3cc2d3[_0x505ec7(0x981,0x6f4,0x67b,0x499)](sendFileFromUrl,m['chat'],_0x4e13ce[_0x505ec7(0xd12,0x667,0x9a3,0xb08)][_0x355dd9(-0x60,0x30,-0x43d,0x43f)][_0x355dd9(0x6df,0x56f,0x9e8,0x1e7)],lang[_0x505ec7(-0x27a,0x5c0,-0x254,0x1d5)](),m);})[_0x150c54(0xb62,0x889,0x7e5,0x9df)](_0x599a35=>{function _0x2a6d9e(_0x2f17ad,_0x182df7,_0x1a72d1,_0x4e5fba){return _0x150c54(_0x2f17ad-0x5,_0x4e5fba,_0x1a72d1-0x1c0,_0x2f17ad- -0xa);}function _0x4f8dfc(_0x3da942,_0x38bf49,_0x1c887d,_0x4a6093){return _0x342471(_0x4a6093,_0x38bf49-0xa5,_0x38bf49- -0x482,_0x4a6093-0x110);}const _0x4cf90e={'ZzDug':function(_0x4625a0,_0x30c86f){return _0x4625a0(_0x30c86f);}};_0x4cf90e[_0x2a6d9e(0x63d,0x1e2,0x966,0x170)](reply,lang[_0x2a6d9e(0x98c,0x4de,0x4e9,0x740)]());});}break;case _0x342471(0x4b0,0x616,0x5e4,0x485):sendKatalog('BY\x20ZEEONE\x20'+_0x342471(0x258,-0x191,0x34c,0x52f),_0x342471(0x55c,0x4c0,0x73d,0x9cb)+'00',_0x342471(0xbde,0xf06,0xcf5,0xbda));break;case _0x150c54(0x4eb,0xbf5,0xd0f,0xa18):case _0x150c54(0x453,0x640,0x5e4,0x63b):const _0x58f22b={};_0x58f22b[_0x150c54(0xc04,0xc24,0x782,0xc28)+'t']=_0x150c54(0x954,0x1106,0x7b8,0xc1a)+'t';const _0x51b341={};_0x51b341[_0x150c54(0xea9,0x637,0xac0,0x9d6)]='limit',_0x51b341['buttonText']=_0x58f22b,_0x51b341[_0x150c54(0x597,0x2f1,0x22d,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x51b341]);if(args[_0x342471(0x3ce,0x2e,0x35c,0x5b0)]<0x1cb6+-0x1*-0x61+-0x1d16)return reply(_0x150c54(0x87d,0x519,0xa12,0x8e3)+_0x150c54(0x564,0x29b,0x44c,0x770)+prefix+('play\x20query'+'*'));reply(lang['wait']());let yut=await yts(q);server=_0x342471(0x817,0x950,0x747,0x5ce),yta2(yut[_0x342471(0x1003,0xf26,0xc6f,0xb12)][0xc0a+-0x33a*0x2+-0x596]['url'],server)[_0x342471(0x8a0,0x439,0x58d,0xea)](async _0x30e15d=>{const _0x17eb41={'jfnwh':function(_0x548a35,_0x1c3ed9){return _0x548a35(_0x1c3ed9);},'kRhYT':_0x1cb6d6(0xb67,0x79c,0xc69,0x10f7),'rpECj':'RESPONSE','fGxKp':_0x1cb6d6(0xd85,0x1069,0xe98,0xfca),'qwbOb':function(_0x9a380,_0x379c0e,_0x47debd,_0x48e61b,_0x2232c7,_0xe0f242,_0x137ad8){return _0x9a380(_0x379c0e,_0x47debd,_0x48e61b,_0x2232c7,_0xe0f242,_0x137ad8);}},{thumb:_0x16d36c,title:_0x4c6927,filesizeF:_0x4da87f,filesize:_0x50bc2e}=_0x30e15d,_0x421c0f=_0x1cb6d6(0xab1,0xce1,0x9ae,0x8c5)+_0x1cb6d6(0x3e5,0x451,0x90b,0x55c)+_0x1cb6d6(0xa13,0x9b7,0x9eb,0xd9b)+'Title\x20:\x20'+_0x4c6927+('\x0a🚀\x20Upload\x20'+':\x20')+yut[_0x3a7fb8(0xab3,0x95b,0xa8b,0x5bb)][0x1db4*0x1+0xe*0xf+-0x1e86][_0x1cb6d6(0xfe3,0xebd,0xdf3,0xddf)]+_0x3a7fb8(0x369,0xc2,0x2be,-0x2bd)+_0x4da87f+_0x3a7fb8(0x1c3,0x2d3,-0x165,0x587)+yut[_0x1cb6d6(0xc47,0xd47,0xf1e,0xde6)][0xa65+0x157+0x2*-0x5de][_0x3a7fb8(-0x17d,0x23e,0x70,0xdf)]+(_0x1cb6d6(0x7ba,0x81e,0x670,0xb37)+'on\x20:\x20')+yut[_0x1cb6d6(0x1316,0xc63,0xf1e,0x11a2)][-0x24a+0x1*-0xbf9+0x3*0x4c1][_0x3a7fb8(0x384,0x197,-0xc4,-0x36c)]+'\x0a🌀\x20Url\x20:\x20'+yut[_0x1cb6d6(0x11a3,0x1288,0xf1e,0x12ca)][-0x1cef+0x367*0x1+0x1988][_0x3a7fb8(-0x3a7,0xa2,0x4e2,-0x2f7)]+(_0x1cb6d6(0xe22,0x133e,0xe24,0xfa6)+_0x3a7fb8(0x264,0x389,0x307,-0x168)+_0x1cb6d6(0x2e0,0x58f,0x5d8,0x6ca)+_0x3a7fb8(0x375,0x7ab,0x29f,0x585)+_0x1cb6d6(0xe70,0x13b4,0xe94,0xd34));let _0x2c74eb=await _0x17eb41[_0x1cb6d6(0xf61,0xb64,0xbf6,0x92e)](getBuffer,_0x16d36c);const _0x474a24={};_0x474a24[_0x1cb6d6(0x118e,0xd1e,0xe14,0x8ed)+'t']=_0x17eb41['kRhYT'];const _0x112d7b={};_0x112d7b['buttonId']='ytmp4\x20'+yut[_0x3a7fb8(0xb9f,0x95b,0xc02,0x4c9)][0xf9b+0xd18+-0x5d*0x4f][_0x1cb6d6(0x86e,0xa22,0x665,0x4fb)],_0x112d7b[_0x1cb6d6(0xd5b,0xad8,0xd84,0xb21)]=_0x474a24,_0x112d7b['type']=_0x17eb41[_0x3a7fb8(0xba,0x4a1,0x789,0x413)];const _0x22d199={};function _0x3a7fb8(_0x4b42cd,_0x1e3109,_0x41a098,_0x2ddc63){return _0x342471(_0x41a098,_0x1e3109-0x1d6,_0x1e3109- -0x314,_0x2ddc63-0x8f);}_0x22d199[_0x1cb6d6(0xadf,0xbee,0xe14,0xd9f)+'t']=_0x17eb41['fGxKp'];const _0x5b4af1={};function _0x1cb6d6(_0x19949d,_0x346de7,_0x443059,_0x5e305c){return _0x342471(_0x19949d,_0x346de7-0x6f,_0x443059-0x2af,_0x5e305c-0xc0);}_0x5b4af1[_0x1cb6d6(0x103a,0xa9a,0xbc2,0x1011)]=_0x1cb6d6(0x6d5,0x488,0x61c,0x7ff)+yut[_0x3a7fb8(0x44c,0x95b,0xd70,0x91f)][0x2536+-0x44*-0x91+-0x4bba][_0x3a7fb8(-0x290,0xa2,-0x114,-0xc4)],_0x5b4af1[_0x1cb6d6(0xe12,0xb57,0xd84,0x1107)]=_0x22d199,_0x5b4af1[_0x3a7fb8(0x448,0x5a,0x2fd,-0xad)]=_0x17eb41['rpECj'];let _0x297050=[_0x112d7b,_0x5b4af1];_0x17eb41['qwbOb'](sendButLocation,from,_0x421c0f,'©\x20'+ownername,_0x2c74eb,_0x297050,{});})[_0x150c54(0xb68,0x6cc,0x7da,0x9df)](_0x187d3f=>reply(_0x150c54(0x8d3,0x645,0xcb6,0x880)+_0x342471(0x73d,0x190,0x4fa,0x798)+_0x150c54(0xc69,0xb98,0xe77,0xaa2)+_0x150c54(0xa34,0x8d1,0x1f1,0x553)+'gi')),await limitAdd(sender,limit);break;case _0x150c54(0x3e,0x2b,0x3e6,0x3e8):case'fb':case _0x342471(0x16c,-0x7e,0x31e,0x203):const _0xb51ef={};_0xb51ef[_0x150c54(0x80d,0xf37,0x8f6,0xc28)+'t']=_0x342471(0x1080,0x720,0xb57,0x9e9)+'t';const _0x4421ea={};_0x4421ea[_0x342471(0x9b7,0x7b8,0x913,0x7be)]=_0x150c54(0xf44,0xb26,0xf4f,0xa6d),_0x4421ea['buttonText']=_0xb51ef,_0x4421ea[_0x342471(0x6f6,0x317,0x36e,0xb2)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xda2,0x8db,0xe76,0xa6d)](prefix),'©\x20'+ownername,[_0x4421ea]);if(!q)return reply(_0x150c54(0x731,0xb8b,0x320,0x6f2));if(!isUrl(args[-0x1b42+-0x1565+0x30a7*0x1])&&!args[0xb*-0x232+0x2*0xf31+-0x31e*0x2][_0x150c54(0xf02,0xd9e,0xa9e,0xd23)](_0x342471(0x42a,0x47b,0x953,0x5b4)+'om'))return reply(lang[_0x342471(0x9ce,0x860,0x74c,0x245)]());reply(lang['wait']());var fbte=args['join']('\x20');const API_GUEST=_0x150c54(0x97b,0x5fd,0x42e,0x522)+_0x150c54(0x442,0x8c9,0xec,0x4b7)+_0x342471(0x835,0x686,0x653,0x73d)+_0x150c54(0xa35,0x5ae,0x5b5,0x82e)+'te.json',API_TIMELINE=_0x342471(0x692,0x78a,0x45f,0x1fb)+'i.twitter.'+_0x342471(0x4,0x48c,0x4e5,0x1d0)+_0x342471(0x5fb,0x73a,0x819,0x64a)+_0x342471(0xc0d,0xc5b,0x77d,0x3af)+_0x150c54(0x358,0x864,0x370,0x466)+_0x150c54(0xabb,0x7f0,0x775,0xbff)+_0x342471(0xc0,0x34e,0x4bb,0x7de),AUTH=_0x150c54(0x766,0x399,0x6b0,0x5e0)+'AAAAAAAAAA'+_0x342471(0x7f8,0x6b8,0x618,0xa22)+_0x150c54(0xc9,0x614,0x1d1,0x422)+_0x342471(0x8e0,0x8e9,0x8c9,0x64a)+'uH5E6I8xnZ'+'z4puTs%3D1'+_0x150c54(0x894,0xfd9,0xb35,0xdcb)+_0x342471(0x3fd,0x699,0x2fa,0x3f0)+_0x150c54(0xf30,0x77d,0xa48,0xc06)+_0x342471(0x1093,0x979,0xbdf,0x9dd)+'A',UserAgent=()=>{const _0x574b10={};_0x574b10[_0x39756e(0x6a2,0xf28,0xbac,0xa09)]=_0x2372db(0x33c,0x17e,0x10a,0x632)+'0\x20(Macinto'+_0x39756e(0x612,0x5a6,0x665,0x998)+_0x39756e(0x983,0x83f,0x3c7,0x457)+'0_11_6)\x20Ap'+'pleWebKit/'+_0x39756e(0x66c,0x411,0x472,0x7d2)+_0x2372db(0x635,0x103,0x4fd,0xb5e)+_0x2372db(0x954,0x9f0,0x4e0,0xb94)+_0x39756e(0x64d,0x1d3,0x66e,0x439)+_0x2372db(0x949,0x52b,0x60d,0xdbb)+'/605.1.15',_0x574b10['aqFwh']=_0x39756e(0x620,0x53c,0xa99,0x7a8)+_0x2372db(0x191,0x4fd,0x5,0x440)+'sh;\x20Intel\x20'+'Mac\x20OS\x20X\x201'+_0x39756e(0xe2e,0x8c2,0xbc3,0x9a8)+_0x2372db(0x926,0x7fe,0xcfe,0xa19)+_0x2372db(0x811,0x59a,0x84c,0x50d)+_0x2372db(0x5d2,0x4ae,0x9e,0x8d8)+_0x2372db(0x546,0x38e,0x5e5,0x318)+_0x39756e(0x961,0xcc7,0xdc0,0x9e9)+_0x39756e(0x2ca,0x207,0x366,0x4e1)+_0x39756e(0x65b,0x6bc,0x3e8,0x54f),_0x574b10[_0x2372db(0x4f4,0x2bf,0x668,0xd5)]=_0x2372db(0x33c,-0x37,0x7b3,-0xea)+_0x39756e(0x29c,0x8bb,0xb6f,0x711)+'\x20NT\x2010.0;\x20'+_0x39756e(0xb25,0x8f4,0x5db,0x8c1)+_0x2372db(0x5cb,0x2e3,0x4f7,0x968)+'Kit/537.36'+'\x20(KHTML,\x20l'+_0x2372db(0x83f,0xad9,0xa1c,0x715)+_0x2372db(0x967,0x74a,0xcd9,0xc28)+_0x39756e(0xf00,0x997,0x99e,0xc80)+_0x2372db(0x23d,0x39a,-0x2c4,0x737)+_0x2372db(0x8ac,0x826,0x432,0xd79);function _0x39756e(_0x43017e,_0xc9352d,_0x529819,_0x32c899){return _0x150c54(_0x43017e-0x17a,_0x529819,_0x529819-0x1a9,_0x32c899- -0x29);}_0x574b10[_0x2372db(0x3cd,0x60a,-0xb8,0x51e)]=_0x39756e(0x91a,0x9c6,0x45f,0x7a8)+_0x2372db(0x4fc,0xe,0x142,0x2eb)+_0x39756e(0x6a1,0xcb5,0xd34,0x966)+'nux\x20x86_64'+_0x39756e(0xaec,0x70c,0xc35,0xa37)+_0x2372db(0x482,0x1dd,0x730,0x44a)+_0x39756e(0xed0,0x10a6,0x10e2,0xd1c)+'ike\x20Gecko)'+_0x2372db(0xa1,0x25e,0x149,0x2a6)+'.0.3325.18'+'1\x20Safari/5'+_0x2372db(0x8ac,0x983,0xb93,0xad3),_0x574b10[_0x39756e(0x72d,0x129,0x288,0x4c4)]=_0x2372db(0x33c,0x5e0,0x16e,0x1bc)+_0x39756e(0x46e,0x3f1,0x603,0x5fd)+_0x39756e(0x705,0xc65,0x93c,0x998)+_0x2372db(-0x15,-0x37,-0x512,-0x512)+_0x39756e(0x1161,0xb7b,0xc07,0xd75)+'leWebKit/5'+_0x39756e(0xa62,0x33f,0x9c5,0x582)+_0x2372db(0x635,0x29f,0x77a,0x86f)+'e\x20Gecko)\x20V'+_0x39756e(0x96d,0x6eb,0x505,0x947)+_0x39756e(0x411,0x9b9,0x6e6,0x874)+_0x2372db(0x4a,-0x1fa,0x379,-0x1cd),_0x574b10['IKrib']=_0x2372db(0x33c,0x5ee,0x376,-0x1f9)+'0\x20(Macinto'+_0x2372db(0x52c,0x20c,0x2fa,0x759)+_0x39756e(0x45c,0x114,0xef,0x457)+_0x39756e(0x7c3,0x89d,0x73b,0x3e0)+_0x39756e(0x83e,0xcfa,0x7b7,0xaaf)+_0x2372db(0x60c,0x602,0x89c,0x7b7)+_0x39756e(0xec8,0x105e,0x1046,0xb36)+'.0',_0x574b10[_0x39756e(-0xd0,0x49d,0x44c,0x434)]=_0x39756e(0x43b,0xa44,0x3a4,0x7a8)+_0x39756e(0x79c,0x91d,0x30b,0x711)+_0x39756e(0xb5c,0xa29,0xe92,0xc35)+'Win64;\x20x64'+_0x39756e(0x758,0x83f,0xf4d,0xa37)+_0x2372db(0x482,0x173,0x2a3,0x5f6)+_0x2372db(0x8b0,0x3df,0xc1c,0x9a5)+'ike\x20Gecko)'+'\x20Chrome/90'+_0x39756e(0x8ce,0xa11,0x7c0,0x7f3)+_0x2372db(0xc0,0x2be,-0x2c4,0x4f)+'7.36',_0x574b10[_0x2372db(0x413,0x23a,0x61c,-0x1f)]=_0x2372db(0x33c,0x7e8,0x7ea,0x6d6)+_0x39756e(0x20c,0xbda,0x85a,0x711)+_0x39756e(0x10e9,0x85d,0xfae,0xc35)+'Win64;\x20x64'+_0x39756e(0xcc1,0x893,0x681,0xa37)+'Kit/537.36'+_0x2372db(0x8b0,0x5a4,0x61d,0xcd0)+'ike\x20Gecko)'+_0x39756e(0xe4c,0xc25,0xd12,0xa5f)+_0x2372db(0x1dc,0x2b6,0x20d,0x27e)+'6\x20Safari/5'+_0x2372db(0x5db,0x6e3,0x300,0xea)+_0x2372db(0x23e,0x6a9,-0x26,-0x1e7),_0x574b10[_0x39756e(0x6ff,0xadb,0x565,0x6bd)]='Mozilla/5.'+_0x39756e(0x881,0x856,0x67d,0x66a)+_0x2372db(-0x6a,0x48e,0x67,-0x6c)+_0x2372db(-0x4,-0x1b,-0x436,0x4a1)+_0x39756e(0x51a,0xae7,0x63a,0x651)+_0x2372db(0x187,0x35e,-0x12d,0x4fb)+'fox/45.0',_0x574b10[_0x2372db(0x23c,0x36d,-0x1fd,-0x1ff)]=_0x2372db(0x33c,0x397,0x7e,0x517)+_0x2372db(0x1ef,-0x113,0xa0,0x581)+_0x2372db(0x662,0xaad,0x6d0,0x84d)+_0x2372db(0x571,0x9a8,0xa2f,0xa4)+'rv:47.0)\x20G'+_0x39756e(0x81e,0x51c,0x5c1,0x952)+_0x2372db(0x952,0x7bf,0x7a4,0x655)+_0x39756e(0x78b,0x7c9,0x8f5,0x3ca),_0x574b10[_0x2372db(0x6e5,0xaf2,0x276,0xa48)]=_0x2372db(0x33c,0x4fa,0x5ef,0x3de)+_0x2372db(0x1fe,-0x24c,-0x179,0x26f)+_0x2372db(-0x6a,0x18e,0x30a,-0x2fc)+')\x20AppleWeb'+_0x2372db(0x482,0x86e,0x96e,0x52b)+_0x39756e(0x7e8,0xb1d,0x1165,0xd1c)+_0x39756e(0xa2b,0x80d,0x82b,0xcab)+_0x39756e(0x9af,0x55d,0x378,0x6e0)+'.0.3865.12'+'0\x20Safari/5'+'37.36';function _0x2372db(_0x17e8b3,_0x127d27,_0xda984b,_0x4d8d53){return _0x150c54(_0x17e8b3-0x1a8,_0x4d8d53,_0xda984b-0xf8,_0x17e8b3- -0x495);}_0x574b10[_0x39756e(0xe1e,0xf25,0xac6,0xbd3)]=_0x39756e(0x819,0xa90,0x36a,0x7a8)+_0x2372db(0x2a5,0x795,0x7d0,0xe7)+'\x20NT\x2010.0;\x20'+_0x39756e(0xa83,0xbd6,0x5ea,0x8c1)+_0x2372db(0x5cb,0x6d1,0xa28,0x6a2)+_0x39756e(0xa8e,0x5f3,0xc57,0x8ee)+_0x2372db(0x8b0,0xb91,0x6a0,0x953)+_0x39756e(0x1190,0xd03,0xe71,0xcab)+'\x20Chrome/85'+'.0.4183.12'+_0x39756e(0xec5,0xe4e,0x1063,0xdc5)+_0x2372db(0x8ac,0x5a8,0x8bc,0x937),_0x574b10[_0x2372db(0x59f,0x561,0x4ea,0x69d)]='Mozilla/5.'+_0x2372db(0x1ef,0x44e,0x5de,0x33)+_0x2372db(0x662,0x314,0x291,0x68a)+_0x39756e(0x5e3,0x60b,0xdcd,0x9dd)+_0x39756e(0x320,0xb5f,0x34a,0x851)+_0x39756e(0x46d,0xc0d,0x9b2,0x952)+_0x2372db(0x952,0x875,0x45e,0xd30)+_0x2372db(0x1e,0x503,0x4cc,-0xbe),_0x574b10[_0x2372db(0x78d,0xbfb,0x510,0xa1a)]=_0x39756e(0x90b,0xc20,0x565,0x7a8)+_0x39756e(0x86c,0x217,0x8fb,0x5fd)+_0x2372db(0x52c,0x898,0x909,0x5e3)+_0x39756e(0x24e,0x477,0x37b,0x457)+_0x2372db(0x49,-0x4e8,0x8a,-0x27)+_0x39756e(0xc23,0x737,0xb68,0xb83)+'37.36\x20(KHT'+_0x39756e(0xa2f,0xa8b,0xbfd,0x8ad)+_0x2372db(0x3f4,0x19d,0x692,0x7ae)+_0x2372db(0x943,0xb1e,0xca5,0x9ef)+_0x39756e(0xff8,0x988,0x9df,0xc26)+'ri/537.36',_0x574b10[_0x2372db(0x628,0x532,0x218,0x610)]=_0x2372db(0x33c,0x669,-0xb7,0x3a5)+'0\x20(Macinto'+_0x2372db(0x52c,0x75c,0x620,0x8b5)+_0x39756e(0x623,0x8ce,0x722,0x457)+_0x39756e(0x80b,0x59b,0x85c,0x9a8)+_0x39756e(0xb91,0xe0e,0x8e7,0xd92)+'601.2.7\x20(K'+'HTML,\x20like'+_0x39756e(0xdab,0xb3f,0xafd,0x9b2)+_0x2372db(0x945,0xaea,0xe32,0x494)+_0x2372db(0xfe,0x2cb,0x16f,0x502)+_0x2372db(0x2dd,0x712,0x179,0x3e0),_0x574b10[_0x39756e(0x70b,0x850,0x82b,0x6fb)]=_0x39756e(0xba7,0x8e7,0x8ad,0x7a8)+_0x2372db(0x1fe,-0x270,0x562,-0x18f)+_0x2372db(-0x6a,-0x101,0x4c6,-0x52a)+_0x2372db(0x5cb,0x147,0x936,0x744)+_0x2372db(0x482,0x476,0x78b,0x165)+_0x39756e(0x8d3,0x8ec,0x8bd,0xd1c)+_0x2372db(0x83f,0x796,0xa19,0xa8b)+_0x2372db(0x967,0xd63,0xa70,0xaa4)+_0x39756e(0x8e8,0xbc,0x449,0x53c)+_0x39756e(0x3e8,0x252,0x821,0x52c)+'7.36',_0x574b10['hJwOg']=_0x2372db(0x33c,0x364,0x4e1,0x3e6)+_0x39756e(0x496,0x83d,0x1db,0x711)+_0x39756e(0xfb2,0xc42,0xbdd,0xc35)+_0x2372db(0x455,0x432,0x22a,0x1cd)+_0x2372db(0x5cb,0x601,0x4ee,0x921)+_0x39756e(0xd6d,0x53f,0x92b,0x8ee)+'\x20(KHTML,\x20l'+_0x2372db(0x83f,0x80a,0x4f8,0xcaa)+_0x2372db(0x72,0x568,0x474,0x1e)+_0x2372db(0x82,0xa2,0x4e9,0x269)+_0x2372db(0x65a,0x1c8,0x6f5,0x8bd)+'37.36',_0x574b10[_0x39756e(0xcab,0x8f8,0xf99,0xcfc)]='Mozilla/5.'+_0x2372db(0x1ef,-0x2ea,0x5b1,0x2c0)+_0x2372db(0x662,0x76d,0xa3d,0xb0a)+_0x2372db(0x571,0x203,0x698,0xa49)+_0x2372db(0x36e,0x5c9,0x500,0x51b)+'ecko/20100'+_0x2372db(0x952,0x64d,0x563,0xbac)+'x/88.0',_0x574b10[_0x2372db(0x1e0,-0x113,0x66e,-0x1bb)]=_0x39756e(0x3a8,0x373,0x4d9,0x7a8)+_0x2372db(0x1fe,0x239,0x1b9,0x21a)+_0x2372db(-0x6a,0x43e,-0x34d,-0xca)+_0x39756e(0x68b,0x7c8,0x5a0,0x6e6)+_0x39756e(0x36d,0x578,0xb0b,0x651)+_0x39756e(0x266,0x6d8,0x9b0,0x5f3)+_0x39756e(0xdec,0x955,0x1012,0xbee),_0x574b10[_0x2372db(0x47c,0x494,-0x5a,0x810)]=_0x39756e(0xcc5,0x7e5,0x5cb,0x7a8)+'0\x20(Macinto'+'sh;\x20Intel\x20'+'Mac\x20OS\x20X\x201'+_0x39756e(0xc35,0x44b,0xb76,0x91e)+_0x39756e(0xf84,0xcf7,0xe04,0xb83)+'37.36\x20(KHT'+'ML,\x20like\x20G'+_0x2372db(0x3f4,0x835,-0x61,0x4a0)+'me/36.0.19'+_0x2372db(0x622,0x47d,0x31b,0xae8)+_0x2372db(0x7de,0x418,0x7b0,0x668);const _0x4af0a0=_0x574b10,_0x32d8b0=[_0x4af0a0['OvfTn'],_0x4af0a0['aqFwh'],_0x4af0a0['PMteB'],_0x4af0a0[_0x39756e(0xb9a,0x6df,0xa79,0x839)],_0x2372db(0x33c,0x7a5,0x44c,0x674)+'0\x20(Windows'+'\x20NT\x2010.0;\x20'+_0x2372db(0x455,0x6c1,0x87c,0x8fc)+')\x20AppleWeb'+_0x2372db(0x482,0x6d7,0x457,0x896)+'\x20(KHTML,\x20l'+_0x39756e(0xab8,0xc1c,0xe3a,0xcab)+_0x39756e(0xd60,0xf5d,0x6d2,0xb0e)+_0x39756e(0x45e,0x5a9,0x3e4,0x840)+'\x20Safari/53'+_0x39756e(0x95f,0x4ff,0x535,0x879),_0x4af0a0[_0x2372db(0x58,0x467,0x35f,-0x225)],_0x4af0a0[_0x2372db(0x111,-0x13b,-0x25a,-0xda)],_0x4af0a0[_0x39756e(0x385,0x2ba,0x93c,0x434)],_0x4af0a0[_0x39756e(0x771,0xabd,0x5e1,0x87f)],_0x4af0a0[_0x39756e(0x6bc,0x496,0xb52,0x6bd)],_0x4af0a0[_0x2372db(0x23c,0x61c,-0x2b0,-0x2fb)],_0x4af0a0[_0x2372db(0x6e5,0x806,0x62d,0x523)],_0x4af0a0[_0x2372db(0x767,0x335,0xc0d,0x915)],_0x4af0a0[_0x39756e(0xc58,0x57b,0x9ea,0xa0b)],_0x4af0a0[_0x39756e(0xd18,0xde1,0x8ea,0xbf9)],_0x4af0a0[_0x39756e(0x5f3,0xe90,0xeb8,0xa94)],_0x4af0a0[_0x39756e(0x7f5,0x958,0xa9e,0x6fb)],_0x4af0a0[_0x39756e(0x66f,0x879,0xd95,0x950)],_0x39756e(0x9c8,0x933,0x530,0x7a8)+_0x2372db(0x2a5,0x2f0,0x1bd,0x401)+_0x2372db(0x7c9,0x373,0xccc,0x6f3)+'Win64;\x20x64'+')\x20AppleWeb'+_0x2372db(0x482,0x85,0x508,0x585)+_0x39756e(0xbc2,0xe5c,0xec9,0xd1c)+_0x2372db(0x83f,0x3a5,0x83a,0xcfb)+'\x20Chrome/92'+_0x39756e(0x8cd,0xc71,0x2d5,0x78c)+'7\x20Safari/5'+'37.36',_0x4af0a0[_0x2372db(0x890,0x422,0x42f,0x487)],_0x4af0a0[_0x39756e(0x7b6,0x180,0x46b,0x64c)],_0x39756e(0xcd3,0x6fc,0x503,0x7a8)+_0x2372db(0x191,0x134,-0x28,-0x1ac)+'sh;\x20Intel\x20'+_0x39756e(0x129,0x557,0x4bd,0x457)+_0x39756e(-0x7f,0x4e5,0x46,0x4b5)+'leWebKit/5'+_0x39756e(0xa4e,0xaf4,0x297,0x64e)+_0x2372db(0x441,0x389,-0xbe,-0x6a)+'ecko)\x20Chro'+_0x39756e(0x685,0x57c,0x2ed,0x51b)+_0x39756e(-0xb8,0x6d5,0x334,0x3f1)+_0x2372db(0x7de,0x4d2,0x543,0x940),'Mozilla/5.'+_0x39756e(0x3f2,0xa56,0x5e5,0x5fd)+_0x39756e(0x929,0x7eb,0x884,0x998)+_0x39756e(0x69,0xfa,0x1f2,0x457)+_0x2372db(0x6e3,0x716,0xb8a,0xa98)+'7.0)\x20Gecko'+_0x2372db(0x60c,0x95a,0xde,0x2ea)+_0x39756e(0xc35,0xb28,0x1199,0xcb1)+'.0',_0x4af0a0[_0x39756e(0xe8c,0xd2a,0xd04,0xa09)],_0x4af0a0['aqFwh'],_0x2372db(0x33c,-0x15b,-0x44,0x608)+_0x39756e(0x6c2,0x257,0x509,0x5fd)+_0x39756e(0x8f4,0xe1c,0xd7f,0x998)+_0x39756e(-0x42,0x29e,-0x45,0x457)+_0x2372db(0x5c9,0x49d,0xa95,0xb8)+_0x2372db(0x926,0xb81,0xddc,0x655)+_0x39756e(0xd5c,0x41c,0xc33,0x8c4)+_0x39756e(0xf0e,0x73a,0xb21,0xa3e)+_0x2372db(0x546,0x350,0x899,0x331)+_0x39756e(0x574,0x5cf,0x35c,0x50b)+_0x2372db(0x91e,0x581,0xb5b,0x3f0)+_0x2372db(0x605,0x19c,0x789,0x48c),_0x4af0a0['Fyknp']],_0x2b38de=_0x32d8b0[~~(Math[_0x39756e(0x7b8,0x663,0x97a,0x754)]()*_0x32d8b0[_0x39756e(0x3ef,0x41b,0x462,0x3f6)])];return _0x2b38de;},getID=_0xd738ed=>{let _0x1bde2e=/twitter\.com\/[^/]+\/status\/(\d+)/;function _0xa0c4db(_0x3000d7,_0xaf19e0,_0x1c8010,_0x28c661){return _0x342471(_0xaf19e0,_0xaf19e0-0x17e,_0x28c661- -0x85,_0x28c661-0xbc);}let _0x4756ff=_0x1bde2e[_0xa0c4db(0xc16,0x721,0xc78,0x8dc)](_0xd738ed);return _0x4756ff&&_0x4756ff[-0x7*-0x13a+-0x11f8+0x3*0x321];},getInfo=async function(_0xe14bd4){const _0x1102cd={'tbfhd':function(_0xc7b205,_0xa27b18){return _0xc7b205(_0xa27b18);},'oHhTX':function(_0x18d6ed,_0x453732){return _0x18d6ed(_0x453732);},'wixlw':function(_0x29651b,_0x43b079){return _0x29651b(_0x43b079);},'PAfrV':function(_0x2df2c6,_0xc67e24){return _0x2df2c6===_0xc67e24;},'aePRl':_0x44ded1(0x29c,0xb6,0x3c1,0x502),'jjcsR':_0x44ded1(0x109f,0xf38,0xbbb,0xd51),'pDxgz':function(_0x190327){return _0x190327();},'WJXPo':_0x44ded1(0x114d,0x920,0xc8c,0x76f)+'cts','kDNeb':_0x1993ad(0xaf4,0x95a,0x101f,0xb67)+_0x44ded1(0x6af,0xa2c,0x988,0x7c6),'CVIVW':_0x44ded1(0x94,0x72c,0x35b,0x72c),'SXkjB':_0x44ded1(0xcdd,0x7d6,0x974,0x5f6),'UWDHD':function(_0x251de1,_0x4264de){return _0x251de1===_0x4264de;},'xIkmw':_0x1993ad(0x82b,0x7b7,0x45f,0x470),'CqeBq':_0x44ded1(0x9f6,0x787,0x694,0x7c5),'BoPdh':_0x1993ad(0xaf0,0x7fa,0xdba,0xa5e),'rprJJ':function(_0xf6ffc2,_0x5abfb2){return _0xf6ffc2===_0x5abfb2;},'fUCJZ':_0x1993ad(0x2b8,0x870,0x5ee,0x632),'XIntR':_0x1993ad(0xda4,0x1037,0x7d9,0xc1a)+'if','xySLO':'full_text','CfAfm':'Not\x20a\x20Twit'+'ter\x20URL'};function _0x44ded1(_0xd131ac,_0x3184d7,_0x3fd679,_0x114e1f){return _0x150c54(_0xd131ac-0x1a2,_0x3184d7,_0x3fd679-0x100,_0x3fd679- -0x71);}function _0x1993ad(_0x30b4f8,_0x3bfe34,_0x16ee32,_0x40197c){return _0x342471(_0x3bfe34,_0x3bfe34-0x118,_0x40197c- -0x18,_0x40197c-0xe5);}const _0x562e7d=_0x1102cd['wixlw'](getID,_0xe14bd4);if(_0x562e7d){let _0x398878;try{if(_0x1102cd[_0x1993ad(0xc42,0xcae,0xccc,0xad5)](_0x1102cd[_0x44ded1(0xad6,0x1053,0xccd,0x1079)],_0x1102cd[_0x44ded1(0xfe,0x8af,0x45e,0x88a)]))_0x1102cd[_0x1993ad(0xd53,0xdc9,0x691,0xa4d)](_0x439315,_0x44ded1(0x387,0xbc0,0x868,0xa39)+'or');else{const _0xb2447b=await _0x1102cd[_0x44ded1(0xd24,0x699,0xad8,0xe62)](getToken);_0x398878=_0xb2447b[_0x1993ad(0x3d6,0x2d2,0x71e,0x797)+'n'];}}catch(_0x4bd7c2){if(_0x1102cd[_0x1993ad(0xa10,0xeb2,0x736,0xad5)](_0x44ded1(0xc2c,0x574,0x88b,0x3e8),_0x44ded1(0x438,0x9a4,0x88b,0x6e4)))throw new Error(_0x4bd7c2);else{const _0x5a5281={'XeRlk':function(_0x2e3932,_0x29e2cd){function _0x5ee0d3(_0x1b67b5,_0x4847a2,_0x21bd74,_0x5cb299){return _0x1993ad(_0x1b67b5-0xe0,_0x1b67b5,_0x21bd74-0x12b,_0x21bd74- -0x3d8);}return _0x1102cd[_0x5ee0d3(0x18d,0x3c3,0x1b7,0x515)](_0x2e3932,_0x29e2cd);}};_0x1102cd['oHhTX'](_0x2e330d,_0x4cb3da)['then'](_0x12f7e0=>{const _0x5ad5cd={};function _0xc71cd1(_0x3f0bd8,_0x43829a,_0x21ae0d,_0x6de8de){return _0x1993ad(_0x3f0bd8-0x179,_0x43829a,_0x21ae0d-0x18f,_0x3f0bd8- -0x28e);}function _0x1f5580(_0x59b0a3,_0x427b69,_0x53c0ce,_0x1f0420){return _0x44ded1(_0x59b0a3-0x3f,_0x427b69,_0x1f0420-0x152,_0x1f0420-0x10f);}_0x5ad5cd[_0xc71cd1(0x6a2,0x9f6,0x9a1,0x3c8)]=0xc8,_0x5ad5cd[_0xc71cd1(0x5f6,0x8e1,0x554,0x166)]=_0x12f7e0[-0xa3c+0x49e*-0x1+-0xeda*-0x1]['link'],_0x5a5281[_0x1f5580(0x529,0x2de,0x705,0x63e)](_0x328c7e,_0x5ad5cd);})['catch'](_0x386863);}}const _0x4a9214={};_0x4a9214[_0x1993ad(0xf16,0x90e,0x115a,0xd11)+'ken']=_0x398878,_0x4a9214[_0x1993ad(0x9e4,0x927,0x98,0x55b)+_0x1993ad(0x8b0,0x5a5,0x6a5,0x5ac)]=AUTH;const _0x2f1c49={};_0x2f1c49['headers']=_0x4a9214;const _0x18d26=await axios[_0x1993ad(0xbee,0xbcd,0x6a7,0xacd)](Util[_0x1993ad(0x738,0x9c1,0xb7c,0x813)](API_TIMELINE,_0x562e7d),_0x2f1c49);if(!_0x18d26[_0x1993ad(0xb03,0x5bc,0xabb,0xa15)][_0x1102cd[_0x1993ad(0xc8e,0xc4f,0x3f5,0x8bc)]][_0x1993ad(0x901,0x699,0xcc0,0x90a)][_0x562e7d][_0x1102cd[_0x44ded1(0x161,0x902,0x563,0x92)]])throw new Error(_0x1102cd[_0x44ded1(0xc6d,0x7ad,0x7f2,0xbfc)]);const _0x3091c2=_0x18d26[_0x44ded1(0xa80,0xc63,0xa7f,0xe3c)][_0x44ded1(0x82c,0x1091,0xc8c,0xcc5)+'cts'][_0x1102cd[_0x44ded1(0x4f4,0xbbe,0x773,0x75f)]][_0x562e7d][_0x1102cd[_0x1993ad(0x6bc,0x953,0x87f,0x4f9)]][_0x1993ad(0x6ba,0xf2,0x2f4,0x4fe)];if(_0x1102cd[_0x44ded1(0x801,0x68f,0x601,0x5b2)](_0x3091c2[-0x1855+-0x2572*-0x1+-0xd1d]['type'],_0x1102cd[_0x1993ad(0xff5,0xfc6,0xfb8,0xbd5)]))return{'type':_0x3091c2[0x9*-0xbb+0xeac+0x2b3*-0x3][_0x44ded1(0x4c7,0x7e1,0x3c0,0x655)],'full_text':_0x18d26['data'][_0x1102cd['WJXPo']][_0x1102cd[_0x1993ad(0x6a4,0xa7d,0x602,0x709)]][_0x562e7d][_0x44ded1(0xd48,0x8f1,0x842,0x54b)],'variants':_0x3091c2[-0x1*0x49f+0x1d63+0x2*-0xc62][_0x1102cd['CqeBq']][_0x1102cd[_0x44ded1(0x7d4,0x729,0xa7d,0xb54)]]};if(_0x1102cd['rprJJ'](_0x3091c2[0x3d*-0x33+0xc8*0xf+-0x6f*-0x1]['type'],_0x1102cd['fUCJZ']))return{'type':_0x3091c2[0xe9*-0x25+0x88*-0x20+-0x32ad*-0x1][_0x1993ad(0x6a5,0x30,-0x19f,0x356)],'full_text':_0x18d26[_0x44ded1(0x80b,0xb4e,0xa7f,0xadf)][_0x1102cd[_0x1993ad(0x83a,0xc11,0x9ca,0x8bc)]][_0x1102cd[_0x44ded1(0xa9a,0x947,0x773,0xc5d)]][_0x562e7d][_0x44ded1(0x81b,0x6a3,0x842,0x572)],'variants':_0x3091c2['map'](_0x47a847=>_0x47a847[_0x44ded1(0x580,0xa9b,0xa40,0x71b)+'https'])};if(_0x3091c2[0x1e5b+-0x3ab*0x9+-0x11*-0x28]['type']===_0x1102cd[_0x44ded1(0x64c,0x6a7,0x5d7,0x84c)])return{'type':_0x3091c2[-0x2*0x216+-0x1*-0x1fcf+-0x1ba3][_0x44ded1(-0x34,0x79b,0x3c0,0x331)],'full_text':_0x18d26[_0x1993ad(0xb4d,0x9f3,0xcd1,0xa15)]['globalObje'+_0x44ded1(0x551,0x8f9,0x741,0x2bf)][_0x1102cd[_0x1993ad(0x7d6,0xb63,0x43e,0x709)]][_0x562e7d][_0x1102cd['xySLO']],'variants':_0x3091c2[0xfd1+0x21*-0x79+-0x38][_0x44ded1(0x186,0x336,0x694,0x651)][_0x1102cd[_0x1993ad(0x665,0x6a4,0x583,0xa13)]]};}else throw new Error(_0x1102cd['CfAfm']);};async function getToken(){const _0x209c0b={'gnoxs':'SELECT\x20HER'+'E','Teyby':'SINGLE_SEL'+_0x4990a7(0xc37,0xbcd,0xa05,0xf17),'NiiQw':_0x4990a7(0x91b,0xd3e,0xde3,0x811)+'ot','UbJoT':'🤖\x20〉ɞ\x20All\x20m'+_0x557c87(0x872,0x587,0x4be,0x935),'cVxnj':_0x4990a7(0xc9f,0x7cd,0xbcc,0xd98)+_0x4990a7(0x2b1,0x183,-0xe4,-0x104),'MAiXF':_0x557c87(0x9da,0x9f5,0xac5,0xf13),'dlqZY':_0x557c87(0x4de,0x91a,0x8c0,0x7e3)+_0x4990a7(0x931,0x826,0x4f4,0xb5b),'clgNL':_0x4990a7(0x5f2,0x719,0x92c,0x6e1)+_0x4990a7(0x2f7,0x1a9,0x74c,-0xb7),'lYsjg':'_Menampilk'+_0x4990a7(0x805,0x58e,0x53c,0x790)+_0x557c87(0xcb0,0x958,0xc80,0x993),'NasEC':_0x4990a7(0xa31,0x519,0xbea,0x7fb)+'d','hdUIv':'Sub\x20Menu\x20k'+'e-2','gBcTH':'_Menanmpil'+_0x4990a7(0x785,0xa92,0xb3e,0x50f)+'group_','VkWJF':_0x4990a7(0x29a,-0x4d,-0x23a,-0xca),'WaJuy':_0x557c87(0xbab,0x630,0x8c0,0x3ac)+_0x4990a7(0x6b8,0x2ed,0x7e1,0xa78),'gqCyD':'🚼\x20〉ɞ\x20Conve'+_0x557c87(0xcac,0xa40,0x93b,0x541),'bumsg':'Sub\x20Menu\x20k'+_0x4990a7(0x47b,0x639,0x66f,0xae),'EUmhx':_0x4990a7(0x82f,0x64b,0x6c8,0x7e2)+_0x557c87(0x71d,0xaf9,0x71c,0x58f)+'\x20dengan\x20bo'+'t_','tgyxP':_0x557c87(0x61d,0x419,0x5d2,0x1a7),'ZmmJd':'Sub\x20Menu\x20k'+'e-5','QIBXb':_0x4990a7(0x341,0x766,0x83d,0x13a)+_0x4990a7(0x56f,0xa79,0x638,0xa2d),'tEgXF':'_Untuk\x20mem'+_0x4990a7(0x97d,0xc3b,0xde7,0x5d8)+_0x4990a7(0x6e3,0x41c,0x30a,0x384)+_0x557c87(0xb1b,0xb3f,0x6bd,0x69b),'ztDZY':_0x4990a7(0xc20,0x10f5,0xf3e,0x1034),'khvxH':_0x557c87(0x88a,0xb61,0x8c0,0x394)+'e-6','GQPVo':_0x557c87(0xcae,0xda9,0xa49,0xac7)+_0x557c87(0xbae,0x1d9,0x6a3,0x2ba),'zyOXA':_0x4990a7(0x325,-0x16a,0x64e,0x6e1)+_0x4990a7(0x661,0x77f,0x34a,0x744)+_0x557c87(0xf6e,0x9b8,0xdc8,0x11c2)+'ketahui_','zoRMj':'othercmd','JvskM':_0x4990a7(0x5b6,0x8c0,0x536,0x452)+'sus\x20owner\x20'+'bot_','vXQJL':'Sub\x20Menu\x20k'+_0x557c87(0xb47,0xa94,0xb3f,0xa9b),'ZfgkP':_0x557c87(0x607,0x3b7,0x51b,0x744)+_0x4990a7(0x7ef,0x5fa,0x505,0xabd),'ODRUP':_0x4990a7(0xaf1,0xc1c,0x8f6,0xa32)+_0x4990a7(0xb5e,0x917,0xe33,0xe78)+_0x557c87(0xd20,0xcc6,0xa33,0x68d)+_0x557c87(0xccb,0xe86,0xcb6,0x9c8),'iFanm':_0x4990a7(0x508,0x9b2,0x9e2,0x406),'yPQCW':_0x4990a7(0xaf1,0xc97,0xf27,0x886)+'andai\x20memb'+'er\x20dalam\x20g'+_0x4990a7(0xad9,0xaee,0x657,0x786),'RLVzk':_0x557c87(0x868,0x775,0xa1d,0xbac),'hsjzW':_0x557c87(0x566,0x63b,0x6c7,0xafd)+'nu','EDHGr':_0x4990a7(0x2ef,0x633,0x40f,-0x1bd)+_0x557c87(0x783,0xd80,0x9ba,0x543)+_0x557c87(0xc30,0x7e7,0xa3d,0xa95)+_0x4990a7(0x76b,0x717,0x8ef,0x438),'NQhBI':_0x557c87(0xa37,0x11ff,0xdc7,0xecf),'WfOBs':_0x557c87(0xcd0,0x49f,0x8c0,0xc8a)+'e-11','WeRPW':_0x4990a7(0x709,0x391,0x445,0xc1f)+_0x557c87(0x717,0x67d,0x92a,0x48d),'kqUpJ':_0x557c87(0xc94,0xc1f,0xc47,0xef5)+_0x557c87(0x5c2,0xa8f,0x658,0x6b1)+'e\x20secao\x20ra'+_0x4990a7(0x957,0x8d9,0x6e8,0x6b2),'jRRJH':_0x4990a7(0x78c,0x2d8,0xb5f,0xbcd)+'e-12','YGLKQ':_0x557c87(0x1a9,0x373,0x3c5,0x1e7)+_0x4990a7(0x7ed,0x3d7,0xc73,0x86a)+'r','dGGwX':'_Sticker\x20t'+_0x557c87(0x2e,0x4c7,0x398,-0x17)+_0x4990a7(0x957,0xd62,0x873,0x7aa),'fOFJw':'telegramcm'+'d','TKvzI':'Sub\x20Menu\x20k'+'e-13','ySlEL':'_Gambar\x20ka'+_0x557c87(0xbdc,0x33b,0x6af,0x65a)+'mengandung'+_0x557c87(0x5d7,0x944,0x5cc,0x810)+'_','HsYvd':_0x557c87(0xa87,0x8ff,0xb7b,0xa4b),'tWqZP':_0x557c87(0x74a,0x22e,0x506,0x5fc)+_0x557c87(0xc12,0xe02,0xa7c,0xb31),'gfwuO':'asupancmd','QqSpc':_0x4990a7(0x78c,0x5d5,0x924,0x84d)+'e-15','uifwd':'📸\x20〉ɞ\x20Image'+_0x4990a7(0x5ca,0x7a6,0x259,0x675),'xZCQG':_0x4990a7(0x70f,0x38b,0x1fe,0x246)+'tcmd','ojcpl':_0x557c87(0x694,0x78e,0x8c0,0xa8e)+_0x4990a7(0x4af,0x4e2,0x989,0x540),'WNNlI':_0x557c87(0x419,0x3d6,0x422,0x3af)+_0x4990a7(0xc6a,0x1075,0xde7,0xf88),'WtbgD':_0x4990a7(0xca7,0x119c,0x10bc,0xa0a)+'wo\x20random_','SuSjU':_0x557c87(0x78f,0x156,0x4f2,0x799),'XIkUv':_0x557c87(0x699,0x52c,0x8c0,0x489)+_0x4990a7(0x5ae,0xb2,0x94e,0x585),'SYrmj':'🗯️\x20〉ɞ\x20Quote'+_0x4990a7(0x4c2,0x72e,0x984,0x5f7),'OeFrU':_0x557c87(0xeef,0x9bc,0xd7f,0xca6)+_0x557c87(0x6da,0x673,0x72b,0x954)+'&\x20menyesat'+'kan_','VjQpo':'quotescmd','SUDAN':_0x4990a7(0x78c,0x99b,0x3a2,0x3d6)+_0x557c87(0x58c,0x798,0x3bb,-0x14d),'Xsktf':_0x557c87(0xa5f,0x9dc,0x741,0xa44)+'mbar\x20wibu_','uUzEe':_0x4990a7(0xbcf,0x1097,0xe29,0xe2b),'CLlbG':_0x557c87(0x4a,0x1ff,0x3ab,0x192)+_0x4990a7(0x8e6,0xddb,0x854,0xb86),'hRhYw':_0x4990a7(0x251,0x6dd,0x4ca,0x629)+_0x557c87(-0x85,0x649,0x3ae,0x77d)+'me_','NNuot':'🗯️\x20〉ɞ\x20Photo'+_0x557c87(0x844,0x801,0xcf9,0xcd4),'VBhRX':_0x4990a7(0x251,0x526,-0xba,0x37b)+_0x4990a7(0x4ea,0x7b3,0x6d6,0x229)+'.com_','qBqkh':_0x4990a7(0x78c,0x699,0x757,0xb52)+_0x4990a7(0xb91,0xf9a,0xac6,0xf4e),'DBdaL':'💽\x20〉ɞ\x20Sound'+'\x20Menu','NbkTb':_0x4990a7(0x78c,0xbce,0xa43,0xbb3)+_0x557c87(0xa21,0x293,0x631,0xa27),'lLbwW':_0x4990a7(0x266,0x29a,-0xaa,-0x13b)+'..._','jqFmN':_0x4990a7(0xb94,0xeb5,0xc0a,0x105e),'WZmMM':_0x4990a7(0x78c,0x97e,0xc78,0x707)+_0x557c87(0x6b7,0x7da,0x89c,0x42a),'GoPrg':_0x557c87(0xa63,0x852,0xa41,0x892)+_0x557c87(0x739,0x5c4,0x43d,0x78b),'AeNIq':'_Ramalan\x20m'+'asa\x20depan_','GZEbj':_0x4990a7(0x403,0x7fb,0x791,0x39b),'YOwgZ':_0x4990a7(0x78c,0x632,0x825,0x966)+_0x557c87(0x66a,0xa9a,0x6c6,0x710),'HAcsb':_0x557c87(0x9c5,0x572,0x759,0x974)+'ic\x20Menu','qXlQR':_0x557c87(0x73f,0x6a9,0x8c0,0x3d7)+'e-25','cXEgL':_0x557c87(0xfe6,0xadb,0xdbd,0x127a)+'ogo\x20keren\x20'+_0x4990a7(0x60e,0x419,0x703,0x836)+_0x557c87(0xb7c,0x58c,0x775,0x625)+_0x557c87(0x8ff,0x735,0x761,0x7dc),'hRbsb':'ephoto360c'+'md','sMSOP':_0x557c87(0x8c5,0xb39,0xdbd,0xbc5)+_0x557c87(0xba8,0x9d5,0x78e,0x8b6)+_0x557c87(0xdeb,0x6ea,0xa5a,0x864),'UrQdw':_0x557c87(0x9dd,0xf98,0xd37,0xdae)+_0x557c87(0x899,0x5c0,0x9f7,0x653),'iSEDj':_0x4990a7(0x75d,0x67a,0xa9a,0x246)+_0x4990a7(0xaf9,0xcd2,0xaff,0xc5b),'BAacy':_0x4990a7(0x4c6,0x568,0x949,0x521)+'on','TURum':_0x557c87(0xb27,0x6c8,0xb32,0xcfc)+'hanks\x20To','hYzmy':'_Orang²\x20ya'+'ng\x20pernah\x20'+'berkontrib'+_0x557c87(0x707,0xfe2,0xb5e,0x9eb)+'bot\x20ini_','pZSUf':function(_0x10f491,_0xcf2e79){return _0x10f491(_0xcf2e79);},'QFhgo':function(_0x56a8fa,_0x290ff6){return _0x56a8fa===_0x290ff6;},'tGKxm':_0x557c87(0x857,0x579,0x90e,0x8d0),'gxLCb':_0x557c87(0x9f3,0xa03,0xd99,0x1101),'kGJDu':function(_0x364836,_0x4be7dd){return _0x364836!==_0x4be7dd;},'xZKkO':_0x557c87(0xad3,0x956,0x68d,0xa7f),'DrQus':_0x557c87(0x10c3,0xf3f,0xdd1,0x1093),'tXUcs':_0x4990a7(0x5ec,0x53e,0x36c,0x203)};function _0x557c87(_0x43d5a9,_0x398344,_0x2713a3,_0x34f330){return _0x342471(_0x34f330,_0x398344-0x9f,_0x2713a3-0x9b,_0x34f330-0xca);}function _0x4990a7(_0x225e83,_0x494d80,_0x556ae2,_0x476c1e){return _0x342471(_0x476c1e,_0x494d80-0xf8,_0x225e83- -0x99,_0x476c1e-0x1d0);}try{if(_0x209c0b['QFhgo'](_0x209c0b[_0x557c87(0x945,0x904,0x53a,0x811)],_0x209c0b[_0x4990a7(0xa0c,0x4f2,0x615,0xbfd)])){const _0x119286={};_0x119286[_0x4990a7(0xa4f,0x643,0xc29,0xd06)+'id']=[_0x51ea4e];const _0x3d48b8={};_0x3d48b8[_0x4990a7(0x361,0x257,-0x133,0x2c1)]=_0x133010,_0x3d48b8[_0x4990a7(0x8a9,0x55d,0xb0c,0xa84)+'o']=_0x119286;let _0x2fffce=_0x20f4b5[_0x4990a7(0x979,0xa6a,0x588,0xe16)+_0x4990a7(0x551,0x373,0x431,0x47a)+'ntent'](_0x3bf082,{'listMessage':{'title':_0x557c87(0x5ae,0x513,0x6e4,0x581)+'BOT','description':_0x4990a7(0x319,0x76b,0x2bb,0x39b)+_0x1b253a[_0x557c87(0x1087,0x1025,0xb7d,0xf05)]('@')[0x23*-0x97+-0x19*0x133+0x32a0]+(_0x4990a7(0x936,0xa11,0xbe9,0xbb8)+_0x4990a7(0x492,0x560,0x840,0x210)+_0x4990a7(0xb9e,0x109f,0xa35,0xdf3)+_0x4990a7(0xac8,0xaab,0x72b,0xb91)+_0x557c87(0xccf,0x58f,0xac4,0x74f)+_0x4990a7(0x49c,0x736,0x42e,0x8ce)+_0x4990a7(0x2ec,0x4fc,0x303,-0x1f2)+_0x557c87(0xbdc,0x7f4,0x97e,0xb80)+'spam'),'buttonText':_0x209c0b[_0x4990a7(0xb2b,0x6f3,0xbca,0x81e)],'footerText':'©\x20'+_0x154d56,'listType':_0x209c0b[_0x4990a7(0x9f2,0x739,0x667,0xa8d)],'sections':[{'title':_0x209c0b[_0x4990a7(0xaac,0xa05,0xc77,0x9c6)],'rows':[{'title':_0x209c0b['UbJoT'],'description':_0x209c0b['cVxnj'],'rowId':_0x209c0b[_0x4990a7(0x891,0x541,0x892,0xcb5)]}]},{'title':_0x209c0b[_0x4990a7(0x5cc,0x623,0x288,0x1fc)],'rows':[{'title':_0x209c0b[_0x557c87(0x439,0x3fd,0x4cc,0x9b)],'description':_0x209c0b[_0x557c87(0xb1a,0x503,0x8c1,0x56f)],'rowId':_0x209c0b[_0x4990a7(0xb7a,0x8ff,0xb2e,0xb71)]}]},{'title':_0x209c0b[_0x4990a7(0x381,0x43c,0x47b,0x466)],'rows':[{'title':_0x557c87(0xcb5,0xd5a,0x973,0x973)+_0x557c87(0x790,0x8b8,0x6a3,0x4dc),'description':_0x209c0b[_0x557c87(0xc0c,0x3e1,0x866,0x635)],'rowId':_0x209c0b[_0x557c87(0xf00,0x7a8,0xa4d,0x5eb)]}]},{'title':_0x209c0b[_0x4990a7(0xa86,0x78b,0x759,0xbdd)],'rows':[{'title':_0x209c0b[_0x4990a7(0x405,0x488,0x65c,0x1ff)],'description':_0x4990a7(0x855,0xcd7,0x602,0xc60)+_0x4990a7(0xbcb,0xee5,0x10fa,0x1080)+_0x557c87(0x8a2,0x721,0x3e8,0xf9),'rowId':_0x557c87(0xd65,0x1072,0xc0c,0xef0)}]},{'title':_0x209c0b[_0x557c87(-0xa8,0x8bd,0x472,-0x23)],'rows':[{'title':_0x4990a7(0x7d5,0xc1d,0xb87,0x4a6)+_0x557c87(0x6cd,0x9c8,0xa68,0x9c7),'description':_0x209c0b[_0x557c87(0x899,0x5f9,0x879,0x60a)],'rowId':_0x209c0b[_0x4990a7(0x7b2,0x39b,0x932,0x9ba)]}]},{'title':_0x209c0b['ZmmJd'],'rows':[{'title':_0x209c0b['QIBXb'],'description':_0x209c0b['tEgXF'],'rowId':_0x209c0b[_0x4990a7(0x9e0,0xe65,0x60d,0x751)]}]},{'title':_0x209c0b[_0x557c87(0x5f9,0xd1e,0x950,0x90f)],'rows':[{'title':_0x209c0b[_0x4990a7(0xb5c,0x790,0xca5,0x7ab)],'description':_0x209c0b[_0x557c87(0xd44,0x7c2,0xa15,0xc2e)],'rowId':_0x209c0b[_0x557c87(0x7ff,0x8d6,0x52a,0x7b0)]}]},{'title':_0x4990a7(0x78c,0x6c7,0x66e,0x6ea)+_0x557c87(0x81e,0x9da,0xb76,0xea4),'rows':[{'title':'👤\x20〉ɞ\x20Owner'+_0x557c87(0x9cc,0x1ee,0x6a3,0x875),'description':_0x209c0b['JvskM'],'rowId':_0x557c87(0x2c2,0xb38,0x746,0x8ed)}]},{'title':_0x209c0b['vXQJL'],'rows':[{'title':_0x209c0b['ZfgkP'],'description':_0x209c0b[_0x4990a7(0x43b,0x2ee,0x3ca,0x551)],'rowId':_0x209c0b[_0x557c87(0x9e3,0x970,0x8f4,0xdac)]}]},{'title':_0x4990a7(0x78c,0xbef,0x88c,0x397)+_0x4990a7(0xcac,0xf54,0xb23,0x80d),'rows':[{'title':'🔖\x20〉ɞ\x20Tag\x20M'+_0x557c87(0x663,0x7f2,0xa68,0x811),'description':_0x209c0b[_0x4990a7(0x89c,0xabe,0x7f1,0x9d9)],'rowId':_0x209c0b[_0x557c87(0xaa5,0x809,0xb5d,0xa1a)]}]},{'title':_0x4990a7(0x78c,0x360,0x4dc,0x9a6)+_0x4990a7(0x8de,0x58c,0x427,0x6ca),'rows':[{'title':_0x209c0b[_0x4990a7(0x37e,0x2c3,0x5d6,0x87e)],'description':_0x209c0b[_0x557c87(0x715,0x7c1,0x737,0x9cf)],'rowId':_0x209c0b['NQhBI']}]},{'title':_0x209c0b['WfOBs'],'rows':[{'title':_0x209c0b['WeRPW'],'description':_0x209c0b[_0x4990a7(0x2af,-0x28,0x5fc,0x22d)],'rowId':_0x4990a7(0x499,0x137,0x941,0x5ad)}]},{'title':_0x209c0b[_0x557c87(0x680,0xa9d,0x98f,0x8ff)],'rows':[{'title':_0x209c0b[_0x4990a7(0x7fe,0xa8f,0x300,0x974)],'description':_0x209c0b['dGGwX'],'rowId':_0x209c0b[_0x557c87(0xad2,0xf6e,0xccb,0xe47)]}]},{'title':_0x209c0b['TKvzI'],'rows':[{'title':_0x4990a7(0x6d4,0xb00,0xbdc,0x955)+_0x557c87(0x256,0x339,0x430,0x749),'description':_0x209c0b[_0x4990a7(0xb51,0xa2a,0x81a,0xe7e)],'rowId':_0x209c0b[_0x4990a7(0x8ac,0x743,0xc59,0x671)]}]},{'title':_0x557c87(0xcb4,0xd7f,0x8c0,0xaa6)+_0x557c87(0xc6b,0xd6d,0x9f5,0xe01),'rows':[{'title':_0x209c0b[_0x4990a7(0x6c6,0xb98,0x6a3,0x429)],'description':_0x557c87(0x8b8,0x791,0x966,0xb9c)+_0x557c87(0xa49,0x651,0x9f1,0xc89)+_0x4990a7(0xbb3,0xc2d,0x9f3,0x824),'rowId':_0x209c0b[_0x557c87(0x7df,0x280,0x49a,0x4dd)]}]},{'title':_0x209c0b[_0x557c87(0x860,0x698,0x9c7,0xd95)],'rows':[{'title':_0x209c0b['uifwd'],'description':_0x4990a7(0x6f9,0x5f1,0x609,0xa78)+'oto\x20menjad'+_0x4990a7(0x562,0x490,0x909,0x8e3)+_0x557c87(0x6a4,0x37d,0x6b8,0x2d3)+_0x4990a7(0xb87,0xde5,0xc11,0x768)+'_','rowId':_0x209c0b[_0x4990a7(0x392,0x638,0x3e3,0x102)]}]},{'title':_0x209c0b['ojcpl'],'rows':[{'title':_0x209c0b[_0x557c87(0xa7a,0xb12,0x739,0x56c)],'description':_0x209c0b['WtbgD'],'rowId':_0x209c0b[_0x4990a7(0x968,0xdb5,0xb22,0x88d)]}]},{'title':_0x209c0b['XIkUv'],'rows':[{'title':_0x209c0b[_0x4990a7(0x7c4,0x890,0xad4,0x3bf)],'description':_0x209c0b[_0x4990a7(0xb39,0x959,0xda8,0xcbc)],'rowId':_0x209c0b['VjQpo']}]},{'title':_0x209c0b[_0x557c87(0x7ec,0x69b,0x877,0xc78)],'rows':[{'title':'👸\x20〉ɞ\x20Anime'+_0x4990a7(0x56f,0x8dd,0xa42,0x48b),'description':_0x209c0b['Xsktf'],'rowId':_0x209c0b[_0x4990a7(0xb96,0x9e4,0x100e,0xbd9)]}]},{'title':'Sub\x20Menu\x20k'+_0x4990a7(0x470,0x735,0x7ce,0x1f1),'rows':[{'title':_0x209c0b[_0x557c87(0x57e,0x89d,0xa91,0xfc3)],'description':_0x209c0b[_0x557c87(0x870,0x46c,0x487,0x299)],'rowId':'textprocmd'}]},{'title':'Sub\x20Menu\x20k'+_0x4990a7(0x6cf,0x931,0x821,0x21b),'rows':[{'title':_0x209c0b[_0x4990a7(0xa8e,0xb98,0xc14,0xcb3)],'description':_0x209c0b[_0x557c87(0x86a,0x1157,0xd82,0x10e7)],'rowId':_0x4990a7(0xbf0,0xc0b,0x910,0xc08)+'d'}]},{'title':_0x209c0b[_0x4990a7(0x7e4,0x648,0x49e,0x3f0)],'rows':[{'title':_0x209c0b[_0x4990a7(0xc0c,0x80c,0x1087,0xa9c)],'description':_0x557c87(0xb37,0x90b,0xb98,0xf22)+'sik\x20berdur'+_0x4990a7(0xcb1,0xef4,0xe72,0x1128)+'_','rowId':_0x4990a7(0xbec,0xbec,0x103c,0xa72)}]},{'title':_0x209c0b[_0x4990a7(0x89b,0x8be,0x65c,0xb0f)],'rows':[{'title':_0x4990a7(0xc02,0xa9c,0x82b,0xa4d)+_0x557c87(0x1015,0x7c5,0xcad,0xc71),'description':_0x209c0b['lLbwW'],'rowId':_0x209c0b[_0x557c87(0x94d,0x91c,0xae8,0x6b3)]}]},{'title':_0x209c0b['WZmMM'],'rows':[{'title':_0x209c0b[_0x557c87(0x8f3,0xf30,0xd58,0xfb6)],'description':_0x209c0b[_0x557c87(0x455,0xbf2,0x7c8,0x32e)],'rowId':_0x209c0b['GZEbj']}]},{'title':_0x209c0b[_0x4990a7(0x57a,0xaa1,0xa9,0x830)],'rows':[{'title':_0x209c0b['HAcsb'],'description':_0x4990a7(0x855,0x8d7,0x5d5,0x38f)+'an\x20menu\x20is'+_0x557c87(0x50e,0x851,0x765,0x25a),'rowId':'islamiccmd'}]},{'title':_0x209c0b['qXlQR'],'rows':[{'title':_0x4990a7(0x859,0x534,0x39e,0x9e9)+_0x4990a7(0x271,0x5b6,-0x49,0x304),'description':_0x209c0b[_0x557c87(0xc37,0xaef,0x993,0x7e0)],'rowId':_0x209c0b[_0x4990a7(0x9dc,0xb20,0xb6a,0x576)]}]},{'title':_0x557c87(0x9df,0x6ba,0x8c0,0x8c9)+_0x557c87(0xa92,0x752,0x7a2,0xb61),'rows':[{'title':_0x557c87(0x643,0xbf4,0x7f0,0x80d)+'Maker','description':_0x209c0b['sMSOP'],'rowId':'logocmd'}]},{'title':_0x209c0b[_0x4990a7(0xb93,0xa3c,0x69f,0x1098)],'rows':[{'title':_0x209c0b[_0x4990a7(0x816,0x686,0x709,0x827)],'description':_0x4990a7(0xca5,0xfb2,0xe1d,0x897)+_0x4990a7(0x4e6,0x4ba,0x91,0x822),'rowId':'sc'}]},{'title':_0x209c0b['BAacy'],'rows':[{'title':_0x209c0b[_0x557c87(0xb23,0x10ba,0xc8c,0xf54)],'description':_0x209c0b[_0x557c87(0x5f9,0x318,0x82c,0x33d)],'rowId':'tq'}]}]}},_0x3d48b8);const _0x4b187e={};_0x4b187e[_0x4990a7(0x9d9,0xe74,0x882,0x646)]=!![],_0x119cd3[_0x557c87(0x56f,0x249,0x486,0x24)+'sage'](_0x2fffce,_0x4b187e);}else{const _0x277e03={};_0x277e03['authorizat'+'ion']=AUTH;const _0x3f4bfe={};_0x3f4bfe[_0x557c87(0x1081,0x8d8,0xca5,0xfa4)]=_0x277e03;const _0x1766aa=await axios[_0x557c87(0x3cc,0x51a,0x5c8,0x279)](API_GUEST,null,_0x3f4bfe);if(_0x209c0b[_0x557c87(0x939,0xcef,0xa9e,0x620)](_0x1766aa[_0x4990a7(0x8af,0x39b,0x9a1,0x645)],-0x6bf+-0x935+0x10bc)&&_0x1766aa['data']){if(_0x209c0b['kGJDu'](_0x209c0b['xZKkO'],_0x209c0b[_0x4990a7(0x76e,0x498,0x3a7,0x82f)]))throw new _0x322880(_0x37836a);else return _0x1766aa['data'];}}}catch(_0x498e49){if(_0x209c0b[_0x557c87(0x5b6,0xb43,0xa9e,0xf3e)](_0x209c0b[_0x557c87(0xc0c,0x10ea,0xd13,0x1016)],_0x209c0b['tXUcs']))_0x209c0b[_0x557c87(0x8d,0x292,0x3e2,0xea)](_0x854e00,_0x557c87(0x750,0x6a6,0x8b1,0xb1c)+'or');else throw new Error(_0x498e49);}}const fbdl=async _0x459908=>{const _0x29ff28={'Nwgrw':function(_0x19dc61,_0x32e4e3){return _0x19dc61(_0x32e4e3);},'FeViB':_0x4049da(0xc14,0xc92,0xf11,0xb79),'uGKlq':function(_0x31facc,_0x439c44,_0x479d49,_0x3fde22,_0x5863cb,_0x1980c0,_0x155139){return _0x31facc(_0x439c44,_0x479d49,_0x3fde22,_0x5863cb,_0x1980c0,_0x155139);},'vdZlK':_0x4049da(0x2ce,0xa20,0x7de,0x5b5),'XfHFq':_0xe085e8(0x76f,0x8c8,0x643,0x320),'EqJNv':_0xe085e8(0x96b,0xa09,0x759,0xa83)+'a','qqYaR':function(_0x37d161,_0x5866cd){return _0x37d161===_0x5866cd;},'oDqXG':_0x4049da(0x729,0x69a,0x952,0x686),'WOkFg':function(_0x289a25){return _0x289a25();},'VCQqc':'https://do'+'wnvideo.ne'+'t','eRvlj':'div[class='+_0x4049da(0x4e8,0xd8d,0xa91,0x92e)+_0x4049da(0x830,0xa2a,0x3aa,0x810)+'9\x22]','NWjne':'c.us','HPhDd':'href','AKaEL':function(_0x2d8c19,_0x316259){return _0x2d8c19(_0x316259);},'pVEVd':_0x4049da(0x833,0xc40,0xd82,0x877)+_0x4049da(0x3fd,0xb09,0x234,0x69d)+_0xe085e8(0x6ef,0x32b,0xbe4,0x6a8)+_0x4049da(0xf4,0x173,0x3a4,0x42a),'cfDSt':'div[class='+_0xe085e8(0xabb,0x94e,0xdcb,0xeca)+'\x22]','xOCmK':function(_0x175d5b){return _0x175d5b();},'HjvqK':function(_0x4e8d7f,_0x25795d,_0x51ae1f){return _0x4e8d7f(_0x25795d,_0x51ae1f);}};async function _0x211606(){function _0x444a64(_0x104a7b,_0xdbf4a0,_0x70cae7,_0x35770c){return _0x4049da(_0x104a7b,_0xdbf4a0-0x1e8,_0x70cae7-0x17e,_0x70cae7- -0x1bb);}function _0x2bcaca(_0x48f007,_0x521258,_0x3d192e,_0x1ee466){return _0xe085e8(_0x521258- -0x354,_0x3d192e,_0x3d192e-0x77,_0x1ee466-0x158);}if(_0x29ff28[_0x444a64(0x918,0xa05,0x608,0x4dd)](_0x29ff28[_0x2bcaca(-0x15f,0x3cf,-0xdd,0x17f)],_0x29ff28[_0x2bcaca(0x118,0x3cf,0x6b1,0x7d1)])){let _0x1e907b=_0x29ff28[_0x444a64(0x7e1,0xaa5,0x94d,0x5a4)](UserAgent);const _0x536500={};_0x536500[_0x444a64(0x361,0xa3,0x558,0x87e)]='text/html,'+_0x2bcaca(0x6bb,0x715,0x3b7,0x26c)+_0x444a64(0x17,0x35e,0x2bc,0x521)+'l,applicat'+_0x2bcaca(0x27b,0x4fc,0x403,0x2b)+_0x2bcaca(0x453,0x2c4,0x624,-0x182)+_0x444a64(0x46b,0x200,0x21f,0x490)+_0x444a64(0xe21,0x55b,0xa34,0x769)+_0x2bcaca(-0x9c,-0xd5,0x9a,-0x37d)+_0x2bcaca(0x1d4,0x247,-0xd4,0x21b)+_0x444a64(0xce6,0x460,0x846,0x7a8)+'igned-exch'+_0x444a64(0x119,-0x29,0x1fc,0x4cc)+_0x444a64(0x829,0xabb,0xa2d,0x608),_0x536500[_0x444a64(0x558,0x601,0x4d0,0x192)+_0x444a64(0x6a2,0xdd5,0xa46,0xf65)]=_0x444a64(-0x95,-0xa5,0x293,0x674)+_0x2bcaca(0x8fe,0x41f,0x135,0x69f)+_0x2bcaca(0x7f7,0x78a,0x775,0x74f)+_0x2bcaca(0x372,0x5eb,0x1b3,0x132)+'6',_0x536500[_0x2bcaca(0x524,0x650,0xa4d,0x87d)+_0x444a64(0x1c8,0x1f3,0x4ab,0x8fb)]='?1',_0x536500[_0x444a64(0x895,0x469,0x7f5,0xbfa)]=_0x1e907b;const _0x4955d9={};_0x4955d9[_0x2bcaca(0x91f,0x6f7,0x786,0x4f9)]=_0x536500;const _0x598960=await axios[_0x2bcaca(0x85c,0x5d2,0x5e7,0x421)](_0x29ff28[_0x2bcaca(0x15b,0x112,-0x106,-0x74)],_0x4955d9),_0x48e202=cheerio['load'](_0x598960[_0x2bcaca(0x4c6,0x51a,0x767,0x741)]);let _0x44f84f;_0x48e202(_0x29ff28[_0x2bcaca(0xc64,0x742,0x2ba,0x792)])[_0x444a64(0x202,-0xa4,0x207,0x6e3)](_0x444a64(0x37d,0x5d3,0x572,0x95c))[_0x444a64(0x4c5,0x1a7,0x276,-0x18a)]((_0x2ce4d5,_0x55fbf8)=>{function _0x34791f(_0x21bf51,_0x11af71,_0x3acb00,_0x2cc80f){return _0x2bcaca(_0x21bf51-0x106,_0x3acb00-0x47,_0x2cc80f,_0x2cc80f-0x6);}let _0x263e60=_0x29ff28[_0x3bd0b2(0x7ab,0xbc2,0x9f1,0xfdb)](_0x48e202,_0x55fbf8)['attr'](_0x29ff28[_0x3bd0b2(0xaa7,0xab0,0x9a4,0x969)]);function _0x3bd0b2(_0x5a5e9f,_0x15e167,_0x221dbe,_0xaa365){return _0x2bcaca(_0x5a5e9f-0x9d,_0x15e167-0x6bc,_0x221dbe,_0xaa365-0x176);}_0x263e60&&(_0x44f84f=_0x263e60);});const _0x5eda33={};return _0x5eda33['ua']=_0x1e907b,_0x5eda33[_0x2bcaca(0x138,0x1e8,0x21f,0x372)]=_0x44f84f,_0x5eda33;}else _0x29ff28['uGKlq'](_0x2a4cd1,_0x15f0b0[_0x444a64(0x61b,0x1d,0x433,0x92c)],_0x444a64(0x936,0x29e,0x725,0x3a7)+'*'+_0x4549a3+_0x113818+_0x54e191,''+_0x5ef281+_0x4e3b9c+_0x3501d2+_0x8d641c+_0x1bf1d3+'©\x20'+_0x5ac9b5,_0x442492,[{'buttonId':'owner','buttonText':{'displayText':_0x29ff28['vdZlK']},'type':0x1},{'buttonId':_0x29ff28['XfHFq'],'buttonText':{'displayText':_0x29ff28[_0x444a64(0x8b7,0x2fb,0x4cc,0x6ec)]},'type':0x1}],{});}async function _0x56e848(_0x35fcc4,_0x3499d5){const _0x75eed9={'GpRmc':_0x29ff28[_0x3531a3(-0x1bc,0x2f5,0x736,-0xde)],'XYcfS':_0xa2c691(0x9e,-0x32d,-0x87,0x1a8)+_0xa2c691(-0x81,0x7b0,0x9f,0x34f),'KEmnK':_0xa2c691(0xae0,0xb2e,0x7d3,0x843),'IiVaj':function(_0x554030,_0x47689c){return _0x554030(_0x47689c);},'hZeJM':_0x29ff28[_0x3531a3(0xa2c,0x63e,0x2be,0x837)]},_0x4b143a={};_0x4b143a['accept']='text/html,'+_0xa2c691(0x684,0x79d,0x709,0x8ff)+_0xa2c691(-0x1e,0x40c,0x419,0x23e)+'l,applicat'+_0x3531a3(0xa21,0x7fc,0x312,0xb0d)+'0.9,image/'+'avif,image'+_0xa2c691(0x7c0,0xd1a,0x9b8,0x9b6)+_0x3531a3(0x459,0x22b,0x6d3,0x653)+_0x3531a3(0x8fe,0x547,0x7d2,0x62b)+_0xa2c691(0x998,0x5af,0xad5,0x7c8)+_0xa2c691(0x56,0x547,0x1d0,0x489)+_0xa2c691(-0xec,0x346,-0x3ae,0x17e)+_0xa2c691(0x9f0,0x6a8,0xd83,0x9af),_0x4b143a['accept-lan'+_0xa2c691(0xda7,0x8c0,0xacb,0x9c8)]='id,en-US;q'+'=0.9,en;q='+_0xa2c691(0xc75,0xe9e,0x993,0x974)+_0xa2c691(0xbb7,0x67b,0x5f6,0x7d5)+'6',_0x4b143a[_0xa2c691(0xa7b,0x9cb,0x4ad,0x83a)+'user']='?1',_0x4b143a[_0xa2c691(0x76f,0x7df,0x830,0x44b)+'pe']=_0xa2c691(0x918,0x7e8,0x5bb,0x8ff)+_0x3531a3(0xbe3,0x9a3,0x852,0xa7f)+_0xa2c691(0x64c,0x622,0x645,0x160)+_0x3531a3(0x703,0x8f0,0x6d4,0xa20),_0x4b143a[_0x3531a3(0x9fa,0x88d,0xcc2,0x9de)]=_0x3499d5;const _0x1cfe6e=await _0x29ff28[_0x3531a3(0xbdf,0x78b,0xa20,0xc9f)](axios,{'url':_0x29ff28[_0x3531a3(0x91b,0x870,0xa9a,0xc38)],'method':_0xa2c691(0x8c8,0x88d,0x667,0x3e0),'data':new URLSearchParams(Object[_0x3531a3(0xb2,0x203,-0x2e6,0x324)](_0x35fcc4)),'headers':_0x4b143a});function _0x3531a3(_0x351031,_0x3bd25a,_0x2ecd93,_0x2cea06){return _0x4049da(_0x2ecd93,_0x3bd25a-0x152,_0x2ecd93-0x6f,_0x3bd25a- -0x123);}const _0x1d894f=cheerio['load'](_0x1cfe6e['data']);let _0x13652e=[];_0x29ff28['AKaEL'](_0x1d894f,_0x29ff28[_0xa2c691(0x17,0x601,0xa37,0x529)])[_0x3531a3(-0x210,0x29f,-0x229,0x33f)]('a')[_0x3531a3(0x501,0x30e,-0x9c,0x7f8)]((_0x1a68c8,_0x14fd07)=>{function _0x329e08(_0x4ccdca,_0x52e8b1,_0x425254,_0x2e6106){return _0xa2c691(_0x425254,_0x52e8b1-0x11f,_0x425254-0x11a,_0x52e8b1-0x246);}function _0x42f981(_0x51cf8e,_0x1837f4,_0xe8eee5,_0x2cba92){return _0x3531a3(_0x51cf8e-0x144,_0x51cf8e-0x144,_0x1837f4,_0x2cba92-0xc6);}if(_0x42f981(0xa9d,0x5b7,0x7be,0x64a)===_0x75eed9[_0x329e08(0x8d9,0x4e2,0x5bb,0x2bd)]){let _0x22703e=_0x75eed9[_0x329e08(0xa3b,0x674,0x4b1,0x392)](_0x1d894f,_0x14fd07)[_0x42f981(0x6d2,0xaa2,0x509,0x2e7)](_0x75eed9[_0x42f981(0x43f,0x1e8,0x648,0x1cc)]),_0x472cd9=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0x472cd9[_0x329e08(0xcf4,0xa7b,0x7e1,0xba2)](_0x22703e)&&_0x13652e['push'](_0x22703e);}else _0x4c4b1f['push'](_0x2c6a45['id']['replace'](_0x75eed9[_0x42f981(0x2bf,-0x75,-0x142,0x68d)],_0x75eed9[_0x329e08(0xa2e,0x59f,0xac3,0x1a3)]));});function _0xa2c691(_0x8699a7,_0x137e6c,_0x3524b9,_0x3e0073){return _0x4049da(_0x8699a7,_0x137e6c-0x149,_0x3524b9-0xcc,_0x3e0073- -0x239);}return _0x13652e;}const _0x5538db=await _0x29ff28[_0x4049da(0xabf,0x761,0x2ea,0x6ba)](_0x211606),_0x37f66b={};function _0x4049da(_0x427f20,_0x549f5a,_0x21d42d,_0x407fad){return _0x342471(_0x427f20,_0x549f5a-0x19e,_0x407fad- -0xf0,_0x407fad-0xed);}function _0xe085e8(_0x199471,_0x42a407,_0x48ebb5,_0x46226f){return _0x150c54(_0x199471-0x6,_0x42a407,_0x48ebb5-0x1,_0x199471- -0x282);}_0x37f66b[_0xe085e8(0x73a,0x772,0x855,0x823)]=_0x459908,_0x37f66b[_0xe085e8(0x53c,0x64a,0x401,0x2e3)]=_0x5538db[_0x4049da(0x548,0x748,0x1d4,0x60b)];let _0x4203ff=_0x37f66b;const _0x192714=await _0x29ff28[_0x4049da(0x50,-0x23e,-0x13a,0x2c3)](_0x56e848,_0x4203ff,_0x5538db['ua']);return _0x192714;};!fbte['includes']('groups')?zee[_0x150c54(0xe41,0xea1,0xc55,0xd09)](fbte)['then'](async _0x4499d1=>{const _0x3e931b={'VZzsb':function(_0x58c94e,_0x5434b2){return _0x58c94e(_0x5434b2);},'Alfor':function(_0x5d7ad2,_0x5138cc,_0x2048e4,_0x4dbeed,_0x162560,_0x5db175,_0x224298){return _0x5d7ad2(_0x5138cc,_0x2048e4,_0x4dbeed,_0x162560,_0x5db175,_0x224298);},'yGmrs':function(_0x4f8e10,_0x3b655a){return _0x4f8e10+_0x3b655a;},'ZbPZB':'RESPONSE','qiMYx':function(_0x42a441,_0x7d951){return _0x42a441+_0x7d951;},'ELlRa':_0x22007f(0xc7,-0x189,-0x5c,-0x9b)};let _0x10f219=_0x387012(0xb10,0xc68,0x1044,0xb4a)+_0x22007f(0x760,0x6f3,0x841,0x7d3)+_0x387012(0x771,0xc63,0xeb7,0xba9)+_0x387012(0x3c3,0x8c1,0x7d6,0xa59);_0x10f219+=_0x387012(0xdbb,0xadd,0x7d2,0x6cd)+'*\x20'+_0x4499d1['title']+'\x0a',_0x10f219+=_0x387012(0xe2b,0xeaf,0xdd0,0xac0)+'\x20'+_0x4499d1['medias'][0x10bb+-0xbb2+-0x509][_0x22007f(0x79c,0x55b,0x359,0x633)]+'\x0a',_0x10f219+=_0x22007f(0xd1b,0x57d,0x8b1,0x987)+_0x22007f(0x4b,0x1de,0x529,0x4f0)+_0x387012(0xc,0x53d,0x1f7,0x1b7),_0x10f219+='*📧\x20Size\x20Sd'+_0x22007f(0x60b,0x6a5,0x602,0x173)+_0x4499d1[_0x387012(0xc6a,0xc65,0x869,0xc25)][-0xce*-0x3+-0x29c*0x8+0x2*0x93b][_0x387012(0x60f,0xa70,0x58f,0xc95)+_0x387012(0x918,0x973,0x4d4,0xb6f)]+'\x0a',_0x10f219+=_0x22007f(-0x257,0x4b5,-0x14,-0xbe)+_0x22007f(0x11f,0x142,0x602,0x976)+_0x4499d1[_0x22007f(0x318,0xa7b,0x6a5,0x7a5)][-0x2*-0x709+0x3*-0xc07+0x1*0x1604]['formattedS'+_0x387012(0x84b,0x973,0xddc,0x626)]+'\x0a';function _0x22007f(_0x1baa8b,_0x17495f,_0xd57a60,_0x3c664d){return _0x150c54(_0x1baa8b-0x164,_0x3c664d,_0xd57a60-0x10d,_0xd57a60- -0x524);}_0x10f219+='*✉️\x20Size\x20Mp'+_0x387012(0xca7,0xd03,0xd4f,0x114b)+_0x4499d1[_0x387012(0xd39,0xc65,0xbc1,0x10d2)][-0x4ba*0x4+0xda5+0x543][_0x22007f(0x3c0,0x4fe,0x4b0,0x32c)+_0x22007f(0x667,0x34d,0x3b3,0x188)]+'\x0a';function _0x387012(_0x24e23e,_0x4c45b7,_0x21d12e,_0x557a17){return _0x150c54(_0x24e23e-0x94,_0x21d12e,_0x21d12e-0xe0,_0x4c45b7-0x9c);}_0x10f219+=_0x387012(0x97c,0x464,0x18a,0x3fd)+_0x4499d1[_0x387012(0x26c,0x515,0x180,0x769)];let _0x279df6=await _0x3e931b[_0x387012(0xa16,0xe6b,0x9d6,0x135d)](getBuffer,_0x4499d1[_0x22007f(-0x22b,0x352,-0x12b,-0x5b3)]);_0x3e931b[_0x387012(0x888,0xb6f,0xf17,0x8ff)](sendButLocation,from,_0x10f219,_0x22007f(-0x2fa,0x22a,0x19b,0x2f3)+_0x22007f(0x942,0x761,0x880,0x39a)+_0x387012(0x634,0x793,0x7db,0x6f2)+_0x22007f(0x5b,0x6c,0x3ba,0x300)+enter+enter+'©\x20'+ownername,_0x279df6,[{'buttonId':_0x387012(0x935,0x8dd,0x413,0xad9)+fbte,'buttonText':{'displayText':_0x3e931b[_0x22007f(0x4ea,0x53f,0x4f8,0x5a9)](_0x3e931b[_0x387012(0xbae,0xab8,0x875,0xb7d)]('HD','\x20'),_0x4499d1[_0x387012(0x962,0xc65,0xdda,0x1102)][-0x1148*-0x1+-0x352+-0xdf5][_0x22007f(0x375,0x523,0x4b0,0x3a)+_0x22007f(0x2de,0x66c,0x3b3,0x11f)])},'type':_0x3e931b[_0x387012(0x989,0xc99,0x947,0xc1a)]},{'buttonId':_0x22007f(0x9c6,0x597,0x780,0x954)+fbte,'buttonText':{'displayText':'SD'+'\x20'+_0x4499d1['medias'][-0xc19+-0x2*-0x8e+-0xafd*-0x1][_0x22007f(0x35e,0x6d8,0x4b0,0x37e)+_0x387012(0xd74,0x973,0x78d,0x564)]},'type':_0x3e931b[_0x387012(0xae5,0xc99,0x77a,0xfc1)]},{'buttonId':_0x387012(0xb1d,0x75f,0x2fb,0x750)+fbte,'buttonText':{'displayText':_0x3e931b[_0x387012(0x6e0,0xab8,0xc13,0x992)](_0x3e931b['qiMYx'](_0x3e931b['ELlRa'],'\x20'),_0x4499d1['medias'][-0x4b4+-0x3*0x455+0x11b3][_0x22007f(0x604,0x164,0x4b0,0x60)+_0x387012(0x691,0x973,0x77e,0x5a8)])},'type':_0x3e931b[_0x22007f(0x912,0xb8d,0x6d9,0xb7c)]}],{});}):fbdl(fbte)[_0x150c54(0x4ff,0x846,0x175,0x650)](_0x107486=>{function _0xaf5e15(_0x198d16,_0x59e31f,_0x2ce4b2,_0x3984d1){return _0x150c54(_0x198d16-0xd6,_0x59e31f,_0x2ce4b2-0xe0,_0x2ce4b2- -0x283);}sendFileFromUrl(from,_0x107486[0x1578+0x5*-0x1a5+-0xd3f],lang[_0xaf5e15(0x78,0x26a,0x13b,-0x30e)](),mek);});break;case _0x150c54(0x42a,0x688,0x42a,0x556):case'facebookhd':const _0x2f8198={};_0x2f8198['displayTex'+'t']=_0x150c54(0xf78,0x11ae,0xd84,0xd3c)+_0x342471(0x9c2,0xd17,0xc7d,0x82f);const _0x369569={};_0x369569['buttonId']='goprem',_0x369569[_0x150c54(0x1057,0xd8f,0xdf8,0xb98)]=_0x2f8198,_0x369569['type']=0x1;const _0x189cd3={};_0x189cd3[_0x342471(0x523,0x793,0x3fa,0x879)]=mek;if(!isPremium)return sendButMessage(from,_0x150c54(0xa69,0x8ad,0x90f,0x8c8)+_0x342471(0x6a1,0x311,0x496,0x329)+_0x150c54(0x87d,0xbaa,0xe2d,0xcbe)+_0x150c54(0xf1d,0xd40,0xee5,0xc81)+_0x150c54(0x95f,0x300,0x591,0x560)+_0x342471(0x883,-0x135,0x3f1,0x11b)+_0x342471(0x5b3,0x785,0x32d,0x114)+_0x150c54(0x76f,0xb86,0x232,0x74b)+_0x150c54(0x988,0x8d5,0xe5b,0x960)+_0x150c54(0xf38,0xae2,0xcd7,0xcff)+prefix+'goprem',_0x150c54(0x10ac,0x128e,0xff7,0xd78)+_0x342471(0xa3e,0x970,0xcb1,0xc2d),[_0x369569],_0x189cd3);if(!q)return reply('Linknya?');if(!isUrl(args[-0x235*-0x11+-0x99*0x2f+-0x96e])&&!args[-0x1940+-0x59a+0x1eda]['includes']('facebook.c'+'om'))return reply(lang[_0x150c54(0xc83,0xc72,0x5c8,0x80f)]());reply(lang[_0x150c54(0xd93,0xf35,0x791,0xb89)]());var fbte=args[_0x342471(0xe02,0x8a1,0xa87,0xda3)]('\x20');zee[_0x150c54(0xb7f,0xb4d,0xddc,0xd09)](fbte)[_0x150c54(0xad7,0x47f,0x19d,0x650)](async _0x41f5b4=>{function _0x3338e7(_0x3898a4,_0x477b97,_0xece337,_0x4b188a){return _0x150c54(_0x3898a4-0xdb,_0xece337,_0xece337-0x199,_0x3898a4- -0x5a1);}function _0x1b18dd(_0x28679f,_0x4454e8,_0x4a145c,_0xfe0ba5){return _0x150c54(_0x28679f-0x5b,_0x28679f,_0x4a145c-0x185,_0x4454e8-0xfe);}sendFileFromUrl(from,_0x41f5b4[_0x1b18dd(0xfaf,0xcc7,0x1131,0xd5d)][0xa53+-0x2*0x3c3+0x4*-0xb3][_0x3338e7(-0x128,-0x18f,-0x3ec,-0x189)],lang['success'](),mek);})[_0x150c54(0xa1b,0x873,0x55e,0x9df)](_0x39db05=>{function _0xf7172a(_0x57dd40,_0x1cd88e,_0x3b7516,_0x2df585){return _0x342471(_0x2df585,_0x1cd88e-0x7a,_0x57dd40- -0x464,_0x2df585-0x1d0);}const _0x1d3bc3={'QIduo':function(_0x51a2e5,_0x242028){return _0x51a2e5(_0x242028);}};_0x1d3bc3[_0xf7172a(0x6bc,0x915,0x30f,0x5c4)](reply,lang['tryAgain']());});break;case _0x150c54(0x457,0x8e2,0x8d7,0x758):case _0x342471(0xc50,0xda4,0xb4a,0x716):if(!q)return reply(_0x150c54(0x1ea,0x85d,0x6a4,0x424));if(!isUrl(args[-0xbfb*0x1+-0x2b6*0xc+0x109*0x2b])&&!args[-0x71a+-0x2*0xbdd+0x1ed4][_0x342471(0xb62,0xc18,0xc60,0x10d3)](_0x150c54(0xc78,0x51f,0xb5d,0xa16)+'om'))return reply(lang[_0x150c54(0x449,0x8c7,0xabe,0x80f)]());reply(lang[_0x342471(0xcbf,0xa8b,0xac6,0xe1e)]());var fbte=args[_0x150c54(0x8cf,0x918,0x69c,0xb4a)]('\x20');zee[_0x150c54(0x869,0x809,0x95e,0xd09)](fbte)[_0x150c54(0x89b,0x5f4,0x510,0x650)](async _0x49abc7=>{const _0x53e370={'pQlwZ':function(_0x1057bf,_0x1e6837,_0x561727,_0x93742f,_0x2d5eb2){return _0x1057bf(_0x1e6837,_0x561727,_0x93742f,_0x2d5eb2);}};function _0x4271ca(_0x46d78f,_0x3c1595,_0x2b4f1c,_0x55cfe5){return _0x342471(_0x3c1595,_0x3c1595-0x1b,_0x2b4f1c- -0x42,_0x55cfe5-0x4e);}function _0x5969fa(_0x42f8f6,_0x127122,_0x35744d,_0xcc2576){return _0x150c54(_0x42f8f6-0xad,_0xcc2576,_0x35744d-0x17e,_0x42f8f6- -0x5a7);}_0x53e370['pQlwZ'](sendFileFromUrl,from,_0x49abc7[_0x5969fa(0x622,0x949,0x1b2,0x93e)][-0x880*0x3+0x8bb+0x10c5]['url'],lang[_0x5969fa(-0x1e9,-0x48d,-0xf7,-0x509)](),mek);})[_0x342471(0xc70,0xb67,0x91c,0x6de)](_0x6fc0a4=>{const _0x6563fc={'PXijU':function(_0x478fc7,_0x23b38d){return _0x478fc7(_0x23b38d);}};function _0x6eaadb(_0x18520e,_0x5a0415,_0x51a405,_0x20c97a){return _0x342471(_0x18520e,_0x5a0415-0x1af,_0x20c97a- -0x2c7,_0x20c97a-0xf2);}function _0x3ead75(_0x12b218,_0x23127c,_0x524c3d,_0x4faa79){return _0x342471(_0x4faa79,_0x23127c-0x18e,_0x23127c- -0xdf,_0x4faa79-0x1d7);}_0x6563fc[_0x3ead75(0x9eb,0x4ba,0x8a3,0x545)](reply,lang[_0x3ead75(0x309,0x7f4,0xc03,0x782)]());});break;case _0x150c54(0xdb4,0x7ec,0x90f,0x9d7):case _0x342471(0x6e1,0x64e,0x8d5,0xc5c)+'dio':{const _0x18ab54={};_0x18ab54[_0x342471(0xcea,0x8c9,0xb65,0x918)+'t']=_0x342471(0xfbb,0xccd,0xb57,0xcd7)+'t';const _0x3148a7={};_0x3148a7[_0x342471(0x515,0xde1,0x913,0xbca)]=_0x342471(0xb6d,0x4da,0x9aa,0x8b0),_0x3148a7[_0x342471(0xbd2,0x5d5,0xad5,0x866)]=_0x18ab54,_0x3148a7[_0x150c54(0x767,0x80c,0x2fa,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0xe9c,0x5fe,0x9aa,0x930)](prefix),'©\x20'+ownername,[_0x3148a7]);if(!q)return reply(_0x342471(0x39f,-0x6b,0x361,0x4ec));if(!isUrl(args[-0x14a5+0x34*-0x6f+0x1*0x2b31])&&!args[-0x19*0xf4+0xb68+0x109*0xc]['includes']('facebook.c'+'om'))return reply(lang['erorLink']());reply(lang[_0x150c54(0xa97,0x6fe,0xe01,0xb89)]());var fbte=args[_0x342471(0x814,0xc2f,0xa87,0xd24)]('\x20');zee[_0x150c54(0xb7f,0xa2f,0xb52,0xd09)](fbte)[_0x342471(0xab8,0x7dd,0x58d,0x401)](async _0x133506=>{const _0x2bbbba={};_0x2bbbba[_0x25a72a(0x8ac,0x81f,0x354,0x3c7)]=_0x25a72a(0x8cf,0x5d6,0x29a,0x5d7);const _0x57fcf4=_0x2bbbba;function _0x25a72a(_0x54138d,_0x3dcc0a,_0x20f8d6,_0x328329){return _0x342471(_0x54138d,_0x3dcc0a-0x1cd,_0x328329- -0x294,_0x328329-0x9e);}let _0x93e3c=await getBuffer(_0x133506[_0x25a72a(0xa40,0xa5c,0xbc6,0x872)][-0x55b*-0x1+-0x4*-0x51a+0x527*-0x5]['url']);const _0x123ca1={};_0x123ca1[_0x25a72a(-0x1d5,0x13,-0xd7,0x1db)]=_0x57fcf4['kRJZa'];function _0xa31b50(_0x2c827d,_0x565bdb,_0x4ecf6d,_0x4e7a3c){return _0x342471(_0x4e7a3c,_0x565bdb-0x143,_0x4ecf6d- -0x257,_0x4e7a3c-0x185);}_0x123ca1[_0x25a72a(0x4de,-0x83,0x191,0x166)]=mek,alpha[_0x25a72a(0x8cc,0x378,0xc19,0x7b2)+'e'](from,_0x93e3c,MessageType[_0x25a72a(0xf8,0x389,0x656,0x5b5)],_0x123ca1);})['catch'](_0x5b264a=>{function _0x2e1ea3(_0x56211a,_0x5266b0,_0x3f9d4c,_0x4f6948){return _0x342471(_0x4f6948,_0x5266b0-0x13a,_0x56211a- -0x143,_0x4f6948-0x72);}const _0x5c9e42={'mumwx':function(_0x49fe2f,_0x4f4bf0){return _0x49fe2f(_0x4f4bf0);}};function _0x575412(_0x46bca9,_0x22ca16,_0xfd48b6,_0x30446a){return _0x342471(_0x22ca16,_0x22ca16-0x1e0,_0x30446a- -0x389,_0x30446a-0xb8);}_0x5c9e42[_0x575412(0x9a7,0x72f,0xaea,0x6b6)](reply,lang[_0x2e1ea3(0x790,0x2ce,0x4b4,0xba2)]());});}break;case'tiktokaudi'+'o':case'tiktokmusi'+'c':case _0x150c54(0x48b,0x722,0x386,0x6d9):{const _0x16f410={};_0x16f410[_0x150c54(0xd32,0xdfb,0xad6,0xc28)+'t']=_0x342471(0xc38,0xcfc,0xb57,0xedd)+'t';const _0x1b7b03={};_0x1b7b03[_0x342471(0x63b,0x59d,0x913,0xb18)]='limit',_0x1b7b03[_0x150c54(0xc9b,0xfad,0xcf9,0xb98)]=_0x16f410,_0x1b7b03[_0x342471(-0x94,0x87c,0x36e,0x78e)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xf61,0xf4d,0xded,0xa6d)](prefix),'©\x20'+ownername,[_0x1b7b03]);if(!q)return reply(_0x342471(0x3a0,0x1a9,0x361,0x618));if(!isUrl(args[0x2cd*0x4+-0x1a1*-0x17+-0x3*0x1039])&&!args[0x1c5*-0x13+0x1476+-0xd29*-0x1][_0x342471(0x83a,0x97d,0xc60,0xaff)](_0x150c54(0x787,0xba,0x507,0x53c)))return reply(lang[_0x342471(0x996,0x783,0x74c,0xc7b)]());reply(lang[_0x342471(0xb63,0xa71,0xac6,0x910)]()),hx['ttdownload'+'er'](''+args[0x30d+0x1936+-0x1*0x1c43])['then'](_0x203178=>{const _0x53a330={'sNPSY':function(_0x12b53d,_0x4d0fe4){return _0x12b53d(_0x4d0fe4);},'iOIpq':_0x169569(0x2f3,0x90e,-0x31,0x487)},{wm:_0x18b280,nowm:_0x21e582,audio:_0x1c2ca6}=_0x203178;function _0x18fc04(_0x455204,_0x4a9386,_0x1ea734,_0x1a00cf){return _0x342471(_0x4a9386,_0x4a9386-0xd0,_0x455204-0x36,_0x1a00cf-0x1c1);}function _0x169569(_0x3acaa2,_0x233a52,_0x59b04c,_0x30dd8d){return _0x150c54(_0x3acaa2-0xc,_0x59b04c,_0x59b04c-0x14c,_0x30dd8d- -0x4a7);}axios['get'](_0x169569(-0x79,-0x1e4,0x782,0x260)+_0x169569(0x59b,0x8f3,0x1cf,0x588)+_0x18fc04(0x9a3,0xea4,0x841,0x7ac)+_0x18fc04(0x480,0x4a6,0x33d,0x35b)+_0x21e582)[_0x169569(0x3a6,-0x9e,0x248,0x1a9)](async _0x5948bb=>{function _0x51e529(_0x44283c,_0x27e116,_0x378b66,_0x88426e){return _0x169569(_0x44283c-0x1f,_0x27e116-0xde,_0x378b66,_0x44283c-0x58);}let _0x4aee6f=await _0x53a330[_0x51e529(0x4d8,0x3e0,0x9,0x9e5)](getBuffer,_0x1c2ca6);function _0x36fbf5(_0x39562f,_0x4acd69,_0x4de775,_0x12945a){return _0x18fc04(_0x12945a- -0x14f,_0x4acd69,_0x4de775-0x191,_0x12945a-0xdd);}const _0x5491ea={};_0x5491ea[_0x51e529(0xe3,0xee,-0x26d,0x482)]=_0x53a330[_0x51e529(-0x36,0x169,-0x33b,-0x86)],_0x5491ea[_0x51e529(0x6e,0x286,0x390,-0x30d)]=mek,alpha[_0x36fbf5(0x8a6,0x7a2,0x992,0x92d)+'e'](from,_0x4aee6f,MessageType['audio'],_0x5491ea);});}),await limitAdd(sender,limit);}break;case _0x342471(0x1bd,0xa25,0x6e3,0xb84):case _0x342471(0x3c5,0x71a,0x443,0x95b):case'ttmp4':case _0x342471(0xae5,0x28c,0x609,0x137):{const _0x52de0d={};_0x52de0d[_0x342471(0x685,0x958,0xb65,0xed9)+'t']=_0x342471(0xd25,0xac6,0xb57,0x8d9)+'t';const _0x430495={};_0x430495[_0x342471(0xad3,0x7d8,0x913,0x611)]=_0x150c54(0x862,0x970,0xe24,0xa6d),_0x430495[_0x150c54(0x7e3,0xc64,0xe75,0xb98)]=_0x52de0d,_0x430495[_0x150c54(-0x35,0x219,0x219,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xf15,0xb0a,0x8e2,0xa6d)](prefix),'©\x20'+ownername,[_0x430495]);if(!q)return reply(_0x150c54(0x289,0xad,0x7d2,0x424));if(!isUrl(args[-0x4b4+0xa08+-0x554])&&!args[-0x32f*-0x5+0xf27+-0x1f12][_0x150c54(0xcc4,0x99b,0x1079,0xd23)](_0x150c54(0x9a6,0x3d3,0x62b,0x53c)))return reply(lang[_0x150c54(0x9cf,0x8c2,0x4dc,0x80f)]());reply(lang[_0x150c54(0xec5,0xb65,0xe9d,0xb89)]()),hx[_0x150c54(-0x28,0x8c1,0x1b3,0x425)+'er'](''+args[0x1264+0x3*-0x835+0x63b])['then'](_0x234c27=>{function _0x348284(_0x55bb97,_0x527486,_0xac7f74,_0x77808c){return _0x150c54(_0x55bb97-0x195,_0x77808c,_0xac7f74-0xee,_0x55bb97-0x111);}const _0x2c0fb0={'OzsVj':function(_0x33e84c,_0x2b86f5){return _0x33e84c(_0x2b86f5);}},{wm:_0x23d969,nowm:_0x5dc296,audio:_0x43c78d}=_0x234c27;function _0x5d6e47(_0x1aed86,_0x4250d2,_0x53a8b2,_0x4397f6){return _0x342471(_0x4250d2,_0x4250d2-0xbf,_0x53a8b2-0xb2,_0x4397f6-0x146);}axios['get'](_0x5d6e47(0x328,0x2c8,0x6f6,0x3da)+'nyurl.com/'+_0x348284(0xb41,0x716,0xa8a,0xaa2)+'.php?url='+_0x5dc296)[_0x348284(0x761,0x7d3,0xb98,0x867)](async _0x130458=>{function _0x449767(_0x455e29,_0x1f6248,_0x5494ab,_0x2da0ac){return _0x5d6e47(_0x455e29-0x1b,_0x1f6248,_0x5494ab- -0x4d1,_0x2da0ac-0x13);}function _0x2f93cd(_0x59dcff,_0x2b8d83,_0x36d16e,_0x343206){return _0x348284(_0x2b8d83- -0x2c7,_0x2b8d83-0x8e,_0x36d16e-0xea,_0x343206);}me=_0x2f93cd(0x5f0,0x398,-0xac,-0x91)+_0x130458['data'],nowmm=await _0x2c0fb0[_0x2f93cd(0x7c8,0x497,0x122,0x957)](getBuffer,_0x5dc296),alpha[_0x2f93cd(0x98e,0x953,0xcdf,0xcf5)+'e'](from,nowmm,MessageType[_0x2f93cd(0x55e,0x395,0x3f4,0x3e9)],{'caption':lang[_0x449767(-0x508,-0x4a,-0x124,-0x5ae)](),'mimetype':_0x449767(0xaca,0x773,0x612,0x8ec),'quoted':mek});});})[_0x342471(0xc73,0x63c,0x91c,0x899)](_0x582cde=>{function _0x5a0569(_0x150eb3,_0x1753e1,_0x1efc6d,_0x5705b9){return _0x150c54(_0x150eb3-0x69,_0x1753e1,_0x1efc6d-0x11,_0x5705b9- -0x92);}const _0x435778={'pTlJf':function(_0x301a3e,_0x401748){return _0x301a3e(_0x401748);}};function _0x2c14ef(_0x411067,_0x11888b,_0x5474b4,_0x582245){return _0x150c54(_0x411067-0xe,_0x5474b4,_0x5474b4-0x1c1,_0x411067- -0x219);}_0x435778[_0x5a0569(0x33c,0xdb,0x343,0x511)](reply,lang[_0x5a0569(0xc60,0xb13,0xd99,0x904)]());}),await limitAdd(sender,limit);}break;case'tiktokwm':{const _0x229599={};_0x229599['displayTex'+'t']=_0x342471(0xaf8,0x9f6,0xb57,0x682)+'t';const _0x10c55e={};_0x10c55e[_0x342471(0xb71,0x5da,0x913,0xb42)]='limit',_0x10c55e[_0x342471(0x6d2,0xf54,0xad5,0xabf)]=_0x229599,_0x10c55e[_0x150c54(0x90b,0xa4,0x4fd,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0xd69,0x8e6,0x9aa,0x74e)](prefix),'©\x20'+ownername,[_0x10c55e]);if(!isUrl(args[0x860+0x4a*-0x2f+0x2*0x29b])&&!args[-0xf4f+-0x1c9a*-0x1+-0xd4b]['includes'](_0x150c54(0x462,0x4af,0x466,0x53c)))return reply(lang[_0x150c54(0xacf,0x728,0x3a1,0x80f)]());if(!q)return reply('Linknya?');reply(lang[_0x342471(0xb1c,0x7cd,0xac6,0x6f6)]()),hx[_0x150c54(0x198,0x46b,0x8a2,0x425)+'er'](''+args[-0x6*-0x91+-0xa*-0x2ed+-0x20a8])[_0x342471(0x510,0x83f,0x58d,0x1fc)](_0x5a4e30=>{function _0xaac243(_0x1ef885,_0x4f9724,_0x41b6f5,_0x14ed68){return _0x342471(_0x14ed68,_0x4f9724-0x117,_0x1ef885- -0x370,_0x14ed68-0x1a5);}const _0x3aa648={'NmfAg':function(_0x1fc667,_0x19246b){return _0x1fc667(_0x19246b);}};function _0x5d14e4(_0x892540,_0x59809b,_0x9fceea,_0x239dd8){return _0x342471(_0x59809b,_0x59809b-0x18b,_0x239dd8- -0x19b,_0x239dd8-0x38);}const {wm:_0x39dfa1,nowm:_0xc0d3d7,audio:_0xe30b7e}=_0x5a4e30;axios[_0xaac243(0x775,0x7ef,0x546,0x5b0)]('https://ti'+_0xaac243(0x5fc,0x88b,0x8b7,0x651)+_0x5d14e4(0xa5d,0x449,0x343,0x7d2)+_0x5d14e4(0x206,0x216,-0x230,0x2af)+_0x39dfa1)[_0xaac243(0x21d,0xff,-0xf3,0x663)](async _0x1be496=>{function _0x28e39a(_0x32a41f,_0xae1dea,_0x1e4dee,_0x1c6ea9){return _0xaac243(_0x32a41f-0x3ef,_0xae1dea-0x157,_0x1e4dee-0xf6,_0x1c6ea9);}function _0x5cc777(_0x54e7e1,_0x20fb54,_0x4c6c89,_0x24d27d){return _0x5d14e4(_0x54e7e1-0x1ba,_0x4c6c89,_0x4c6c89-0xfd,_0x20fb54- -0x354);}me=_0x5cc777(0x127,-0x64,-0x1a,-0x434)+_0x1be496[_0x28e39a(0xaac,0x5d8,0xfdc,0xacf)],wmm=await _0x3aa648['NmfAg'](getBuffer,_0x39dfa1),alpha[_0x5cc777(0x4fb,0x557,0x7ee,0x156)+'e'](from,wmm,MessageType[_0x5cc777(-0x48b,-0x67,-0x1b,-0x12)],{'caption':lang[_0x28e39a(0x37a,-0x24,0x164,-0xd4)](),'mimetype':_0x5cc777(0x734,0x542,0x886,0x1e2),'quoted':mek});});})[_0x342471(0x8af,0xd13,0x91c,0x5d7)](_0x2ff8d3=>{const _0x5ad693={'hWKvW':function(_0x4ff880,_0x15da83){return _0x4ff880(_0x15da83);}};_0x5ad693[_0x9f7ff6(0x5b4,0xcc5,0xcb2,0x82d)](reply,lang[_0x9f7ff6(0x7d0,0x2b6,0x6f4,0x444)]());function _0x2a4e34(_0x1709cb,_0x23a990,_0x530c2a,_0xfd2783){return _0x342471(_0x530c2a,_0x23a990-0xbf,_0x1709cb- -0x38,_0xfd2783-0x47);}function _0x9f7ff6(_0x521b92,_0x2ba05e,_0x4217ef,_0x561756){return _0x342471(_0x4217ef,_0x2ba05e-0x165,_0x561756- -0x48f,_0x561756-0x158);}console[_0x2a4e34(0x30c,-0x1ae,0x7c5,0x2fa)](_0x2ff8d3);}),await limitAdd(sender,limit);}break;case _0x150c54(0xaa4,0x67c,0xd8f,0x879):{const nijRea=(_0x150c54(0x660,0x52,0x6f2,0x50b)+_0x150c54(0xa27,0x81e,0xc96,0x86f))[_0x342471(0x618,0xbfc,0xae2,0xb3d)]('|');let TsrUEq=-0x1*0x67+0x2549+-0x24e2;while(!![]){switch(nijRea[TsrUEq++]){case'0':if(args[_0x342471(0x655,-0x39,0x35c,0x46b)]<-0x97*-0x11+0x3*0x4d5+0x1885*-0x1)return reply(_0x150c54(0x456,0x12d,0x30a,0x596)+'ana?\x20');continue;case'1':teks=args[_0x342471(0x59b,0x7b6,0xa87,0xd25)]('\x20');continue;case'2':result=_0x342471(0x1029,0xdf5,0xccf,0xf87)+_0x342471(0x564,-0xf9,0x401,0x802)+_0x150c54(0x5ec,0x9cf,0x82f,0xaf6)+petik+_0x150c54(0x252,0x9c6,0x4aa,0x493)+petik+'\x20'+res[0x62e+0x2405*0x1+0x27*-0x115][_0x342471(0x8e9,0x5f2,0x850,0x5d0)]+'\x0a'+petik+_0x342471(0xb8d,0xcaf,0xadf,0x677)+petik+'\x20'+res[-0x2cc+-0xd9f*0x1+0x106b][_0x150c54(0xc5b,0x877,0x108c,0xc9a)]+'\x0a'+petik+'々\x20Size\x20:\x20'+petik+'\x20'+res[0xe3a+-0x1*-0x1006+-0xf2*0x20][_0x342471(0x50f,0xcb1,0x880,0x5e7)]+(_0x342471(0x989,0xef2,0xc1f,0xa64)+_0x150c54(0x561,0xb5d,0x9ee,0x7c8)+_0x150c54(0x5b6,0x2a4,-0x57,0x4cc));continue;case'3':const _0x2de2f3={};_0x2de2f3[_0x150c54(0x8b2,0xaee,0xd71,0xc28)+'t']='Upgrade\x20Pr'+_0x342471(0x8b0,0xfa9,0xc7d,0x9f8);const _0x2c150a={};_0x2c150a[_0x342471(0x3ef,0x492,0x913,0xb31)]=_0x150c54(0x66f,0x312,0x16,0x50e),_0x2c150a[_0x342471(0xb9a,0xec5,0xad5,0x9c1)]=_0x2de2f3,_0x2c150a['type']=0x1;const _0x24981d={};_0x24981d[_0x342471(0x868,0x4c5,0x3fa,0x42e)]=mek;if(!isPremium)return sendButMessage(from,_0x150c54(0x541,0x700,0xc74,0x8c8)+_0x150c54(0x80e,0x2c0,0x120,0x559)+'\x20khusus\x20un'+_0x342471(0x773,0x1051,0xbbe,0xa15)+_0x342471(0x66f,0x455,0x49d,0x25a)+_0x150c54(0x7c1,0x317,0xfe,0x4b4)+_0x150c54(0x8f,0x6d8,0x8a9,0x3f0)+'ekarang\x20de'+_0x150c54(0xddc,0x8d3,0xbba,0x960)+_0x342471(0xda2,0x1112,0xc3c,0xfa9)+prefix+_0x342471(0x21c,0x1bb,0x44b,0x218),_0x342471(0xe82,0x7d9,0xcb5,0xa74)+'on\x20below',[_0x2c150a],_0x24981d);continue;case'4':const _0x167fc6={};_0x167fc6[_0x342471(0x406,0xfe,0x46f,0x25c)]=res[-0xd5f+-0x4*0x7f7+0x2d3b][_0x150c54(0xd93,0x125b,0x1051,0xe18)],_0x167fc6['filename']=res[0x15fb*0x1+-0x1832+0x237]['nama'],_0x167fc6[_0x150c54(0x315,-0x7b,0x9a6,0x4bd)]=mek,alpha['sendMessag'+'e'](from,mdf,MessageType[_0x150c54(0xab3,0xfcb,0xf7d,0xdfa)],_0x167fc6);continue;case'5':reply(lang[_0x150c54(0xe74,0xd39,0xfdc,0xb89)]());continue;case'6':res=await mediafireDl(teks);continue;case'7':if(!isUrl(args[-0x10a5+-0x201e+-0x1*-0x30c3])&&!args[-0x61*0x2c+-0x589*-0x1+0x1*0xb23][_0x342471(0x875,0x888,0xc60,0x93d)](_0x150c54(0xcc4,0xa80,0x865,0x879)))return reply(_0x150c54(0xd52,0x54b,0xe1b,0x9f6)+_0x342471(0x3ea,0x8e5,0x67b,0x47f)+_0x150c54(0xd19,0xccf,0x3be,0x852));continue;case'8':await reply(result);continue;case'9':mdf=await getBuffer(res[-0x2640+0x2375+0x5*0x8f][_0x150c54(0x104f,0xf8f,0xf6c,0xc9a)]);continue;}break;}}break;case _0x150c54(0xa95,0x976,0x638,0xa89):case _0x342471(0xe6d,0xca9,0xbdb,0xa4e):case _0x150c54(0x2f7,0x72c,0x3b5,0x7e5):case _0x342471(0xb3d,0xb4d,0xb07,0xff1)+_0x342471(0x1f0,0x80b,0x354,0x6dd):{const _0x2e2dfa={};_0x2e2dfa[_0x342471(0xce1,0x662,0xb65,0x1052)+'t']='Check\x20Limi'+'t';const _0x54d916={};_0x54d916[_0x150c54(0xefc,0x6ef,0x905,0x9d6)]=_0x150c54(0x67e,0x6c5,0xe93,0xa6d),_0x54d916[_0x342471(0xc3c,0xfb7,0xad5,0xcb8)]=_0x2e2dfa,_0x54d916['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x54d916]);if(args[_0x150c54(0x2bb,-0xa,0x591,0x41f)]===-0x215c+0x2472+-0x5*0x9e)return reply(_0x150c54(0x820,0x96f,0xbd1,0x8e3)+_0x150c54(0x26a,0x560,0x802,0x770)+prefix+('ytmp4\x20[lin'+_0x150c54(0x13b,0x61f,0xa36,0x5e5)));let isLinks2=args[0x2*-0x93b+0x20c*-0x8+0x22d6][_0x150c54(0x569,0x7fe,0x8c7,0x644)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks2)return reply(mess['error']['Iv']);try{pp_userb=await alpha['getProfile'+_0x150c54(0xafc,0xc63,0x681,0xa85)](sender);}catch{pp_userb=_0x342471(0x98a,0x7cf,0xac5,0x6cb)+_0x342471(-0x199,-0x11f,0x37a,0x354)+'VF3r/5012f'+_0x342471(0x60e,0x5a0,0x47d,0x7c4)+'g';}let pp_userz=await getBuffer(pp_userb);function ytMp4(_0x2c2c08){function _0x114f26(_0x30aa11,_0xe45013,_0x14fe59,_0x344552){return _0x150c54(_0x30aa11-0x4e,_0x14fe59,_0x14fe59-0x168,_0xe45013- -0x4f);}const _0x315def={'nSSOG':function(_0x1acf03,_0xcf0af0){return _0x1acf03(_0xcf0af0);},'KXVHV':_0x114f26(0x7a3,0xc33,0xea2,0x805)+'2','AzSvM':function(_0x370ad2,_0x5a5791){return _0x370ad2(_0x5a5791);},'RJCrQ':_0x11c2b4(0x716,0x80f,0x7d2,0x38a)+_0x114f26(0x9f5,0x72d,0xb30,0x288),'ASyIa':'header\x20>\x20d'+_0x114f26(0x66e,0x374,-0x109,0x87b)+_0x114f26(0xafc,0x802,0x5da,0x3cd)+'e\x20>\x20span\x20>'+'\x20span','Avusw':_0x114f26(0x9d8,0x964,0x9e5,0x85b),'VbEXv':'header\x20>\x20d'+_0x11c2b4(-0x161,0x4bc,0x280,0x3e2)+_0x114f26(0x9c2,0xb32,0xd6c,0xe95)+'\x20>\x20p\x20>\x20spa'+'n.entry-vi'+_0x11c2b4(-0x15b,0x4ae,0x398,0x85d),'vQhSW':function(_0x5209db,_0x3c7808){return _0x5209db(_0x3c7808);},'Rrphb':_0x114f26(0x1da,0x3e2,0x5f6,-0x74),'dkDdv':_0x11c2b4(-0x4d,-0x208,0x47,0x166),'VshpT':'data-src','AbNjL':_0x11c2b4(0xda7,0x913,0x96a,0xbe5),'ERLdB':function(_0x11ae84,_0x3ae455){return _0x11ae84===_0x3ae455;},'VcJCw':_0x11c2b4(0x8c,0x2bc,0x10e,-0x175),'PSsJo':function(_0x3b3403,_0x8ae209){return _0x3b3403<_0x8ae209;},'UeGiH':function(_0x286bc9,_0x34a75c){return _0x286bc9==_0x34a75c;},'THNKS':_0x11c2b4(-0x229,-0x52,0xaa,0x4a4),'xCIzB':function(_0x13b49c,_0x5639f3){return _0x13b49c==_0x5639f3;},'rCliG':function(_0x563bf6,_0x141e32){return _0x563bf6==_0x141e32;}};function _0x11c2b4(_0x52a1d1,_0x85f120,_0x140a35,_0x3ef40d){return _0x342471(_0x52a1d1,_0x85f120-0xab,_0x140a35- -0x3ed,_0x3ef40d-0x103);}return new Promise(async(_0x3537d3,_0x1b28fa)=>{function _0x402ff2(_0x439e31,_0x1dd5cd,_0x4c971e,_0x299425){return _0x11c2b4(_0x439e31,_0x1dd5cd-0x145,_0x299425-0x387,_0x299425-0x7c);}function _0x3cb302(_0x422d40,_0x2314c6,_0x303a00,_0x3208d8){return _0x11c2b4(_0x3208d8,_0x2314c6-0x1a8,_0x422d40-0x31d,_0x3208d8-0x15f);}ytdl[_0x3cb302(0x31f,0x514,0x835,0x694)](_0x2c2c08)[_0x3cb302(0x4bd,0x767,0x8ae,0x7d)](async _0x555c1e=>{function _0x26219f(_0xba372f,_0x2381ac,_0x5e9408,_0x375c88){return _0x3cb302(_0xba372f- -0x2b1,_0x2381ac-0x14,_0x5e9408-0x126,_0x375c88);}function _0x1e67b8(_0x31a355,_0x2cb597,_0x135a26,_0x193562){return _0x3cb302(_0x31a355- -0x180,_0x2cb597-0x74,_0x135a26-0xbc,_0x2cb597);}const _0x247be3={'xKThT':function(_0x17b4ca,_0x1a0798){return _0x315def['nSSOG'](_0x17b4ca,_0x1a0798);},'GnWWD':_0x315def['KXVHV'],'yYCoO':function(_0x5959da,_0x4709f0){function _0x12d2d3(_0x5ab92f,_0x12e4e0,_0x4e0289,_0x362d9b){return _0x2507(_0x5ab92f- -0x46,_0x4e0289);}return _0x315def[_0x12d2d3(0x8ee,0x3b9,0xa97,0x485)](_0x5959da,_0x4709f0);},'kyPGL':_0x315def[_0x26219f(0x7ee,0x3dd,0x3a9,0x610)],'lIzLC':_0x315def['ASyIa'],'aGJgS':_0x315def[_0x1e67b8(0xab7,0x5ed,0x6a2,0x9ad)],'hbCai':_0x315def[_0x1e67b8(0x736,0x8ea,0x5c8,0x7d6)],'jFAPS':function(_0x32fe9a,_0xc3d9aa){function _0x41c58d(_0x182893,_0xebe52e,_0x4388b9,_0x43244f){return _0x1e67b8(_0x182893-0x336,_0x4388b9,_0x4388b9-0xbb,_0x43244f-0x123);}return _0x315def[_0x41c58d(0x713,0x227,0x9cc,0x787)](_0x32fe9a,_0xc3d9aa);},'wVShP':_0x1e67b8(0x1d8,0xd0,0x446,0x551),'nHLDz':_0x315def['Rrphb'],'BtDMz':function(_0x5e5e0e,_0x11c798){function _0xe76cd8(_0x25c053,_0x10180b,_0x7db551,_0x57e155){return _0x1e67b8(_0x25c053-0x30b,_0x10180b,_0x7db551-0xb0,_0x57e155-0x25);}return _0x315def[_0xe76cd8(0xb21,0xa56,0x62c,0x839)](_0x5e5e0e,_0x11c798);},'gWfuO':_0x26219f(0x5cf,0x169,0x2df,0x1f6),'DhICJ':function(_0x4494f0,_0x3620a8){return _0x4494f0(_0x3620a8);},'IoLis':_0x315def[_0x26219f(0x39d,0x238,0x21b,0x20b)],'jJpQb':_0x315def[_0x26219f(0x1c0,0x5c6,0x642,0x1ab)],'QVsaI':function(_0x6b4373,_0x22462e){function _0x3f5372(_0x56abbd,_0x29401,_0x244f79,_0x9a7fb0){return _0x26219f(_0x244f79-0x2a3,_0x29401-0x114,_0x244f79-0x149,_0x56abbd);}return _0x315def[_0x3f5372(0x999,0xc9,0x54f,0x68f)](_0x6b4373,_0x22462e);},'UVCXG':_0x315def[_0x1e67b8(0x459,0x672,0x56a,0x50b)]};if(_0x315def[_0x1e67b8(0x3d8,0x5,0x82,0x620)](_0x315def[_0x26219f(0x6d7,0x3a6,0x64f,0xb21)],_0x26219f(0x1f3,0x2bd,0x64f,0x90)))_0x2564b0['push']({'title':_0x247be3[_0x26219f(0xc4,-0x27,0x4e0,0x35f)](_0x9c8b1a,_0x124fdc)[_0x1e67b8(0x262,0x750,0x29c,0x491)](_0x247be3[_0x26219f(0x35e,0x631,0xf,0x558)])[_0x26219f(0x6ce,0x946,0x30a,0x4ec)](),'link':_0x247be3[_0x26219f(0xe9,0x583,-0x1d2,-0x20c)](_0x384962,_0x5a9386)[_0x1e67b8(0x262,0xfe,0xe3,0x2ba)](_0x247be3[_0x1e67b8(0x9d5,0x701,0x87f,0x9ae)])[_0x26219f(0x420,0x226,0x208,-0x4c)]('href'),'category':_0x271677(_0x255b1d)['find'](_0x247be3['lIzLC'])[_0x1e67b8(0x7ff,0x58e,0x540,0xb02)]()[_0x26219f(0x174,0xd0,0xc8,-0x23a)](_0x247be3[_0x1e67b8(0x79b,0x556,0xb85,0xa68)],''),'share_count':_0x247be3[_0x1e67b8(0x1f5,-0x8,0x1ac,-0xaa)](_0x68b1a4,_0x2cc2c7)['find']('header\x20>\x20d'+_0x1e67b8(0x41d,0x55,0x7bf,0x672)+_0x26219f(0x73d,0x3dd,0x27d,0x5e1)+_0x26219f(0x87f,0x976,0x7d6,0x824)+_0x1e67b8(0x5ee,0xe6,0x64a,0x19b)+_0x1e67b8(0x8e4,0x6fe,0xa66,0x936))[_0x26219f(0x6ce,0xbd2,0xa32,0x870)](),'views_count':_0x207fc0(_0x449b36)[_0x1e67b8(0x262,0x180,0x45d,0x469)](_0x247be3['hbCai'])['text'](),'type':_0x247be3['jFAPS'](_0x250d89,_0xc82ae)[_0x26219f(0x131,0xa7,0x1f5,0x31f)](_0x247be3[_0x26219f(0x3a7,-0x62,0x55d,0x572)])[_0x26219f(0x420,0x18,0x5bb,-0xed)](_0x247be3[_0x1e67b8(0x8b8,0xaf0,0x58f,0x878)])||_0x1e67b8(0x2e6,0x5ee,0x315,0x697),'video_1':_0x247be3[_0x26219f(0xbc,0x222,-0xa3,-0x2a6)](_0xfc66f6,_0x27637e)[_0x1e67b8(0x262,0x10f,-0x25c,-0x61)](_0x247be3['wVShP'])['attr'](_0x247be3['gWfuO'])||_0x247be3[_0x26219f(0x3e8,0x841,0x665,-0x56)](_0x2f2cb8,_0x473787)['find'](_0x247be3['IoLis'])[_0x26219f(0x420,0x6fe,-0x1a,0x6be)](_0x247be3[_0x1e67b8(0x78b,0x4f2,0x51d,0xa46)]),'video_2':_0x247be3[_0x26219f(0x722,0x306,0x867,0xbfb)](_0x134c7c,_0x27c18b)[_0x26219f(0x131,-0x264,-0x234,-0x202)](_0x26219f(0xb6,-0xe6,-0x25b,0x50a))[_0x26219f(0x420,0x32c,-0x102,0xdb)](_0x247be3[_0x1e67b8(0x421,0x3cc,0x86d,0x866)])||''});else{let _0x57d485=[];for(let _0x17cf53=0x2386*0x1+0x5f5*0x2+0xb*-0x450;_0x315def['PSsJo'](_0x17cf53,_0x555c1e[_0x1e67b8(0xaa6,0xebc,0x9e8,0xbc7)][_0x1e67b8(0x10c,0x145,-0x32c,-0x2c9)]);_0x17cf53++){let _0x3e7cf4=_0x555c1e[_0x1e67b8(0xaa6,0xa79,0xea3,0xf2e)][_0x17cf53];if(_0x315def[_0x26219f(0x80e,0xbec,0x602,0x5de)](_0x3e7cf4[_0x1e67b8(0x9f5,0xd31,0xd65,0xd8a)],_0x315def[_0x1e67b8(0x924,0xc16,0xccb,0x933)])&&_0x315def[_0x26219f(0x37d,-0x55,0x50d,0x7ee)](_0x3e7cf4[_0x1e67b8(0x605,0x5ad,0x361,0x743)],!![])&&_0x315def[_0x26219f(0x89d,0xbb0,0xa83,0x7c9)](_0x3e7cf4[_0x26219f(0x258,0x5f2,-0x1eb,-0x207)],!![])){let {qualityLabel:_0x57d875,contentLength:_0x245d69}=_0x3e7cf4,_0xdf66fe=await bytesToSize(_0x245d69);const _0x1261f8={};_0x1261f8[_0x26219f(0x107,0x57c,-0x3d7,0x480)]=_0x3e7cf4[_0x1e67b8(0x166,0x40d,-0x179,-0x34a)],_0x1261f8[_0x1e67b8(0x4a9,0x4e0,-0x86,0x4f3)]=_0x57d875,_0x1261f8[_0x26219f(0x4ff,0x728,0x7d0,0x2b0)]=_0xdf66fe,_0x57d485[_0x17cf53]=_0x1261f8;};};let _0x2cfa3c=_0x57d485[_0x26219f(0x4c6,0x895,0x268,-0x1b)](_0x319651=>_0x319651['video']!=undefined&&_0x319651[_0x1e67b8(0x630,0xb33,0xb17,0x875)]!=undefined&&_0x319651['quality']!=undefined),_0x5bd75c=await axios[_0x26219f(0x764,0x7a3,0x653,0x55f)]('https://ti'+'nyurl.com/'+_0x1e67b8(0x71d,0xab1,0x742,0x270)+_0x1e67b8(0x1fa,0x1c8,-0xc2,0x481)+_0x2cfa3c[-0x3*0x4f+-0x1*-0x157d+0x178*-0xe]['video']),_0x8083c9=_0x5bd75c[_0x1e67b8(0x7dd,0xa09,0x531,0xc8a)],_0x1b6964=_0x555c1e[_0x1e67b8(0xf2,0x5e9,0x3aa,-0x277)+'ls'][_0x26219f(0x43e,0x231,0x22b,0x1e5)],_0x1a6fe6=_0x555c1e['videoDetai'+'ls'][_0x26219f(0x40a,-0xa4,0x7ad,0x6ae)+'n'],_0x23809f=_0x555c1e['videoDetai'+'ls'][_0x26219f(0x524,0x44,0x202,0x4b)],_0x58f0a7=_0x555c1e[_0x1e67b8(0xf2,-0x3ee,0x1ff,0x545)+'ls']['likes'],_0x51fab9=_0x555c1e[_0x1e67b8(0xf2,0x155,-0x280,0x372)+'ls']['dislikes'],_0x12642a=_0x555c1e['videoDetai'+'ls'][_0x26219f(0x20a,-0x31f,-0x24,0xd8)+_0x1e67b8(0x6eb,0x40f,0x5e1,0x9cf)],_0x468a37=_0x555c1e[_0x1e67b8(0xf2,0x338,0x2e6,0x482)+'ls'][_0x1e67b8(0xa0,0x2fb,-0x310,-0x5a)],_0x8d9bde=_0x555c1e[_0x1e67b8(0x3d9,0x6e3,0x8f4,0x5ee)+_0x26219f(0x5ac,0x821,0x2a9,0x5d7)][_0x26219f(0x988,0xa05,0xcb6,0x56e)+'t'][_0x26219f(0x1d5,0x4b5,-0xd,-0x194)+_0x1e67b8(0x832,0xc94,0x709,0xbb5)+_0x26219f(0x106,0x1c1,0x3d5,0x87)]['thumbnail'][_0x1e67b8(0xae1,0x9bd,0x959,0x74d)][-0x59e*-0x6+0x10*-0xb+-0x2*0x1082][_0x26219f(0x35,0x45c,-0x2e,-0x2f1)];const _0x7cb52b={};_0x7cb52b['title']=_0x1b6964,_0x7cb52b[_0x1e67b8(0x9de,0xa3d,0x63a,0xa35)]=_0x8083c9,_0x7cb52b[_0x26219f(0x378,0x102,-0x72,0x39)]=_0x2cfa3c[-0x11*0x1db+-0x174c+0x36d7][_0x1e67b8(0x4a9,0x4fa,0x2db,0x78a)],_0x7cb52b[_0x1e67b8(0x630,0x9f8,0x4d9,0x656)]=_0x2cfa3c[-0x161*0x10+0x1*0x1ca7+-0x697][_0x26219f(0x4ff,0x20e,0x64c,0x108)],_0x7cb52b['thumb']=_0x8d9bde,_0x7cb52b[_0x26219f(0x1d1,0x58a,0x417,-0x28f)]=_0x23809f,_0x7cb52b['likes']=_0x58f0a7,_0x7cb52b[_0x1e67b8(0x131,0x8d,0x4f,-0x51)]=_0x51fab9,_0x7cb52b['channel']=_0x12642a,_0x7cb52b[_0x1e67b8(0xa0,-0x115,-0x1c2,-0x3fb)]=_0x468a37,_0x7cb52b[_0x1e67b8(0x46c,0xa,0x5e7,0x891)]=_0x1a6fe6,_0x3537d3(_0x7cb52b);}})[_0x402ff2(0x6d4,0xc08,0xcaf,0x8b6)](_0x1b28fa);});};let yut=await yts(args[-0x19b7*-0x1+-0x647*0x5+0x5ac]);reply(lang[_0x150c54(0xd91,0xb8a,0xa69,0xb89)]()),ytMp4(args[0x335+-0x26e1+0x5f2*0x6])[_0x342471(0x102,0x493,0x58d,0x894)](_0x118cf2=>{const _0x1b5088={'HTbaL':function(_0xd5893f,_0xbc780e){return _0xd5893f===_0xbc780e;},'rCZiK':_0x5da7be(0xd87,0xb7b,0xa79,0x751),'NeGIk':'qOZJL','JWhSy':function(_0x103cc9,_0x59dd9e){return _0x103cc9>=_0x59dd9e;},'Giltn':function(_0x1cd463,_0xddd562){return _0x1cd463(_0xddd562);},'XDVws':_0x44cd03(0x1d3,0xeb,0x271,0x43b),'MqOqs':function(_0x4f8a0f,_0x50714c,_0x9029bc,_0x5b8dff){return _0x4f8a0f(_0x50714c,_0x9029bc,_0x5b8dff);},'VGetL':_0x44cd03(0x44a,0x9f7,0x7c9,0x5be),'RwQyx':'RESPONSE','yPTBM':function(_0x1fa695,_0x3ea871,_0x3ac85a,_0x10f263,_0x598e40,_0x4c0c72,_0x4ea993){return _0x1fa695(_0x3ea871,_0x3ac85a,_0x10f263,_0x598e40,_0x4c0c72,_0x4ea993);},'Tfonq':_0x44cd03(0x604,0xc18,0x60d,0x76c)};function _0x44cd03(_0x1151dc,_0x40b345,_0xac3579,_0x4d6e2d){return _0x342471(_0xac3579,_0x40b345-0x11f,_0x4d6e2d- -0x2c5,_0x4d6e2d-0x0);}function _0x5da7be(_0x2c4267,_0x64448f,_0x4b0cfa,_0x444e29){return _0x150c54(_0x2c4267-0xe,_0x4b0cfa,_0x4b0cfa-0x178,_0x64448f- -0x40);}const {title:_0x1d36f9,result:_0x308c00,quality:_0x4a942a,size:_0xf94a74,thumb:_0x320efe,views:_0xda5f95,likes:_0x1a9241,dislike:_0x33a45a,channel:_0x5f0f60,uploadDate:_0x59d7b0,desc:_0xe0e291}=_0x118cf2;axios[_0x5da7be(0xd57,0xb68,0xfbd,0xb1e)](_0x44cd03(-0x1d,0x55f,0x561,0x37f)+_0x44cd03(0x8e5,0xb6e,0x368,0x6a7)+_0x5da7be(0x7e5,0x9f0,0x76b,0x638)+_0x44cd03(-0x2cc,-0x20d,0x117,0x185)+q)[_0x5da7be(0x796,0x610,0x69c,0x38a)](async _0x19b496=>{function _0x90e26f(_0x2521d3,_0x4da45d,_0x542747,_0x3ebd9a){return _0x5da7be(_0x2521d3-0x123,_0x4da45d- -0x104,_0x542747,_0x3ebd9a-0x104);}function _0x1aeb0d(_0x4759cb,_0x584113,_0x4fefaf,_0x3b1b0b){return _0x44cd03(_0x4759cb-0x163,_0x584113-0x1a7,_0x3b1b0b,_0x4fefaf- -0x248);}if(_0x1b5088[_0x1aeb0d(0x43c,0x38b,0x766,0x573)](_0x1b5088[_0x90e26f(0x730,0x90a,0x6dd,0xcf0)],_0x1b5088[_0x90e26f(0xb05,0x906,0x451,0x7ab)]))_0x5dd830[_0x1aeb0d(0x332,0x68b,0x539,0x9a1)+'e'](_0x1258a3,_0x47cae8,_0x40b849,{'quoted':_0x581775,'contextInfo':{'externalAdReply':{'title':''+_0x2d7981,'body':''+_0x5059f9,'previewType':_0x90e26f(0xce3,0xc47,0xc4e,0x10ce),'thumbnailUrl':'','thumbnail':_0x3b4199[_0x90e26f(0x470,0x350,0x4c0,0x21f)+'nc'](_0x90e26f(0xa36,0x908,0x84e,0xc13)+_0x84e4f),'sourceUrl':''+_0x4e4ca4}}});else{if(_0x1b5088[_0x1aeb0d(0x183,-0x3ac,0x13b,0x1c0)](_0x1b5088['Giltn'](Number,_0xf94a74[_0x1aeb0d(0x4c3,0x249,-0x18,-0x3fc)](_0x1b5088[_0x1aeb0d(0x6f2,0x9f5,0x758,0x426)],'')),0x4*-0x38f+-0x5f7*0x1+0x1*0x146f))return _0x1b5088[_0x1aeb0d(-0x2fc,-0x13b,0x129,0xb5)](sendMediaURL,from,_0x320efe,_0x90e26f(0x303,0x67e,0x576,0x49f)+'TUBE\x20AUDIO'+'\x20」----*'+enter+enter+(_0x90e26f(-0x1a5,0x2eb,0x4fd,0x3bb)+'*\x20')+_0x1d36f9+('\x0a*🚀\x20Qualit'+_0x90e26f(0x699,0x992,0xd88,0xa57))+_0x4a942a+(_0x90e26f(0xac8,0x819,0x7a1,0x467)+'*\x20')+_0xf94a74+(_0x1aeb0d(-0x2ba,0x2db,-0x54,-0x1b0)+':*\x20')+_0xda5f95+(_0x90e26f(0x11d8,0xccc,0xdc6,0x101f)+_0x1aeb0d(-0xf3,-0x490,0x62,0x562))+_0x1a9241+(_0x90e26f(0x2a9,0x3a5,0x550,0x81a)+_0x1aeb0d(0x10c,0x3fb,0x41a,0x62b))+_0x33a45a+(_0x1aeb0d(0x2a1,-0x630,-0x120,0x223)+_0x1aeb0d(0x6c4,0x559,0x42d,0xee))+_0x5f0f60+(_0x90e26f(0x8b,0x45c,-0x68,0xe0)+'\x20:*\x20')+_0x59d7b0+_0x1aeb0d(-0x24a,0x417,-0xb,-0x11b)+_0x308c00+enter+enter+(_0x90e26f(0x6ab,0x347,0x5fe,0x2bd)+_0x1aeb0d(0x725,0x1af,0x24e,0x2ef)+_0x90e26f(0xfad,0xb4e,0xeae,0x81b)+_0x90e26f(0x2fd,0x37b,-0x84,0x2c)+'\x20dalam\x20ben'+'tuk\x20link_'));const _0xf3a110=_0x1aeb0d(0x639,0x6dc,0x1f2,0x121)+_0x90e26f(0x449,0x630,0x4e4,0x29a)+_0x1aeb0d(0xf9,0x79,0x132,-0x126)+_0x90e26f(0x6ee,0x5c4,0x138,0x5d5)+_0x90e26f(0x7c5,0x790,0xbcb,0x85c)+_0x1d36f9+('\x0a*🚀\x20Qualit'+_0x90e26f(0xc4d,0x992,0xe78,0xd3b))+_0x4a942a+(_0x1aeb0d(0x6e,-0x6d,0x38d,-0xa5)+'*\x20')+_0xf94a74+(_0x1aeb0d(-0x4be,-0x4bb,-0x54,-0x2ff)+_0x90e26f(0x60f,0x4ee,0x91,0x3f1))+_0xda5f95+('\x0a*👍\x20Likes\x20'+_0x90e26f(0x743,0x4ee,0x9fc,0x5a4))+_0x1a9241+('\x0a*👎\x20Dislik'+_0x1aeb0d(0x463,0x2e0,0x41a,0xce))+_0x33a45a+('\x0a*😎\x20Channe'+_0x1aeb0d(0x72c,0x5f8,0x42d,-0x71))+_0x5f0f60+(_0x90e26f(0x98c,0x45c,0x56,0x80b)+_0x1aeb0d(0x7a7,0x34c,0x556,0x40d))+_0x59d7b0+(_0x1aeb0d(0x3a0,0x4c8,0x811,0x3b7)+'\x20')+q+('\x0a\x0a_Tunggu\x20'+_0x1aeb0d(0x588,0x36c,0x283,0xab)+'edia\x20sedan'+_0x90e26f(0x4b1,0x2aa,0xf5,0x30a));let _0x3feac1=await getBuffer(_0x320efe);const _0x10bdab={};_0x10bdab[_0x1aeb0d(0x971,0x1c8,0x658,0x6e7)+'t']=_0x1b5088['VGetL'];const _0x42c3f6={};_0x42c3f6[_0x1aeb0d(0x6ec,0x369,0x406,0x3c1)]=_0x1aeb0d(-0x2f3,0x27b,0xb3,0x1fc),_0x42c3f6[_0x1aeb0d(0x185,0x8a1,0x5c8,0x6b7)]=_0x10bdab,_0x42c3f6[_0x1aeb0d(-0x3e8,-0x3f5,-0x19f,-0x3e7)]=_0x1b5088[_0x1aeb0d(0x1ec,0x1c6,-0xee,-0x193)];let _0x46e18f=[_0x42c3f6];await _0x1b5088['yPTBM'](sendButLocation,from,_0xf3a110,'©\x20'+ownername,_0x3feac1,_0x46e18f,{});let _0x22d075=await _0x1b5088[_0x90e26f(0x9f9,0x7e2,0x368,0xa2e)](getBuffer,_0x308c00);alpha[_0x90e26f(0x835,0x9c5,0x6bf,0xa8c)+'e'](from,_0x22d075,MessageType['video'],{'caption':lang['success'](),'mimetype':_0x1b5088['Tfonq'],'quoted':mek});}});})[_0x150c54(0xe8a,0x8de,0x537,0x9df)](_0x21a780=>{function _0x50dfa0(_0x599481,_0x162897,_0x323d3f,_0x25fdc4){return _0x342471(_0x162897,_0x162897-0x139,_0x25fdc4-0x7a,_0x25fdc4-0x1dc);}reply(_0x50dfa0(0x771,0xbe3,0xcd7,0x890)+'or');}),await limitAdd(sender,limit);}break;case'playmp4':case _0x342471(0xce,0x75e,0x488,0x234):{const _0x3f5099={};_0x3f5099[_0x342471(0xcba,0xe37,0xb65,0xca6)+'t']=_0x342471(0xb99,0xb4a,0xb57,0xb2d)+'t';const _0x54637b={};_0x54637b['buttonId']=_0x342471(0x50d,0x4d2,0x9aa,0xd91),_0x54637b[_0x342471(0xc57,0x727,0xad5,0x685)]=_0x3f5099,_0x54637b[_0x150c54(0x883,0x225,0x2a4,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0x7a4,0x9f1,0x9aa,0xd76)](prefix),'©\x20'+ownername,[_0x54637b]);if(args['length']===0x10*-0x61+0x2559+0x1*-0x1f49)return reply(_0x150c54(0x762,0xca5,0x7d4,0x8e3)+_0x342471(0x8d9,0x21e,0x6ad,0x864)+prefix+(_0x342471(0x2b6,0x25d,0x6dc,0x5b9)+_0x342471(0xc6f,0xb70,0xcdc,0xf14)+_0x342471(0x8d8,0x5df,0x70a,0x337)+_0x150c54(0x8db,0xd7c,0xc95,0x897)));var srch=args[_0x150c54(0x942,0x952,0xb76,0xb4a)]('');aramas=await yts(srch),server=_0x342471(0xc0a,0xa50,0x747,0x3dd),aramat=aramas[_0x150c54(0x7c9,0xdbd,0x519,0x91b)];var mulaikah=aramat[0x31*-0x49+-0x1*0x20df+0x2ed8][_0x150c54(0x2a,0x2ec,0x681,0x479)];function ytMp4(_0x35a537){const _0x1a92f0={'qsqbK':function(_0x577599,_0x34f307){return _0x577599!==_0x34f307;},'CWQjF':'ZajXR','ybAgn':function(_0x5120f0,_0x294e5c){return _0x5120f0<_0x294e5c;},'QyPBP':_0xf18a38(0x5e2,0x37d,-0x293,0x186),'ofUbq':function(_0x42a109,_0x15e40a){return _0x42a109(_0x15e40a);}};function _0xf18a38(_0x4c09ae,_0x44be5d,_0x57bf26,_0x26f1c4){return _0x150c54(_0x4c09ae-0x68,_0x4c09ae,_0x57bf26-0x18,_0x26f1c4- -0x3d4);}return new Promise(async(_0x3676c9,_0x14aca1)=>{function _0x1b5d80(_0x486f29,_0x14cdb3,_0x20cab7,_0x1cfc09){return _0xf18a38(_0x1cfc09,_0x14cdb3-0x1cf,_0x20cab7-0x124,_0x20cab7-0x121);}function _0x15ec4b(_0x205087,_0x37a045,_0x39afa9,_0x231185){return _0xf18a38(_0x39afa9,_0x37a045-0x2f,_0x39afa9-0x1dc,_0x37a045- -0x187);}const _0x12c9c3={'hFwUH':function(_0x1fd6fb,_0x5d812d){function _0x29ebe9(_0x2ac74c,_0xf81ea7,_0x57d303,_0x4dadc2){return _0x2507(_0x57d303-0x134,_0xf81ea7);}return _0x1a92f0[_0x29ebe9(0x789,0xb87,0xc33,0x8e3)](_0x1fd6fb,_0x5d812d);},'DXymK':_0x1a92f0[_0x1b5d80(-0xfd,0x362,0x34b,0x10f)],'VuAYi':function(_0x2697a3,_0x6a9def){function _0x1583e0(_0x4fd311,_0xde0ced,_0x54df86,_0x5209c0){return _0x1b5d80(_0x4fd311-0x18f,_0xde0ced-0x1ef,_0x54df86-0x3e0,_0x4fd311);}return _0x1a92f0[_0x1583e0(0x611,0x7dd,0x86a,0x6cc)](_0x2697a3,_0x6a9def);},'yLqKH':_0x1a92f0[_0x1b5d80(0xd0,-0x91,0x45d,0x5d6)],'DyTGe':function(_0x531a20,_0x37b3b4){return _0x531a20(_0x37b3b4);},'foGDI':function(_0x579547,_0x159a69){return _0x1a92f0['ofUbq'](_0x579547,_0x159a69);}};ytdl[_0x15ec4b(0x4e,-0xa9,0x105,-0x270)](_0x35a537)[_0x1b5d80(0x114,0x7b0,0x39d,0x4d8)](async _0x491efb=>{function _0x2e5940(_0x36bdc2,_0x1b54ef,_0x1327ba,_0x318142){return _0x1b5d80(_0x36bdc2-0x12a,_0x1b54ef-0x1db,_0x318142-0x23,_0x1b54ef);}function _0xc3d0f(_0x4f4f97,_0x202a79,_0x513c69,_0x591f5e){return _0x1b5d80(_0x4f4f97-0x73,_0x202a79-0x95,_0x591f5e-0x194,_0x513c69);}if(_0x12c9c3[_0x2e5940(0xd4,0xa7c,0x43b,0x547)](_0x2e5940(0x640,0xa54,0x76a,0x6f1),_0x12c9c3['DXymK'])){let _0x256c5e=[];for(let _0x2b7d96=0x1*-0x9f5+0xa9d+-0xa8;_0x12c9c3[_0x2e5940(-0x2da,-0x240,0x4b6,0x237)](_0x2b7d96,_0x491efb['formats']['length']);_0x2b7d96++){let _0x4913ef=_0x491efb[_0x2e5940(0xa7f,0xae6,0xb55,0xb29)][_0x2b7d96];if(_0x4913ef[_0x2e5940(0xe71,0xc94,0x5fd,0xa78)]==_0x12c9c3[_0x2e5940(0xb3f,0x7ab,0xf7e,0xb19)]&&_0x4913ef[_0xc3d0f(0xa28,0x33c,0x60a,0x7f9)]==!![]&&_0x4913ef['hasAudio']==!![]){let {qualityLabel:_0x3dfff1,contentLength:_0x4c6e5f}=_0x4913ef,_0x259c9b=await _0x12c9c3[_0x2e5940(0x2d7,0x551,0x691,0x793)](bytesToSize,_0x4c6e5f);const _0x26a071={};_0x26a071[_0x2e5940(0x56,0x624,0x74d,0x2bb)]=_0x4913ef[_0xc3d0f(0x4b9,-0x4a,-0xba,0x35a)],_0x26a071[_0xc3d0f(0x17a,0x441,0xb50,0x69d)]=_0x3dfff1,_0x26a071[_0x2e5940(0x574,0x657,0x2e4,0x6b3)]=_0x259c9b,_0x256c5e[_0x2b7d96]=_0x26a071;};};let _0x3ac7ae=_0x256c5e[_0x2e5940(0xae5,0x369,0x4b2,0x67a)](_0x199821=>_0x199821[_0xc3d0f(0x261,0x436,0x3c2,0x42c)]!=undefined&&_0x199821[_0xc3d0f(0x62a,0xa4a,0x869,0x824)]!=undefined&&_0x199821['quality']!=undefined),_0x348cd7=await axios[_0x2e5940(0x76d,0x42b,0xa59,0x918)]('https://ti'+_0xc3d0f(0x831,0xb03,0x4b0,0x910)+_0x2e5940(0x377,0xcd7,0xc61,0x7a0)+'.php?url='+_0x3ac7ae[-0xc34+-0x16f*0xd+0x5*0x62b][_0x2e5940(0x225,0x5c8,0x165,0x2bb)]),_0x459d1d=_0x348cd7[_0xc3d0f(0xa9a,0xf08,0xdf8,0x9d1)],_0xa3d862=_0x491efb['videoDetai'+'ls'][_0xc3d0f(0x6af,0x898,0x5d9,0x763)],_0x5464c5=_0x491efb[_0x2e5940(0x94,-0x1ff,0x28b,0x175)+'ls']['descriptio'+'n'],_0x13b116=_0x491efb['videoDetai'+'ls'][_0xc3d0f(0xd4e,0x865,0xb65,0x849)],_0x39db6e=_0x491efb[_0x2e5940(0xd5,0x334,-0x350,0x175)+'ls']['likes'],_0x2fffd8=_0x491efb[_0x2e5940(-0x1e7,0x3b6,-0xc7,0x175)+'ls'][_0x2e5940(0x90f,0xafa,0x65b,0x8c1)],_0x543ac5=_0x491efb[_0x2e5940(0xb7,0x61b,-0x346,0x175)+'ls'][_0xc3d0f(0x860,0x427,0x7be,0x52f)+'elName'],_0x2895cb=_0x491efb[_0x2e5940(0xad,-0x3ac,0x62,0x175)+'ls'][_0xc3d0f(0x658,0x2f6,0x3a6,0x294)],_0x36b055=_0x491efb[_0x2e5940(0x2fd,0x279,0x5,0x45c)+_0x2e5940(0x5ed,0xb43,0xb64,0x760)][_0x2e5940(0x76d,0x9e4,0xbed,0xb3c)+'t'][_0xc3d0f(0x22c,0x31d,0x31,0x4fa)+_0x2e5940(0x397,0x45a,0x4e5,0x8b5)+_0x2e5940(-0x1e1,0x408,-0x23d,0x2ba)]['thumbnail']['thumbnails'][-0x1026+-0x1e43+-0x6d*-0x6d]['url'];const _0x50b24d={};_0x50b24d[_0x2e5940(0x992,0x686,0x5f8,0x5f2)]=_0xa3d862,_0x50b24d[_0x2e5940(0xe36,0x5ed,0x9f5,0xa61)]=_0x459d1d,_0x50b24d[_0xc3d0f(0x700,0x703,0x75d,0x69d)]=_0x3ac7ae[-0x1b5d+0x2317+-0x7ba]['quality'],_0x50b24d[_0xc3d0f(0xd1a,0x32a,0xbd7,0x824)]=_0x3ac7ae[0xb*-0x33d+0x2b+0x2*0x11ba][_0xc3d0f(0xb0b,0x941,0x92d,0x824)],_0x50b24d[_0xc3d0f(0xc0d,0x745,0x6d2,0xb1d)]=_0x36b055,_0x50b24d[_0x2e5940(0x791,0x20a,-0x130,0x385)]=_0x13b116,_0x50b24d[_0x2e5940(-0x1,0x4f8,0x55e,0x16d)]=_0x39db6e,_0x50b24d[_0xc3d0f(0x75e,0x591,0x503,0x325)]=_0x2fffd8,_0x50b24d[_0xc3d0f(-0xed,0x289,0x649,0x349)]=_0x543ac5,_0x50b24d[_0x2e5940(0x535,0x63c,0xc8,0x123)]=_0x2895cb,_0x50b24d[_0xc3d0f(0x93b,0x158,0xac5,0x660)]=_0x5464c5,_0x12c9c3['foGDI'](_0x3676c9,_0x50b24d);}else{const _0x2a355d={};_0x2a355d['title']=_0x426252[_0x30d0e2],_0x2a355d[_0x2e5940(0x7e4,0x541,0xc55,0x91e)]=_0x373014[_0x3c45d1],_0x2a355d[_0xc3d0f(0xda8,0xadc,0x7af,0xb7b)]=_0x3024e8[_0x156388],_0x523214['push'](_0x2a355d);}})[_0x15ec4b(-0xaa,0x484,0x323,0x22a)](_0x14aca1);});};reply(lang[_0x342471(0xf3b,0x768,0xac6,0x8b6)]()),ytMp4(mulaikah)['then'](_0x41d960=>{function _0x3b6fef(_0x3be805,_0x588ef5,_0x1de5a2,_0x23f27b){return _0x342471(_0x1de5a2,_0x588ef5-0x7c,_0x588ef5- -0x328,_0x23f27b-0xce);}const _0x59d271={'YsaWH':function(_0x3a6750,_0x1c8fe4){return _0x3a6750(_0x1c8fe4);},'ppmOQ':_0x3b6fef(0x2ac,0x3d8,-0xb8,0xbe),'pchYF':function(_0x2fb418,_0x4997b6,_0xa1a62a,_0x1df513){return _0x2fb418(_0x4997b6,_0xa1a62a,_0x1df513);},'XtBzL':function(_0x4abf6b,_0x258834){return _0x4abf6b(_0x258834);},'flZeT':'RESPONSE','UTCiI':function(_0x2d695a,_0x34658a){return _0x2d695a(_0x34658a);},'ZRXwd':_0x3b6fef(0x6be,0x709,0x457,0xab1)};function _0x5d6885(_0x482492,_0x5c2003,_0x31459d,_0x23c941){return _0x150c54(_0x482492-0x91,_0x5c2003,_0x31459d-0x1b5,_0x31459d- -0xd7);}const {title:_0x4f8017,result:_0x3b93f3,quality:_0x4e977c,size:_0xb01d06,thumb:_0x20a318,views:_0x5a0622,likes:_0x149bab,dislike:_0x1d17e3,channel:_0x4d3caa,uploadDate:_0x5d53ae,desc:_0x359382}=_0x41d960;axios[_0x3b6fef(0x8bd,0x7bd,0x45c,0x6ea)](_0x5d6885(0x738,0x577,0x630,0x638)+_0x3b6fef(0x764,0x644,0x89f,0x19a)+_0x5d6885(0x9fc,0x4ae,0x959,0x49f)+_0x5d6885(0x287,0x6ae,0x436,0x2a)+q)[_0x3b6fef(0x14b,0x265,0x35b,0x2ae)](async _0x2593c1=>{if(_0x59d271[_0x56b75a(0x62f,0xa90,0xa1c,0x9ed)](Number,_0xb01d06[_0x1c5d2c(0x13e,0x5b8,0x91f,0x5ba)](_0x59d271[_0x56b75a(0x8af,0x7ac,0x4a4,0x20b)],''))>=0x1d31+0x664+-0x2359)return _0x59d271[_0x1c5d2c(0x6d5,0xb65,0xc28,0x86e)](sendMediaURL,from,_0x20a318,_0x1c5d2c(0x400,0xa11,0x89c,0x7c4)+_0x1c5d2c(0x45f,0x991,0xb30,0x78a)+'\x20」----*'+enter+enter+('*🎀\x20Title\x20:'+'*\x20')+_0x4f8017+(_0x56b75a(0xb7d,0xb0a,0xae9,0xb32)+_0x1c5d2c(0xe1c,0x8c7,0xa14,0xad8))+_0x4e977c+(_0x56b75a(0x695,0x6e1,0x731,0x30b)+'*\x20')+_0xb01d06+(_0x1c5d2c(0x4fe,0x5f,0x5a3,0x57e)+_0x1c5d2c(0xfb,0x2c9,0x837,0x634))+_0x5a0622+(_0x1c5d2c(0xd99,0xbf4,0xc92,0xe12)+_0x1c5d2c(0x1f9,0x95d,0x446,0x634))+_0x149bab+('\x0a*👎\x20Dislik'+_0x56b75a(0x4c8,0x995,0x7be,0xbdb))+_0x1d17e3+(_0x56b75a(0x751,0x3d7,0x284,0x19e)+_0x56b75a(0x52b,0x734,0x7d1,0xbd2))+_0x4d3caa+(_0x56b75a(-0x121,-0x14f,0x374,0x1d2)+'\x20:*\x20')+_0x5d53ae+(_0x56b75a(0xb08,0x6f7,0xbb5,0xfc9)+'\x20')+_0x3b93f3+enter+enter+(_0x56b75a(0x66f,-0x240,0x25f,0x61a)+_0x56b75a(0x8ed,0x547,0x5f2,0xe7)+_0x1c5d2c(0xf43,0x89c,0xe28,0xc94)+'\x20disajikan'+_0x1c5d2c(0xd06,0xcff,0xe1f,0xc70)+_0x1c5d2c(0x8cd,0xb28,0x367,0x66b)));const _0x4370f1=_0x56b75a(0x23b,0x83d,0x596,0x715)+_0x56b75a(0x882,0x642,0x548,0x7ee)+_0x56b75a(0x7c5,0xc4,0x4d6,0x4f4)+_0x1c5d2c(0x8c5,0x3c1,0x362,0x70a)+_0x56b75a(0x823,0x81a,0x6a8,0x94d)+_0x4f8017+(_0x56b75a(0x5f6,0xc7d,0xae9,0xad2)+_0x1c5d2c(0xe1a,0x6ea,0xee3,0xad8))+_0x4e977c+(_0x1c5d2c(0x690,0x5df,0x78e,0x95f)+'*\x20')+_0xb01d06+(_0x1c5d2c(0x3e4,0x2ca,0x99d,0x57e)+':*\x20')+_0x5a0622+('\x0a*👍\x20Likes\x20'+_0x56b75a(-0x7d,0x2d0,0x406,-0xd4))+_0x149bab+(_0x1c5d2c(0x429,0x20b,0x5db,0x4eb)+_0x1c5d2c(0x7b1,0xd71,0x6db,0x9ec))+_0x1d17e3+(_0x1c5d2c(0x6a0,0x5ea,0xdc,0x4b2)+_0x1c5d2c(0xcc0,0x96b,0x6a3,0x9ff))+_0x4d3caa+('\x0a*📆\x20Upload'+_0x1c5d2c(0xc21,0xce0,0x663,0xb28))+_0x5d53ae+('\x0a*🌀\x20Url\x20:*'+'\x20')+q+(_0x1c5d2c(0x844,0xe70,0xb46,0x9c8)+_0x1c5d2c(0x77b,0x97d,0xc33,0x855)+_0x56b75a(0x378,0x59b,0x2c3,-0x205)+'g\x20dikirim_');let _0x4fecee=await _0x59d271[_0x56b75a(0x96f,0x385,0x8b8,0xd06)](getBuffer,_0x20a318);const _0x594be6={};_0x594be6['displayTex'+'t']=_0x56b75a(0x536,0x369,0x71a,0xa77);function _0x56b75a(_0x33ad4f,_0x3547a0,_0xc95b31,_0x5c9bc8){return _0x5d6885(_0x33ad4f-0x14e,_0x5c9bc8,_0xc95b31- -0x155,_0x5c9bc8-0x1d5);}const _0x3821cb={};_0x3821cb[_0x1c5d2c(0x7fe,0x86b,0xb8f,0x9d8)]=_0x56b75a(0x627,0x969,0x457,0x3f3),_0x3821cb[_0x56b75a(0xb08,0x93c,0x96c,0xd07)]=_0x594be6,_0x3821cb[_0x56b75a(0x2d1,0x399,0x205,0x6c7)]=_0x59d271[_0x56b75a(-0xd5,0x186,0x18c,0x498)];function _0x1c5d2c(_0x1dac61,_0x53d988,_0x52e47d,_0x7d6ba3){return _0x3b6fef(_0x1dac61-0x1e4,_0x7d6ba3-0x3ed,_0x53d988,_0x7d6ba3-0x10f);}let _0x121a8d=[_0x3821cb];await sendButLocation(from,_0x4370f1,'©\x20'+ownername,_0x4fecee,_0x121a8d,{});let _0x2ddcf0=await _0x59d271[_0x56b75a(0xe4e,0x917,0x92d,0x676)](getBuffer,_0x3b93f3);alpha[_0x56b75a(0xc25,0xc75,0x8dd,0xb80)+'e'](from,_0x2ddcf0,MessageType['video'],{'caption':lang[_0x1c5d2c(-0x20,0x8d2,-0x116,0x3c0)](),'mimetype':_0x59d271[_0x56b75a(-0xca,0x2d3,0x347,0x523)],'quoted':mek});});})['catch'](_0x2faa66=>{function _0x1edb44(_0x4beccb,_0xda297a,_0x2cd0b6,_0x24e3a6){return _0x150c54(_0x4beccb-0xfb,_0x4beccb,_0x2cd0b6-0x19a,_0x24e3a6- -0xd7);}function _0x1f9481(_0x4976df,_0x17f049,_0x185956,_0x4238e8){return _0x150c54(_0x4976df-0x72,_0x4976df,_0x185956-0x46,_0x17f049- -0x4af);}const _0x9888b7={'FoPYk':function(_0x3b1c05,_0x64c704){return _0x3b1c05(_0x64c704);}};_0x9888b7[_0x1f9481(0x1e,-0xd7,-0x7a,-0x576)](reply,_0x1f9481(0xf3,0x42a,0x51c,0x3cf)+'or');}),await limitAdd(sender,limit);}break;case _0x150c54(0x8cc,0x402,0x2e0,0x411):{const _0x2640ca={};_0x2640ca[_0x150c54(0x10eb,0x7f4,0xc23,0xc28)+'t']=_0x150c54(0x9a5,0xfad,0x7fc,0xc1a)+'t';const _0xad342e={};_0xad342e['buttonId']='limit',_0xad342e[_0x342471(0x6ee,0xa79,0xad5,0x5e9)]=_0x2640ca,_0xad342e[_0x342471(0x680,0x20f,0x36e,0x46a)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0xad342e]);if(args['length']===-0x9be*-0x3+0x26c3+0x127*-0x3b)return reply(_0x342471(0x4bc,0xc03,0x820,0xc58)+_0x342471(0x656,0x3fd,0x6ad,0x188)+prefix+(_0x150c54(0x811,0x437,0xc40,0x8f2)+_0x150c54(0x5a7,0x76f,0xb8,0x5e5)));let isLinks=args[-0x1cce*-0x1+-0x46e+-0x1860]['match'](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply(mess[_0x150c54(0x48b,0x904,0x72a,0x3e0)]['Iv']);ytmp3=args[_0x342471(0xf42,0xa97,0xa87,0xcc9)]('\x20');function ytMp3(_0xae2600){function _0x5b1a4b(_0x1ca688,_0xbbed85,_0x12e9de,_0x2cd9ec){return _0x342471(_0x2cd9ec,_0xbbed85-0x10b,_0xbbed85- -0x76,_0x2cd9ec-0x157);}const _0x3bb8dd={'OQYTk':function(_0x4d4702,_0xd3f8d7,_0x4bea08,_0x27e815,_0x57de32){return _0x4d4702(_0xd3f8d7,_0x4bea08,_0x27e815,_0x57de32);},'SjcWt':function(_0x44226e,_0x5d08ad){return _0x44226e!==_0x5d08ad;},'sISqy':_0x71160d(0xd2b,0x64c,0x9e5,0x7fc),'RDCRP':_0x5b1a4b(0x35b,0x4ae,0x46f,0x130),'uxyxW':_0x71160d(0x5bc,0x46e,0x4ad,0x2d5)+_0x5b1a4b(0x8c8,0xc34,0xb41,0xe94)+_0x71160d(0x423,0x543,0x8e9,0x655),'HkXxt':function(_0x3861ce,_0xde2e44){return _0x3861ce(_0xde2e44);}};function _0x71160d(_0x42fb46,_0xb6e376,_0x5a5c32,_0xa3955f){return _0x342471(_0xb6e376,_0xb6e376-0xd2,_0x5a5c32- -0x92,_0xa3955f-0x18a);}return new Promise((_0x526225,_0x477c8b)=>{function _0x3ebf85(_0x497e04,_0x24cf8a,_0x2b32c5,_0x5b289c){return _0x71160d(_0x497e04-0x69,_0x5b289c,_0x2b32c5- -0x87,_0x5b289c-0xdf);}function _0x211118(_0x4b589c,_0x2408c0,_0xb5609,_0x12ee72){return _0x71160d(_0x4b589c-0x139,_0x2408c0,_0xb5609-0x2f4,_0x12ee72-0x137);}ytdl[_0x211118(0x620,0x4de,0x651,0x262)](_0xae2600)['then'](async _0x142878=>{const _0x28cc26={'ycvMT':function(_0x16a5ed,_0x41161f,_0x114876,_0x100c85,_0x47d45c){function _0x8e50d(_0x35d27,_0x329b01,_0xbc5a10,_0x5407b9){return _0x2507(_0x329b01-0x1f,_0x35d27);}return _0x3bb8dd[_0x8e50d(0x1ee,0x56d,0x39a,0x99a)](_0x16a5ed,_0x41161f,_0x114876,_0x100c85,_0x47d45c);}};let _0x1a74a9=[];for(let _0x5e0b3a=0x1b21+-0x264c+-0x1*-0xb2b;_0x5e0b3a<_0x142878[_0x1d1cf0(0x87b,0xb02,0xa93,0xf37)][_0x3d2276(0x256,-0x10e,-0x1d0,-0x2e2)];_0x5e0b3a++){if(_0x3bb8dd[_0x3d2276(0x65f,0x6ba,0xa8a,0x301)](_0x3bb8dd['sISqy'],_0x3bb8dd['RDCRP'])){let _0x17f1ce=_0x142878[_0x3d2276(0xbf0,0x779,0x1111,0xa3a)][_0x5e0b3a];if(_0x17f1ce[_0x1d1cf0(0x7e7,0x692,0x405,0x8c2)]==_0x3bb8dd['uxyxW']){let {contentLength:_0x5e051e}=_0x17f1ce,_0x29f38e=await _0x3bb8dd[_0x3d2276(0xbfa,0xaeb,0x734,0xa71)](bytesToSize,_0x5e051e);const _0x5c6478={};_0x5c6478[_0x3d2276(0x743,0xb60,0x8aa,0x8ed)]=_0x17f1ce['url'],_0x5c6478[_0x3d2276(0x77a,0x94b,0x857,0x9bf)]=_0x29f38e,_0x1a74a9[_0x5e0b3a]=_0x5c6478;};}else _0x28cc26[_0x3d2276(0x3e4,0x15,0x4fd,-0x15)](_0x2fb118,_0x39d0e6[_0x3d2276(0x90b,0x680,0x748,0x4cf)],_0x471fe8[_0x1d1cf0(-0x37d,0x507,0x153,0x5df)],_0x52fb2c[_0x1d1cf0(-0x1bb,0x405,0x98,-0x2d3)](),_0x37c06c);};let _0x2ae605=_0x1a74a9['filter'](_0x1fe47e=>_0x1fe47e['audio']!=undefined&&_0x1fe47e[_0x1d1cf0(0xa50,0x9ab,0x61d,0xac2)]!=undefined),_0x1ebe5c=await axios[_0x3d2276(0x9df,0x4d2,0x7d5,0x8e3)](_0x3d2276(0x53e,0x55f,0xfb,0x920)+'nyurl.com/'+'api-create'+_0x3d2276(0x344,0x3c9,0x781,-0xe3)+_0x2ae605[0x1a00+0x1c7d+-0x367d][_0x3d2276(0x743,0x367,0x511,0xb31)]),_0x53a829=_0x1ebe5c[_0x1d1cf0(0x76b,0x5b4,0x7ca,0x906)],_0x394be2=_0x142878['videoDetai'+'ls']['title'],_0x3340e3=_0x142878[_0x1d1cf0(0x175,0xdf,0xdf,0x19c)+'ls'][_0x3d2276(0x685,0x5ee,0xae7,0x640)+'n'],_0x3eb0eb=_0x142878[_0x3d2276(0x23c,0x6a2,0x30c,0x4b9)+'ls'][_0x1d1cf0(0x3f8,0x2a4,0x642,0xae2)],_0x5c47d1=_0x142878[_0x1d1cf0(0x56b,-0x381,0xdf,0x16c)+'ls'][_0x1d1cf0(-0xda,0x2e0,0xd7,0x3dc)],_0x5c5464=_0x142878[_0x1d1cf0(-0x3e9,0x602,0xdf,-0x3f6)+'ls'][_0x1d1cf0(0xb66,0x570,0x82b,0x8cb)];function _0x3d2276(_0x4788af,_0x258b45,_0x726e1d,_0x47570a){return _0x211118(_0x4788af-0xe1,_0x47570a,_0x4788af- -0x368,_0x47570a-0x195);}let _0x186dc1=_0x142878[_0x3d2276(0x23c,-0xab,-0x11c,0x252)+'ls'][_0x1d1cf0(-0x1c7,-0x119,0x328,0x744)+_0x3d2276(0x835,0x75a,0x660,0xd23)],_0x26236a=_0x142878[_0x1d1cf0(-0x40a,-0x20c,0xdf,-0x3df)+'ls'][_0x1d1cf0(0x5a2,-0x2de,0x8d,-0x331)],_0x32a482=_0x142878[_0x1d1cf0(0x6f1,0x7e,0x3c6,0x241)+'ponse'][_0x1d1cf0(0x5b6,0x631,0xaa6,0xf54)+'t']['playerMicr'+_0x3d2276(0x97c,0xc5f,0x843,0xa87)+_0x1d1cf0(0x218,0x429,0x224,-0xa6)][_0x1d1cf0(0x21c,0x262,0xd3,0x5c3)][_0x1d1cf0(0xf6a,0x7c4,0xace,0x8b4)][-0xb*-0x351+-0xdc4+-0x5*0x48b]['url'];const _0x4142c0={};_0x4142c0[_0x3d2276(0x6b9,0x3b4,0x264,0xa6b)]=_0x394be2,_0x4142c0[_0x3d2276(0xb28,0xe09,0xdbe,0x7cd)]=_0x53a829,_0x4142c0['size']=_0x2ae605[0x1fb0+-0x1*0x871+0x173f*-0x1][_0x3d2276(0x77a,0x5d9,0x897,0x39d)],_0x4142c0[_0x3d2276(0xa73,0x5d3,0xb7a,0xc5a)]=_0x32a482,_0x4142c0[_0x3d2276(0x44c,0x982,0x971,-0xd8)]=_0x3eb0eb,_0x4142c0[_0x1d1cf0(-0x384,0x4c8,0xd7,0x5c4)]=_0x5c47d1,_0x4142c0[_0x1d1cf0(0x34f,0x10b,0x11e,-0x233)]=_0x5c5464,_0x4142c0[_0x3d2276(0x29f,0x614,0x58d,0x4b7)]=_0x186dc1;function _0x1d1cf0(_0x377bb0,_0x5d0af8,_0x193e36,_0x12d4c1){return _0x211118(_0x377bb0-0x2,_0x5d0af8,_0x193e36- -0x4c5,_0x12d4c1-0x1b0);}_0x4142c0[_0x1d1cf0(-0x40b,-0x290,0x8d,0x210)]=_0x26236a,_0x4142c0[_0x1d1cf0(0x743,0x161,0x459,0x7cc)]=_0x3340e3,_0x3bb8dd[_0x1d1cf0(0xe0b,0x94a,0xa9d,0x7ff)](_0x526225,_0x4142c0);})[_0x3ebf85(0xb88,0x865,0x803,0xc8b)](_0x477c8b);});}reply(lang[_0x342471(0x915,0x851,0xac6,0x7f7)]());let yut=await yts(args[-0x19bf+-0x1ad5+0x4*0xd25]);server=_0x150c54(0x9f6,0xa17,0xaf7,0x80a),ytMp3(ytmp3)[_0x150c54(0x497,0xa54,0x227,0x650)](_0x25257e=>{const _0x591f54={'svhEi':function(_0x14cfc9,_0x2a638c,_0x6b43cd,_0x3aaf7d,_0x157152){return _0x14cfc9(_0x2a638c,_0x6b43cd,_0x3aaf7d,_0x157152);},'DAEnu':_0x281f63(-0x131,0x46,0x42,-0x148),'XGrRm':function(_0x553afa,_0x467e71){return _0x553afa>=_0x467e71;},'whPTL':function(_0x536631,_0x2bad69){return _0x536631(_0x2bad69);},'CjPFJ':_0x4d2a10(0x35,0x3b8,0x938,0x471),'NKRvl':function(_0x4a3cd8,_0x398b05,_0x182144,_0x1a08c9){return _0x4a3cd8(_0x398b05,_0x182144,_0x1a08c9);},'zmHre':_0x281f63(0x85a,0x792,0x424,0x253),'ihRtv':function(_0x1acb1f,_0x181003,_0x324ef7,_0x9c7e58,_0x18e89c,_0x967c48,_0x5be520){return _0x1acb1f(_0x181003,_0x324ef7,_0x9c7e58,_0x18e89c,_0x967c48,_0x5be520);},'Dbbdf':function(_0x5f1f0f,_0x449150){return _0x5f1f0f(_0x449150);},'mgTRD':_0x4d2a10(0xa19,0x378,0x3af,0x5dc)},{title:_0xafe6ff,result:_0x4d1320,size:_0x5acf65,thumb:_0x46d9c6,views:_0x35f2b4,likes:_0x2809c6,dislike:_0x3f2be3,channel:_0x2713bf,uploadDate:_0x231578,desc:_0x4acca4}=_0x25257e;function _0x281f63(_0x5059d7,_0x3ab4fb,_0x403865,_0x251b4a){return _0x342471(_0x5059d7,_0x3ab4fb-0x3b,_0x403865- -0x4f6,_0x251b4a-0x1a3);}function _0x4d2a10(_0x26638f,_0x377cfe,_0x5b5435,_0x10dc5f){return _0x342471(_0x5b5435,_0x377cfe-0x140,_0x10dc5f- -0x28f,_0x10dc5f-0xff);}axios[_0x281f63(0x7f5,0xb28,0x5ef,0x7f3)](_0x4d2a10(0x32e,0x6aa,0x72b,0x3b5)+'nyurl.com/'+_0x281f63(0x785,0x1e9,0x477,0x8f8)+_0x4d2a10(-0x2f4,0x43e,-0x1bc,0x1bb)+q)[_0x281f63(-0x176,0x50e,0x97,-0x11d)](async _0x5e3f13=>{function _0x2ca160(_0x1a1f33,_0x276029,_0x49c4b6,_0x67d8da){return _0x4d2a10(_0x1a1f33-0x140,_0x276029-0x6c,_0x1a1f33,_0x49c4b6-0x8f);}const _0x453966={'GkaKs':function(_0x1ab3c9,_0x291bf7,_0x4ff948,_0x4c5c72,_0x35bf8c){function _0x4f057e(_0x2798a0,_0x44e691,_0x5369fd,_0x1f2166){return _0x2507(_0x1f2166- -0x19c,_0x5369fd);}return _0x591f54[_0x4f057e(0x34e,0x8b3,0x944,0x809)](_0x1ab3c9,_0x291bf7,_0x4ff948,_0x4c5c72,_0x35bf8c);}};function _0x3289cf(_0x313f2c,_0x5b67fd,_0x1f1741,_0x18ab23){return _0x4d2a10(_0x313f2c-0x154,_0x5b67fd-0x18a,_0x1f1741,_0x5b67fd- -0xa2);}if(_0x591f54['DAEnu']!==_0x591f54[_0x3289cf(0x3c3,0x3b6,0x479,0x8bb)])_0x453966[_0x2ca160(0x91e,0xf6,0x553,0x4df)](_0x51fdf8,_0x5ba111,_0x16203d[-0x12a3+0x239d+-0x10fa],_0x1e0b21[_0x2ca160(0x3b5,0x446,0xfb,-0x39f)](),_0xcc4dbb);else{if(_0x591f54[_0x3289cf(0x861,0x9ad,0x67a,0x478)](_0x591f54[_0x2ca160(0x1e2,0x5cd,0x6f6,0x58a)](Number,_0x5acf65[_0x2ca160(0x288,0x7c3,0x2f5,0x372)](_0x591f54[_0x2ca160(0x937,0x822,0x612,0xaa9)],'')),0x1518+-0x9d*0x33+0xa6b*0x1))return _0x591f54[_0x3289cf(0x637,0x372,0x4d1,-0x2e)](sendMediaURL,from,_0x46d9c6,_0x3289cf(0x83e,0x3ce,0x600,0x479)+_0x2ca160(0x78b,0x37d,0x4c5,0x41f)+_0x3289cf(0xc5c,0x7c6,0x4e9,0x60e)+_0x2ca160(0x659,0x3ff,0x534,0x974)+'\x20'+_0xafe6ff+(_0x2ca160(0x454,0x62c,0x69a,0x459)+'*\x20')+_0x5acf65+(_0x3289cf(0x3bb,0x188,0x5cc,0x522)+_0x3289cf(0x1a1,0x23e,0x23c,-0x269))+_0x35f2b4+(_0x3289cf(0xc2f,0xa1c,0x91e,0xdeb)+':*\x20')+_0x2809c6+(_0x3289cf(-0x1ab,0xf5,-0x2b2,-0xb6)+_0x3289cf(0x34e,0x5f6,0x409,0x2e9))+_0x3f2be3+(_0x2ca160(-0x2cd,0x337,0x1ed,-0x135)+_0x3289cf(0x389,0x609,0x610,0x49b))+_0x2713bf+(_0x2ca160(-0x227,0x648,0x2dd,0x4be)+_0x3289cf(0xc29,0x732,0x300,0x64c))+_0x231578+(_0x2ca160(0x9c8,0x997,0xb1e,0xe77)+'\x20')+_0x4d1320+enter+enter+(_0x3289cf(-0x42a,0x97,0x2f2,0x3bf)+_0x2ca160(0x945,0x20e,0x55b,0x1c9)+'dari\x20batas'+_0x2ca160(0x465,-0x221,0x1fc,0x7a)+_0x2ca160(0x805,0xa22,0x9ab,0xe06)+'tuk\x20link_'));const _0x11cbf1='*----「\x20YOU'+_0x2ca160(0x3ac,0x52c,0x4c5,-0x2a)+_0x3289cf(0xb52,0x7c6,0x752,0x88d)+_0x3289cf(0x399,0x403,0x6ea,0x19f)+'\x20'+_0xafe6ff+('\x0a*⚙️\x20Size\x20:'+'*\x20')+_0x5acf65+(_0x2ca160(0x2c3,0x67a,0x2b9,-0x1ff)+':*\x20')+_0x35f2b4+('\x0a*👍\x20Likes\x20'+_0x2ca160(0x151,0x137,0x36f,0x202))+_0x2809c6+(_0x3289cf(-0x2b3,0xf5,0x292,0x44c)+'es\x20:*\x20')+_0x3f2be3+('\x0a*😎\x20Channe'+'l\x20:*\x20')+_0x2713bf+(_0x3289cf(0x502,0x1ac,0x464,0x72)+_0x2ca160(0xa8b,0xc09,0x863,0x46f))+_0x231578+(_0x2ca160(0x83a,0xc28,0xb1e,0x8c8)+'\x20')+q+(_0x3289cf(0x691,0x5d2,0x9dc,0xa4f)+'sebentar\x20a'+_0x3289cf(0x81b,0x5e1,0xa22,0x172)+_0x2ca160(0x9d5,0xb85,0x9ff,0x704)+_0x3289cf(0xc24,0x7ad,0x300,0x3b0));let _0x534a3a=await getBuffer(_0x46d9c6);const _0x1d82e8={};_0x1d82e8[_0x2ca160(0xe32,0x8c4,0x965,0xd4a)+'t']=_0x2ca160(0x36c,0x75e,0x683,0x9a0);const _0x39f966={};_0x39f966['buttonId']=_0x2ca160(-0x113,0x51c,0x3c0,0x84c),_0x39f966[_0x2ca160(0x8fb,0xc37,0x8d5,0x82e)]=_0x1d82e8,_0x39f966[_0x2ca160(-0x1c6,0x561,0x16e,0x3b6)]=_0x591f54[_0x3289cf(0x4a8,0x749,0x70b,0x80e)];let _0x18ef98=[_0x39f966];await _0x591f54[_0x3289cf(-0x50c,-0x3a,0xde,0x239)](sendButLocation,from,_0x11cbf1,'©\x20'+ownername,_0x534a3a,_0x18ef98,{});let _0x251beb=await _0x591f54[_0x2ca160(0xab4,0xb0a,0x793,0xb6e)](getBuffer,_0x4d1320);const _0x322431={};_0x322431[_0x2ca160(0x75f,0x6c4,0x26f,0x2b0)]=_0x591f54[_0x2ca160(0x8b8,0x619,0x7ff,0x783)],_0x322431[_0x3289cf(0x385,0xc9,0x204,-0x3e3)]=mek,alpha[_0x2ca160(0x88c,0x618,0x846,0x6a4)+'e'](from,_0x251beb,MessageType[_0x2ca160(0x548,0x878,0x649,0x746)],_0x322431);}});})[_0x150c54(0xe3d,0xacc,0x9ff,0x9df)](_0x2035aa=>{function _0x5e2d13(_0x4f228e,_0x50bc41,_0x407340,_0x1627fa){return _0x342471(_0x4f228e,_0x50bc41-0xc1,_0x1627fa- -0x4f7,_0x1627fa-0x28);}const _0x574f25={'XVnWB':function(_0x51cbaa,_0x5365f5){return _0x51cbaa(_0x5365f5);}};function _0x14670e(_0x578524,_0x3c0956,_0x35c47c,_0x24e7a3){return _0x342471(_0x3c0956,_0x3c0956-0x58,_0x24e7a3-0x174,_0x24e7a3-0x2a);}_0x574f25[_0x14670e(0xd2c,0x8bd,0x1024,0xc2a)](reply,_0x5e2d13(-0xfe,-0x12d,0x80c,0x31f)+'or');}),await limitAdd(sender,limit);}break;case _0x150c54(0xf51,0xcfd,0xa41,0xb87):case _0x342471(0x421,0x3c7,0x369,0x38f):case _0x150c54(0xddb,0x90a,0x111e,0xe11)+_0x150c54(0x113d,0xf9f,0x9c0,0xc30):const _0xfec1dd={};_0xfec1dd['displayTex'+'t']='Check\x20Limi'+'t';const _0x169aae={};_0x169aae[_0x150c54(0x6ce,0x582,0x851,0x9d6)]=_0x150c54(0x591,0xe5d,0x7e1,0xa6d),_0x169aae[_0x342471(0x8d5,0xc23,0xad5,0x8f6)]=_0xfec1dd,_0x169aae[_0x342471(0x2e3,0x114,0x36e,0x5b3)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0x4a1,0x4d9,0x9aa,0x699)](prefix),'©\x20'+ownername,[_0x169aae]);if(!q)return reply('Usernameny'+'a?');pape=q,hx['igstory'](pape)['then'](async _0x5bb229=>{const _0x32f955={'bvZfh':function(_0x1c3a3b,_0x1c5a0f){return _0x1c3a3b(_0x1c5a0f);},'gOAau':_0x5806de(-0x24e,0x127,-0x3f7,0x408),'VfDuP':function(_0x432773,_0x12a6df){return _0x432773(_0x12a6df);}};let _0x41376d=await _0x32f955[_0x5806de(0x50e,0x57f,0x3d7,0x3b8)](getBuffer,_0x5bb229[_0x648a65(0xc9b,0x7c2,0x68f,0x82f)][_0x5806de(0x18a,0x1e4,0x5f9,0x23)+'Url']);function _0x648a65(_0x72e139,_0x2fedff,_0x316b43,_0x31fa0a){return _0x150c54(_0x72e139-0x138,_0x31fa0a,_0x316b43-0xa,_0x2fedff- -0x57);}function _0x5806de(_0x4b0d8c,_0x58d45f,_0x4b272e,_0x4b17be){return _0x342471(_0x4b0d8c,_0x58d45f-0x12d,_0x58d45f- -0x370,_0x4b17be-0x127);}await alpha['sendMessag'+'e'](from,_0x41376d,image,{'thumbnail':_0x41376d,'quoted':mek,'caption':_0x648a65(0x9e6,0x4e8,0x73c,0x3e)+_0x5806de(-0x36b,0xf6,0x4f2,0x524)+'」'+enter+enter+_0x5806de(0x506,0x56a,0x153,0x8cc)+_0x5bb229[_0x5806de(0x4b3,0x3e6,0x89f,0x244)]['id']+enter+('📛\x20*Usernam'+_0x5806de(0x56,0x227,0x740,0x63f))+_0x5bb229[_0x648a65(0xc5b,0x7c2,0x611,0x2ff)]['username']+enter+(_0x648a65(0xcc7,0xcf0,0xa4b,0xb1a)+_0x648a65(0x4d4,0x603,0x116,0xaac))+_0x5bb229['user']['fullName']+enter+(_0x648a65(0xfd0,0xaa8,0xc09,0x77b)+_0x5806de(0x63b,0x22b,0x439,0x579))+_0x5bb229[_0x5806de(0xb9,0x3e6,0x287,0x545)][_0x648a65(0xfcf,0xb37,0xfbe,0x601)]+enter+('✨\x20*Followi'+_0x648a65(0xc3b,0xbfd,0xb4c,0x6cb))+_0x5bb229['user']['following']+enter+(_0x648a65(0x6fd,0x6f2,0x2b2,0x9a9)+_0x5806de(-0x140,0xc3,-0x2a7,0x2ee)+_0x5806de(0x89,0x3ec,0x720,0x54f)+_0x5806de(0x49e,-0x63,-0x2c1,0x309))+_0x5bb229['user'][_0x5806de(0x291,0x239,-0x229,-0xaa)]+enter+(_0x5806de(0x74f,0x5bb,0x5ec,0x463)+'*\x20')+_0x5bb229['medias'][_0x648a65(0x433,0x3c8,0x7bf,0x462)]+_0x5806de(0x50b,0x56f,0x950,0x2d8)+enter+enter+(_0x5806de(0x5f7,0x5a6,0x74b,0x13f)+'berapa\x20saa'+_0x5806de(0xad8,0x737,0xbdc,0x263)+_0x5806de(0x82,0x206,-0x142,0x464)+'_')});for(let _0x53e868 of _0x5bb229[_0x5806de(0x6cd,0x796,0x29a,0x4f0)]){if(_0x53e868[_0x648a65(0x351,0x422,-0x49,0x770)][_0x648a65(0xf60,0xccc,0x114a,0xbf8)](_0x32f955['gOAau'])){let _0x2593fb=await _0x32f955[_0x648a65(0xcf5,0xa61,0x989,0x905)](getBuffer,_0x53e868[_0x648a65(0x25b,0x422,0x6e9,-0x81)]);alpha[_0x5806de(0x2b9,0x6d6,0x515,0x874)+'e'](from,_0x2593fb,video,{'thumbnail':Buffer[_0x648a65(0x724,0x658,0x322,0x1c2)](0x8f*0x2e+-0x1f2a*-0x1+-0x38dc),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x53e868['type']});}else{let _0x43cd8a=await getBuffer(_0x53e868[_0x648a65(0x77b,0x422,0x206,-0x93)]);alpha[_0x5806de(0x1fe,0x6d6,0x9dd,0x54c)+'e'](from,_0x43cd8a,image,{'thumbnail':Buffer[_0x5806de(0x126,0x27c,0x62e,0x41c)](-0x1e45+-0x10f5*0x1+0x2f3a),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x53e868[_0x5806de(0x3f8,-0x2,-0x2a,-0x43)]});}}})['catch'](_0x1dd24f=>reply('Terjadi\x20ke'+_0x150c54(0x609,0xe03,0xd82,0xa31)+_0x342471(0x400,0x763,0x930,0xa86)+_0x342471(0x6eb,0xa6b,0xa49,0xb0c)+_0x342471(0x10d1,0x11c5,0xce5,0x8eb)+'ma'));break;case'ig':case _0x150c54(0xb08,0x776,0x996,0x873):case _0x150c54(0x142,0x2e4,0x9e0,0x5d3):case _0x150c54(0x809,0x6d7,0x758,0xc0a):case _0x150c54(0x98a,0x594,0x131,0x5b2):case _0x150c54(0xefb,0xa75,0x631,0xa5f):case'igvideo':case'instavideo':case _0x150c54(0x4c6,0x960,0x2e8,0x75e):case _0x150c54(0xec1,0x11b5,0xb93,0xdb6):case _0x342471(0x973,0x7f6,0x643,0x40b):case _0x150c54(0x704,0x7e8,0x57b,0x45f):case'igtv':case _0x342471(0xa24,0xda4,0xa3e,0xe6d):const _0x5b30b5={};_0x5b30b5[_0x150c54(0x1026,0xacd,0xc12,0xc28)+'t']=_0x150c54(0x7e6,0xd0f,0xbdc,0xc1a)+'t';const _0x15c757={};_0x15c757[_0x150c54(0xc52,0x6e4,0xe75,0x9d6)]='limit',_0x15c757[_0x150c54(0xda1,0xa41,0xe43,0xb98)]=_0x5b30b5,_0x15c757[_0x342471(0xab,-0x146,0x36e,0xe7)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0x9e0,0xa46,0x9aa,0x79e)](prefix),'©\x20'+ownername,[_0x15c757]);if(!isUrl(args[-0x1*0x15a9+-0xfe5*0x1+0x16*0x1b5])&&!args[-0x1*-0x371+-0x6d6+0x365][_0x342471(0xd5f,0x963,0xc60,0xb16)]('instagram.'+'com'))return reply(lang[_0x342471(0x900,0x9a5,0x74c,0x521)]());let urlnya=q;hx['igdl'](urlnya)[_0x150c54(0x208,0x933,0x123,0x650)](async _0x49b297=>{function _0x320346(_0x2d8e15,_0xcc582b,_0xae227b,_0x2a816a){return _0x150c54(_0x2d8e15-0x65,_0xcc582b,_0xae227b-0x51,_0x2d8e15- -0x1ac);}const _0x11a879={'pVVgY':'mp4','yDtrG':function(_0x5e5365,_0x55439f){return _0x5e5365(_0x55439f);}};function _0x5b879f(_0xabf1ca,_0x34a2b3,_0xf79d96,_0x4224c9){return _0x150c54(_0xabf1ca-0x173,_0x4224c9,_0xf79d96-0x116,_0xf79d96- -0x1a6);}for(let _0x540c96 of _0x49b297[_0x5b879f(0x5ed,0x697,0xa23,0xbe2)]){if(_0x540c96[_0x5b879f(0x56e,0x57f,0x2d3,0x347)]['includes'](_0x11a879[_0x320346(0x726,0x562,0x4c2,0x997)])){let _0x358e34=await _0x11a879['yDtrG'](getBuffer,_0x540c96[_0x320346(0x2cd,0x7fa,-0xeb,0x39)]);alpha[_0x320346(0x95d,0xbce,0x4a1,0x7b6)+'e'](from,_0x358e34,video,{'thumbnail':Buffer['alloc'](0x2*-0xd29+0x741+0x1*0x1311),'quoted':mek,'caption':_0x320346(0x4e3,0x913,0x7a5,0x523)+'•\x20\x20'+_0x540c96[_0x5b879f(0x181,-0x1f6,0x28b,0x7a0)]});}else{let _0x5e445e=await getBuffer(_0x540c96[_0x320346(0x2cd,-0x113,0x618,-0x216)]);alpha[_0x320346(0x95d,0x6d4,0xc89,0x962)+'e'](from,_0x5e445e,image,{'thumbnail':Buffer[_0x320346(0x503,0x900,0x668,0x234)](0x1*0x719+-0x1234+0xb1b),'quoted':mek,'caption':_0x5b879f(0xd7,0x8b3,0x4e9,0x4a)+'•\x20'+_0x540c96[_0x5b879f(-0xd8,0x30e,0x28b,0x62f)]});}}})[_0x342471(0x430,0xd14,0x91c,0x88d)](_0x23014b=>{const _0x1b2282={'OFGJF':function(_0x500120,_0x5eef7c){return _0x500120(_0x5eef7c);}};function _0x4eef22(_0x2bf102,_0x297f05,_0x192ad0,_0x19ff9b){return _0x342471(_0x2bf102,_0x297f05-0x6f,_0x192ad0- -0x34,_0x19ff9b-0x6a);}_0x1b2282['OFGJF'](reply,_0x4eef22(0xd13,0xba7,0x7e2,0x813)+'or');}),await limitAdd(sender,limit);break;case'ppcouple':case _0x342471(0xaa4,0xe2b,0x9a9,0xce1):const _0x1859fd={};_0x1859fd['displayTex'+'t']=_0x150c54(0x10c8,0x904,0x820,0xc1a)+'t';const _0x11d61f={};_0x11d61f[_0x342471(0x54c,0x4ca,0x913,0x4e6)]='limit',_0x11d61f['buttonText']=_0x1859fd,_0x11d61f[_0x342471(0x2e4,-0x1b2,0x36e,-0x1a5)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xdfb,0xb50,0x6a2,0xa6d)](prefix),'©\x20'+ownername,[_0x11d61f]);if(!isGroup)return reply(lang[_0x342471(0xb81,0x7b6,0xa56,0x93c)]());var datax=fs[_0x150c54(0x404,0x9a5,0x372,0x494)+'nc']('./lib/coup'+_0x150c54(0x5c3,0xc76,0xab9,0x77e));jsonData=JSON['parse'](datax),randIndex=Math[_0x150c54(0x849,0x48d,0x882,0x662)](Math[_0x150c54(0xc41,0x776,0x95f,0x77d)]()*jsonData[_0x342471(0x380,0x431,0x35c,-0xca)]);let randKey_=jsonData[randIndex];Laki=await getBuffer(randKey_[_0x150c54(0xd10,0x644,0x6e5,0x89e)]),await alpha[_0x150c54(0x100a,0xcf2,0xa40,0xb09)+'e'](from,Laki,image,{'caption':_0x150c54(0xbdd,0x8f8,0x8fe,0xc8c),'quoted':mek,'thumbnail':Buffer[_0x342471(0x3cb,0x35a,0x5ec,0x1a0)](-0x937+0x18d*0x17+-0x1a74)}),Cewe=await getBuffer(randKey_['female']);const mediaxox=await alpha[_0x342471(0xda9,0xe89,0xa12,0xc22)+_0x150c54(0xc55,0x426,0x6ec,0x87c)](from,Cewe,MessageType[_0x150c54(0x50b,0xdc4,0x5d6,0x95f)],{'thumbnail':Buffer[_0x342471(0x23c,0x6bc,0x5ec,0x211)](-0x6e1+-0x1832*0x1+0x1f13)});let bacotluxxo=mediaxox[_0x150c54(0xce8,0xbf3,0x624,0x992)][_0x150c54(0xbc4,0x944,0xa1f,0xc5d)+'essage']?mediaxox['message'][_0x150c54(0x76b,0xd07,0xe93,0xc5d)+_0x342471(0x822,0x10ee,0xcb0,0x8ec)]:mediaxox;const _0x19daf1={};_0x19daf1[_0x342471(0xc4c,0xf8f,0xb65,0x7ef)+'t']=_0x150c54(0x599,0xa11,0x7bc,0x768);const _0xa0f4e7={};_0xa0f4e7[_0x342471(0xdaf,0x676,0x913,0x70d)]=_0x342471(0x5a4,0xa6c,0x5c0,0x57b),_0xa0f4e7[_0x150c54(0xf21,0xd49,0xcc8,0xb98)]=_0x19daf1,_0xa0f4e7['type']=0x1;const _0xf408e={};_0xf408e[_0x342471(0x953,0xa31,0xb65,0x7a1)+'t']='Next\x20➡️';const _0xd1cee3={};_0xd1cee3[_0x342471(0x5b7,0x61e,0x913,0x688)]=''+command,_0xd1cee3[_0x150c54(0x9f5,0x66e,0xd12,0xb98)]=_0xf408e,_0xd1cee3[_0x150c54(0x332,0x370,0x8ec,0x431)]=0x1;const buttonsxox=[_0xa0f4e7,_0xd1cee3],_0x52274a={};_0x52274a[_0x150c54(0xa3b,0x82d,0x8a4,0xcdc)+'t']='*Cewe*',_0x52274a[_0x342471(0x618,0x1d8,0x5e1,0xa6c)]='©\x20'+creator,_0x52274a[_0x150c54(0x10ce,0xc1a,0x9d3,0xcdd)]=buttonsxox,_0x52274a[_0x150c54(0x345,0x26d,0x990,0x614)]=0x4,_0x52274a[_0x150c54(0xac,0x739,0x940,0x49c)+'ge']=bacotluxxo[_0x342471(0x658,0x5c4,0x8cf,0x8ad)][_0x342471(-0x3f,0x415,0x3d9,0x5b4)+'ge'];const btnxo___=_0x52274a,_0x6862f3={};_0x6862f3[_0x150c54(0x614,0x32b,0x82,0x4bd)]=mek,alpha['sendMessag'+'e'](from,btnxo___,MessageType['buttonsMes'+_0x150c54(0x3dd,0x390,0x444,0x87c)],_0x6862f3)[_0x342471(0x478,0xc0f,0x91c,0xe0f)](_0x1b9e54=>{function _0x4717a2(_0x259441,_0x45654d,_0x191656,_0x50b836){return _0x342471(_0x45654d,_0x45654d-0x1f4,_0x50b836-0x1b2,_0x50b836-0x17d);}function _0x17b349(_0x5029d9,_0x3800fd,_0x56c1b6,_0x382c03){return _0x150c54(_0x5029d9-0x40,_0x5029d9,_0x56c1b6-0x1af,_0x3800fd-0xb7);}const _0x56d037={};_0x56d037[_0x17b349(0x8d6,0x928,0x476,0x945)]=_0x17b349(0x511,0x937,0x4bf,0x8f5)+_0x4717a2(0xb00,0x9d0,0x73e,0x6ac)+_0x17b349(0xeca,0xb59,0x979,0xc25)+_0x4717a2(0x573,0xb7b,0x5bb,0x642)+'gi';const _0x4e7f65=_0x56d037;reply(_0x4e7f65[_0x17b349(0x4bb,0x928,0xc2c,0x78d)]);}),await limitAdd(sender,limit);break;case _0x150c54(0x3eb,0x866,0xaba,0x742):case _0x342471(0xefe,0xc03,0xa08,0x6ce):const _0x554b21={};_0x554b21['displayTex'+'t']=_0x150c54(0xfcd,0x111a,0xbd1,0xc1a)+'t';const _0x215232={};_0x215232[_0x150c54(0x5a7,0x9c9,0xe14,0x9d6)]='limit',_0x215232[_0x150c54(0xa4d,0xcee,0x741,0xb98)]=_0x554b21,_0x215232[_0x342471(0x87b,0x615,0x36e,0x552)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xea4,0xbd1,0xb8d,0xa6d)](prefix),'©\x20'+ownername,[_0x215232]);if(!q)return reply(_0x150c54(0xcf1,0xc5d,0x955,0xbcd)+'uery');async function pinterestSearch(_0x5f3e04){const _0x52d755={'GyYor':function(_0x31ef8a,_0x3a391e){return _0x31ef8a*_0x3a391e;},'jQlyw':function(_0x17a95d,_0x6eb6b6,_0x21a308){return _0x17a95d(_0x6eb6b6,_0x21a308);},'rwiSR':_0x58696e(0xc50,0xcff,0xe3f,0xd59)+_0x58696e(0xf28,0xd49,0x104d,0x96e)+_0x58696e(0x5ab,0x94d,0x936,0x76b)+_0x58696e(0xbdf,0x826,0x616,0xcda)+_0x5e0652(0xab6,0x83f,0x7fa,0x538),'YHjPN':_0x58696e(0xac8,0x9db,0x87b,0x6ef)+_0x5e0652(0xa8d,0x4e0,0x8f7,0xc6d),'lRUdd':_0x5e0652(0x6d4,0x4e5,0x612,0x3a8),'KJgTN':_0x5e0652(0x7f,0x6bb,0x4f6,0x89f),'dGDsH':_0x58696e(0xb73,0xa9f,0xa7f,0x716)+'n','UoNDy':_0x58696e(0x7f7,0xba7,0x849,0xa7c),'qcEFa':'XMLHttpReq'+_0x58696e(0x92b,0x9c3,0x8dd,0x57f),'fQSaF':_0x58696e(0xd03,0x87c,0x5b4,0xc67)+_0x58696e(-0x93,0x447,-0xd1,0x8b9)+_0x5e0652(0xf18,0xda3,0xdd4,0x109a),'QYoWj':_0x58696e(0xc54,0xb2e,0x1053,0x7fd),'nlUXx':'GET'};function _0x58696e(_0x1bd660,_0x49d00f,_0x24daeb,_0x168c72){return _0x342471(_0x168c72,_0x49d00f-0x16b,_0x49d00f-0xd7,_0x168c72-0x12a);}function _0x5e0652(_0x3984c,_0x210ed3,_0x5e228d,_0x599744){return _0x342471(_0x210ed3,_0x210ed3-0x1a1,_0x5e228d-0x1f4,_0x599744-0x2f);}return new Promise((_0x11a776,_0x44ed1e)=>{function _0x293aaa(_0x442d3c,_0x1395c4,_0x4d07f7,_0x574182){return _0x58696e(_0x442d3c-0x27,_0x4d07f7- -0x2ef,_0x4d07f7-0x11,_0x574182);}function _0x116f4e(_0x39b327,_0x5d15d4,_0x5bac47,_0x1c5659){return _0x58696e(_0x39b327-0x95,_0x39b327- -0x509,_0x5bac47-0x118,_0x5d15d4);}_0x52d755['jQlyw'](fetch,_0x116f4e(0x373,0x29,-0x81,0x83d)+'w.pinteres'+_0x293aaa(0x3fd,0xa00,0x673,0xb43)+_0x116f4e(0x172,0x54b,0x623,0x153)+_0x293aaa(0x89c,0x4b2,0x3aa,0x169)+_0x116f4e(0x6e9,0x74e,0x44d,0x87c)+'ource_url='+_0x116f4e(0x2a0,0x1b9,0x15e,0x114)+_0x293aaa(0x650,0xa26,0xa26,0xa7c)+'3Fq%3D'+_0x5f3e04+(_0x116f4e(0x686,0x76d,0x42c,0x952)+_0x116f4e(-0x10,-0x49a,-0x414,-0xcf)+'22%3A%7B%2'+_0x293aaa(0x96b,0x8fe,0x4f5,0x1a5)+_0x293aaa(0x691,0xabe,0x8fd,0xbe6)+_0x293aaa(0x829,0x715,0x654,0x3ef)+'ery%22%3A%'+'22')+_0x5f3e04+(_0x116f4e(0x8,-0x1c0,-0x2ad,0x1b0)+'cope%22%3A'+_0x293aaa(0x92a,0x794,0x802,0xaef)+_0x116f4e(0x447,-0xde,0x231,0x679)+_0x293aaa(0xd96,0x8ff,0x874,0x5c9)+_0x116f4e(0x4da,0x2e7,0x819,0x59)+_0x293aaa(0x122,0xe5,0x4f7,0x16)+_0x293aaa(0xd32,0xa76,0x963,0x5c3)+_0x116f4e(0x25c,0x287,0x335,0x39)+'t%22%3A%7B'+_0x293aaa(0x4f0,0x666,0x842,0x50b)+_0x116f4e(0x568,0x209,0xa07,0x1b0)+'59'),{'headers':{'accept':_0x52d755[_0x116f4e(0x25a,0x49,-0x1c6,0x220)],'accept-language':_0x52d755[_0x293aaa(0x6ff,0x745,0x3db,0x1ef)],'cache-control':_0x52d755[_0x293aaa(0x41d,-0x50,0x137,0xb2)],'pragma':_0x52d755[_0x116f4e(-0xe3,0x39c,0x5d,-0x1b2)],'sec-fetch-dest':_0x293aaa(0x1cf,0x638,0x4c5,0x5a2),'sec-fetch-mode':_0x52d755[_0x293aaa(0xb57,0x1d9,0x6a1,0x8fd)],'sec-fetch-site':_0x52d755[_0x116f4e(0x612,0x862,0x26b,0x355)],'sec-gpc':'1','x-app-version':_0x293aaa(0x199,-0x1a2,0x2b5,-0x161),'x-pinterest-appstate':_0x52d755[_0x116f4e(0xa8,-0x3fd,-0x221,0x543)],'x-requested-with':_0x52d755['qcEFa']},'referrer':_0x52d755[_0x293aaa(0xa2b,0xc35,0x9b3,0xb0d)],'referrerPolicy':_0x52d755[_0x116f4e(0x6,0x24c,-0x16f,-0x45f)],'body':null,'method':_0x52d755[_0x293aaa(0x2e2,0x841,0x361,0x2f2)],'mode':_0x116f4e(-0x130,-0x40,0x2c9,-0x15)})[_0x116f4e(0x15b,-0x2df,0x68a,0x13d)](_0x141f46=>_0x141f46['json']())[_0x293aaa(0x211,0x852,0x375,-0x1c2)](_0x1a71c1=>{const _0x24e80b=_0x1a71c1['resource_r'+_0xb2e3e2(0x1bd,0x1f,0x391,0x3a5)][_0xb2e3e2(0x51d,0x9de,0x9bc,0x8b7)][_0xb2e3e2(0x9dc,0x503,0x69a,0xad6)][Math['floor'](_0x52d755['GyYor'](Math[_0x11392c(0x255,0x211,0x3ed,0x68f)](),_0x1a71c1[_0xb2e3e2(0xa21,0xa89,0x8aa,0x406)+_0x11392c(0x1d,-0xa7,-0x130,0x1bc)][_0x11392c(0x288,0x584,0x2ab,0x4e4)][_0x11392c(0x1bb,0x262,-0xff,0xe8)][_0xb2e3e2(0x5ce,0x774,0x2eb,0xa0)]))];function _0x11392c(_0x3260f7,_0x19f4ca,_0x123ffb,_0x1bf6a0){return _0x116f4e(_0x19f4ca- -0x77,_0x1bf6a0,_0x123ffb-0xee,_0x1bf6a0-0xbf);}var _0x374b61=[];function _0xb2e3e2(_0x1f8c8a,_0xf66aa2,_0x5ac7a5,_0x240e45){return _0x116f4e(_0x5ac7a5-0x3c1,_0x240e45,_0x5ac7a5-0x32,_0x240e45-0x49);}const _0x521dcc={};_0x521dcc[_0xb2e3e2(0xad4,0x106a,0xb66,0xd9a)]=_0x24e80b[_0xb2e3e2(0xa32,0x94f,0x631,0x4e2)][_0x11392c(-0x247,0xc5,0x2c6,0x340)][_0xb2e3e2(0x81c,0x2f8,0x345,0x59c)],_0x374b61[_0x11392c(0xc52,0x7e2,0x484,0xaf5)](_0x521dcc),_0x11a776(_0x374b61);})[_0x116f4e(0x4ea,0x31,0x997,0x879)](_0x44ed1e);});}const pinterest=_0x1b9284=>new Promise((_0x3b5724,_0x2c49d8)=>{const _0x294f30={'eybNv':function(_0x66b949,_0x5c76a2){return _0x66b949(_0x5c76a2);}};function _0x56c54f(_0x361f99,_0x3d7596,_0x423e59,_0x2583f2){return _0x342471(_0x2583f2,_0x3d7596-0x51,_0x423e59- -0x33b,_0x2583f2-0x109);}pinterestSearch(_0x1b9284)[_0x56c54f(0x4f1,0x451,0x252,0x50)](_0x4a170b=>{const _0x3a4007={};function _0x10f662(_0x10897c,_0x36e43a,_0x5cb7f6,_0x4dbadf){return _0x56c54f(_0x10897c-0x198,_0x36e43a-0xa4,_0x4dbadf-0x22f,_0x36e43a);}function _0x16ce3c(_0x765bef,_0x2d17f0,_0x884809,_0x4d7468){return _0x56c54f(_0x765bef-0x35,_0x2d17f0-0xce,_0x4d7468-0x303,_0x765bef);}_0x3a4007[_0x16ce3c(0x7fe,0x950,0xc16,0x910)]=0xc8,_0x3a4007[_0x10f662(0x4df,0x5ac,0x5f5,0x790)]=_0x4a170b[0x230d+0x1a96+-0x1fd*0x1f][_0x10f662(0xa7d,0x7ed,0xb1f,0xacb)],_0x294f30['eybNv'](_0x3b5724,_0x3a4007);})['catch'](_0x2c49d8);});pinterest(q)[_0x342471(0x6e9,0x973,0x58d,0x97f)](async _0x475351=>{function _0x16eca4(_0x44165a,_0x305363,_0x1ef8f7,_0x27194d){return _0x150c54(_0x44165a-0xd3,_0x27194d,_0x1ef8f7-0x1e0,_0x44165a- -0x405);}const _0x3b230c={'DfMxk':function(_0x398ebf,_0x33580c){return _0x398ebf(_0x33580c);}};let _0x270b4a=await _0x3b230c['DfMxk'](getBuffer,_0x475351[_0x5b4fe5(0x6f5,0x71a,0x26d,0xbca)]);function _0x5b4fe5(_0x3998dc,_0x4d1494,_0xb17c48,_0x4fecf5){return _0x342471(_0x3998dc,_0x4d1494-0x46,_0x4d1494- -0x182,_0x4fecf5-0xcc);}alpha['sendMessag'+'e'](from,_0x270b4a,MessageType[_0x16eca4(0x55a,0xa80,0x9a8,0x81c)],{'caption':_0x16eca4(0x22a,-0x191,0x50d,0x7e)+_0x16eca4(0x7db,0xb81,0x50d,0xb4a)+q,'quoted':mek,'thumbnail':Buffer[_0x16eca4(0x2aa,0x370,0x5d,0x5c1)](0x14e6+-0x2*-0x1238+-0x3956)});})[_0x150c54(0x8e6,0xaaa,0xb50,0x9df)](async _0x5ce835=>{function _0x359793(_0x2ef71b,_0xfbb8a0,_0x583885,_0x2e1405){return _0x150c54(_0x2ef71b-0x130,_0x2ef71b,_0x583885-0x176,_0x583885- -0x395);}function _0x4e878e(_0x50964b,_0x49ee46,_0x4db27e,_0xfaea2b){return _0x150c54(_0x50964b-0x6b,_0x49ee46,_0x4db27e-0x1e,_0x4db27e- -0x463);}const _0x59935b={'eNtBT':function(_0x3ae059,_0x328aef){return _0x3ae059(_0x328aef);},'kLIWV':_0x4e878e(0x4c5,0x738,0x41d,0x483)+'salahan'};_0x59935b[_0x359793(0xaa0,0xa74,0x978,0xd67)](reply,_0x59935b[_0x359793(0x7b9,0x27,0x366,-0x186)]);}),await limitAdd(sender,limit);break;case'hidetag':case'_`':{if(!isGroup)return reply(lang[_0x150c54(0x87e,0x8c0,0xb30,0xb19)]());let pe=[_0x342471(0x2f2,0x415,0x3c7,0x27e)+_0x342471(0xd0e,0x5d7,0x8c0,0x6eb)+_0x150c54(0xe1a,0x558,0xe3e,0x9cc),_0x342471(0x4c2,0x22f,0x3e5,0x3c8)+_0x342471(0xc97,0x998,0xaec,0x9ed)+_0x342471(0x68c,0xccc,0x909,0xba9),_0x150c54(0x586,0x8f0,0xcf0,0x935)+_0x342471(0x551,0x88f,0xa0c,0xd99)+_0x150c54(0x7aa,0x326,0x51d,0x5db),'6281385402'+_0x150c54(0x100b,0xe04,0xc69,0xdb5)+'8166@g.us','6288279575'+_0x150c54(0x62e,0x152,0x7ce,0x5ec)+_0x342471(0x258,0xa48,0x781,0x8aa),_0x342471(0x263,-0x1a3,0x338,0x6e6)+_0x342471(0x43d,0xd19,0x906,0xa21)+_0x150c54(0x7f6,0x689,0x814,0x75a),_0x342471(0x4b8,0xf0,0x338,0xe)+_0x150c54(0x79d,0x38a,0x441,0x740)+'028@g.us'];if(pe[_0x150c54(0xfbd,0xa39,0x1087,0xd23)](from))return reply('Dilarang\x20m'+_0x342471(0x312,0x4b3,0x6c9,0x86d)+_0x150c54(0x12ee,0x10ad,0x11aa,0xe07)+_0x150c54(0x7d1,0x8ce,0x307,0x581));if(!isGroupAdmins&&!mek[_0x150c54(0xb89,0x4c6,0xb7a,0x69f)][_0x150c54(0x4cf,0xcaa,0xb0f,0x987)]&&!isOwner)return reply(lang[_0x150c54(0x7e3,0xaf4,0xa56,0xa7b)+'n']());var value=args[_0x150c54(0x102f,0xfb1,0xf29,0xb4a)]('\x20'),group=await alpha[_0x150c54(0x10d9,0x11db,0xe89,0xd4a)+_0x342471(0xb30,0x2b8,0x7cc,0x71e)](from),member=group[_0x150c54(0x8fb,0xd1a,0x971,0x89b)+'ts'],mem=[];member['map'](async _0x11afdb=>{function _0x4b0336(_0x4ee48c,_0xf9be07,_0x9ae87c,_0x359d93){return _0x150c54(_0x4ee48c-0x18d,_0x4ee48c,_0x9ae87c-0x1b2,_0x359d93- -0x441);}function _0x1142ee(_0x2aa6f2,_0x859e38,_0x1af7d1,_0x2652e3){return _0x150c54(_0x2aa6f2-0x9d,_0x1af7d1,_0x1af7d1-0xee,_0x2aa6f2- -0x274);}const _0x484b8e={};_0x484b8e[_0x4b0336(0x110,-0x1f,0x1bf,0x1ea)]=_0x1142ee(0x70a,0x382,0x8c2,0x8ae);const _0x1baf5e=_0x484b8e;mem[_0x4b0336(0x624,0x542,0x841,0x90d)](_0x11afdb['id'][_0x4b0336(0x4cc,-0x270,-0x24,0x177)](_0x1baf5e['cWPDd'],_0x4b0336(0x44,0x43f,-0x3d5,0x153)+'.net'));});const _0x1bca76={};_0x1bca76['mentionedJ'+'id']=mem;const _0x2d7d8c={};_0x2d7d8c[_0x342471(0xa67,0xbdd,0xa4f,0x658)]=value,_0x2d7d8c[_0x342471(0xc7f,0xa3d,0x942,0x682)+'o']=_0x1bca76,_0x2d7d8c[_0x342471(-0x52,0x31f,0x3fa,0x1cc)]=mek;var optionshidetag=_0x2d7d8c;const _0x564188={};_0x564188['remoteJid']=_0x342471(0x219,0x249,0x418,0x4a)+_0x150c54(0x1026,0x991,0xe68,0xc85)+'616@g.us',alpha['sendMessag'+'e'](from,optionshidetag,text,{'quoted':{'key':{'fromMe':![],'participant':_0x150c54(0x9c5,0xfbd,0x841,0xb1e)+_0x150c54(0x6d3,0x722,0x833,0x5b6),...from?_0x564188:{}},'message':{'imageMessage':{'url':_0x342471(0x79b,0xbbb,0xa85,0x6a1)+_0x342471(0x76b,0x7d8,0x40f,0x336)+'.net/d/f/A'+'t0x7ZdIvui'+'cfjlf9oWS6'+_0x342471(0x9ca,0x43f,0x8c2,0x8cf)+'-hZIVPLsI7'+_0x150c54(0xb80,0xb97,0x50b,0x807),'mimetype':_0x342471(0x993,0x1d1,0x536,0x25f),'caption':''+fake,'fileSha256':_0x150c54(0xd53,0x549,0x8ac,0x846)+_0x150c54(0x451,0x927,0x888,0x526)+'LJKjIJt54f'+_0x342471(0x648,0xacb,0xa89,0x851)+_0x150c54(0xa70,0x4cc,0x2b7,0x68c),'fileLength':_0x150c54(0x91b,0xdb7,0xc81,0xb7c),'height':0x438,'width':0x437,'mediaKey':_0x342471(0x37a,0x1d2,0x456,0x773)+_0x150c54(0xdea,0x1132,0xd25,0xc36)+_0x150c54(0xfa3,0x71e,0xd79,0xc27)+_0x150c54(0xe18,0x92f,0xd7e,0xd88)+_0x150c54(0xa24,0xb51,0xa5b,0xcbf),'fileEncSha256':_0x150c54(0xace,0x983,0x9ec,0xb5e)+_0x150c54(0x5ed,0x553,0x762,0x9ff)+_0x150c54(0x8c7,0x3e6,0x243,0x759)+'aZu4faWG/C'+'yRY=','directPath':'/v/t62.711'+'8-24/21427'+'642_840952'+_0x342471(0x6bd,0x3af,0x7f3,0xc7b)+_0x150c54(0xaf7,0xbb3,0x1020,0xddb)+_0x342471(0x5c7,0x954,0x57d,0x41d)+'.enc?oh=3f'+_0x342471(0x44d,0x5a2,0x7d2,0x62a)+_0x150c54(0xed4,0x91b,0x7be,0xbb5)+_0x342471(0xa3d,0x92b,0xb8b,0x872)+'&oe=602F3D'+'69','mediaKeyTimestamp':_0x150c54(0x305,0x853,0xbd9,0x787),'jpegThumbnail':fs[_0x342471(-0x5,-0xf8,0x3d1,0x72b)+'nc'](_0x342471(0x6b1,0x6c2,0xaf0,0xb62)+thumbnail)}}}}),await limitAdd(sender,limit);}break;case'emojimix':{const _0x39c8e2={};_0x39c8e2['displayTex'+'t']=_0x150c54(0x984,0xf97,0x854,0xc1a)+'t';const _0x520a8e={};_0x520a8e[_0x342471(0xc41,0x746,0x913,0xded)]=_0x150c54(0xde2,0xd63,0x902,0xa6d),_0x520a8e[_0x150c54(0xd90,0x72f,0x100c,0xb98)]=_0x39c8e2,_0x520a8e[_0x150c54(0x5aa,0x2d,0x47f,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xb9a,0x687,0x9c9,0xa6d)](prefix),'©\x20'+ownername,[_0x520a8e]);if(!q)return reply(_0x342471(-0x78,-0x1b,0x352,0x542)+(prefix+command)+_0x150c54(0x303,0x35b,0x14d,0x482));let [emoji1,emoji2]=q['split']`+`,anu=await fetchJson(_0x342471(0xd38,0xf2e,0xc2b,0xe0b)+'nor.google'+_0x150c54(0x1261,0xb80,0x977,0xdc5)+_0x342471(0xa61,0x1ab,0x588,0x584)+_0x342471(0x264,0x5d9,0x427,-0x35)+_0x150c54(0x6b3,0x264,0x58e,0x775)+_0x342471(0x355,0x3a4,0x726,0x2b2)+_0x150c54(0xa45,0xb72,0xf2e,0xdd7)+'dCYQ&conte'+_0x150c54(0xa4c,0x1d9,0x8b4,0x5b4)+_0x342471(0xa6a,0x804,0x6c3,0x840)+_0x150c54(0xd4f,0xee2,0xe68,0xdd2)+'_transpare'+_0x150c54(0x60f,0x9cd,0xbe1,0x6f4)+_0x150c54(0x2fb,0x567,0xaef,0x82f)+_0x342471(0x417,0x983,0x544,0x7db)+_0x342471(0xc45,0xfc4,0xab2,0xa01)+'kitchen_v5'+_0x150c54(0x2c1,-0x142,0x3fa,0x3f4)+encodeURIComponent(emoji1)+'_'+encodeURIComponent(emoji2));for(let res of anu['results']){let encmedia=await alpha[_0x150c54(0xa90,0xacb,0x3a3,0x6b8)+_0x150c54(0xb07,0xb3a,0xf9d,0xdd4)](from,res[_0x342471(0x42,0x6eb,0x3b6,0xd6)],mek,{'packname':packname,'author':author,'categories':res[_0x150c54(0xe94,0x893,0x110f,0xc2a)]});}}break;case'tq':{var imgList=['https://f.'+_0x150c54(0xb03,0x1242,0x122e,0xdbe)+'/p_2032o0l'+_0x150c54(0xb12,0x5ab,0x95c,0x7de),'https://h.'+_0x150c54(0xdd5,0xf84,0xb5d,0xdbe)+_0x150c54(0x8ca,0xb74,0x914,0xc03)+'2e1.jpg','https://g.'+_0x150c54(0x1190,0xcaa,0x991,0xdbe)+_0x150c54(0xb2d,0x63a,0x43a,0x8a9)+_0x150c54(0xeb1,0xe22,0xda7,0xbcf),_0x342471(0xc06,0xeb8,0xa3d,0x580)+_0x150c54(0x1153,0x11fc,0x10c1,0xdbe)+_0x342471(0x7e9,0x958,0xcd5,0xe07)+_0x150c54(0xc68,0xdc1,0xb2e,0xd38),_0x342471(0xded,0xc9d,0xbc7,0x8af)+_0x342471(0xca1,0xcfa,0xcfb,0xcc3)+'/p_20325yp'+_0x342471(0xf30,0x808,0xc5c,0xd00),_0x342471(0xecd,0x853,0x9fe,0xe35)+_0x342471(0xe67,0xa6e,0xcfb,0xc1c)+'/p_2032vcy'+'c41.jpg',_0x342471(0x685,0x845,0x460,0x438)+_0x150c54(0xaa3,0x1049,0xb58,0xdbe)+'/p_2032z7a'+_0x150c54(0x834,0x38f,0x8be,0x883)],imgUrl=imgList[Math[_0x342471(0x1bd,0x57e,0x59f,0x637)](Math['random']()*imgList[_0x150c54(0x2f4,0x5f8,0x796,0x41f)])];tqto='\x0a\x0a•\x20ZEEONE'+_0x342471(0xf05,0xc5d,0xd1f,0x902)+'VINZ\x0a•\x20MIS'+_0x342471(0x90b,0x2ea,0x675,0x5b5)+_0x342471(0x6fd,0xf6,0x3fd,0x931)+'\x20\x0a•\x20FERDYZ'+_0x150c54(0x379,0x862,0x2c2,0x5e8)+_0x342471(0xcdd,0x728,0x822,0x9b9)+ini_mark[_0x342471(0x94d,0xf8b,0xae2,0x837)]('@')[-0x8ae+-0x29*0x6f+0x1a75];const _0x3c7c23={};_0x3c7c23['title']=''+ucapannya2,_0x3c7c23[_0x342471(0x8bc,0x553,0x9a3,0xe33)]='Subscribe\x20'+_0x342471(0x29b,0x912,0x5a3,0x4ff),_0x3c7c23[_0x150c54(0xc85,0xae8,0xa21,0x8ba)+'e']=_0x150c54(0x10b7,0xb10,0xa68,0xd8b),_0x3c7c23[_0x342471(0x84b,0xc92,0xa8a,0x5bc)+'rl']=''+imgUrl,_0x3c7c23[_0x342471(-0x7,0x39,0x336,0x346)]='',_0x3c7c23[_0x150c54(0x8d2,0xea6,0xfc9,0xcb1)]='https://yo'+_0x342471(0xca1,0x96c,0xaee,0x8fc)+_0x342471(0xcdf,0xe58,0xd21,0x807)+_0x342471(0x7f8,0x985,0x4ee,0x7f0)+_0x342471(0x90a,0xd64,0x899,0x657)+'lA';const _0x1d7e2d={};_0x1d7e2d[_0x342471(0xd1f,0x537,0xa4f,0xeb5)]=_0x150c54(0x1005,0xae1,0x12b3,0xdd6),_0x1d7e2d[_0x342471(0x697,0x62c,0xacd,0xf04)+_0x342471(0xb8d,0xb77,0xa27,0x527)]=0x3b9aca00,_0x1d7e2d[_0x342471(0x83,0x294,0x3fb,0x65f)+'d']=!![],_0x1d7e2d['sendEpheme'+'ral']=!![],_0x1d7e2d[_0x342471(0x9b,0x75c,0x3e8,0x4dc)+_0x342471(0xd45,0xcdf,0x95e,0xb6b)]=_0x3c7c23;const _0x378282={};_0x378282[_0x342471(0x1017,0xd27,0xae8,0x9c2)+'id']=[ini_mark],alpha['sendMessag'+'e'](from,tqto,text,{'thumbnail':fs['readFileSy'+'nc'](_0x150c54(0xa71,0xaf1,0xa8e,0xbb3)+thumbnail),'caption':_0x342471(0x8aa,0x9f9,0xd13,0xdb8),'contextInfo':_0x1d7e2d,'quoted':ftoko,'contextInfo':_0x378282});}break;case _0x342471(0x759,0xbe2,0x79e,0xa0e):case _0x342471(0x87b,0xb6e,0x76e,0x4ae):const _0x42c755={};_0x42c755[_0x150c54(0xc42,0x9ba,0xba8,0xc28)+'t']=_0x150c54(0xeec,0xc84,0xa42,0xc1a)+'t';const _0x2975ca={};_0x2975ca['buttonId']=_0x342471(0xc34,0x9d4,0x9aa,0xa43),_0x2975ca[_0x150c54(0x661,0xabd,0xdb1,0xb98)]=_0x42c755,_0x2975ca[_0x342471(0x87c,0x6c2,0x36e,0x3c1)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xbcf,0x9a8,0x83e,0xa6d)](prefix),'©\x20'+ownername,[_0x2975ca]);if(!q)return reply(_0x342471(0x5f0,0x3a8,0x5eb,0x3de));qes=args['join']('\x20');const _0x1ad71a={};_0x1ad71a[_0x150c54(0x95c,0x363,0xb92,0x882)]=_0x342471(0x4a6,0x507,0x938,0xcab)+'e-'+qes,_0x1ad71a[_0x150c54(0x32c,0x73a,0x757,0x84e)+'n']=''+creator,_0x1ad71a[_0x150c54(0x99d,0x9d2,0x2e0,0x55c)]=''+qes;const _0x50553a={};_0x50553a[_0x342471(0x726,0x8c9,0x7bf,0x7de)]=_0x150c54(0xc2b,0x605,0x4f2,0xa01)+_0x342471(0x71e,0xed2,0xb37,0xd40)+qes,_0x50553a[_0x150c54(0x45e,0x6dc,0x689,0x84e)+'n']=''+creator,_0x50553a['rowId']=''+qes;const _0x26c426={};_0x26c426['title']=_0x342471(0x37c,0x459,0x3c0,0x21d)+_0x150c54(0x9db,0xeba,0x6ba,0xb05)+qes,_0x26c426['descriptio'+'n']=''+creator,_0x26c426[_0x342471(0x2c9,0xc2,0x499,0x2fd)]=''+qes;const _0x5bf61e={};_0x5bf61e[_0x342471(0x626,0x31e,0x7bf,0x3c3)]=_0x342471(0x7cd,0xe00,0x920,0xd76)+_0x342471(0x95e,0x9c8,0xce0,0xaf4)+qes,_0x5bf61e['descriptio'+'n']=''+creator,_0x5bf61e[_0x342471(0x180,0x755,0x499,0x160)]=''+qes;const _0x2fe284={};_0x2fe284[_0x342471(0x712,0x624,0x7bf,0xbef)]='Emoji-What'+'sApp-'+qes,_0x2fe284[_0x342471(0xab7,0x591,0x78b,0xa4e)+'n']=''+creator,_0x2fe284[_0x342471(0x32e,-0x6f,0x499,0x559)]=''+qes;const _0x4d45fb={};_0x4d45fb[_0x150c54(0xd68,0x7c6,0x8ee,0x882)]='Emoji-Twit'+_0x342471(0xab9,0xb97,0x94c,0x426)+qes,_0x4d45fb[_0x150c54(0x88f,0xaed,0x87d,0x84e)+'n']=''+creator,_0x4d45fb[_0x342471(0x14e,0x127,0x499,0x513)]=''+qes;const _0x2c533f={};_0x2c533f[_0x342471(0xa71,0x978,0x7bf,0xab4)]=_0x150c54(0x246,0x340,0x9b0,0x67b)+_0x342471(0xc26,0xa8f,0xd4b,0x946)+qes,_0x2c533f[_0x342471(0x8d8,0x7b7,0x78b,0x620)+'n']=''+creator,_0x2c533f[_0x342471(0x7c5,0x818,0x499,0x85f)]=''+qes;const _0x2e580e={};_0x2e580e[_0x342471(0x5b0,0x797,0x7bf,0x9b4)]='Emoji-JoyP'+'ixels-'+qes,_0x2e580e[_0x342471(0x52f,0x764,0x78b,0x8bc)+'n']=''+creator,_0x2e580e[_0x342471(0x3a4,0x197,0x499,0x306)]=''+qes;const _0x79cbfe={};_0x79cbfe['title']=_0x150c54(0xaf1,0xa32,0x31f,0x67f)+'Moji-'+qes,_0x79cbfe[_0x150c54(0xbeb,0x77c,0xc10,0x84e)+'n']=''+creator,_0x79cbfe[_0x150c54(0x5ee,0x6af,0x312,0x55c)]=''+qes;const _0x3aaacd={};_0x3aaacd[_0x342471(0x69a,0x981,0x7bf,0x97c)]='Emoji-emoj'+'idex-'+qes,_0x3aaacd[_0x150c54(0x8bc,0x690,0x7f1,0x84e)+'n']=''+creator,_0x3aaacd[_0x342471(0x2b1,0x4d4,0x499,0x7c5)]=''+qes;const _0xf04195={};_0xf04195[_0x342471(0xbe5,0x341,0x7bf,0x49b)]='Emoji-Mess'+_0x150c54(0x52e,0x954,0x1ee,0x539)+qes,_0xf04195['descriptio'+'n']=''+creator,_0xf04195['rowId']=''+qes;const _0x2182ad={};_0x2182ad[_0x150c54(0xb9d,0x77c,0x52c,0x882)]=_0x150c54(0xd8a,0x8a6,0x1023,0xbd5)+qes,_0x2182ad['descriptio'+'n']=''+creator,_0x2182ad[_0x342471(0x416,0x84,0x499,0x977)]=''+qes;const _0xffa01a={};_0xffa01a[_0x342471(0x9fe,0xc97,0x7bf,0x64e)]=_0x150c54(0x694,0x34b,0x771,0x49f)+qes,_0xffa01a[_0x342471(0x2a4,0xa42,0x78b,0x378)+'n']=''+creator,_0xffa01a['rowId']=''+qes;const rows12=[_0x1ad71a,_0x50553a,_0x26c426,_0x5bf61e,_0x2fe284,_0x4d45fb,_0x2c533f,_0x2e580e,_0x79cbfe,_0x3aaacd,_0xf04195,_0x2182ad,_0xffa01a],_0x40ad87={};_0x40ad87['title']=_0x342471(0x5ed,0x594,0x419,0x808)+_0x150c54(0xa19,0xc2d,0x7aa,0xc11),_0x40ad87[_0x150c54(0x854,0x8bb,0x604,0x71b)]=rows12;const sections12=[_0x40ad87],listt12={'buttonText':_0x342471(0x92d,0x346,0x67c,0x61d)+'E','title':_0x342471(0xac5,0xb24,0xafa,0xfb9)+'\x20','description':_0x150c54(0x50e,0x617,0x680,0x475)+sender[_0x150c54(0xd9f,0xaa7,0xa2e,0xba5)]('@')[-0x2*0xa1d+-0xca6+-0x1*-0x20e0]+(_0x150c54(0x991,0x94d,0xc23,0xa92)+_0x150c54(0x375,0x2cd,0x55f,0x5ee)+_0x342471(0xd6b,0xfc4,0xc37,0xcd8)+'\x20ini\x20adala'+_0x342471(0xbe0,0xf3d,0xa7f,0xad9)+_0x342471(0xccc,0xe27,0xb2b,0xd79)+_0x150c54(0xb54,0xece,0xe42,0xa35)),'footerText':''+tampilTanggal+enter+tampilWaktu,'sections':sections12,'listType':0x1},_0x55ceee={};_0x55ceee[_0x150c54(0xd6c,0xcc6,0xa47,0xbab)+'id']=[sender];const _0x192eb4={};_0x192eb4[_0x150c54(0x3a6,0x44b,-0x5a,0x4bd)]=mek,_0x192eb4['contextInf'+'o']=_0x55ceee,alpha[_0x150c54(0xd92,0xb52,0xcea,0xb09)+'e'](from,listt12,MessageType[_0x150c54(0x805,0x618,0x478,0x641)+'e'],_0x192eb4),await limitAdd(sender,limit);break;}function _0x5b71(){const _0x3808d5=['a\x20menjadik','globalObje','dalah\x20peng','ketik\x20','UqcYk','2Fpins%2F%','\x20merasa\x20ce','amu,\x20terus','Dimanapun\x20','da\x20uang\x20ya','\x20yang\x20udah','_ma_consol','container','Facebook','\x20bisa\x20mera','kan\x20apapun','pap\x20ke\x20sal','eNtBT','Emoji-JoyP','\x20tiktok_','cuma\x20menci','call\x20whats','Enable','s\x20duluan\x20s','hak\x20kamu,\x20','\x0a*🚀\x20Qualit','.presentat','ma-sama.','eRvlj','ah\x20mengert','an\x20putra\x20a','vEOmB','sourcecode','NeoQy','n\x20berkeing','xk1.jpg','en?type=tr','oxy\x20Menu','cript:nth-','includes','NwfaJ','AgPDP','keta','an\x20fitur\x20c','XDVws','aimu.','\x20bohong,\x20i','animecmd','value','aya\x20tidak\x20','tpwXOQusBR','g\x20yang\x20bis','SDdWM','AWnrN','videos','a\x20atau\x20tah','ZCENX','n/json,\x20te','HTbaL','DISABLE\x20VE','4i1.jpg','Sekarang\x20a','ierge_de_1','DrQus','Upgrade\x20Pr','\x22col-md-10','aePRl','i\x20sesuatu\x20','emium','37.36','a\x20Masterca','berlatih?”','di\x20sini','\x20(KHTML,\x20l','Kesabaran\x20','💋\x20*Fullnam','soundcmd','kuni','groupMetad','endiri','photooxycm','i\x20tertangk','push','berkontrib','ang\x20bisa\x20m','Penundaan\x20','gimana\x20bro','\x20diri\x20send','“Menahan\x20g','72PmukbR','ntaimu.','us\x20berhasi','0FGwkw==','katailham','nsfw\x20on','an.”','ya\x20milik\x20t','\x20takut\x20sam','🐚\x20〉ɞ\x20Keran','Source\x20scr','0.8,es;q=0','lo\x20pernah\x20','iar\x20Tuhan\x20','quotescmd','api/imageg','EBOOK\x20DOWN','🗯️\x20〉ɞ\x20Quote','dahulu\x20den','DBdaL','m/c/zeeone','rty=\x22og:im','tek\x20yang\x20p','kPTTv',';\x20codecs=\x22','erjebak\x20ol','h\x20mencoba\x20','tuk\x20orang-','wZNKs','pussy','essage','on\x20below','Yang\x20palin','ak\x20yang\x20ki','Siapa\x20nama','Click\x20butt','DFMgJ','spam','amu\x20sakit\x20','makercmd','MdBda','tai','hWKvW','GoPrg','aha\x20adalah','\x20kamu\x20putu','boleh\x20beda','ten\x20untuk\x20','uah\x20biola;','ZJyNF','\x20yang\x20bera','a0errAFnXx','_Menanmpil','ketik\x20pake','PHOTO','n/vnd.open','product','buah\x20seped','rYAYVeWq-7','ument.spre','ail','*MEDIAFIRE','ECT','nusia.\x20Tap','\x20meriang-m','ery%22%3A%','f\x20atau\x20tek','/p_2032xlj','\x20membagika','lizard','q=0.9','HuONO','itEoX','0_9_3)\x20App','dul\x20video\x20','ak\x20makan\x20d','XGrRm','/webp,imag','osoft-','a\x20yang\x20ing','nsfw_avata','Lebih\x20baik','_Kata-kata','mand\x20ya\x20sa','yLqKH','VBhRX','ource_url=','eDkWu','\x20kamu\x20belu','ang.','rbelalak\x20a','iuynG','duration','dak\x20untuk\x20','2\x20Safari/6','guage','498-161976','igreels','n\x20ke\x20manta','Tes\x20aja\x20om','formats','ephoto360c','pleWebKit/','lempar.”','benarnya\x20k','top4top.io','h\x20banyak\x20u','fKSHW','CIydY','97m/gdkX/D','HkXxt','“Kegagalan','apis.com/v','Cogan','r\x20?”','meow','\x20pergi\x20jau','Avusw','Zv7ttfk8LF','microforma','ATSeP+KLh+','enjadi\x20ora','VZzsb',',\x20maka\x20tem','ika\x20Anda\x20i','filter=png','eorang\x20pri','sSticker','*📭\x20Quality','tqto','uGQctUWRUR','me/67.0.33','-renang\x20ke','rsion/9.0.','5727880763','⋮☰\x20MENU','pian\x20hadir','1.2\x20Safari','mgLtC','_masturber','\x0a*🌀\x20Url\x20:*','\x0a•\x20HADS\x0a•\x20','mYtiZ','channel/UC','_Membuat\x20l','an-temanmu','101\x20Firefo','lin\x20aku,\x20a','e\x20Gecko)\x20V','ar\x20sambil\x20','caption,\x20a','x-guest-to','ntNqu','1\x20Safari/5','upcmd','\x20tidak\x20di\x20','group_','gan\x20adalah','peKuD','thumbnails','e-12','PMiJl','gt\x20kamu\x20ch','ZZHbQ','TNFKZ','document','_Semua\x20fit','\x20Chrome/69','arah\x20yang\x20','listRespon','at\x20anda\x20te','an\x20senyuma','_Sumber\x20bo','Emoji-Twit','_Gambar\x20co','i,\x20sederha','licy','mburu\x20Mile','idetag\x20di\x20','e-9','XctUy','-officedoc','ndiri.','XTHVn','asi\x20pendek','book-','t1000','\x0a*👍\x20Likes\x20','instagrams','lah\x20menjad','*🌍\x20Type\x20:*','n/pdf','IjUPq','\x20kejujuran','\x20akan\x20menj','mime','sia\x20yang\x20s','href','Slide\x5c(\x27(.','g.us','ji\x20karakte','_Logo\x20make','lKAXN','api\x20kebias','\x20pekerjaan','999999999','ku\x20tidak\x20b','uploadDate','stri\x20yang\x20','\x20|\x20Request','bot_','an\x20lagu/qu','flZeT','elas\x20lalu\x20','ihRtv','galanya\x20ba','ZdbJR','81IUq16cHj','success','ka\x20aku\x20sak','elegram\x20Ra','Dengan\x20dem','_Hem\x20apaya','iv.entry-b','videoWidth','cors','kursi,\x20sem','\x0a⭔\x20Views\x20:','*🔗\x20Url\x20:*\x20','Bwlku','itu\x20sama\x20d','dqUwb','No\x20media','o360\x20Menu','i\x20Anda\x20han','kamu\x20semua','om/','KAtfA','pagar\x20peli','💬\x20〉ɞ\x20Textp','KWrdX','GFRQZ','r\x20textpro.','ng\x20dihabis','FoPYk','\x20aku,\x20itu\x20','xmLTF','\x20saya\x20diam','ss\x20recent\x20','tsar','true\x20/\x20not','ak\x20tawa\x20ak','error','fbdl','QgELa','e-18','adsheetml.','mangat\x20ada','ejadian\x20ya','pa\x20kita\x20si','facebook','html5playe','x-pinteres','ikin\x20senen','\x20media\x20you','🕹️\x20〉ɞ\x20Teleg','g\x20dikirim_','XarGO','\x20akun\x20mu\x20s','“Cintailah','ali\x20dan\x20ca','x/47.0','&q=','ikirkan\x20ka','groupcmd','asukan\x20kul','dare','thumbnail','sheet','5939976886','cky\x20to\x20hv\x20','likes','yang\x20dibut','kobot.xyz/','ps://youtu','na\x20berhubu','risi\x20dari\x20','category','apalagi\x20wa','videoDetai','11368260YndCgb','log','pPGIl','0_10;\x20rv:3','pZSUf','kqUpJ','tickle','ur\x20bot_','g,\x20kuning\x20','OFC','onvert_','ytmp3','lRUdd','tweettrump','ng\x20jujur\x20l','Example\x20:\x20','dibuat','rts','Tak\x20semua\x20','iOIpq','25.181\x20Saf','GbGFR','rain_de_se','\x20Aku\x20salah','NHDQs','length','ontrole_de','\x20normal\x20di','ILgAAAAAAn','“Kesuksesa','Linknya?','ttdownload','6288279575','\x20didapet\x20a','hololewd','cKYXP','|cyan','nux\x20x86_64','instastory','wA0mo','soUiT','*🎀\x20Title\x20:','ytmp3\x20','type','qmQOI','w.pinteres','an\x20turun\x20k','e-15','132aDBBUZ','Please\x20Sub','t\x20diputusk','kita\x20tahu.','pernah\x20gak','orang\x20yang','Gw_16l7c','ibb.co/rvs','tangan?\x20ka','makin\x20bany','\x20pedagang\x20','idup\x20adala','drop\x20emot\x20','Ex\x20:','dislike','\x20sahabat?(','amu\x20akan\x20l','njimm\x20gabu','hkan\x20dipil','hv\x20crush\x20o','🤵〉ɞ\x20Gacha\x20','_Mempostin','ponseMessa','SkquY','256','ta…tapi\x20sa','sebutkan\x20t','GpRmc','hati\x20yang\x20','oader','wAhZy','e-6','aling\x20dita','fSDWP','Menu','mpostor\x20=\x20','e\x20:\x20','etangga.”','ce\x20baca\x20su','Ofzik','jelek.”','instareel','orbanan\x20mu','\x20tapi\x20tida','ersion/11.','ru.\x20Malaha','poke','on\x20Menu','.json?twee','a\x20inginkan','channel','UOnXJ','smug','lana.”','\x20Silahkan\x20','“Jika\x20kepi','bahtera\x20hi','“Berakit-r','e\x20secao\x20ra','mXgnj','t-appstate','asa\x20depan_','2616306NGKzDL','Hai\x20@','HjvqK','rty=\x22og:vi','k\x20yang\x20bis','url','boobs','njadi\x20tuan','keinginan\x20','neko','“Semakin\x20b','cum','Mac\x20OS\x20X\x201','_Fitur\x20bot','\x20😵‍💫+👻','Emoji-Sams','\x20\x0a▶️\x20Durati','ndai\x20cembu','slim)\x20pern','alaman','mangat.\x20Se','hentaivid','1203630226','_Untuk\x20dur','Regard\x20@','\x20tetapi\x20ti','amongus\x20\x20c','lOuQC','PWNES',';\x20rv:45.0)','oto\x20menjad','々\x20Judul\x20:\x20','readFileSy','hentaivide','garuh\x20kepa','e_hentai*','Jika\x20Anda\x20','\x0a🎃\x20Size\x20:\x20','bumsg','mnYws','imageMessa','🎨\x20〉ɞ\x20Maker','rkreasi\x20da','Emoji-HTC-','eyakinkan\x20','\x20&\x20mp3\x0a','a,\x20namun\x20m','uka\x20sama\x20k','VERIFY','00587','ah\x20bahwa\x20y','OeQuE','1203630399','unda.”','di\x20bawah.','externalAd','awakan.”','ng\x20seharus','relayWAMes','hRhYw','\x0a*😎\x20Channe','XDSOu','getInfo','x/57.0','a!\x20Upgrade','elek.”','\x20span','i.twitter.','h\x20dia\x20deng','viplz','u\x20seseoran','Fxrxd','nya\x20melind','quoted','isForwarde','\x20disajikan','O\x20\x0a•\x20FATIH','mu\x20beleum\x20','gfwuO','islamiccmd','\x20DOWNLOADE','esponse','\x0a⭔\x20Shares\x20','VuAYi','AUDIO','h,\x20dan\x20seb','rjFWD','tengah\x20jam','e..._','tau\x20putri\x20','pat','jjcsR','ibu\x20pengem','an\x20tidak\x20m','g.whatsapp','update','\x20menjadi\x20j','Perbedaan\x20','a\x20tersebut','endsWith','https://yo','entries','hsjzW','3934706020','Pilih\x20sala','hdUIv','0_9_5)\x20App','E7FBAF','dakan,\x20tet','no-cache','RwQyx','Jangan\x20per','ang\x20berpua','22options%','enu\x20bot','\x20terlebih\x20','hXudE','\x0a*👎\x20Dislik','?key=AIzaS','source','i,\x20mendidi','jFFWz','xZCQG','edia\x20sedan','method','\x20percaya\x20d','rape_ma_de','a\x20di\x20negar','clgNL','ma,\x20bersik','\x20https://i','img','RHujn','loli','video\x20>\x20a','QYoWj','n\x20kamu\x20dan','%22%2C%22s','/search/','UoDji','BtDMz','e/apng,*/*','utup.','\x20tepian…be','gar\x20hidup\x20','Bila\x20Anda\x20','tiktoknowm','\x20Chrome/88','xKThT','k\x20seorang\x20','.2\x20Safari/','3|0|7|5|1|','uga?','.php?url=','goprem','lebih\x20dari','*📩\x20Size\x20Hd','ilkan\x20lebi','tu\x20dia\x20unt','\x0a⭔\x20Mimetyp','tpE=','ime|orange','e-2','.0.4324.10','7326@s.wha','vXmRR7ZUeD','cogancmd','rga','\x20kita\x20kerj','katacaklon','JtEJL','a\x20tidur\x20ka','api\x20perasa','apa','https://ap','https://j.','x-requeste','UrlHigh\x5c(\x27','Y1CWRMAP9Q','erok','ena\x20aku\x20sa','AM\x20STORY*\x20','kos.life/a','avatar','ntaranmu\x20t','yYCoO','🎦\x20〉ɞ\x20Asupa','\x20impianmu\x20','kalau\x20tida','IDR','mimetype','telegramcm','rsion/9.1.','\x20lambat.\x20J','\x20Chrome/65','qrdum','nah\x20mencob','enger-','locationMe','anmu.”','tiktok.com','&crewmate=','bisa\x20membu','「\x20*INSTAGR','bb87660.pn','hanks\x20To','eriang\x20kem','🗃️\x20〉ɞ\x20Stora','me/65.0.33','\x20apa\x20lagi\x20','ekXgY','utu.be/POj','kan\x20menert','n\x20aku\x20yang','derer','video','rm-urlenco','ile/e2c139','*Link*\x20:\x20','kjqpd','json','ang\x20adalah','zoRMj','pa\x20saat\x20la','nuju\x20kegag','\x20Safari/53','fbhd','apa?','UEZpC','\x20fitur\x20ini','mp4','l\x20pada\x20kal','rowId','XeRlk','productIma','primboncmd','remium\x20saj','gqCyD','tGKxm','VF3r/5012f','fox_girl','.0.3497.92','nhprT','\x20miring.”','ntuk\x20bahag','ng\x20pernah\x20','ange;v=b3;','teguh,\x20Tuh','Bagiku,\x20Ka','\x20Jangan\x20pe','timestamp','utu.be/zq2','lami\x20sekar','ain\x20tertaw','ya\x20cukup\x20s','ZRXwd','files','find','hal\x20yang\x20p','pernah\x20cin','603.3.8','kpsod','r\x20oleh\x20ser','Tuhan\x20memb','\x0a*📺\x20Views\x20','gin\x20menjad','ended','Semakin\x20ra','qhCmn','group\x20ini','6f9p3a/att','\x20mencapai\x20','a\x20sama\x20ora','ROXUN','“Diam\x20itu\x20','enyapanya,','ar\x20seharus','lSwuL','h\x20atau\x20kal','membuat\x20se','selectedDi','avif,image','ntent','oHJPh','9a236a4','olor\x20=\x20bla','me_','1\x20Safari/6','s.whatsapp','HHWAV','Link\x20Nya\x20M','ODRUP','ika.\x20Lebih','agi\x20pria\x20a','cintai,\x20be','dagang\x20kak','ukan\x20oleh\x20','UoNDy','jak\x20sini.”','\x20Bisaku\x20cu','\x0a*📆\x20Upload','QpZEF','u\x20adalah\x20s','pTlJf','engkau\x20ber','rkanmu\x20mel','IKrib','at\x20dan\x20nik','com/2/time','AQQaY','\x20pgn\x20balik','37.75.14\x20(','nah\x20buatmu','ycvMT','masih\x20di\x20i','\x20akan\x20tera','it\x20per\x20har','dzWwbApjky','instafoto','reka\x20menja','ntfilter=h','stickerMes','pp.net','ZNDca','replace','YkFnE','ak\x20takut\x20m','FZNjAqSMng','an\x20kebodoh','salahan,\x20c','vsTIA','adLVm','mbar\x20wibu_','termotivas','n\x20saling\x20m','rl\x20:\x20','.be/w4iQ4r','\x0a🌀\x20Url\x20:\x20','rena\x20kelap','getik\x20di\x20g','wo\x20random_','aksana\x20tid','gecg','NWjne','e-19','dupnya.','an\x20datang\x20','di\x20bijak\x20s','Moji-','hZeJM','&impostor=','igphoto','kDNeb','xmlformats','cepat\x20atau','e-4','“Jangan\x20pe','media','IWhgM','9938@g.us','andai\x20memb','.php','sus\x20owner\x20','code','Bearer\x20AAA','logocmd','HKYmQ','an\x20dalam\x20h','each','kYt]*','tcmd','mmfzR','\x20\x0a\x0aPowered','businessOw','8_ans_en_t','a.”','513-161880','https://va','rimu\x20menye','dest','post','BkqQF','\x20dengan\x20bo','sama\x20bersa','\x20unsur\x2018+','cecancmd','VJMQv','KZqeL7byF+','u\x20bot\x20sila','image/jpeg','funcmd','sFOcT','\x20yang\x20tert','ita\x20adalah','CWQjF','child(6)','di\x20ringan,','id,en-US;q','audio/webm','(main\x20bare','VshpT','QZJSZ','🙍‍♂️\x20Owner','ve&collect','deo:width\x22','asal\x20janga','\x20mantan\x20pa','e-16','an\x20button\x20','.\x20Sedangka','currencyCo','.\x20Valery','anyak\x20bela','Bilang\x20\x22KA','ebelum\x20jad','age\x22]','headerType','views','adi\x20udah\x20p','profilePic','durasi','playerMicr','SINGLE_SEL','magenta','00101\x20Fire','_Sticker\x20t','s\x20Menu','STmUh','nmu','bG0=','Contributi','iEXuo','anmu','SALEHA\x20(Su','0\x20(Macinto','3Fq%3D','videoMessa','ketahui_','n/xhtml+xm','cWPDd','wallpaper','kemonomimi','n\x20bukanlah','Hasil\x20Penc','*📫\x20Title\x20:','orig',':*\x20','gi\x20setiap\x20','y\x20:\x20','angemymind','authorizat','qbclx','api\x20orang\x20','an\x20dikirim','gue\x20anak\x20l','song','nlUXx','c\x20siapa\x20ya','a\x20apa-apa.','mi-soeur_v','32761430_n','listMessag','t\x20ini_','au.\x20Salam\x20','match','fXkUk','r\x20photooxy','ZzDug','XIntR','vYBGb','&text=','2/featured','dan\x20hidup\x20','OzsVj','ownerChann','\x20>\x20article','then','feetg','e-13','i\x20%batre\x20k','HMUDF','ku\x20gak\x20bis','pencapaian','rty=\x22og:ti','\x20hentai*','e-22','e\x20:*\x20','8ball','PXijU','*----「\x20XNX','rs\x20:*\x20','3595319159','chats','anya\x20dua','floor','epadanya..','storagecmd','Xziwl','ya\x20kak🥰','urce/BaseS','ng\x20cantik\x20','tuk\x20link_','oHhTX','qtswc','username','dnELr','pap\x20mukamu','ml.documen','“Ingin\x20hat','.0.2743.11','UWDHD','ang\x20kamu\x20a','ap\x20basah.”','FJjOk','a\x20Anda\x20lak','37.36\x20(KHT','\x20untuk\x20dir','kerasukan\x20','\x20Gecko/201','Emoji-Face','n,\x20kalau\x20k','ini,\x20Tuhan','goose','Emoji-Open','gambar\x20cew','em\x20Pakai\x20G','feeYT','owner','0\x20(X11;\x20Ub','earchResou','aya\x20takuti','ion','KEmnK','a\x201\x20hari','ehat,\x20terd','tuk\x20Anda,\x20','bTU=','ku\x20mungkin','rty=\x22og:du','Instagram\x20','zWUwa','Sudah\x20dapa','ri\x20akar\x20te','0\x20(X11;\x20Li','n\x20bilang\x20\x22','bukanlah\x20j','k\x20susu\x20seb','\x20dilempar\x20','\x20disaat\x20ki','\x20seseorang','Aehdl','teriak\x20\x22\x20a','hasAudio','dfZRr','aya\x20Apa\x20Sa','key','TZSPJ','hal\x20yang\x20b','teriak\x20pak','ritaan','footerText','Pura\x20pura\x20','e\x20kata\x20kas','katalog','n\x20dan\x20lemp','inya,\x20menj','\x0a🍃\x20Views:\x20','Anda\x20menja','yuri','sageFromCo','emojinya?','alloc','ywsGu','XcBig','lPZRm','a,\x20jika\x20ka','\x20satu\x20tema','CDgzb','YHjPN','an\x20pacar,\x20','sendVideoA','sambut\x20den','anya\x20pende','g\x20sok\x20tau,','.*?)\x27\x5c);','Lelaki\x20yan','i\x20lebih\x20me','Pilih\x20medi','WDOZY','ng\x20tertund','ZhuJv','fbaudio\x20','_Untuk\x20mem','oemGk','Orang-oran','call\x20u\x20bab','\x0a⭔\x20Categor','q=0.01','scribe\x20htt','\x20Menu','tt1','otOXS','\x20akan\x20liha','lah\x20seseor','ppmOQ','BWWRC','0\x20Safari/5','/15.15063','uk\x20mengger','n\x20idealmu\x20','YOwgZ','rtun\x20yang\x20','pwankg','ttmp3','ndai.','AAAAAAAANR','gkin\x20jodoh','\x20nona\x20cant','\x20bertahan\x20','\x0a🔗\x20Url\x20:\x20','narik\x20deng','tong','nya\x20takut\x20','e-25','oDnbh','an\x20bot_','IKCKO','at\x20ini\x20mun','VCQqc','kiss','pernah\x20nol','ERLdB','player_res','ilangan\x20se','e-24','⬆️\x20〉ɞ\x20Up\x20Me','vQhSW','g,\x20maka\x20bi','Url?','\x20hidupku.\x20','nt&compone','share_coun','ah\x20satu\x20an','in\x20kamu\x20do','en?type=ka','MqOqs','erikan\x20yan','kLIWV','kir\x20jalan\x20','site','ahun\x20ini?','telah\x20kopi','GHBYw','salah\x20past','\x20」----*\x0a\x09\x09','pussy_jpg','pZinT','video_info','instareels','https://ti','\x09\x09\x09\x09\x0a*🎀\x20Ti','\x20Chrome/77','e-17','JWhSy','LIST\x20MENU\x20','photo','dar\x20tidak\x20',';\x20rv:68.0)','QyPBP','Kita\x20tak\x20b','_Fitur\x20khu','bx/mFEB8SW','foto\x20pacar','di\x20ringan','com/1.1/gu','pe\x20pasanga','h\x20menjadi\x20','\x20bukan\x20tin','193975weYySX','rows','buttonsRes','tu\x20dicipta','kRJZa','TUBE\x20PLAY\x20','\x20cinta\x20sam','las,\x20yang\x20','lah\x20stimul','nget','kBYEL','ada\x20yang\x20m','\x20Effect','kira\x20udah,','dlqZY','\x20sukses\x20it','sule\x20sampe','mimeType','erofeet','\x20hanya\x20dua','waifu','EmxSS','iv.entry-a','ng\x20akan\x20ka','uhkan\x20agar','tidurlah\x20s','UVCXG','emakin\x20sed','YMsYMtnlnb','se&text=','EL\x0a•\x20SATRI','saya\x20menja','0\x20(Windows','.net','er\x20dalam\x20g','ybAgn','\x20mediafire','SELECT\x20HER','33-1621622','Mendidik\x20s','pinterest','OQYTk','uk\x20bermain','XYcfS','\x20menghalan','menjadi\x20se','yRiPR','*🔗\x20Link\x20:*','mburu.','ekarang\x20de','t\x20itu\x20mene','isa\x20makan\x20','📩\x20〉ɞ\x20Downl','rwiSR','bot\x20ini_','C%22contex','XVTQZ','\x20motivasi\x20','k\x20bicara\x20d','t\x20di\x20dunia','utu.be/BjT','bergerak.','fbsd','guI23fWDz1','934@g.us','cache-cont','takut\x20mera','a\x20menyenan','instavid','EDHGr','select\x20the','WNNlI','nya\x20sendir','akan\x20dan\x20t','classic','images','NKRvl','k\x20ada\x20manu','🐨\x20Owner','_Random\x20ga','dari\x20web\x20e','pDPke','AbNjL','dIOvc','ownercmd','\x20menjadi\x20\x22','ntah\x20*','elihat\x20ke\x20','01.2.7','nda.”\x20–\x20P.','TUBE\x20VIDEO','yAyimkuYQY','👸\x20〉ɞ\x20Anime','selectedBu','baka','zmpDf','eron','“Dalam\x20pan','2\x20>\x20a','random','le.js','desc','kali\x20Kena\x20','🕌\x20〉ɞ\x20Islam','u\x20berenang','jelek,\x20jan','wfhLG','Bila\x20tekad','igh&media_','1610993486','TUBE\x20AUDIO','om_','a,\x20maka\x20An','Meskipun,\x20','elakukan\x20h','lamic_','a\x20hanya\x20in','./zeeone/z','umptweet&t','sah\x20payah\x20','rat\x20apapun','sapp.net','hvid','%2Fsearch%','tungkan\x20da','\x20bilang\x20\x22a','GyUqc','\x20ninggalin','ang\x20kali.\x20','agi\x20sedih\x20','Kalau\x20kamu','photo360.c','fileSha256','video*\x20_Ju','empty','jid','GnWWD','a\x20ikut\x20ter','inum\x20pasti','\x20dan\x20masa\x20','tiktok','ri\x20Matemat','aBcIW','sukai\x20diam','DAEnu','\x20per\x20hari\x20','ah\x20ga\x20sola','ng\x20dan\x20mer','video_1','productId','dari\x20yang\x20','sakan\x20saki','cts','\x20akan\x20hanc','akit\x20dahul','.0.4515.10','ogo\x20game\x20k','katabijak_','xDbPQ','beberapa\x20k','erah\x2024\x20ja','indukan\x20ka','quality','\x20yang\x20saya','token','ngan\x20sampa','elajaran\x20s','xCIzB','*----「\x20YOU','\x20MB','h-jauh\x20kan','span.metad','=0.9','hn2Sqy4nHf','oading\x20fil','JMYcq','e-26','at\x20(serah\x20','POST','yang\x20akan\x20','results','uk\x20kehidup','2isPrefetc','Mozilla/5.','urce%22%3A','rah\x20al-kau','_Gambar\x20ka','ak\x20menikah','gar\x20jadi\x20S','hFwUH','RQJKq','AKINAH\x20(Se','iHyyT','pake\x20foto\x20','danya.\x20Bal','\x20dan\x20meren','cv1.jpg','----\x0a','futanari','dkDdv','a\x20yang\x20And','adalah\x20ban','SXkjB','ytshort','qhToY','aminan\x20unt','audioMessa','F_FXVALexP','i\x20akan\x20ada','wVShP','karena\x20mer','ebih\x20besar','ik…\x20Lupa\x20a','Ada\x20tips\x20a','AeNIq','adi\x20pagi\x20a','rapa\x20lama?','22%3A%7B%2','ihdvB','anal','ap\x20kerasla','🎀\x20Title\x20:*','a\x20mengubah','ero','udian.”','605.1.15\x20(','ria,\x20beri\x20','bA1B2pJ18r','alan\x20adala','」----*\x0a\x0a💦\x20','5000000000','g\x20dapat\x20me','uk\x20maju,\x20b','rv:88.0)\x20G','r\x20sejati\x20p','an\x20kalau\x20y','lnya\x20cinta','0nM.enc','Sebuah\x20mej','https://bo','en68','t,\x20bagaima','nUFjP','\x20tidak\x20per','ta\x20lupa,\x20s','erorLink','Satu\x20jam\x20y','INQUIRY','ipt,\x20*/*,\x20','sFyuv','e-3','VfqoU','GkaKs','\x20janganlah','🖼️\x20〉ɞ\x20Logo\x20','user','IiVaj','hgMIK','.0.4430.93',';q=0.8,app','asi\x20lebih\x20','nstagram.c','n\x20membasah','spank','tWqZP','kXrt+8eqBg','mcompile.c','--*\x0a\x0a','div.thumb-','du,\x20ini\x20be','SjcWt','ak\x20akan\x20ku','gMUSU','e-20','DhICJ','“Cara\x20terb','est/activa','nt=proacti','👙\x20〉ɞ\x20Nsfw\x20','semoji','RhMHY','kin\x20banyak','e-11','\x20yang\x20kita','etik\x20@veri','content-ty','xnxxsearch','tmuyU','EqJNv','ak\x20ingin\x20t','t\x20siapa\x20se','hal\x20yang\x20a','accept-lan','\x20menggunak','rsation/%s','fbhd\x20','engan\x20memb','Url169\x5c(\x27(','8091@g.us','t%22%3A%7B','+Ia+Dwib70','CbtFx','ews','\x20orang\x20yan','ng\x20kita\x20ha','an,\x20dan\x20ji','dSFPy','k\x20solusiny','descriptio','gamu?','wnvideo.ne','efore-titl','\x20itu','sebentar\x20m','hYzmy','_Merubah\x20f','akan\x20hancu','pi/sfw/wai','akin\x20banya','omong\x20tapi','videoHeigh','\x20di\x20dunia\x20','t.”','up\x20untuk\x20m','SNwAK','truth','💽\x20〉ɞ\x20Sound','emoji','hddnw','CVIVW','attr','👭\x20〉ɞ\x20Gacha','xoGLv','telfon\x20cru','https://ww','.0.3945.88','“Setiap\x20ma','imageeffec','pchYF','xOCmK','\x20takut\x20kam','6|2|8|9|4','epat\x20ia\x20pe','PJHtZ','guest_toke','igdl','kan_','igned-exch','\x20akar\x20untu','USD','rpECj','mediafire','rv:57.0)\x20G','\x20Anda,\x20tet','sage','extension','nsfwmo','mediaUrl','Terjadi\x20ke','5\x20jam','title','pb1.jpg','tan\x20terbes','ka\x20Lupa\x20Pa','PHOvU','\x20tidak\x20bis','mrgRP','ecko)\x20Chro','a\x20sama\x20den','ting?\x20Taku','Hidup\x20itu\x20','jar,\x20semak','gBcTH','ata','r\x20di\x20dalam','mount1000','ara\x20tidak\x20','ngan\x20yang\x20','6285716360','57c1ba2fca','tau\x20bokap?','dicari_','\x20\x22\x20di\x20depa','“Saya\x20tida','0.9,image/','participan','apat\x20kentu','.3\x20Safari/','male','SUDAN','r\x20yang\x20coc','EUmhx','7.36','idur.”\x20–\x20P','Ilmu\x20penge','te|yellow\x20','sage\x20menu','fuxmN','OEQEu','/p_2032cf1','\x20kakinya\x20h','dah.\x20Biar.','\x20ada\x20darah','ck|blue|br','kepada\x20mer','dak\x20makan\x20','MU\x20CANTIK\x20','teriak\x20gaj','kmDhM','full_text','di\x20wa/tele','u\x20apa,\x20tap','686474581_','up\x20saya','nsfw_neko_','🌁\x20〉ɞ\x20Sourc','previewTyp','pJgei','kirim\x20foto','ih\x20lama.','vGrvc','an\x20Anda\x20si','\x20vn\x20kesini','videoType','mah\x20Anda\x20m','512@s.what','e-23','lOMAn','accept','\x20bot_','Mohon\x20maaf','&raw=7','xZKkO','vlMnL','g,\x20karena\x20','Salah\x20satu','0f7eb.jpg','\x20bukan\x20aku','Cara\x20palin','u\x20bukan\x20ti','pVVgY','vGbFB','tle\x20:*\x20','CjPFJ','ML,\x20like\x20G','ize','rus\x20tetap\x20','Server\x20err','yer-bg\x20>\x20s','Sebutkan\x20k','line/conve','k\x20yang\x20kit','wnload\x20','b5e33a30ee','input','kan\x20fitur\x20','n\x20adalah\x20p','Kirim\x20peri','pUghb','\x20by\x20@','tbgle','Kita\x20tidak','Sub\x20Menu\x20k','lYsjg','Win64;\x20x64','an,\x20namun\x20','mediaType','601.7.7\x20(K','format','HqcDg','ration\x22]','anda\x20menja','ytmp3\x20[lin','Kebencian\x20','dalah...\x20T','jpegThumbn','legra.ph/f','Hal\x20terbai','arta\x20benda','Wkjyd','arkgreen|l','“Uang\x20buka','quvZJ','MnRsL','bulannya','\x20lalu.\x20Tap','),\x20tunggu\x20','n.entry-sh','884404AKwGfd','tik,.\x20Rusa','https://ne','it,\x20lalu\x20s','ebih\x20keras','asa\x20orang\x20','Button\x20mes','aminan\x20keh','filter','ssage','audio','itu\x20tidak\x20','tgyxP','tat\x20yang\x20s','SXhbf','Fyknp','D3MAaYx15D','nama','HPhDd','cfDSt','a\x20dengan\x20m','Kit/537.36','hasVideo','views_coun','/THUMBNUM/','all','iFanm','\x20mantan\x20da','at.\x20Biar\x20a','\x20mungkin.\x20','SYrmj','📸\x20〉ɞ\x20Image','ar,\x20hingga','okVIG','kirim\x20pake','alang,\x20ker','Giltn','sNPSY','eeoneofc','terburuk\x20l','an\x20menu\x20is','WmvxA','ipe\x20pacar\x20','adi\x20diam-d','audio/mpeg','se%2C%22qu','xLwBt','🎰\x20〉ɞ\x20Fun\x20M','ga”','Kalau\x20bole',',\x20supaya\x20s','6282193115','PYREy','SZMfg','Siapa\x20yang','xt/javascr','RIFY','9YP2ZQn4','%2C%22no_f','tu\x20hak\x20kam','bisa\x20kita\x20','ang\x20can\x20i\x20','qBqkh','4W5fYrjbea','“Pintar\x20it','size','rrTGl','9199191919','OWNER','0_9_4)\x20App','enis\x20yang\x20','ram\x20Sticke','mua\x20orang\x20','ge\x20Menu','aiumu.','p.metadata','t.com/reso','textprocmd','ah\x20merindu','SlideBig\x5c(','\x20Cecan','nnagen&tex','OaogJ','menemukann','seperti\x20se','kalo\x20tidur','\x20gc/luar\x20g','/alpha/v15','YGLKQ','untuk\x20meng','ODby7_MoRY','\x0a*⚙️\x20Size\x20:','itu\x20suka\x20s','image','ngan\x20cara\x20','an\x20fitur\x20d','\x20melempar\x20','rt\x20Menu','3n1n1Kbt6a','a\x20sama\x20sia','#primary\x20>','OCZEk','viewCount','xXTJh','UZERz','dia\x20bales,','au\x20mau,\x20di','gan\x20sebaik','chat\x20ke\x20ko','DWFSF','ersion/7.0','t/download','iSEDj','\x20itu\x20kunin','VsSUF','n\x20rumah\x20mu','qqYaR','pernah\x20jad','khvxH','hJwOg','BDniq','ecko/20100','KJgTN','t\x20hati\x20saa','c.us','kebiasaan\x20','eninggal\x20s','hLSBs','sa\x20ringan\x20','82639473@g','isa\x20melaku','A3AR9XPh0P','H\x20」-------','fromMe','t\x20seharian','PMteB','unya\x20dan\x20m','_Fitur\x20unt','NwIzUejRCO','g\x20keras\x20ke','_Random\x20vi','tanyze;\x20Li','Aku\x20tidak\x20','0\x20(X11;\x20Da','message','DOCUMENT','ik\x20anak\x20ma','\x20Jadi\x20kena','tryAgain','WJXPo','facebookau','DXyCg','Hampir\x20sem','👨‍👨‍👧‍👦\x20〉ɞ\x20Group','amu\x20ningga','🆔\x20*ID\x20:*\x20','ang\x20tertun','n\x20bermimpi','hal\x20memban',',\x20tapi\x20seb','\x20Media','i\x20pertama.','r.setVideo','oDqXG','ih!\x20Don\x27t\x20','productMes','nginan\x20unt','\x20akun\x20kamu','RjAXP','ceZhp','berhasilan','nJdKI','\x27(.*?)\x27\x5c);','uest','\x20gak\x20ngert','_Menampilk','bvZfh','in\x20','Apabila\x20se','📸\x20〉ɞ\x20Ephot','lewdkemo','jRRJH','ebuah\x20impi','whPTL','XjyvH','cXEgL','URL','da\x20akan\x20me','getProfile','t,\x20seberat','ument.pres','sh;\x20Intel\x20','\x20gunung,\x20t','up\x20col-lg-','pa\x20aja?\x20be','i\x20apapun\x20y','\x0a\x0a_Tunggu\x20','en-US,en;q','ral','33-1621946','FeViB','Sewa\x20☕','.us','ah\x20pengorb','EctFU','xt_on_reso','💌\x20Informat','0_10_5)\x20Ap','ya\x20juga\x20ti','x-app-vers','formattedS','udio\x20senda','buttonId','fbaudio','hanlah\x20ter','_Tunggu\x20be','epl.co/api','\x20Gecko)\x20Ve','mode','RESPONSE','resource_r','catch','Aku\x20enggak','oKyXI','g\x20status\x20m','Emoji-Micr','mPCtE','tweets','i\x20kekayaan','jWmrQ','\x20https://w','🤖\x20〉ɞ\x20All\x20m','es\x20:*\x20','a,\x20sebuah\x20','“Sayang…\x20t','MAiXF','*💢\x20Total\x20:','QqSpc','ponse','sewabot','bayi.”','ba\x20ulangi\x20','angkuk\x20bua','=0.9,en;q=','Bukan\x20link','NbkTb','yPQCW','ntities','priceAmoun','Emoji-Appl','\x20Karena\x20ya','l\x20:*\x20','elName','ifw49HeBAD','Xnxx\x20Searc','Emoji-Goog','ihat\x20siapa','aja\x20membia','g..??”','contextInf','x\x20x86_64;\x20','fvmmA','HsYvd',',\x20Setelah\x20','jfnwh','status','ixels-','ita\x20tidak\x20','ama\x20kamu\x20j','ter-','qSMSa','ungi\x20tanpa','rsion/10.1','src','ku\x20di\x20tubu','record\x20voi','facebook.c','YlmdF','play','deo\x20asupan','Hi\x20@','\x0a🌐\x20Height\x20','yGmrs','e-14','ext=','ipt\x20bot','fHBOi','Reply','Saya\x20tidak','DyTGe','exec','35337phjLLs','unda\x20maka\x20','saja\x20dapat','pada\x20banya','ugUiW','https://do','deo:height','\x20negara\x20te','UZAlp','\x20kesulitan','nyurl.com/','api-create','salahan\x20co','OvfTn','VXQPf','FfqNv','n\x20dipilih!','Anda\x20tidak','LZCsE','h\x20apa\x20yang','app','e-10','XGlrz','nDZzB','zyOXA','opus\x22','\x20berusaha.','&\x20menyesat','*📛\x20Title\x20:','ro\x20Menu','kesuksesan','\x20suka\x20sama','tagcmd','X/A=','iri.','nerJid','VbEXv','NeGIk','sh/pacar\x20s','./image/','\x20:*\x20sd,\x20hd','rCZiK','Jika\x20kamu\x20','cypXL','Url\x5c(\x27(.*?','NksyT','fenYx','entationml','/sma\x20jenis','Dbbdf','\x20ingin\x20suk','it\x20dahulu,','mengandung','at\x20orang\x20l','ia\x20di\x20data','btPFo','6199803015','0_11_6)\x20Ap','igfoto',')\x20AppleWeb','AKaEL','\x20ke\x20cowo','bilang\x20\x22i\x20','masa\x20lalu,','enggunakan','body','HTML,\x20like','han\x20orang?','🔮\x20〉ɞ\x20Primb','u\x20bilang\x20b','GHdVA','couple','limit','apyzU','eri\x20kita\x20j','37.36\x20Edge','🤷\x20〉ɞ\x20Other','da\x20diri\x20se','hagia\x20dan\x20','begitulah\x20','VkWJF','\x20selama\x20ia','All\x20menu\x20b','karena\x20mem','dVtmm','d?name=','onlygcAdmi','“Tidak\x20ada','Video','\x20Tapi\x20usah','u.\x20Asal\x20ja','ana\x20dan\x20bi','Orang\x20kaya','eren_','UbWHp','n.entry-vi','Picture','\x20Alesanya?','a\x20dengan\x20k','\x20Chrome/52','ytmp4','3139335AJPlhY','same-origi','ZnDSK','e-1','a\x2024\x20jam','aaENn','enu','Pernah\x20suk','\x20Semoga\x20ha','*BROADCAST','feet','dalah\x20lela','api\x20apa\x20da','akan\x20membe','u\x20hanya\x20un','\x20tahu,\x20sem','01.7.7','dan\x20memuka','dXtoP','pjlje','jJpQb','wxQol','header\x20>\x20d','/20100101\x20','oba\x20bebera','ng\x20bikin\x20k','n\x20Menu','X\x20DOWNLOAD','rnah\x20kamu\x20','pa\x20agama\x20a','zhpDC','a.\x20Bisaku\x20','meta[prope','\x20sampai\x20sa','1058760XtmEAK','nWpDlmrk','aGJgS','processing','ggakan\x20apa','media_url_','snap/post\x20','ndom_','RqTSI','asa','\x20ss\x20drop\x20k','85.125\x20Saf','VfDuP','CLlbG','a\x20peluang\x20','nnya.”','\x20itu\x20jadi\x20','QjJRg','harus\x20kamu','UrlLow\x5c(\x27(','yZZCx','https://d.','mgTRD','QdvEx','SuSjU','n\x20segalany','QFhgo','pDFQv','mediaKey','NsHSd','KHTML,\x20lik','pinterest2','own|cyan|d','sudah\x20repo','wkMcZ','723-161303','\x20impostor\x20','ekarang\x20da','ion/xml;q=','Alfor','chat','prepareMes','y\x20:*\x20','.\x20Namun,\x20j','3.0)\x20Gecko','buat\x20karya','adi\x20buat\x20a','ki\x20yang\x20bi','Nwgrw','%22pins%22','ma\x20mencint','ndekati\x20ti','“Saat\x20kamu','\x22input-gro','TSiDG','html','XtBzL','\x20diam?','pBQnj','blowjob','Membaca\x20se','ang\x20lain.','Score','1opOAZj','h\x20list\x20men','allmenu','BoPdh','4\x20Safari/5','data','ogo\x20keren\x20','holoyero','baik\x20dan\x20b','video/mp4','holo','R*\x0a\x09\x09\x09\x09\x0a','untu;\x20Linu','📬\x20Title\x20:\x20','enatap\x20mat','_Orang²\x20ya','xhhtq','*\x0a\x0a','\x20Valery.','asupancmd','💌\x20*Followe','https://f.','instatv','mumwx','dJXcm','i\x20lima\x20itu','ung-','ta\x20bertepu','dGDsH','Ubmrq','sendMessag','“Jika\x20anda','paling\x20tep','dengan\x20com','\x20luas\x20dari','----------','Sederhana\x20','jqFmN',',\x20dan..\x20pa','text','ganti\x20nama','cWolG','BwAne','Mybrr','sec-gpc','katadilan','onlygc','origin','VcJCw','aan.','%7D%7D&_=1','0@s.whatsa','ya.\x20Andai\x20','k\x20sebelah\x20','kembali,\x20a','ang\x20aku\x20se','div.thumb','QKmwj','\x20harganya\x20','\x20:*\x20','UdMKf','tbfhd','AzSvM','rimu\x20jaket','bodoh\x20dari','oAnqg','drop\x20kutip','=id&cf=fal','JFhLB','senang.','emburu\x20itu','buttonsMes','OaBvE','ke\x20lawan\x20j','waitForAck','“Manusia\x20i','\x20Chrome/79','hRbsb','variants','QPPjl','content','ztDZY','zmHre','ikian,\x20kec','mengerjaka','\x20masa\x20depa','balik\x20kepa','h\x20list\x20emo','lub/page/','sApp-','oformatRen','pVEVd','tBJDI','https://mm','pDxgz','join','Cinta\x20buka','KycOfB2OEZ','thumbnailU','Teyby','etch_conte','g\x20baik\x20unt','dislikes','513@s.what','an\x20terkuat',')\x27\x5c);','rhQkD','emas,\x20emas','opmZL','tTtYt','UTCiI','🫂\x20〉ɞ\x20Big\x20T','kPiI3/Xxar','lucu','g\x20nyokap\x20a','sR9D2RS5JS','Firefox/33','🔖\x20〉ɞ\x20Tag\x20M','depan\x20tak\x20','qpFzr','User-Agent','satu\x20saja\x20','idak\x20sangg','QVsaI','e-8','gxLCb','\x20(Siap\x20Ant','t\x20media\x20ak','keDCh','ok\x20buat\x20ku','aran.”','geCount','\x20berharap\x20','guxsj','kjnMl','Cinta\x20adal','\x20jomblo\x20it','mUdZr','ion=emoji_','mang\x20mampu','idak\x20minum','0.11;\x20rv:4','XVnWB','hhQwe','&data=%7B%','28777','\x20contoh\x20:\x20','1000000000','\x20dapatkan\x20','\x20yang\x20diwa','fter-title','\x20want\x20to\x20d','Sebuah\x20neg','KScwm','RLVzk','usi\x20dalam\x20','igstory','https://i.','wait','ang\x20daripa','mu\x20adalah\x20','tap\x20seimba','downloadcm','followers','v9gIBMu9tX','forwarding','fileLength','+0Mjbi7yii','active','ic\x20Menu','w.xnxx.com','#video-pla','\x20yang\x20cerd','buttonText','a\x20lupa,\x20Se','svhEi','\x20adalah\x20ke','LJIxj','👤\x20〉ɞ\x20Owner','e-7','KSNAt','ian','..._','々\x20Link\x20:\x20','nsfwcmd','i\x20yang\x20ter','split','seseorang,','ya.\x20Yang\x20s','get','cuddle','yang\x20memba','mentionedJ','leWebKit/5','Aku\x20gak\x20pa','info','46316544@g','PAfrV','utube.com/','ya.','image/','lication/s','b95f2c0bb4','ari\x20Tuhan','le|red|whi','BOT','cqIHR','\x20」----*\x0a\x0a*','DOJGW','ngungkanla','LIST\x20EMOJI','vn\x20trus\x20ki','g\x20kreatif\x20','_Random\x20mu','.7,ms;q=0.','\x20memilih\x20u','CATALOG','Masalah\x20ak','dan\x20mengun','ded','LOADER\x20」--','ngan\x20aku\x20y','medias','youtubesho','nHLDz','*----「\x20FAC','Masukkan\x20q','AR5b5YFz2g','3z1.jpg','MInpU','is\x20yang\x20ad','vzgor','eseorang\x20y','LMDwU','Emoji-LG-','iri\x20saya\x20s','untuk\x20sese','h%22%3Afal','n\x20yang\x20tid','e\x20sini','EykQq','car\x20teman\x20','xnxxdl','rce/get/?s','\x0a---------','arian:\x20','jujuran\x20ya','WaJuy','QIduo','ra\x20gara\x20si','an\x20yang\x20ba','h\x20memberi\x20','gi\x20pemanda','hanya\x20seka','emerlangan','NNuot','ItByS','o\x20pas\x20di\x20s','🔖\x20List\x20Sew','ji\x20silahka','jaminan\x20ke','XBRRv','/crush','inan\x20untuk','t-update.z','a\x22\x20selama\x20','aca\x2030\x20men','\x20dalam\x20sua','ares','BjZx9tvY','tsapp.net','le-','NiLtA','RvSQO','ZbPZB','=\x20false\x20\x0ac','t_mode=ext','hmwnA','ontoh|true','YINEP','/p_2032mwb','CMuBz','c/pc\x20selam','hLTvJu4FA3','ago','NiiQw','ntukan\x20tem','instaphoto','\x20yaitu\x20pas','load','facebooksd','qOgWZ','*-------「\x20','MJgNe','h\x20satu','ntik\x20bukan','ndapatkan\x20','🏅\x20Source\x20S','Command','000','fox/68.0','kan\x20berpas','_Ramalan\x20m','Check\x20Limi','ang\x20yang\x20b','feed','othercmd','ALL\x20MENU\x20B','ia.','ndung,\x20Pag','test','Lwizf','\x20takut\x20men','\x20ini\x20adala','Sebenarnya','sec-fetch-','TrowBzuwRy','displayTex','\x20tidak\x20tul','tags','sa\x20menghas','FHDMw','\x20mereka\x20se','ung-renung','wsMvt','tory','username\x0ai','RJCrQ','TSFtb','convertcmd','roup_','WjXy5iQk17','THNKS','\x0a\x0a_Please\x20','sudah\x20tert',',\x20tetapi\x20t','g\x20yang\x20pal','thumb','itu\x20tai,\x20j','false%7D%2','nita\x20yang\x20','maka\x20akan\x20','terasa\x20rin','extended_e','bijaksanaa','yang\x20membu','salePriceA','bat\x20buruk\x20','documentMe','YsaWH','tahuan\x20tan','caya\x20diri.','i\x20kunci\x20me','\x20tahu\x20adal','_Untuk\x20men','75d72720ba','96.87\x20Safa','i\x20celana\x20A','empurna,\x20j','UeGiH','JoHut','ng\x20:*\x20','e\x20Code','akan\x20berul','untuk\x20nafs','ang-pasang','di\x20seperti','\x20saja\x20tema','6288743504','qTFEq','ephemeralM','\x20NT\x2010.0;\x20','HuStH','\x20ku\x20ulang\x20','ur\x20hanya\x20d','alah\x20kesal','?\x20rasanya\x20','ripada\x20ber','slap','1919','3\x20:*\x20','rgabung\x20da','seMessage','mu\x20dengan\x20','idupan\x20kit','apa\x20ketaku','intar.”','\x20dalam\x20ben','_Mendapat\x20','Ketika\x20kam','FdRNg','\x20jadi\x20\x22\x20BO','ari/537.36','a,\x20agar\x20te','🤥\x20setiap\x20n','rd\x20dan\x20Vis','amu.\x20Tapi,','Emoji-Mess','n/x-www-fo','atu\x20kampun','mat\x20untuk\x20','prank\x20chat','verify','HEwVa','📖\x20List\x20Men','referrerPo','tuk\x20user\x20p','header\x20>\x20h','🚼\x20〉ɞ\x20Conve','Kita\x20adala','54-1351628','gan\x20cara\x20k','gnoxs','an\x20tetap\x20s','Jadi\x20jika\x20','https://e.','an\x20bahagia','*_Cowo_*','WKafa','fQSaF','rku\x20gak?\x22\x20','\x20sempurna,','r.setThumb','dari\x20batas','rnah\x20berfi','pa\x20kita\x20su','OeFrU','suka\x20mabar','\x20Fisika.\x20L','rsakit-sak','trap','link','kirim\x20voic','elajaran.','l-hal\x20keci','ytshorts','QtSrw','tipan\x20itu','\x20untuk\x20men','3AGWWjCpTn','t.com/','fbsd\x20','\x20kalo\x20udah','603.3.8\x20(K','xmlMode','ownload_','.0.3497.10','fileEncSha','amongus','Audio','ySlEL','gXjQT','data-src','xIkmw','sourceUrl','cum_jpg','high','TURum','\x20miskin,\x20t','\x20sekarang,','alasannya\x20','GQPVo','\x20yang\x20kamu','yimpan\x20med','WOkFg','dak\x20laku,\x20','\x20.amongus\x20','\x20khusus\x20un','bGc=','.com_','HAKLj','ng\x20dikirim','\x20>\x20p\x20>\x20spa','siapa\x20oran','ku\x20pake\x20ce',',\x20aku\x20tak\x20','ya,\x20maka\x20g','tahu,\x20Sema','membenci\x20d','sendEpheme','e-5','tits','headers','\x20div\x20>\x20div','KuQUV','e\x20note\x20bil','terakhir\x20b','net/v2/?lc','_avec_le_c','ike\x20Gecko)','g\x20Menu','NasEC','100000','atu\x20saja.','\x0a⏰\x20Durasi\x20','Firefox/47','ngat\x20benci','contentTex','buttons','base\x20bot_','OwLvW','kan\x20beraki','rCliG','\x0a\x09\x09\x09\x09\x0a_Upl','an\x20bot\x20ini','e\x20>\x20span\x20>','adi\x20kusir\x20','rgi.','1919191919','kyPGL','qeVXT','bgsOM','applicatio','akkan\x20diri','e-21','https://te','UrQdw','kerangcmd','result','uUzEe','fOFJw','qsqbK','animated_g','ku\x20saja.','TbTmT','k\x20ngiler\x20d','mencintai.','nangkan\x20😇,','dmiyF'];_0x5b71=function(){return _0x3808d5;};return _0x5b71();}if(sub_yt_zeeone_ofc==_0x342471(0x742,0xc0c,0x938,0x6fa)+'e-'+q5){const _0x15f388={};_0x15f388[_0x342471(0xa5d,0xfec,0xb65,0xa6f)+'t']=_0x342471(0xba0,0x898,0xb57,0xbde)+'t';const _0x12e3f0={};_0x12e3f0[_0x342471(0x85a,0xb4a,0x913,0x8d6)]=_0x342471(0xbf1,0xcbb,0x9aa,0xeaf),_0x12e3f0[_0x342471(0xec9,0xcbd,0xad5,0x8da)]=_0x15f388,_0x12e3f0['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xb1f,0x59d,0xbc8,0xa6d)](prefix),'©\x20'+ownername,[_0x12e3f0]);reply(lang[_0x150c54(0x700,0x76d,0x9e1,0xb89)]()),emoji[_0x342471(0xb23,0xd50,0xae5,0x9d8)](''+q5)['then'](async _0x1f8771=>{const _0x1557aa={'ZdbJR':function(_0x35d010,_0x4fda3c,_0x4c2ee2){return _0x35d010(_0x4fda3c,_0x4c2ee2);}};teks=''+_0x1f8771[_0x2a3c3d(0x431,0x1ae,-0xe5,0x670)][-0x13*-0x17e+0x146b*-0x1+-0x3*0x2a5][_0x2a3c3d(0xf9,-0x13e,-0x3b2,0x92)];function _0x2a3c3d(_0x41f425,_0x5df70c,_0x4db350,_0x4007b0){return _0x150c54(_0x41f425-0x11b,_0x4db350,_0x4db350-0x113,_0x5df70c- -0x5b7);}console[_0x17f6a4(0x430,0x3ec,0x84a,0x3ab)](teks),_0x1557aa['ZdbJR'](sendStickerFromUrl,from,''+teks);function _0x17f6a4(_0x23b361,_0x2a686a,_0xb8d405,_0x342600){return _0x342471(_0x342600,_0x2a686a-0x1e0,_0x2a686a-0xa8,_0x342600-0x114);}await _0x1557aa[_0x2a3c3d(0x2cb,-0x1fb,0x142,-0x68c)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x150c54(0x719,0x9a4,0x79a,0xa01)+_0x342471(0xb29,0xc8f,0xb37,0x6c4)+q5){const _0x2e8815={};_0x2e8815[_0x342471(0xaf4,0x806,0xb65,0xc15)+'t']=_0x150c54(0x105f,0x8d7,0x9f0,0xc1a)+'t';const _0x2b0b0f={};_0x2b0b0f['buttonId']=_0x342471(0xe40,0x55e,0x9aa,0x89d),_0x2b0b0f[_0x342471(0x8f1,0x6e7,0xad5,0x5ae)]=_0x2e8815,_0x2b0b0f[_0x150c54(0x416,0x880,0x1f4,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0x649,0xab0,0xbfb,0xa6d)](prefix),'©\x20'+ownername,[_0x2b0b0f]);emoji[_0x150c54(0x729,0xa83,0xff6,0xba8)](''+q5)[_0x342471(0x702,0x426,0x58d,0x91)](async _0x427b4a=>{const _0x1ebea8={'WKafa':function(_0x3e924f,_0x1bee9a,_0x58298b){return _0x3e924f(_0x1bee9a,_0x58298b);},'lNFpP':function(_0x582390,_0x188ffa,_0x11ea3e){return _0x582390(_0x188ffa,_0x11ea3e);}};function _0x52e7b8(_0x1b008c,_0x5c973e,_0x14ccd9,_0x1de545){return _0x342471(_0x1de545,_0x5c973e-0xda,_0x5c973e-0x1f2,_0x1de545-0x101);}teks=''+_0x427b4a[_0x3c9454(0x8a6,0xb83,0x77d,0x63d)][0x4af*-0x1+0x287*-0x5+-0x1*-0x1153]['url'];function _0x3c9454(_0x35cf5f,_0x439eb9,_0xceed6,_0x5e58a9){return _0x342471(_0xceed6,_0x439eb9-0xa1,_0x35cf5f-0x204,_0x5e58a9-0xd6);}console[_0x3c9454(0x548,0xaf,0x426,0x47e)](teks),_0x1ebea8[_0x52e7b8(0x9f1,0xdbc,0xfff,0xe8f)](sendStickerFromUrl,from,''+teks),await _0x1ebea8['lNFpP'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x342471(0x11,0x40d,0x3c0,0x177)+_0x150c54(0xc4d,0xb97,0xe11,0xb05)+q5){const _0x1f5662={};_0x1f5662[_0x342471(0x1085,0x9dc,0xb65,0x759)+'t']=_0x150c54(0xe3f,0x1135,0xac1,0xc1a)+'t';const _0x7812d1={};_0x7812d1[_0x150c54(0x9e9,0xcaa,0xd97,0x9d6)]=_0x150c54(0xa4a,0xf07,0xf81,0xa6d),_0x7812d1['buttonText']=_0x1f5662,_0x7812d1[_0x342471(-0x103,0x8a,0x36e,-0x1c4)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x7812d1]);reply(lang[_0x342471(0x695,0x96e,0xac6,0xcd6)]()),emoji['get'](''+q5)['then'](async _0x34fa91=>{const _0x454619={'kjnMl':function(_0x4d6d52,_0x3d8911,_0xb5dbb6){return _0x4d6d52(_0x3d8911,_0xb5dbb6);}};teks=''+_0x34fa91[_0xd2699(0x4a3,0x3b7,0xea,-0x6a)][0x1182*-0x2+-0x362*-0x1+0x1fa4]['url'];function _0xd2699(_0x171b89,_0x242e29,_0x83f92a,_0xeb28e1){return _0x342471(_0x242e29,_0x242e29-0x167,_0x171b89- -0x1ff,_0xeb28e1-0x160);}console[_0x90981d(0x52,-0x505,-0x13e,-0xac)](teks),_0x454619[_0x90981d(0x4e0,0x900,0x62c,0x590)](sendStickerFromUrl,from,''+teks);function _0x90981d(_0x156260,_0x50d386,_0x49549f,_0x15a57f){return _0x150c54(_0x156260-0x1ef,_0x50d386,_0x49549f-0x9c,_0x49549f- -0x545);}await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-Micr'+'osoft-'+q5){const _0x5cccb9={};_0x5cccb9[_0x342471(0x687,0xae9,0xb65,0x782)+'t']='Check\x20Limi'+'t';const _0x364941={};_0x364941[_0x342471(0x3e3,0xad5,0x913,0x73c)]='limit',_0x364941[_0x342471(0x8d5,0xf91,0xad5,0x758)]=_0x5cccb9,_0x364941['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xf20,0xb70,0x8cf,0xa6d)](prefix),'©\x20'+ownername,[_0x364941]);emoji['get'](''+q5)[_0x342471(0x2b0,0x788,0x58d,0x46a)](async _0x22beba=>{function _0x5222be(_0x5bbe0f,_0x583b88,_0x4571e1,_0x4cc9f6){return _0x342471(_0x4cc9f6,_0x583b88-0x5f,_0x4571e1- -0x3f,_0x4cc9f6-0xfb);}teks=''+_0x22beba[_0x5222be(0x44e,0x3d2,0x663,0x7ca)][-0x16b0+0x1044+0x66f]['url'];function _0xf35db0(_0x14b790,_0x3c9e14,_0x1d4715,_0x135fc9){return _0x342471(_0x1d4715,_0x3c9e14-0x1dc,_0x135fc9- -0x9,_0x135fc9-0x11f);}console[_0xf35db0(0x7d,0x1e6,0x7d4,0x33b)](teks),sendStickerFromUrl(from,''+teks),await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-What'+_0x150c54(0x102e,0x742,0xa17,0xb44)+q5){const _0xa66529={};_0xa66529[_0x342471(0xf85,0xace,0xb65,0xbdf)+'t']='Check\x20Limi'+'t';const _0x389d9a={};_0x389d9a[_0x342471(0x652,0xc7a,0x913,0x749)]=_0x342471(0x621,0x7ab,0x9aa,0xd30),_0x389d9a[_0x342471(0xb3f,0x9bf,0xad5,0x87e)]=_0xa66529,_0x389d9a[_0x150c54(0x923,0x13e,0x436,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x389d9a]);reply(lang['wait']()),emoji['get'](''+q5)[_0x150c54(0xb4a,0x7ed,0x9d9,0x650)](async _0x54bc2b=>{const _0x2ba1b1={'UdMKf':function(_0x489062,_0x5a05fb,_0x2c23e8){return _0x489062(_0x5a05fb,_0x2c23e8);}};teks=''+_0x54bc2b[_0x1c3942(0x3ce,0x19a,0x445,0x509)][0xc*0x8a+-0x2178+0x1b04][_0x1b9337(0x1c9,0x55e,0x2ce,0x7e2)];function _0x1c3942(_0x30a15a,_0xaa3d4e,_0x2dbdb1,_0x3050d6){return _0x150c54(_0x30a15a-0x163,_0x3050d6,_0x2dbdb1-0xaf,_0x2dbdb1- -0x320);}function _0x1b9337(_0xaa47a3,_0x388c23,_0x190c89,_0x1c4444){return _0x342471(_0xaa47a3,_0x388c23-0x54,_0x388c23-0x1a8,_0x1c4444-0x86);}console[_0x1b9337(0x7d3,0x4ec,0x86f,0x1e9)](teks),sendStickerFromUrl(from,''+teks),await _0x2ba1b1[_0x1b9337(0x108d,0xc0c,0xb08,0x102e)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x150c54(0xd4a,0xf33,0xfa9,0xe02)+'ter-'+q5){const _0xe0f5c1={};_0xe0f5c1[_0x150c54(0xebc,0xb43,0xb5c,0xc28)+'t']=_0x150c54(0xbc0,0xfad,0xae1,0xc1a)+'t';const _0x1d6ad3={};_0x1d6ad3[_0x342471(0x84f,0x405,0x913,0xb0f)]=_0x342471(0x769,0x871,0x9aa,0xce5),_0x1d6ad3[_0x150c54(0x1013,0xd74,0xff4,0xb98)]=_0xe0f5c1,_0x1d6ad3[_0x342471(0x26a,0x608,0x36e,0x56d)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0xcc4,0x5ca,0xc48,0xa6d)](prefix),'©\x20'+ownername,[_0x1d6ad3]);emoji[_0x150c54(0xa6b,0x1055,0x804,0xba8)](''+q5)[_0x342471(0x15f,0x413,0x58d,0x776)](async _0x48a83e=>{function _0x271575(_0x6f0963,_0x2c7ddc,_0x1100c9,_0x23c35d){return _0x150c54(_0x6f0963-0x193,_0x6f0963,_0x1100c9-0xe8,_0x23c35d- -0xcb);}const _0x281d50={'dSFPy':function(_0x422c08,_0x4860e3,_0x215218){return _0x422c08(_0x4860e3,_0x215218);},'PfNnd':function(_0x210fc1,_0x4d8ad7,_0x5a4055){return _0x210fc1(_0x4d8ad7,_0x5a4055);}};function _0x4bc4df(_0x105c35,_0x5dfd0f,_0x96eac,_0x18ac51){return _0x342471(_0x5dfd0f,_0x5dfd0f-0x94,_0x96eac-0x5a,_0x18ac51-0xd2);}teks=''+_0x48a83e[_0x271575(0xa34,0x311,0x187,0x69a)][-0x4*0x7d3+-0x1bda+-0x21*-0x1cb][_0x4bc4df(0x1bd,0x7d1,0x410,-0x11f)],console[_0x4bc4df(0x634,0x41d,0x39e,0x6ec)](teks),_0x281d50[_0x4bc4df(0xba3,0xc39,0x7e3,0x888)](sendStickerFromUrl,from,''+teks),await _0x281d50['PfNnd'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x342471(0x53f,0x972,0x5b8,0x509)+_0x150c54(0xf27,0x1059,0x10fc,0xe0e)+q5){const _0x14869c={};_0x14869c['displayTex'+'t']=_0x342471(0x8f6,0x877,0xb57,0x98d)+'t';const _0x1d6e3e={};_0x1d6e3e[_0x342471(0x48d,0x7d8,0x913,0xddd)]=_0x150c54(0x972,0x72f,0xc61,0xa6d),_0x1d6e3e[_0x342471(0x91a,0xe16,0xad5,0xcdc)]=_0x14869c,_0x1d6e3e[_0x342471(0x56f,0x85f,0x36e,0x707)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0x7ee,0x6c9,0x9aa,0xe78)](prefix),'©\x20'+ownername,[_0x1d6e3e]);reply(lang[_0x150c54(0x7c7,0xde3,0xf4f,0xb89)]()),emoji[_0x150c54(0x887,0xfd9,0xf6d,0xba8)](''+q5)[_0x342471(0x9f7,0xa83,0x58d,0x96b)](async _0x265165=>{const _0x49ef16={'mnYws':function(_0x3ed866,_0x404ac2,_0x181e05){return _0x3ed866(_0x404ac2,_0x181e05);},'wfhLG':function(_0x3df5f8,_0x5588c5,_0x416013){return _0x3df5f8(_0x5588c5,_0x416013);}};function _0x10901e(_0x4321ce,_0x2fa1d6,_0x5144ab,_0x42ebbc){return _0x150c54(_0x4321ce-0x3e,_0x42ebbc,_0x5144ab-0xc1,_0x4321ce- -0x2d6);}function _0xf0a446(_0x3999d7,_0x3bc03e,_0x555044,_0x531b27){return _0x342471(_0x531b27,_0x3bc03e-0xf3,_0x3999d7- -0x466,_0x531b27-0x143);}teks=''+_0x265165[_0x10901e(0x48f,0x483,0x94d,0x99c)][-0x1ec0+0x18*0x2c+0x1aa6]['url'],console[_0x10901e(0x131,0x5f9,-0x2ba,0x331)](teks),_0x49ef16[_0x10901e(0x1c5,-0x277,-0xa,0x224)](sendStickerFromUrl,from,''+teks),await _0x49ef16[_0x10901e(0x4ae,0x4b8,0x210,0x8ae)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x342471(0xf59,0xf09,0xc4b,0xcd9)+_0x150c54(0xc41,0xedc,0xbd2,0xa0c)+q5){const _0x1de3d3={};_0x1de3d3[_0x150c54(0xea1,0x1138,0xf20,0xc28)+'t']=_0x150c54(0x714,0x104f,0x10dd,0xc1a)+'t';const _0x2c4f60={};_0x2c4f60[_0x342471(0xb24,0x8f4,0x913,0x93b)]='limit',_0x2c4f60['buttonText']=_0x1de3d3,_0x2c4f60['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0x893,0x599,0x9aa,0xbfb)](prefix),'©\x20'+ownername,[_0x2c4f60]);emoji[_0x342471(0x8e9,0x932,0xae5,0x680)](''+q5)[_0x150c54(0x755,0x520,0x487,0x650)](async _0x399a1d=>{const _0x510bcc={'adLVm':function(_0x2c1b37,_0x36394d,_0x41c7df){return _0x2c1b37(_0x36394d,_0x41c7df);}};teks=''+_0x399a1d[_0x4a71af(0x816,0x9a,0x652,0x5b1)][-0x1ccc+-0x115*0x1+0x2c*0xae][_0x4a71af(0x46d,0x546,0x57a,0x2c5)],console[_0x4a71af(0x26b,-0x1a,-0xed,0x253)](teks);function _0x4a71af(_0x494b30,_0x4199ed,_0x227cef,_0x4b9317){return _0x342471(_0x4199ed,_0x4199ed-0x12,_0x4b9317- -0xf1,_0x4b9317-0x19a);}sendStickerFromUrl(from,''+teks);function _0x34d107(_0x48c280,_0x4d715f,_0x1d86ba,_0x55bd63){return _0x150c54(_0x48c280-0x191,_0x4d715f,_0x1d86ba-0xd0,_0x55bd63-0xc5);}await _0x510bcc[_0x4a71af(0x219,-0x86,0x2d,0x40b)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x150c54(0x2a9,0x3b4,0x80a,0x67f)+_0x342471(0x8c9,0x5d2,0x50d,0x4a4)+q5){const _0x52d01d={};_0x52d01d[_0x150c54(0xf7f,0x75c,0xcf0,0xc28)+'t']=_0x342471(0x825,0xcae,0xb57,0x655)+'t';const _0x3681b3={};_0x3681b3[_0x150c54(0x725,0x6a9,0xc45,0x9d6)]=_0x150c54(0xd72,0xcaf,0x7e5,0xa6d),_0x3681b3[_0x150c54(0xa27,0xfef,0xfa7,0xb98)]=_0x52d01d,_0x3681b3['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0xc68,0x9bc,0x9aa,0x576)](prefix),'©\x20'+ownername,[_0x3681b3]);emoji['get'](''+q5)[_0x342471(0x737,0x666,0x58d,0x6b7)](async _0x3ce9ea=>{teks=''+_0x3ce9ea['images'][-0x16dc+0x7*0x4e1+-0x3*0x3c1][_0x27c136(0x1ac,-0x2f6,0x3c,0xb)];function _0x27c136(_0x4139b0,_0x36fb5a,_0x5ad494,_0x3ebfd1){return _0x342471(_0x36fb5a,_0x36fb5a-0x18c,_0x4139b0- -0x20a,_0x3ebfd1-0xc2);}console['log'](teks),sendStickerFromUrl(from,''+teks),await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-emoj'+'idex-'+q5){const _0x37ec01={};_0x37ec01[_0x342471(0xd74,0xcd6,0xb65,0x102c)+'t']=_0x150c54(0xf9e,0x9af,0x81b,0xc1a)+'t';const _0x279746={};_0x279746[_0x150c54(0xcbd,0x8a1,0x73c,0x9d6)]=_0x150c54(0xf73,0xe02,0x8c2,0xa6d),_0x279746[_0x342471(0xbf9,0xefa,0xad5,0xccd)]=_0x37ec01,_0x279746[_0x150c54(0x575,0x18c,0x2f9,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0xca9,0x477,0x9aa,0x7d0)](prefix),'©\x20'+ownername,[_0x279746]);reply(lang[_0x342471(0x5ce,0xd48,0xac6,0xeb3)]()),emoji[_0x150c54(0xbe5,0xc52,0xd8b,0xba8)](''+q5)[_0x150c54(0x8cb,0x652,0x987,0x650)](async _0x251001=>{const _0x3e8c71={'pDPke':function(_0x4f88b4,_0x4ef8b5,_0x3d25e9){return _0x4f88b4(_0x4ef8b5,_0x3d25e9);}};teks=''+_0x251001[_0x202774(0x1c9,0x149,0x538,0x171)][0x1947+-0x1f8a+0x64c]['url'];function _0x267ac8(_0x502d85,_0xf48738,_0x2f5cb3,_0x2e0d93){return _0x342471(_0x2e0d93,_0xf48738-0x64,_0x502d85- -0xb,_0x2e0d93-0x15a);}console['log'](teks);function _0x202774(_0x4d27f1,_0x19635e,_0x49a606,_0x52b4ff){return _0x342471(_0x52b4ff,_0x19635e-0xe7,_0x4d27f1- -0x4d9,_0x52b4ff-0x187);}sendStickerFromUrl(from,''+teks),await _0x3e8c71[_0x267ac8(0x69d,0x906,0x6c9,0xa51)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x150c54(0x8b1,0xaac,0x8a6,0xc78)+_0x150c54(0x93e,0x514,0x42c,0x539)+q5){const _0x5b2f55={};_0x5b2f55['displayTex'+'t']=_0x150c54(0xd3d,0x8e0,0xbc6,0xc1a)+'t';const _0x350324={};_0x350324[_0x342471(0x3fc,0xe1b,0x913,0xa60)]=_0x342471(0x869,0xa83,0x9aa,0x9ba),_0x350324['buttonText']=_0x5b2f55,_0x350324['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x150c54(0x665,0x9b0,0xd4a,0xa6d)](prefix),'©\x20'+ownername,[_0x350324]);emoji['get'](''+q5)[_0x342471(0x420,0x2cf,0x58d,0x7e)](async _0x849bf7=>{const _0x454664={'ZYICE':function(_0x1e5689,_0x2d3b0f,_0x1045ad){return _0x1e5689(_0x2d3b0f,_0x1045ad);},'peKuD':function(_0x173f2f,_0x34fc46,_0x73a6d2){return _0x173f2f(_0x34fc46,_0x73a6d2);}};function _0x2ca17f(_0x4836a3,_0x48e96f,_0xd2c24d,_0x42aa99){return _0x342471(_0x42aa99,_0x48e96f-0x179,_0xd2c24d-0x142,_0x42aa99-0x31);}teks=''+_0x849bf7[_0x4f28b8(0x74c,0x764,0x77c,0x38a)][-0x17*-0x6d+-0x23b*-0x9+-0x2*0xeea]['url'];function _0x4f28b8(_0x18c993,_0x53329e,_0x4ea300,_0x3c41fa){return _0x342471(_0x18c993,_0x53329e-0x8,_0x3c41fa- -0x318,_0x3c41fa-0xe6);}console[_0x4f28b8(-0x3b2,0x57,0xb9,0x2c)](teks),_0x454664['ZYICE'](sendStickerFromUrl,from,''+teks),await _0x454664[_0x4f28b8(0xea2,0xad0,0xd4c,0xa18)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-LG-'+q5){const _0x509516={};_0x509516[_0x342471(0xb7c,0xd13,0xb65,0x971)+'t']=_0x150c54(0xf40,0xa3d,0x10b0,0xc1a)+'t';const _0x32246e={};_0x32246e['buttonId']=_0x342471(0x790,0x8d8,0x9aa,0xe86),_0x32246e['buttonText']=_0x509516,_0x32246e[_0x150c54(0x906,0x5ff,0x6c8,0x431)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x342471(0xb0f,0xb6c,0x9aa,0xac9)](prefix),'©\x20'+ownername,[_0x32246e]);reply(lang[_0x342471(0xddf,0x8a0,0xac6,0xf07)]()),emoji[_0x342471(0xec1,0xcbd,0xae5,0x8c8)](''+q5)[_0x342471(0x3dd,0x133,0x58d,0x6c)](async _0x495219=>{const _0x323be6={'vEOmB':function(_0x27b5cb,_0x269cdd,_0x3d0c6f){return _0x27b5cb(_0x269cdd,_0x3d0c6f);},'LfGGi':function(_0x453fd0,_0x4ba619,_0x4406ad){return _0x453fd0(_0x4ba619,_0x4406ad);}};teks=''+_0x495219[_0x8ed61(0x3c3,0x588,0x841,0x4fe)][0x11*0x11+0x194a+-0x1a60][_0x8ed61(0x201,0x29c,0x14b,0x6cd)],console[_0x468db8(-0x4b8,0x2ed,-0x3ed,-0xac)](teks);function _0x468db8(_0x16c61a,_0x11da17,_0x18c702,_0x4cc349){return _0x342471(_0x11da17,_0x11da17-0x9f,_0x4cc349- -0x3f0,_0x4cc349-0x7a);}_0x323be6[_0x468db8(0x687,0xa7f,0xb1e,0x868)](sendStickerFromUrl,from,''+teks);function _0x8ed61(_0x86b86a,_0xd06ff2,_0x51f905,_0x4079eb){return _0x342471(_0x4079eb,_0xd06ff2-0xa7,_0xd06ff2- -0x11a,_0x4079eb-0x1bc);}await _0x323be6['LfGGi'](limitAdd,sender,limit);});}function _0x150c54(_0xbcf9ee,_0x4decaa,_0x6fd0ed,_0x151177){return _0x2507(_0x151177-0x1f5,_0x4decaa);}if(sub_yt_zeeone_ofc=='Emoji-HTC-'+q5){const _0x56ac77={};_0x56ac77[_0x342471(0x9e5,0xa93,0xb65,0xdde)+'t']='Check\x20Limi'+'t';const _0x10dc86={};_0x10dc86[_0x342471(0x55d,0xc37,0x913,0x934)]='limit',_0x10dc86[_0x342471(0xf0b,0x686,0xad5,0xf3b)]=_0x56ac77,_0x10dc86[_0x342471(0x3fa,0x86b,0x36e,0x159)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x10dc86]);emoji['get'](''+q5)[_0x150c54(0x3c3,0x17a,0x7de,0x650)](async _0x219684=>{const _0x3b4dc={'MJgNe':function(_0x209c50,_0xbf1349,_0x2cda4a){return _0x209c50(_0xbf1349,_0x2cda4a);}};teks=''+_0x219684[_0x36c3fa(0xa44,0x5d5,0x57b,0xa3d)][0xab*0x7+0x25*-0x65+0xb*0xe8][_0x36c3fa(-0x9b,0x674,0x28f,0x3f0)];function _0x456ad6(_0xabacfd,_0x288dc8,_0x29b703,_0x313f98){return _0x342471(_0x288dc8,_0x288dc8-0x1a6,_0x313f98- -0x20c,_0x313f98-0x14d);}console['log'](teks);function _0x36c3fa(_0x270abe,_0x13b5be,_0x861dea,_0x1f04b7){return _0x342471(_0x1f04b7,_0x13b5be-0xa0,_0x861dea- -0x127,_0x1f04b7-0x1e3);}sendStickerFromUrl(from,''+teks),await _0x3b4dc[_0x456ad6(0x85e,0x9da,0xdeb,0x941)](limitAdd,sender,limit);});}
switch (command) {
			case 'q': 
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!m.quoted) return reply('reply message!')
let qse = alpha.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
case 'del' : case 'delete': case 'd':
try{
if(!isQuotedMsg)return reply('Reply pesan Bot!')
pp = {id:mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true}
if (!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator)return reply(mess.only.admin)
alpha.deleteMessage(from,pp)
} catch(e) {
reply('reply pesan botnya ')
reply(e)
console.log(e)
}
break
case 'getsider':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
try {
if (!isGroup) return reply('Hanya bisa didalam gruop')
if (!isQuotedMsg) return reply('Reply pesan botnya')      
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 	
// ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
// gabungkan ke dalam variable time
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 
//buat index bulan
var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];
var myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];  
// tanggal
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = ` *READ*${enter}`
for (let i of hemm) {
teksx += `📍 Nama : @${i.jid.split('@')[0]}${enter}📍 Waktu : ${toTime(i.t, true)}${enter}📍 Tanggal : ${toBulan(i.t, true)}${enter}•${enter}`
}
teksx1 = ` *DELIVERED*${enter}${enter}`
for (let i of hemms){
teksx1 += `📍 Nama : @${i.jid.split('@')[0]}${enter}`
teksx1 += `📍 Waktu : ${toTime(i.t, true)}${enter}📍 Tanggal : ${toBulan(i.t, true)}${enter}•${enter}`
}
alpha.sendMessage(from, teksx, text, { sendEphemeral: true, quoted: mek, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo: { forwardingScore:999, isForwarded: true, mentionedJid: readdin }})
alpha.sendMessage(from, teksx1, text, { sendEphemeral: true, quoted: mek, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo: { forwardingScore:999, isForwarded: true, mentionedJid: readon }})
} catch(e) {
reply('reply pesan botnya ')
reply(e)
console.log(e)
}
await limitAdd(sender, limit)
break
case 'dompet':
					const kantong = checkATMuser(sender)
					reply(` *「 ATM USER 」* \n📛 *Nama* : ${pushname}\n🆔 *Nomer* : ${sender.split("@")[0]}\n💰 *Uang* : ${kantong}\n`)
					break
	case 'transfer':
				if (!q.includes('|')) return  reply('format salah')
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`Minimal Transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`*「 SUKSES  」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
	case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`💳 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
🏧 Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
🏦 Balance : $${getBalance(sender, balance)}


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*Example :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'buylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*🏧 Sisa Balance : $${getBalance(sender, balance)}*
*🏦 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break
case 'buyglimit':{
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*💳 Sisa Balance : $${getBalance(sender, balance)}*
*💷 Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
	case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
		let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
let cek = ms( await premium.getPremiumExpired(sender, premium) - Date.now())
let userProcfile = `「 *USER INFO* 」

📛 Nama : ${pushname}
💋 Bio : ${bio_user}
🔗 Tag : @${sender.split("@")[0]}
💥 Api : wa.me/${sender.split("@")[0]}

💹 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
💳 Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
💷 Balance : $${getBalance(sender, balance)}
👛 Dompet : ${checkATMuser(sender)}
💱 Role : ${role}
🏧 Level : ${getLevelingLevel(sender)}
🏦 Xp : ${getLevelingXp(sender)}

💌 Status : ${isPremium? `Premium User` : `Free user`}
⏰ Expired Prem : ${isPremium ? 'Unlimited Premium' : ` ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`}
👨‍ Register : ${isRegister? `Done`:`Belum Daftar`}
🚫 Baned : ${isBanned?`True`:`False`}`
let papakpo = [{
										"buttonId": `inv`,
										"buttonText": {
											"displayText": "INVENTORY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, userProcfile , `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n© ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
	case 'verify': case 'daftar':{
	let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
 if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification*\n│ *Nama :* ${pushname}\n│ *Nomor :* @${sender.split('@')[0]}\n│ *Bio :* ${bio_user}\n│ *Time :* ${wib}\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification\n© ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
break
	case 'menu': case 'help':{
			try {
				chatt = await alpha.getProfilePicture(sender)
				} catch {
				chatt = 'https://l.top4top.io/p_20670hd6v1.jpg'
				}
			let ch = await getBuffer(chatt)
			try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
koko = `${targetpc}@s.whatsapp.net`
let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`${ucapannya2}

╭─❒ 「 Bot Info 」 
├ Creator :  @${koko.split('@')[0]}
├ Powered  : @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Hit today : ${hit_today.length}
├ Speed : ${latensii.toFixed(4)} Second
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
├ Runtime : ${kyun(runtime)}
├ Battery : ${isBattre}
╰❒ Charging : ${isCharge}

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Bio : ${p1 ? `${p1.status}` : '-'}
├ Nomor : @${sender.split('@')[0]}
├ Me : ${mek.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isOwner ? 'True' : `False`}
`
if(typemenu == 'document'){
sendButDoc(from, ini_anu, `Please Don't spam bot, pause 3 seconds per command!\n`, sender, koko, ini_mark)
} 
if(typemenu == 'troli'){
sendTroli(ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii),{quoted : mek, "contextInfo": {"mentionedJid": [sender, koko, ini_mark]}})
} 
if(typemenu == 'troli2'){
sendTroli2(ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii),{quoted : mek,"contextInfo": {"mentionedJid": [sender, koko, ini_mark]}})
} 
if(typemenu == 'katalog'){
sendKatalog2(ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii), {quoted : mek,"contextInfo": {"mentionedJid": [sender, koko, ini_mark]}})
} 
if(typemenu == 'katalog2'){
sendKatalog3(ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii) , {quoted : mek,"contextInfo": {"mentionedJid": [sender, koko, ini_mark]}})
} 
if(typemenu == 'list'){
sendList(sender)
} 
if(typemenu == 'image'){
sendButImage(from,  ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii) , `© ${ownername}`,pp_bot, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {"contextInfo": {"mentionedJid": [sender, koko, ini_mark]}, thumbnail: pp_bot, quoted: mek})
}
if(typemenu == 'location'){ 
let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: content1})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'owner', buttonText: {displayText: '⋮☰ OWNER'}, type: 1},
  {buttonId: 'botstat', buttonText:{displayText: '✓ STATISTIC'}, type: 1}
]

const btn1 = {
    contentText: ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii),
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${koko.split('@')[0]}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2K22',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender,koko,ini_mark],
            },
			quoted: fkontak,sendEphemeral: true 
			})
}
}
break
case 'kerangcmd':{
var quotejamzk = await getBuffer(kerangcmd)
sendButLocation(from, kerangmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, quotejamzk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'primboncmd':{
var quotejamzk = await getBuffer(primboncmd)
sendButLocation(from, primbonmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, quotejamzk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'soundcmd':{
var quotejamzk = await getBuffer(soundcmd)
sendButLocation(from, soundmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, quotejamzk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'quotescmd':{
var quoteamzk = await getBuffer(quotescmd)
sendButLocation(from, quotesmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, quoteamzk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'groupcmd':{
var jakkja  = await getBuffer(groupcmd)
sendButLocation(from, groupmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, jakkja, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'animecmd':{
var animkzka = await getBuffer(animecmd)
sendButLocation(from, animemenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, animkzka, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'convertcmd':{
var converkdk = await getBuffer(convertcmd)
sendButLocation(from, convertmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, converkdk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'nsfwcmd':{
var nsfwkak = await getBuffer(nsfwcmd)
sendButLocation(from, nsfwmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, nsfwkak, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'asupancmd':{
var asupanak = await getBuffer(asupancmd)
sendButLocation(from, asupanmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, asupanak, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'downloadcmd':{
var downloadlsl = await getBuffer(downloadcmd)
sendButLocation(from, downloadmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, downloadlsl, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'funcmd':{
var funmenujs = await getBuffer(funcmd)
sendButLocation(from, funmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, funmenujs, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'makercmd':{
var makermenksk = await getBuffer(makercmd)
sendButLocation(from, makermenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, makermenksk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'textprocmd':{
var textjskzb = await getBuffer(textprocmd)
sendButLocation(from, textpromenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, textjskzb, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'photooxycmd':{
var pdkdk = await getBuffer(photooxycmd)
sendButLocation(from, photooxymenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, pdkdk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'othercmd':{
var othendjke = await getBuffer(othercmd)
sendButLocation(from, othermenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, othendjke, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'ownercmd':{
var ownermenjdu = await getBuffer(ownercmd)
sendButLocation(from, ownermenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, ownermenjdu, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'storagecmd':{
var storagemsn = await getBuffer(storagecmd)
sendButLocation(from, storagemenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, storagemsn, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'tagcmd':{
var tagmwnjn = await getBuffer(tagcmd)
sendButLocation(from, tagmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, tagmwnjn, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'upcmd':{
var upmenuj = await getBuffer(upcmd)
sendButLocation(from, upmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, upmenuj, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'cecancmd':{
var cecanksk = await getBuffer(cecancmd)
sendButLocation(from, cecanmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, cecanksk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'cogancmd':{
var coganksk = await getBuffer(cogancmd)
sendButLocation(from, coganmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, coganksk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'telegramcmd':{
var telesjtje = await getBuffer(telegramcmd)
sendButLocation(from, telestiker(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, telesjtje, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'imageeffectcmd':{
var imagekskwo = await getBuffer(imageeffectcmd)
sendButLocation(from, image_effect(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, imagekskwo, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'ephoto360cmd':{
var coganksk = await getBuffer(ephoto360cmd)
sendButLocation(from, ephoto360menu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, coganksk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'logocmd':{
var telesjtje = await getBuffer(logocmd)
sendButLocation(from, logomenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, telesjtje, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'islamiccmd':{
var imagekskwo = await getBuffer(islamiccmd)
sendButLocation(from, islamicmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, imagekskwo, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break

case 'setmenu':
if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
const listhades = ['document', 'image', 'troli', 'troli2', 'katalog', 'katalog2', 'list', 'location']
listMsg = {
 buttonText: 'SET MENU',
 footerText: `© ${ownername}`,
 description: `Pilih tampilan menu sesukamu`,
 sections: [
                     {
                      "title": `SET MENU`,
 rows: [
                          {
                              "title": "document",
                              "rowId": "setmenu document"
                           },
                           {
                              "title": "image",
                              "rowId": "setmenu image"
                           },
                           {
                              "title": "troli",
                              "rowId": "setmenu troli"
                           },
                           {
                              "title": "troli2",
                              "rowId": "setmenu troli2"
                           },
                           {
                              "title": "katalog",
                              "rowId": "setmenu katalog"
                           },
                           {
                              "title": "katalog2",
                              "rowId": "setmenu katalog2"
                           },
                           {
                              "title": "list",
                              "rowId": "setmenu list"
                           },
                           {
                              "title": "location",
                              "rowId": "setmenu location"
                           }
                        ]
                     }],
 listType: 1
}
if (!listhades.includes(q)) return alpha.sendMessage(from, listMsg, MessageType.listMessage, {quoted: mek})
//reply(`*Example :*${enter}•${prefix + command} location\n•${prefix + command} document\n•${prefix + command} list\n•${prefix + command} troli\n•${prefix + command} troli2\n•${prefix + command} katalog\n•${prefix + command} katalog2\n`)
typemenu = q
reply(lang.success())
break
case 'setlang':
         if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if(args[0] == 'ind'){
lang = ind
reply('Sukses mengubah bahasa ke ind')
}else if(args[0] == 'eng'){
lang = eng
reply('Success changing language to eng')
}else if(args[0] == 'es'){
lang = es
reply('Éxito cambiando el idioma a es')
}else if(args[0] == 'ml'){
lang = ml
reply('ഭാഷയിലേക്ക് മാറ്റുന്നതിൽ വിജയം ml')
}else if(args[0] == 'pt'){
lang = pt
reply('Sucesso ao alterar o idioma para pt')
}else if(args[0] == 'ru'){
lang = ru
reply('Успешно сменил язык на ru')
}else {
reply(`Example : ${prefix + command} eng\n\nAvailable\n•ind - Indonesia\n•eng - English\n•es - Spanish\n•ml - Malayalam\n•pt - Portugis\n•ru - Russian`)
}
break
                case 'allmenu':{
                	try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
koko = `${targetpc}@s.whatsapp.net`
let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`${ucapannya2}

╭─❒ 「 Bot Info 」 
├ Creator :  @${koko.split('@')[0]}
├ Powered  : @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Hit today : ${hit_today.length}
├ Speed : ${latensii.toFixed(4)} Second
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
├ Runtime : ${kyun(runtime)}
├ Battery : ${isBattre}
╰❒ Charging : ${isCharge}

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Bio : ${p1 ? `${p1.status}` : '-'}
├ Nomor : @${sender.split('@')[0]}
├ Me : ${mek.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isOwner ? 'True' : `False`}
`
                try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
                let papao = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii), `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n© ${ownername}`,pp_userz, papao, { contextInfo: {"mentionedJid": [sender, koko, ini_mark]}})}
                break
        case 'trigger':
					reply ('Mungkin yg kamu maksud .triggered')
					await limitAdd(sender, limit)
					break
					case 'sampah':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
				 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					media = await alpha.downloadMediaMessage(ger)
					njay = await uploadImages(media)
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${njay}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					alpha.sendMessage(from, buffer, image, {caption : lang.success(),quoted: mek})
                   }
                   await limitAdd(sender, limit)
              break       
		case 'triggered':case 'gay': case 'glass': case 'passed': case 'jail': case 'comrade':case 'green': case 'blue': case 'sepia': case 'wasted': case 'greyscale': case 'blurple2': case 'blurple': case 'red': case 'invertgreyscale': case 'invert':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await alpha.downloadMediaMessage(ger)
				    anu = await uploadImages(owgi)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(lang.tryAgain())
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply(`Reply Foto Dengan Caption ${prefix + command}`)

					}
					await limitAdd(sender, limit)}
					break 
					case 'jadian':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
await limitAdd(sender, limit)
break
   case 'group': 
   case 'gc': 
                if (!isGroup) return reply(lang.onlygc());
        if (!isGroupAdmins && !isBotGroupAdmins) return reply(lang.onlygcAdmin());
        if (args[0] == "open") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					reply('S U C C E S S  O P E N I N G  G R O U P')
        } else if (args[0] == "close") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					reply('S U C C E S S  C L O S I N G  G R O U P')
        } else if (!q) {
        	var ini_gopayy =`Halo @${sender.split("@")[0]} Gunakan ${prefix + command } Open / Close jika button tidak merespon`
var buttonss = [
{buttonId: 'group open', buttonText:{displayText: 'Open'}, type: 1},
{buttonId: 'group close', buttonText:{displayText: 'Close'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2K22',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
        }
        break
            case 'mystat': 
            case 'botstat': 
            case 'botstatus': 
			case 'mystatus':
				anu = process.uptime()
                teskny = `B O T  S T A T I S T I C\n`
				teskny +=`\`\`\`Group Chat : ${giid.length}\`\`\`\n`
				teskny +=`\`\`\`Personal Chat : ${totalchat.length - giid.length}\`\`\`\n`
				teskny +=`\`\`\`Total Chat : ${totalchat.length}\`\`\`\n`
				teskny +=`\`\`\`Speed :\`\`\` ${latensii.toFixed(4)} _Second_\n`
				teskny +=`\`\`\`Runtime : ${(kyun(os.uptime()))}\`\`\`\n\n` 
				teskny +=`P H O N E  S T A T I S T I C\n`
				teskny +=`\`\`\`Wa Whatsapp : ${wa_version}\`\`\`\n`
				teskny +=`\`\`\`RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`\n`
				teskny +=`\`\`\`MCC : ${mcc}\`\`\`\n`
				teskny +=`\`\`\`MNC : ${mnc}\`\`\`\n`
				teskny +=`\`\`\`OS Version : ${os_version}\`\`\`\n`
				teskny +=`\`\`\`Merk Hp : ${device_manufacturer}\`\`\`\n`
				teskny +=`\`\`\`Versi Hp : ${device_model}\`\`\`\n`
				teskny +=`\`\`\`Runtime : ${(kyun(os.uptime()))}\`\`\``
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'getbio':
				if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                await limitAdd(sender, limit)
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case 'caripesan':
		    case 'searchmessage':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(lang.wait())
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
				await limitAdd(sender, limit)
		                break
case 'setname':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fdoc })
					await limitAdd(sender, limit)
					break 
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					await limitAdd(sender, limit)
					break   
case 'spam':
if (!isGroup) return reply(lang.onlygc())
				if (!isGroupAdmins) return reply(lang.onlygcAdmin())
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = args.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				await limitAdd(sender, limit)
					break    
case 'readall':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					reply(rdl)
					console.log(chats.length)
					break
case 'listpc':
					  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nTOTAL PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Name : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case 'listgroup':
case 'listgrup':
case 'listgc':
case 'listgrop':
case 'gruplist':
case 'groplist':
case 'grouplist':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
const txs = alpha.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${alpha.getName(v.jid)}${enter}${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`${enter}~~${enter}`
alpha.sendMessage(m.chat, '```「 LIST GROUPS 」```\n\n' + txs, text)
break
				   break 
case 'bcsticker':
case 'bcstik':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					let anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						reply('Suksess broadcast')
					}}
					break
case 'bcvideo':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					let anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: mek,caption: `[ *${botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						reply(lang.successBc())
					}}
					break
	case 'bcaudio':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mpeg' , duration : 359996400, ptt : true,quoted: mek})
						}
						reply(lang.successBc())
					}}
					break
case 'bcgif':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					let anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli})
						}
						reply(lang.successBc())
					}}
					break
         case 'owner':
         case 'creator': {
         let ini_list = []
					for (let i of global.ownerbot) {
					const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nORG: Creator Bot WhatsApp;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewabot', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{contextInfo: {"mentionedJid": [sender]}})}
					break
                case 'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
await limitAdd(sender, limit)
					break   
			case 'fakeloc':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)                
		    await limitAdd(sender, limit)
					break   
		    case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = false
		            fakeitem(lang.ownerOn())
		            break       
		    case 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(lang.ownerOff())
		            break   
		    case 'get': case 'fetch': {
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
		            await limitAdd(sender, limit)}
					break   
		    case 'kontag':
					if (!isGroupAdmins && isGroup) return reply(lang.onlygcAdmin())
					pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            await limitAdd(sender, limit)
					break   
		    case 'sticktag':
		            if (!isGroupAdmins && isGroup) return reply(lang.onlygcAdmin())
				    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            reply(`*Reply sticker yang sudah dikirim*`)
		            }
		            await limitAdd(sender, limit)
					break   
		    case 'totag':
		            if (!isGroupAdmins && isGroup) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mpeg',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        await limitAdd(sender, limit)
					break   
		    case 'fitnah':{
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            }
			break
		    case 'settarget':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return reply(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            reply(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case 'fitnahpc':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return reply(`${prefix}fitnahpc teks target|teksny`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case 'tomp3':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return reply('```Reply videonya!```')
		            reply(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await alpha.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return reply(`Err: ${err}`)
		            let buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mpeg', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)}
					break   
		    case 'fast':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return reply('Reply videonya!')
		            reply(mess.wait)
		            let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media3)
		            if (err) return reply(`Err: ${err}`)
		            let buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)}
					break   
		    case 'slow':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return reply('Reply videonya!')
		            reply(mess.wait)
		            let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media4} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media4)
		            if (err) return reply(`Err: ${err}`)
		            let buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)}
					break   
		case 'tupai':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media6 = await alpha.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
alpha.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await limitAdd(sender, limit)}
					break   
		    case 'reverse':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return reply('```Reply videonya!```')
		           var encmedia5 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		          var media5 = await alpha.downloadAndSaveMediaMessage(encmedia5)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media5} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media5)
		            if (err) return reply(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)}
					break   
		    case 'anime2':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            await limitAdd(sender, limit)
					break   
		    case 'kontak':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            await limitAdd(sender, limit)
					break   
		    case 'take':
		    case 'colong':
		if (!isPremium) return sendButMessage(from, `Mohon maaf fitur ini khusus untuk user premium saja! Upgrade akun mu sekarang dengan cara ketik ${prefix}goprem`, `Click button below`, [{buttonId: 'goprem',buttonText: {displayText: `Upgrade Premium`,},type: 1,}],{quoted:mek});
		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            var encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    var media_ = await alpha.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBSCRIBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , alpha, mek, from)
					await limitAdd(sender, limit)
					break   
			case 'stikerwm':
			case 'stickerwm':
		    case 'swm':
		if (!isPremium) return sendButMessage(from, `Mohon maaf fitur ini khusus untuk user premium saja! Upgrade akun mu sekarang dengan cara ketik ${prefix}goprem`, `Click button below`, [{buttonId: 'goprem',buttonText: {displayText: `Upgrade Premium`,},type: 1,}],{quoted:mek});
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            await limitAdd(sender, limit)
					break   
		    case 'upswteks':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (!q) return reply('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case 'upswimage':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            reply('```Reply gambarnya!```')
		            }
		            break
		    case 'upswvideo':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            reply('```Reply videonya!```')
		            }
		            break
		    case 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            await limitAdd(sender, limit)
					break   
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === false) return sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [{buttonId: 'self',buttonText: {displayText: `Self Mode`,},type: 1,}], {quoted: mek});
		          	banChats = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [{buttonId: 'self',buttonText: {displayText: `Self Mode`,},type: 1,}], {quoted: mek});
        break;
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === true) return sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [{buttonId: 'public',buttonText: {displayText: `Public Mode`,},type: 1,}], {quoted: mek});
		          	banChats = true
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [{buttonId: 'public',buttonText: {displayText: `Public Mode`,},type: 1,}], {quoted: mek});
        break;
		case 'revoke':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
await alpha.revokeInvite(from)
reply(lang.success())
break
		 	
				case 'sewacheck':
				case 'ceksewa':
							if (!isGroup) return reply(lang.onlygc())
							if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
							let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
							let premiumnya = `*「 SEWA EXPIRED 」*\n\n📛 *ID*: ${from}\n⏰ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
							reply(premiumnya)
							break
				case 'sewa':
							if (!isGroup)return reply(lang.onlygc())
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
							if (args[0] === 'add'){
								_sewa.addSewaGroup(from, args[1], sewa)
								reply(lang.success())
								} else if (args[0] === 'del'){
									sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
									fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))
									reply(lang.success())
									} else {
										reply(`Example : *${prefix}sewa* add/del waktu`)
										}
							break
				case 'sewalist': 
				case 'listsewa':
							let txtnyee = `*「 LIST SEWA」*\nJumlah : ${sewa.length}\n\n`
							for (let i of sewa){
								let cekvipp = ms(i.expired - Date.now())
								txtnyee += `🆔 *ID :* ${i.id} \n⏰ *Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
								}
							reply(txtnyee)
							break
				case 'premium': case 'prem':
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
									reply(lang.success())
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
										reply(lang.success())
										}
										} else {
											reply('emror')
											}
							break
				case 'premiumcheck': case 'cekpremium': 
							if (!isPremium) return reply(`Akun kamu belum premium silahkan ${prefix}buypremium`)
							const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
							reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
							break
				case 'listprem': case 'listpremium':
							let txt = `「 *PREMIUM USER LIST* 」\n\n`
							let men = [];
							for (let i of _premium){
								men.push(i.id)
								const checkExp = ms(i.expired - Date.now())
								txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
								}
								mentions(txt, men, true)
							break
				case 'payment': case 'pay': case 'donasi': case 'donate':
				alpha.sendMessage(from, fs.readFileSync(`./image/${donasi}`), image, {caption: captionpay, quoted: mek, thumbnail: fs.readFileSync(`./image/${donasi}`)})
				break
				case 'belipremium': case 'buypremium': case 'sewabot': case 'goprem':
							let sewalak = await getBuffer('https://telegra.ph/file/5e96a14f1ebaee0df2e24.jpg')
							sendButLocation(from, pc_sewa() , `©  ${ownername}`,sewalak,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
				case 'gcbot': case 'grupbot': case 'groupbot':
							let gcbot = await getBuffer('https://telegra.ph/file/09d4f9b77a0745f35bdfa.jpg')
							reply('Group bot telah di kirim ke private chat')
							sendButLocation(sender, gcbotwa() , `©  ${ownername}`,gcbot,  [{"buttonId": `sewabot`,"buttonText": {"displayText": "SEWABOT"},"type": "RESPONSE"}], {})
							break
				case 'infobot':
				let infobopot = await getBuffer('https://telegra.ph/file/06fad83011a4b1cecd4ba.jpg')
							sendButLocation(from, infobot(status, offline, latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) , `©  ${ownername}`,infobopot,  [{"buttonId": 'gcbot',"buttonText": {"displayText": "GROUP BOT"},"type": "RESPONSE"}], {contextInfo:{"mentionedJid": [ownerNumberrr]}})
							break
		case 'sticker': case 'stikerin':
				case 'stiker': case 's':{
						if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await alpha.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							exif.create('Created By', 'ZeeoneOfc', `stickwm_${sender}`)
							//ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                 })
                            .on('end', async function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply(lang.tryAgain())
								await alpha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgif})
								fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
								})
                           .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        exif.create('Created By', 'ZeeoneOfc', `stickwm_${sender}`)
                    //    ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
						if (error) return reply(lang.tryAgain())
								await alpha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgif})
								fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
                    } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply(lang.tryAgain())
                                alpha.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
                    }
                    await limitAdd(sender, limit)
				            }
           break
		case 'toimg':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'Webp To Image')
					fs.unlinkSync(ran)
					})
					await limitAdd(sender, limit)}
					break   
			case 'ytsearch': case 'yts':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🎭 Title: ' + video.title + '\n'
		            ytresult += '📬 Link: ' + video.url + '\n'
		            ytresult += '⏰ Durasi: ' + video.timestamp + '\n'
					ytresult += '👁️ Views: ' + video.views + '\n'
		            ytresult += '🚀 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await fakethumb(tbuff,ytresult)
					await limitAdd(sender, limit)
					break   
			case 'setreply':
			case 'setfake':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return reply(mess.wrongFormat)
					fake = q
					reply(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case 'setprefix':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
reply('Pke yg multi aja')
/*if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}*/
break
			case 'setfakeimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./image/${thumbnail}`, delb)
					reply('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case 'setthumb':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./image/${thumbnail}`, delb)
					reply('Sukses')
		        	} else {
		            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case 'image':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (args.length < 1) return reply('Masukan teks!')
		            const gimg = args.join('');
gis(gimg, async (error, result) => {
let n = result
images = n[Math.floor(Math.random() * n.length)].url
cptg = `*-------「 GIMAGE SEARCH 」-------*
⛄ *Query* : ${gimg}
🔗 *Media Url* : ${images}`
var imgnya = await getBuffer(images)
sendButImage(from,  cptg , `© ${ownername}`,imgnya, [{"buttonId": `image ${q}`,"buttonText": {"displayText": "Next Image"},"type": "RESPONSE"}], {quoted: mek})
			})
					await limitAdd(sender, limit)
					break   
		    
		    case 'brainly':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					await limitAdd(sender, limit)
					break       
    case 'playstore':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            await limitAdd(sender, limit)
					break   
		case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            await limitAdd(sender, limit)
			break    
case 'lirik':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            await limitAdd(sender, limit)
			break  
    case 'anime':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
 if(!q) return reply('Judul animenya?')
 zee.Anime(`${q}`).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await alpha.sendMessage(from, await gwtBuffer(data[0].thumbnail), MessageType.text, { caption: txt,quoted: mek})
                })
                .catch((err) => {
                    reply(lang.tryAgain())
                })
            break
    case 'otaku':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('Judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
           var ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            await limitAdd(sender, limit)
			break   
    case 'komiku':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            await limitAdd(sender, limit)
					break     
			case 'term':
			
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return reply(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return reply(`ALPHABOT:~ ${err}`)
					if (stdout) {
					reply(stdout)
					}
					})
				    break 
		    case 'join':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return reply('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return reply ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            reply('```SUKSES JOIN GRUP```')
		            } catch {
		            reply('```LINK ERROR!```')
		            }
		            break
		    case 'twmp4': case 'twitter':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
zee.Twitter(`${lin}`).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,mek)
                })
                .catch((err) => {
                    reply(lang.err())
                })
await limitAdd(sender, limit)
					break   
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mpeg', filename:'twitter.mp3', quoted:mek, ptt:true})
})
await limitAdd(sender, limit)
					break   
		    case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(runtime)}`
		            reply(teks)
		            break  
			case 'speed':
			case 'ping':
			const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `\`\`\`${teks}Speed: ${latensi.toFixed(4)} Second\`\`\``
					reply(pingnya)
					})
					break
               
		    case 'totag':
		if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mpeg',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        await limitAdd(sender, limit)
					break   
		    case 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            reply('reply stiker')
		            }
		            fs.unlinkSync(owogi)
		            await limitAdd(sender, limit)
					break   
			case 'togif':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owoogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owoogi).then(async res=>{
					let ksksn = await getBuffer(res.result)
		            alpha.sendMessage(from, ksksn, MessageType.video, {mimetype: 'video/gif', gifPlayback: true, caption: lang.success(), quoted: fgif })
		            })
		            }else {
		            reply('Reply stiker')
		            }
		            fs.unlinkSync(owoogi)
		            await limitAdd(sender, limit)
					break   
		    case 'tourl':
			case 'imgtourl':{
                if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 									 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
									 owgi = await alpha.downloadMediaMessage(boij)
									 res = await uploadImages(owgi)
									 reply(res)
										} else {
											reply('kirim/reply gambar/video')
										}
										}
											await limitAdd(sender, limit)
					break   
			//scrape primbon by dikaardnt
			case 'nomerhoki': case 'nomorhoki': {
                if (!Number(q)) return reply(`Example : ${prefix + command} 887435047326\n\nTidak berawalan 0 atau 62`)
                let anu = await primbon.nomer_hoki(Number(q))
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, text, {quoted:mek})
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!q) return reply(`Example : ${prefix + command} di kejar setan`)
                let anu = await primbon.tafsir_mimpi(q)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'suamiistri': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
			case 'ramalancinta': case 'ramalcinta': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'artinama': {
                if (!q) return reply(`Example : ${prefix + command} ZeeoneOfc`)
                let anu = await primbon.arti_nama(q)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!q) return reply(`Example : ${prefix + command} Zeeeon, 12, 1, 2004`)
                let [nama, tgl, bln, thn] = q.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, text, {quoted:mek})
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone|Clara`)
                let [nama1, nama2] = q.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, text, {quoted:mek})
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!q) return reply(`Example : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, text, {quoted:mek})
            }
            break
            case 'sifatusaha': {
                if (!q)return reply(`Example : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
			case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!q) return reply(`Example : 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, text, {quoted:mek})
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'artitarot': case 'tarot': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, anu.message.image, image, {caption: `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, quoted:mek})
            }
            break
            case 'fengshui': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 1, 2004\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = q.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, text, {quoted:mek})
            }
            break
            case 'haribaik': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'harinaas': case 'harisial': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, text, {quoted:mek})
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'peruntungan': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = q.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, text, {quoted:mek})
            }
            break
			case 'sifat': case 'karakter': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
                let [nama, tgl, bln, thn] = q.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, text, {quoted:mek})
            }
            break
            case 'keberuntungan': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
                let [nama, tgl, bln, thn] = q.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, text, {quoted:mek})
            }
            break
            case 'memancing': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'masasubur': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = q.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
			case 'shio': {
                if (!q) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(q)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hasil :* ${anu.message}`, text, {quoted:mek})
            }
            break
			case 'awoo':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'blowjob2':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'megumin':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'trapnime':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   

/*
]=====> GROUP MENU<=====[
*/
			case 'absen':
db.data.absen = db.data.absen || {} 
if (!(from in db.data.absen)) return alpha.sendButton(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `Mulai Absen`, `absenstart`)
let absen = db.data.absen[from][1] 
const wasVote = absen.includes(m.sender) 
if (wasVote)return reply('Kamu sudah absen!')
absen.push(m.sender) 
let d = new Date 
let date = d.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let caption = `Tanggal: ${date}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 DAFTAR ABSEN 」--------*
${list}

Total: ${absen.length}
`.trim()
await alpha.send2Button(m.chat, caption, `© ${ownername}`, `Absen`, `absen`, `Cek Absen`, `cekabsen`, {quoted: mek, contextInfo: {mentionedJid: [absen]}})
break
case 'cekabsen':{
db.data.absen = db.data.absen || {}
if (!(from in db.data.absen))return alpha.sendButton(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `absenstart`, `Mulai Absen`, m)

let dd = new Date 
let datee = dd.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let absenn = db.data.absen[from][1] 
let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let captionn = `Tanggal: ${datee}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 DAFTAR ABSEN 」--------*
${listt}

Total: ${absenn.length}
`.trim()
alpha.send2Button(m.chat, captionn, `© ${ownername}`, `Absen`, `absen`, `Hapus Absen`, `deleteabsen`, {quoted: mek, contextInfo: {mentionedJid: [absenn]}})
}
break

case 'delabsen': case 'deleteabsen':{
if (m.isGroup) { 
if (!(isGroupAdmins || mek.key.fromMe || isOwner)) return reply(lang.onlygcAdmin())
  } 
  db.data.absen = db.data.absen || {}
  if (!(from in db.data.absen))return alpha.sendButton(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `Mulai Absen`, `absenstart`)

  delete db.data.absen[from]
reply(`Absen berhasil dihapus`)
}
break
case 'absenstart': case 'mulaiabsen':{
if (isGroup) { 
  if (!(isGroupAdmins || mek.key.fromMe || isOwner)) return reply(lang.onlygcAdmin())
} 
db.data.absen = db.data.absen || {}
if (from in db.data.absen)return alpha.send2Button(m.chat, `Masih ada sesi absen di group ini !`, `© ${ownername}`, `cekabsen`, `Cek Absen`, `deleteabsen`, `Hapus Absen`, m)

db.data.absen[from] = [
  await alpha.sendButton(m.chat, `Absen dimulai...`, `© ${ownername}`, `absen`, `Absen`, m),

  [], q ? q : '']
  }
break
  
			case 'add':  
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                    if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
alpha.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
					break 
					case 'radd': case 'addreply':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick': case 'kickreply':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break
			case 'antilink':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
              if (args[0] == 'on'){
              if (isAntiLink) return reply(lang.anjawaUdhOn(command))
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOn(command))
              } else if (args[0] == 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOff(command))
              } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Choose one`, [
            {
              buttonId: 'antilink on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antilink off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'event':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if ( !isOwner && !isCreator && !mek.key.fromMe) return reply("Khusus admin");
					if (args[0] == "on") {
						if (isEventon) return reply(lang.anjawaUdhOn(command))
						event.push(from)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOn(command))
					} else if (args[0] == "off") {
						event.splice(from, 1)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOff(command))
					} else if (!q) {
          sendButMessage(from, `MODE EVENT`, `Choose one`, [
            {
              buttonId: 'event on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'event off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
	case 'antivirtex':
 if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
        if (args[0] == "on") {
          if (isAntivirtex) return reply(lang.anjawaUdhOn(command))
          antivirtex.push(from);
          fs.writeFileSync(
            "./src/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply(lang.anjawaOn(command))
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./src/antivirtex.json", JSON.stringify(ant));
          reply(lang.anjawaOff(command))
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Choose one`, [
            {
              buttonId: 'antivirtex on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antivirtex off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
			case 'admin':{
					if (!isGroup) return reply('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					}
					break
			
			case 'tagall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':{
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(10)
					alpha.modifyChat(from, 'delete', {includeStarred: false})
					reply(lang.success())}
					break
            case 'out':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					reply('```Byeee 👋```')
					}, 0)
					break     
		    case 'leave2':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (q) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					reply('```Ok gua out```')
					}, 0)
					break       
           case 'getpp':
				if (mek.message.extendedTextMessage != undefined){
					let mentioneddd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioneddd[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seeer = `Nama : *${pushname}`
					thumbb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, thumbb ,image, anuu)
				}
				await limitAdd(sender, limit)
					break   
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply(lang.erorLink())
		             }
		             await limitAdd(sender, limit)
					break   
			case 'return':
			case 'cek':
			case 'me':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftroli})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (args.length < 1) return reply('```TEXT?```')
					arg = args.join(' ');
					let anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					let bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					await alpha.sendMessage(_.jid, bc, image, {thumbnail: bc, quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${arg}`})
					}
					reply(lang.successBc())
					} else {
					await ini_bc_pc_bang(arg)
					reply(lang.successBc())
					}}
					break
			case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':{
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    let ini_bc = args.join(' ')
					var groupz = await alpha.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(ini_bc)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)}
					break
			case 'buggc':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case 'infogc':{
			let pe = ["120363022682639473@g.us","6282193115723-1613039938@g.us","6281385402498-1619768166@g.us","6288279575513-1618808091@g.us","593997688633-1621946934@g.us","593997688633-1621622028@g.us"]
			if(from.includes(pe)) return
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(lang.onlygc())
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					await limitAdd(sender, limit)}
					break   
			
                case 'memegenerator': case 'memegen':{
									if (!isPremium && !mek.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await alpha.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										alpha.sendMessage(from, resu, image, {caption:'.stikerin bang', quoted: mek})
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await alpha.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
										alpha.sendMessage(from, resu, image, {caption:'.stiker', quoted: mek})
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)}
									break
             case 'demoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                alpha.groupDemoteAdmin(from, members_id)
			                break
			case 'promoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                alpha.groupMakeAdmin(from, members_id)
                break
              case 'promote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
				case 'demote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
                
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
case 'tahta':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   try{
                   tahta = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   tahtah = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(tahta, tahtah, sender)
                   } catch {
                   	reply('Fitur sedang error')
                   }
                  await  limitAdd(sender, limit)
                  break
       case 'ytgold':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   try{
                   ytgold = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytgoldp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytgold, ytgoldp, sender)
                   } catch {
                   	reply('Fitur sedang error')
                   }
                   await  limitAdd(sender, limit)
                   break  
       case 'ytsilver':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   try{
                   ytsilver = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytsilverp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytsilver, ytsilverp, sender)
                   } catch {
                   	reply('Fitur sedang error')
                   }
                   await  limitAdd(sender, limit)
                   break              
     case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
									})
									}
									break      
       case 'ttp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    alpha.sendMessage(from, anu1, image, {quoted: mek, caption : '.stikerin'})
					.catch(e =>{
					reply('Sepertinya server xteam.xyz sedang eror / perbaikan')})
					 await limitAdd(sender, limit)
					break   
         case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
					.catch(e =>{
					reply('Sepertinya server xteam.xyz sedang eror / perbaikan')})
                    await limitAdd(sender, limit)
					break   
             /*
              ]----------------------------------------------------------------> STORAGE <----------------------------------------------------------------[
              */
	        case 'addstik':
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					reply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case 'liststik':
	      case 'liststiker':
	      case 'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case 'addimg':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedImage) return reply('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return reply('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					reply(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case 'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					reply(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case 'addvid':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedVideo) return reply('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return reply('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					reply(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case 'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case 'addvn':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedAudio) return reply('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					reply( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
			case 'addrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if(!q) return reply(`ketik perintah ${prefix + command} filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
					break
					
			case 'delrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break
case 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `• Filter : ${i.Filter}\n• Jawab : ${i.Jawaban}\n---------------------------\n`
   }
   teks += `Total : ${filter.length}`
   alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
		case 'caripesan2':
            if(!q)return reply('Masukkan pesan yg mau di cari')
            let v = await alpha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await alpha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            await limitAdd(sender, limit)
					break   
     case 'searchmsg':  
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 20) return reply('Maks 20!')
             reply(lang.wait())
             cok = await nino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             alpha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
			}
			}
             } catch (e) {
             return reply(String(e))}
             } else {
             reply(`Format salah, format yang benar : ${command} halo|10`)}
             await limitAdd(sender, limit)
					break   
    case 'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await alpha.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
            await limitAdd(sender, limit)
					break   
					case 'vote': {
            if(!isGroup) return reply(lang.onlygc())
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            voting[m.chat] = [q ? q  :'-', [], []]
            await sleep(1000)
            upvote = voting[m.chat][1]
            devote = voting[m.chat][2]
            teks_vote = `*「 VOTE 」*
*Alasan:* ${voting[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${voting[m.chat][1].length}
│
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${voting[m.chat][2].length}
│
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
sendButMessage(from, teks_vote, `© ${botname}`, [{buttonId: 'upvote',buttonText: {displayText: `Vote`,},type: 1,}, {buttonId: 'devote',buttonText: {displayText: `Devote`,},type: 1,}], {quoted: mek});
    }
            break
             case 'upvote': {
            if(!isGroup) return reply(lang.onlygc())
            if (!(m.chat in voting)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = voting[m.chat][1].concat(voting[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            voting[m.chat][1].push(m.sender)
            menvote = voting[m.chat][1].concat(voting[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Alasan:* ${voting[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${voting[m.chat][1].length}
${voting[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${voting[m.chat][2].length}
${voting[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
sendButMessage(from, teks_vote, `© ${botname}`, [{buttonId: 'upvote',buttonText: {displayText: `Vote`,},type: 1,}, {buttonId: 'devote',buttonText: {displayText: `Devote`,},type: 1,}], {quoted: mek, contextInfo:{mentionedJid:alpha.parseMention(menvote) }});
	    }
             break
              case 'devote': {
            if(!isGroup) return reply(lang.onlygc())
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(voting[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            voting[m.chat][2].push(m.sender)
            menvote = voting[m.chat][1].concat(voting[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Alasan:* ${voting[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${voting[m.chat][1].length}
${voting[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${voting[m.chat][2].length}
${voting[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
sendButMessage(from, teks_vote, `© ${botname}`, [{buttonId: 'upvote',buttonText: {displayText: `Vote`,},type: 1,}, {buttonId: 'devote',buttonText: {displayText: `Devote`,},type: 1,}], {quoted: mek, contextInfo:{mentionedJid:alpha.parseMention(menvote) }});
	}
            break
            
                 case 'cekvote': {
            if(!isGroup) return reply(lang.onlygc())
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            [reason, upvote, devote] = voting[m.chat]
            mentioned = [...upvote, ...devote]
            teks_vote = `*「 VOTE 」*
*Alasan:* ${reason}
┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${upvote.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${devote.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
sendButMessage(from, teks_vote, `© ${botname}`, [{buttonId: 'upvote',buttonText: {displayText: `Vote`,},type: 1,}, {buttonId: 'devote',buttonText: {displayText: `Devote`,},type: 1,}], {quoted: mek, contextInfo:{mentionedJid:alpha.parseMention(mentioned) }});
            }
            break
            case 'deletevote': case'delvote': case 'hapusvote': {
            if(!isGroup) return reply(lang.onlygc())
            if (!(m.chat in vote)) return reply(lang.noSesiVote())
            delete vote[m.chat]
            reply(lang.suksesDelVot())
	    }
            break
    case 'stopjadibot':
			    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			    stopjadibot(reply)
			    break
		case 'listbot':
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
		case 'addcmd': 
       case 'setcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply(lang.success())
              } else {
              reply('Reply stickenya')
}
              break
       case 'delcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
              reply(lang.success())
              break
       case 'listcmd':
              let teksnyee = `「 *LIST STICKER CMD* 」`
              let cemde = [];
              for (let i of scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n📍 *ID :* ${i.id}\n📍 *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'vote') {
if (!(m.chat in vote)) return reply(lang.noSesiVote())
            delete vote[m.chat]
            reply(lang.suksesDelVot())
} else {
	reply(`${prefix + command}delsesi vote`)
}
break

case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await alpha.sendMessage(room.x, str, text, { contextInfo:{mentionedJid:alpha.parseMention(str) } })
            await alpha.sendMessage(room.o, str, text, { contextInfo:{mentionedJid:alpha.parseMention(str) } })
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            alpha.sendMessage(m.chat, `Berhasil delete session TicTacToe`, text, {quoted: mek})
            } else if (!this.game) {
            reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            reply('rusak')
            }
            }
            break
             case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await alpha.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
alpha.relayWAMessage(costick)
await limitAdd(sender, limit)
					break   
case "colongsw": 
        if (!mek.key.fromMe) return
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
       case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(alpha.chats.get(id).presences),
            alpha.user.jid,
          ];
          alpha.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
        case 'getname':
 try {
getnem = alpha.getName(mek.quoted.sender)
reply(`${getnem}`)
} catch {
	reply ('Reply pesan @user')
	}
await limitAdd(sender, limit)
					break   
case 'linkgrup':
case 'linkgroup':
				case 'linkgc':
				    if (!isGroup) return reply(lang.onlygc())
				    if (!isBotGroupAdmins) return reply('Only admin')
				    linkgc = await alpha.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    alpha.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender, limit)
					break   
		case 'unpin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
        case 'pin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
         case 'unreadall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid, 'unread')
                    })
		    reply(`\`\`\`Successfully unread ${chats.length} chats !\`\`\``)
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid)
                })
		reply(`\`\`\`Successfully read ${chats.length} chats !\`\`\``)
	      console.log(chats.length)
		break
		case 'unarchiveall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await alpha.chats.all()
                for (let _ of anu) {
                alpha.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
            case 'archive':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply(lang.wait())
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                alpha.modifyChat(from, ChatModification.archive)
                break
           case 'delthischat':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                await alpha.modifyChat(from, ChatModification.delete)
                reply('*succes delete this chat*')
                break
            case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					alpha.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					await limitAdd(sender, limit)
					break   
			case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				await limitAdd(sender, limit)
					break   
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':{
				let ter = command[1].toLowerCase()
				let tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
				 await limitAdd(sender, limit)}
					break   
 case 'getexif':
try {
    if (!m.quoted) return reply('Tag stikernya!')
    cok = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        reply(util.format(JSON.parse(img.exif.slice(22).toString())))
    }
    } catch (e) {
    	throw e
    reply(String(e))
    }
    await limitAdd(sender, limit)
					break   
		case 'afk':
			if (!isGroup) return reply(lang.onlygc())
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `*${pushname}* Sekarang sedang Afk\n*Reason :* ${reason}\n`
                alpha.sendMessage(from,papa, text,{quoted : mek})
            break
        case 'autoread':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'nsfw':
					    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
						if (!isGroup) return reply(lang.onlygc()) 
						if (args.length < 1) return reply(lang.anjawaUdhOon(command))
						if (args[0] === 'on') {
						if (isNsfw) return reply(lang.anjawaUdhOn(command))
						_nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOn(command))
						} else if (args[0] === 'off') {
						_nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOff(command))
						} else if (!q) {
          sendButMessage(from, `MODE NSFW`, `Choose one`, [
            {
              buttonId: 'nsfw on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'nsfw off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antibug':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          if (args[0] === 'on') {
          if (bugc === true) return reply(lang.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(lang.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(lang.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
          case 'antidelete':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antidel === true) return reply(lang.anjawaUdhOn(command))
antidel = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI DELETE`, `Choose one`, [
            {
              buttonId: 'antidelete on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antidelete off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'welcome':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (welcome === true) return reply(lang.anjawaUdhOn(command))
welcome = true
leave = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (welcome === false) return
welcome = false
leave = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO WELCOME`, `Choose one`, [
            {
              buttonId: 'welcome on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'welcome off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoketik === true) return reply(lang.anjawaUdhOn(command))
autoketik = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO KETIK`, `Choose one`, [
            {
              buttonId: 'autoketik on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autoketik off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autorespon': case 'autorespond':
      if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
       if (q === 'on'){
           	if (autorespon === false) return reply(lang.anjawaUdhOn(command))
              autorespon = false
                    reply(lang.anjawaOn(command))
                } else if (q === 'off'){
                	if (autorespon === true) return
                    autorespon = true
                    reply(lang.anjawaOff(command))
                } else if (!q) {
          sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
            {
              buttonId: 'autorespon on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autorespon off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autobio':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autobio === true) return reply(lang.anjawaUdhOn(command))
autobio = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autobio === false) return
autobio = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO BIO`, `Choose one`, [
            {
              buttonId: 'autobio on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autobio off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
case 'autovn':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autovn === true) return reply(lang.anjawaUdhOn(command))
autovn = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO VN`, `Choose one`, [
            {
              buttonId: 'autovn on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autovn off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autoregis': case 'register':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoregister === true) return reply(lang.anjawaUdhOn(command))
autoregister = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoregister === false) return
autoregister = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
            {
              buttonId: 'register on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'register off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'wanted':case 'utatoo':case 'unsharpen':case 'thanos':case 'sniper':case 'sharpen':case 'sepia':case 'scary':case 'rip':case 'redple':case 'rejected':case 'posterize':case 'ps4':case 'pixelize':case 'missionpassed':case 'moustache':case 'lookwhatkarenhave':case 'jail':case 'invert':case 'instagram':case 'greyscale':case 'glitch':case 'gay':case 'frame':case 'fire':case 'distort':case 'dictator':case 'deepfry':case 'ddungeon':case 'circle':case 'challenger':case 'burn':case 'brazzers':case 'beautiful':
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
       if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					let cicle = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					var ini_gen = `${command}`
					var ciclee = await alpha.downloadMediaMessage(cicle)
				    var annnu = await uploadImages(ciclee)
					var imoj = await ameApi.generate(ini_gen, { url: annnu})
				     .then( async image =>{

        			await fs.writeFileSync('./media/foto/circle.jpg', image)

					alpha.sendMessage(from, fs.readFileSync('./media/foto/circle.jpg'), MessageType.image,{quoted: mek, caption: '.stikerin', thumbnail: Buffer.alloc(0)})
			     })
				} else {
					reply(lang.replyFoto())
					}
					await limitAdd(sender, limit)
					break   
 case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, jadie, audio, {mimetype: 'audio/mpeg', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
await limitAdd(sender, limit)
					break   
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
alpha.sendMessage(from, hihi, audio, {mimetype: 'audio/mpeg', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
await limitAdd(sender, limit)
					break   
break
			case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
          teks = '╭────「 *BANNED  LIST* 」\n'
          for (let hui of banned) {
            teks += `│+  @${hui.split('@')[0]}\n`
          }
          teks += `│+ Total : ${banned.length}\n╰──────「 *ALPHA BOT* 」────`
          alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": [hui] } })
          break
 		case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					reply(`Nomor ${bnnd} telah dibanned!`)
          break

        case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					reply(`Nomor ${ya} telah di unban!`)
          break
          case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					alpha.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					await limitAdd(sender, limit)
					break

					/*case 'save':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if(!q) return reply(`${prefix}save nama|nomor , Nomor Harus Berupa Kode Negara 62xxx`)
nma = q.split('|')[0]
nmor = q.split('|')[1]
if(!nma) return reply('Format salah!')
if(!nmor) return reply('Format salah!')
H1 = {
nama : nma,
nomor : nmor
}
save.push(H1)
fs.writeFileSync('./lib/sv.js', JSON.stringify(save))
alpha.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: mek})		     	 
break
case 'mutual':
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let mutual = `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`
reply(mutual)
break*/
		
			case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await alpha.getProfilePicture(idk)
buffer = await getBuffer(pp)
alpha.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'tes': case 'bot':
var ini_gopayyp = `${ucapannya2}\nBot sudah on kak silahkan di pakai`
var buttonsos = [
{buttonId: 'Menu', buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: 'runtime', buttonText: {displayText: 'Runtime'}, type: 1}]

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
alpha.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2K22',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fgclink,sendEphemeral: true 
			})
			break
case 'absensi':
                 if (!isGroup) return reply(lang.onlygc())
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik${enter}${enter}${prefix}absen waktu${enter}${enter}list menit yang tersedia.${enter}${enter}600000 | 1200000 | 1800000${enter}${enter}jadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `ABSENSI : ${sensi.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break

		  case 'tebakin': case 'tebakgambar':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let tebak = result.img
                    let jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    let tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, {quoted: mek, caption: `Deskripsi : ${result.deskripsi}\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10`})
                    await sleep(120000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    await limitAdd(sender, limit)}
					break   
				case 'siapakahaku': case 'siapaaku':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = `${result.jawaban}`
                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))
                    console.log(jawaban)
                    let tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete siapakahaku[sender.split('@')[0]]
                        fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))
                    }
                    await gameAdd(sender, glimit)}
					break   
				case 'tebakkalimat':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkalimat[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    }
                    await gameAdd(sender, glimit)}
					break   
				case 'tebakkata':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkata[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakkata.json", JSON.stringify(tebakkata))
                    }
                    await gameAdd(sender, glimit)}
					break   
					case 'tebaklirik':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebaklirik.json", JSON.stringify(tebaklirik))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
								alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebaklirik[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebaklirik.json", JSON.stringify(tebaklirik))
                    }
                    await gameAdd(sender, glimit)}
					break   
				case 'tekateki':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tekateki.json", JSON.stringify(tekateki))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tekateki.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tekateki[sender.split('@')[0]]
                        fs.writeFileSync("./src/tekateki.json", JSON.stringify(tekateki))
                    }
                    await gameAdd(sender, glimit)}
					break  
				case 'susunkata':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    let tipenya = `${result.tipe}`
                    susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/susunkata.json", JSON.stringify(susunkata))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, {quoted: mek}) // ur cods
								delete susunkata[sender.split('@')[0]]
                        fs.writeFileSync("./src/susunkata.json", JSON.stringify(susunkata))
                    }
                    await gameAdd(sender, glimit)}
					break  
				case 'caklontong':{
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json`)
					let result = anu[Math.floor(Math.random() * anu.length)]
                    let tebakya = result.soal
                    let tebak = `Pertanyaan : ${tebakya}`
					let jawaban = `${result.jawaban}`
                    let desc = result.deskripsi
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10', text, { quoted: mek })
                   await sleep(120000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban + '\n' + "Desc : " + desc )
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    }
                    await gameAdd(sender, glimit)}
					break   
				case 'family100':{
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
                if ('family100'+m.chat in family) {
                    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                family['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await alpha.sendMessage(m.chat, hasil, text, {quoted: mek}),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
                    await gameAdd(sender, glimit)}
					break   
				case 'suit': 
            if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              await gameAdd(sender, glimit)
					break   
       case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':  case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	await gameAdd(sender, glimit)
				   if (!isGroup) return reply(lang.onlygc()) 
 				   jds = []
				   const A1 = groupMembers
  		 		const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `Yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
		case 'bisakah':
		if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
				case 'kapankah':
				if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
           case 'apakah':
           if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
//sound
case 'sound71': case 'sound72': case 'sound73': case 'sound74': case 'sound75': case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18 ': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70':
						{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
let sound1 = await getBuffer(api('alfa', '/api/sound/'+command, {}, 'apikey'))
alpha.sendMessage(from, sound1, audio, {mimetype: 'audio/mpeg', quoted: mek, ptt:true})
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)}
						break
//textpro
			case 'halloween2':case 'horror':case 'game8bit':case 'layered':case 'glitch2':case 'coolg':case 'coolwg':case 'realistic':case 'space3d':case 'gtiktok':case 'stone':case 'marvel':case 'marvel2':case 'pornhub':case 'avengers':case 'metalr':case 'metalg':case 'metalg2':case 'halloween2':case 'lion':case 'wolf_bw':case 'wolf_g':case 'ninja':case '3dsteel':case 'horror2':case 'lava':case 'bagel':
if (args.length < 1) return reply(lang.tahta(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(api('alfa', '/api/textpro/'+command, {text: m1, text2: m2}, 'apikey'))
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `© ${ownername}`,textpro, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break 
 case 'blackpink':case 'rainbow2':case 'water_pipe':case 'halloween':case 'sketch':case 'sircuit':case 'discovery':case 'metallic2':case 'fiction':case 'demon':case 'transformer':case 'berry':case 'thunder':case 'magma':case '3dstone':case 'neon':case 'glitch':case 'harry_potter':case 'embossed':case 'broken':case 'papercut':case 'gradient':case 'glossy':case 'watercolor':case 'multicolor':case 'neon_devil':case 'underwater':case 'bear':case 'wonderfulg':case 'christmas':case 'neon_light':case 'snow':case 'cloudsky':case 'luxury2':case 'gradient2':case 'summer':case 'writing':case 'engraved':case 'summery':case '3dglue':case 'metaldark':case 'neonlight':case 'oscar':case 'minion':case 'holographic':case 'purple':case 'glossyb':case 'deluxe2':case 'glossyc':case 'fabric':case 'neonc':case 'newyear':case 'newyear2':case 'metals':case 'xmas':case 'blood':case 'darkg':case 'joker':case 'wicker':case 'natural':case 'firework':case 'skeleton':case 'balloon':case 'balloon2':case 'balloon3':case 'balloon4':case 'balloon5':case 'balloon6':case 'balloon7':case 'steel':case 'gloss':case 'denim':case 'decorate':case 'decorate2':case 'peridot':case 'rock':case 'glass':case 'glass2':case 'glass3':case 'glass4':case 'glass5':case 'glass6':case 'glass7':case 'glass8':case 'captain_as2':case 'robot':case 'equalizer':case 'toxic':case 'sparkling':case 'sparkling2':case 'sparkling3':case 'sparkling4':case 'sparkling5':case 'sparkling6':case 'sparkling7':case 'decorative':case 'chocolate':case 'strawberry':case 'koifish':case 'bread':case 'matrix':case 'blood2':case 'neonligth2':case 'thunder2':case '3dbox':case 'neon2':case 'roadw':case 'bokeh':case 'gneon':case 'advanced':case 'dropwater':case 'wall':case 'chrismast':case 'honey':case 'drug':case 'marble':case 'marble2':case 'ice':case 'juice':case 'rusty':case 'abstra':case 'biscuit':case 'wood':case 'scifi':case 'metalr':case 'purpleg':case 'shiny': case 'jewelry':case 'jewelry2':case 'jewelry3':case 'jewelry4':case 'jewelry5':case 'jewelry6':case 'jewelry7':case 'jewelry8':case 'metalh':case 'golden':case 'glitter':case 'glitter2':case 'glitter3':case 'glitter4':case 'glitter5':case 'glitter6':case 'glitter7':case 'metale':case 'carbon':case 'candy':case 'metalb':case 'gemb':case '3dchrome':case 'metalb2':case 'metalg':{
if (args.length < 1) return reply(lang.noteks(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/textpro/'+command, {text: q}, 'apikey'))
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `© ${ownername}`,textpro2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)}
break  
// sticker menu
case 'awoawo':case 'benedict':case 'chat':case 'dbfly':case 'dino_kuning':case 'doge':case 'gojosatoru':case 'hope_boy':case 'jisoo':case 'kr_robot':case 'kucing':case 'lonte':case 'manusia_lidi':case 'menjamet':case 'meow':case 'nicholas':case 'patrick':case 'popoci':case 'sponsbob':case 'kawan_sponsbob':case 'tyni':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/telegram-sticker/'+command, {}, 'apikey')
alpha.sendVideoAsSticker(m.chat, lp, mek, { packname: botname, author: ownername })
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)
}
break
// nsfw api
case 'ahegao':case 'ass':case 'bdsm':case 'cuckold':case 'foot':case 'gangbang':case 'glasses':case 'jahy':case 'manga':case 'masturbation':case 'orgy':case 'panties':case 'tentacles':case 'thighs':case 'zettai':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
if (!isNsfw) return reply(lang.nsfwmo())
reply(lang.wait())
let lp = api('alfa', '/api/nsfw/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)}
break

//asupan
case 'delvira': case 'ayu': case 'bunga': case 'aura': case 'nisa': case 'ziva': case 'yana': case 'viona': case 'syania': case 'riri': case 'syifa': case 'mama_gina': case 'alcakenya': case 'mangayutri': case 'chika': case 'rikagusriani':  case 'bocil': case 'geayubi': case 'santuy': case 'ukhty': {
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/asupan/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
}
await limitAdd(sender, limit)
break

//Anime api
case 'akame':case 'anna':case 'asuna_yuki':case 'ayuzawa':case 'chitoge':case 'emilia':case 'erza':case 'hinata':case 'inori':case 'kaga_kouko':case 'kaori_miyazono':case 'kotori_minami':case 'mikasa':case 'mio_akiyama':case 'mizore_sirayuki':case 'nakiri_alice':case 'naruto':case 'riyas_gremori':case 'sakura':case 'sasuke':case 'sento_isuzu':case 'shana':case 'shiina':case 'shinka':case 'winry':case 'yukino':case 'yuzuki':case 'mikosiba':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/anime/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)}
break

// cogan
case 'baekhyung':case 'dohkyungsoo':case 'huangzitao':case 'jhope':case 'jimin':case 'jungkook':case 'kimjondae':case 'kimjong':case 'dohkyungsoo':case 'kimjunmyeon':case 'kimminseok':case 'kimnanjoon':case 'kimseok':case 'kimtaehyung':case 'luhan':case 'ohsehun':case 'parkchanyeol':case 'suga':case 'wuyifan':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/cogan/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)}
break

//cecan
case 'china': case 'indonesia': case 'malaysia': case 'thailand': case 'korea': case 'japan': case 'vietnam': case 'jenni': case 'jiso': case 'lisa': case 'rose': {
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/cecan/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
	}
	await limitAdd(sender, limit)
	break

// 1 radio 

case 'coverbannerlol':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`)
const style = ['jinx7','jinx-8','kassadin-5','nissfortune-5','pyke-7','riven-8','sylas-5','vayne-9','kassadin-4','qiyana-5','renataglasc','shen-5','heimerdinger-3','nunu-5','orianna-4','ziggs-4','soraka-9','soraka-10','xayah-3','zeri-2','ahri-9','akshan-2','amumu-4','annie-3','bard-3','brand-5','diana-4','draven-3','ekko-6','elise-4','ezreal-7','gwen-3','janna-6','kindred-3','leblanc-7','leona-7','lissandra-4','lux-8','lux-9','nalzahar-4','nasteryi-7','reksai-3','sett-3','sivir-6','teemo-5','tristana-6','vladimir-5','xinzhao-5','zed-7','zeri','caitlyn-6','caitlyn-7','caitlyn-8','caitlyn-9','caitlyn-10','caitlyn-11','jayce-5','kaisa-8','karma-7','thresh-6','vi-5','yasuo-8','yasuo-9','fiora-8','norgana-7','nami-5','poppy-4','syndra-5','yuumi-4','jarvaniv-6','kayn-4','kayle-5','lillia-2','norgana-6','tryndamere-3','vex','vex-2','yone-4','tristana-5','viego-2','akali-10','anivia-4','darius-5','graves-6', 'seraphine-5','shaco-2','twistedfate-4','xayah-2','zyra-5','ahri-8','ashe-6','cassiopeia-4','evelynn-6','leblanc-6','nalphite-4','warwick-5','akshan','graves-5','nissfortune-5','pyke-6','rengar-6','thresh-5','diana-3','relia-11','olaf-3','pantheon-6','pantheon-7','riven-7','vayne-8','corki-4','naokai-2','rammus-4','veigar-4','zed-6','camille-4','drmundo-3','lucian-6','nordekaiser-4','renekton-4','sejuani-5','senna-3','sylas-4','varus-5','xerath-3','damwon','galio-3','gwen','gwen-2','jax-5','jinx-6','kayle-5','sion-2','twitch-4','velkoz-4','blitzcrank-3','leona-6','lulu-3','lulu-4','lux-7','nasus-5','nunu-4','rumble-2','samira-3','aphelios-2','blitzcrank-2','caitlyn-5','garen-6','kogmaw-4','leona-5','alzahar-3','syndra-4','wukong-4','yone-3','yuumi-3','zyra-4','alistar-4','chogath-2','draven-2','fiora-7','jarvan-5','jhin-5','karma-6','nautilus-2','neeko-5','shyvana-3','viego','azir-4','diana-4','gragas-2','janna-5','kalista-3','katarina-6','ornn-2','qiyana-4','quinn-3','rell','xinzhao-4','anivia-3', 'hecarim-4','illaoi-2','jayce-4','lissandra-3','nami-4','nasus-4','nidalee-5','seraphine-4','singed-2','skarner-2','soraka-7','varus-4','vladimir-4','yorick-4','zac','riven-8','ahri-7','akali-9','evelynn-5','kaisa-7','lucian-5','seraphine','seraphine-2','seraphine-3','aatrox-6','amumu-3','lise-3','fizz-5','karma-5','zeri-2','kassadin-3','khazix-4','sivir-5','twistedfate-3','ashe-5','brand-4','leesin-5','olaf-2','sett-2','kayle-4','leblanc-5','pyke-5','samira','samira-2','viktor-2','yasuo-7','zed-5','ezreal-6','nasteryi-6','shen-4','sona-4','vi-4','yone','yone-2','ziggs-3','ahri-6','cassiopeia-3','kindred-2','riven-6','kennen-2','kogmaw-3','lillia','syndra-3','teemo-4','thresh-4','vayne-7','velkoz-3','yasuo-6','zoe-4','bard-2','gnar-3','irelia-10','nocturne-4','poppy-3','enna-2','volibear-3','volibear-4','ekko-5','fiora-6','lucian-4','pantheon-5','leblanc-4','norgana-5','urgot-4','zyra-3','jinx-5','sett','alistar-3','katarina-5','lux-5','lux-6','nasteryi-5','nalphite-3','nordekaiser-3','reksai-2','sejuani-4','tryndamere-2','xerath-2','aphelios','garen-5','jax-4','karma-4','leesin-4','leona-4','nidalee-4','rengar-5','soraka-5','soraka-6','swain-4','sylas-3','trundle-2','vladimir-3','aatrox-5','akali-8','ekko-4','qiyana-3','senna','yasuo-5','ashe-4','darius-4','hecarim-3','norgana-4','nami-3','riven-4','riven-5','ryze-3','neeko-3','eeko-4','xayahrakan','zoe-3','airi-6','noctune-3','pantheon-3','pantheon-4','rammus-3','udyr-2','veigar-3','akali-7','garen-4','irelia-8','irelia-9','jinx-4','lucian-3','pyke-4','warwick-4','caitlyn-3','caitlyn-4','kaisa-6','qiyana','qiyana-2','yasuo-4','jhin-3','karma-3','nordekaiser-2','tristana-4','nami','poppy-3','aatrox','lulu','braum','camille','karma','kindred','hecarim','norgana','renekton','kennen','akali','varus','orianna','blitzcrank','bloodmoonjhin','bloodmoontalon','arcaderiven','udyr','rumble','gnar','shaco','twitch','veigar','tryndamere','viktor','trundle','ezreal','poppy','lissandra','jax','vi','vellkoz','darius','diana','corki','sivir','ryze','azir','tristana','kled','volibear','twisterfate','anivia','zyra','quinn','nissfortune','kalista','ezrealandshen','gangplank','hextachannie','elementalistlux','xinzhao','vayne','jhin','reksai','graves','kogmaw','garen','porojinx','warwick','fizz','caitlyn','rengar','talon','nidalee','lux','jinx','thresh','wukong','sona','ahri','riven','zed','leesin','janna','katarina','leblanc','leona','fiora','lucian','shen','ziggs','yasuo','ekko','draven','ashe','ekko-5','teemo','khazix','nasteryi','brand','taliyah','nocturne','cassiopeia','xayah','rakan','syndra','irelia','leesingf','yasuobm','aurelionsol','pantheon','bard','singed','soraka','taric','naokai','xerath','gragas','jayce','riven3','nalphite','naster_yi2','chogath','zed2','darius2','talon2','kayle','drmundo','rammus','vladimir','ahri-2','karma-2','jarvan','nidalee-2','vayner-2','warwick-2','rengar-2','yasuo-3','galio','pantheon-2','jinx-2','nalzahar','olaf','shyvana','thresh-2','sion','caitlyn-2','swain','kassadin','heimerdinger','amumu','alistar','nasus','sejuani','ezreal3','nautilus','fiddlesticks','sona2','karthus','ekko2','orianna2','velkoz-2','xinzhao2','garen2','annie-2','yasuonb','rivendb','kayn','kaisa','veigar-2','vayne-3','twitch-2','tristana-2','rhaast','nalzahar-2','kayle-2','illaoi','fizz-2','elise','brand-2','syndra-2','soraka-2','nissfortune-2','hecarim-2','ezreal-2','ahri-3','yorick','z-2','tahmkench','shen-2','ornn','cassiopeia-2','renekton-2','nasus-2','jarvan-2','fiora-2','alistar-2','taric-2','zac-2','yorick-2','varus-2','nordekaiser','nasteryi-3','katarina-2','janna-2','fiora-3','evelynn','elise-2','ashe-2','annie','zoe','vi-2','vayne-4','rengar-3','jhin-2','graves-2','xayahrakan','warwick-3','nissfortune-3','lux-2','kaisa','jarvaniv','zoe-2','swain-2','sivir-2','nissfortune-4','jax-2','galio-2','varus-3','urgot','twistedfate-2','taric-3','swain-3','shen-3','rammus-2','pyke-2','pyke','nasus-3','talon','khazix-2','kayn-2','irelia-2','evelynn-2','akali-2','vladimir-2','jayce-2','janna-3','irelia-4','irelia-3','diana-2','zed-3','teemo-2','taliyah-2','shyvana-2','poppy-2','katarina-3','jax-3','garen-3','darius-3','chogath-2','aatrox-2','soraka-3','sona-3','sivir-3','kaisa-2','akali-4','akali-3','xinzhao-3','urgot-3','urgot-2','tristana-3','talon-3','sejuani-2','nunu-2','lulu-2','lucian-2','irelia-6','irelia-5','ashe-3','ziggs-2','yasuo-2','sona-4','nalphite-2','khazix-3','kayn-3','jinx-3','orianna-3','kaisa-4','kaisa-3','heimerdinger-2','ezreal-4','evelynn-3','akali-5','ahri-4','thresh-3','ryze-2','kled-2','janna-4','graves-3','fiddlesticks-2','ekko-3','amumu-2','nami-2','lulusoraka','lissandra-2','leona-3','leona-2','leblanc-2','ezrealmissfortune','camille-2','twitch-3','soraka-4','renekton-3','neeko-2','neeko','nasteryi-4','drmundo-2','akali-6','zyra-2','zilean','wukong-3','wukong-2','teemo-3','skarner','sivir-4','riven-2','quinn-2','pyke-3','nocturne-2','nidalee-3','norgana-2','leesin-3','kogmaw-2','kassadin-2','karthus-2','kalista-2','gnar-2','gangplank-2','corki-2','azir-3','azir-2','aatrox-4','aatrox-3','vi-3','vayne-6','vayne-5','tahmkench-2','sylas-2','sylas','sejuani-3','fiora-4','nunu-3','norgana-3','kayle-3','brand-3','anivia-2','ahri-5','yorick-3','rengar-4','fizz-4','fizz-3','corki-3','zed-4','rakan-2','leblanc-3','kaisa-5','jarvaniv','ivern','irelia-7','fiora-5','evelynn-4','camille-3','yuumi-2','yuumi','lux-4','lux-3','katarina-4','jayce-3','graves-4','ezreal-5']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0

for (var i = 0; i < style.length; i++) {
no +=1

listt += no.toString() + '.  '  + style[i] + '\n'

}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'pubglogomaker':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`)
const style = ['women','nen']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'colorfulpubg':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`)
const style = ['gold','green-blue','pink-yellow','green-yellow','cyan-purple','orange-red']
if (!style.includes(m2)){ 
let listt = `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style.length}* _color_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, color : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'astronotspace':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
const style = ['anubis','dragon','duck','gorilla','panda','panther','shark','squirrel','tiger','wolf','bull','rhino','rooster','pikachu','parrot','boar','bee','hurricane','deer','horse','crocodile','pitbull']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'wallpaperaov':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`)
const style = ['allain','allain-2','kahlii-3','nakroth-4','preyta-2','skud-2','taara-4','valhein-4','arum-4','butterfly-6','capheny-3','elandorr-2','ilumia-3','ishar-4','lauriel-6','laville','liliana-5','nurad-8','quillen-5','rouie','rouie-2','taara-3','telannas-5','yena-4','yena-5','zata','ata','lauriel-5','qi-3','roxie-3','wukong-5','aleister-2','amily-3','arthur-3','arum-3','astrid-2','dirak','dirak-2','grakk-5','hayate-4','ishar-2','ishar-3','jinna-2','keera','keera-3','lauriel-4','nax','natalya-5','quillen-4','raz-3','richter-2','ryoma-4','telannas-4','ulen-6','valhein-3','violet-7','yorn-4','zill-3','ignis-2','lubu-2','naloch-2','sephera-3','butterfly-5','diaochan-4','elandoor','krizzix-2','nina-2','natalya-3','veera-3','violet-6','yena-2','yena-3','krizziz','nurad-7','volkath','volkath-2','airi-4','arduin-3','enzo-3','hayate-3','krixi-3','nurad-6','quillen-3','telannas-3', 'wisp-2','zip-2','gildur-2','ishar','tulen-5','amily-2','annette-3','arthur-2','butterfly-4','errol-2','joker','kahlii-2','kilgroth','lauriel-3','nurad-5','arduin-2','darcy-2','florentino-3','noren','quillen-2','ryoma-5','sephera-3','violet-5','airi-3','diaochan-3','diaochanlubu','elsuroxie','lindis-3','taara-2','toro-2','tulen-4','violet-4','wonderwoman','ybneth','zill-2','arum-2','florentino-2','liliana-4','nurad-4','yorn-3','zip','annette-2','qi','qi-2','celica','capheny-2','diaochan-2','elsu-2','ilumia-2','krixi-2','narja-2','nurad-3','preyta','telannas-2','valhein','veera-2','veres-2','yorn-2','zephys-2','airi-2','annette','baldum','butterfly-3','elsu-2','errol','fennik','lauriel-2','liliana-2','liliana-3','lindis-2','nurad-2','nakroth-2','nakroth-3','natalya-2','raz-2','ryoma-2','slimz','teemee','tulen-2','tulen-3','violet-3','wiro','wukong-3','wukong-4','zill','aleister','alice','arduin','arthur','azzenka','batman','butterfly-2','cresh','darcy', 'diaochan','enzo-2','hayate-2','jinna','lubu','nganga','violet-2','wukong-2','zanis-2','florentino','gildur','ignis','naloch','narja','nakroth','omen','payna','raz','rourke','roxie','ryoma','skud','taara','toro','valhein','veres','violet','wisp','wukong','wonderwoman','xeniel','yorn','zanis','elsu','flash','hayate','ilumia','kahlii','krixi','lauriel','liliana','lindis','nina','nurad','natalya','quillen','richter','sephera','superman','telannas','thane','airi','amily','arum','astrid','butterfly','capheny','enzo','tulen','veera','yena','ryoma-4','zephys','zuka']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'maketeamlogo':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
const style = ['anubis','cowgirl','dragon','duck','ghost','gorilla','panda','panther','shark','squirrel','tiger','wolf','bee','crocodile','deer','pitbull','horse','hurricane','indian','assassin','boar','rapid','raven','warrior','pikachu','pubg','ninja','drift','yasuo','rhino','phoenix','bull','hornet','eagle','hunter','parrot','rooster','lion','skull','wolver','wolf','cobra','dragon','panther','owl','tiger','reaper','warrior']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'circlemarcotteam':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|lionsnake`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|lionsnake`)
const style = ['panther','rhino','squirrel','unicorn','zebra','lionsnake','bear','bull','dragon','eagle','fox','griffin','hawk','lion','peacock','phoenix','tiger','wolver']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'wallpaperml':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|aldous`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|aldous`)
const style = ['aldous','alice-2','angela-2','argus-2','chou','chou-2','estes','eudora','eudora-2','granger','granger-2','gusion-3','hanabi-2','hanzo','helcurt','layla-3','lesley-4','lunox-2','odette-3','saber','thamuz','vexana','argus','dyrroth','esmeralda-2','kadita-2','lancelot','leomord-2','lylia','vale','valir','xborg','zhask','alice','alpha','athena','badang','balmond','bane','diggie','trunks','fanny-2','fanny-3','freya','guinevere','gusion','gusion-2','hanabi','harith','harith-2','hayabusa-2','kadita','kagura-2','kagura-3','karina-2','kimmy','layla-2','leomord','lesley-2','lesley-3','lunox','nartis','niya-2','nana','nana-2','natalia','natalia-2','odette-2','pharsa','rafaela-2','selena-2','zilong','alucard','angela','bruno','change','claude','fanny','hayabusa','hilda','hylos','kagura','karina','karrie', 'layla','lesley','lolita','ninotaur','ninsittar','niya','noskov','odette','rafaela','selena']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'dragonballfb':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aldous`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aldous`)
const style = ['cabba','caulifla','cooler','cumber','hit','kale','kaminoren','gokuui','xenogokuss3','xenogokuss4','xenovegeta','xenovegito','android-18','blackgoku','bulma','frieza','gotenks-2','kaio','krillinandroid-18','launch','nutenroshi-2','oldkai','oolong','pilaf','tienshinhan','trunks-3','bardock','gotenks','nutenroshi','piccolo','songoku-2','songoku-3','songoten','trunks-2','vegeta-2','vegito','krillin','najinbuu','songohan','songoku','trunks','vegeta']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'bannerofaov':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aphelios`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aphelios`)
const style = ['aphelios','karma','leesin-2','nidalee-2','soraka-2','soraka-3','swain','akali-4','ekko-2','qiyana','senna','yasuo-3','ahri-2','akali-3','ashe-3','caitlyn','camille','darius','draven','evelynn-2','kaisa','kayle','pantheon','rengar','sivir-2','sona','vayne-3','wukong','zoe-2','zyra','azir','garen','jinx-3','katarina-3','lux-3','nasus','nidalee','sejuani','sylas','vayner-2','vi-2','warwick-2','fiora-2','irelia-3','janna-2','jax','leesin','nasteryi-2','norgana','nami','riven-2','riven-3','talon-2','neeko','neeko-2','xayahrakan','zoe','ahri','ezreal-2','janna','jinx-2','lulu','lux-2','nissfortune','poopy','soraka','syndra','ezreal','graves','jayce','katarina-2','lux','yuumi','aatrox','akali-2','diana','elise','evelynn','jhin-2','kalista-2','kennen','pyke-2','shen','sivir','talon','twistedfate','thresh-2','yasuo-2','zilean','ashe-2','kalista','khazix','riven','riven','shyvana','thresh','zed-2','akali','ashe','ekko','fiora','irelia','irelia-2','jhin','jinx','katarina','leona','lucian','nasteryi','pyke','vayne','vi','warwick','yasuo','zed']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'effect3donbeach':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|beach-1`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|beach-1`)
const style = ['beach-1','beach-2','beach-3','beach-4','beach-5','beach-6']
if (!style.includes(m2)){ 
let listt = `*Background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, background : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'cutegirlgamer':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
const style = ['style-1','style-2','style-3','style-4','style-5','style-6', 'style-7','style-8','style-9', 'style-10','style-11','style-12']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'footballteam':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|nau-1`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|nau-1`)
const style = ['nau-1','nau-2','nau-3','nau-4','nau-5','nau-6']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'beautifulshimmering':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|champion\nUsage: ${prefix + command} zeeone|aleister`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|champion\nUsage: ${prefix + command} zeeone|aleister`)
const style = ['aleister','alice','butterfly','diaochan','kahlii','krixi','nina','nakroth','natalya','taara','thane','violet','zanis','zata','airi','annette','arthur','arum','astrid','elandorr','gildur','gildur','hayate','ilumia','ishar','lauriel','lindis','nurad','quillen','rouie','sephera','yena','yorn']
if (!style.includes(m2)){ 
let listt = `*Champion Yg Kamu Masukkan Salah*\n\n_Berikut list champion yg benar, Total_ *${style.length}* _champion_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, champion : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'pubgcutelogo':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|aleister`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|aleister`)
const style = ['chicken','soldier']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'elegantrotation':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
const style = ['bull','dragon','eagle','lion','rhino','tiger']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'logogamingassasin':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
const style = ['style-1','style-2','style-3','style-4','style-5','style-6','style-7','style-8','style-9','style-10','style-11','style-12','style-13','style-14','style-15','style-16','style-17','style-18','style-19','style-20','style-21','style-22','style-23','style-24']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'introvideomaker':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
const style = ['bull','dragon','eagle','lion','tiger','skull']
 if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.video, { mimetype: 'video/mp4', quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'gaminglogo4fvs':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|ghost`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|ghost`)
const style = ['girl','ghost','soldier-2','swat','woman','soldier','sniper','raccoon','rabbit','panda','chicken']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'blueneon':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
const style = ['tiger','shark','dugong','bull','cheetah','lion']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'metalmascot':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
const style = ['snakelion','dragon','ragon-2','eagle','falcon','fox','lion','panther','phoenix','phoenix','rhino','squirrel','tiger','unicorn','wolf','zebra']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'anonymous':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|style2`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|style2`)
const style = ['style1','style2','style3']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
	let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'lolpentakill':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|kassadin`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|kassadin`)
const style = ['jhin','syndra','olaf','nocturne','chogath','kassadin','nidalee','fiora','fiddlesticks','garen','irelia-2','janna','lissandra','ezreal','riven','nalphite','khazix','nasteryi','irelia','alista','jayce','singed','galio','velkoz','yi','yasuo','sona','nidalee-2','teemo','leesin','jinx','zed','camille','brand','warwick','rengar','vayne','leona','ashe','ezreal','annie','xerath','ahri','kayle','nissfortune','caitlyn','vi','leesin','darius','fizz','bloodyasuo','ekko','lucian','rakanandayah']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avatarleagueofking':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|arum-6`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|arum-6`)
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','volkath-3','yena-4','yena-5','butterfly-10','laville','yuumi','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','yasuo','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','keera-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak-2','grakk-5','kerra','raz-5','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-6','natalya-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizziz-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','krizziz','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja','veres-3','violet-10','zip','zip-2','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','notos','chaugnar','kahlii','lubo','nina','krixi','zanis-3','jinna','fennik','airi','ormarr','toro','butterfly','nakroth','gildur','omega','natalya','lumburr','yorn','dieu-thuyen','nganga','grankk-2','azzenka','alice','violet','violet2','butterfly2','krixi2','natalya2','taara','ormarr2','valhein','zephys','nakroth2','aleister','payna','wukong','naloch','kricnak','slimz2','cresht','slimz','dieu-thuyen2','thane-2','preyta','fennik-2','raz','preyta-2','payna-2','illumia','nortos-2','yorn-2','violet-3','valhein-2','taara-2','skud-1','skud','natalya-3','lu-bu','jinna-2','illumia-2','butterfly-4','batman','zuka-2','airi-2','zanis','nurad','nurad-2','nina-2','lauriel-2','ignis-2','ignis','grakk','airi-3','zill-2','zill','zanis-2','yorn-3','veera-3','veera-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','illumia-3','batman-2','arduin-2','arduin','wukong-2','nakroth-3','arthur','ryoma-2','ryoma','raz-2','nganga-2','astrid-2','astrid','zanis-4','xeniel','wukong-3','noren','lauriel-3','joker','xeniel-2','telannas-3','nurad-3','lubu-4','lubu-3','kriknak-2','kahlii-2','diaochanlubu','chaugnar-2','azzenka-2','alice-2','aleister-2','noren-2','lubu-5','lauriel-4','kilgoth','gildur-2','fennik-3','zephys-3','wonderwoman','superman-2','slimz-3','natalya-4','krixi-5','krixi-4','zephys-2','zanis-5','yorn-4','xeniel-3','wonderwoman-2','violet-4','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','valhein-3','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','arthurtelannas','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','krixnak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','cresht-3','cresht-2','astris-3','flash','arum-2','arum','butterfly-6','alice-3','xeniel-4','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-5','valhein-5','superman-3','liliana-3','kilgroth','wirosabaleng','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-5','veera-5','liliana-4','flash-2','arthur-2','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-7','yorn-6','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-5','violet-8','valhein-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avatarff':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
const style = ['a124','alok','alvaro','andrew','antonio','caroline','ford','hayato','joseph','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie','wukong']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'overwatchwallpaper':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
const style = ['ana','ashe','ashe-2','baptiste','baptiste-2','brigitte','dva','dva-2','genji','hanzo','junkrat','lucio','nccree','nei','nercy','nercy-2','nercy-3','noira','pharah','reaper','roadhog','soldier-76','sombra','sombra-2','symmetra','tracer','tracer-2','widowmaker','widowmaker-2','zarya']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'rovwallpaperhd':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|lorion`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|lorion`)
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-5','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-8','volkath','volkath-2','wisp-4','wukong-6','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja-3','veres-3','violet-10','zip-2','zip-3','diaochan-5','enzo-2','lubu-7','payna-4','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','zephys-3','zephys-2','zephys','zanis-5','zanis-4','zanis-3','zanis-2','zanis','violet-5','violet-4','violet-3','violet-2','violet','veera-4','veera-3','veera-2','valhein-3','valhein-2','valhein','thane-2','thane','nina-3','nina-2','nina','nganga-2','nganga','lubu-5','lubu-4','lubu-3','lubu-2','lubu','krixi-5','krixi-4','krixi-3','krixi-2','krixi','kahlii-3','kahlii-2','kahlii','diaochan-3','diaochan-2','diaochan','chaugnar','butterfly-5','butterfly-4','butterfly-2','butterfly','yorn-4','yorn-3','yorn-2','yorn','wukong-3','wukong-2','wukong','toro-2','toro','taara-2','taara','slimz-3','slimz-2','slimz','payna-2','payna','ormarr-4','ormarr-3','ormarr-2','kaisa-2','ormarr','natalya-5','natalya-4','natalya-3','natalya-2','natalya','nakroth-4','nakroth-3','nakroth-2','nakroth','naloch-3','naloch-2','naloch','lumburr','kriknak-2','kriknak','jinna-2','jinna','grakk-3','grakk-2','grakk','gildur-2','gildur','fennik-4','fennik-3','fennik-2','fennik','cresht','azzenka-2','azzenka','arthur-3','arthur-2','arthur','alice-2','alice','aleister-2','aleister','zuka-2','zuka','zill-2','zill','xeniel-2','xeniel','wonderwoman-2','wonderwoman','telannas-4','telannas-3','telannas-2','telannas','superman-2','superman','skud-2','skud','ryoma-2','ryoma','preyta-3','preyta-2','preyta','nurad-3','nurad-2','nurad','noren-2','noren','lauriel-4','lauriel-3','lauriel-2','lauriel','kilgroth-2','kilgroth','joker','illumia-3','illumia-2','illumia','ignis-2','ignis','batman-2','batman','astrid-2','astrid','arduin-2','arduin','airi-5','airi-4','airi-3','airi-2','airi','teemee-2','teemee','zuka-3','tulen','raz-2','raz','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','toro-3','omen-2','omen','zuka-4','tulen-2','nakroth-5','nax','liliana','zill-3','raz-3','liliana-2','tulen-3','telannas-5','taara-3','ryoma-3','nax-2','kriknak-3','flash','cresht-3','cresht-2','arthur-4','aleister-3','airi-6','arum-2','arum','wisp-2','wisp','rourke-2','rourke','narja-2','narja','butterfly-6','batman-3','astris-3','jinna-3','butterfly-7','arthur-5','valhein-4','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-3','veera-5','liliana4','flash-2','arthur-6','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*Hero Yg Kamu Masukkan Salah*\n\n_Berikut list hero yg benar, Total_ *${style.length}* _hero_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'rovwallpaper':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|lorion`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|lorion`)
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera-2','lorion','grakk-6','keera-2','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','dextra','dextra-2','lindis-6','nurad-10','nakroth-9','quillen-7','sephera-5','yorn-8','airi-10','amily-6','astrid-6','ata-3','capheny-5','darcy-4','diaochan-8','hayate-6','lauriel-10','laville-3','rourke-4','ryoma-7','sinestrea','sinestrea-2','telannas-9','thorne','thorne-2','veres-4','yena-6','zephys-7','allain','allain-2','butterfly-12','kahlii-6','nakroth-8','preyta-4','taara-7','valhein-8','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-6','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','kerra-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','keera','raz-4','ishar-2','nax-4','valhein-7','zill-5','arthur-7','rum-5','lubu-8','naloch-7','sephera-4','diaochan-6','ignis-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','elsu-5','narja-3','annette-4','capheny-3','veres-3','zip-2','zip','diaochan-5','enzo-2','lubu-7','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','errol','yena-2','zuka-8','valhein','violet','airi','skud','zanis','zephis','butterfly','wukong','taara','nakroth','prayta','yorn','natalya','thane','toro','ormarr','omega','nina','nganga','lubu2','lubu','kahlii-2','kahlii','fennik-2','fennik','diaochan','cresht','azzenka','aleister','zuka2','zuka','payna-2','payna','nakroth-2','nortos-2','nortos','kriknak','jinna-2','jinna','batman','airi-2','violet-3','violet-2','skud-2','raz-2','raz','ignis-2','ignis','gildur','butterfly-4','butterfly-3','zanis-2','nurad','yorn-2','slimz','ormarr-2','nurad-2','nina-2','lauriel-2','grakk-2','grakk','diaochan-2','airi-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','taara-2','joker','ilumia-2','batman-2','arduin-2','arduin','wukong-2','nakroth-3','ilumia-3','arthur','ryoma-2','ryoma','astrid-2','astrid','zephis-2','natalya-3','natalya-2','ubu-3','chaugnar','azzenka-2','zanis-4','wukong-3','noren','lubu-4','lauriel-3','aleister-2','nurad-3','noren-2','lubu-5','kilgroth','gildur-2','fennik-3','lauriel-4','zephys-3','xeniel-2','wonderwomen','superman-2','slimz-2','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','xeniel','wonderwoman-2','violet-4','preyta2','diaochan-3','airi-4','valhein-4','preyta-3','nina-3','alice-2','airi-5','telannas-3','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','teemee-2','teemee','lindis','zuka-3','valhein-2','tulen','toro-2','naloch-4','naloch-3','lumburr','lindis-2','grakk-4','gildur-3','toro-3','omen-2','omen','zill-3','telannas-','athur-4','zuka-4','tulen-2','nakroth-5','nax','liliana','raz-3','liliana-2','tulen-3','nax-2','flash','cresht-3','cresht-2','chaugnar-2','aleister-3','ryoma-3','kriknak-3','airi-6','wisp-2','wisp','batman-3','arum-2','arum','butterfly-6','rourke-2','rourke','narja-2','narja','taara-3','jinna-3','butterfly-7','arthur-4','arthur-3','arthur-2','valhein-3','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','astrid-3','amily-2','liliana-4','xeniel-5','veera-5','flash-2','athur-5','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','utterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*Avatar Yg Kamu Masukkan Salah*\n\n_Berikut list Avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'beautifulgalaxylol':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|ashe-2`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|ashe-2`)
const style = ['ashe-2','darius-2','hecarim-2','akali-2','jhin-2','jinx-2','kaisa-2','khazix-2','nordekaiser-2','pantheon-2','qiyana','rammus-2','renekton-2','tahmkench-2','teemo-2','udyr-2','yasuo-2','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana-2','kayle-2','akali-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'crossfirecover':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|blthefates`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|blthefates`)
const style = ['spop','swat','switcher','redpower','whitenurse','blthefates','jns','natahari','dx','nursezombie','omohswat','sfg','fox','bllaswat','bljtf','grjtf','blarch','hero-4','gsg9','hero-3','opes','abf','shadows','devilhunter']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'lolwallpaper':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|wallpaper\nUsage: ${prefix + command} zeeone|fizz`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|wallpaper\nUsage: ${prefix + command} zeeone|fizz`)
const style = ['aatrox-2','arhi-2','akali-3','akali-2','braum','camille','evelynn-5','ezreal-2','fizz','graves-2','irelia-3','irelia-2','jayce-2','jhin-2','jinx-2','kaisa','katarina-2','lux-2','neeko','orianna-2','pantheon','pyke','qiyana','riven-2','sylas','teemo-2','viktor','vladimir','warwick-2','yasuo-3','yasuo-2','zoe','nasteryi','lux','lulu','leesin','jinx','jhin','ezreal','janna','ashe','arhi','poppy','nissfortune','soraka','syndra','zyra','yasuo','vi','vayne','taliyah','sona','sivir','shyvana','riven','quinn','nidalee','norgana','leblanc','kennen','karma','irelia','fiora','elise','diana','caitlyn','zed','xayah','tristana','talon','shen','rakan','orianna','nami','kayn','kayle','katarina','kalista','ekko','azir','udyr','thresh','tf','teemo','ryze','nocturne','lucian','khazik','graves','darius','annie','akali','zilean','ziggs','yorick','warwick','nasteryi-2','janna-2','hecarim','gangplank','fiora-2','draven','brand','aatrox','velkoz','shaco','rengar','reksai','ornn','leona','kindred','jayce','jax','jarvan-iv','garen','xinzhao','nasus','kled','evelynn-4','evelynn-3','evelynn-2','evelynn','cassiopeia','zac','xerath','wukong','velkoz-2','veigar','varus','urgot','twich','kassadin','elise-2','annie-2','alistar']
if (!style.includes(m2)){ 
let listt = `*Wallpaper Yg Kamu Masukkan Salah*\n\n_Berikut list walpaper yg benar, Total_ *${style.length}* _wallpaper_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, wallpaper : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverdota2':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|fizz`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|fizz`)
const style = ['void','riki','lycan','ursa','zeus','dragonkinght','warlord','phantomassassin','bountyhunter','antimage','spectre','luna','vengerfulspirit','undying','tusk','tinker','shadowfiend','sandking','nightstalker','nagasiren','nirana','neepo','lina','juggernaut','huskar','emberspirit','emberspirit','emberspirit','earthshaker','drowranger','clockwerk','bristleback','bloodseeker','axe']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverleagueofking':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
const style = ['thane','orrmarr','omega','nakroth','nina','ngangar','gildur','dieuthuyen','chaugnar','butterfly','azzenka','alice','lubo','kriknak-2','natalya-2','trieu-van','taara-2','naloch','kriknak','natalya','taara','ngo-khong','airi','butterfly-2','butterfly-3','kahlii','krixi','toro','grakk','ilumia','zephys','veera-2','violet','preyta-2','violet-2','valhein','yorn','veera','notos','valhein-2','preyta','illumia-2','fennik-2','lumburr','fennik','nakroth-2','krixi-2','gildur2']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avatar3q360':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|dieuthuyen`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|dieuthuyen`)
const style = ['tieu_kieu','luu_bi','truong_oanh_oanh','truong_phi','tu_ma_y','van_uong','hoang_nguyet_anh','hoang_nguyet_anh2','hoang_trung','hua_chu','truong_giac','dieu_thuyen','renekton','tahmkench','teemo','udyr','yasuo','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana','kayle','akali','aatrox']
if (!style.includes(m2)){ 
let listt = `*Avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverofwarface':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
const style = ['warface-4','warface-3','warface-2','warface','sniper-3','sniper-2','sniper','rifleman','nedic-2','nedic','exosuit','engineer']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'newlolavatar':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|rammus`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|rammus`)
const style = ['udyr','twitch','twistedfate','trundle','teemo','swain','shyvana','shen','sejuani','renekton','reksai','rammus','zyra','zilean','ziggs','zac','xerath','warwick','vladimir','viktor','vi','velkoz','veigar','vayne','volibear','tristana','taliyah','shaco','leblanc','jinx','graves','fizz','ekko','corki','cassiopeia','caitlyn','blitzcrank','bard','alistar','akali','aatrox','janna','wukong','thresh','taric','talon','ryze','nordekaiser','karma','kalista','irelia','gnar','garen','galio','soraka','sona','sivir','riven','quinn','nocturne','nami','lux','kindred','khazix','katarina','jarvan','fiora','diana','aurelionsol','ashe','ahri','varus','syndra','nidalee','kennen','jhin','zed','yasuo','rengar','lucian','ezreal','azir','annie','leesin','nasteryi','poppy','pantheon','orianna','nasus','norgana','nissfortune','naokai','nalzaha','lulu','lissandra','leona','kled','jayce','jax','illaoi','xayah','rakan','gangplank','naster_yi2','riven2','elise','darius','xayah_rakan','katarina2','nauthilus','hecarim','thresh2','ashe2','xinzhao','tryndamere','syndra-2','sivir-2','lissandra2','karma-2','draven']
if (!style.includes(m2)){ 
let listt = `*avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'csgocover':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|karambit`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|karambit`)
const style = ['ump45','tec9','n4a1','xm1014','famas','np9','pp-bizon','p2000','negev','usps','dualberettas','np5','karambit','awpdragonlore','np7','galilar','ak-47','glock','sg-553','ak47','r8revolver','aug','butterflyknife','deserteagle','gsg9','p90asiimov','awphawking','n4a4','sas','awpasiimov','ssg08bitw','sg553ds','r8fade','p90ed','n4a1sdecimator','n4a1howl','karambitds','flipknifemf','awmmedusa','augaa','ak47vulcan','ak47fs']
if (!style.includes(m2)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, background : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverloknew':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-5','teemee-3','telannas-6','volkath-3','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','capheny-4','lsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-4','jinna-5','kerra-2','lauriel-7','nina-5','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-7','volkath','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy','florentino-3','noren-3','ryoma-5','sephera-3','annettte-4','capheny-3','elsu-5','narja-3','vilolet-10','violet-10','zip-2','zip-2a','airi-9','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena','yena-2','zuka-8','yorn','violet','zanis','thane','slimz','skud','preyta','payna','nakroth','nina','naloch','illumia','krixi','diaochan','butterfly','veera','valhein','toro','taara','raz','ormarr','nganga','lubu','kriknak','kahlil','grakk','gildur','alice','omega','wukong','natalya','nortos','cresht','airi','aleister','lumburr','zephis','violet-2','jinna','chaugnar','azzenka','valhein-2','zanis-2','skud-2','payna-2','natalya-3','natalya-2','nortos-2','krixi-2','jinna-2','illumia-2','butterfly-3','butterfly-2','yorn-2','taara-2','nakroth-2','lubu2','lauriel','kahlii-2','zuka-2','zuka','batman','airi-2','airi-3','butterfly-4','diaochan-2','grakk-2','ignis','ignis-2','lauriel2','nina-2','nurad','nurad-2','ormarr-2','raz-2','slimz2','violet-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','joker','illumia-3','batman-2','arduin-2','arduin','zephis-2','wukong-2','ryoma-2','ryoma','nakroth-3','nganga-2','azzenka-2','astrid-2','astrid','arthur','zanis-4','wukong-3','noren','lubu-4','lauriel-3','lubu-3','chaugnar-2','aleister-2','xeniel','telannas-3','preyta-2','nurad-3','kriknak-2','fennik-2','diaochanlubu','alice-2','noren-2','lubu-5','lauriel-4','kilgroth','gildur-2','fennik-3','zephys-3','xeniel-2','xeniel-2','wonderwoman','supeman-2','slimz-3','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','wonderwoman-2','violet-4','prayta-3','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','airi-5','natalya-5','fennik-4','valhein-4','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','telannas-5','athur-2','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','kriknak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','flash','cresht-3','cresht-2','astris-3','arum-2','arum','butterfly-6','lice-3','xeniel-3','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-2','violet-6','valhein-5','superman-3','liliana-3','kilgroth-3','diaochan-3','wirosabaleng-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-4','veera-5','liliana-4','flash-2','arthur-3','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-6','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','veera-6','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*hero Yg Kamu Masukkan Salah*\n\n_Berikut list hero yg benar, Total_ *${style.length}* _hero_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverfblol':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|letters\nUsage: ${prefix + command} zeeone|karambit`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|letters\nUsage: ${prefix + command} zeeone|karambit`)
const style = ['yasuo','shen','riven','pantheon','orianna','nocturne','nami','norgana','naster-yi','lux','lucian','katarina','kalista','jinx','jhin','irelia','hecarim','graves','garen','fizz','fiora','ezreal','ekko','diana','darius','cassiopeia','caitlyn','braum','azir','ashe','warwick','thresh','leblanc','khazix','kayn','draven','zyra','zed','xayah','taric','talon','sona','sivir','rengar','rakan','leesin','gnar','elise']
if (!style.includes(m2)){ 
let listt = `*letters Yg Kamu Masukkan Salah*\n\n_Berikut list letters yg benar, Total_ *${style.length}* _letters_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, letters : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'overwatchcover':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
const style = ['zwinston','zjunkrat','zwidowmaker','ztracer','ztorbjorn','zsymmetra','zsombra','zsoldier76','zroadhog','zreinhardt','zreaper','zpharah','zorisa','zmercy','zmei','zmccree','zlucio','zhanzo','zgenji','zenyatta','zdva','zbastion','zarya','zana','yzenyatta','yzarya','ywinston','ywidowmaker','ytracer','ytorbjorn','ysymmetra','ysombra','ysoldier76','yroadhog','yreinhardt','yreaper','ypharah','yorisa','ymercy','ymei','ymccree','ylucio','yjunkrat','yhanzo','ygenji','ydva','ybastion','yana','xzenyatta','xzarya','xwinston','xwidowmaker','xtracer','xtorbjorn','xsymmetra','xsombra','xsoldier76','xroadhog','xreinhardt','xreaper','xpharah','xorisa','xmercy','xmei','xmccree','xlucio','xjunkrat','xhanzo','xgenji','xdva','xbastion','xana','wzenyatta','wzarya','wtracer','wtorbjorn','wsymmetra','wsombra','wsoldier76','wroadhog','wreinhardt','wreaper','wpharah','worisa','wmercy','wmei','wmccree','wlucio','wjunkrat','winston','widowmaker','whanzo','wgenji','wdva','wbastion','wana','vzenyatta','vzarya','vwinston','vwidowmaker','vtracer','vtorbjorn','vsymmetra','vsombra','vsoldier76','vroadhog','vreinhardt','vreaper','vpharah','vorisa','vmercy','vmei','vmccree','vlucio','vjunkrat','vhanzo','vgenji','vdva','vbastion','vana','uzenyatta','uzarya','uwinston','uwidowmaker','utracer','utorbjorn','usymmetra','usombra','usoldier76','uroadhog','ureinhardt','ureaper','upharah','uorisa','umercy','umei','umccree','ulucio','ujunkrat','uhanzo','ugenji','udva','ubastion','uana','tzenyatta','tzarya','twinston','twidowmaker','tsymmetra','tsombra','tsoldier76','troadhog','treinhardt','treaper','tracer','tpharah','torisa','torbjorn','tmercy','tmei','tmccree','tlucio','tjunkrat','thanzo','tgenji','tdva','tbastion','tana','szenyatta','szarya','symmetra','swinston','swidowmaker','stracer','storbjorn','sroadhog','sreinhardt','sreaper','spharah','sorisa','sombra','soldier76','smercy','smei','smccree','slucio','sjunkrat','shanzo','sgenji','sdva','sbastion','sana','rzenyatta','rzarya','rwinston','rwidowmaker','rtracer','rtorbjorn','rsymmetra','rsombra','rsoldier76','rrmei','rpharah','rorisa','roadhog','rmercy','rmccree','rlucio','rjunkrat','rhanzo','rgenji','reinhardt','reaper','rdva','rbastion','rana','qzenyatta','qzarya','qwinston','qwidowmaker','qtracer','qtorbjorn','qsymmetra','qsombra','qsoldier76','qroadhog','qreinhardt','qreaper','qpharah','qorisa','qmercy','qmei','qmccree','qlucio','qjunkrat','qhanzo','qgenji','qdva','qbastion','qana','pzenyatta','pzarya','pwinston','pwidowmaker','ptracer','ptorbjorn','psymmetra','psombra','psoldier76','proadhog','preinhardt','preaper','porisa','pmercy','pmei','pmccree','plucio','pjunkrat','pharah','phanzo','pgenji','pdva','pbastion','pana','ozenyatta','ozarya','owinston','owidowmaker','otracer','otorbjorn','osymmetra','osombra','osoldier76','oroadhog','orisa','oreinhardt','oreaper','opharah','omercy','omei','omccree','olucio','ojunkrat','ohanzo','ogenji','odva','obastion','oana','nzenyatta','nzarya','nwinston','nwidowmaker','ntracer','ntorbjorn','nsymmetra','nsombra','nsoldier76','nroadhog','nreinhardt','nreaper','npharah','norisa','nmercy','nmei','nmccree','nlucio','njunkrat','nhanzo','ngenji','ndva','nbastion','nana','mzenyatta','mzarya','mwinston','mwidowmaker','mtracer','mtorbjorn','msymmetra','msombra','msoldier76','mroadhog','mreinhardt','mreaper','mpharah','morisa','mlucio','mjunkrat','mhanzo','mgenji','mercy','mei','mdva','mccree','mbastion','mana','lzenyatta','lzarya','lwinston','lwidowmaker','lucio','ltracer','ltorbjorn','lsymmetra','lsombra','lsoldier76','lroadhog','lreinhardt','lreaper','lpharah','lorisa','lmercy','lmei','lmccree','ljunkrat','lhanzo','lgenji','ldva','lbastion','lana','kzenyatta','kzarya','kwinston','kwidowmaker','ktracer','ktorbjorn','ksymmetra','ksombra','ksoldier76','kroadhog','kreinhardt','kreaper','kpharah','korisa','kmercy','kmei','kmccree','klucio','kjunkrat','khanzo','kgenji','kdva','kbastion','kana','jzenyatta','jzarya','jwinston','jwidowmaker','junkrat','jtracer','jtorbjorn','jsymmetra','jsombra','jsoldier76','jroadhog','jreinhardt','jreaper','jpharah','jorisa','jmercy','jmei','jmccree','jlucio','jhanzo','jgenji','jdva','jbastion','jana','izenyatta','izarya','iwinston','iwidowmaker','itracer','itorbjorn','isymmetra','isombra','isoldier76','iroadhog','ireinhardt','ireaper','ipharah','iorisa','imercy','imei','imccree','ilucio','ijunkrat','ihanzo','igenji','idva','ibastion','iana','hzenyatta','hzarya','hwinston','hwidowmaker','htracer','htorbjorn','hsymmetra','hsombra','hsoldier76','hroadhog','hreinhardt','hreaper','hpharah','horisa','hmercy','hmei','hmccree','hlucio','hjunkrat','hgenji','hdva','hbastion','hanzo','hana','gzenyatta','gzarya','gwinston','gwidowmaker','gtracer','gtorbjorn','gsymmetra','gsombra','gsoldier76','groadhog','greinhardt','greaper','gpharah','gorisa','gmercy','gmei','gmccree','glucio','gjunkrat','genji','gdva','gbastion','ganafzenyatta','fzarya','fwinston','fwidowmaker','ftracer','ftorbjorn','fsymmetra','fsombra','fsoldier76','froadhog','freinhardt','freaper','fpharah','forisa','fmercy','fmei','fmccree','flucio','fjunkrat','fhanzo','fgenji','fdva','fbastion','fana','ezenyatta','ezarya','ewinston','ewidowmaker','etracer','etorbjorn','esymmetra','esombra','esoldier76','eroadhog','ereinhardt','ereaper','epharah','eorisa','emercy','emei','emccree','elucio','ejunkrat','ehanzo','egenji','edva','ebastion','eana','dzenyatta','dzarya','dwinston','dwidowmaker','dva','dtracer','dtorbjorn','dsymmetra','dsombra','dsoldier76','droadhog','dreinhardt','dreaper','dpharah','dorisa','dmercy','dmei','dmccree','dlucio','djunkrat','dhanzo','dgenji','dbastion','dana','czenyatta','czarya','cwinston','cwidowmaker','ctracer','ctorbjorn','csymmetra','csombra','csoldier76','croadhog','creinhardt','creaper','cpharah','corisa','cmercy','cmei','cmccree','clucio','cjunkrat','chanzo','cgenji','cdva','cbastion','cana','bzenyatta','bzarya','bwinston','bwidowmaker','btracer','btorbjorn','bsymmetra','bsombra','bsoldier76','broadhog','breinhardt','breaper','bpharah','borisa','bmercy','bmei','bmccree','blucio','bjunkrat','bhanzo','bgenji','bdva','bastion','bana','azenyatta','azarya','awinston','awidowmaker','atracer','atorbjorn','asymmetra','asombra','asoldier76','aroadhog','areinhardt','areaper','apharah','aorisa','ana','amercy','amei','amccree','alucio','ajunkrat','ahanzo','agenji','adva','abastion','zdoomfist','ydoomfist','xdoomfist','wdoomfist','vdoomfist','udoomfist','tdoomfist','sdoomfist','rdoomfist','qdoomfist','pdoomfist','odoomfist','ndoomfist','mdoomfist','ldoomfist','kdoomfist','jdoomfist','idoomfist','hdoomfist','gdoomfist','fdoomfist','edoomfist','doomfist','cdoomfist','bdoomfist','adoomfist']
if (!style.includes(m2)){ 
let listt = `*hero Yg Kamu Masukkan Salah*\n\n_Berikut list hero yg benar, Total_ *${style.length}* _hero_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'crossfirestyle':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
const style = ['spop','switcher','switcher-2','switcher-3 ','thefates','thefates-2','thefates-3','swat','fox','star','omoh','sabel','sas','sia','navy-seals','jtf','jns','laswat','sraf','shadow','nemesis','nocha','ixions','gsg-9','ghosty','hermes','foxu','dh','angelapt','ac']
if (!style.includes(m2)){ 
let listt = `*avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avatarlolbyname':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
const style = ['katarina-0','zyra-4','zyra-3','zyra-2','zyra-1','zyra-0','zilean-5','zilean-4','zilean-3','zilean-2','zilean-1','zilean-0','ziggs-5','ziggs-4','ziggs-3','ziggs-2','ziggs-1','ziggs-0','zed-3','zed-2','zed-10','zed-1','zed-0','zac-2','zac-1','zac-0','yorick-2','yorick-1','yorick-0','yasuo-4','yasuo-3','yasuo-2','yasuo-1','yasuo-0','xinzhao-6','xinzhao-13','xinzhao-5','xinzhao-4','xinzhao-3','xinzhao-2','xinzhao-1','xinzhao-0','xerath-4','xerath-3','xerath-2','xerath-1','xerath-0','xayah-1','xayah-0','warwick-8','warwick-7','warwick-6','warwick-5','warwick-4','warwick-3','warwick-2','warwick-1','warwick-0','volibear-5','volibear-4','volibear-3','volibear-2','volibear-1','volibear-0','vladimir-7','vladimir-6','vladimir-5','vladimir-4','vladimir-3','vladimir-2','vladimir-1','vladimir-0','viktor-2','viktor-1','viktor-0','vi-5','vi-4','vi-3','vi-2','vi-1','vi-0','velkoz-3','velkoz-2','velkoz-1','velkoz-0','veigar-8','veigar-7','veigar-6','veigar-5','veigar-4','veigar-3','veigar-2','veigar-1','veigar-0','vayne-6','vayne-5','vayne-4','vayne-3','vayne-2','vayne-1','vayne-0','vayne-10','varus-6','varus-5','varus-4','varus-3','varus-2','varus-1','varus-0','urgot-3','urgot-2','urgot-1','urgot-0','udyr-4','udyr-3','udyr-2','udyr-1','udyr-0','twitch-7','twitch-6','twitch-5','twitch-4','twitch-3','twitch-2','twitch-1','twitch-0','twistedfate-9','twistedfate-10','twistedfate-8','twistedfate-7','twistedfate-6','twistedfate-5','twistedfate-4','twistedfate-3','twistedfate-2','twistedfate-1','twistedfate-0','tryndamere-9','tryndamere-8','tryndamere-7','tryndamere-6','tryndamere-5','tryndamere-4','tryndamere-3','tryndamere-2','tryndamere-1','tryndamere-0','trundle-5','trundle-4','trundle-3','trundle-2','trundle-1','trundle-0','tristana-6','tristana-5','tristana-4','tristana-3','tristana-2','tristana-1','tristana-0','tristana-10','tristana-11','thresh-5','thresh-4','thresh-3','thresh-2','thresh-1','thresh-0','teemo-8','teemo-7','teemo-6','teemo-5','teemo-4','teemo-3','teemo-2','teemo-1','teemo-0','teemo-14','taric-4','taric-3','taric-2','taric-1','taric-0','talon-5','talon-4','talon-3','talon-2','talon-1','talon-0','taliyah-1','taliyah-0','tahmkench-2','tahmkench-1','tahmkench-0','syndra-4','syndra-3','syndra-2','syndra-1','syndra-0','swain-3','swain-2','swain-1','swain-0','soraka-6','soraka-5','soraka-4','soraka-3','soraka-2','soraka-1','soraka-0','sona-6','sona-5','sona-4','sona-3','sona-2','sona-1','sona-0','skarner-4','skarner-3','skarner-2','skarner-1','skarner-0','sivir-7','sivir-6','sivir-5','sivir-4','sivir-3','sivir-2','sivir-1','sivir-0','sion-5','sion-4','sion-3','sion-2','sion-1','sion-0','singed-8','singed-7','singed-6','singed-5','singed-4','singed-3','singed-2','singed-1','singed-0','shyvana-6','shyvana-5','shyvana-4','shyvana-3','shyvana-3','shyvana-2','shyvana-1','shyvana-0','shen-6','shen-5','shen-4','shen-3','shen-2','shen-1','shen-0','shaco-7','shaco-6','shaco-5','shaco-4','shaco-3','shaco-2','shaco-1','shaco-0','sejuani-7','sejuani-6','sejuani-5','sejuani-4','sejuani-3','sejuani-2','sejuani-1','sejuani-0','ryze-10','ryze-9','ryze-8','ryze-7','ryze-6','ryze-5','ryze-4','ryze-3','ryze-2','ryze-1','ryze-0','rumble-3','rumble-2','rumble-1','rumble-0','riven-8','riven-7','riven-6','riven-5','riven-4','riven-3','riven-2','riven-1','riven-0','rengar-3','rengar-2','rengar-1','rengar-0','renekton-9','renekton-8','renekton-7','renekton-6','renekton-5','renekton-4','renekton-3','renekton-2','renekton-1','renekton-0','reksai-1','reksai-2','reksai-0','rammus-7','rammus-6','rammus-5','rammus-4','rammus-3','rammus-2','rammus-1','rammus-0','rakan-1','rakan-0','quinn-4','quinn-3','quinn-2','quinn-1','quinn-0','poppy-7','poppy-6','poppy-5','poppy-4','poppy-3','poppy-2','poppy-1','poppy-0','pantheon-8','pantheon-7','pantheon-6','pantheon-5','pantheon-4','pantheon-3','pantheon-2','pantheon-1','pantheon-0','orianna-7','orianna-6','orianna-5','orianna-4','orianna-3','orianna-2','orianna-1','orianna-0','olaf-6','olaf-5','olaf-4','olaf-3','olaf-2','olaf-1','olaf-0','nunu-7','nunu-6','nunu-5','nunu-4','nunu-3','nunu-2','nunu-1','nunu-0','nocturne-6','nocturne-5','nocturne-4','nocturne-3','nocturne-2','nocturne-1','nocturne-0','nidalee-8','nidalee-7','nidalee-6','nidalee-5','nidalee-4','nidalee-3','nidalee-2','nidalee-1','nidalee-0','nautilus-5','nautilus-4','nautilus-3','nautilus-2','nautilus-1','nautilus-0','nasus-6','nasus-5','nasus-4','nasus-3','nasus-2','nasus-1','nasus-0','nasus-10','nami-7','nami-6','nami-5','nami-4','nami-3','nami-2','nami-1','nami-0','norgana-6','norgana-5','norgana-4','norgana-3','norgana-2','norgana-1','norgana-0','norgana-10','norgana-11','nordekaiser-4','nordekaiser-3','nordekaiser-2','nordekaiser-1','nordekaiser-0','nonkeyking-5','nonkeyking-4','nonkeyking-3','nonkeyking-2','nonkeyking-1','nonkeyking-0','nissfortune-9','nissfortune-8','nissfortune-7','nissfortune-6','nissfortune-5','nissfortune-4','nissfortune-3','nissfortune-2','nissfortune-1','nissfortune-0','nasteryi-3','nasteryi-2','nasteryi-1','nasteryi-0','nasteryi-9','nasteryi-5','nasteryi-4','nasteryi-10','naokai-7','naokai-6','naokai-5','naokai-4','naokai-3','naokai-2','naokai-1','naokai-0','nalzahar-5','nalzahar-4','nalzahar-3','nalzahar-2','nalzahar-1','nalzahar-0','nalphite-7','nalphite-6','nalphite-5','nalphite-4','nalphite-3','nalphite-2','nalphite-1','nalphite-0','lux-7','lux-6','lux-5','lux-4','lux-3','lux-2','lux-1','lux-0','lulu-6','lulu-5','lulu-4','lulu-3','lulu-2','lulu-1','lulu-0','lucian-6','lucian-7','lucian-2','lucian-1','lucian-0','lissandra-3','lissandra-2','lissandra-1','lissandra-0','leona-9','leona-8','leona-7','leona-6','leona-5','leona-4','leona-3','leona-2','leona-1','leona-0','leesin-6','leesin-5','leesin-4','leesin-3','leesin-2','leesin-1','leesin-0','leesin-10','leesin-11','leblanc-5','leblanc-4','leblanc-3','leblanc-2','leblanc-1','leblanc-0','kogmaw-9','kogmaw-8','kogmaw-7','kogmaw-6','kogmaw-5','kogmaw-4','kogmaw-3','kogmaw-2','kogmaw-1','kogmaw-0','kled-1','kled-0','kindred-2','kindred-1','kindred-0','khazix-4','khazix-3','khazix-2','khazix-1','khazix-0','kennen-7','kennen-6','kennen-5','kennen-4','kennen-3','kennen-2','kennen-1','kennen-0','kayle-8','kayle-7','kayle-6','kayle-5','kayle-4','kayle-3','kayle-2','kayle-1','kayle-0','katarina-9','katarina-8','katarina-7','katarina-5','katarina-6','katarina-4','katarina-3','katarina-2','katarina-1','kassadin-4','kassadin-3','kassadin-2','kassadin-1','kassadin-0','karthus-9','karthus-5','karthus-4','karthus-3','karthus-2','karthus-1','karthus-0','karma-7','karma-6','karma-5','karma-4','karma-3','karma-2','karma-1','karma-0','kalista-3','kalista-2','kalista-1','kalista-0','jinx-4','jinx-3','jinx-2','jinx-1','jinx-0','jayce-4','jayce-3','jayce-2','jayce-1','jayce-0','jax-9','jax-8','jax-7','jax-6','jax-5','jax-4','jax-3','jax-2','jax-1','jax-0','jarvaniv-6','jarvaniv-5','jarvaniv-4','jarvaniv-3','jarvaniv-2','jarvaniv-1','jarvaniv-0','janna-7','janna-6','janna-5','janna-4','janna-3','janna-2','janna-1','ivern-1','ivern-0','irelia-5','irelia-4','irelia-3','irelia-2','irelia-1','irelia-0','illaoi-1','illaoi-0','heimerdinger-5','heimerdinger-4','heimerdinger-3','heimerdinger-2','heimerdinger-1','heimerdinger-0','hecarim-6','hecarim-5','hecarim-4','hecarim-3','hecarim-2','hecarim-1','hecarim-0','graves-7','graves-6','graves-5','graves-4','graves-3','graves-2','graves-1','graves-0','gragas-9','gragas-8','gragas-7','gragas-6','gragas-5','gragas-4','gragas-3','gragas-3','gragas-2','gragas-1','gragas-0','gnar-4','gnar-3','gnar-2','gnar-1','gnar-0','garen-6','garen-5','garen-4','garen-3','garen-2','garen-1','garen-0','garen-10','garen-11','gangplank-8','gangplank-7','gangplank-6','gangplank-5','gangplank-4','gangplank-3','gangplank-2','gangplank-1','gangplank-0','galio-5','galio-4','galio-3','galio-2','galio-1','galio-0','fizz-9','fizz-8','fizz-4','fizz-3','fizz-2','fizz-1','fizz-0','fiora-5','fiora-4','fiora-3','fiora-2','fiora-1','fiora-0','fiddlesticks-7','fiddlesticks-6','fiddlesticks-5','fiddlesticks-4','fiddlesticks-3','fiddlesticks-2','fiddlesticks-1','fiddlesticks-0','ezreal-9','ezreal-8','ezreal-7','ezreal-6','ezreal-5','ezreal-4','ezreal-3','ezreal-2','ezreal-1','ezreal-0','evelynn-4','evelynn-3','evelynn-2','evelynn-1','evelynn-0','elise-4','elise-3','elise-2','elise-1','elise-0','ekko-3','ekko-2','ekko-1','ekko-0','draven-6','draven-5','draven-4','draven-3','draven-2','draven-1','draven-0','drmundo-9','drmundo-8','drmundo-7','drmundo-6','drmundo-5','drmundo-4','drmundo-3','drmundo-2','drmundo-1','drmundo-0','diana-3','diana-2','diana-1','diana-0','diana-11','darius-8','darius-4','darius-3','darius-2','darius-1','darius-0','darius-14','corki-8','corki-7','corki-6','corki-5','corki-4','corki-3','corki-2','corki-1','corki-0','chogath-6','chogath-5','chogath-4','chogath-3','chogath-2','chogath-1','chogath-0','cassiopeia-4','cassiopeia-3','cassiopeia-2','cassiopeia-1','cassiopeia-0','camille-1','camille-0','caitlyn-6','caitlyn-5','caitlyn-4','caitlyn-3','caitlyn-2','caitlyn-1','caitlyn-0','caitlyn-10','caitlyn-11','braum-3','braum-2','braum-1','braum-0','braum-10','brand-5','brand-4','brand-3','brand-2','brand-1','brand-0','blitzcrank-7','blitzcrank-6','blitzcrank-5','blitzcrank-4','blitzcrank-3','blitzcrank-2','blitzcrank-1','blitzcrank-0','blitzcrank-11','bard-6','bard-5','bard-4','bard-3','bard-2','bard-1','bard-0','azir-4','azir-3','azir-2','azir-1','azir-0','aurelionsol-1','aurelionsol-0','ashe-8','ashe-7','ashe-6','ashe-5','ashe-4','ashe-3','ashe-2','ashe-1','ashe-0','annie-9','annie-8','annie-7','annie-6','annie-5','annie-4','annie-3','annie-2','annie-1','annie-0','annie-10','anivia-7','anivia-6','anivia-5','anivia-4','anivia-3','anivia-2','anivia-1','anivia-0','amumu-8','amumu-7','amumu-6','amumu-5','amumu-4','amumu-3','amumu-2','amumu-1','amumu-0','alistar-9','alistar-8','alistar-7','alistar-6','alistar-5','alistar-4','alistar-3','alistar-2','alistar-1','alistar-0','akali-8','akali-7','akali-6','akali-5','akali-4','akali-3','akali-2','akali-1','akali-0','ahri-7','ahri-6','ahri-5','ahri-4','ahri-3','ahri-2','ahri-1','ahri-0','aatrox-3','aatrox-2','aatrox-1','aatrox-0','zacskt','teemoskt','olafskt','namiskt','syndraskt','jhinskt','ekkoskt','urgot-8','urgot-7','urgot-6','urgot-5','kayn-2','kayn','sona-8','veigaros','twitchos','tristanaos','fizzos','zigg','nalzah01','kayle','hecarim','brand','ornn2','ornn','syndra','soraka','nissfortune','ezreal','ahri','yorick','singed','nasteryi','janna','fiora','cassiopeia','ashe','zed','viktor','nidalee','katarina','gnar','evelynn-7','evelynn-6','evelynn-5','evelynn','elise','annie','rengar','blitzcrank-9','blitzcrank-8','zoe-2','zoe','vi','vayne','varus','poppy','kogmaw','jinx','jhin','jax','graves','draven','xinzhao','warwick','swain-8','swain-7','swain-6','swain-5','swain-4','rakan','nasus','nissfortune-15','nissfortune-14','nissfortune-13','nissfortune-12','nissfortune-11','nissfortune-10','lux','kaisa-2','kaisa','jarvan-iv','illaoi','gragas','wukong','sivir','nissfortune-16','irelia-11','irelia-10','irelia-9','irelia-8','irelia-7','irelia-6','galio','alistar','varus-7','twistedfate','teemo','shen','rumble','riven','evelynn-8','zoe3','xinzhao-7','urgot','thresh','talon','taliya','pyke-2','pyke','poppy-8','nunu-15','nunu-14','nunu-13','nunu-12','nunu-11','nunu-10','nunu-9','nunu-8','lulu','lucian','jarvan-iv-7','irelia-12','garen','gangplank','darius','caitlyn','braum','aurelionsol-2','ashe-9','akali-18','akali-17','akali-16','akali-15','akali-14','akali-13','akali-12','akali-11','akali-10','akali-9','aatrox-7','aatrox-6','aatrox-5','aatrox-4','ziggs-6','yasuo','sona','nalphite','khazix','kayn-3','jinx-5']
if (!style.includes(m2)){ 
let listt = `*style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'lolcoverbyname':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
const style = ['zyra','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twictch','tryndamere','trundle','tristana','thresh','twistedfate','teemo','taric','talon','taliyah','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','orianna','olaf','nunu','nasteryi','naokai','nalzahar','nalphite','lux','lulu','lucian','nocturne','nedalee','nautilus','nasus','nami','norgana','noderkaiser','nissfortune','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','jinx','jhin','jayce','jax','jarvan','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','drmundo','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','zoe','sylas','swain-2','pyke','nunu-2','neeko','norgana2','kayle-2','kaisa','evelynn-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `*avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'cyberhunterfb':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
const style = ['1','2','3','4','5','6','7','8','9','10','11','12']
if (!style.includes(m2)){ 
let listt = `*character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverfreefirefb':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
const style = ['a124','alok','alvaro','andrew','antonio','caroline','hayato','kapella','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie']
if (!style.includes(m2)){ 
let listt = `*character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'gamingmascot':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
const style = ['bear-2','dragon-2','hydra','lion','reaper','wolf-2','bear','eagle','iguana','shark','snake','spartan','griffin','owl','wolf','tiger','wolver','dragon']
if (!style.includes(m2)){ 
let listt = `*style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coveronepiecefb':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
const style = ['ace','brook','chopper','franky','garp','jinbei','law','luffy','nerry','nami','rayleigh','robin','sabo','sanji','shanks','sunny','usopp','zoro']
if (!style.includes(m2)){ 
let listt = `*character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerytcsgo':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|banner\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|banner\nUsage: ${prefix + command} zeeone|swat`)
const style = ['banner-1','banner-2','banner-3','banner-4','banner-5','banner-6','banner-7']
		if (!style.includes(m2)){ 
let listt = `*banner Yg Kamu Masukkan Salah*\n\n_Berikut list banner yg benar, Total_ *${style.length}* _banner_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, banner : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'fbgamepubgcover':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|template\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|template\nUsage: ${prefix + command} zeeone|swat`)
const style = ['cover-1','cover-2','cover-3','cover-4','cover-5','cover-6','cover-7','cover-8','cover-9','cover-10','cover-11','cover-12']
if (!style.includes(m2)){ 
let listt = `*template Yg Kamu Masukkan Salah*\n\n_Berikut list template yg benar, Total_ *${style.length}* _template_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, template : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'banneroflol':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var memek = args.join(" ").split("|")
var m1 = memek[0]
var m2 = memek[1]
var m3 = memek[2]
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['ahri-2','neeko','nocturne','shen-2','veigar','rakanayah-2','zoe-2','pantheon-2','rammus','udyr','darius-2','ekko-2','lablanc','leona','nissfotune','poppy','quinn','talon-2','akali-2','irelia-2','jinx-2','nordekaiser','pyke-2','renekton','rengar','sivir','sona','soraka','tristana','warwick','yuumi','ziggs','leesin','lulu','lux','naster-yi','norgana','nasus','pantheon','pyke','qiyana','rakan','rakanxayah','riven','shen','sylas','talon','teemo','thresh','tryndamere','varus','vayne','velkoz','vladimir','yasuo','zed','zoe','hecarim','heimerdinger','illaoi','irelia','ivern','janna','jarvan-iv','jax','jayce','jhin','jinx','kaisa','kalista','karma','karthus','kassadin','katarina','kayle','kayn','kennen','khazix','kindred','kled','kogmaw','aatrox','ahri','akali','alistar','amumu','anivia','annie','ashe','aurelionsol','azir','bard','blitzcrank','brand','braum','caitlyn','camille','cassiopeia','chogath','corki','darius','diana','drmundo','draven','ekko','elise','evelynn','ezreal','fiddlesticks','fiora','fizz','galio','gangplank','garen','gnar','gragas','graves']
if (!style.includes(m3)){ 
let listt = `*banner Yg Kamu Masukkan Salah*\n\n_Berikut list banner yg benar, Total_ *${style.length}* _banner_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
	let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, banner : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerofaov2':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['airi-2','aleister','astrid-2','ata','butterfly-2','dirak','ignis-2','ishar','jinna','lauriel-3','nina-2','natalya-2','omen-2','qi-2','quillen3','raz','roxie-2','ryoma-2','taara-2','violet-3','wukong-4','wukong-3','krixi-2','krizziz','nurad-5','volkath','wisp-2','wukong-2','enzo-2','hayate-2','annette-2','capheny-2','celica','gildur-2','lauriel-2','nurad-4','quillen-2','sephera-2','qi','nurad-3','nurad-2','nakroth-2','zip','diao-chan-2','enzo','errol','joker','payna','slimz','thane','toro','veres','violet-2','wisp','yena','zill','arduin','arthur','batman','capheny','darcy','elsu','florentino','gildur','ignis','wukong','yena','zanis','violet','tulen','sephera','nurad','nina','lindis','liliana','lauriel','krixi','kahlii','hayate','diao-chan','butterfly','astrid','arum','annette','amily','airi','zuka','zephys','zanis','yorn','xeniel','veres','veera','tel-annas','taara','superman','skud','ryoma','roxie','quillen','omen','natalya','nakroth','lubu']
if (!style.includes(m3)){ 
let listt = `*banner Yg Kamu Masukkan Salah*\n\n_Berikut list banner yg benar, Total_ *${style.length}* _banner_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, banner : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'teamlogo':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['cobra','dragon','eagle2','falcon','lion2','tiger2','bear','buffalo','eagle','lion','tiger','wolf']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'companylogo2':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'companylogo':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'gradientlogo':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['1','2','3','4','5','6']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'pencilsketch':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|icon\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|icon\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|icon\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bird','butterfly','coffee','dove','leaf','like','lotus','milk-tea','panda','tree','woman','bear','bull','dragon','eagle','hawk','ninja','paw','rooster','sabertooth','skull','warrior','zebra']
if (!style.includes(m3)){ 
let listt = `*icon Yg Kamu Masukkan Salah*\n\n_Berikut list icon yg benar, Total_ *${style.length}* _icon_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, icon : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'gunlogogaming':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['ak47','ak47-s','an94','ar15','aug','awm','g36k','m4a1','m4-s','m14ebr','m16','m60','m82a1','mp5','scar','svd','xm8','xm1014']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'banneroffreefire':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['andrew','caroline','kelly','laura','maxim','miguel','misha','moco','nikita','notora','olivia','steffi']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'letterlogos':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerofoverwatch':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['widowmaker','tracer','symmetra','sombra','soldier76','reinhardt','reaper','orisa','mercy','mei','genji','dva','doomfist','ashe','ana']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerofapex':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerofpubg':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bg11','bg10','bg9','bg8','bg7','bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'mascotstyle':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['dragon-5','jet','knight','skull-3','skull-cyborg','tiger-4','bee-3','dragon-4','fox-3','goat-2','kitsune','octopus-2','piranha','wolf','bear-2','cat','ceberus','crocodile','dinosaur','dragon-3','eagle-3','horse-2','husky','kraken','lynx','sabertooh','assassin','bee','cat2','demon','fox','gorilla','horus','octopus','rounin','scorpion','skull2','tiger3','tiger2','tiger','shark','sabertooth','rooster','rhino','puma','phoenix','panther','owl','lion','horse','hornet','griffin','goat','fox','eagle','dragon2','dragon','devil','cobra','bull','bear','monkey','warrior','rabbit','pirates','owl2','neonwolf','lionking','godzilla','flashwolf','fire','eagle2','dog','mask','team','pubg','drift','bee2']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'logoaccording':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bear2','cat2','ceberus','crocodile','dinosaur','dragon3','eagle3','horse2','husky','kraken','lynx','sabertooh','assassin','bee','cat','demon','fox-2','gorilla','horus','octopus','rounin','scorpion','-2','tiger-3','bg-tiger','bg-buffalo','chicken','bull','bg-wolf','jaguar','horse','eagle','dragon','wolver','shark','sabertooth','rhino','phoenix','lion','hornet','griffin','bear','tiger2','panther','owl','monkey','goat','fox','dragon2','devil','cobra','reaper','pirates','owl2','mask','fire','eagle2','chamois','neptune','parrots','samurai']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avataroverwatch':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1 ) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['mccree','mercy','zenyatta','zarya','winston','widowmaker','tracer','torbjorn','symmetra','sombra','soldier76','soldier_76','roadhog','reinhardt','reaper2','reaper','pharah','orisa','mei','lucio','junkrat','hanzo','genji','dva','bastion','ana2','ana','doomfist','bg-1']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	
	
//ephoto360
case 'youtubegold':
case 'youtubesilver':
case 'facebookgold':
case 'facebooksilver':
case 'instagramgold':
case 'instagramsilver':
case 'twittergold':
case 'twittersilver':
case 'retrotext':
case 'halloweenbats':
case 'texthalloween':
case 'cardhalloween':
case 'birthdaycake':
case 'thundertext':
case 'icetext':
case 'milkcake':
case 'snowontext':
case 'metalstar':
case 'dragonfire':
case 'zombie3d':
case 'merrycard':
case 'viettel':
case 'embroider':
case 'graffititext':
case 'graffititext2':
case 'graffititext3':
case 'covergraffiti':
case 'moderngold':
case 'capercut':
case 'lovecard':
case 'heartflashlight':
case 'heartcup':
case 'sunglightshadow':
case 'graffiti3d':
case 'moderngoldsilver':
case 'moderngold2':
case 'moderngold3':
case 'fabrictext':
case 'masteryavatar':
case 'messagecoffee':
case 'announofwin':
case 'writeblood':
case 'horrorletter':
case 'writehorror':
case 'shirtclub':
case 'angelwing':
case 'christmasseason':
case 'projectyasuo':
case 'lovelycute':
case 'womansday':
case 'covergamepubg':
case 'nameonheart':
case 'christmascard': 
case 'galaxybat':
case 'writegalaxy':
case 'starsnight':
case 'noeltext':
case 'textcakes':
case 'pubgbirthday':
case 'galaxywallpaper':
case 'pubgmascotlogo':
case 'realembroidery':
case 'vintagetelevision':
case 'funnyanimations':
case 'glowingtext':
case 'textonglass':
case 'cartoonstyle':
case 'multicolor':
case 'watercolor2':
case 'textsky':
case 'summerbeach':
case '1917text':
case 'puppycute':
case 'rosebirthday':{
	if (args.length < 1) return reply(lang.noteks(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: q}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` })
.catch(e =>{
reply(lang.tryAgain())
})
await  limitAdd(sender, limit)}
break 
case 'funnyhalloween': case 'lightningpubg': case 'greetingcardvideo':  case 'pubgglicthvideo': case 'generalexam': {
	if (args.length < 1) return reply(lang.noteks(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: q}, 'apikey'))
alpha.sendMessage(from, textpro2 , MessageType.video, {mimetype: 'video/mp4', quoted: mek, caption: `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 `})
.catch(e =>{
reply(lang.tryAgain())
})
await  limitAdd(sender, limit)}
	break
case 'steellettering':
case 'letterstext':
case 'barcashirt':
case 'premiercup':
case 'stylepoligon':
case 'lifebuoys':
case 'juventusshirt':{
	if (args.length < 1) return reply(lang.tahta(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, text2: m2}, 'apikey'))
alpha.sendMessage(from, textpro, MessageType.image, { quoted: mek, caption: `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` })
.catch(e =>{
reply(lang.tryAgain())
})
await  limitAdd(sender, limit)
}
break 
case 'asmaulhusna':{
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		let txt = '*Asmaul Husna*\n\n'
		txt += `• Latin : ${data.result.latin}\n`
		txt += `• Arabic : ${data.result.arabic}\n`
		txt += `• Tr id : ${data.result.translation_id}\n`
		txt += `• Tr en : ${data.result.translation_en}`
		reply(txt)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
await  limitAdd(sender, limit)
	}
	break
case 'kisahnabi':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} Adam`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {nabi : q}, 'apikey'))
	.then(async data =>{
		let txt = '*Kisah Nabi*\n\n'
		txt += `• Name : ${data.result.name}\n`
		txt += `• Birth : ${data.result.birth}\n`
		txt += `• Death Age : ${data.result.death_age}\n`
		txt += `• Country : ${data.result.country_from}\n`
		txt += `• Story : ${data.result.story}\n`
		reply(txt)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
		await  limitAdd(sender, limit)
	}
	break
case 'jadwalshalat':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} Makassar`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {daerah : q}, 'apikey'))
	.then(async data =>{
		let txt = '*Jadwal Shalat *\n\n'
		txt += `• Daerah : ${q}\n\n`
		txt += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
		txt += `• Subuh : ${data.result.today.Shubuh}\n`
		txt += `• Zuhur : ${data.result.today.Dzuhur}\n`
		txt += `• Ashr : ${data.result.today.Ashr}\n`
		txt += `• Magrib : ${data.result.today.Maghrib}\n`
		txt += `• Isya : ${data.result.today.Isya}\n`
		reply(txt)
		await  limitAdd(sender, limit)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
	}
	break
case 'randomquran':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		let short = data.result.resources
		let txt = '*Random Quran*\n\n'
		txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
		txt += `• Surah ke : ${short.numberOfSurah}\n`
		txt += `• Total ayat : ${short.totalAyah}\n`
		txt += `• Ayat ke : ${short.numberOfAyah}\n`
		txt += `• Arab : ${short.ayah.text.arab}\n`
		txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
		txt += `• Tr en : ${short.ayah.translation.en}\n`
		txt += `• Tr id : ${short.ayah.translation.id}\n\n`
		txt += `_*Audio sedang dalam di proses pengiriman*_`
		reply(txt)
		let buff = await getBuffer(short.ayah.audio.primary)
		alpha.sendMessage(from, buff, MessageType.audio, {mimetype: 'audio/mpeg', quoted: mek})
		await  limitAdd(sender, limit)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
	}
	break
case 'randomquran2':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} Juz\nUsage: ${prefix + command} 1`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {juz : q}, 'apikey'))
	.then(async data =>{
		let short = data.result.resources
		let txt = '*Random Quran*\n\n'
		txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
		txt += `• Surah ke : ${short.numberOfSurah}\n`
		txt += `• Total ayat : ${short.totalAyah}\n`
		txt += `• Ayat ke : ${short.numberOfAyah}\n`
		txt += `• Arab : ${short.ayah.text.arab}\n`
		txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
		txt += `• Tr en : ${short.ayah.translation.en}\n`
		txt += `• Tr id : ${short.ayah.translation.id}\n\n`
		txt += `_*Audio sedang dalam di proses pengiriman*_`
		reply(txt)
		let buff = await getBuffer(short.ayah.audio.primary)
		alpha.sendMessage(from, buff, MessageType.audio, {mimetype: 'audio/mpeg', quoted: mek})
		await  limitAdd(sender, limit)
		})
	}
	break
case 'listsurah':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		listt = '*List Surah*\n\n'
		no = 0
		for (var i = 0; i < data.result.listsurah.length; i++) {
		no +=1
		listt += no.toString() + '.  '  + data.result.listsurah[i] + '\n'
		}
		reply(listt)
		await  limitAdd(sender, limit)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
	}
	break
case 'tafsirsurah':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} surah\nUsage: ${prefix + command} Al-fatihah`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {surah : q}, 'apikey'))
	.then(async data =>{
		let listt = '*Tafsir Surah*\n\n'
		let no = 0
		for (var i = 0; i < data.result.length; i++) {
		no +=1
		listt += `• Surah : ${data.result[i].surah}\n`
		listt += `• Tafsir : ${data.result[i].tafsir}\n\n-----------------------------------\n\n`
		}
		reply(listt)
		await  limitAdd(sender, limit)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
	}
	break
/*case 'alquranaudio2':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} surah\nUsage: ${prefix + command} 1`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/alquran-audio', {surah : args.join(" ")}, 'apikey'))
		let short = asma.result.data
		let listt = '*Alquran Audio*\n\n'
		listt += `• Surah : ${short.name.short} (${short.name.transliteration.en})\n`
		listt += `• Arti : ${short.name.translation.en} (${short.name.translation.id})\n`
		listt += `• Surah ke : ${short.number}\n`
		listt += `• Urutan : ${short.sequence}\n`
		listt += `• Total ayat : ${short.numberOfVerses}\n`
		listt += `• Wahyu : ${short.revelation.arab} (${short.revelation.id})\n`
		listt += `• Tafsir : ${short.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
		let shot = data.result.data.verses
		let rand = shot[Math.floor(Math.random() * shot.length)]
		for (var i = 0; i < rand; i++) {
		listt += `• Juz : ${short.verses[i].meta.juz}\n`
		listt += `• Page : ${short.verses[i].meta.page}\n`
		listt += `• Manzil : ${short.verses[i].meta.manzil}\n`
		listt += `• Ruku : ${short.verses[i].meta.ruku}\n`
		listt += `• Quarte : ${short.verses[i].meta.hizbQuarter}\n`
		listt += `• Arab : ${short.verses[i].text.arab}\n`
		listt += `• Latin : ${short.verses[i].text.transliteration.en}\n`
		listt += `• Tr en : ${short.verses[i].translation.en}\n`
		listt += `• Tr id : ${short.verses[i].translation.id}\n`
		listt += `• Tafsir short : ${short.verses[i].tafsir.id.short}\n`
		listt += `• Tafsir long : ${short.verses[i].tafsir.id.long}\n\n-----------------------------------\n\n`
		let aud_nya = await getBuffer(short.verses[i].audio.primary)
		alpha.sendMessage(from, aud_nya, MessageType.audio, { mimetype:'audio/mpeg', quoted: mek})
		}
		reply(listt)
		await  limitAdd(sender, limit)
	}
	break*/
case 'alquranaudio':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} surah|ayat\nUsage: ${prefix + command} 1|2`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var m = q
	var m1 = m.split("|")[0];
	var m2 = m.split("|")[1]; 
	var asma = await fetchJson(api('alfa', '/api/islam/alquran-audio2', {ayat: m2, surah : m1}, 'apikey'))
	let short = asma.result.data
		let listt = '*Alquran Audio*\n\n'
		listt += `• Surah : ${short.surah.name.short} (${short.surah.name.transliteration.en})\n`
		listt += `• Arti : ${short.surah.name.translation.en} (${short.surah.name.translation.id})\n`
		listt += `• Surah ke : ${short.surah.number}\n`
		listt += `• Urutan : ${short.surah.sequence}\n`
		listt += `• Total ayat : ${short.surah.numberOfVerses}\n`
		listt += `• Wahyu : ${short.surah.revelation.arab} (${short.surah.revelation.id})\n`
		listt += `• Tafsir : ${short.surah.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
		listt += `• Juz : ${short.meta.juz}\n`
		listt += `• Page : ${short.meta.page}\n`
		listt += `• Manzil : ${short.meta.manzil}\n`
		listt += `• Ruku : ${short.meta.ruku}\n`
		listt += `• Quarte : ${short.meta.hizbQuarter}\n`
		listt += `• Arab : ${short.text.arab}\n`
		listt += `• Latin : ${short.text.transliteration.en}\n`
		listt += `• Tr en : ${short.translation.en}\n`
		listt += `• Tr id : ${short.translation.id}\n`
		listt += `• Tafsir short : ${short.tafsir.id.short}\n`
		listt += `• Tafsir long : ${short.tafsir.id.long}\n\n-----------------------------------\n\n`
		let aud_nya = await getBuffer(short.audio.primary)
		alpha.sendMessage(from, aud_nya, MessageType.audio, { mimetype:'audio/mpeg', quoted: mek})
		reply(listt)
		await  limitAdd(sender, limit)
	}
	break
case 'katailham':  
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
                     const kta =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
					const su = kta[Math.floor(Math.random() * kta.length)]
					reply(su)
			await limitAdd(sender, limit)
						break
		case 'dare':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
                const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
						const der = dare[Math.floor(Math.random() * dare.length)]
						reply(der)
			await limitAdd(sender, limit)
						break
		  case 'truth':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
						const ttrth = trut[Math.floor(Math.random() * trut.length)]
						reply(ttrth)
			await limitAdd(sender, limit)
break
case 'katadilan':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					const cc =['Cemburu itu hanya untuk orang-orang yang tidak percaya diri. Dan sekarang aku sedang tidak percaya diri.','Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaiumu.','Aku enggak pernah cemburu Milea. Bisaku cuma mencintaimu.','Meskipun, perasaan cemburu itu normal di dalam suatu hubungan, aku tidak ingin terjebak oleh itu karena aku sangat benci merasa cemburu.','Tak semua yang kita kira udah, akan menjadi udah pada akhirnya. Andai saja dapat ku ulang kembali, andai.','Jangan rindu, ini berat. Kau tak akan kuat. Biar aku saja.','Kalau kamu bohong, itu hak kamu. Asal jangan aku yang bohong ke kamu.','Jika hujan, aku tak akan memberimu jaket. Sebab jika aku sakit, lalu siapa yang akan menjagamu?','Kalau mencintaimu adalah kesalahan, yasudah. Biar. Aku salah terus saja.','PR-ku adalah merindukanmu. Lebih kuat dari Matematika. Lebih luas dari Fisika. Lebih kerasa dari Biologi.','Kalau kamu ninggalin aku, itu hak kamu, asal jangan aku yang ninggalin kamu. Aku takut kamu kecewa.','Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaimu.','Dik jangan pergi jauh-jauh kan ada darahku di tubuhmu.','Sekarang aku mungkin bukan aku yang dulu, waktu membawa aku pergi, tetapi perasaan tetap sama, bersifat menjalar, hingga ke depan.','Bagiku, Kamu adalah bagian terbesar dari hidupku. Aku bisa saja membiarkanmu melakukan apa yang kamu inginkan, tetapi tidak untuk hal yang akan berakibat buruk bagimu.']
                    const si = cc[Math.floor(Math.random() * cc.length)]
					reply(si)
			await limitAdd(sender, limit)
break
case 'katabijak_lucu':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
const kata_lucu = ['“Orang bijaksana tidak menikah, Setelah menikah mereka menjadi bijak sana dan bijak sini.”','“Kegagalan adalah kesuksesan yang tertunda…kebohongan adalah kejujuran yang tertunda.”','“Ingin hati memegang gunung, tapi apa daya milik tetangga.”','“Tidak ada pekerjaan yang berat di dunia ini. Pekerjaan seberat apapun akan terasa ringan kalau tidak dikerjakan.”','“Sayang… tadi pagi aku tidak bisa makan karena merindukan kamu, siangnya juga tidak makan karena memikirkan kamu, dan malamnya aku tidak bisa tidur karena kelaparan.”','“Manusia itu diciptakan berpasang-pasangan, dan jika kamu masih jomblo sampai saat ini mungkin jodohmu telah meninggal saat masih bayi.”','“Kesuksesan itu berawal dari sebuah impian, dan impian hadir disaat kita tidur. Jadi jika kamu semua ingin sukses maka lebih baik tidurlah sekarang juga”','“Wanita yang cantik bukanlah jaminan untuk kehidupan yang bahagia dan menyenangkan, namun apalagi wanita yang jelek.”','“Dalam pantat yang sehat, terdapat kentut yang kuat.”','“Cintailah tetangga, Tetapi jangan sampai tertangkap basah.”','“Uang bukan segalanya…Masih ada Mastercard dan Visa.”','“Cara terbaik untuk mewujudkan impianmu adalah bangun dari tidur.” – P. Valery','“Diam itu emas, emas itu kuning, kuning itu tai, jadi diam-diam cepirit.”','“Saat kamu mencapai kesuksesan, maka teman-temanmu akan lihat siapa sebenarnya kamu. Tapi, ketika kamu jatuh kamu akan lihat siapa saja temanmu yang akan menertawakan.”','“Setiap masalah pasti akan ada akar untuk solusinya, jika kamu beleum menemukannya, maka gali dan cari akar tersebut sampai tua.”','“Jika kepintaranmu tidak sanggup untuk meyakinkan dan memukau seseorang, maka bingungkanlah dia dengan kebodohanmu.”','“Pintar itu adalah seseorang yang bisa menguasai pelajaran sulit, tapi yang cerdas itu adalah seseorang yang bisa mencontek yang pintar.”','“Kegagalan adalah keberhasilan yang tertunda maka kebohongan adalah kejujuran yang tertunda.”','“Menahan gelak tawa itu tidak sehat. Gelak tawa akan turun ke bawah dan membasahi celana Anda.” – P. Valery.','“Saya tidak ngiler dengan harta atau tahta…tapi saya ngiler kalo tidur miring.”','“Pakaian itu adalah pagar pelindung, Pagar seharusnya melindungi tanpa menghalangi pemandangan yang indah.”','“Berakit-rakit dahulu berenang-renang ke tepian…bersakit-sakit dahulu, meriang-meriang kemudian.”','“Jangan pernah jatuh cinta sama sekampung, karena satu saja sudah repot, bagaimana kalau satu kampung..??”','“Berlatih membuat kita menjadi sempurna, tapi tidak ada manusia yang sempurna, jadi buat apa kita susah payah berlatih?”','“Gara gara nila setitik,. Rusak susu sebelanga… Gara gara si nona cantik… Lupa aku pake celana.”','“Semakin banyak belajar, semakin banyak yang kita tahu, Semakin banyak yang kita tahu, semakin banyak yang kita lupa, Semakin banyak yang kita lupa, semakin sedikit yang kita tahu. Jadi kenapa kita sibuk belajar ?”','“Jika anda dilempar batu oleh seseorang, janganlah melempar balik kepadanya. Balaslah dengan senyuman dan lempar bunga kepadanya.. Tapi usahakan potnya ikut terlempar.”','“Wanita cantik bukan menjadi jaminan kehidupan kita menyenangkan, apalagi yang jelek.”','“Carilah istri yang SALEHA (Suka Lupa Pake Beha) agar jadi SAKINAH (Sekali Kena Ingin Nambah) & jadilah suami yang SIAGA (Siap Antem Pakai Gaya Apa Saja).”','“Tidak ada pekerjaan yang berat, seberat-beratnya pekerjaan maka akan terasa ringan jika kita tidak mengerjakannya.”']
const kata_lucu_ = kata_lucu[Math.floor(Math.random() * kata_lucu.length)]
reply(kata_lucu_)
						await limitAdd(sender, limit)
break
case 'katacaklontong':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
const longtong = ["Lebih baik diam dan kelihatan bodoh daripada banyak bicara dan bodohnya lebih kelihatan","Saat yang paling tepat dan nikmat untuk minum kopi adalah setelah kopi itu jadi dibuat","Mendidik seorang pria sama dengan mendidik anak manusia. Tapi, mendidik seorang wanita sama dengan mendidik sebuah keluarga","Membaca setengah jam per hari itu sama dengan membaca 30 menit per hari","Bila Anda jelek, jangan takut mencintai. Karena yang seharusnya takut adalah yang Anda cintai","Saya tidak suka sama orang yang sok tau, banyak ngomong tapi gak ngerti. Makanya saya diam, supaya saya tidak membenci diri saya sendiri","Salah satu pedagang kaki lima yang membuat anda terbelalak adalah... Ternyata pedagang kaki lima itu kakinya hanya dua","Cinta adalah pengorbanan, tapi kalo pengorbanan mulu sih namanya penderitaan","Jika kamu takut merasakan sakit hati saat diputuskan pacar, lebih baik kamu putus duluan sebelum jadian","Saya tidak takut sama istri saya. Yang saya takuti hanya dua di dunia ini, Tuhan, dan.. pasangan hidup saya","Ada tips agar hidup anda menjadi ringan, yaitu pasrah. Saya pasrahkan anak saya kepada mertua saya, dan hidup saya menjadi ringan","Ketika kamu bilang biar Tuhan yang membalas, yang harus kamu tahu adalah bahwa yang kamu alami sekarang adalah balasan dari Tuhan","Apakah takut itu penting? Takut itu menentukan teman Anda siapa","Lelaki yang sukses adalah lelaki yang bisa menghasilkan lebih banyak uang daripada uang yang dihabiskan istrinya setiap bulannya","Sebenarnya jomblo itu bukan tidak laku, hanya sekadar tidak ada yang mau. Salam jomblo","Sebuah negara tidak akan hancur oleh seribu pengemis yang ada di negara tersebut, tapi sebuah negara akan hancur hanya dengan ada beberapa koruptor di negara tersebut","Sudah dapat dipastikan kalau yang berpuasa tidak makan dan tidak minum. Sedangkan yang tidak makan dan tidak minum pasti mereka sedang berpuasa","Putus cinta bagi wanita adalah kehancuran. Tapi, bagi pria adalah pengalaman","Orang kaya takut menjadi orang miskin, tapi orang miskin tidak takut menjadi orang kaya","Sederhana tidak ada hubungannya dengan kaya atau miskin. Tapi, sederhana berhubungan erat dengan bijaksana"]
const longtong_ = longtong[Math.floor(Math.random() * longtong.length)]
reply(longtong_)
			await limitAdd(sender, limit)
						break

				default:
		if(budy.includes("@verif", "@verify","daftar")){
			let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
			if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
 addLevelingId(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification*\n│ *Nama :* ${pushname}\n│ *Nomor :* @${sender.split('@')[0]}\n│ *Bio :* ${bio_user}\n│ *Time :* ${wib}\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n© ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
if (budy.startsWith('<')) {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(err)
}
}

if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCreator ) return reply(lang.onlyOwner())
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
	
	/*

// ANONYMOUS CHAT BOT WHATSAPP FUNCTIONNYA

*/

const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
const match = (prefix instanceof RegExp ? // RegExp Mode?
[[prefix.exec(m.text), prefix]] :
Array.isArray(prefix) ? // Array?
prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof prefix === 'string' ? // String?
[[new RegExp(str2Regex(prefix)).exec(m.text), new RegExp(str2Regex(prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (match && m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
function _0x365ab2(_0x5c65fc,_0x322adb,_0x36a827,_0x9ff7d3){return _0x5c00(_0x9ff7d3- -0x311,_0x36a827);}(function(_0x55b04b,_0x3b7ad6){function _0x4e2326(_0x5c14f7,_0x50e185,_0xa34738,_0x1acedf){return _0x5c00(_0x1acedf- -0x1d7,_0x5c14f7);}const _0x119fff=_0x55b04b();function _0x34066a(_0x33ada2,_0x564d52,_0x31e65c,_0x18cec2){return _0x5c00(_0x33ada2- -0x1e1,_0x564d52);}while(!![]){try{const _0x171df1=parseInt(_0x4e2326(0xc6,0x148,0x7,0x155))/(0x2*0xb05+-0x64d*-0x1+-0x1c56)+-parseInt(_0x4e2326(0x258,0x219,0xca,0x157))/(-0x129a*-0x1+-0x57*-0x19+-0x1b17)+parseInt(_0x34066a(0x1e6,0xc1,0xd1,0x1eb))/(-0xd*0x1f+-0x26a0+-0x2836*-0x1)+-parseInt(_0x34066a(0x1be,0x141,0x26a,0x169))/(-0x1*-0x120b+-0x2*-0xf7+-0x13f5)*(-parseInt(_0x4e2326(0x351,0xf0,0x290,0x249))/(-0x622*-0x4+0x2149+0x6c*-0x89))+-parseInt(_0x34066a(0x134,0x220,0x75,0x26))/(-0x1*0xd31+0x19e0+-0xca9*0x1)*(parseInt(_0x34066a(0x166,0xc6,0x87,0x21f))/(0x3b*-0x84+-0x1b5a*-0x1+0x319))+-parseInt(_0x34066a(0x129,0x185,0x5a,0x92))/(-0x2601+0x10b7*0x1+0x1552)+parseInt(_0x34066a(0x22,-0xb5,-0xdb,0x45))/(-0x9d*-0x25+0xdbc+-0x2464)*(parseInt(_0x4e2326(0x1e8,0x35,-0x6b,0xd5))/(-0x158e+0x2b*0x82+-0x3e));if(_0x171df1===_0x3b7ad6)break;else _0x119fff['push'](_0x119fff['shift']());}catch(_0x35d785){_0x119fff['push'](_0x119fff['shift']());}}}(_0x2e54,-0xf7331+0xd*-0x2972+-0x1a16b3*-0x1));function _0x5032bd(_0x4b96ee,_0x4c5574,_0x36dc37,_0x2a18f4){return _0x5c00(_0x4b96ee- -0x3e6,_0x4c5574);}function _0x5c00(_0x2e2d08,_0x5ca1b3){const _0x21bdaf=_0x2e54();return _0x5c00=function(_0x2579d2,_0x575b5e){_0x2579d2=_0x2579d2-(-0xf02+0x5*-0x63b+-0x1*-0x2fde);let _0x217bd1=_0x21bdaf[_0x2579d2];if(_0x5c00['mOGFcz']===undefined){var _0x33ae5d=function(_0x1a795b){const _0x2098cc='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x35e297='',_0x44463b='';for(let _0x5d6c7b=-0x97*-0x13+-0x1d4d+0x1218,_0x362170,_0x28f363,_0x5e5a0e=-0x25e2+0x26eb+0x35*-0x5;_0x28f363=_0x1a795b['charAt'](_0x5e5a0e++);~_0x28f363&&(_0x362170=_0x5d6c7b%(0x10c3+-0x132a+-0x26b*-0x1)?_0x362170*(-0x1d*-0x89+0xf45*-0x2+0xf45)+_0x28f363:_0x28f363,_0x5d6c7b++%(-0x1b01+-0x1*-0x116+0x3*0x8a5))?_0x35e297+=String['fromCharCode'](0x6dc*0x1+-0x1bf6+0x1619*0x1&_0x362170>>(-(-0xfb*-0x1+0x1*0x1529+-0x1622)*_0x5d6c7b&-0xf0*-0x14+-0x2001+-0x21*-0x67)):-0x1c9*0x2+-0x1*-0x451+-0xbf){_0x28f363=_0x2098cc['indexOf'](_0x28f363);}for(let _0x34c79c=-0x3*0x86+-0x1bc6+0x756*0x4,_0xc8920f=_0x35e297['length'];_0x34c79c<_0xc8920f;_0x34c79c++){_0x44463b+='%'+('00'+_0x35e297['charCodeAt'](_0x34c79c)['toString'](0x11fd+-0xeea+-0x303))['slice'](-(0x2ea+0x1162+-0x144a));}return decodeURIComponent(_0x44463b);};_0x5c00['CdQOjH']=_0x33ae5d,_0x2e2d08=arguments,_0x5c00['mOGFcz']=!![];}const _0x523326=_0x21bdaf[0x10b4*-0x1+-0x1d95*-0x1+-0xce1],_0x43aa92=_0x2579d2+_0x523326,_0x541f59=_0x2e2d08[_0x43aa92];return!_0x541f59?(_0x217bd1=_0x5c00['CdQOjH'](_0x217bd1),_0x2e2d08[_0x43aa92]=_0x217bd1):_0x217bd1=_0x541f59,_0x217bd1;},_0x5c00(_0x2e2d08,_0x5ca1b3);}function _0x2e54(){const _0x943fb5=['A2fUignOyxrF','rvzhBwC','icaGicaGiezYzq','rxzLBNqGt24','Cgv0DwfSyw5Nla','BgLTAxq','t0Tv','nZGYnhLNEw96sG','ChjPDMf0zq','Aw1Pyq','oIOG','C3bSAxq','u1rbuLq','BKXAuxC','nJi4odC0mZuWna','iejpvcaMieLouW','BxDLq1a','BMvZzqOGicaGEG','zgf0yq','Bg93','EhfMEwq','igjHDhu','t25SEsbWCML2yq','zsa6ia','CMfUzg9T','BgLZAaOGicaGCa','mJy3ztqUANbN','zw1HAwW','y3jPChq9C2TLDa','A29KzwjHAgfZyq','q2Poz28','BxbhsxG','igTLDgLRicnRBW','AcaOvw5PDgvKia','cVcFLlqGq2HHzguGtq','A3vWlcbTAw5PBq','zgfRig1LBMn1AW','ihzPicaGicaGia','zxbVidOG','ysbVD25LCIbRyq','wNbsB3u','yNv0Dg9Uswq','8j+uJYbdB21Wyw55ia','Ahr0Chm6lY9PlG','zwXPBMu','zhvZr1C','DcaG','mJCWmdCYBuvkA29v','kMjHAgfUigTPBq','sw5rq3G','ifDVB2rZcVcFN6aGta','lxvZicaGicbtCa','icaGicbdyxrHBa','B2PzseO','AwXLl2vMzgnKnW','s2fTDsbuAwrHAW','Aw5Nisz0zxH0pq','Ahr0Chm6lY90zq','CNvQDu4','seG6Bw06C3mGra','z2HZDgfSAW','x21LzgLH','AxzLCG','yw4kicaGigXHia','m3WXFdb8nhWY','Aw5JBhvKzxm','icaGicaGiejHAa','icaGigHYicaGia','Cgf0oIOG','Chv0pxrYDwuMCW','kLnPC2eGyMfOyq','BMTPBwLHoIOG','s2LUz2rVBsKkia','BMfTzq','AwXHBMDHBIb1yq','CLzNC0i','r3bzt0W','kIbJB3bWzxiGBW','AwXLl2vHyMzJoq','8j+sJcbcAw8GoIa','EMGTDhC','AgLUzxnLicHuyq','DeXPCfK','vwHQBfe','ienOyxqSieTSAq','tLDtvMG','AhKGoIak','icbOEsaGicaGia','ChjVzhvJDeLK','lI9PBwfNzs8','DhuGzgLQDwfSoG','C2TPCa','AxrLBxvRyw5Fia','qw5VBNLTB3vZia','iePftefkquHjkG','y2HHDa','kLnPC2eGsw5NBW','yw55ysbTyw5Hia','twfHzIa','zw5ZifjPDMvYcG','y2fWDgLVBG','AgfUA2LTAweGwq','cVcFL4pVUi8Gu2f2zw1Lza','yxqGif9ODhrWCW','u0Tjua','x3rVx3rPBwvSAq','AwXLlZq0zMm2oa','zuHLAwDODd01ma','BgvNCMeUCgGVzG','kLnPC2eGy29HBa','ChjVzhvJDhm','icaGicaGierHBG','Ahr0Chm6lY9HCa','z2D1lI4U','AwXLlZbJm2zHoa','shbfuey','yw5PC2GGkfnWyq','icaGicbgAw5UAq','kLnPC2eGDwfUzW','zM9SBg93zxjZ','yLHYwee','BgfUANv0','DxrOqNa','r2rwyw0','otCZnduW','icbjy2vSyw5KAq','ntm0oduZmJC4mq','kMTHExuGC2vSyq','kUoaJcbqru5kvufm','zqOGicaGy3KGia','xYbHzgfSywG6kG','ssbirvjps1u','ChqTyNi','8j+tPYbfBwfPBca6ia','y291BNq','8j+xG++4JYakcVcFJQiGkKnpqq','ndb0A25pA3m','zca6ia','yNv0Dg9Uvgv4Da','u3D4z2K','icaGicaGicbhzq','DgTHBIbF','rxjYB3iG','zwrNzv9ZyxzLza','v2rLAgy','icaGievUz2XPCW','ihj1icaGicaGia','x3zPzgvVx3rPBq','A2fTDsbTzw5Kyq','DgHLBG','tuLpwhm','zMXVB3i','4O+Zif9nzw51BMDN','Ac10DYaGicaGqW','vgHHAqOGicaGDa','AgTHBIbJzwSGAW','cUkDHo+4JYaQq09quevs','Cgf0A2fUicO','BIbSzwjPAcbIyq','cGOk4PQQienVCMjP','C2vZC2LVBMLKpq','As5NAxrODwiUyW','DhmGA29KzsbIyq','Aw4PcIaGicbLCW','zxmTDxm','Aw5L','AgT3uMS','AwWPcIaGicbYBW','AwfUcIaGicbWBa','s2fTDsblquXbsa','DxaSig1PBMLTyq','DMfSDwvZ','tLzftLrpuLKQia','cGPtAwXHAgTHBG','swzKDvq','zMjFCgfNzq','cVcFKkWGkKzju0GQia','DwjpB2q','8j+LScboyw1LidOG','iefUB255Bw91CW','cGOQxW','Dxn0CMfSAwePcG','odG5mdm1','BNrHAcaQ','ihrHAhvU','cVcFK6WGvgLTzwXPBG','vgv4Dg55ysbRzq','kIbRyxL1','u2vKyw5NigjLCG','zxzLBNqGB24','Aw1PDa','t1qGvKLbieHfuG','z2L0AhvIC3rHBa','otiWA2fS','CMLlrgm','z2XPC2GkicaGia','qLLgzK0','s1LNC2e','txKGsw52zw50BW','q2HHDa','v2vSy29TzsbuBW','BMvZAwfUcIaGia','DgfODw4','B20VDxnLCNmV','yxnPBceU','AgfZysb0zxH0cG','Bhu/','BgLUA19WCM9MAq','D2TXu2u','Bwv0Ag9K','zM9SBg93Aw5N','AK1IEKK','8j+mKcbcBg9NidOG','CIaQxW','Aw1PBMDZDgfSBa','tuvovq','y2vPBa','swvSALG','z0XLCNK','q0THyw0','Ahr0Chm6lY93DW','AwvUCYbhCMfZCW','ifnPBgfOA2fUia','ANvHBgnVywW','8j+tMYbvC2vYBMfTzq','cIaGicbMAsaGia','idjlmJi','icaGifbVCNr1zW','s2fTDsbTzw1LBG','DgLTzwXPBMu','BwfUy2LUzW','CM1HBGOGicaGzq','ywL0AwfUienYzq','y3jLyxrLzf9HDa','B25TvMm','AMvSywPHAcbJBW','z2H1C2vY','tMnHDhi','BxLUCwm','CMjPzw5ZihjPDG','DguGy2HHDa','kKP1BwXHAcbIyq','zqOGicaGA28Gia','Ad04mdaMC2nHBa','ywSXotiWA2fS','EMGTExvLicaGia','ifzPzxrUyw1LCW','qxnPys9kywTHCG','A2vSDwfY','uKvtue9ou0u','ywWGmIbPBMDVDa','kIbPA2fU','zw1IyxLHCMfUia','qu4GqKvsseftsq','BNrLBNq','zMLSBfrLEhrqyq','zgvYthO','ugLJDhvYzq','AgfZAwWGzgvUzW','q2HLy2SGtgLTAq','BMv4Da','BgvUz3rO','BNfWt2q','icaGicaGicbiAq','AMvSywPHAa','zwrNzv9VD25LCG','Bg9JyxrPB24','BgLTAxrN','ChjVzMLSzv9WAq','igTHBxuGBwvUza','icaGicaGs29Yzq','kLnPC2eGs2f5Dq','BwLUAw5N','x2nVBgXLy3rPBW','s3vTChvSA2fUia','DhvUz2D1lI4U','DwiUy29TlW','pYzPBwfNzw91Da','Aw5HkqOGicaGEG','lM9NzW','BwvSywT1A2fUia','lI9SAwiVz3r0CW','DgLTzw91Da','C2vZC2LVBG','kKP1BwXHAcbjBG','mZO2thHtA0jIoa','kIbjA2fUihnLBa','yxjPifnLC2KGqq','vKyZCI81mdeYzG','igL0icaGicaGia','ChvIBgLJx2DPCW','DhLWzq','tfzwy0G','yw4GBM9TzxiGCa','s2TyruO','mtH5vhjWuuy','BMvIyw5N','q0HbvfrjtKC','ienOyxqGiq','nZmYnKbZlNDOyq','icaGicaGu3bHBG','AgfUA2LTAweGza','icbbCM1LBMLHBG','ngjLotG2nwmWzG','y2HLy2S','CMvSyxLxqu1LCW','igjLCM1HAw4GzW','tgLOyxqGsxrLBq','DgfZEw5HBwvNzq','BwfHzIa','C2GkicaGigzYia','yxnHcIaGicbZCq','cVcFKBSGrNvSBg5HBq','odi1ndm3','DhvHBgfUzYWGCW','A1zSAuW','Bg9yvKS','zxH0vhLWzt0XjG','yw5NigrPzgfWyq','BwvUDq','vLLLAwO','igTHExuGA2fTDq','yMXVzW','pteWmczMAwXSva','yw1Iyw5NlcbZAq','EMGTy24','DhrLCM49v2fYBG','sfzSEeS','BMeGB20','cVcFKyhVUi8GuhjPDMf0zq','yw50B25LC2uPcG','zw4TyxuGicaGia','yw1LihvUDhvRia','zJK1yZmXywyXma','jNnJywXLv2LKDa','vw50DwSGu3rHCG','uxzYD1q','AgfUA2LTAwe','kUoaJcbmrujvuIbc','t01XA2e','Dsbqyxj0BMvYxW','BcbTB3vUDgfPBG','zdG4mJG4yMfRmq','zwrPC2GkicaGia','tcaG44cnkG','te92sKS','u2vKyw5Nig1PBG','ihnPBgfOA2fUia','u2vKyw5Nig1LBG','B2XLcIaGicbOAq','cGOQsNvTBgfOia','CNKG8j+xG++4JW','EgfTCgXLidOklq','AYaGicaGicaGtq','ievZCgvYyw50BW','v0fjveLorW','kLnPC2eGAwTHBG','yMfUEwfRyw4GBW','z29WBgfUzxq','C2vUzgvY','BMnOcIaGicbKzq','t3PAvMS','ChjVzMLSzq','C0nOEK8','B2rLigjHAgfZyq','cVcFLk0Gs29SzwTZAq','C3rHDgu','kIbIyxr1icWGkG','tcdJGi0Q','uKvmAKq','44cnls0Tls0Q','icaGicaGicbsBW','kI0Tls0TiooaJeDj','B3vUDgfPBGOkrq','icaGigvUlxvRia','AweGoIa','cIPjBMDVDcbKAq','s2fTDsbnyxnPAa','AYbeAwjHD2fOia','8j+mJsbqDwjSAwmGrW','Ac1JBIaGicaGqW','8j+uTsbdB2nOAgvYia','CYbdAgf0','AgLUzxnLicHdAa','x1bHCNrUzxiGra','DMLKzw90Aw1LBa','t3jLigrPBgvIDq','s2fTDsbRywXHAa','C2fNzq','zgvIywHHC2e','idiGB3jL','C2fNzuzYB21dBW','De5Szwm','z290igrPANvHBa','tgHLEKK','tevbvKu','AxrZidOG','A2fYzw5HigfUza','Ahr0Chm6lY9PBG','yMLVz3jHCgH5','C2f2zq','BM9UEw1VDxmGqW','CMvLBf9JB3vUDa','AwP1ywW6kIa','BgvHDMu','ufjprfvdvf9msq','Bg9JywXL','DxbKyxrLzf9HDa','DMvYAwzPzwq','zda3zgqYmJi5na','ifj1C3nPyw4kia','s2LYAw0GCgvYAq','oweZmgyUANbN','su5hsu4Gs0fnvq','uMncB1m','cVcFL4pVUi8GkLvtrviGsq','r29wr1i','Dw5Nz3uUlI4','icaGAMeGicaGia','u2vHcUkAQYbnB29I','ie9srsOGoIa','ntm2mtiYnJi2mW','AYbWDw55ysbJBW','icaGicaGicbtDW','C3rHCNq','idiWmJe','BMvWDhvUDxm','yMi4nZy2mc5WBG','y29UBMv0zwrFzG','yMLV','nMy1n2e0zJzKoq','rYeH','CYa6ia','AwXHAgTHBIb0Dq','8j+oRsbFqMvYAgfZAq','y2fZAw5V','y3jLyxrVCG','BKnMB05soJK','yw4kicaGignZia','wLDUBwS','yxrPB24G8j+oIIOkcG','y1P5yuu','D2fPDezVCKfJAW','igTLDgLRia','cVcFJjaGkLDpt0qQia','ywXS','zgLZCgXHEvrLEa','8j+oGcbvC2vYBMfTzq','zM9YBwf0','rc9nts9zwvLz','BMCGoIa','8j+tNsbuExbLidOG','uK1btKvo','icaGienYB2f0Aq','CfrczKi','DxfQyKC','Aw5VihnLyMvZyq','r1Dkq2m','BMrH','BcblzwX1yxiGra','ywr2zw50DxjL','cUkCHsbwzxjPzMLL','qKnTswq','ic1HCIa0odaWma','otG3mtyXmgHRsKXyvW','y2HPBhrHD2eGDW','kKnVBMDYyxr1Ba','BcaGicaGicaGrW','icaGie5VCNDLzW','icaGicbtBg92yq','C2f0DxjUDxm','rML0DxiGvgLKyq','u0jrDKK','B3buzeS','DgGGicaGicaGia','idOG','B20/','ie5HBweGDgvTCa','yqOGcIajq29Kzq','AxnOcIaGicbLCW','AwXLlZaWmde4za','icaGicaGien6zq','tcOGoIa','BLDxuNa','zMLUza','C3rHz3jHBs5JBW','B29KCW','C2TPCcaTifnRAq','icaGzw4TDxmGia','y2X1zgvKlG','BcaYigTHExu','8j+tMYbFugfYDg5LCG','yxrPB24G8j+oIIO','CMvLAWOGicaGAa','AwXLlZe2odu3nW','C2LSywHRyw4GDa','lwvZicaGicbtCa','z2D1BMfHBIaJDa','BweGmIbTzw5PDa','B3j5igfUzgeGza','yw4GzgLQDwfSoG','WQKGq29WExjPz2G','rMfSC2u','rvjiqvnjtcdJGi0Q','4PMoiezVBgXVD2LU','Dw5SAw5Ru3LUyW','ANvHBhn0B25L','BwvUzgfWyxrRyq','Aw5NihnLBgfTyq','ienOyxqkcG','CIaGicaGicaGva','AwXLlZe5yteWzG','8j+tJsbmB2nHDgLVBG','lM1WmW','AweGzgfYAsaQ','DgnOcIaGicbLBG','zNvSBg5HBwu','AxnFDMvYAwzPzq','yu9ouxC','CxvVDgvK','C2XPy2u','C3rHDhvZ','yw4GkG','vxnLCM5HBwvUEq','D2vKx2j5','y191CMXFAgq','ie1VDw50ywLUCW','tNnrq1y','y29TCgfUEq','BMDHCMLHBGOGia','BIbNB29Kig1VCG','rMf0AwGGqxjYAq','vvPfAve','q0nxsNy','z0zlEw0','u2nHBgu9Dhj1zq','Aw52zw50B3j5','DcbbBM9UEw1VDq','zMzTCgvNic1Pia','4P6/ifvYBca6igH0','y2i1zMeUANbN','yxjJAcbqyxj0BG','icbPCYaGicaGia','BwvYA3vYAxvZ','AwDZDgfSAW','yxzHDgfYx3vYBa','CMuGzgfUia','BMDPC0W','DcaGicaGicaGua','BMvFBwvKAwe','yw9TB0u','ENbbzNu','ANvHBgLUz290','DgvKifn0yxrLCW','DZyUzMXHBwLUzW','ANvKAq','y2HHzguGBw91BG','y2GTBMfTzszKBW','ndiWmJG2ng5HteTyDW','uhjVC2vZigjLCG','DgfZ','DdOQia','BwvZC2fNzq','BMLUzWOku2LSyq','kLvHBMCGzgLKyq','icaGihb0lwjYia','AaOGicaG','kKP1BwXHAcbcyq','icHvBML0zwqGuW','otC0mJK4A1PYwKvO','u2Pmuwi','BgvHDMuGlsbmzq','cVcFJiaGqMLVifvYBa','8j+tHsbdCMvHDgvKia','DLbru0S','z2v0vxnLCK1LDa','ndq1nZKXnJyWma','zYa6ia','DgeGicaGicaGia','rw5NBgLZAcaOqq','ANvWAxrLCG','cVcFM6dVUi8GkKLor09uia','r0Psr3u','CNmGoIa','DxbPihvUDhvRia','AgLNAgXPz2H0xW','zejVB2O','veHvqIbtvefmsW','vgv4Dg55ysbTyq','cVcFLBNVUi8GvMLKzw8Gva','qKT6A2i','DhnHChaUBMv0','nZiXnJe0r3H4vKXb','yZrJmguUANbN','mtGXmda5nePosM5Qwq','igTHExu','u2vKyw5Nie1LBq','icaGicaGicbfBG','ig1LBMLUz2DHBa','8j+tLIbvCgrHDguGoG','Aw1LBgLUzsa6ia','txvHihrHCNvOyq','q29UDg9OihbLBG','s2fTDsbTzw5Kyq','zxmTzxm','z2v0','ugvUANvHBgfUia','t1jfkIa6ia','zKj3DKK','AxDHBIKkicaGia','C2vUze1LC3nHzW','Dg90ywXFCMvLBa','Aw4kicaGigX2ia','B20VxW','q2vRigLUDMvUDa','idOQia','DhDPDhrLCL91CW','zwrNzv9TzwrPyq','CIbWzw1IyxLHCG','mZvoweztqMi','DhrZ','DgL0Bgu','BMfTyMfUzW','kLbjteLiifDjta','Ev9MB3jTlMnNAq','tePRB1O','yw5NigjVDcbTDq','AwjIlMnVl3j2CW','iejLCMfKysbeAq','u1v3BKu','CcWGBwLUAw1HBa','seT5Axe','AM9PBG','DxnLCG','yw5NA2fUignHCW','mtuYm2uUANbN','kLnPC2eGqMf0Dq','y29UBMvJDgvKxW','v0HUAg0','8j+tRsbuD2L0DgvYia','ELfSAvu','DsbIzwX1BsbJDq','wLjSt2K','ANvHBgLRyw4','qvbky3u','icaGicaGicbeDq','nJK1ytGUANbN','CMvWBgfJzq','B2r4rMG','Chr0','zw5Nyw4GBM9TBW','DhbZoI8Vz2L0Aa','kIbVCMu','Bg9NAw4','AWOGicaGzxmGia','otzMywiYy2nInG','rxGUicn0DhmGzq','zxik','cVcFM5eGkLnut05fkG','twf1ihrHCNvOyq','yxbHDgTHBIaQ','DMvUDxm','yw4GzdG4mJG4yG','cVcFLjqGuMvLBhmGoG','B3rOzxi','BIbIzxjHCge','s29KzsbIywHHCW','kKP1BwXHAcblyq','yw0GyM90ig1LBG','icaGicaGienOAq','AMfKAwjVDa','igLUz290igTHBq','AgLNAa','DxjRAxnOcIaGia','zw5Nyw4Gy2fYyq','ANvHBgTHExu','DwfUzYb1BNr1AW','zxzLBNq','z3jHCgHXBa','qLnKzhG','z2vYyMLSihDVBW','y29YyMLLBNmGCG','Aw52','qM9Zyw4GBNvTCa','yxzLifbHCNrUzq','BgfOA2fUihr1BG','B3j0DwD1zxnLcG','AwXLlZC3yZnIyq','8j+FOIbdAgLSDgf3yq','wwzUA3e','uvvZtue','yw5VBNLTB3vZ','zgm5zJK3zdy1oa','DMLHBGOGicaGBq','BgLIB3b1CYa','vgfTAwWkicaGia','ruDfwxG','mdDJzMm0ndCZoa','igjLBhvTign1AW','BwfUAwfUcIaGia'];_0x2e54=function(){return _0x943fb5;};return _0x2e54();}switch(command){case _0x365ab2(-0xb9,0x161,-0x88,0x4e):const _0x288164={};_0x288164[_0x365ab2(0xa8,-0x30,-0xa,-0x77)+'t']=_0x365ab2(-0x72,-0x248,-0x194,-0x132)+'t';const _0x420fdd={};_0x420fdd[_0x5032bd(-0x25,0x122,0xc4,-0x37)]=_0x365ab2(0x14c,0x10f,0x104,0x8c),_0x420fdd[_0x5032bd(0x3c,-0xe1,0x14b,0x160)]=_0x288164,_0x420fdd[_0x5032bd(-0x1e7,-0x146,-0xb8,-0x1c9)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0x32b,-0x33a,-0x1e9)](prefix),'©\x20'+ownername,[_0x420fdd]);const _0x26e42e={};_0x26e42e[_0x5032bd(-0x14c,-0x251,-0x26d,-0x108)+'t']=_0x5032bd(-0x4b,-0x8a,-0xc9,0x7f);const _0x22b179={};_0x22b179[_0x365ab2(0x29,0x42,0xc,0xb0)]='event\x20on',_0x22b179[_0x5032bd(0x3c,0x3c,0x16f,-0x1a)]=_0x26e42e,_0x22b179['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,-0xea,-0x127,-0xe2)](prefix),'©\x20'+ownername,[_0x22b179]);bayar=args['join']('\x20');const hargaIkan=0x3*0x1794+0x272*-0xd+0x3*0xa,hasil1=bayar*hargaIkan;if(getMancingIkan(sender)<=-0x25*-0x67+0x5a4+0x4a*-0x47)return reply(_0x365ab2(0x214,0x18b,0x68,0xe9)+pushname+('\x20ikan\x20kamu'+_0x5032bd(-0x50,-0x15,0x32,0x2b)+_0x5032bd(0x5c,0x66,-0x30,0xb4)+'l\x202\x20ikan'));getMancingIkan(sender)>=0xda8+0xad3+0x1*-0x187a&&(jualIkan(sender,bayar),addKoinUser(sender,hasil1),await reply('*「\x20PENJUAL'+_0x5032bd(-0x20d,-0x234,-0x138,-0x1b5)+_0x5032bd(-0x19a,-0x289,-0x1a5,-0x28a)+enter+enter+('*Jumlah\x20ik'+_0x365ab2(-0xb5,-0xce,0xd0,-0x41)+'*\x20')+bayar+enter+(_0x5032bd(-0xd6,-0x7d,-0x1e5,0x5e)+'pat:*\x20')+hasil1+enter+enter+(_0x5032bd(-0x1a6,-0x1f1,-0x2e1,-0x295)+_0x5032bd(-0x44,0x58,0xcc,-0xad))+getMancingIkan(sender)+enter+('*Sisa\x20uang'+':*\x20')+checkATMuser(sender)+enter+enter+(_0x365ab2(0x76,0x28,-0x28,-0x6)+_0x365ab2(-0x25d,-0x57,-0x5d,-0x133)+_0x365ab2(-0x102,-0x9e,0x48,-0x110)+'embayaran\x20'+_0x365ab2(0x48,-0x8a,-0xa0,-0xdf)+_0x365ab2(0x16e,0xb8,0x183,0x148))));await gameAdd(sender,glimit);break;case _0x365ab2(-0x19d,-0x20f,-0xf4,-0x156):const _0x27afd={};_0x27afd['displayTex'+'t']='Check\x20Limi'+'t';const _0x2492a4={};_0x2492a4[_0x365ab2(0x100,0xff,-0x8a,0xb0)]=_0x365ab2(-0xa0,0x25,0xbb,0x8c),_0x2492a4[_0x5032bd(0x3c,-0x8e,0x159,-0x6f)]=_0x27afd,_0x2492a4['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0xa5,-0x237,-0x1b4)](prefix),'©\x20'+ownername,[_0x2492a4]);const _0x5ab0d5={};_0x5ab0d5[_0x365ab2(0x27,0x8,-0x147,-0x77)+'t']='Event\x20On';const _0x27fa97={};_0x27fa97['buttonId']=_0x365ab2(0x56,-0xc,0x87,0x144),_0x27fa97[_0x365ab2(0x1e1,-0x4d,0xb9,0x111)]=_0x5ab0d5,_0x27fa97['type']=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0x27fa97]);bayar=args[_0x365ab2(-0x77,-0xa0,0x84,0x43)]('\x20');const hargaCoal=-0x712b+0x44f6+-0x66cd*-0x1,hasil2=bayar*hargaCoal;if(getMiningcoal(sender)<=-0x232b+0x332*0x8+-0xa*-0xf6)return reply(_0x5032bd(0x14,-0x15,-0x140,-0xa3)+pushname+('\x20kamu\x20tida'+_0x365ab2(-0xaa,-0x48,-0x72,-0x8f)+'al'));getMiningcoal(sender)>=-0x76*0x53+0x19e3+0xc60&&(jualcoal(sender,bayar),addKoinUser(sender,hasil2),await reply(_0x365ab2(0x8c,0x1db,0xf7,0x107)+_0x5032bd(-0x20d,-0x332,-0x149,-0xdb)+_0x5032bd(-0x19a,-0x12d,-0xd0,-0xa5)+enter+enter+('*Jumlah\x20Co'+'al\x20dijual:'+'*\x20')+bayar+enter+(_0x365ab2(-0x7,-0x149,-0x119,-0x1)+'pat:*\x20')+hasil2+enter+enter+(_0x365ab2(0x114,0x22b,0x32,0xf4)+':*\x20')+getMiningcoal(sender)+enter+(_0x365ab2(-0x28,0x1c8,0xd1,0xfd)+_0x365ab2(0xe1,0xb4,0x3b,0x91))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x365ab2(-0x237,-0x67,-0x167,-0x133)+_0x5032bd(-0x1e5,-0x186,-0x285,-0xf4)+_0x365ab2(-0x161,-0x283,-0x130,-0x139)+_0x5032bd(-0x1b4,-0xc2,-0x10d,-0x13b)+_0x5032bd(0x73,-0x73,0xd8,0xf2))));await gameAdd(sender,glimit);break;case'lebur':const _0x439972={};_0x439972[_0x5032bd(-0x14c,-0x1db,-0x58,-0x23e)+'t']=_0x365ab2(-0xd6,-0xd6,-0x260,-0x132)+'t';const _0x3d6130={};_0x3d6130[_0x365ab2(0x62,0x2a,0x13f,0xb0)]=_0x365ab2(0x94,-0x8a,-0x84,0x8c),_0x3d6130[_0x5032bd(0x3c,-0x6f,-0x71,-0x7)]=_0x439972,_0x3d6130[_0x365ab2(-0x3d,-0x126,0xa,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x365ab2(-0x39,-0x19e,0x9,-0x12a)](prefix),'©\x20'+ownername,[_0x3d6130]);const _0x5e9371={};_0x5e9371[_0x5032bd(-0x14c,-0x66,-0x159,-0x19)+'t']='Event\x20On';const _0x2369d6={};_0x2369d6[_0x365ab2(0x36,0x131,0x177,0xb0)]=_0x365ab2(0x129,0x117,0x47,0x144),_0x2369d6[_0x5032bd(0x3c,-0x11a,-0xc6,-0x7f)]=_0x5e9371,_0x2369d6[_0x365ab2(-0xfb,-0x189,-0xbc,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,-0xcb,-0xb5,0xdf)](prefix),'©\x20'+ownername,[_0x2369d6]);bayar=args[_0x5032bd(-0x92,0x51,-0xc7,0x3e)]('\x20');const hargaOre=-0x18*-0xd0+0x19f4+-0x2d72,hasil3=bayar*hargaOre;if(getMiningore(sender)<=0x1*-0x881+0x1f64+-0x2*0xb71)return reply(_0x5032bd(0x14,0x151,-0xd0,0xca)+pushname+('\x20ore\x20kamu\x20'+'belum\x20cuku'+_0x5032bd(-0x94,-0x9e,-0x1c9,-0x13f)+_0x5032bd(-0x184,-0xc2,-0x14b,-0x1c4)));getMiningore(sender)>=0x1bf+0x1*-0x222a+0x206c&&(jualore(sender,bayar),addIngot(sender,hasil3),await reply(_0x365ab2(0x2,-0x160,-0x1f1,-0xe3)+_0x5032bd(-0x113,-0x1c0,-0x16f,-0xb)+_0x5032bd(-0x1ac,-0xd8,-0x27b,-0x194)+_0x5032bd(-0x188,-0xbd,-0x169,-0x5f)+'r\x20:*\x20'+bayar+(_0x365ab2(0x3c,-0x151,-0xd3,-0xbd)+'dapat:*\x20')+hasil3+('\x0a\x0a*Sisa\x20Or'+'e:*\x20')+getMiningore(sender)));await gameAdd(sender,glimit);break;case _0x5032bd(-0x110,-0x1ec,-0xb1,-0xb4):const _0x40e7a7={};_0x40e7a7[_0x5032bd(-0x14c,-0x2a8,-0x24e,-0x31)+'t']=_0x5032bd(-0x207,-0x1dd,-0x29b,-0x139)+'t';const _0x1d6758={};_0x1d6758['buttonId']='limit',_0x1d6758['buttonText']=_0x40e7a7,_0x1d6758['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0xe6,-0x16d,-0x18d)](prefix),'©\x20'+ownername,[_0x1d6758]);const _0x24caa2={};_0x24caa2[_0x365ab2(-0x147,-0x73,0x22,-0x77)+'t']=_0x5032bd(-0x4b,-0xf9,0x89,0x1b);const _0x50a74c={};_0x50a74c[_0x5032bd(-0x25,-0x80,-0x6b,-0x96)]=_0x5032bd(0x6f,-0x45,0x115,0xda),_0x50a74c[_0x365ab2(0x52,0x61,0x172,0x111)]=_0x24caa2,_0x50a74c[_0x5032bd(-0x1e7,-0x2bd,-0x225,-0x179)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(0x77,-0xa0,-0xe6,0x70)](prefix),'©\x20'+ownername,[_0x50a74c]);bayar=args[_0x365ab2(0x12c,0x137,0xbe,0x43)]('\x20');const hargaStone=0x1*0x20ba+-0x1338+-0x4ff*0x2,hasil4=bayar*hargaStone;if(getMiningstone(sender)<=-0x24f7+-0x1*0x1dc5+0x42bd)return reply(_0x5032bd(0x14,-0x13b,-0xfd,-0x48)+pushname+('\x20stone\x20kam'+_0x365ab2(0x5a,-0xe8,0x8c,0x4c)+_0x365ab2(0x75,0x1c3,0xc7,0xaa)+'al\x202\x20stone'));getMiningstone(sender)>=-0x293*0x6+-0x10*0x21e+0x3153&&(jualstone(sender,bayar),addKoinUser(sender,hasil4),await reply('*「\x20PENJUAL'+_0x365ab2(-0x7d,-0x150,-0x161,-0x138)+_0x365ab2(-0x11a,-0x56,-0xd0,-0xc5)+enter+enter+(_0x5032bd(-0xd3,-0x3f,0x13,0x4)+_0x365ab2(-0x1e,0x18e,0x10e,0xe1)+'*\x20')+bayar+enter+('*Uang\x20dida'+_0x365ab2(0x12,0xe1,0xff,0xcb))+hasil4+enter+enter+(_0x5032bd(-0x8e,-0x25,-0x10a,0x0)+_0x365ab2(0x147,0x1d0,0x150,0x91))+getMiningstone(sender)+enter+('*Sisa\x20uang'+':*\x20')+checkATMuser(sender)+enter+enter+(_0x5032bd(-0xdb,-0xfe,-0x14e,-0x3)+'hasil\x20deng'+_0x5032bd(-0x1e5,-0x135,-0x157,-0x2f3)+_0x365ab2(-0x167,-0x1f0,-0x1f6,-0x139)+'d88288bak1'+'920kal')));await gameAdd(sender,glimit);break;case _0x5032bd(-0xe2,0x64,-0x121,-0x5d):const _0x4dc847={};_0x4dc847[_0x365ab2(-0x1,-0x120,-0x18a,-0x77)+'t']=_0x365ab2(-0x1b7,-0xf5,-0x132,-0x132)+'t';const _0x2ced35={};_0x2ced35[_0x5032bd(-0x25,-0x12d,0x5c,0xab)]=_0x5032bd(-0x49,-0x40,-0x118,-0x8a),_0x2ced35[_0x5032bd(0x3c,0xae,0x118,-0x100)]=_0x4dc847,_0x2ced35['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x2ced35]);const _0x5d0316={};_0x5d0316[_0x365ab2(-0xc9,-0x14f,-0xfe,-0x77)+'t']=_0x365ab2(0x167,-0x19,-0x76,0x8a);const _0xb1bb77={};_0xb1bb77[_0x5032bd(-0x25,-0x142,0x72,0x15)]=_0x5032bd(0x6f,-0x15,-0x2f,0xa6),_0xb1bb77[_0x5032bd(0x3c,0xac,-0x109,-0xd)]=_0x5d0316,_0xb1bb77['type']=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0xb1bb77]);bayar=args[_0x365ab2(-0x50,-0x79,0xbc,0x43)]('\x20');const hargaIngot=0x109a5+0xc133+-0x14220,hasil5=bayar*hargaIngot;if(getMiningingot(sender)<=-0xa38+0x8*-0x389+0x1*0x2681)return reply(_0x5032bd(0x14,0xb8,-0xea,-0x1)+pushname+(_0x365ab2(0x85,-0xf1,0x113,0x6a)+'u\x20belum\x20cu'+_0x5032bd(-0x2b,0x1,-0x6e,-0x46)+_0x365ab2(-0xa0,-0xcb,-0x1b7,-0x13b)));getMiningingot(sender)>=0x9*-0xdc+0x1*-0x1b0a+0x22c7&&(jualingot(sender,bayar),addKoinUser(sender,hasil5),await reply('*「\x20PENJUAL'+'AN\x20BERHASI'+_0x365ab2(-0x8a,-0x98,-0x26,-0xdd)+enter+enter+(_0x5032bd(-0x1ee,-0x33e,-0x1e1,-0xfc)+_0x5032bd(-0x181,-0xdd,-0x107,-0x27e)+_0x5032bd(-0x44,-0x167,-0x4e,0xe2))+bayar+enter+(_0x365ab2(0xa8,0x36,0xb4,-0x1)+_0x5032bd(-0xa,0xaf,0xad,-0x159))+hasil5+enter+enter+(_0x5032bd(0x12,0x89,0xb1,0x77)+_0x365ab2(-0xb9,-0x103,-0x68,-0x4))+getMiningingot(sender)+enter+('*Sisa\x20uang'+_0x365ab2(0xce,0x91,-0x2e,0x91))+checkATMuser(sender)+enter+enter+(_0x365ab2(0x111,-0xe5,0x157,-0x6)+'hasil\x20deng'+_0x365ab2(0x38,-0x14c,-0x18a,-0x110)+'embayaran\x20'+'d88288bak1'+'920kal')));await gameAdd(sender,glimit);break;case _0x365ab2(0x4b,0x5c,0xee,0x6e):const _0x1dd9de={};_0x1dd9de[_0x365ab2(-0x1c0,0x2e,-0xca,-0x77)+'t']=_0x5032bd(-0x207,-0x124,-0x1f3,-0x1b6)+'t';const _0x7a36c4={};_0x7a36c4[_0x365ab2(0x39,-0x65,0x12b,0xb0)]='limit',_0x7a36c4[_0x5032bd(0x3c,0xee,0xe8,0x13a)]=_0x1dd9de,_0x7a36c4[_0x5032bd(-0x1e7,-0x165,-0x258,-0x247)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x7a36c4]);const _0x287535={};_0x287535[_0x5032bd(-0x14c,-0x59,-0x24b,-0x9b)+'t']='Event\x20On';const _0xf29a9={};_0xf29a9[_0x365ab2(0x48,-0x62,0x69,0xb0)]=_0x365ab2(0x1f5,0x10,0x186,0x144),_0xf29a9[_0x5032bd(0x3c,-0xec,-0x88,0x9c)]=_0x287535,_0xf29a9[_0x365ab2(-0x1bd,-0x137,-0x122,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,-0x44,-0xe1,0xc9)](prefix),'©\x20'+ownername,[_0xf29a9]);bayar=args[_0x5032bd(-0x92,-0x171,0xa6,-0x177)]('\x20');const hargaKayu=0x65d6+0x15e5*-0x1+-0x9a1,hasil6=bayar*hargaKayu;if(getNebangKayu(sender)<=0x28f+0xf7f+-0x120d*0x1)return reply(_0x365ab2(-0x1f,0x28,0xa7,0xe9)+pushname+(_0x5032bd(-0x1c9,-0xef,-0x1da,-0xc2)+_0x5032bd(-0x50,-0xc,0xbd,-0xd)+_0x365ab2(0xd1,0x19c,0x115,0x131)+_0x5032bd(-0x120,-0xda,-0x9,-0x6b)));getNebangKayu(sender)>=-0x134b+-0x21*-0x1+0x132b&&(jualkayu(sender,bayar),addKoinUser(sender,hasil6),await reply(_0x365ab2(0x1cf,0xd7,0x42,0x107)+'AN\x20BERHASI'+_0x365ab2(0x3a,-0x176,-0x26,-0xdd)+enter+enter+(_0x365ab2(-0x6e,0x7a,-0x38,0x66)+'yu\x20dijual:'+'*\x20')+bayar+enter+(_0x365ab2(0xad,0x55,0xba,-0x1)+_0x365ab2(0x138,0x1e4,0x145,0xcb))+hasil6+enter+enter+(_0x5032bd(-0x1fb,-0x11b,-0x28b,-0x1a6)+_0x365ab2(0x36,-0x4d,-0x122,0x32))+getNebangKayu(sender)+enter+(_0x5032bd(0x28,0xa2,-0x121,-0x11)+':*\x20')+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x5032bd(-0x208,-0x324,-0x207,-0x317)+_0x365ab2(-0xd1,-0x3c,-0x15d,-0x110)+_0x5032bd(-0x20e,-0x232,-0x2bf,-0xc4)+_0x5032bd(-0x1b4,-0x1af,-0x2e5,-0x101)+_0x5032bd(0x73,0x91,0x3d,0x2e))));await gameAdd(sender,glimit);break;case _0x365ab2(-0x251,-0x24b,-0x1de,-0x125):const _0x4252a2={};_0x4252a2['displayTex'+'t']=_0x365ab2(-0x185,-0x9e,-0xd4,-0x132)+'t';const _0x5b6c77={};_0x5b6c77[_0x5032bd(-0x25,-0x7d,0x87,-0x117)]=_0x365ab2(-0x40,-0x4a,0x33,0x8c),_0x5b6c77[_0x5032bd(0x3c,0x174,-0x60,0x12f)]=_0x4252a2,_0x5b6c77['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0x1db,-0x1df,-0x1dd)](prefix),'©\x20'+ownername,[_0x5b6c77]);const _0x3d87e2={};_0x3d87e2['displayTex'+'t']=_0x365ab2(-0x47,0xfa,0xa5,0x8a);const _0x5b07b2={};_0x5b07b2['buttonId']=_0x365ab2(0x141,0x43,0x156,0x144),_0x5b07b2[_0x5032bd(0x3c,-0x13,-0xf8,-0x87)]=_0x3d87e2,_0x5b07b2[_0x365ab2(-0x47,-0x36,-0x1d0,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0x5b07b2]);if(isOwner){const one=0x2f9dd51d*0x1+0x73abc116+0x15f7*-0x4b86c;addLevelingXp(sender,one),addLevelingLevel(sender,0x17d1+0x3e1+-0x1*0x1b4f),reply(_0x365ab2(0x84,-0x130,-0x1de,-0xa8)+_0x365ab2(0x1b3,-0x14,0x185,0xae)+'mi\x20dari\x20te'+_0x5032bd(-0x6e,-0x3d,-0x12c,-0x11d)+'girim\x20'+one+('Xp\x20untuk\x20a'+_0x365ab2(-0x101,-0x5,-0xa5,-0x6b)));}else setTimeout(()=>{const _0x4d4946={'WGaMk':function(_0x336746,_0x518eb9){return _0x336746*_0x518eb9;},'jMbzI':function(_0x2d8499,_0x385918,_0x354891){return _0x2d8499(_0x385918,_0x354891);},'nLZQw':function(_0x253a0f,_0x15a4a1){return _0x253a0f(_0x15a4a1);}},_0x2d3c6e=Math[_0x3aaa6c(0x4a3,0x555,0x539,0x4a2)](_0x4d4946['WGaMk'](Math[_0x3aaa6c(0x4c0,0x515,0x3d6,0x3e2)](),-0x4c39+0x4aa9+0x14*0x208));function _0x27ede9(_0x1c4c45,_0x125596,_0x1a0129,_0x48ce10){return _0x5032bd(_0x125596-0x21f,_0x48ce10,_0x1a0129-0x103,_0x48ce10-0x15a);}function _0x3aaa6c(_0x2b35f3,_0x453c31,_0x3ab111,_0x22014b){return _0x5032bd(_0x22014b-0x418,_0x2b35f3,_0x3ab111-0xf6,_0x22014b-0x12f);}_0x4d4946[_0x27ede9(0x205,0x2a4,0x31d,0x284)](addLevelingXp,sender,_0x2d3c6e),_0x4d4946[_0x27ede9(0x11f,0x1de,0x24e,0x176)](reply,_0x3aaa6c(0x350,0x2c8,0x2ee,0x2e0)+'ation\x20🎊*\x20'+pushname+(_0x27ede9(0xc7,0x22,0x127,0xd6)+_0x3aaa6c(0x328,0x4b7,0x3d7,0x3a2))+_0x2d3c6e+'Xp*');},-0x61*-0x35+0x101*-0xf+0x6b2),setTimeout(()=>{function _0x5ea8f7(_0x4fae21,_0x2a589d,_0x4cefe0,_0x18915b){return _0x5032bd(_0x4cefe0-0x366,_0x4fae21,_0x4cefe0-0x1ca,_0x18915b-0x174);}function _0x381dee(_0x424573,_0x33f838,_0x1ab2f3,_0x3fc736){return _0x5032bd(_0x424573-0x97,_0x1ab2f3,_0x1ab2f3-0x1a,_0x3fc736-0x91);}const _0x2cb743={'aomoE':function(_0x23ff4a,_0xe37582){return _0x23ff4a(_0xe37582);},'LVVcH':_0x5ea8f7(0x199,0x1ed,0x1b6,0x28f)+_0x5ea8f7(0x204,0x33f,0x258,0x244)+'\x202\x20menit,\x20'+_0x5ea8f7(0x308,0x180,0x24b,0x394)+_0x5ea8f7(0x133,0x2a6,0x1fd,0x18b)};_0x2cb743[_0x5ea8f7(0x186,0x2c1,0x282,0x3b9)](reply,_0x2cb743[_0x5ea8f7(0x2c3,0x1ab,0x180,0x287)]);},-0x2*0x827+0x1be*0xc+0x3e*-0x13);await gameAdd(sender,glimit);break;case _0x365ab2(-0x86,-0x256,-0x26e,-0x14f):const _0x5d2f5c={};_0x5d2f5c[_0x365ab2(-0x113,-0x14e,-0x1c2,-0x77)+'t']=_0x5032bd(-0x207,-0x195,-0x157,-0x153)+'t';const _0x41f9e4={};_0x41f9e4[_0x5032bd(-0x25,0x102,-0x91,-0xd2)]=_0x5032bd(-0x49,-0x40,0xc6,-0x53),_0x41f9e4[_0x5032bd(0x3c,0x51,-0xd1,0x5d)]=_0x5d2f5c,_0x41f9e4[_0x365ab2(0x1f,-0x17f,-0x10,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x41f9e4]);const _0x106421={};_0x106421[_0x5032bd(-0x14c,-0x1f2,-0x126,-0x9b)+'t']='Event\x20On';const _0x205636={};_0x205636[_0x5032bd(-0x25,-0x144,-0x14c,0x25)]='event\x20on',_0x205636['buttonText']=_0x106421,_0x205636[_0x365ab2(-0x1e6,-0x2d,-0x25b,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(-0x3a,0x1c8,0x171,0x70)](prefix),'©\x20'+ownername,[_0x205636]);setTimeout(()=>{function _0x427860(_0x2f7441,_0x276ee8,_0x15c347,_0x3113da){return _0x365ab2(_0x2f7441-0x145,_0x276ee8-0x8c,_0x15c347,_0x276ee8-0x2fa);}const _0x560ddc={'vWwUI':function(_0x1cda20,_0x30a725){return _0x1cda20*_0x30a725;},'mpGIx':function(_0x4a42e2,_0x464bfb,_0x5e36cb){return _0x4a42e2(_0x464bfb,_0x5e36cb);},'mXstS':function(_0x3f2cd9,_0x476578){return _0x3f2cd9(_0x476578);}},_0xcb18bf=Math[_0x382dac(0x225,0x276,0x36f,0x48d)](_0x560ddc['vWwUI'](Math[_0x427860(0x3a2,0x399,0x402,0x43c)](),-0x3e5*0x1+-0x2*-0x63d+-0x51*0x1b));function _0x382dac(_0x2eb0bb,_0x10dbdb,_0x2cb0c5,_0x38b0e5){return _0x5032bd(_0x2cb0c5-0x2e5,_0x38b0e5,_0x2cb0c5-0x125,_0x38b0e5-0x1e7);}_0x560ddc[_0x427860(0x412,0x3a0,0x478,0x343)](addIkan,sender,_0xcb18bf),_0x560ddc['mXstS'](reply,_0x382dac(0xbc,0xd3,0x1ad,0x1ab)+_0x427860(0x391,0x27d,0x3da,0x397)+_0x427860(0x282,0x1d2,0x2a8,0xb1)+_0x382dac(0x38e,0x327,0x26f,0x1ee)+_0xcb18bf+(_0x382dac(0x231,0x173,0xf9,0x1c0)+'ama\x202\x20meni'+'t'));},0xd8c+0x2*-0x3fb+-0x13a*-0x5),setTimeout(()=>{const _0x49ddaa={'Ncatr':function(_0x2e9072,_0x79d746){return _0x2e9072(_0x79d746);},'gLery':_0x2feca7(0xae,0x54,-0x6a,-0x40)+'ancing,\x20si'+'lahkan\x20tun'+_0x2feca7(0x12f,0x194,0xf2,0x99)};function _0x2feca7(_0x285e0d,_0x2ec09b,_0x332313,_0x5cc093){return _0x5032bd(_0x5cc093-0x76,_0x285e0d,_0x332313-0x186,_0x5cc093-0x70);}function _0x47fdf2(_0x2c791c,_0x521cc6,_0x591c30,_0x26c726){return _0x365ab2(_0x2c791c-0x157,_0x521cc6-0x176,_0x2c791c,_0x26c726-0x1e4);}_0x49ddaa[_0x2feca7(-0x27e,-0x2c4,-0xd3,-0x1a7)](reply,_0x49ddaa[_0x47fdf2(0x177,0xd5,0xa2,0x89)]);},0x4*0x83c+-0x1*-0x242+-0x2332),await gameAdd(sender,glimit);break;case _0x5032bd(-0x202,-0xd1,-0x1b2,-0x181):case _0x365ab2(-0xb3,-0x27,-0x182,-0x69):const _0xef97aa={};_0xef97aa[_0x5032bd(-0x14c,-0xe8,-0x21c,-0xa)+'t']=_0x365ab2(-0x25b,0x11,-0x1e9,-0x132)+'t';const _0x3a6d37={};_0x3a6d37[_0x5032bd(-0x25,-0xcb,0x97,-0x126)]=_0x5032bd(-0x49,-0x114,-0x121,-0x194),_0x3a6d37['buttonText']=_0xef97aa,_0x3a6d37[_0x365ab2(-0x152,-0x13e,-0x70,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x3a6d37]);const _0x57b43c={};_0x57b43c[_0x365ab2(0x49,-0x69,-0x1b3,-0x77)+'t']=_0x5032bd(-0x4b,-0x64,-0x79,0xe3);const _0x21dd67={};_0x21dd67[_0x5032bd(-0x25,-0xc0,-0x130,0x8e)]=_0x365ab2(0x223,0x96,0x268,0x144),_0x21dd67['buttonText']=_0x57b43c,_0x21dd67[_0x5032bd(-0x1e7,-0x120,-0x144,-0x164)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(0x54,0x13f,0x126,0x70)](prefix),'©\x20'+ownername,[_0x21dd67]);var tempsa=args[_0x365ab2(0x17a,-0x9a,-0xe7,0x43)]('\x20');if(tempsa==_0x5032bd(-0x61,0x47,0x6b,-0xa1)+_0x5032bd(-0x10,-0x6d,-0x7d,-0x12b)){const _0x2451a0={};_0x2451a0['method']='get',asu=await getBuffer(_0x365ab2(0x141,0xd9,0xf8,0xc0)+'legra.ph/f'+_0x5032bd(-0x12a,0x30,-0xfd,-0x11)+'ab77a6cea8'+_0x365ab2(-0x4c,0x4f,-0x8,0x46),_0x2451a0),setTimeout(()=>{const _0x516bc7={'KkXEJ':function(_0x47009b,_0x140146){return _0x47009b*_0x140146;},'GpYOL':function(_0x552225,_0x5d1865,_0x253976){return _0x552225(_0x5d1865,_0x253976);},'mynqc':_0x3d12a4(0x43b,0x441,0x465,0x497)+'ry\x20🗃️'},_0x13a9f0=Math[_0x527471(0x2c4,0x505,0x3ca,0x36d)](_0x516bc7[_0x527471(0x125,0x12f,0x15c,0x7d)](Math['random'](),-0x1*-0x989+-0x2*-0x71e+-0x177f)),_0x523c33=Math[_0x3d12a4(0x373,0x5b0,0x362,0x4a9)](_0x516bc7[_0x527471(0x208,0x19d,0x15c,0x96)](Math[_0x527471(0x31c,0x243,0x30a,0x2e9)](),-0xbca+0xd76*-0x2+0x26c5));_0x516bc7[_0x527471(0x293,0x393,0x33e,0x1e5)](addStone,sender,_0x13a9f0),addIkan(sender,_0x523c33);const _0x2278e7={};_0x2278e7['displayTex'+'t']=_0x516bc7[_0x527471(0x1e9,-0x29,0x124,-0x23)];const _0x2a418f={};_0x2a418f[_0x3d12a4(0x445,0x4e2,0x463,0x3fa)]='inv';function _0x527471(_0x1b654e,_0x19df05,_0x423054,_0x1ebcc9){return _0x5032bd(_0x423054-0x340,_0x19df05,_0x423054-0x3,_0x1ebcc9-0xe);}_0x2a418f['buttonText']=_0x2278e7,_0x2a418f[_0x3d12a4(0x357,0x111,0x335,0x238)]='RESPONSE';function _0x3d12a4(_0x1187d0,_0x108ffe,_0x31c63b,_0x36aa38){return _0x365ab2(_0x1187d0-0x1c4,_0x108ffe-0xc0,_0x31c63b,_0x36aa38-0x34a);}const _0x237a6e={};_0x237a6e['quoted']=mek,sendButImage(from,'*Congratul'+_0x3d12a4(0x1f5,0x3e0,0x240,0x301)+enter+enter+('Kamu\x20menda'+_0x527471(0x2ec,0x2e2,0x38f,0x39f))+_0x13a9f0+('*\x20batu\x20dan'+'\x20*')+_0x523c33+_0x527471(0x1b8,-0x1a,0x131,0x1c3)+enter+enter+(_0x3d12a4(0x411,0x2b5,0x4c7,0x37b)+_0x3d12a4(0x352,0x332,0x2c2,0x308)+'engan\x20cara'+_0x527471(0x253,0x1d5,0x1f1,0x12c))+prefix+_0x527471(0x1ff,0x219,0x24e,0x2f9),'©\x20'+ownername,asu,[_0x2a418f],_0x237a6e);},-0x1117+0x61*0xe+-0x1*-0x1781),setTimeout(()=>{const _0x4b1ef1={'HKyiq':function(_0x1a83fe,_0xebd0a9){return _0x1a83fe(_0xebd0a9);},'hwRVD':_0x115741(0x4aa,0x415,0x50e,0x490)+_0x121a3c(0x48b,0x5c8,0x512,0x482)+_0x121a3c(0x4bc,0x29d,0x3ad,0x3cb)+_0x121a3c(0x3a3,0x3c2,0x365,0x3d9)};function _0x115741(_0x696361,_0x2e6424,_0x58b1f6,_0x5a8832){return _0x365ab2(_0x696361-0x180,_0x2e6424-0xed,_0x2e6424,_0x696361-0x367);}function _0x121a3c(_0x469d52,_0x182626,_0x545929,_0x4d055f){return _0x5032bd(_0x545929-0x55c,_0x469d52,_0x545929-0x5f,_0x4d055f-0x57);}_0x4b1ef1[_0x121a3c(0x4e2,0x4ea,0x4c9,0x4ba)](reply,_0x4b1ef1['hwRVD']);},0x23a8+-0x1db1+0x3*-0x1fd);}else{if(tempsa===_0x365ab2(0x41,0x89,0x46,-0x64)+_0x365ab2(-0x125,-0x73,-0x6f,-0x4f)){const _0x2c1449={};_0x2c1449[_0x365ab2(0x17c,0x29a,0x2a2,0x158)]=_0x5032bd(-0xad,-0x13a,0x34,-0x93),gos=await getBuffer('https://te'+_0x365ab2(0x190,0x76,-0x41,0xf3)+_0x365ab2(0x1ab,-0xde,-0x1,0x7a)+_0x365ab2(-0x22,-0x31,0x101,0x7f)+_0x365ab2(-0xe,-0x16,-0x14,-0x99),_0x2c1449),setTimeout(()=>{const _0x251262={'ybDdq':function(_0x3bcbd4,_0x450ed9){return _0x3bcbd4*_0x450ed9;},'SjLQb':function(_0x25fd9d,_0x471b73,_0x51e4bf,_0x13dbb3,_0x6e7193,_0x311fc6,_0x23f917){return _0x25fd9d(_0x471b73,_0x51e4bf,_0x13dbb3,_0x6e7193,_0x311fc6,_0x23f917);},'zQliU':_0x313326(0x6eb,0x60c,0x5ff,0x64a)+_0x313326(0x4c8,0x46d,0x58a,0x412),'hkwRk':_0x313326(0x462,0x561,0x53e,0x323)},_0xf2ab7f=Math[_0x1bb047(0x17b,0x204,0x74,0x1af)](_0x251262['ybDdq'](Math[_0x313326(0x63d,0x5d8,0x5aa,0x5f5)](),-0x23c3+-0x3*0x3e3+0x2fda));function _0x313326(_0xa0ca74,_0x4c8b83,_0x437ac3,_0x53f8f3){return _0x365ab2(_0xa0ca74-0xd8,_0x4c8b83-0x8c,_0x53f8f3,_0xa0ca74-0x59e);}const _0xa87719=Math[_0x313326(0x6fd,0x5e7,0x660,0x7dd)](_0x251262['ybDdq'](Math[_0x1bb047(0xbb,0x112,0x13e,0x46)](),0x13cd+0x2*-0x313+-0x19*0x8b));addStone(sender,_0xf2ab7f),addKayu(sender,_0xa87719);function _0x1bb047(_0x5da1de,_0x3bf8e5,_0x216c73,_0x17985a){return _0x5032bd(_0x5da1de-0xf1,_0x216c73,_0x216c73-0xcc,_0x17985a-0x115);}const _0x5028b6={};_0x5028b6[_0x313326(0x570,0x440,0x691,0x4b0)]=mek,_0x251262[_0x1bb047(0x21,-0x65,-0xbf,0x5f)](sendButImage,from,'*Congratul'+'ation\x20🎊*'+enter+enter+(_0x313326(0x5c4,0x6a3,0x64b,0x575)+_0x1bb047(0x140,0x1c3,0x1f7,0x5c))+_0xf2ab7f+('*\x20batu\x20dan'+'\x20*')+_0xa87719+_0x1bb047(0x15e,0x1f,0x0,0x4)+enter+enter+(_0x313326(0x5cf,0x727,0x4a2,0x50c)+_0x1bb047(-0x26,0x3e,-0x117,-0x122)+_0x313326(0x60b,0x53f,0x545,0x676)+_0x313326(0x524,0x4b0,0x5e9,0x5f6))+prefix+_0x1bb047(-0x1,0xdd,0x8,0x15a),'©\x20'+ownername,gos,[{'buttonId':_0x1bb047(0x91,0xb3,-0x4b,0x1ce),'buttonText':{'displayText':_0x251262[_0x313326(0x5e9,0x5f8,0x4d6,0x669)]},'type':_0x251262[_0x1bb047(0x149,0x43,0x1ce,0x1ed)]}],_0x5028b6);},0x161*0x2+0x6*0x541+-0x1690),setTimeout(()=>{function _0x4a5b3a(_0x1a5009,_0x864d55,_0x509a86,_0x308ceb){return _0x365ab2(_0x1a5009-0x37,_0x864d55-0x1c2,_0x864d55,_0x509a86-0x352);}const _0x370a53={'opTdK':function(_0x1aca22,_0x47ec5e){return _0x1aca22(_0x47ec5e);},'RcBoS':_0x4a5b3a(0x5ad,0x55b,0x495,0x398)+_0x4a5b3a(0x524,0x473,0x3dd,0x4d6)+_0x4e67d4(0x5ae,0x356,0x57a,0x4a5)+'tunggu...'};function _0x4e67d4(_0x3dc27f,_0x2fd825,_0xa03f0d,_0x329542){return _0x365ab2(_0x3dc27f-0x1aa,_0x2fd825-0x136,_0x2fd825,_0x329542-0x57f);}_0x370a53[_0x4e67d4(0x4ea,0x3d6,0x3d2,0x523)](reply,_0x370a53[_0x4a5b3a(0x283,0x24e,0x2bb,0x385)]);},-0x26cf+0x1*0x143e+0x1291);}else{if(tempsa==='cochher\x20se'+'a'){const _0x136d02={};_0x136d02[_0x5032bd(0x83,-0x99,0x71,-0x8)]=_0x365ab2(0xad,0x42,-0x2c,0x28),seae=await getBuffer('https://te'+_0x5032bd(0x1e,0x130,-0x10,0x172)+_0x5032bd(0x0,0x137,-0x2d,-0x47)+_0x5032bd(-0x51,-0xe9,-0xd7,-0x19a)+'6b0c0.jpg',_0x136d02),setTimeout(()=>{const _0x4aa516={};_0x4aa516['CCWJv']='My\x20Invento'+'ry\x20🗃️',_0x4aa516['KYgsa']=_0x19509e(0x156,0xb3,0xdd,-0x59);const _0x503971=_0x4aa516,_0x5d5bb5=Math[_0x19509e(0x21f,0x34e,0x2d8,0x3b6)](Math[_0x3fbcf9(0x3e4,0x2de,0x38c,0x375)]()*(-0x13ec+-0x1fb5+0x1d*0x1ca));addIkan(sender,_0x5d5bb5);const _0x102100={};function _0x3fbcf9(_0x3ba90f,_0x415c43,_0x3ad3f7,_0x35da02){return _0x365ab2(_0x3ba90f-0x1d2,_0x415c43-0xf4,_0x415c43,_0x35da02-0x2d6);}function _0x19509e(_0x5b014e,_0x42b389,_0x5beef0,_0x1bd1d9){return _0x365ab2(_0x5b014e-0x15a,_0x42b389-0x16e,_0x5beef0,_0x42b389-0x1ef);}_0x102100[_0x3fbcf9(0x11f,0x271,0x32e,0x25f)+'t']=_0x503971[_0x19509e(0xeb,0x1cf,0x28e,0x206)];const _0x443463={};_0x443463[_0x19509e(0x1a5,0x29f,0x258,0x358)]=_0x19509e(0x34a,0x264,0x1b0,0x16f),_0x443463[_0x19509e(0x243,0x300,0x2a4,0x1c8)]=_0x102100,_0x443463[_0x3fbcf9(0x1d5,0x232,0x7f,0x1c4)]=_0x503971[_0x3fbcf9(0x549,0x576,0x438,0x422)];const _0x6445cb={};_0x6445cb[_0x3fbcf9(0x3f5,0x17c,0x23b,0x2a8)]=mek,sendButImage(from,_0x3fbcf9(0x273,0x30c,0x3b3,0x273)+_0x19509e(0xee,0x1a6,0x252,0x2e7)+enter+enter+(_0x3fbcf9(0x3d7,0x344,0x35e,0x2fc)+_0x19509e(0x334,0x313,0x3bb,0x454))+_0x5d5bb5+'*\x20ikan'+enter+enter+(_0x3fbcf9(0x43e,0x43f,0x1e5,0x307)+'ory\x20anda\x20d'+_0x19509e(0x2ce,0x25c,0x17d,0x33a)+_0x19509e(0x282,0x175,0x1d0,0xc9))+prefix+_0x19509e(0xe8,0x1d2,0x1b9,0x110),'©\x20\x20'+ownername,seae,[_0x443463],_0x6445cb);},-0x5*0x1c1+-0xefd*0x1+0x237a),setTimeout(()=>{const _0x4968a5={};_0x4968a5[_0x2ce257(0x675,0x5c8,0x580,0x68a)]=_0x5a3841(0x1ba,0x2cf,0xa7,0x1bc)+_0x5a3841(0x102,0x169,0x175,0x23e)+_0x2ce257(0x49a,0x5b7,0x4b3,0x340)+_0x2ce257(0x452,0x57c,0x39b,0x36d);function _0x5a3841(_0x5a1aff,_0x2236fc,_0x5812f2,_0x507e1e){return _0x365ab2(_0x5a1aff-0x1ac,_0x2236fc-0xbb,_0x507e1e,_0x5a1aff-0x77);}const _0x3b646a=_0x4968a5;function _0x2ce257(_0x470d8f,_0x28f3bf,_0x1c7156,_0x579eeb){return _0x365ab2(_0x470d8f-0x1b3,_0x28f3bf-0x103,_0x1c7156,_0x470d8f-0x574);}reply(_0x3b646a[_0x5a3841(0x178,0xbe,0x28a,0x12b)]);},0x643+0x1e1e+0x8b*-0x43);}else{if(tempsa==='limingstal'+_0x5032bd(-0x1b5,-0x232,-0x151,-0x163)+'s'){const _0x548621={};_0x548621[_0x5032bd(0x83,0x1bd,0x113,0x126)]=_0x5032bd(-0xad,-0x129,-0x46,-0x38),seoe=await getBuffer(_0x5032bd(-0x15,-0x16f,-0x4a,-0x64)+_0x5032bd(0x1e,-0xec,-0xdd,0x41)+_0x365ab2(0x24,-0x16b,-0xcf,-0x36)+_0x365ab2(-0x1e3,-0x49,0x3a,-0xe8)+_0x5032bd(-0x34,0x1e,0x102,-0x106),_0x548621),setTimeout(()=>{const _0x18d03b={'boPTy':function(_0x30de2c,_0x449c26){return _0x30de2c*_0x449c26;},'CKaam':function(_0xa7761a,_0x1ee1e7,_0x5cc680){return _0xa7761a(_0x1ee1e7,_0x5cc680);},'NsQCV':function(_0x2a0f6d,_0x30e0fa,_0x52c0d4,_0x4e3f8d,_0x244335,_0x7e9e22,_0x1f9a14){return _0x2a0f6d(_0x30e0fa,_0x52c0d4,_0x4e3f8d,_0x244335,_0x7e9e22,_0x1f9a14);},'kVliL':_0x2efd57(0x3cc,0x4f3,0x5e9,0x494)},_0x517a8a=Math[_0x2efd57(0x6e1,0x656,0x802,0x72f)](Math['random']()*(-0x2511+-0xde4+0x3*0x110d)),_0x2b50fe=Math[_0x2efd57(0x6b6,0x827,0x706,0x72f)](_0x18d03b['boPTy'](Math['random'](),0x904*0x3+-0x502*-0x1+-0x1fbe));function _0x2efd57(_0x207b6c,_0x197ac3,_0x284a62,_0x5c9738){return _0x5032bd(_0x5c9738-0x6a5,_0x207b6c,_0x284a62-0x163,_0x5c9738-0xcd);}_0x18d03b[_0x2efd57(0x33d,0x36d,0x40e,0x476)](addOre,sender,_0x517a8a),_0x18d03b['CKaam'](addStone,sender,_0x2b50fe);const _0x4737d4={};function _0x47e6a0(_0x275ca4,_0x1ad2c,_0x14ac36,_0x36a372){return _0x365ab2(_0x275ca4-0xe3,_0x1ad2c-0x5d,_0x14ac36,_0x1ad2c-0x12);}_0x4737d4['displayTex'+'t']=_0x47e6a0(0x284,0x15f,0x1f8,0xb9)+_0x2efd57(0x428,0x4d9,0x513,0x4fa);const _0x41ed41={};_0x41ed41[_0x47e6a0(-0x167,-0x1c,-0x111,-0xe3)]=mek,_0x18d03b[_0x47e6a0(-0xa1,-0x14,0xc1,-0x13)](sendButImage,from,_0x47e6a0(0x43,-0x51,-0x1a4,-0x1a2)+'ation\x20🎊*'+enter+enter+(_0x2efd57(0x61f,0x54b,0x4b1,0x5f6)+_0x47e6a0(0x30,0x136,0xed,0xa3))+_0x517a8a+('*\x20copper\x20o'+'re\x20dan\x20')+_0x2b50fe+_0x47e6a0(-0x68,0xae,0x17a,0x1ed)+enter+enter+(_0x47e6a0(0x41,0x43,0x105,-0x117)+_0x47e6a0(0xac,-0x30,-0x45,-0x59)+'engan\x20cara'+'\x20ketik\x20')+prefix+_0x47e6a0(0x147,-0xb,-0x64,0x2c),'©\x20'+ownername,seoe,[{'buttonId':'inv','buttonText':_0x4737d4,'type':_0x18d03b[_0x47e6a0(-0xb2,-0xe8,-0x185,-0x1ba)]}],_0x41ed41);},0x22c6+-0xc8+0x2*-0xb23),setTimeout(()=>{function _0x4e8358(_0x5a30a9,_0x5d787f,_0x3ad45d,_0x5416cf){return _0x365ab2(_0x5a30a9-0xda,_0x5d787f-0x112,_0x5d787f,_0x5a30a9-0x15a);}function _0x266208(_0x34f365,_0x130e25,_0x4f0881,_0x3bccb8){return _0x5032bd(_0x130e25-0x5fb,_0x4f0881,_0x4f0881-0x47,_0x3bccb8-0x1c9);}const _0x27dc9f={'wkqSe':function(_0x1751c0,_0x744d28){return _0x1751c0(_0x744d28);},'rVgsB':_0x4e8358(0x29d,0x36b,0x322,0x25b)+_0x4e8358(0x1e5,0x152,0x187,0x1fa)+_0x266208(0x34f,0x44c,0x54c,0x43c)+'tunggu...'};_0x27dc9f[_0x4e8358(0x2b1,0x16b,0x3f6,0x2d1)](reply,_0x27dc9f[_0x4e8358(0x22c,0x25d,0x323,0x290)]);},0x1df0+-0x16ab+-0x745);}else{if(tempsa===_0x365ab2(0xb6,0x8f,0x151,-0x9)+'tain'){const _0x1ac0ae={};_0x1ac0ae['method']=_0x5032bd(-0xad,-0xaf,-0x75,-0x7b),seye=await getBuffer(_0x365ab2(0x1a2,0x37,0xd2,0xc0)+'legra.ph/f'+_0x365ab2(0x175,0x17c,-0x93,0xbd)+_0x365ab2(-0x1d,-0x190,-0x16b,-0x9c)+_0x365ab2(-0x5c,0x34,0x4c,0x51),_0x1ac0ae),setTimeout(()=>{const _0x1b53e8={'QUsMA':function(_0x12a160,_0x3f3d4d){return _0x12a160*_0x3f3d4d;},'zpAfu':function(_0x129e25,_0x2b6e0d,_0x2dc41a){return _0x129e25(_0x2b6e0d,_0x2dc41a);},'aONQw':function(_0x2998c8,_0x499bc3,_0x32daf8,_0xbc1229,_0x4408f3,_0x2d95b8,_0x41897a){return _0x2998c8(_0x499bc3,_0x32daf8,_0xbc1229,_0x4408f3,_0x2d95b8,_0x41897a);},'PaWHa':_0x5b989e(0x3a7,0x331,0x317,0x40e)},_0x174009=Math[_0x5b989e(0x5dd,0x62c,0x5b2,0x660)](_0x1b53e8[_0x21fca4(0x318,0x37e,0x43e,0x2ac)](Math['random'](),0x3a+-0x1f1a+-0x14b*-0x18)),_0x2a2c93=Math['ceil'](_0x1b53e8['QUsMA'](Math[_0x5b989e(0x46f,0x5f4,0x4f2,0x413)](),-0x1a4e+0xf*-0x236+-0x2*-0x1dda));addOre(sender,_0x174009);function _0x21fca4(_0x1e5f48,_0x42d605,_0x303ebc,_0x5329c3){return _0x5032bd(_0x1e5f48-0x370,_0x303ebc,_0x303ebc-0xfa,_0x5329c3-0x1ec);}_0x1b53e8[_0x21fca4(0x28d,0x32d,0x38a,0x256)](addStone,sender,_0x2a2c93);const _0x57d621={};_0x57d621[_0x21fca4(0x224,0x1c9,0x165,0xcc)+'t']=_0x21fca4(0x3e8,0x336,0x44a,0x474)+_0x21fca4(0x1c5,0x27f,0x14f,0x19d);const _0x33df2c={};function _0x5b989e(_0x1d07ef,_0x381d0f,_0x17de0d,_0x3e65ed){return _0x5032bd(_0x17de0d-0x528,_0x381d0f,_0x17de0d-0x74,_0x3e65ed-0x134);}_0x33df2c[_0x21fca4(0x26d,0x3b6,0x2a6,0x239)]=mek,_0x1b53e8[_0x21fca4(0x26c,0x1fe,0x2ce,0x266)](sendButImage,from,_0x21fca4(0x238,0x19d,0x303,0x111)+_0x21fca4(0x252,0x1e5,0x32b,0x282)+enter+enter+(_0x21fca4(0x2c1,0x2d7,0x272,0x2af)+'patkan\x20*')+_0x174009+(_0x21fca4(0x36f,0x2bb,0x329,0x25a)+_0x21fca4(0x288,0x332,0x3d9,0x12a))+_0x2a2c93+'\x20batu'+enter+enter+(_0x5b989e(0x5df,0x392,0x484,0x49d)+_0x5b989e(0x47f,0x4fa,0x411,0x40f)+_0x21fca4(0x308,0x1c8,0x354,0x218)+'\x20ketik\x20')+prefix+'inventory','©\x20'+ownername,seye,[{'buttonId':_0x21fca4(0x310,0x1d2,0x44e,0x3e7),'buttonText':_0x57d621,'type':_0x1b53e8['PaWHa']}],_0x33df2c);},-0x4b7+-0x313*-0xc+-0x1475),setTimeout(()=>{function _0xf9f8bd(_0x1a788b,_0x3af033,_0x22ce05,_0x2ff653){return _0x365ab2(_0x1a788b-0x105,_0x3af033-0x146,_0x3af033,_0x2ff653-0x4a7);}const _0x6437bc={'NNWEr':function(_0x149d93,_0x50cff3){return _0x149d93(_0x50cff3);}};function _0x4a7267(_0x3a6d2c,_0x2d6d06,_0x1ff02f,_0x4940ba){return _0x5032bd(_0x3a6d2c-0x559,_0x2d6d06,_0x1ff02f-0x0,_0x4940ba-0x1c);}_0x6437bc['NNWEr'](reply,'Sedang\x20ber'+_0xf9f8bd(0x48a,0x479,0x4da,0x532)+'\x20silahkan\x20'+_0x4a7267(0x362,0x47e,0x496,0x23f));},-0x74d+-0x2cd+-0x3*-0x35e);}else{if(tempsa===_0x365ab2(-0x7f,0xe5,-0xc5,0x73)+'ds'){const _0x3b9b09={};_0x3b9b09[_0x5032bd(0x83,0x6b,-0x82,0x13a)]=_0x5032bd(-0xad,-0x106,-0x3e,-0x1f7),siae=await getBuffer(_0x365ab2(0x1f6,-0x20,0x13b,0xc0)+_0x5032bd(0x1e,-0xf2,0x14c,-0x7)+_0x5032bd(0x1c,0x89,0x37,0x9b)+_0x5032bd(-0x1db,-0x25c,-0x2ee,-0x1a0)+_0x5032bd(-0xee,-0x97,-0x11c,-0x8e),_0x3b9b09),setTimeout(()=>{const _0x5e69c7={'odxFh':function(_0x3ec03c,_0x38dccb){return _0x3ec03c*_0x38dccb;},'xqfyd':function(_0x1006b9,_0x341d17,_0x5512a1){return _0x1006b9(_0x341d17,_0x5512a1);},'onmVc':function(_0x5bb0dc,_0x21b33d,_0x160d63,_0x230f6b,_0x167988,_0x9e2747,_0x2d492b){return _0x5bb0dc(_0x21b33d,_0x160d63,_0x230f6b,_0x167988,_0x9e2747,_0x2d492b);}},_0x779c27=Math[_0x11d0f9(0x659,0x735,0x690,0x675)](_0x5e69c7['odxFh'](Math[_0x11d0f9(0x6e0,0x675,0x6c3,0x79e)](),-0x2016+-0x5bd*0x1+0x262d)),_0x273071=Math[_0x4b17c6(0x87c,0x741,0x82b,0x799)](_0x5e69c7[_0x11d0f9(0x762,0x629,0x64c,0x71c)](Math[_0x11d0f9(0x67b,0x675,0x74b,0x55c)](),0x4*-0x7de+0x150+-0x5*-0x611));_0x5e69c7[_0x11d0f9(0x6bb,0x671,0x63f,0x65a)](addStone,sender,_0x779c27),addKayu(sender,_0x273071);const _0x462fb7={};_0x462fb7['displayTex'+'t']=_0x4b17c6(0x69f,0x663,0x72b,0x787)+'ry\x20🗃️';function _0x11d0f9(_0x3d3166,_0xc52697,_0x34da45,_0x58ece5){return _0x5032bd(_0xc52697-0x6ab,_0x34da45,_0x34da45-0xc2,_0x58ece5-0xb5);}function _0x4b17c6(_0x5bba20,_0x32c8b6,_0x325df7,_0x253c8c){return _0x5032bd(_0x253c8c-0x70f,_0x325df7,_0x325df7-0x188,_0x253c8c-0xd9);}const _0x59b464={};_0x59b464['buttonId']=_0x11d0f9(0x73a,0x64b,0x69f,0x6e4),_0x59b464[_0x4b17c6(0x6b0,0x800,0x862,0x74b)]=_0x462fb7,_0x59b464['type']=_0x11d0f9(0x433,0x49a,0x377,0x44b);const _0x52ceef={};_0x52ceef[_0x11d0f9(0x618,0x5a8,0x4d4,0x6e0)]=mek,_0x5e69c7[_0x11d0f9(0x392,0x48b,0x41b,0x4ed)](sendButImage,from,_0x4b17c6(0x59f,0x668,0x4c4,0x5d7)+_0x4b17c6(0x57e,0x726,0x59d,0x5f1)+enter+enter+('Kamu\x20menda'+_0x4b17c6(0x6b0,0x70a,0x6ed,0x75e))+_0x779c27+('*\x20batu\x20dan'+'\x20*')+_0x273071+_0x11d0f9(0x7b6,0x718,0x78e,0x727)+enter+enter+(_0x4b17c6(0x540,0x638,0x633,0x66b)+'ory\x20anda\x20d'+_0x4b17c6(0x762,0x7ea,0x7f0,0x6a7)+'\x20ketik\x20')+prefix+_0x11d0f9(0x5e1,0x5b9,0x6e5,0x65c),'©\x20'+ownername,siae,[_0x59b464],_0x52ceef);},-0x2379+0xf4d+0x1fe4),setTimeout(()=>{function _0x3e32f1(_0x5db404,_0x4bce6a,_0x2d9058,_0x28bd91){return _0x365ab2(_0x5db404-0x76,_0x4bce6a-0x107,_0x4bce6a,_0x2d9058-0x1bb);}const _0x29c735={'Swxgi':function(_0x39eafd,_0x425dd1){return _0x39eafd(_0x425dd1);},'HVlxK':'Sedang\x20ber'+'petualang,'+_0x3e32f1(0x55,0x1ff,0xe1,-0x41)+'tunggu...'};function _0x385fcf(_0x2e1cc5,_0x13a335,_0x762642,_0x539ee9){return _0x365ab2(_0x2e1cc5-0x172,_0x13a335-0xab,_0x13a335,_0x762642-0x1bc);}_0x29c735[_0x385fcf(0x34b,0x3aa,0x2ce,0x28d)](reply,_0x29c735[_0x385fcf(0xb2,0xb6,0xce,0x13b)]);},-0x16*0x7+-0x2233+0x22cd*0x1);}else{if(tempsa==='moobiens\x20g'+'rassland'){const _0x32d679={};_0x32d679[_0x365ab2(0x158,0x11e,0x1c3,0x158)]='get',bbbb=await getBuffer(_0x365ab2(0x1d2,-0x6f,0x17b,0xc0)+'legra.ph/f'+_0x365ab2(0xc5,0xef,0x22e,0xf9)+_0x5032bd(-0x15c,-0x19d,-0x217,-0x221)+_0x5032bd(-0xb9,-0x18e,0x43,-0x103),_0x32d679),setTimeout(()=>{const _0x238ac4={'GdVam':function(_0x1c070a,_0x2fea30){return _0x1c070a*_0x2fea30;},'LJkoZ':function(_0x3a84e8,_0x32a2ba,_0x47c0aa){return _0x3a84e8(_0x32a2ba,_0x47c0aa);},'sChzO':function(_0x29bfdd,_0x353834,_0x1e0423){return _0x29bfdd(_0x353834,_0x1e0423);},'tWxNo':function(_0x812640,_0x3455f5,_0x4543c0,_0x518709,_0x338f64,_0x2a4686,_0x4a53a6){return _0x812640(_0x3455f5,_0x4543c0,_0x518709,_0x338f64,_0x2a4686,_0x4a53a6);},'gFKym':_0x5580a4(0x609,0x4dd,0x521,0x495)+_0x13a156(0x249,0x2bf,0x197,0x1e5),'cZyaE':_0x13a156(0x1e3,0xa4,0xef,0x18a)},_0x52638b=Math['ceil'](_0x238ac4[_0x13a156(0x421,0x4f9,0x412,0x473)](Math['random'](),0x1f4e+-0x152*0x13+-0xe8*0x6)),_0x248901=Math[_0x5580a4(0x3e5,0x4ef,0x54a,0x5cb)](_0x238ac4['GdVam'](Math[_0x13a156(0x3be,0x26a,0x42d,0x2ab)](),-0x2*0x1bb+-0x4fa+-0x6d*-0x14));_0x238ac4[_0x5580a4(0x418,0x3cc,0x2d2,0x402)](addStone,sender,_0x52638b),_0x238ac4[_0x13a156(0x255,0x2cf,0x224,0x323)](addKayu,sender,_0x248901);function _0x5580a4(_0x119035,_0x58d183,_0x5abf63,_0x1b87f9){return _0x365ab2(_0x119035-0x149,_0x58d183-0x16e,_0x119035,_0x58d183-0x390);}const _0x388bfb={};function _0x13a156(_0x121134,_0x1ce27c,_0x1efa7d,_0x6106c0){return _0x5032bd(_0x121134-0x3f4,_0x6106c0,_0x1efa7d-0xc4,_0x6106c0-0xca);}_0x388bfb[_0x13a156(0x2f1,0x3e9,0x1ad,0x292)]=mek,_0x238ac4['tWxNo'](sendButImage,from,_0x13a156(0x2bc,0x25d,0x161,0x2d4)+'ation\x20🎊*'+enter+enter+(_0x13a156(0x345,0x363,0x310,0x1ff)+_0x5580a4(0x3b1,0x4b4,0x523,0x3b6))+_0x52638b+('*\x20batu\x20dan'+'\x20')+_0x248901+_0x5580a4(0x47f,0x3ae,0x4d8,0x411)+enter+enter+(_0x13a156(0x350,0x2ae,0x37f,0x378)+'ory\x20anda\x20d'+'engan\x20cara'+_0x13a156(0x2a5,0x26b,0x307,0x3e2))+prefix+_0x5580a4(0x428,0x373,0x3a3,0x47c),'©\x20'+ownername,bbbb,[{'buttonId':_0x13a156(0x394,0x428,0x396,0x391),'buttonText':{'displayText':_0x238ac4[_0x13a156(0x300,0x1fd,0x240,0x372)]},'type':_0x238ac4[_0x5580a4(0x258,0x314,0x1fc,0x32e)]}],_0x388bfb);},-0x230c+0x1d35+-0x383*-0x5),setTimeout(()=>{const _0x46cc33={'rujuN':function(_0x100bfa,_0x409224){return _0x100bfa(_0x409224);},'MmVSr':_0x150d97(0xff,0xfe,0x6c,0x51)+_0x58b9d4(0x170,0xb9,0x21,0x1bf)+_0x150d97(-0x11e,-0xa3,-0x125,0xf)+_0x150d97(-0x166,-0x23,-0x20e,-0xc5)};function _0x150d97(_0x199113,_0x5860e3,_0x26a98c,_0xeeb28c){return _0x5032bd(_0x199113-0x91,_0xeeb28c,_0x26a98c-0x1e9,_0xeeb28c-0x175);}function _0x58b9d4(_0x3b4b50,_0x1ee53e,_0x29fe86,_0x4171ed){return _0x5032bd(_0x1ee53e-0x103,_0x4171ed,_0x29fe86-0xcc,_0x4171ed-0x28);}_0x46cc33[_0x58b9d4(0x150,0xef,0x107,-0x64)](reply,_0x46cc33['MmVSr']);},-0x542*-0x7+-0x1*0x809+0x997*-0x3);}else{const _0x454382={};_0x454382[_0x365ab2(0x17c,0xad,0x107,0x158)]=_0x5032bd(-0xad,-0x1d6,-0x10f,-0x61),seae=await getBuffer('https://te'+_0x365ab2(0x1f5,0x126,0x138,0xf3)+_0x5032bd(-0x11c,-0x10f,-0x19c,-0x177)+_0x5032bd(-0x7b,-0x17f,-0x180,-0xfb)+'cffc2.jpg',_0x454382),tesk=_0x365ab2(-0xaa,0x129,0xf7,0x3a)+'AYAH\x20YANG\x20'+_0x5032bd(-0x16d,-0x1d9,-0x1a7,-0x1b2)+_0x5032bd(0x10,-0xae,-0xe3,-0x114)+_0x5032bd(0x51,0x54,-0x98,-0xc7)+_0x365ab2(0x163,0x140,0xbe,0xea)+_0x365ab2(-0x19b,-0x11d,-0xe5,-0xb8)+_0x365ab2(-0x1db,-0x15b,-0x7d,-0x92)+_0x365ab2(-0x79,-0x18f,-0x1b9,-0x158)+'land\x0a🟣\x20Ger'+'bil\x20Woods\x0a'+_0x365ab2(0x196,-0x31,0x17d,0x7b)+_0x365ab2(0x1d3,-0x73,0x1f0,0xb9)+_0x5032bd(0x88,-0x68,0x2,0x1d0)+_0x5032bd(-0xfc,-0x199,-0x23a,0x61)+_0x365ab2(0x1a0,0xa4,0xe7,0xa9)+_0x5032bd(-0x195,-0xdc,-0x21b,-0xab)+_0x5032bd(-0x1aa,-0xad,-0x296,-0x2b0)+'\x20'+prefix+(_0x5032bd(-0x21f,-0x2d6,-0x2c1,-0x2f0)+_0x5032bd(-0x21b,-0x1c2,-0x2eb,-0x369)+'er\x0a\x0aSumber'+_0x365ab2(-0xc0,0x28,0x7f,-0x58)+_0x5032bd(0x19,-0xcd,0x5b,-0xa)+'://www.fan'+_0x365ab2(0x4f,-0x12e,-0x6c,-0x101)+'nerators.c'+_0x5032bd(-0xa5,-0xb1,-0x180,-0x186)),alpha[_0x5032bd(-0xa8,0x84,-0x75,-0x3c)+'e'](from,seae,image,{'thumbnail':seae,'quoted':mek,'caption':tesk});}}}}}}}await gameAdd(sender,glimit);break;case _0x365ab2(0xe2,0x102,0x16a,0x39):const _0x58cf12={};_0x58cf12[_0x5032bd(-0x14c,-0x26e,-0xe,-0x202)+'t']=_0x365ab2(-0x1dd,-0x144,-0x1b7,-0x132)+'t';const _0x1db68e={};_0x1db68e[_0x5032bd(-0x25,0xc2,-0x6,0xce)]='limit',_0x1db68e[_0x5032bd(0x3c,0x17d,-0x9b,-0x1c)]=_0x58cf12,_0x1db68e[_0x365ab2(-0x171,0x49,-0x168,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x1db68e]);const _0x344c68={};_0x344c68[_0x5032bd(-0x14c,-0x286,-0x1e9,-0x1f1)+'t']=_0x365ab2(0x78,0xbd,0x1c1,0x8a);const _0x179ce6={};_0x179ce6[_0x5032bd(-0x25,0x46,-0x16e,0xe)]=_0x5032bd(0x6f,-0xe4,0xe2,0x2b),_0x179ce6[_0x365ab2(0xdc,0x216,0x1b3,0x111)]=_0x344c68,_0x179ce6[_0x365ab2(0x4a,0x4b,-0x184,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(-0x3b,-0x71,0x17f,0x70)](prefix),'©\x20'+ownername,[_0x179ce6]);setTimeout(()=>{function _0x453511(_0x312792,_0xdd4a40,_0x53d35a,_0x551de4){return _0x5032bd(_0x312792-0x691,_0xdd4a40,_0x53d35a-0x10d,_0x551de4-0x80);}const _0x45f447={'BYFfM':function(_0x4b6f1b,_0x398a80){return _0x4b6f1b*_0x398a80;},'ujZgn':function(_0x459cd8,_0x12a4f5,_0x467399){return _0x459cd8(_0x12a4f5,_0x467399);},'ymVch':function(_0x17db7e,_0x3686be){return _0x17db7e(_0x3686be);}},_0x1d37c8=Math['ceil'](_0x45f447[_0x453511(0x707,0x73e,0x7ba,0x6eb)](Math['random'](),-0x517+-0x1721+-0xe4e*-0x2));function _0x35c3ae(_0x1864ac,_0x3fec8a,_0x11ab28,_0x4163a1){return _0x365ab2(_0x1864ac-0xeb,_0x3fec8a-0x48,_0x11ab28,_0x4163a1- -0x89);}const _0x5df8f3=Math[_0x35c3ae(-0x37,-0x56,0x4a,0xd6)](Math[_0x453511(0x65b,0x66a,0x53c,0x6a1)]()*(0x1a0+0x99+-0x21b)),_0x457a37=Math[_0x453511(0x71b,0x718,0x63c,0x806)](_0x45f447['BYFfM'](Math[_0x453511(0x65b,0x542,0x742,0x766)](),-0x24cd+-0x3fc*0x8+-0x7*-0x9d1));addStone(sender,_0x1d37c8),_0x45f447['ujZgn'](addCoal,sender,_0x5df8f3),_0x45f447['ujZgn'](addOre,sender,_0x457a37),_0x45f447['ymVch'](reply,_0x35c3ae(-0xa,-0x133,-0xae,-0xec)+_0x35c3ae(0x5,0x34,-0x32,-0xd2)+enter+enter+(_0x35c3ae(-0x67,-0xe1,-0x19a,-0x1b1)+_0x35c3ae(-0xea,-0x13b,0x92,-0x2a))+_0x1d37c8+_0x35c3ae(-0x18,-0x263,-0x99,-0x14f)+_0x5df8f3+('*\x20coal\x20,\x20d'+'an\x20*')+_0x457a37+_0x453511(0x613,0x741,0x625,0x5b9));},-0x11a3+0x151a*-0x1+0x3275),setTimeout(()=>{function _0x456f06(_0x3c4f71,_0x13a458,_0x2a48c8,_0x557107){return _0x5032bd(_0x3c4f71-0x37a,_0x13a458,_0x2a48c8-0x5f,_0x557107-0x140);}function _0x5b0de8(_0x3c8f93,_0x1131c2,_0xc6fb9a,_0x4cbcd0){return _0x5032bd(_0x1131c2-0x76d,_0xc6fb9a,_0xc6fb9a-0x9c,_0x4cbcd0-0x155);}reply(_0x5b0de8(0x6d5,0x5bf,0x517,0x67f)+_0x456f06(0x1b4,0x97,0x238,0x159)+_0x5b0de8(0x704,0x710,0x6b1,0x5d3)+_0x5b0de8(0x6da,0x790,0x666,0x7fb));},0x1654*-0x1+0x1b0e+-0x5*0xf2),await gameAdd(sender,glimit);break;case _0x5032bd(-0x1e2,-0x11d,-0x119,-0xaf):const _0x258d2a={};_0x258d2a['displayTex'+'t']=_0x365ab2(-0x283,0xb,-0x1c8,-0x132)+'t';const _0xc10a3a={};_0xc10a3a[_0x5032bd(-0x25,-0x14c,0xed,-0x127)]=_0x5032bd(-0x49,-0x5a,0x73,-0x112),_0xc10a3a[_0x5032bd(0x3c,0xce,0xab,-0x53)]=_0x258d2a,_0xc10a3a[_0x365ab2(-0x1d2,-0x1fe,-0x12,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x365ab2(0x1c,0x25,-0x1d6,-0x12a)](prefix),'©\x20'+ownername,[_0xc10a3a]);const _0x466e5f={};_0x466e5f['displayTex'+'t']=_0x365ab2(0x133,-0xb2,0x10d,0x8a);const _0x311e83={};_0x311e83[_0x5032bd(-0x25,0x94,0xfe,-0xf9)]=_0x5032bd(0x6f,-0x8c,-0xeb,0x155),_0x311e83[_0x365ab2(-0x4a,0x1cc,0x99,0x111)]=_0x466e5f,_0x311e83[_0x365ab2(-0x1d,-0x145,-0x114,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,0xac,-0xe3,-0x94)](prefix),'©\x20'+ownername,[_0x311e83]);setTimeout(()=>{function _0x56de17(_0x12ad69,_0x16e0c8,_0x323f3a,_0x20f614){return _0x5032bd(_0x323f3a-0x517,_0x16e0c8,_0x323f3a-0xb5,_0x20f614-0x122);}const _0x117c97={'GoVGR':function(_0xdcd075,_0x4379eb){return _0xdcd075*_0x4379eb;},'herzi':function(_0x26615b,_0x2bf245,_0x4a6f01){return _0x26615b(_0x2bf245,_0x4a6f01);},'EGEYx':function(_0xb0e65a,_0x9688e2){return _0xb0e65a(_0x9688e2);}},_0x2dd337=Math[_0x56de17(0x5a8,0x6d4,0x5a1,0x6b3)](_0x117c97[_0x56de17(0x49c,0x2e2,0x3ad,0x413)](Math[_0x418bc0(0xd3,0x1d7,0x159,0xb2)](),-0x201a+0x2236+-0x208));_0x117c97['herzi'](addKayu,sender,_0x2dd337);function _0x418bc0(_0x21f19b,_0x2d0240,_0x3a2623,_0x57ac5b){return _0x5032bd(_0x3a2623-0x18f,_0x2d0240,_0x3a2623-0x9,_0x57ac5b-0xda);}_0x117c97[_0x418bc0(0x50,0x1b7,0x13d,0x5e)](reply,_0x56de17(0x32a,0x46d,0x3df,0x4a6)+'ation\x20🎊*'+enter+enter+(_0x418bc0(0x11c,0x2e7,0x1d5,0x271)+_0x56de17(0x50a,0x60f,0x566,0x4cf))+_0x2dd337+(_0x418bc0(0x2c2,0x203,0x1c0,0x307)+_0x418bc0(0x47,0x155,0x77,-0x9a)));},0x4*0x45d+0x2061+-0x261d),setTimeout(()=>{function _0x1a2aa8(_0x2815b5,_0x414359,_0x3e253a,_0x3022f7){return _0x5032bd(_0x3022f7-0x712,_0x414359,_0x3e253a-0x81,_0x3022f7-0xc9);}const _0x2f781c={'HpEPF':function(_0x128ef5,_0x34f1ee){return _0x128ef5(_0x34f1ee);},'IfduT':'Sedang\x20men'+'ambang,\x20si'+'lahkan\x20tun'+_0x1a2aa8(0x765,0x60a,0x604,0x735)};function _0x103614(_0x3eeb9a,_0x543e64,_0x4f9531,_0x5afb27){return _0x365ab2(_0x3eeb9a-0xe5,_0x543e64-0x1ee,_0x3eeb9a,_0x543e64- -0x51);}_0x2f781c[_0x1a2aa8(0x730,0x64d,0x6c9,0x737)](reply,_0x2f781c[_0x103614(0x9f,0xe4,0x68,0x236)]);},-0x1*0xeb3+0xd1+0x2*0x6f1),await gameAdd(sender,glimit);break;case _0x5032bd(-0x1a4,-0x2e2,-0x261,-0x129):const _0x261546={};_0x261546['displayTex'+'t']=_0x365ab2(-0xb9,-0xb0,-0xe3,-0x132)+'t';const _0x1d032a={};_0x1d032a[_0x5032bd(-0x25,0x8f,0x5d,-0x92)]='limit',_0x1d032a[_0x365ab2(0x9d,0x1f1,0x4,0x111)]=_0x261546,_0x1d032a[_0x5032bd(-0x1e7,-0x209,-0x22b,-0xa9)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x1d032a]);const _0x33fc21={};_0x33fc21[_0x5032bd(-0x14c,-0x231,-0x1d6,-0x64)+'t']='Event\x20On';const _0x45ef01={};_0x45ef01[_0x5032bd(-0x25,0xbc,-0x83,0xe9)]=_0x365ab2(0x113,0x253,0x85,0x144),_0x45ef01[_0x5032bd(0x3c,-0x44,0x13e,-0xc0)]=_0x33fc21,_0x45ef01['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(-0x7d,0xce,0x1a9,0x70)](prefix),'©\x20'+ownername,[_0x45ef01]);setTimeout(()=>{const _0x54f449={'nWWRp':_0x1d307f(0x141,0x339,0x120,0x20e),'GJRGu':'mars','BCmId':_0x5df069(0x92,0x16c,0x123,0x46),'SBQvI':_0x1d307f(0x1af,0x251,0x4d,0x199),'hoGKv':'uranus','FiorL':function(_0x357685,_0x493199){return _0x357685*_0x493199;},'MtJLm':function(_0x4fbe28,_0x91de64){return _0x4fbe28(_0x91de64);}},_0x1007cc=Math[_0x1d307f(0x2a3,0x4c9,0x28b,0x383)](Math[_0x1d307f(0x3af,0x2c4,0x40a,0x2c3)]()*(0x49*0x4e+0x1*-0x1def+0x1*0x815)),_0x474f04=[_0x54f449[_0x5df069(-0x98,0x20f,0xc2,0x17c)],_0x5df069(0x2af,0x4e,0x174,0x203),_0x54f449[_0x1d307f(0x144,0x2be,0xf7,0x235)],_0x54f449[_0x5df069(-0x77,0x19c,0xad,-0x7d)],_0x5df069(0x1af,0x165,0xb5,0x1b7),_0x54f449[_0x1d307f(0x15d,0x2bb,0xc2,0x1c7)],_0x54f449['hoGKv']];function _0x1d307f(_0x4f42ab,_0x59d91f,_0x1cc931,_0x41aef1){return _0x5032bd(_0x41aef1-0x2f9,_0x59d91f,_0x1cc931-0x18d,_0x41aef1-0xce);}function _0x5df069(_0xcca22d,_0x16609b,_0x2b6675,_0x141819){return _0x5032bd(_0x2b6675-0x1e9,_0x141819,_0x2b6675-0x147,_0x141819-0xd7);}const _0x29698e=_0x474f04[Math[_0x1d307f(0x371,0x26e,0x21a,0x342)](_0x54f449['FiorL'](Math[_0x5df069(0x1d4,0xdd,0x1b3,0x159)](),_0x474f04['length']))];addPlanet(sender,_0x1007cc),_0x54f449['MtJLm'](reply,'*Congratul'+_0x1d307f(0x118,0x97,0x236,0x1db)+enter+enter+(_0x5df069(0x19b,0x316,0x22f,0x21e)+_0x5df069(0x10f,0x33e,0x238,0x12c))+_0x1007cc+(_0x1d307f(0x419,0x1df,0x1ed,0x2db)+_0x5df069(0x1a3,0x1f3,0xe1,-0x76))+_0x29698e+('*\x20selama\x202'+_0x5df069(0x11b,0x3a3,0x253,0x37d)));},-0x39c+-0x27*0xb+0x1101),setTimeout(()=>{const _0x18d80e={'SUwnE':function(_0x1aebab,_0xe3239d){return _0x1aebab(_0xe3239d);},'WVyXi':'Sedang\x20ber'+_0x5d5de6(0x9e,0x69,0xa2,0xc9)+_0x5d5de6(0x1b7,0x4a,0x119,-0x2a)+'nggu...\x202\x20'+_0x47b75e(0x2d9,0x1a4,0x1d3,0x296)};function _0x5d5de6(_0xb7caae,_0x265a7a,_0x28f902,_0x13aa97){return _0x365ab2(_0xb7caae-0x67,_0x265a7a-0xad,_0xb7caae,_0x28f902-0x19d);}function _0x47b75e(_0x3d734b,_0xe76175,_0x426cd1,_0x4fe0ec){return _0x365ab2(_0x3d734b-0xf6,_0xe76175-0x12e,_0x3d734b,_0xe76175-0x53);}_0x18d80e[_0x5d5de6(0x84,0x2fe,0x1dd,0x337)](reply,_0x18d80e['WVyXi']);},0x26aa+0x4ca+-0x2b74),await gameAdd(sender,glimit);break;case'jualbahank'+_0x365ab2(0x1c1,0x140,0x21,0x90):const _0x39c423={};_0x39c423['displayTex'+'t']=_0x5032bd(-0x207,-0x16e,-0x34d,-0x297)+'t';const _0x3dbeb2={};_0x3dbeb2[_0x365ab2(0x1a0,-0x3f,-0x2e,0xb0)]=_0x5032bd(-0x49,0xb,0x6,-0x191),_0x3dbeb2['buttonText']=_0x39c423,_0x3dbeb2[_0x365ab2(-0x3,-0x17b,-0x8e,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0x1c0,-0x309,-0x27c)](prefix),'©\x20'+ownername,[_0x3dbeb2]);const _0x305f50={};_0x305f50[_0x5032bd(-0x14c,-0x2c,-0x66,-0x1c)+'t']=_0x365ab2(0xe4,-0x5b,0xec,0x8a);const _0x4d0f64={};_0x4d0f64[_0x365ab2(0x202,0xa,0x169,0xb0)]=_0x5032bd(0x6f,0x165,-0x7b,-0xe8),_0x4d0f64[_0x5032bd(0x3c,-0x88,-0xdf,0x189)]=_0x305f50,_0x4d0f64['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(0x143,-0x4d,-0xd,0x70)](prefix),'©\x20'+ownername,[_0x4d0f64]);buayar=body[_0x5032bd(-0x102,0x29,-0x122,-0x210)](-0xb*-0x247+-0xb5*0x1+-0x38*0x6f);const hargakimia=-0x6dd*0x4+-0xa*0x25f+-0x85*-0x6a,dapetin=buayar*hargakimia;if(getBertualangPlanet(sender)<=0x7e8+0x6*-0x14e+-0x13)return reply(_0x365ab2(-0x114,-0x1f0,-0x16f,-0x100)+pushname+('\x20kamu\x20tida'+'k\x20punya\x20ba'+_0x5032bd(-0x1b9,-0x291,-0x1a6,-0x23d)));getBertualangPlanet(sender)>=-0xd48+0x12d3*0x1+-0x2*0x2c5&&(jualbahankimia(sender,buayar),addKoinUser(sender,dapetin),await reply(_0x5032bd(0x32,0x1b,0xf4,-0x97)+'AN\x20BERHASI'+'L\x20」*'+enter+enter+(_0x365ab2(-0x24c,-0x159,-0x272,-0x144)+_0x365ab2(-0xce,0x51,-0x196,-0x108)+_0x5032bd(-0x177,-0x2cc,-0xa0,-0x28b))+buayar+enter+(_0x5032bd(-0xd6,-0x11,-0x99,0x3)+_0x365ab2(0x1ae,-0x68,0x22,0xcb))+dapetin+enter+enter+(_0x365ab2(0xd,0x5b,0x1b6,0xcd)+_0x5032bd(-0x7,-0x35,-0x82,-0x16))+getBertualangPlanet(sender)+enter+(_0x365ab2(0x234,0x64,0x1d9,0xfd)+_0x5032bd(-0x44,-0x185,-0xc,-0x14e))+checkATMuser(sender)+enter+enter+(_0x5032bd(-0xac,-0x110,-0x15e,-0xe0)+'berhasil\x20d'+_0x5032bd(-0x80,-0x137,0x69,-0x1d9)+_0x365ab2(-0xd5,0x135,0x4,0x35)+_0x365ab2(0xf6,-0xbb,0x5e,0x61)+_0x365ab2(-0x223,-0x20c,-0x1d8,-0x141))));await gameAdd(sender,glimit);break;case'sisabahank'+_0x5032bd(-0x45,0x103,-0x41,-0x165):teks=_0x365ab2(0xf,-0x135,-0x290,-0x144)+_0x5032bd(0x17,-0xe1,0x22,0x5c)+_0x365ab2(0x4d,-0x113,-0x216,-0xf7)+_0x5032bd(0x3f,-0x1d,-0xbb,-0x106)+pushname+(_0x365ab2(0x171,-0x41,0xd5,0x109)+_0x5032bd(0x66,0xea,-0x7e,0x5e))+getBertualangPlanet(sender)+'_*';const _0x1f3256={};_0x1f3256['quoted']=mek,alpha[_0x5032bd(-0xa8,-0x205,0x4d,-0x1a7)+'e'](from,teks,text,_0x1f3256);break;case _0x365ab2(0x1b,-0x96,-0xf5,-0xa):case _0x5032bd(-0x157,-0x1a4,-0x1c6,-0x1b9):const _0x3eeda0={};_0x3eeda0[_0x365ab2(-0x55,-0x1cc,-0x5,-0x77)+'t']=_0x365ab2(-0x17f,-0x64,0xb,-0x132)+'t';const _0x2a82ad={};_0x2a82ad[_0x5032bd(-0x25,-0xd9,-0x57,-0x86)]=_0x5032bd(-0x49,-0x81,0xa0,0xf0),_0x2a82ad[_0x5032bd(0x3c,0xa5,-0x52,0x5e)]=_0x3eeda0,_0x2a82ad[_0x365ab2(-0x1c9,-0x244,-0x103,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0x28c,-0x263,-0xa8)](prefix),'©\x20'+ownername,[_0x2a82ad]);const _0x374ac5={};_0x374ac5[_0x365ab2(0x63,0xdc,-0xf5,-0x77)+'t']=_0x365ab2(0x108,0x1e0,-0x49,0x8a);const _0x3a005b={};_0x3a005b[_0x5032bd(-0x25,-0x119,0x107,0xde)]=_0x5032bd(0x6f,0x96,0x1b,0x18f),_0x3a005b[_0x5032bd(0x3c,0x6,0xab,0xae)]=_0x374ac5,_0x3a005b[_0x5032bd(-0x1e7,-0x12b,-0x206,-0x118)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,0x81,0xe7,0xe1)](prefix),'©\x20'+ownername,[_0x3a005b]);cas=q;if(checkATMuser(sender)<cas)return reply('Uang\x20mu\x20ti'+_0x5032bd(-0x2a,-0x1c,0xc3,-0x79)+_0x365ab2(0x15e,0x19,0x90,0x13)+_0x5032bd(-0x1f2,-0x156,-0x2ea,-0x201)+_0x5032bd(-0xdf,-0x22b,-0x13,-0x33));if(args[_0x365ab2(-0x127,-0x198,-0x232,-0x130)]<0xac6+0xfa3+-0x1a68)return reply(_0x365ab2(0xdb,0x130,0x123,0x5e)+_0x5032bd(-0x71,-0x82,0x34,0xec));if(isNaN(cas))return reply(_0x5032bd(-0xb1,-0x45,-0x1f0,-0x15d)+'n\x20berapa?');const resg=['Kamu\x20MENAN'+'G!!',_0x5032bd(0x5b,-0xdf,-0x10,0x4a)+'!!'];bayar=confirmATM(sender,cas),setTimeout(()=>{function _0x5f47cf(_0x32325b,_0x1b2294,_0x171740,_0x56c5b6){return _0x365ab2(_0x32325b-0x10,_0x1b2294-0x17a,_0x56c5b6,_0x1b2294-0x5d);}const _0x430d68={'MIOXs':function(_0xa07f0b,_0x38e21c){return _0xa07f0b(_0x38e21c);},'Yfnkq':_0x5f47cf(0x45,0x1a0,0x2ca,0xab)+_0x3eb8ba(0x366,0x2af,0x17b,0x28c)+'\x20silahkan\x20'+_0x3eb8ba(0x1ef,0x102,0x14b,0x1df),'hiDUK':function(_0x3a0ff9,_0x2300fd){return _0x3a0ff9(_0x2300fd);},'BKzkb':function(_0x168328,_0x4a3a8c){return _0x168328(_0x4a3a8c);},'InQCx':function(_0x484e48,_0x338178){return _0x484e48*_0x338178;},'IzMhc':function(_0xab8241,_0x2cfc73){return _0xab8241+_0x2cfc73;},'DqyGe':function(_0x30864b,_0x139c1d){return _0x30864b*_0x139c1d;},'derLz':function(_0xade31e,_0xb794a){return _0xade31e==_0xb794a;},'dBooj':'Kamu\x20MENAN'+_0x3eb8ba(0xa7,0x19e,0x2e8,0x1a2),'nqpOd':function(_0x3fdaff,_0x6a436){return _0x3fdaff!==_0x6a436;},'NWSVh':'JYjmN','mweCP':function(_0x2befe9,_0x32bfdd,_0x3eaf7e){return _0x2befe9(_0x32bfdd,_0x3eaf7e);},'uqjbG':'Kamu\x20KALAH'+'!!','ZRlOi':function(_0x1c4119,_0x1b0ce5){return _0x1c4119!==_0x1b0ce5;},'fyaxT':_0x3eb8ba(0x2e8,0x2fe,0x202,0x3e1),'vPQSK':function(_0x2803e7,_0x399fa4){return _0x2803e7(_0x399fa4);},'BSddx':_0x3eb8ba(0x24a,0x339,0x2b1,0x3df)};function _0x3eb8ba(_0x9d0cd7,_0x3a9b10,_0xd6f08a,_0x53a6a1){return _0x5032bd(_0x3a9b10-0x2f9,_0xd6f08a,_0xd6f08a-0x1cf,_0x53a6a1-0x161);}const _0x43aca3=Math[_0x5f47cf(0x177,0x1bc,0x14d,0xdc)](_0x430d68[_0x5f47cf(0xec,0x115,0x120,0x270)](Math[_0x5f47cf(0xb1,0xfc,0x1e7,0x121)](),-0x18d1+0x82b+0x10a8*0x1)),_0x44e59c=_0x430d68['IzMhc'](cas,0xf*-0x3d+0x1f50+-0x1bbd),_0x39c983=resg[Math[_0x5f47cf(0x1a9,0x17b,0x3f,0x24f)](_0x430d68['DqyGe'](Math[_0x5f47cf(0x1ba,0xfc,0x27,-0x5d)](),resg[_0x3eb8ba(0x133,0xf4,0x1e1,0x139)]))];if(_0x430d68[_0x3eb8ba(-0x4b,0xef,0x134,0xd7)](_0x39c983,_0x430d68[_0x5f47cf(0x1c,0x72,0x60,0x4e)]))_0x430d68[_0x5f47cf(-0xa4,-0xd2,-0x4,0x84)](_0x430d68[_0x5f47cf(0x27e,0x139,0x29,0x157)],_0x430d68[_0x5f47cf(0x294,0x139,0x192,0x1bf)])?_0x430d68[_0x5f47cf(0x144,0x17a,0x100,0x110)](_0x55cb54,_0x430d68[_0x5f47cf(0xc4,0xd9,0x119,0x6f)]):(_0x430d68[_0x3eb8ba(0x415,0x2bb,0x1c3,0x330)](addKoinUser,sender,_0x44e59c),reply('*Congratul'+'ation\x20🎊*'+enter+enter+(_0x3eb8ba(0x98,0xd3,0x80,0x0)+_0x5f47cf(-0xa5,0xa2,0x3e,0xe)+_0x5f47cf(0x91,-0x10,-0xe7,-0xd9)+_0x5f47cf(0x139,0x1b9,0x2db,0x171))+_0x44e59c+'_*'+enter+enter+(_0x5f47cf(-0x1b,-0xc6,-0x1f6,-0x3e)+_0x3eb8ba(0x354,0x293,0x375,0x1c0)+'\x20membeli\x20l'+_0x3eb8ba(0x3b3,0x369,0x27e,0x486))));else _0x39c983==_0x430d68[_0x3eb8ba(0x2bf,0x1b6,0x153,0x8c)]?_0x430d68[_0x3eb8ba(0x2c9,0x271,0x325,0x27f)](_0x430d68['fyaxT'],_0x3eb8ba(0x1c2,0x2fe,0x40e,0x1ba))?_0x430d68['hiDUK'](_0x50f670,_0x5f47cf(0xb6,0x1a0,0x1e4,0x246)+_0x3eb8ba(0x25f,0x2af,0x1e5,0x337)+_0x3eb8ba(0xe7,0x14a,0x17c,0x29c)+_0x3eb8ba(0x13b,0x102,0x20a,0x141)):(confirmATM(sender,cas),_0x430d68[_0x5f47cf(0xb4,0x66,0x183,-0x2)](reply,_0x3eb8ba(0xe8,0x172,0x21b,0x28d)+'\x20🥺\x20dan\x20keh'+_0x3eb8ba(0x3ae,0x2f5,0x1e8,0x3f5)+'ng\x20sebesar'+'\x20'+cas)):_0x5f47cf(0x54,0x136,0xf3,0x249)===_0x5f47cf(-0x19e,-0x88,-0x109,0x18)?_0x430d68[_0x5f47cf(0x10d,0x76,-0x2e,0x5)](_0xca0681,_0x3eb8ba(0x24d,0x249,0x2ad,0x14b)+'ggunaan\x20#t'+_0x3eb8ba(0x462,0x34d,0x385,0x366)+_0x3eb8ba(0x22c,0x378,0x476,0x234)+_0x5f47cf(0x1d,0xb8,-0x70,0xe7)+_0x3eb8ba(0x2ee,0x201,0x302,0x29f)+_0x3eb8ba(0x13c,0x222,0xcc,0x259)+'hkan\x20cek\x20k'+_0x5f47cf(-0x10e,-0x6c,-0x157,0x6b)+'\x20ketik\x20#ko'+_0x5f47cf(-0x10b,-0x53,-0x84,-0xbb)):reply(_0x430d68[_0x3eb8ba(0x222,0x296,0x399,0x318)]);},-0x1*-0x298+-0x2*-0xa79+-0xbd2),setTimeout(()=>{function _0x13e6cf(_0x1774d8,_0x218632,_0x158972,_0x5715e0){return _0x5032bd(_0x218632-0x7ce,_0x158972,_0x158972-0xce,_0x5715e0-0x191);}reply('Menunggu\x20h'+_0x13e6cf(0x933,0x84c,0x899,0x754));},0x10d1+0x2*0xd0d+0x1*-0x2aeb),await gameAdd(sender,glimit);break;case'inv':case _0x365ab2(0x7b,0x94,-0x31,-0x5):case _0x5032bd(-0xf2,-0x128,-0xa2,-0x20f):{try{pp_userb=await alpha['getProfile'+_0x5032bd(-0x209,-0x166,-0x157,-0x2c6)](sender);}catch{pp_userb=_0x365ab2(0x17a,-0x32,0x83,0xb2)+_0x365ab2(0x14a,-0x108,0x136,0x3e)+_0x5032bd(-0x1ea,-0x2bd,-0xb9,-0x206)+_0x5032bd(-0x15f,-0x92,-0x28e,-0x238)+'g';}let pp_userz=await getBuffer(pp_userb);inventory=_0x5032bd(-0x16b,-0xbb,-0x1c3,-0x2c)+_0x365ab2(0x26e,0xb1,0xa7,0x133)+_0x365ab2(0x12b,0x1b9,0x134,0x10e)+_0x365ab2(-0x162,0xe3,-0x159,-0x53)+getMiningcoal(sender)+(_0x5032bd(-0x78,0x0,-0x5f,-0x139)+_0x365ab2(-0xf7,0x1,0x58,-0x5a))+getMiningstone(sender)+(_0x5032bd(0x4e,0x178,0x46,-0xa7)+_0x5032bd(-0x166,-0x278,-0x173,-0x13f))+getMiningore(sender)+(_0x365ab2(0x129,0x110,0x33,0x10)+_0x365ab2(0x14f,-0x40,0xc5,0x2a))+getMiningingot(sender)+(_0x365ab2(0xa1,-0x53,-0x189,-0x79)+':\x20')+getNebangKayu(sender)+(_0x365ab2(0x115,0x199,0x1d6,0x137)+':\x20')+getMancingIkan(sender)+(_0x365ab2(0x266,0x16d,0x1d1,0x134)+_0x5032bd(-0x1d8,-0x168,-0x253,-0x1f5)+_0x365ab2(-0x15a,-0x18d,-0x1d,-0xe9)+_0x5032bd(-0x10f,-0x47,-0x61,-0x1e7)+_0x5032bd(0x50,0x4f,0x106,0x150)+'nyak\x20inven'+'tory'),alpha[_0x365ab2(0x70,-0x33,0x6b,0x2d)+'e'](from,pp_userz,image,{'thumbnail':Buffer['alloc'](-0x920+0x185a+-0x2*0x79d),'quoted':mek,'caption':inventory});}break;case _0x365ab2(0x140,0x1e9,0x8c,0xa4):kodenyab='Kode\x20bahas'+_0x365ab2(-0x24,0xb8,0x9,-0x57)+_0x365ab2(0x145,-0x18,0x190,0xc9)+_0x365ab2(0x15,0x35,0x12,-0xfe)+'\x20\x20\x20\x20\x20\x20\x20\x20Al'+'banian\x0a\x20\x20\x20'+'\x20ar\x20\x20\x20\x20\x20\x20\x20'+'\x20Arabic\x0a\x20\x20'+_0x5032bd(0x9,0x6b,-0x98,0x10d)+_0x5032bd(-0x1dc,-0x2d9,-0xa4,-0x9b)+'\x0a\x20\x20\x20\x20ca\x20\x20\x20'+_0x365ab2(0x58,0x1b8,0x7,0xbb)+'an\x0a\x20\x20\x20\x20zh\x20'+_0x365ab2(0x27,-0x16,-0x43,0x68)+_0x365ab2(0x1c5,0xd3,-0x68,0x98)+_0x5032bd(-0x18e,-0x84,-0x1b4,-0x1cb)+_0x365ab2(-0x4,-0xc7,-0x133,-0xb6)+_0x365ab2(-0x228,-0x66,-0x251,-0x11f)+_0x5032bd(0x4b,-0x2f,-0xef,0x16e)+_0x5032bd(0x3,-0xc9,0x91,-0xdb)+_0x5032bd(-0xa9,-0x157,0x82,-0x1a3)+_0x5032bd(-0x215,-0x21a,-0xcd,-0x2fe)+'Chinese\x20(C'+_0x365ab2(-0x70,-0x14f,-0x15c,-0xeb)+_0x365ab2(0xf3,0xaf,-0x86,0xca)+_0x365ab2(0xa4,0x8a,-0xfe,-0x70)+_0x365ab2(-0xc,-0x138,0x37,-0x7f)+_0x5032bd(-0x129,-0xfc,0x18,-0x1f6)+'ch\x0a\x20\x20\x20\x20da\x20'+_0x5032bd(0x21,0x133,0x17c,-0xbf)+'ish\x0a\x20\x20\x20\x20nl'+_0x365ab2(-0x68,0x1a2,-0xaf,0x50)+_0x365ab2(-0xf7,-0x15f,-0xfa,-0x32)+_0x365ab2(-0xf,0x109,0x48,0x20)+_0x5032bd(0x75,0xc4,-0x70,0xec)+_0x5032bd(-0x1bf,-0xc9,-0xcc,-0xd3)+_0x5032bd(-0xc7,0x55,-0x1e5,-0xbf)+_0x365ab2(0x284,0x25d,0x16e,0x13c)+_0x365ab2(-0x138,-0x1f8,-0x95,-0xbf)+_0x365ab2(0x181,0x30,0xb0,0x118)+_0x365ab2(-0x5,0x34,0x1a3,0xa8)+_0x5032bd(-0x6,-0x27,-0x164,-0x12)+_0x365ab2(-0x18a,-0x192,0x103,-0x4d)+'\x20\x20\x20English'+_0x365ab2(-0xc1,0x8a,0x58,0x3)+'tates)\x0a\x20\x20\x20'+'\x20eo\x20\x20\x20\x20\x20\x20\x20'+_0x5032bd(-0x1a8,-0x171,-0x101,-0x14b)+_0x365ab2(-0xf1,-0x16f,-0x24b,-0x154)+_0x365ab2(0x2,0x213,0x1a3,0xfc)+_0x365ab2(-0x38,-0x1fc,-0x41,-0xff)+_0x365ab2(0x11d,0xb2,0x18a,0x89)+_0x365ab2(-0x1aa,-0x131,0x74,-0xcd)+_0x365ab2(0x110,0x222,0xe9,0x113)+_0x5032bd(-0x223,-0x1b5,-0x204,-0x284)+_0x365ab2(-0xb4,-0x4f,0xc2,-0x62)+_0x365ab2(0x98,-0x186,-0x139,-0x48)+'t\x20\x20\x20\x20\x20\x20\x20\x20H'+_0x5032bd(-0x222,-0x169,-0x2a8,-0x163)+_0x365ab2(-0x5a,-0x1f4,-0x48,-0xd8)+_0x365ab2(-0x1c3,-0x63,0x0,-0x12e)+'ndi\x0a\x20\x20\x20\x20hu'+'\x20\x20\x20\x20\x20\x20\x20\x20Hu'+_0x5032bd(-0xf9,-0x210,0x22,0x1c)+_0x5032bd(-0xec,-0xbd,-0x1c2,-0x1ce)+_0x365ab2(0x45,0x169,0x117,0x104)+'c\x0a\x20\x20\x20\x20id\x20\x20'+'\x20\x20\x20\x20\x20\x20Indo'+_0x365ab2(0x160,0xf0,0x28b,0x150)+_0x5032bd(-0x1e9,-0x2b6,-0x156,-0x1c5)+'\x20Italian\x0a\x20'+_0x365ab2(-0xaa,-0xbf,-0x162,-0x93)+'\x20\x20\x20Japanes'+_0x5032bd(-0x218,-0x1c4,-0x258,-0x125)+_0x365ab2(-0x1de,-0x20b,-0x3c,-0x127)+_0x5032bd(-0xf,0x9a,-0x13e,-0xf8)+'\x20\x20\x20\x20\x20\x20\x20Lat'+_0x365ab2(0xed,0xcb,-0x3c,0x2f)+'\x20\x20\x20\x20\x20\x20\x20Lat'+_0x5032bd(-0x55,0x68,-0x16c,-0x9d)+_0x365ab2(-0x21f,-0x17a,-0x193,-0xd4)+'acedonian\x0a'+'\x20\x20\x20\x20no\x20\x20\x20\x20'+_0x365ab2(0xbc,-0x5,0x6d,-0x61)+_0x365ab2(0x6,0x1a5,0x13b,0x12f)+'\x20\x20\x20\x20\x20\x20\x20\x20Po'+_0x365ab2(-0x6e,0x14e,0xdb,0xa0)+_0x365ab2(-0x34,-0xbb,-0x147,-0x11)+_0x365ab2(-0x5d,0x22,0x166,0x79)+_0x365ab2(-0x48,-0x11f,0xfa,0x0)+_0x365ab2(-0x276,-0x112,-0x11c,-0x152)+'uese\x20(Braz'+_0x365ab2(0x176,0x208,0x22c,0x12e)+_0x5032bd(-0x197,-0x1ee,-0x2da,-0x2a6)+_0x5032bd(-0x4f,-0x27,-0x17a,0x4b)+_0x5032bd(0x44,-0x80,0x82,0x197)+_0x5032bd(-0x170,-0x1aa,-0x242,-0x21e)+'\x20\x20\x20sr\x20\x20\x20\x20\x20'+'\x20\x20\x20Serbian'+'\x0a\x20\x20\x20\x20sk\x20\x20\x20'+(_0x365ab2(0xe,0xd4,0xa,-0x60)+_0x365ab2(-0x4f,-0x14,0x14a,0x59)+_0x5032bd(-0x1de,-0x2f9,-0x204,-0x21f)+_0x365ab2(0xb9,-0xff,0xc3,-0x56)+_0x365ab2(-0x3a,-0xb9,-0xba,-0x45)+_0x5032bd(0x26,0x0,0xb6,0x13b)+_0x365ab2(0x198,0x277,0x17a,0x12a)+_0x365ab2(0x1a5,-0x74,0x200,0xba)+'anish\x20(Uni'+_0x365ab2(0x8b,-0x10,-0xc,-0xc)+')\x0a\x20\x20\x20\x20sw\x20\x20'+'\x20\x20\x20\x20\x20\x20Swah'+'ili\x0a\x20\x20\x20\x20sv'+_0x5032bd(-0x163,-0x249,-0x128,-0x2a9)+_0x5032bd(-0x1b3,-0xf2,-0x122,-0x193)+_0x5032bd(-0xc8,-0x110,0x7e,-0x1ca)+_0x5032bd(-0x53,-0xe3,0x4,0xf9)+_0x365ab2(0xb3,-0x9c,-0x45,-0x5b)+_0x365ab2(0x1f1,-0x11,0x27,0x121)+_0x5032bd(-0x10c,-0x188,-0x88,0x44)+_0x5032bd(-0x69,-0x65,0x6e,-0x2f)+_0x365ab2(-0x57,-0x5d,0x1c9,0xac)+_0x5032bd(-0x214,-0x156,-0x2a3,-0x2a1)+_0x365ab2(0xd5,0x137,-0x37,0x108)+'\x20\x20\x20\x20\x20\x20Wels'+_0x5032bd(-0xd4,-0x76,0x13,-0x18c)),reply(kodenyab);break;case _0x5032bd(-0x9e,0x1d,-0x1f3,-0x43):const _0x1836ea={};_0x1836ea[_0x365ab2(-0x147,0xa5,-0x15a,-0x2e)]=mek;if(args[_0x5032bd(-0x205,-0x18d,-0x1ae,-0x2ab)]<0x1092+0xd*0xe6+-0x1c3f)return alpha[_0x365ab2(-0x8,0x14e,-0x45,0x2d)+'e'](from,_0x5032bd(-0x70,0xd0,0x24,0xe)+_0x5032bd(0x13,0x14f,0x11a,0x27)+_0x365ab2(-0x3d,-0xca,-0xd6,-0x59),text,_0x1836ea);kodenya=['af','sq','ar','hy','ca','zh',_0x365ab2(-0xca,-0xe9,-0x1cd,-0xf0),_0x365ab2(0x2,-0x7,0x1d3,0xd7),'zh-yue','hr','cs','da','nl','en','en-au','en-uk','en-us','eo','fi','fr','de','el','ht','hi','hu','is','id','it','ja','ko','la','lv','mk','no','pl','pt',_0x365ab2(0x106,0xe7,0x214,0x10b),'ro','ru','sr','sk','es',_0x5032bd(-0xae,-0x5,0x1,0x64),_0x365ab2(0x1db,0x1aa,0x181,0x12b),'sw','sv','ta','th','tr','vi','cy'];try{const gtts=require(_0x5032bd(-0x1f1,-0x234,-0x208,-0x2f3))(args[0x4bd*-0x7+0x113e*-0x1+-0x3269*-0x1]),_0x358edc={};_0x358edc[_0x365ab2(-0xd2,0x126,0xcf,-0x2e)]=mek;if(args['length']<-0x1d17+-0x1*0x117d+0x2e96)return alpha['sendMessag'+'e'](from,_0x5032bd(-0xbe,0x87,-0x212,-0xe6)+_0x5032bd(-0x1c2,-0x116,-0x24b,-0xcc),text,_0x358edc);dtt=body[_0x365ab2(-0x26,-0x16a,-0x108,-0x2d)](-0x1*-0x1004+-0x4ee*0x1+-0x1*0xb0d),ranm=getRandom(_0x5032bd(-0x109,-0x1d3,-0x1d,-0x1e2)),rano=getRandom(_0x365ab2(-0x205,-0x204,-0x15d,-0x11e)),dtt[_0x365ab2(-0x26c,-0x116,-0x262,-0x130)]>-0x20e4+0x19c2+0x97a?reply(_0x5032bd(0x6c,0x4b,-0x46,0x4b)+_0x5032bd(-0x1a5,-0x12f,-0x2ef,-0xcb)+'m'):gtts[_0x365ab2(-0x177,-0x17c,-0x15b,-0xa5)](ranm,dtt?dtt:'id',function(){const _0x2d778a={'ngisL':function(_0x6336eb,_0x20d80c){return _0x6336eb*_0x20d80c;},'htUTO':function(_0x214be1,_0x2a9d54){return _0x214be1*_0x2a9d54;},'fBwvI':function(_0x5c43d0,_0x67a90,_0x2f88af){return _0x5c43d0(_0x67a90,_0x2f88af);},'KkeeH':function(_0x25e50d,_0xe37be4,_0x1b22a2){return _0x25e50d(_0xe37be4,_0x1b22a2);},'EVGmg':function(_0x3ec61b,_0x4023e2,_0x5d8da8){return _0x3ec61b(_0x4023e2,_0x5d8da8);},'riKDc':function(_0x4afafc,_0x1ec66b){return _0x4afafc(_0x1ec66b);},'UZEiQ':function(_0x205315,_0x5a2302){return _0x205315!==_0x5a2302;},'APJcu':_0x2262d9(0x4b,0x2e6,0x1a2,0x19c),'ZpRou':_0x2262d9(0x312,0x166,0x132,0x220),'VYeij':'Gagal\x20om:('};function _0x2262d9(_0x1b79a2,_0x4fcfba,_0x352a4f,_0x1aa52c){return _0x365ab2(_0x1b79a2-0xee,_0x4fcfba-0x5,_0x352a4f,_0x1aa52c-0xe8);}function _0x571a75(_0x2c533e,_0x545336,_0xda2b93,_0x4d1e0d){return _0x5032bd(_0x545336-0x1a6,_0xda2b93,_0xda2b93-0x15c,_0x4d1e0d-0x87);}_0x2d778a[_0x571a75(0x17,0x159,0x29f,0xc4)](exec,_0x2262d9(0x103,-0x47,-0x17,0xcd)+ranm+(_0x571a75(0x4f,0x6b,0xce,-0x9)+'\x20-vn\x20-c:a\x20'+_0x571a75(0x120,0x152,0x6a,0x1dc))+rano,_0x309ec3=>{function _0x330706(_0x181f0a,_0x43c4b8,_0x71f174,_0xeeca26){return _0x571a75(_0x181f0a-0x90,_0xeeca26-0x3c,_0x43c4b8,_0xeeca26-0x124);}function _0x5f4da6(_0x5da112,_0x1e424d,_0x44cddf,_0x32d771){return _0x571a75(_0x5da112-0x75,_0x5da112-0xb4,_0x1e424d,_0x32d771-0x20);}if(_0x2d778a[_0x330706(0x11a,0x84,0x12d,0xec)](_0x2d778a[_0x330706(0x278,0x184,0x1b0,0x15c)],_0x2d778a[_0x330706(0x65,0x2b4,0xe6,0x1bc)])){const _0x32ebd2=_0x330706(0x1ef,0x2d4,0xb9,0x1d4)[_0x330706(0x1b1,0x2fc,0x20f,0x19f)]('|');let _0x300475=-0x1*-0x171b+0x2623+-0x3d3e;while(!![]){switch(_0x32ebd2[_0x300475++]){case'0':if(_0x309ec3)return reply(_0x2d778a[_0x5f4da6(0x90,-0x72,0x8e,-0x25)]);continue;case'1':buff=fs['readFileSy'+'nc'](rano);continue;case'2':fs[_0x330706(0x12d,-0x1d,0xb0,0xd1)](rano);continue;case'3':fs['unlinkSync'](ranm);continue;case'4':const _0xfd9a4={};_0xfd9a4[_0x330706(0x132,-0x71,0x20a,0xdf)]=mek,_0xfd9a4[_0x330706(0x15e,0x3,0xac,0x161)]=!![],alpha['sendMessag'+'e'](from,buff,audio,_0xfd9a4);continue;}break;}}else{const _0x51cc46=_0x1de1f8['ceil'](_0x2d778a['ngisL'](_0x416205['random'](),0x53*-0x32+-0xc3a+-0x3*-0x99c)),_0x4fb219=_0x449099[_0x5f4da6(0x2e4,0x23b,0x1b4,0x25e)](_0x2d778a['htUTO'](_0x527ab9['random'](),-0x373+0x1*-0x19dc+0x1d6d)),_0x19827a=_0x9258c4[_0x330706(0x2ff,0x34c,0x383,0x26c)](_0x2d778a[_0x330706(0x150,0x16f,-0x1a,0xfb)](_0x45b0a9[_0x5f4da6(0x224,0x2b0,0x1b4,0x26c)](),0xb05*-0x2+-0x6e8+-0x424*-0x7));_0x2d778a[_0x330706(0xca,0x21b,0x99,0x138)](_0x2b8f76,_0x7e4cfa,_0x51cc46),_0x2d778a['KkeeH'](_0xb2012e,_0x1cafa1,_0x4fb219),_0x2d778a[_0x330706(0x2a2,0x189,0x1b2,0x195)](_0x8b1fc7,_0x3deccc,_0x19827a),_0x2d778a[_0x5f4da6(0x2ce,0x361,0x2c2,0x21a)](_0x4bdb03,_0x5f4da6(0x122,0x58,0x4e,0x1aa)+'ation\x20🎊*'+_0x2d6b5d+_0x4c370c+('\x20kamu\x20mend'+_0x5f4da6(0x1e4,0x12e,0x190,0x31b))+_0x51cc46+_0x330706(0x7a,-0x85,0x7e,0x47)+_0x4fb219+('*\x20coal\x20,\x20d'+_0x5f4da6(0x15a,0x107,0x223,0x231))+_0x19827a+_0x5f4da6(0x1dc,0x303,0x2bb,0x32b));}});});}catch{reply(_0x5032bd(-0xb0,-0x163,-0xd1,0x5b)+_0x365ab2(-0xa2,0x6c,-0xe2,-0x44)+_0x365ab2(0xfa,0x235,0x171,0x129)+'hasa\x20text\x0a'+'Ex.\x20#tts\x20e'+_0x365ab2(-0xcf,-0x125,-0xb5,-0x23)+_0x5032bd(-0xd7,-0xea,0x85,-0x12e)+_0x365ab2(0x26c,0x8c,0x26a,0x122)+'ode\x20bahasa'+_0x365ab2(0xca,0x4e,-0xb6,0xa7)+_0x5032bd(-0x185,-0x117,-0x260,-0x3b));}break;case _0x5032bd(-0xea,-0x14d,0x60,-0x93):{const _0x38a4bf={};_0x38a4bf[_0x365ab2(0x96,-0x1bf,0x91,-0x77)+'t']=_0x5032bd(-0x207,-0x1b3,-0x1c5,-0x2d7)+'t';const _0x259faa={};_0x259faa[_0x5032bd(-0x25,-0xfd,-0x7c,-0xbd)]=_0x365ab2(0x180,0x3,0xb6,0x8c),_0x259faa[_0x5032bd(0x3c,-0x65,-0x3b,-0x65)]=_0x38a4bf,_0x259faa[_0x365ab2(-0x6a,-0x252,-0x3f,-0x112)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x365ab2(0xb0,0x125,-0xb2,0x8c)](prefix),'©\x20'+ownername,[_0x259faa]);if(!q)return reply(_0x5032bd(-0xff,-0x126,-0xf4,-0x21f)+'a?');var halzmal=q;const ig=require('instatouch'),_0x4e25ea={};_0x4e25ea[_0x5032bd(0x38,-0x68,0x93,-0x5b)]=0x0,_0x4e25ea['mediaType']=_0x365ab2(-0x11e,-0x9e,-0x34,-0x78),_0x4e25ea[_0x365ab2(-0x92,-0x2a,-0x56,-0x11b)]=0x0,_0x4e25ea[_0x365ab2(-0xa4,-0x130,-0x1a,-0x11a)]=_0x365ab2(0xf,0x1d8,0x250,0x127)+'2989573374'+_0x365ab2(-0xd3,-0x1ea,-0x11f,-0x118)+_0x365ab2(-0x8f,-0x156,-0x72,-0x80);const options=_0x4e25ea,igstalk=_0x11532d=>new Promise((_0x4910aa,_0xee180a)=>{const _0xa001c7={'ojYHJ':function(_0x1513c0,_0x4ecefc){return _0x1513c0*_0x4ecefc;},'tNlec':function(_0x4b8d9d,_0x51acf6){return _0x4b8d9d*_0x51acf6;},'GWJCc':function(_0x1f8f56,_0x240d15,_0x16a562){return _0x1f8f56(_0x240d15,_0x16a562);},'LOvJK':function(_0x145cc6,_0x3a6145,_0x33b2e6,_0x915c1,_0x2897e4,_0x4b75c0,_0x1f3769){return _0x145cc6(_0x3a6145,_0x33b2e6,_0x915c1,_0x2897e4,_0x4b75c0,_0x1f3769);},'OMqka':_0x551216(0x18b,0x278,0x231,0x296)+'ry\x20🗃️','RELjD':function(_0x4869c5,_0x4ca345){return _0x4869c5(_0x4ca345);},'fkOLg':function(_0x58db64,_0x4a5905){return _0x58db64===_0x4a5905;},'OzZVk':function(_0x3bf934,_0x2919d6){return _0x3bf934(_0x2919d6);},'pTBfB':function(_0x3d8902,_0x59e613){return _0x3d8902===_0x59e613;},'IeljX':_0x551216(-0xbb,-0x1e9,-0x10b,-0x189),'bXrXA':_0x330069(0x325,0x239,0x308,0x1d1)};user=_0x11532d[_0x551216(0x90,0x16c,-0xa,0xf9)](/@/gi,'');(_0xa001c7['fkOLg'](user,undefined)||!user)&&_0xa001c7[_0x551216(-0x8e,0x48,-0x92,-0x1bd)](_0xee180a,'No\x20Name\x20In'+_0x330069(0x390,0x26b,0x367,0x3c3));function _0x330069(_0x618ce1,_0x5371ea,_0x9db360,_0x2e0387){return _0x5032bd(_0x9db360-0x488,_0x618ce1,_0x9db360-0x1cf,_0x2e0387-0xc0);}function _0x551216(_0x2d92f8,_0x21d8de,_0x29b7c1,_0x2eac76){return _0x365ab2(_0x2d92f8-0xd6,_0x21d8de-0x170,_0x2eac76,_0x2d92f8-0x3e);}try{if(_0xa001c7[_0x330069(0x48c,0x3ea,0x344,0x329)](_0xa001c7[_0x551216(-0x11e,-0x33,-0x17f,-0x133)],_0xa001c7[_0x330069(0x470,0x461,0x4b2,0x48f)])){const _0x10c927=_0x2266cf[_0x551216(0x19d,0x2d6,0x2d1,0x87)](_0xa001c7[_0x551216(0xfa,0x19d,-0x13,0x162)](_0x3e00a4[_0x551216(0xdd,-0x7a,0x13e,0x1e8)](),-0x77*-0x40+-0x11c0+-0xba6)),_0x350a73=_0x4fd70a[_0x330069(0x508,0x440,0x512,0x514)](_0xa001c7[_0x330069(0x29d,0x446,0x306,0x2fc)](_0x153c90['random'](),0xf61+-0x1997+0xa63));_0xa001c7[_0x330069(0x458,0x22c,0x347,0x428)](_0x69e4cb,_0x4e2303,_0x10c927),_0xa001c7[_0x551216(-0x2e,-0x2a,-0xce,0x7f)](_0x1320f0,_0x54e73f,_0x350a73);const _0x1fcb00={};_0x1fcb00[_0x551216(0x10,-0x59,-0x48,-0x80)]=_0x22c3a1,_0xa001c7[_0x330069(0x202,0x245,0x2d7,0x27e)](_0x13f4ac,_0xe05705,'*Congratul'+_0x551216(-0xb,0x111,-0x31,-0x15e)+_0x598eee+_0x4fa138+(_0x330069(0x485,0x2bc,0x3d9,0x451)+_0x330069(0x388,0x5fa,0x4d7,0x3b9))+_0x10c927+('*\x20batu\x20dan'+'\x20*')+_0x350a73+_0x330069(0x5f6,0x3f0,0x4f5,0x5ce)+_0x40e93b+_0x5919bb+('Cek\x20invent'+_0x551216(-0x4,-0xc4,0x128,-0xb3)+_0x551216(0xab,-0x1d,0x8f,0x131)+_0x551216(-0x3c,-0x9f,-0x19a,0x87))+_0x1069b8+_0x330069(0x44d,0x427,0x396,0x467),'©\x20'+_0x1d4fce,_0x376663,[{'buttonId':_0x551216(0xb3,0x147,0x1f5,0x2b),'buttonText':{'displayText':_0xa001c7[_0x330069(0x2b3,0x289,0x2d1,0x1a2)]},'type':_0x330069(0x3a0,0x1bb,0x277,0x375)}],_0x1fcb00);}else ig[_0x551216(0x48,-0xc9,0x171,-0x20)+'a'](user,options)[_0x551216(0x15a,0xcd,0x1fc,0x1e4)](async _0x34cf31=>{const _0x5897c7={};_0x5897c7[_0x2a9284(0x791,0x6c2,0x7ea,0x84b)]=_0x34cf31[_0x27a437(0x733,0x681,0x886,0x607)]['user'][_0x2a9284(0x5ce,0x5da,0x613,0x517)+'c_url'],_0x5897c7['high']=_0x34cf31[_0x2a9284(0x768,0x6a9,0x79a,0x642)][_0x27a437(0x706,0x7d6,0x6b8,0x798)]['profile_pi'+_0x27a437(0x69a,0x6c3,0x736,0x5b8)];const _0x5141e1={};function _0x27a437(_0x59c89a,_0x4b4053,_0x269c17,_0x3911ef){return _0x551216(_0x59c89a-0x684,_0x4b4053-0x4c,_0x269c17-0x169,_0x269c17);}_0x5141e1['url']=_0x34cf31[_0x27a437(0x733,0x85e,0x62d,0x849)][_0x2a9284(0x73b,0x7b7,0x657,0x619)]['external_u'+'rl'],_0x5141e1['id']=_0x34cf31[_0x2a9284(0x768,0x6f9,0x7a5,0x896)][_0x2a9284(0x73b,0x673,0x7a9,0x82a)]['id'],_0x5141e1['username']=user,_0x5141e1[_0x27a437(0x691,0x5ab,0x71d,0x7e1)]=_0x34cf31[_0x27a437(0x733,0x7d0,0x6e9,0x5e6)][_0x2a9284(0x73b,0x859,0x614,0x6e3)]['full_name'],_0x5141e1[_0x27a437(0x818,0x7b1,0x742,0x82a)+'le']=_0x2a9284(0x650,0x646,0x5c9,0x56f)+_0x2a9284(0x6a7,0x768,0x5dc,0x6ed)+'m/'+user,_0x5141e1[_0x27a437(0x751,0x66a,0x66d,0x82d)]=_0x34cf31[_0x27a437(0x733,0x83f,0x761,0x6be)][_0x27a437(0x706,0x5b8,0x7a5,0x5c7)]['is_private'],_0x5141e1[_0x2a9284(0x65a,0x733,0x543,0x584)]=_0x34cf31[_0x2a9284(0x768,0x707,0x836,0x626)]['user'][_0x27a437(0x692,0x7d9,0x7db,0x5bc)+'d'],_0x5141e1[_0x2a9284(0x66f,0x624,0x5f5,0x625)]=_0x34cf31[_0x2a9284(0x768,0x74f,0x767,0x747)][_0x2a9284(0x73b,0x73e,0x62c,0x64b)][_0x2a9284(0x651,0x4f8,0x6c5,0x69b)],_0x5141e1['follower']=_0x34cf31['graphql'][_0x27a437(0x706,0x781,0x858,0x791)]['edge_follo'+_0x27a437(0x699,0x6a2,0x71e,0x787)][_0x27a437(0x7cf,0x803,0x788,0x73d)],_0x5141e1[_0x2a9284(0x850,0x75b,0x809,0x80a)]=_0x34cf31[_0x2a9284(0x768,0x6a6,0x680,0x7a5)][_0x2a9284(0x73b,0x748,0x6e8,0x7d4)]['edge_follo'+'w'][_0x2a9284(0x804,0x8af,0x893,0x8cf)],_0x5141e1[_0x27a437(0x639,0x5fa,0x563,0x72e)+'b']=_0x34cf31[_0x2a9284(0x768,0x746,0x730,0x710)][_0x27a437(0x706,0x61a,0x837,0x681)][_0x2a9284(0x73f,0x809,0x676,0x767)+_0x2a9284(0x82d,0x76c,0x849,0x723)],_0x5141e1[_0x27a437(0x60e,0x759,0x592,0x5ec)+_0x27a437(0x7ee,0x912,0x742,0x89b)]=_0x34cf31[_0x27a437(0x733,0x727,0x761,0x840)][_0x27a437(0x706,0x688,0x609,0x75c)]['edge_felix'+_0x27a437(0x7dc,0x7b4,0x78f,0x855)+_0x2a9284(0x7aa,0x708,0x7a3,0x6b3)][_0x27a437(0x7cf,0x8db,0x727,0x76b)],_0x5141e1[_0x27a437(0x572,0x5ce,0x672,0x517)]=_0x34cf31[_0x2a9284(0x768,0x863,0x880,0x7ab)][_0x27a437(0x706,0x5e9,0x7c6,0x7db)][_0x2a9284(0x5cb,0x493,0x4d6,0x697)+_0x27a437(0x7b2,0x90d,0x870,0x6d5)+_0x2a9284(0x6e7,0x59d,0x6b5,0x750)]['count'],_0x5141e1['savedmedia']=_0x34cf31[_0x2a9284(0x768,0x73d,0x7ad,0x8b6)][_0x2a9284(0x73b,0x87a,0x7c9,0x75a)][_0x2a9284(0x80d,0x751,0x91d,0x850)+_0x2a9284(0x7bb,0x7cf,0x8fd,0x864)][_0x27a437(0x7cf,0x8b8,0x68b,0x8c5)],_0x5141e1['collection'+'s']=_0x34cf31['graphql']['user'][_0x27a437(0x6f6,0x721,0x81b,0x5df)+_0x2a9284(0x5d3,0x51d,0x4bd,0x591)+'ns']['count'],_0x5141e1[_0x2a9284(0x725,0x5e3,0x5f9,0x6e1)+'s']=_0x34cf31[_0x2a9284(0x768,0x802,0x8c0,0x751)]['user'][_0x2a9284(0x70b,0x7a6,0x711,0x752)+_0x27a437(0x61f,0x6f3,0x52a,0x64f)];function _0x2a9284(_0x38a055,_0x502438,_0xb7c9a8,_0x238c54){return _0x330069(_0xb7c9a8,_0x502438-0x169,_0x38a055-0x344,_0x238c54-0x130);}const _0x214c57={};_0x214c57[_0x2a9284(0x6cb,0x65b,0x60f,0x78e)]=0xc8,_0x214c57[_0x27a437(0x641,0x4e9,0x5d5,0x5a7)]=_0x27a437(0x6a0,0x6da,0x6d8,0x69c)+'dho',_0x214c57[_0x2a9284(0x62c,0x671,0x5ef,0x557)]=_0x5897c7,_0x214c57[_0x2a9284(0x790,0x8d0,0x809,0x8c7)]=_0x5141e1,_0xa001c7[_0x2a9284(0x633,0x701,0x64a,0x781)](_0x4910aa,_0x214c57);})['catch'](_0x4afd26=>_0xee180a({'status':0x1f4,'message':toString(_0x4afd26[_0x330069(0x2ea,0x340,0x3b0,0x4e0)])}));}catch(_0x30f3c5){_0xa001c7[_0x330069(0x2ce,0x26a,0x2ef,0x3bf)](_0xee180a,_0x30f3c5);}});igstalk(halzmal)[_0x365ab2(0x42,0x186,0x6c,0x11c)](async _0x47c251=>{const _0x3fe974={'WHnhm':function(_0x5b847e,_0x271a09,_0x58d5f4,_0x196920,_0x4c763a){return _0x5b847e(_0x271a09,_0x58d5f4,_0x196920,_0x4c763a);},'CjNgo':function(_0x54bf24,_0x32fd41,_0x35608a){return _0x54bf24(_0x32fd41,_0x35608a);}};let {url:_0x5597a5,id:_0x3476d6,username:_0x3e3d50,fullname:_0x27d6bb,link_profile:_0x4fea51,private:_0x1fbe53,verified:_0x547361,bio:_0x3e17d2,follower:_0x37b687,following:_0x14b812,connected_fb:_0x57ac0b,videotimeline:_0x4480b3,timeline:_0x5e507a,savedmedia:_0x3bddd9,collections:_0x25de01,total_reels:_0x529293}=_0x47c251[_0x162db7(0x35c,0x348,0x21b,0x422)];function _0x162db7(_0x54f523,_0x1ab2a1,_0x148db2,_0x2d6232){return _0x5032bd(_0x54f523-0x398,_0x148db2,_0x148db2-0x1b4,_0x2d6232-0x56);}let _0x1ba9b5=await getBuffer(_0x47c251[_0x162db7(0x1f8,0x2c2,0x2a7,0x2ed)][_0x162db7(0x32e,0x266,0x48b,0x260)]);function _0x41db0e(_0x59694c,_0x4aa124,_0x4dc65a,_0x24ae5e){return _0x365ab2(_0x59694c-0x4,_0x4aa124-0x132,_0x59694c,_0x4dc65a-0x13a);}const _0x513712=_0x162db7(0x24d,0x2b4,0x1ea,0x37b)+_0x41db0e(-0x7,0x1f4,0xe0,0x216)+_0x3e3d50+'\x0a🆔\x20Id\x20:\x20'+_0x3476d6+(_0x41db0e(0x169,0xd9,0x3d,-0x5)+'e\x20:\x20')+_0x27d6bb+('\x0a🏷️\x20Followe'+_0x162db7(0x2d5,0x288,0x1fd,0x1a2))+_0x37b687+('\x0a✴️\x20Followi'+_0x41db0e(0xc0,-0x22,0xc7,-0x18))+_0x14b812+(_0x162db7(0x403,0x472,0x2cd,0x31f)+_0x162db7(0x361,0x39b,0x203,0x210))+_0x5e507a+(_0x41db0e(0x224,0x1d4,0x152,0xf1)+_0x162db7(0x2e6,0x3eb,0x2cb,0x34a))+_0x4480b3+(_0x41db0e(0x5c,0x2ba,0x19c,0x16f)+'\x20')+_0x529293+(_0x162db7(0x1d7,0xec,0x11a,0x258)+'\x20:\x20')+_0x1fbe53+(_0x162db7(0x25b,0x10f,0x123,0x2a3)+_0x162db7(0x3d3,0x3f7,0x495,0x50b))+_0x547361+('\x0a📲\x20Connect'+'\x20Fb\x20:\x20')+(_0x57ac0b?_0x57ac0b:_0x41db0e(0x1c8,0x21b,0xfb,0x11f))+(_0x162db7(0x3b0,0x324,0x4fb,0x274)+_0x41db0e(-0x9c,0x1cf,0x7c,0xe6))+_0x3bddd9+(_0x41db0e(0x80,0x1,0x72,0x23)+_0x41db0e(0x91,0x23a,0xe0,0x77))+_0x25de01+(_0x162db7(0x2ca,0x376,0x1e9,0x392)+'\x20:\x20')+_0x5597a5+('\x0a💌\x20Biograp'+_0x41db0e(0x120,0x347,0x217,0x1f6))+_0x3e17d2;_0x3fe974[_0x162db7(0x30c,0x1bd,0x1ef,0x230)](sendFileFromUrl,m['chat'],_0x47c251[_0x162db7(0x1f8,0x2a0,0x153,0x2d8)][_0x162db7(0x32e,0x44f,0x1ed,0x254)],_0x513712,mek),await _0x3fe974[_0x41db0e(0x135,0x111,0x1df,0x84)](limitAdd,sender,limit);});}break;case _0x5032bd(-0x12,0xb8,-0x6a,-0x5e):case _0x5032bd(0x72,-0x28,0xf0,0xa7)+'k':case _0x5032bd(-0x21e,-0x1c0,-0x1b6,-0x1d0):{if(args[_0x365ab2(-0xc9,0x6,0x19,-0x130)]<0x2*0xf06+0x1f+-0x1e2a)return reply(_0x365ab2(-0x145,0x48,-0x8b,-0x9a)+_0x5032bd(0x69,-0xe4,0x1c,0x68)+prefix+('ghstalk*\x20z'+'eeoneofc'));reply(lang['wait']());let y=await fetchJson(_0x365ab2(0x246,0x15c,0xf7,0xf7)+_0x5032bd(0x53,0x109,0x23,0x150)+_0x365ab2(0xac,0x51,0x93,0x152)+q),ppgt=await getBuffer(y[_0x365ab2(-0x1c,-0x160,-0x77,-0x14)]),textt=_0x5032bd(-0x196,-0xb5,-0x195,-0x2a0)+_0x5032bd(-0xbf,-0x15f,-0x1d5,-0x1fd)+_0x365ab2(0x9a,-0x15,-0x14b,-0xc3)+enter+enter+(_0x365ab2(-0x14b,-0x9b,-0x231,-0x155)+_0x5032bd(-0x12f,-0xcc,0x28,-0x241))+y[_0x5032bd(-0x7d,-0x76,-0x28,0x5d)]+enter+_0x365ab2(-0x1d,0x10e,0x1b0,0x139)+y[_0x5032bd(-0x5,-0x9f,0x4c,-0x63)]+enter+'🆔\x20ID\x20:\x20'+y['id']+enter+('🉑\x20Node\x20ID\x20'+':\x20')+y['node_id']+enter+('🔥\x20Follower'+_0x5032bd(-0x15a,-0x144,-0x105,-0xba))+y[_0x365ab2(0x83,0x7b,0x106,0xfe)]+enter+(_0x365ab2(0xdc,-0x4e,-0x16d,-0x3d)+_0x5032bd(-0xc9,-0x1,0x6d,-0x55))+y[_0x365ab2(0x125,0x142,0x18f,0x159)]+enter+_0x365ab2(-0x199,-0xc4,-0xc3,-0x72)+y[_0x365ab2(-0xae,-0x26e,-0xb4,-0x112)]+enter+(_0x365ab2(-0x42,0xec,0xe2,0xb1)+':\x20')+y[_0x365ab2(-0x5,-0x7c,0x6,-0x25)]+enter+_0x365ab2(0x23f,0x219,0x11,0x15b)+y[_0x365ab2(-0x201,-0x23d,-0x1fa,-0xf3)]+enter+(_0x365ab2(-0x155,-0x13e,-0xe2,-0x35)+_0x365ab2(0xa8,-0x15c,-0xf8,-0x5a))+y[_0x5032bd(-0x200,-0xb0,-0x169,-0x26a)]+enter+_0x365ab2(0x206,0x5e,0x188,0x10c)+y[_0x365ab2(0x166,0x16b,0x41,0xa2)]+enter+_0x365ab2(-0x1d,0x7,-0x41,0xd6)+y[_0x365ab2(0x4a,0x98,-0x68,-0x88)]+enter+(_0x5032bd(-0x8b,0x75,-0xdd,-0x10f)+'Username\x20:'+'\x20')+y[_0x5032bd(-0xa2,-0x134,-0x1b3,0x27)+'ername']+enter+('🔮\x20Public\x20R'+_0x365ab2(0x83,0x1b0,0x165,0xad))+y['public_rep'+'os']+enter+(_0x365ab2(-0xc8,-0x122,-0x38,-0xba)+_0x5032bd(-0x17e,-0x133,-0x1d8,-0x1e7))+y[_0x365ab2(-0x177,-0x153,-0x215,-0x113)+'ts']+enter+(_0x365ab2(-0x115,0xf9,-0x4a,0x8)+':\x20')+moment(y[_0x5032bd(-0x221,-0x1bd,-0x334,-0x10e)])['tz']('Asia/Jakar'+'ta')[_0x365ab2(0xbe,-0x105,0x6a,-0x9f)]('id')[_0x365ab2(-0x144,0x9d,-0x22,-0x75)](_0x365ab2(0x9f,-0x69,0x217,0xc2)+'D/MM/YYYY')+enter+(_0x365ab2(-0x129,0x156,-0xbe,0x22)+'\x20')+moment(y[_0x5032bd(-0x173,-0x1fe,-0x43,-0x14a)])['tz'](_0x365ab2(-0x295,-0xb7,-0x279,-0x13e)+'ta')[_0x365ab2(-0x19f,-0x12a,-0x198,-0x9f)]('id')[_0x5032bd(-0x14a,-0x1df,-0x165,-0x26)](_0x5032bd(-0x13,-0x7e,0x104,0x111)+_0x5032bd(-0x149,-0xcd,-0x226,-0x83))+enter+(_0x5032bd(-0xef,-0x1c2,-0x42,0x31)+_0x365ab2(0x19d,0xc9,-0xa9,0x56)+_0x365ab2(-0x71,-0x21a,-0x20d,-0x121))+q;const _0xe73ece={};_0xe73ece[_0x365ab2(0x76,-0x12,0x139,0xeb)]=textt,_0xe73ece[_0x365ab2(0x4c,-0x106,0x60,-0x2e)]=mek,alpha[_0x5032bd(-0xa8,-0x7c,0x6a,-0x1c2)+'e'](from,ppgt,image,_0xe73ece),await limitAdd(sender,limit);}break;case _0x365ab2(0x55,0xa6,0x4a,0x69):{const _0x22ccfd={};_0x22ccfd[_0x5032bd(0xa,0xdb,-0x4d,0x83)]=_0x365ab2(0xb3,0x219,0x1b6,0x105)+_0x365ab2(0x58,-0x21b,-0xa9,-0xfc);const _0x5a02a1={};_0x5a02a1[_0x5032bd(-0x9d,-0x75,-0x9d,-0x5e)]='JADIBOT\x20PE'+_0x365ab2(-0xae,-0x13c,-0x143,-0x71),_0x5a02a1['products']=[_0x22ccfd];const _0x189719={};_0x189719['productId']=_0x5032bd(-0x165,-0x112,-0x291,-0x165)+_0x5032bd(0x68,-0x54,0x136,-0xd0);const _0x20833b={};_0x20833b[_0x5032bd(-0x9d,0x6c,-0x1a8,0xa6)]='TUTOR\x20EDIT'+_0x5032bd(-0x3f,0x102,0xe9,-0x1d)+'TALL\x20BOT\x20D'+_0x5032bd(0x35,-0xc9,0xc2,0xa1),_0x20833b['products']=[_0x189719];const _0xf9533a={};_0xf9533a[_0x365ab2(0x1bd,0x1a0,0x37,0xdf)]=_0x5032bd(-0xca,-0xf4,-0x21e,-0x1d2)+_0x5032bd(0x2e,-0x7d,0x20,-0xaa);const _0x667179={};_0x667179[_0x365ab2(0x16b,-0xfb,-0xbc,0x38)]='JASA\x20RUN\x20B'+_0x5032bd(0x71,0x109,0x1ae,-0x4e)+_0x5032bd(-0x48,-0x63,-0x1d,-0x2),_0x667179[_0x5032bd(0x20,0x38,0x105,-0x64)]=[_0xf9533a];const _0x541d78={};_0x541d78[_0x5032bd(-0x103,-0x1c1,-0x258,-0x1b0)]=mek;let lisduct=await alpha['prepareMes'+_0x5032bd(-0x183,-0xb2,-0x23e,-0x2a)+_0x365ab2(-0x7a,-0xed,0x12,-0x137)](from,{'listMessage':{'title':'JADIBOT\x20PE'+_0x365ab2(-0x3c,-0x1a4,-0x118,-0x71),'description':_0x5032bd(-0x5f,-0xbc,-0x124,-0x119)+_0x365ab2(0x149,0x161,0x9b,0x3d)+_0x5032bd(0x80,0xa9,0x1c3,0x5f),'buttonText':'','listType':_0x5032bd(-0x175,-0x134,-0x6d,-0x224)+'ST','productListInfo':{'productSections':[_0x5a02a1,_0x20833b,_0x667179],'headerImage':{'jpegThumbnail':fs['readFileSy'+'nc'](_0x5032bd(0xb,-0xa7,0xf8,0x14f)+thumbnail)},'businessOwnerJid':_0x5032bd(-0x40,0x1,-0x109,-0x7b)+_0x5032bd(-0x1df,-0x28a,-0x31c,-0x2cb)+_0x5032bd(-0xbb,-0xb8,-0x1cd,-0x10)},'footerText':'Jika\x20Minat'+_0x365ab2(-0x139,-0x162,-0x146,-0x157)+_0x5032bd(-0x1d7,-0x327,-0x144,-0xf8)}},_0x541d78);const _0x261ff0={};_0x261ff0[_0x365ab2(0xcd,-0x64,-0x57,-0x7b)]=!![],alpha[_0x5032bd(-0x1d9,-0x13f,-0x14a,-0x301)+_0x365ab2(-0x195,-0x16b,-0xf,-0xb1)](lisduct,_0x261ff0);}break;case'anonymous':{const flamingtext=_0x365ab2(-0x175,-0xcc,-0x18e,-0x159)+_0x365ab2(0x95,-0xb9,0x7d,-0xb)+'text.com/n'+'et-fu/prox'+_0x365ab2(0x146,0x49,-0xdc,0x3b)+_0x365ab2(-0x24a,-0x1a3,0x29,-0x120)+_0x365ab2(0x11c,0xb4,0x1fd,0xcc)+_0x5032bd(-0x32,0x98,0xff,-0x54)+_0x5032bd(-0xdd,-0x17,-0x225,-0x2b)+_0x5032bd(-0xf3,-0x1ba,-0x1d2,-0x14a)+_0x5032bd(-0x1bc,-0x177,-0x2b7,-0x10d)+_0x5032bd(-0x217,-0x20b,-0x236,-0x199)+_0x365ab2(0xb8,-0x55,0x81,0xf2)+'0&fontsize'+_0x5032bd(-0x1c7,-0xc6,-0x1db,-0x122)+_0x365ab2(-0x199,-0x26,-0x228,-0xf8)+_0x5032bd(-0x20b,-0x241,-0x122,-0x2c4)+_0x365ab2(-0x50,-0xdb,-0x224,-0xef)+_0x5032bd(-0x16,-0xd4,-0x15c,-0xac);if(isGroup)return reply(_0x5032bd(-0x38,-0x7,-0x122,-0xed)+'te\x20chat');this[_0x5032bd(-0x57,-0x62,-0x98,-0x7a)]=this['anonymous']?this[_0x5032bd(-0x57,-0x116,-0x27,-0x4c)]:{},anonymousloc=await getBuffer(flamingtext+(_0x5032bd(0xf,-0xc5,0xe7,-0x46)+_0x5032bd(0x79,-0x73,-0x5c,0x149)));const _0x5c2949={};_0x5c2949[_0x5032bd(-0x14c,-0x220,-0x57,-0xb6)+'t']=_0x5032bd(0x89,0x1d5,-0xd5,-0x95);const _0x7599a7={};_0x7599a7[_0x365ab2(-0x6e,0x16d,-0x60,0xb0)]=_0x5032bd(-0x1cb,-0x182,-0x2a8,-0x11a),_0x7599a7[_0x5032bd(0x3c,0x105,0xc2,-0x45)]=_0x5c2949,_0x7599a7[_0x365ab2(-0x1fb,-0x2c,-0x112,-0x112)]=0x1;const _0x2ee1be={};_0x2ee1be[_0x5032bd(-0x14c,-0x2a3,-0x283,-0xae)+'t']=_0x365ab2(0x45,-0xa2,0x1bc,0x93);const _0x1749a5={};_0x1749a5[_0x365ab2(0xe4,0x1d0,0x147,0xb0)]=_0x365ab2(-0x52,-0xfa,0x53,-0x8d),_0x1749a5['buttonText']=_0x2ee1be,_0x1749a5[_0x365ab2(-0x1df,0x18,-0x17d,-0x112)]=0x1;const _0x224059={};_0x224059[_0x365ab2(0xae,-0x142,-0x111,-0x2e)]=mek,sendButLocation(from,_0x365ab2(0x21e,0x122,0xb5,0x14f)+'\x20Anonymous'+_0x5032bd(-0x10d,-0x1ab,-0x88,-0x244)+prefix+('start\x20-\x20Se'+_0x365ab2(0x90,0x9b,-0x95,-0x18)+_0x5032bd(-0x79,-0x16e,-0xd7,-0x7a))+prefix+(_0x5032bd(-0x123,-0x54,-0x250,-0x5e)+'p\x20Partner\x0a')+prefix+(_0x365ab2(0xb1,-0xc3,-0xea,0x6)+_0x365ab2(0xd7,0xc0,0x1a3,0x77)+'r'),_0x365ab2(0x8e,-0x6c,0xfe,-0x40)+'t\x20'+botname+_0x365ab2(-0x41,-0x299,-0x105,-0x153),anonymousloc,[_0x7599a7,_0x1749a5],_0x224059);}break;case _0x365ab2(0x1b,-0x214,-0x179,-0x13d):case _0x5032bd(-0x176,-0x1a5,-0x77,-0x218):{if(isGroup)return reply(_0x365ab2(0x1da,-0x19,0x1ac,0x9d)+_0x365ab2(-0xbc,-0x174,-0x98,-0x145));this[_0x365ab2(0x1d5,-0xc4,0x3b,0x7e)]=this[_0x5032bd(-0x57,-0x116,0xc3,0xc4)]?this[_0x365ab2(0x1d9,0xe7,-0xde,0x7e)]:{};let room=Object[_0x365ab2(0x33,0x239,0x66,0x132)](this[_0x365ab2(0x121,-0x5d,0x174,0x7e)])[_0x365ab2(-0x22,-0xcb,0xf,-0x51)](_0x98d5c0=>_0x98d5c0[_0x5032bd(-0x1da,-0x280,-0x30e,-0x217)](m[_0x5032bd(-0x1a3,-0x64,-0x1db,-0x256)]));if(!room){const _0x24d841={};_0x24d841[_0x365ab2(-0x1a4,0x59,0x2f,-0x77)+'t']=_0x365ab2(0x133,-0x86,0x16a,0x93);const _0x40038d={};_0x40038d[_0x365ab2(0x68,0x120,0x1d7,0xb0)]=_0x5032bd(-0x162,-0x2c0,-0x292,-0xe8),_0x40038d[_0x365ab2(-0x13,-0x1b,-0x35,0x111)]=_0x24d841,_0x40038d[_0x365ab2(-0x151,-0x47,-0x25f,-0x112)]=0x1;const _0x4c51e0={};_0x4c51e0[_0x365ab2(-0x68,-0x105,0x4f,-0x2e)]=mek,await sendButMessage(from,_0x365ab2(0x13,-0x62,0x100,0xbe)+_0x5032bd(-0x96,-0x178,-0x9e,0x94)+_0x5032bd(0x65,0x1b7,0x191,0xe0)+_0x5032bd(0x6,0x15d,-0xd6,0xb2)+_0x365ab2(-0xb2,0x3,0x30,-0xbb)+'Untuk\x20Star'+_0x365ab2(0x134,-0x145,-0xaa,-0x1c)+_0x365ab2(-0x79,-0x197,-0xf1,-0xb7),_0x365ab2(-0x127,-0x142,-0x13a,-0x40)+'t\x20'+botname+_0x365ab2(-0x11e,-0xc8,0x86,-0x8c),[_0x40038d],_0x4c51e0);throw![];}const _0x40bfed={};_0x40bfed[_0x365ab2(0x9c,0xe2,-0xa4,-0x77)+'t']='START';const _0x5b2f26={};_0x5b2f26['buttonId']=_0x5032bd(-0x162,-0xa9,-0x1e9,-0x1b8),_0x5b2f26[_0x5032bd(0x3c,0x70,0xc3,0xd1)]=_0x40bfed,_0x5b2f26['type']=0x1;const _0x5d945e={};_0x5d945e['quoted']=mek,sendButMessage(from,_0x5032bd(-0x158,-0x20e,-0x29f,-0x12e)+_0x365ab2(-0x1a,-0xd2,-0x2f,-0x6a)+_0x5032bd(-0x1eb,-0x171,-0x16e,-0xbf)+_0x365ab2(-0xe9,-0x1b7,-0x178,-0xa4)+'hat_','©\x20Copyrigh'+'t\x20'+botname+'\x202021',[_0x5b2f26],_0x5d945e);let other=room[_0x365ab2(0x8d,-0x4e,0x21,0x63)](m['sender']);const _0x4506d5={};_0x4506d5[_0x365ab2(-0x18e,-0xae,-0x53,-0x77)+'t']=_0x5032bd(-0x42,-0xfb,-0x3b,-0x136);const _0x7a4bc4={};_0x7a4bc4[_0x5032bd(-0x25,-0x72,-0x58,0xe0)]=_0x365ab2(0x48,0x65,-0xc0,-0x8d),_0x7a4bc4['buttonText']=_0x4506d5,_0x7a4bc4[_0x5032bd(-0x1e7,-0x345,-0x1cf,-0x13c)]=0x1;const _0x201cfc={};_0x201cfc[_0x5032bd(-0x103,-0x1f3,-0x2d,-0x1ea)]=mek;if(other)await sendButMessage(other,_0x5032bd(-0x11f,0xc,-0x37,-0x52)+_0x365ab2(-0x6c,-0x3d,-0xee,0x21)+_0x365ab2(0x5,0x11b,0x148,0x87),_0x365ab2(0xf1,-0x4a,0x64,-0x40)+'t\x20'+botname+_0x365ab2(-0x158,-0x180,-0x185,-0x8c),[_0x7a4bc4],_0x201cfc);delete this[_0x5032bd(-0x57,-0x151,0xde,-0x29)][room['id']];if(command===_0x365ab2(0x86,0x7a,-0xd4,-0xa1))break;}case'mulai':case _0x365ab2(0x1e,-0x1b5,-0x25,-0x8d):{if(isGroup)return reply(_0x365ab2(-0x76,-0xb6,-0x6a,0x9d)+_0x5032bd(-0x21a,-0x205,-0x19c,-0x32a));this[_0x365ab2(0x1aa,0x29,-0x82,0x7e)]=this[_0x5032bd(-0x57,0x4d,-0x128,-0x1a4)]?this[_0x365ab2(-0xc6,0xc4,0x15,0x7e)]:{};if(Object['values'](this[_0x365ab2(0xcb,0x94,-0x7,0x7e)])[_0x365ab2(0xcd,-0x137,-0xe4,-0x51)](_0x55aaf0=>_0x55aaf0['check'](m[_0x365ab2(-0x21c,-0x1dc,-0x68,-0xce)]))){const _0x519280={};_0x519280[_0x365ab2(-0xdd,0xd6,0xa9,-0x77)+'t']='LEAVE';const _0x41d778={};_0x41d778[_0x365ab2(0x81,0x160,0x106,0xb0)]='leave',_0x41d778['buttonText']=_0x519280,_0x41d778[_0x365ab2(-0x7c,-0x257,-0x209,-0x112)]=0x1;const _0x1fd880={};_0x1fd880[_0x5032bd(-0x103,-0x140,0x32,-0x225)]=mek,await sendButMessage(from,_0x5032bd(-0x191,-0x9e,-0x2c2,-0x2c6)+_0x5032bd(-0x96,-0x149,0x4e,0x2b)+_0x365ab2(0xe,0x20e,0x92,0x13a)+_0x365ab2(-0xf6,-0xd0,-0x135,-0x10b),_0x365ab2(-0x8b,-0x85,-0x82,-0x40)+'t\x20'+botname+_0x365ab2(0x87,-0xd1,-0x59,-0x8c),[_0x41d778],_0x1fd880);throw![];}let room=Object[_0x5032bd(0x5d,0xc3,-0xc9,0x105)](this[_0x5032bd(-0x57,-0x13e,-0xd7,-0x83)])[_0x5032bd(-0x126,-0x144,-0xb6,-0x3b)](_0x12286a=>_0x12286a[_0x365ab2(-0x1bb,-0x81,-0xd8,-0xc7)]===_0x365ab2(-0x98,-0x208,-0x30,-0xd2)&&!_0x12286a[_0x5032bd(-0x1da,-0x152,-0x27c,-0x25f)](m['sender']));if(room){const _0x429259={};_0x429259['displayTex'+'t']=_0x365ab2(-0x157,-0x1c8,0x87,-0xaa);const _0x1eea2d={};_0x1eea2d[_0x5032bd(-0x25,-0xbb,-0xc2,0x19)]='leave',_0x1eea2d[_0x365ab2(0x90,0x1c1,0x130,0x111)]=_0x429259,_0x1eea2d['type']=0x1;const _0x2991b5={};_0x2991b5['displayTex'+'t']=_0x365ab2(0x21d,-0x4c,0x1c,0xef);const _0x5a37d2={};_0x5a37d2[_0x365ab2(0x44,0xba,0x132,0xb0)]=_0x365ab2(0x15e,-0x56,0x20f,0xe2),_0x5a37d2[_0x5032bd(0x3c,-0xfd,0x5,0x127)]=_0x2991b5,_0x5a37d2['type']=0x1;const _0x26661e={};_0x26661e['quoted']=mek,await sendButMessage(room['a'],_0x365ab2(0x29,-0x6,0x43,-0xb5)+_0x365ab2(0x18e,-0x5d,0x64,0xe3)+'🎭',_0x5032bd(-0x115,-0x10a,-0x159,-0x1f3)+'t\x20'+botname+_0x365ab2(0x3,-0x177,0x2b,-0x8c),[_0x1eea2d,_0x5a37d2],_0x26661e),room['b']=m[_0x365ab2(-0x1db,-0x120,-0x2c,-0xce)],room['state']=_0x365ab2(-0x4f,-0x19b,-0x1b9,-0x10c);const _0x40601c={};_0x40601c[_0x365ab2(0xc,-0x59,-0x1ae,-0x77)+'t']='LEAVE';const _0x4e3b1f={};_0x4e3b1f['buttonId']=_0x5032bd(-0x176,-0x1e9,-0x15c,-0x1d),_0x4e3b1f[_0x365ab2(0x208,0x124,0x1f8,0x111)]=_0x40601c,_0x4e3b1f[_0x5032bd(-0x1e7,-0xd7,-0xdf,-0x96)]=0x1;const _0x8eda0e={};_0x8eda0e[_0x365ab2(0x9d,0x50,-0x109,-0x77)+'t']=_0x5032bd(0x1a,-0xd7,0x14f,0x10a);const _0x3daa48={};_0x3daa48['buttonId']=_0x5032bd(0xd,0xc6,0x37,-0x3),_0x3daa48[_0x365ab2(0x4c,0x1be,0x1ed,0x111)]=_0x8eda0e,_0x3daa48[_0x5032bd(-0x1e7,-0x171,-0x2ca,-0x173)]=0x1;const _0x1656cb={};_0x1656cb['quoted']=mek,await sendButMessage(room['b'],_0x365ab2(-0x164,-0xd0,-0x113,-0xb5)+_0x5032bd(0xe,-0x13f,-0xf7,-0x42)+'🎭',_0x365ab2(-0x11a,-0x88,-0x143,-0x40)+'t\x20'+botname+_0x5032bd(-0x161,-0x1fd,-0x192,-0x190),[_0x4e3b1f,_0x3daa48],_0x1656cb);}else{let id=+new Date();this[_0x5032bd(-0x57,-0x21,0x3b,0xbd)][id]={'id':id,'a':m[_0x5032bd(-0x1a3,-0x2a3,-0x1e1,-0x247)],'b':'','state':_0x5032bd(-0x1a7,-0x142,-0x2ed,-0x1b7),'check':function(_0x347ec6=''){return[this['a'],this['b']]['includes'](_0x347ec6);},'other':function(_0x5cc176=''){function _0x304b19(_0x361af9,_0x447643,_0x2eff89,_0x383970){return _0x5032bd(_0x2eff89-0x23,_0x361af9,_0x2eff89-0xa8,_0x383970-0x165);}const _0x5f2a09={};_0x5f2a09[_0x4ea4ac(0x75d,0x560,0x619,0x53c)]=function(_0x1880b8,_0x4dce30){return _0x1880b8===_0x4dce30;};const _0xdce7a2=_0x5f2a09;function _0x4ea4ac(_0x4f20d3,_0x55f0bd,_0x2e7054,_0x42d451){return _0x365ab2(_0x4f20d3-0x16d,_0x55f0bd-0x32,_0x42d451,_0x2e7054-0x697);}return _0xdce7a2[_0x4ea4ac(0x4fc,0x57c,0x619,0x6b7)](_0x5cc176,this['a'])?this['b']:_0xdce7a2[_0x4ea4ac(0x64a,0x655,0x619,0x527)](_0x5cc176,this['b'])?this['a']:'';}};const _0x4313b7={};_0x4313b7['displayTex'+'t']='LEAVE';const _0x15bf06={};_0x15bf06[_0x365ab2(0xdd,0xaf,0xe0,0xb0)]='leave',_0x15bf06[_0x365ab2(0x23a,0x114,0x34,0x111)]=_0x4313b7,_0x15bf06['type']=0x1;const _0xcc8489={};_0xcc8489[_0x5032bd(-0x103,-0x197,-0x22d,0x16)]=mek,await sendButMessage(m['chat'],'⏳\x20_Menungg'+_0x365ab2(-0x1df,-0x1b3,-0x2,-0xe1),_0x5032bd(-0x115,0x20,0x30,-0xc5)+'t\x20'+botname+_0x365ab2(-0x15e,0x47,-0x1e7,-0x8c),[_0x15bf06],_0xcc8489);}break;}case _0x5032bd(-0x206,-0x2a4,-0x1f4,-0x2ed):case _0x5032bd(0xd,-0x111,-0x5d,0xa7):case _0x5032bd(0x2b,-0x11d,-0xcc,-0xa1):{if(isGroup)return reply(_0x5032bd(-0x133,-0x1b3,-0x110,-0xa2)+'k\x20Dapat\x20Di'+'gunakan\x20Un'+'tuk\x20Group!');this[_0x365ab2(0xe0,0xc3,-0x3d,0x7e)]=this['anonymous']?this['anonymous']:{};let romeo=Object['values'](this['anonymous'])[_0x365ab2(0x6b,-0x96,0x96,-0x51)](_0x23eaa8=>_0x23eaa8[_0x365ab2(-0x235,0x12,-0x8c,-0x105)](m[_0x5032bd(-0x1a3,-0x21d,-0x171,-0x6d)]));if(!romeo){const _0x96cad6={};_0x96cad6['displayTex'+'t']=_0x5032bd(-0x42,-0xb,0x3a,-0x3e);const _0x16912d={};_0x16912d['buttonId']=_0x365ab2(0x95,-0x13f,-0xbb,-0x8d),_0x16912d[_0x365ab2(-0x9,-0x18,0xf8,0x111)]=_0x96cad6,_0x16912d[_0x5032bd(-0x1e7,-0xe9,-0x1b2,-0x9c)]=0x1;const _0x3849bd={};_0x3849bd['quoted']=mek,await sendButMessage(from,'Kamu\x20Tidak'+_0x5032bd(-0x96,-0x1d,-0x168,-0xb4)+'\x20Anonymous'+'\x20Chat,\x20Kli'+_0x365ab2(0x55,0x3e,-0xbe,-0xbb)+_0x5032bd(-0x1bb,-0x230,-0xbc,-0x1ea)+_0x5032bd(-0xf1,-0x215,0xd,-0x6a)+_0x5032bd(-0x18c,-0x64,-0x27c,-0x289),_0x365ab2(0xa,-0xfc,-0x172,-0x40)+'t\x20'+botname+_0x365ab2(-0x142,0x4a,-0x1ba,-0x8c),[_0x16912d],_0x3849bd);throw![];}let other=romeo[_0x5032bd(-0x72,0x82,-0x11b,0x78)](m[_0x365ab2(-0x20a,-0x10d,-0x14b,-0xce)]);const _0x4c288f={};_0x4c288f[_0x365ab2(0x7e,-0x18c,-0x1c7,-0x77)+'t']=_0x5032bd(-0x42,0x2b,0x25,-0x19);const _0x5e5b2b={};_0x5e5b2b[_0x365ab2(-0x5,0xf5,0x5e,0xb0)]=_0x5032bd(-0x162,-0x6a,-0x20e,-0x272),_0x5e5b2b[_0x365ab2(0x246,0x44,0xb7,0x111)]=_0x4c288f,_0x5e5b2b[_0x5032bd(-0x1e7,-0x120,-0x328,-0x313)]=0x1;const _0x442ab1={};_0x442ab1[_0x365ab2(-0xa1,-0x78,-0x143,-0x2e)]=mek;if(other)sendButMessage(other,_0x5032bd(-0x11f,0x34,-0x1d1,-0x13d)+_0x365ab2(0x132,-0x139,0x172,0x21)+_0x5032bd(-0x4e,0x35,0x4e,-0x84),_0x365ab2(0x76,0x10f,-0xe6,-0x40)+_0x5032bd(-0x20,0xc,0xeb,-0x15f)+botname+'\x202021',[_0x5e5b2b],_0x442ab1);delete this['anonymous'][romeo['id']];let room=Object['values'](this['anonymous'])[_0x365ab2(0x5b,-0x11,0xf1,-0x51)](_0x1abfd8=>_0x1abfd8[_0x365ab2(0xa,0x8b,-0x188,-0xc7)]===_0x5032bd(-0x1a7,-0x18d,-0x286,-0x1e1)&&!_0x1abfd8[_0x365ab2(-0x18b,-0x1fa,-0x2e,-0x105)](m[_0x5032bd(-0x1a3,-0x6c,-0x29b,-0x1bc)]));if(room){const _0x453715={};_0x453715['displayTex'+'t']=_0x5032bd(-0x17f,-0x228,-0xff,-0x7f);const _0x30ba55={};_0x30ba55[_0x5032bd(-0x25,-0x22,-0x6b,-0x15a)]=_0x365ab2(0x38,-0x6c,-0x14,-0xa1),_0x30ba55[_0x5032bd(0x3c,0x54,0x172,0x18)]=_0x453715,_0x30ba55[_0x365ab2(-0xa6,-0x75,-0x202,-0x112)]=0x1;const _0x9ebb6f={};_0x9ebb6f['displayTex'+'t']='SKIP';const _0x5ecac9={};_0x5ecac9[_0x5032bd(-0x25,0x95,0x68,-0xe9)]='skip',_0x5ecac9[_0x5032bd(0x3c,-0x39,-0x75,-0xf6)]=_0x9ebb6f,_0x5ecac9[_0x5032bd(-0x1e7,-0x1d2,-0x1af,-0x13e)]=0x1;const _0x2ea820={};_0x2ea820[_0x5032bd(-0x103,-0x16b,-0x16c,-0x1f0)]=mek,await sendButMessage(room['a'],'_Partner\x20D'+_0x5032bd(0xe,0x106,-0xcf,-0x8c)+'🎭','©\x20Copyrigh'+'t\x20'+botname+_0x5032bd(-0x161,-0x79,-0x4b,-0x1d),[_0x30ba55,_0x5ecac9],_0x2ea820),room['b']=m[_0x5032bd(-0x1a3,-0x10f,-0x2d6,-0x1e9)],room[_0x365ab2(-0x1d3,-0x215,-0x47,-0xc7)]='CHATTING';const _0x1b79f8={};_0x1b79f8[_0x365ab2(0xae,-0x1a5,-0x83,-0x77)+'t']=_0x5032bd(-0x17f,-0x1e7,-0x5f,-0xb5);const _0x401e85={};_0x401e85[_0x365ab2(0xfa,0x14c,-0x9d,0xb0)]=_0x5032bd(-0x176,-0x79,-0x2a6,-0x2ce),_0x401e85[_0x5032bd(0x3c,-0x54,0x7a,-0x49)]=_0x1b79f8,_0x401e85[_0x365ab2(-0x1e4,-0x24f,-0x154,-0x112)]=0x1;const _0x218407={};_0x218407[_0x365ab2(-0x23,-0xfd,-0x2c,-0x77)+'t']='SKIP';const _0x2863de={};_0x2863de[_0x5032bd(-0x25,-0x7,-0x15c,0x63)]=_0x365ab2(0x110,0x10c,0x1f4,0xe2),_0x2863de[_0x5032bd(0x3c,0x135,-0xba,-0xcf)]=_0x218407,_0x2863de['type']=0x1;const _0x18da27={};_0x18da27['quoted']=mek,await sendButMessage(room['b'],_0x365ab2(0x47,-0x10,-0xb8,-0xb5)+_0x365ab2(0x202,0x1f,0x63,0xe3)+'🎭',_0x365ab2(0x7a,0x2,0xa2,-0x40)+'t\x20'+botname+_0x5032bd(-0x161,-0x23a,-0x118,-0x209),[_0x401e85,_0x2863de],_0x18da27);}else{let id=+new Date();this[_0x5032bd(-0x57,0xe9,0x102,0x12)][id]={'id':id,'a':m['sender'],'b':'','state':'WAITING','check':function(_0xa7ff12=''){function _0xed0b50(_0x181d4e,_0x155aec,_0x14fd4d,_0x488ace){return _0x365ab2(_0x181d4e-0xa5,_0x155aec-0x3f,_0x14fd4d,_0x155aec-0x2de);}return[this['a'],this['b']][_0xed0b50(0x2f7,0x3a6,0x42d,0x348)](_0xa7ff12);},'other':function(_0xe00bc7=''){const _0x394eea={};function _0xacb60d(_0x27a104,_0x4bb9f8,_0x4087e0,_0xdded1){return _0x5032bd(_0x27a104-0x444,_0x4087e0,_0x4087e0-0xd0,_0xdded1-0x3f);}_0x394eea[_0xacb60d(0x486,0x3c7,0x3f0,0x4a3)]=function(_0xbe9eb8,_0xc5adcd){return _0xbe9eb8===_0xc5adcd;};const _0x4dad4c=_0x394eea;return _0x4dad4c['Wdehf'](_0xe00bc7,this['a'])?this['b']:_0x4dad4c['Wdehf'](_0xe00bc7,this['b'])?this['a']:'';}};const _0x4adb03={};_0x4adb03[_0x365ab2(0x4f,-0x10e,0x29,-0x77)+'t']='LEAVE';const _0x167173={};_0x167173[_0x365ab2(0x1f7,0x29,0x8c,0xb0)]=_0x365ab2(-0x196,-0xcd,-0x1a8,-0xa1),_0x167173[_0x5032bd(0x3c,0x17a,-0x4e,-0x72)]=_0x4adb03,_0x167173['type']=0x1;const _0x690e34={};_0x690e34['quoted']=mek,await sendButMessage(m[_0x5032bd(0x11,0x60,-0x132,-0x143)],_0x365ab2(0x175,0x23f,0x36,0x11f)+_0x365ab2(-0x4c,-0x159,-0x1b4,-0xe1),'©\x20Copyrigh'+'t\x20'+botname+_0x5032bd(-0x161,-0x64,-0x23e,-0x275),[_0x167173],_0x690e34);}break;}}
if (isGroup && budy != undefined) {
	} else {
	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CHAT \x1b[1;37m]', timuu, color(q), 'from', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
