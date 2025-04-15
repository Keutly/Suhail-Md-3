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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_46_04_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIzLFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI4LFxuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDksXG4gICAgICAgIDkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYzLFxuICAgICAgICA2MixcbiAgICAgICAgOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPSmkvOXhaUFp1QmJaTHdSYTZ2WE5vbTJTU2plVU5jWlZ4TWVEaWh2TmJRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTg4MTQ1NzIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3N0ZGOEJFMDlGNDYyRDNFNDVGM0MzQkRGMUEyNDg3OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDQ3MDMxODlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVdHeXlFVWZRNnExTTQxSXJ0V3JVd1wiLFxuICBcInBob25lSWRcIjogXCJiNDllNzJmNi1mMjJhLTQwY2YtYTgyNy05MGQ4MTIxY2QyMzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICA5OSxcbiAgICAgIDE4MSxcbiAgICAgIDEwMixcbiAgICAgIDEzOSxcbiAgICAgIDE2OSxcbiAgICAgIDEzLFxuICAgICAgNzIsXG4gICAgICAxNjcsXG4gICAgICAxODEsXG4gICAgICA4MSxcbiAgICAgIDcxLFxuICAgICAgMTU5LFxuICAgICAgMTQ2LFxuICAgICAgOTEsXG4gICAgICAyMjcsXG4gICAgICAxNzMsXG4gICAgICAyMCxcbiAgICAgIDIwMixcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDk0LFxuICAgICAgMjksXG4gICAgICAxMjgsXG4gICAgICA1OSxcbiAgICAgIDgxLFxuICAgICAgMTgwLFxuICAgICAgMTE4LFxuICAgICAgMjI2LFxuICAgICAgMjEsXG4gICAgICAyMjQsXG4gICAgICAzMSxcbiAgICAgIDEzLFxuICAgICAgMTk1LFxuICAgICAgMTIwLFxuICAgICAgMTY3LFxuICAgICAgMjQwLFxuICAgICAgMjI5LFxuICAgICAgMjA4LFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBOVDdGNEhMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU4ODE0NTcyMjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS8Orw7x0bMO/LUhcIixcbiAgICBcImxpZFwiOiBcIjI5MjI3NTU0NTAwODEwOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzJLeU1BRkVNcWQrTDhHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRWG1uczMydmtyK1hIUnFDMmpwYzRqRVlHZTZGb1E3V3M4YzR6V1VFRUFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9lKzM0eFBCa29lZkZKM2hvUlpZendGcEhReU5GR0dPdzFUTVpidmFldnVreEViUzg5SWdFY0lhVjc5UWJWNElBN2JkRGs2NEVCcEdxODRjYzhkeUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZjamUvSGF2akVHVHZqUnYvemdnanJTZ0czQW4wNC9MbHF3am5BZ1hTNENWTDF6VzdsaHdoSHdNdXNvWFB3ZlRpd2hRZllkNHVhWkN4MHhDdzZ2M2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTg4MTQ1NzIyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ3MDMxODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZW5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVlbi5qc29uIjogIntcImtleURhdGFcIjpcIkhLY0FmbDZveTdySkVTZXRWWWRuWkt1dEQ0T0x2QVFmRkpVVXQ3aVFUZjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3NzU3NjA0NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Këütlÿ-H ❤️‍🩹",
  ownername:process.env.OWNER_NAME|| "Këütlÿ-H 😎",


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
