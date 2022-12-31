let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'AkuPremiumCoy😋' || args[0] == 'PagpqvUac' || args[0] == '91hakHcwo' || args[0] == 'A820bdoqP') {

    if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
       conn.reply(m.chat, '*🎉SELAMAT*\nKamu telah mendapatkan\n500000000000 XP✨\n100000 Limit 🎫\n100000000000000 Money 💹\n1 Potion  🥤\n100000 Gold 🪙\n1000000000 Atm 💳 \n500 Legendary 🗃️', m)
    global.db.data.users[m.sender].exp += 500000000000
    global.db.data.users[m.sender].limit += 100000
    global.db.data.users[m.sender].money +=1000000000000
    global.db.data.users[m.sender].gold += 100000
    global.db.data.users[m.sender].legendary += 500
    global.db.data.users[m.sender].atm += 1000000000
    global.db.data.users[m.sender].robo += 2000
    global.db.data.users[m.sender].petFood += 90000
    global.db.data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan belinya terlebih dahulu untuk mendapatkan kodegift !\n\nKetik *!buygift*`, m)
    }
}
handler.premium = true

handler.help = ['premgift <kode>']
handler.tags = ['rpg']
handler.command = /^(premgift)$/i

export default handler 