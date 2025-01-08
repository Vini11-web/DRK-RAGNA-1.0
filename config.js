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
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "+221789229467";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVAvUjFIMEVmUmdsc0xOOHpHMUpETXRkaS9ZZThQV1VtekdhU25DOHVYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWxVTzV5RFZJNDdLRGQ1bEtFWjUrVlBIV1Npdi93VXd2YlBpR1RwaTlnUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUDlueElGTmFSK2xOWVRlR1lhZlN0SG5udUtkeWxLWGx1RkpJVlEyWUU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsOTZvdXFZZnRVdXAwbEZnSnJLQmVVOFpiTHdsaURzNmtWV05TNXBPeW44PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFSERHclYrR09RY2FBNU9KbVNmMXhFbHcxUXpGZnZHclFBK05YVmY1VnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZyTk1jRU1iY0J0UStWNS9uS2FtdDI1RFN6N215MHNBVTgwbGE5Z0JkeFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVyWUd6ZnU5NXlpZStvNzMrbzNRMFpVcUVIRW41YStSazNNUzllQ3ZYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWREREYxSUkyWjAxRDkxUzJnaUVnbjZQZWhaMDVKQm1KdXpJcjFwT0Uydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtYcDBEeVBka3ZSaG9MMERJSktWVzZJdVZzU3BXVGtScDJuVElaV0NwUnhpYk1JdTFoWFBnSEdlRHYyUHV2K094STMyc3lWRDM0Y1BTLzk1MlQwM0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJpeFJFaG1ISXZvZWEyK1kwSzlLdHp2S1dlenNFbDBld05oR1J6dDZJTzRFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyMTc4OTIyOTQ2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxN0Y3ODREN0FFMjE4RDA3Njk3MEVBNDMxRjdEQkNDOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2MzQ5NzM3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMjE3ODkyMjk0NjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTgxODdCRjg4MDI1NDhFNThFMTVBQzFCNjhDM0VBQkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjM0OTczN31dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia3lVYVpBazVUTEszY3JtSHE5QzExUSIsInBob25lSWQiOiIyNTMyYjJiOS0wYzhhLTQ4MTctOTRiNC1hZWRhMjc0ZTZkYmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2FwNEVoTFZhYkM3UW1zc3ZVZElid1hwTXB3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlnTk9RSmpDQ2YxTUJRYnI0U3hnSHE1S1JGOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaODJLM1ZRTSIsIm1lIjp7ImlkIjoiMjIxNzg5MjI5NDY3OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4pmw8J2QjPCdkIjwnZCY8J2QgPCdkIzwnZCU8J2QkfCdkIDimbDwk4KF8J2Qi/CdkIDwnZCN8J2Qg/CdkITwnZCR8J2QkvCdkJfwk4KBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOalY0YU1CRUpldytyc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnZytiaUFlWVJhcVBtbUFLTGZkdCsvSVF1eWkyS2lkS2V4ZVdjeC9iZUVZPSIsImFjY291bnRTaWduYXR1cmUiOiJLN3FCVWVDU0ZBdml0WC9maHRCN3FUb0ZWR2d4VjZJYzNadFZxbVdvWHRPTWNvOTN2TEw5Tms0Vk8rS3pmMWxXNXBLZ1N0Wk9JVDFlSEpQbEdDdzVEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQVZoM0o4UWJRREFMaHRHdmhEZ3lmekxDUG93dktLSWpvR3ZoNXcyWmwyU3M0ajJGU0hSMUZ1S2VMQ2g3QWlFSkl2SExhK3p0VXQxekU4K0o1NHRIQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3ODkyMjk0Njc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZSVBtNGdIbUVXcWo1cGdDaTMzYmZ2eUVMc290aW9uU25zWGxuTWYyM2hHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MzQ5NzMzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhMbSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "*",
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
