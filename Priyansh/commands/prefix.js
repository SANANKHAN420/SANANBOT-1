module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: " Fixed by Talha",
  description: "given prefix detail",
  commandCategory: "Dành cho Admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;

  if (this.config.credits != "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭") {
    return api.sendMessage(`Again change credit to 𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭`, threadID, messageID);
  }

  function out(data) {
    api.sendMessage(data, threadID, messageID);
  }

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = [
    "mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong",
    "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead",
    "where prefix", "what is bot", "what prefix bot", "how to use bot", "how use bot",
    "where are the bots","bot not working","bot is offline","where prefix","prefx",
    "prfix","prifx","perfix","bot not talking","where is bot"
  ];

  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() || body === i || str === body) {
      const prefix = threadSetting.PREFIX || global.config.PREFIX;

      if (data.PREFIX == null) {
        return out(`This Is My Prefix ⇉ [ ${prefix} ] 💝`);
      } else {
        return out(
`╔════ ❀.•🎀•.❀ ════╗
        𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗
╚════ ❀.•🎀•.❀ ════╝

🔹 𝗣𝗥𝗘𝗙𝗜𝗫: [ ${prefix} ]
🔹 𝗢𝗪𝗡𝗘𝗥: 𝑻𝒂𝒍𝒉𝒂 𝑷𝒂𝒕𝒉𝒂𝒏
🔹 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗜𝗗: https://www.facebook.com/share/193GypVyJQ/

💙 𝑻𝒉𝒂𝒏𝒌 𝒚𝒐𝒖 𝒇𝒐𝒓 𝒖𝒔𝒊𝒏𝒈 𝒎𝒚 𝒃𝒐𝒕!
🕊️ 𝑺𝒕𝒂𝒚 𝒄𝒐𝒐𝒍 𝒂𝒏𝒅 𝒔𝒑𝒓𝒆𝒂𝒅 𝒍𝒐𝒗𝒆 💫`
        );
      }
    }
  });
};

module.exports.run = async ({ event, api }) => {
  return api.sendMessage("error", event.threadID);
};
