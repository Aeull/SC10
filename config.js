const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'apivinz',
}

//api
global.xteam = 'apivproject'
global.lolhuman = 'Deffbotz'

// Other
global.owner = ['6285822347348']
global.premium = ['6285822347348']
global.ownername = 'ArullOfc'
global.botname = 'ArullBotz'
global.packname = '©ArullBotz'
global.gc = 'https://chat.whatsapp.com/J5hA6E5FJBD7ENPRrac9fu'
global.linkyt = 'https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg'
global.linkgc = 'https://chat.whatsapp.com/Jxt0CRpnOEJAlG05VfJxb1'
global.limitawal = '10'
global.author = '@ArullOfc\n@ArullBotz'
global.sessionName = 'sessionya'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: '*Berhasil*',
    admin: '*Fitur Khusus Admin Group!*',
    botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '*Fitur Khusus Owner Bot*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Tunggu sebentar, sedang di proses*',
    endLimit: '*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
