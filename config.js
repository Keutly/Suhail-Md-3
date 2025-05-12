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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2250788145722,2250788145722";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_34_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDk2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuUFpiYkxPQkZIbjVkSHV2cVRUUHlqRWw2TjVGR1l5L3BoMm5Zd3JJd0tzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTg4MTQ1NzIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMTgwQjE0MEQxNzQzRjI5MjAwQkY5QzMwNzE3OTlGNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDcwMjgwNDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaDRHYjZQOERRV0NzdGtRRE05emh6Z1wiLFxuICBcInBob25lSWRcIjogXCI3OWZkOWJmYy00ZTI0LTQ4NzYtYjU0Yi1mODFkZWRkMzQ1NDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTkxLFxuICAgICAgMjMzLFxuICAgICAgMjI1LFxuICAgICAgNSxcbiAgICAgIDE3MixcbiAgICAgIDIxMyxcbiAgICAgIDIyOSxcbiAgICAgIDE1MixcbiAgICAgIDE4NyxcbiAgICAgIDQ1LFxuICAgICAgMzEsXG4gICAgICAxOTAsXG4gICAgICAyMjksXG4gICAgICA4MCxcbiAgICAgIDMwLFxuICAgICAgMTQwLFxuICAgICAgMTg2LFxuICAgICAgMjMxLFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTU2LFxuICAgICAgNDYsXG4gICAgICAyMTMsXG4gICAgICA0MCxcbiAgICAgIDMzLFxuICAgICAgMTgyLFxuICAgICAgMjQsXG4gICAgICA5LFxuICAgICAgMjQ0LFxuICAgICAgNDUsXG4gICAgICA0OSxcbiAgICAgIDE0MyxcbiAgICAgIDQ4LFxuICAgICAgMTk4LFxuICAgICAgMjMwLFxuICAgICAgODUsXG4gICAgICAxNTAsXG4gICAgICA1LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmljb3BrRUVNYVFoc0VHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQMytDajhZc2k0aUFkMXhQVTlXQmRlMUJqS3gyelFZZnl6UDlhZGpSOXhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjV5dHV5Z1J2MSs1ZVhDSUtrdHhJbTVPTFlQdzN0Smk4VmNSWXNhVWxrTWFKSkV3dUhUVkdTS3IxeEw3VCttU3Byd0pZbUZrUlhielgwRkgyR0RsNUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdzMzFYSldsUU1CTkhuekp1UExwRXBWWnlWWjVrTXZXcVRycTd1eDVFRXJkUHZ5VkFtMEREZ3JPMWRySDBTcGVsR2Q0SS9GMDY0aFdSdmk0dFJLT0JRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1ODgxNDU3MjI6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI5MjI3NTU0NTAwODEwOjY1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1ODgxNDU3MjI6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MDI4MDQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQTJKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBMkouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnbHJZWEgwZzZYZllZTGdnOUpzUGRKbVFWTUhCOFFHVHh3OHlyNXdOMGwwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjY3MzEyODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjcxNzkyODY1M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUEySy5qc29uIjogIntcImtleURhdGFcIjpcIllwNHM4MXB6ZmMrVlNlcXRKbzE1ZzJ0dmZWc09PditkRG9pdlNWdUpoeGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEyNjczMTI4OCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBMkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXd3ZFbW1UQUgvT3FRNXN3emhsaUxqYnprYmNHN2ZqcTBpQjByYytSYkhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjY3MzEyODgsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTJNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQzZaT1dzMWZFd0UxT2lKVElhdTloYWdieFo3cjVuTlFXUElCaCtnWkdyTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI2NzMxMjg4LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCw1LDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUEyTi5qc29uIjogIntcImtleURhdGFcIjpcInpEcURDUnZseXQ2OFNXTW1IMldoM2swK0ZCRUhQUVRRUCt1OUZRZDROZFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEyNjczMTI4OCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTJPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUlEUU15RGNYSEVXOVRIRDloV3pXVVA5cllPckxyVWlSYUsrT3pZeHhzQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI2NzMxMjg4LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBMlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1SFRISVBZQUZGUURHZjVyOW5nNWNscXB6czN4cXVZaSsxY3lpZFNKT2tNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjY3MzEyODgsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDcwMjM2NzE2NjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBMlEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmeTlsWEc0YkNRK3dsQ3RXeGNwalFnSzA3ZERVZ1BTRXdKK2hCNkxuTDZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjY3MzEyODgsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDcwMjcxOTQ2MzdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBMlIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3VXpNMXFhd2h0YnozQU44MGhQRzdMUmNKQzNrUGxuS2UvWXdGWjd3U0ZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjY3MzEyODgsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCw1LDEzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDcwMjcyMDA0MjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBMlMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwd1hYVkh2Q1J5OHZNRjZULzhHUGF1TjRBZ0tIYjJiOXJnOCtSemFVL25zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjY3MzEyODgsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwxM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTJULmpzb24iOiAie1wia2V5RGF0YVwiOlwiN1dpR0ladXhoR2I1SklMRzl0MUs0TEpUTkljSEJmNzRUMm00bTRRUWJUND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI2NzMxMjg4LFwiY3VycmVudEluZGV4XCI6MTQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTRdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzAyNzg2NDAxMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𓆩𖠜кєยՇץ🌀—͟͞͞𝗚-MD",
  ownername:process.env.OWNER_NAME|| "𓆩𖠜кєยՇץ🌀—͟͞͞𝗚",


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
