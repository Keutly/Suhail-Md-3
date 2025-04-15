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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_19_04_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTMllVMG4vWFVXYmJ6VGlUZVkreGNYaFdGTzFLdkRrZTFrVTR4amFwajg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTg4MTQ1NzIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNkIwNTM2RDlCQTVDRTBEMTA2ODYzRDgyRTc5RDY5NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDQ2Nzk5ODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUmFrU2ExbzdUWHFqM20xam1Fd3o3d1wiLFxuICBcInBob25lSWRcIjogXCJjNTVmOGQ1NS04MDRkLTQwZjgtOWIyMC01ZjNmNmUyMzg4M2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMTg1LFxuICAgICAgOCxcbiAgICAgIDYyLFxuICAgICAgMTQ3LFxuICAgICAgNDUsXG4gICAgICAxNTgsXG4gICAgICAyMDAsXG4gICAgICA5NCxcbiAgICAgIDE2MyxcbiAgICAgIDIxMixcbiAgICAgIDI0OSxcbiAgICAgIDIzNCxcbiAgICAgIDI1LFxuICAgICAgMjI4LFxuICAgICAgMjUzLFxuICAgICAgMTAxLFxuICAgICAgMjM2LFxuICAgICAgMjU1LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMjcsXG4gICAgICAyMTgsXG4gICAgICAyMDIsXG4gICAgICA1OCxcbiAgICAgIDEyNCxcbiAgICAgIDM5LFxuICAgICAgMTM1LFxuICAgICAgMjAzLFxuICAgICAgMjIsXG4gICAgICAxMDQsXG4gICAgICA5NyxcbiAgICAgIDExLFxuICAgICAgMjQ3LFxuICAgICAgMTAyLFxuICAgICAgMTQ4LFxuICAgICAgNjMsXG4gICAgICAxNTksXG4gICAgICAxNDIsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUUVI2M1Q4Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1ODgxNDU3MjI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkvDq8O8dGzDvy1IXCIsXG4gICAgXCJsaWRcIjogXCIyOTIyNzU1NDUwMDgxMDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08yS3lNQUZFS0xvOXI4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUVhtbnMzMnZrcitYSFJxQzJqcGM0akVZR2U2Rm9RN1dzOGM0eldVRUVBUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBY3lqakdsL0dtM1QzUUpabFY3Ym1zbzJlYXROVUUzcXZZbUI3bTVTZ2NsYWM3cFQzWEVYc3d6cnJ6Y0lEckN5amhSYVpBeUpBVTN0cUpZenc5TTdDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuY1JiS0RQRVFaV0htN0crSFVCZWxSTW1LNXUwSUh1NE56cHVGRGVmeE1lRlVnY1g5V21waUh4UGp4Z0JnblF3TlBacHlWdDlwN3FEYS9IWTQvcVNEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU4ODE0NTcyMjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0Njc5OTc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWVsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmejFYWm9jTkZGaTdEOUxvaFFNL1hrdS9xek9DdVZYUGNpcURoTlRnTjUwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0Nzc1NzYwNDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQ2Nzk3ODg2MjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  ownername:process.env.OWNER_NAME|| "Këütlÿ-H 🥰❤️‍🩹",


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
