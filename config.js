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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_51_04_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOSxcbiAgICAgICAgODksXG4gICAgICAgIDE2MixcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDk1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDYzLFxuICAgICAgICA4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgODMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMxLFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODksXG4gICAgICAgIDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZ6OWhVcUZqTzBHYS9FRVk5bVg2Rmkwa0NSS20xWTlPME42RDRiWFlEeDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1ODgxNDU3MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNDQzM0QzIyNjZGNUZFOENENzUzNTZGOThEMjRCQjNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NDY3NDY4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4anduYWRyOFMyZUdmNWl4RmRrYWdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQxYTg2ZTRjLTA4NTEtNDgyZS05ZDFjLThmZWNmMzZjZDczOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICA4MyxcbiAgICAgIDE4NyxcbiAgICAgIDI1NSxcbiAgICAgIDIyMyxcbiAgICAgIDI5LFxuICAgICAgMTMyLFxuICAgICAgMTEwLFxuICAgICAgMTIsXG4gICAgICAyMzAsXG4gICAgICAzNixcbiAgICAgIDk5LFxuICAgICAgMTQzLFxuICAgICAgOTAsXG4gICAgICAxOTYsXG4gICAgICA4MCxcbiAgICAgIDE5MixcbiAgICAgIDEzMixcbiAgICAgIDEyLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDExMSxcbiAgICAgIDEwMCxcbiAgICAgIDIxNSxcbiAgICAgIDEyNCxcbiAgICAgIDEyNSxcbiAgICAgIDE5LFxuICAgICAgOTMsXG4gICAgICAxODEsXG4gICAgICAxMzksXG4gICAgICAyMTksXG4gICAgICAxMjYsXG4gICAgICAyNDQsXG4gICAgICAxNDUsXG4gICAgICAxNCxcbiAgICAgIDEwMCxcbiAgICAgIDE3MCxcbiAgICAgIDY2LFxuICAgICAgMTkyLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzgxN0RQWlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTg4MTQ1NzIyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLw6vDvHRsw78tSFwiLFxuICAgIFwibGlkXCI6IFwiMjkyMjc1NTQ1MDA4MTA6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPeUt5TUFGRVBDKzlyOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFYbW5zMzJ2a3IrWEhScUMyanBjNGpFWUdlNkZvUTdXczhjNHpXVUVFQVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMjVSTFIzNzlSVnQ5MzJoTVd0QlhsbE1RRXBwVHVzdEgydVZhb2lLVFVlWEhjTldmV2hzVUZmc1RhSUFld0VLa001L0hVdnhVRDRQVzhEYksydFB0Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiclBSWTNEdTN0dXlKNHdkSHNTTk43eUt1YXNocmZwYWlUZHhCRmlCVHczdmlRREV1ZHNHenU5Sit2d1RwMUFJVXRhaERDTzJ1a05nNGdtN3RHN2F4aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1ODgxNDU3MjI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDY3NDY3N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
