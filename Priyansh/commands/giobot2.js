module.exports.config = {
  name: "giobot2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Talha ✨",
  description: "Zidi reply system with stylish lines",
  commandCategory: "fun",
  usages: "just say 'zidi'",
  cooldowns: 3
};

module.exports.handleEvent = async function({ event, api }) {
  const triggerWords = ["zidi", "Zidi", "ziddi", "Ziddi"];
  const message = event.body?.toLowerCase();

  if (!message) return;

  if (triggerWords.some(word => message.includes(word))) {
    const zidiLines = [
      "𝑍𝑖𝑑𝑖 𝑅𝑎𝑏𝑖 𝑘𝑎 𝑑𝑖𝑙 𝑡𝑜 𝑠𝑎𝑓 𝘩𝑎𝑖, 𝑏𝑎𝑠 𝑧𝑖𝑑 𝑡𝘩𝑜𝑑𝑖 𝑧𝑦𝑎𝑑𝑎 𝘩𝑎𝑖 💁‍♀️",
      "𝒁𝒊𝒅𝒊 𝑹𝒂𝒃𝒊𝒂 𝒌𝒂 𝒎𝒐𝒐𝒅 𝒉𝒐 𝒕𝒐 𝒃𝒐𝒔 𝒔𝒂𝒃 𝒌𝒖𝒄𝒉 𝒉𝒐 𝒔𝒌𝒕𝒂 𝒉𝒂𝒊 😏",
      "𝒁𝒊𝒅 𝒌𝒂 𝒏𝒂𝒎 𝒉𝒊 𝑹𝒂𝒃𝒊 𝒉𝒂𝒊 💥",
      "𝒁𝒊𝒅𝒊 𝒍𝒐𝒈 𝒅𝒊𝒍 𝒔𝒆 𝒏𝒂𝒉𝒊 𝒏𝒊𝒌𝒂𝒍𝒕𝒆 💔",
      "𝒁𝒊𝒅𝒊 𝑹𝒂𝒃𝒊 𝒉𝒂𝒊, 𝒑𝒚𝒂𝒂𝒓 𝒃𝒉𝒊 𝒘𝒐𝒉𝒊 𝒌𝒓𝒕𝒊 𝒉𝒂𝒊 💖",
      "𝑍𝑖𝑑𝑖 𝑅𝑎𝑏𝑖𝑎 = 𝒑𝒚𝒂𝒂𝒓 + 𝒏𝒂𝒛𝒂𝒌𝒂𝒕 + 𝒛𝒊𝒅 😍",
      "𝑍𝑖𝑑 𝑎𝑢𝑟 𝑝𝑦𝑎𝑎𝑟 𝑚𝑒𝑖𝑛 𝑠𝑖𝑟𝑓 𝑅𝑎𝑏𝑖 𝑏𝑒𝑠𝑡 💫",
      "𝒁𝒊𝒅 𝒌𝒆 𝒔𝒂𝒂𝒕𝒉 𝒑𝒚𝒂𝒂𝒓 𝒃𝒉𝒊 𝒉𝒐 𝒕𝒐 𝒘𝒐 𝒁𝒊𝒅𝒊 𝑹𝒂𝒃𝒊𝒂 𝒉𝒐𝒕𝒊 𝒉𝒂𝒊 💘",
      "𝑍𝑖𝑑𝑖 𝑏𝑎𝑛𝑎 𝑑𝑖𝑎 𝑚𝑎𝑔𝑎𝑟 𝑑𝑖𝑙 𝑠𝑎𝑓 𝑟𝑘ℎ𝑎! 😌",
      "𝑀𝑒𝑟𝑖 𝑅𝑎𝑏𝑖 𝑏ℎ𝑖 𝑧𝑖𝑑𝑖 𝑠ℎ𝑎𝑟𝑎𝑟𝑎𝑡𝑖 𝑠𝑒 𝑏ℎ𝑎𝑟𝑝𝑢𝑟 𝘩𝑎𝑖 😜",
      // Add more up to 50...
      "𝑍𝑖𝑑𝑖 𝑙𝑜𝑔 𝑝𝑦𝑎𝑟 𝑛𝑖𝑏ℎ𝑎𝑛𝑒 𝑚𝑒𝑖𝑛 𝑏ℎ𝑖 𝑎𝑎𝑔𝑒 ℎ𝑜𝑡𝑒 ℎ𝑎𝑖𝑛 ❤️",
      "𝑍𝑖𝑑 𝑘𝑎 𝑎𝑛𝑑𝑎𝑧 ℎ𝑖 𝑎𝑙𝑎𝑔 ℎ𝑜𝑡𝑎 ℎ𝑎𝑖 😎",
      "𝑍𝑖𝑑𝑖 𝑅𝑎𝑏𝑖 = 𝑀𝑒𝑟𝑖 𝑗𝑎𝑎𝑛 🤍",
      "𝑍𝑖𝑑𝑖 𝑙𝑜𝑔 𝑛𝑎𝑧𝑢𝑘 ℎ𝑖 𝑠𝑎ℎ𝑖 😌",
      "𝒁𝒊𝒅𝒊 𝒃𝒐𝒍𝒐 𝒕𝒐 𝒅𝒊𝒍 𝒋𝒊𝒕𝒏𝒆 𝒘𝒂𝒍𝒂 𝒏𝒂𝒎 💋",
      "𝑍𝑖𝑑𝑖 𝑅𝑎𝑏𝑖 — 𝑎𝑡𝑡𝑖𝑡𝑢𝑑𝑒 𝑎𝑢𝑟 𝑝𝑦𝑎𝑎𝑟 𝑘𝑎 𝑚𝑖𝑥 ✨",
      "𝑅𝑎𝑏𝑖 𝑧𝑖𝑑𝑖 ℎ𝑜 𝑠ℎ𝑎𝑟𝑎𝑟𝑎𝑡𝑖 𝑛ℎ𝑖 😹",
      "𝑅𝑎𝑏𝑖 𝑘𝑖 𝑧𝑖𝑑 𝑝𝑒 𝑑𝑖𝑙 𝑎𝑔𝑎 𝑑𝑖𝑎 𝑚𝑎𝑖𝑛𝑒 🥵",
      "𝒁𝒊𝒅𝒊 𝑹𝒂𝒃𝒊 𝒐𝒏 𝒇𝒊𝒓𝒆 🔥",
      "𝒁𝒊𝒅 𝒎𝒆𝒊𝒏 𝒃𝒉𝒊 𝒂𝒕𝒕𝒊𝒕𝒖𝒅𝒆 𝒉𝒐𝒕𝒂 𝒉𝒂𝒊 💥"
    ];

    const zidiLine = zidiLines[Math.floor(Math.random() * zidiLines.length)];

    const body = `╭──── ∘❁∘────╮
💌 𝒁𝑰𝑫𝑰 𝑹𝑬𝑺𝑷𝑶𝑵𝑺𝑬 𝑩𝒀 𝑻𝑨𝑳𝑯𝑨 𝑩𝑶𝑻 ✨
╰──── ∘❁∘────╯

🎯 𝑹𝒆𝒔𝒑𝒐𝒏𝒔𝒆: ${zidiLine}

🧠 𝑨𝒖𝒕𝒐 𝑹𝒆𝒑𝒍𝒚 𝒕𝒐 "𝒁𝒊𝒅𝒊"

💗 𝑩𝒐𝒕 𝑶𝒘𝒏𝒆𝒓: 𝑻𝑨𝑳𝑯𝑨 ✨`;

    return api.sendMessage(body, event.threadID, event.messageID);
  }
};

module.exports.run = () => {};
