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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_37_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXMG9MQVhOZzhRNzhORTVxeTlCU0xZc0huL0NrS1R6L3NQZDVPQTdEcHI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTQzMjI0MDc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0ODkyRkY4RDAxRjEzMTUzQ0MzRkM3Mjc4RTkyNjYyNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDYxMTM4MzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid25UYnRsRTBSaHFnR2VoQjJ5M2dHZ1wiLFxuICBcInBob25lSWRcIjogXCJhZWI1MGU2ZS05ZmViLTQwNTEtODUzMy0wNjE2YWNkNDJjMDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMjA5LFxuICAgICAgNTksXG4gICAgICAxMzIsXG4gICAgICAyMzUsXG4gICAgICAyMjcsXG4gICAgICAxMzEsXG4gICAgICAyMjksXG4gICAgICAxNjAsXG4gICAgICAxNTAsXG4gICAgICAxMjcsXG4gICAgICAyMSxcbiAgICAgIDEzLFxuICAgICAgMjI1LFxuICAgICAgMjAwLFxuICAgICAgODMsXG4gICAgICAxNTAsXG4gICAgICAxMzcsXG4gICAgICAxMDYsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxNTIsXG4gICAgICAxNzksXG4gICAgICAxNzAsXG4gICAgICAyMTUsXG4gICAgICAxNTMsXG4gICAgICA0NixcbiAgICAgIDI0NyxcbiAgICAgIDIxMCxcbiAgICAgIDY2LFxuICAgICAgMTg2LFxuICAgICAgMTgwLFxuICAgICAgMjQsXG4gICAgICAxOTksXG4gICAgICA4OSxcbiAgICAgIDkzLFxuICAgICAgMTUyLFxuICAgICAgMTI3LFxuICAgICAgMTYsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEJKNFdKUzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTQzMjI0MDc5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGFuXCIsXG4gICAgXCJsaWRcIjogXCIyMzc1NjAxNzc2NjYxMDoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbnkvaHdRcUtyT3dBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1XOVE2SFJ0bENXQzUyOEE2Mll6NGk2YytxM004OWxyZVozUUN6WVlFUkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZkdGYVZDRjNFN2RIZzJ1VU9BR0RmeDIrUzR4V1Zjbm0xTTRCWmE4MGU5SkZ1aW9XQUEvYVFFNEVLMTFWeDVuSjZFYkgvaWNzZE91amdEbnpSUzFEREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQnMxN252bSsyNE9MUzllcitxeTR2WURncHVGTkdTN1FQeWpLaWpsL2UrYVZTWE9nMkw3cFhXWjd2eW1keXl5UUtOUzM1NFR5Y3FKT0QrcHpUMlVSaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NDMyMjQwNzk6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYxMTM4MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJdTJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl1Mi5qc29uIjogIntcImtleURhdGFcIjpcImJLTDNIK0Q0c0ZSWVNrRHV3WXFTN1hDVDNuR3hOYi9XRWRkUmVwOUt4U3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjA3OTkzMDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjAzODI3MjY5MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "᭄जी FF࿐кєยՇɭץ —͟͞͞𝗚𝔯𝔦𝔪𝔪 ➻",


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
