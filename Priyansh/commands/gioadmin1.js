module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "Talha",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61578652587744") {
    var aid = ["61578652587744"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝘉𝘪𝘨𝘳𝘦 𝘕𝘢𝘸𝘢𝘣 𝘻𝘢𝘥𝘪 𝘢𝘫𝘖 𝘯𝘢𝘸 𝘚𝘩𝘢𝘩𝘻𝘦𝘣 𝘢𝘸𝘱 𝘬𝘖 𝘮𝘪𝘴𝘴 𝘒𝘳 𝘳𝘩𝘢𝘢 𝘩𝘢𝘪𝘪😝😂", "𝘕𝘢𝘸𝘢𝘣 𝘡𝘢𝘥𝘪𝘪 𝘔𝘦𝘥𝘢𝘮 𝘒𝘢𝘩𝘢 𝘣𝘶𝘴𝘺 𝘩𝘖 𝘺𝘢𝘩𝘢 𝘢𝘖 𝘨𝘢𝘭𝘥𝘪 𝘴𝘺 🙆🏻‍♂️😁", "𝘉𝘪𝘨𝘳𝘦 𝘯𝘢𝘸𝘢𝘣 𝘻𝘢𝘥𝘪 𝘬𝘢𝘩𝘢 𝘮𝘶𝘩𝘩 𝘬𝘢𝘭𝘢 𝘒𝘳 𝘳𝘩𝘪 𝘩𝘰 𝘎𝘢𝘭𝘥𝘪 𝘢𝘰 𝘢𝘣 - 😂👀", "𝘚𝘩𝘢𝘩𝘻𝘦𝘥 𝘸𝘰 𝘳𝘖 𝘳𝘩𝘪 𝘩𝘢𝘪 𝘣𝘈𝘳 𝘣𝘢𝘳 𝘮𝘦𝘯𝘵𝘪𝘖𝘯 𝘯𝘢 𝘬𝘳𝘖 🥴🙈😜"," 𝘉𝘢𝘴 𝘢𝘸𝘣 𝘣𝘩𝘖𝘵 𝘩𝘖 𝘨𝘢𝘺𝘢 𝘵𝘶𝘮 𝘥𝘰𝘕𝘰 𝘮𝘢𝘳𝘰 𝘨𝘺 𝘮𝘦𝘳𝘺 𝘩𝘢𝘵𝘢𝘰𝘯 𝘴𝘺 𝘰𝘩𝘩 𝘺𝘢𝘢𝘥 𝘢𝘺𝘢 𝘮𝘢 𝘵𝘰 𝘣𝘰𝘵 𝘩𝘶𝘯 𝘮𝘦𝘳𝘺 𝘱𝘢𝘴 𝘩𝘢𝘵𝘩 𝘯𝘩𝘪 𝘤𝘶𝘳𝘳𝘢𝘯𝘵 𝘩𝘢𝘪 😹😾👊"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
