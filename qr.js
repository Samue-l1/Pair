const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Black_Castro,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function GHOST_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Black_Castro = Black_Castro({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Black_Castro.ev.on('creds.update', saveCreds)
			Qr_Code_By_Black_Castro.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Black_Castro.sendMessage(Qr_Code_By_Black_Castro.user.id, { text: '' + b64data });
	
				   let GHOST_MD_TEXT = `
🪀Support/Contact Developer


⎆Welcome to Classic Bot

⎆Telegram Chat: https://t.me/+hhQQxFUABd81MDM0

⎆WhatsApp Gc1: https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk

⎆WhatsApp Number: +254104301695

⎆GitHub: https://github.com/Samue-l1/


Don't Forget To Give Star⭐ To My Repo`
	 await Qr_Code_By_Black_Castro.sendMessage(Qr_Code_Black_Castro.user.id,{text:GHOST_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Black_Castro.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					GHOST_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await GHOST_MD_QR_CODE()
});
module.exports = router
