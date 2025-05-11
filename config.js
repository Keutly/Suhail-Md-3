const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,225xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2250788145722,225xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_51_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTY3LFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc0LFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTjFHSzgxMjhwbXdrT2FzRGhVZzZOaTk3N1VjN1RleUtkZitXUjNrZXNxMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjU4ODE0NTcyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTA1NDI1RDhENEJBRjU1NkJBNzUxNEE0RUYwOUREQzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2OTgyMzE2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNwa1ZYVVJZU2EyMU9mWTdaWFRMSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGFhMzIyMmEtMDcxOC00MTcwLTg2YWUtMjNhMDc5ZTFiMzBjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDE2NixcbiAgICAgIDIzNixcbiAgICAgIDk1LFxuICAgICAgMTY1LFxuICAgICAgNDAsXG4gICAgICAyMyxcbiAgICAgIDE3NyxcbiAgICAgIDE2MixcbiAgICAgIDIwMCxcbiAgICAgIDYzLFxuICAgICAgMTc5LFxuICAgICAgMTMzLFxuICAgICAgMTgzLFxuICAgICAgNjEsXG4gICAgICA0OSxcbiAgICAgIDQ1LFxuICAgICAgMTI0LFxuICAgICAgMjM3LFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAyMzIsXG4gICAgICA5MyxcbiAgICAgIDIzNCxcbiAgICAgIDIxNixcbiAgICAgIDIzMSxcbiAgICAgIDE2OSxcbiAgICAgIDUzLFxuICAgICAgMzgsXG4gICAgICAyMDcsXG4gICAgICA2MCxcbiAgICAgIDIwNixcbiAgICAgIDk0LFxuICAgICAgMjYsXG4gICAgICA1MixcbiAgICAgIDE2MSxcbiAgICAgIDEyMyxcbiAgICAgIDE3NCxcbiAgICAgIDI0NSxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlo4Ulo1RzQxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU4ODE0NTcyMjo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjkyMjc1NTQ1MDA4MTA6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmljb3BrRUVLR3JnOEVHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQMytDajhZc2k0aUFkMXhQVTlXQmRlMUJqS3gyelFZZnl6UDlhZGpSOXhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVEb091dVRiUEdQUjlpY1JNa3BhZmxNcFdwOEU4TGZBajk0WEVQYjF2QUFhaVdSM1NDT0tNT2cwQ1hCRU9wVHp4Y1FmR2ljb2hWbWtHTDBFUDFYMURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkl6bmR3Y21oTTFKbDk3UUg4M3pTWmo0ck9uRTRLRzQ3aEZ1eUExZFBVWmZxb1JDOVlvN3d3cGZSKzFzWWwrUE5sNExuU1FxN2ZyTzBsTWpncDNWc2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTg4MTQ1NzIyOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0Njk4MjMwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUEyTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTJOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiekRxRENSdmx5dDY4U1dNbUgyV2gzazArRkJFSFBRVFFQK3U5RlFkNE5kVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI2NzMxMjg4LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Këütlÿ-H",
  ownername:process.env.OWNER_NAME|| "Këütlÿ-H",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
