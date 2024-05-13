const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Black_Castro,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GHOST_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Black_Castro = Black_Castro({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (MacOs)", "Safari (Ubuntu)", "Chrome (Linux)"]
             });
             if(!Pair_Code_By_Black_Castro.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Black_Castro.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Black_Castro.ev.on('creds.update', saveCreds)
            Pair_Code_By_Black_Castro.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Black_Castro.sendMessage(Pair_Code_By_Black_Castro.user.id, { text: '' + b64data });

               let GHOST_MD_TEXT = `
🪀Support/Contact Developer


⎆Welcome to Classic Bot

⎆Telegram Chat: https://t.me/+hhQQxFUABd81MDM0

⎆WhatsApp Gc1: https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk

⎆WhatsApp Number: +254104301695

⎆GitHub: https://github.com/Samue-l1/,`


 await Pair_Code_By_Black_Castro.sendMessage(Pair_Code_By_Black_Castro.user.id,{text:GHOST_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Black_Castro.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GHOST_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service Restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await GHOST_MD_PAIR_CODE()
});
module.exports = router