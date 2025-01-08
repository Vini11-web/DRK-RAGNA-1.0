//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "221777661015";
global.owner = process.env.OWNER_NUMBER || "221789229467";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hlNDBzdlp3aFdzNnpLYVEyQm04QWwvOUFmZzNKL29UK29EeWxsSSswZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2lOaUpIbmpEaDJXSGxjQXpOd2o1eDk5L2s0dzlIdGQ0c1hIMUZoL1JRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLR1VvNDF0ZEpSemJJbnVSbjQ1UzU2K0lzSWc0K0pQWmVwQnplY0s2RTNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKRjBPaGs3UDhncWdLczZudVhqR1ZYbWUzRGxGQVBmZ1JYbWJSMDFqdXgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOeXgwVmtNaDZSNE1wRU5CcjBjTFRaR0hIWDBWSWN2b1JBYzk3ZEl6Rlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpaVDVuaDVWNllJOU9XdVMyUzZUMDRwQUhBVHE5NWlJcDMxT0k2c2pveU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hCbTVlOW9XcHJFY2tDMXd3T3lOV0tpUzJkSzRxK1BLZkJwa3ZwWERWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVFZUHRWL3R1SEkyREdnV1hVejBINjBYOFY4NVh0ZkgzUFVPL211WGNEdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl2ZGRoYy9jTm5MYXlVa2x4YlZjbDBVS1ZVbENDaFFON293dHNLWE82c25aUjZUVmtvS3FRKzhlZVVkeDZ3bEdYREFiUkFlQ0N1MTROaUpUUXphUmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJnMytWTWpLSklidjhzYkU0SW9ncGN6NEdsbUlWSGRmWHFIbTZQaUwvVzhZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyMTc4OTIyOTQ2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMDU0OUQ2NjU0OTE4MkFFQzU1NEZBOUM3OUVFQzhBRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2MzUzMzM1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMjE3ODkyMjk0NjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDUyQjU5RkIyQzczMjE4RTY1QzQ4MDJFRkZCNjIxMEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjM1MzMzNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidUZ6Y2tjSTdTdTZfbzNWbjZjSXo1ZyIsInBob25lSWQiOiI5ZTA2ZThkZi01NjJlLTQ0ZTctOTZlNi04ZDdjZDE4NWFlYzEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTZuL3FuZS9jU3JEVTZiamlocDNkWkRmazNRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImllaTJKUlRUVnRhajFzeTZjb2ozN0ZOMGM5MD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSQ04ySFpUVCIsIm1lIjp7ImlkIjoiMjIxNzg5MjI5NDY3OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4pmw8J2QjPCdkIjwnZCY8J2QgPCdkIzwnZCU8J2QkfCdkIDimbDwk4KF8J2Qi/CdkIDwnZCN8J2Qg/CdkITwnZCR8J2QkvCdkJfwk4KBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOblY0YU1CRUtiTStyc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnZytiaUFlWVJhcVBtbUFLTGZkdCsvSVF1eWkyS2lkS2V4ZVdjeC9iZUVZPSIsImFjY291bnRTaWduYXR1cmUiOiJ6Z3E1REN6ZzNDRFFqNDNFdE53bHV0S2VCM0JCODE1c2VxQmE0NXpXeDEzUFR1WnFDakxOa0RrbFNuU1BxWk15ZXBjZWowR2ZDSTladzhGc1VsRFdBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRUlvcHIrZG1HSFJnYUhlemJJYlc4dlhHTDN2cDRKZjNZVXRhUmJhQWE5YlJBYmlpSUZ0QUh3SFNxSnkyUUJwMDJFdk1iZFZ4UXh1WGt5QktoU2RTaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3ODkyMjk0Njc6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZSVBtNGdIbUVXcWo1cGdDaTMzYmZ2eUVMc290aW9uU25zWGxuTWYyM2hHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MzUzMzMyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhMbyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
