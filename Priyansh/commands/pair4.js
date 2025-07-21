module.exports.config = {
  name: "pair4",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Talha",
  description: "Pair with people of the opposite gender in the group",
  commandCategory: "For users",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "jimp": ""
  }
};

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "cache", "canvas");

  if (!fs.existsSync(__root)) fs.mkdirSync(__root, { recursive: true });

  const pairingImgUrl = "https://i.ibb.co/bgFhk6Bb/Messenger-creation-2611011159251969.jpg";
  const baseImagePath = path.join(__root, "pairing_temp.png");
  const pathImg = path.join(__root, `pairing_${one}_${two}.png`);
  const avatarOne = path.join(__root, `avt_${one}.png`);
  const avatarTwo = path.join(__root, `avt_${two}.png`);

  try {
    const baseImageBuffer = (await axios.get(pairingImgUrl, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(baseImagePath, Buffer.from(baseImageBuffer, 'binary'));

    const avatarOneBuffer = (await axios.get(
      `https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: 'arraybuffer' }
    )).data;
    fs.writeFileSync(avatarOne, Buffer.from(avatarOneBuffer, 'binary'));

    const avatarTwoBuffer = (await axios.get(
      `https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: 'arraybuffer' }
    )).data;
    fs.writeFileSync(avatarTwo, Buffer.from(avatarTwoBuffer, 'binary'));

    let pairing_img = await jimp.read(baseImagePath);
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));

    pairing_img
      .composite(circleOne.resize(370, 370), 130, 170)
      .composite(circleTwo.resize(370, 370), 790, 170);

    const raw = await pairing_img.getBufferAsync("image/png");
    fs.writeFileSync(pathImg, raw);

    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    fs.unlinkSync(baseImagePath);

    return pathImg;
  } catch (err) {
    console.error("Image generation failed:", err);
    throw err;
  }
}

async function circle(image) {
  const jimp = require("jimp");
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID, senderID } = event;
  const fs = require("fs-extra");
  const tl = ['21%', '11%', '55%', '89%', '22%', '45%', '1%', '4%', '78%', '15%', '91%', '77%', '41%', '32%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
  const tle = tl[Math.floor(Math.random() * tl.length)];

  try {
    const userInfo = await api.getUserInfo(senderID);
    const namee = userInfo[senderID].name;
    const senderGender = userInfo[senderID].gender;

    const threadInfo = await api.getThreadInfo(threadID);
    let participantIDs = threadInfo.participantIDs.filter(id => id !== senderID);
    if (participantIDs.length === 0) {
      return api.sendMessage("No other participants found in the group to pair with.", threadID, messageID);
    }

    const participantsInfo = await api.getUserInfo(participantIDs);
    let oppositeGenderIDs = [];

    if (senderGender === 2) {
      oppositeGenderIDs = participantIDs.filter(id => participantsInfo[id]?.gender === 1);
    } else if (senderGender === 1) {
      oppositeGenderIDs = participantIDs.filter(id => participantsInfo[id]?.gender === 2);
    } else {
      oppositeGenderIDs = participantIDs;
    }

    let randomID;
    if (oppositeGenderIDs.length > 0) {
      randomID = oppositeGenderIDs[Math.floor(Math.random() * oppositeGenderIDs.length)];
    } else {
      randomID = participantIDs[Math.floor(Math.random() * participantIDs.length)];
    }

    const partnerInfo = await api.getUserInfo(randomID);
    const name = partnerInfo[randomID].name;

    const arraytag = [
      { id: senderID, tag: namee },
      { id: randomID, tag: name }
    ];

    const one = senderID, two = randomID;

    return makeImage({ one, two }).then(path =>
      api.sendMessage({
        body: `💖✨ 𝓢𝓾𝓬𝓬𝓮𝓼𝓼𝓯𝓾𝓵 𝓛𝓸𝓿𝓮 𝓜𝓪𝓽𝓬𝓱 ✨💖
━━━━━━━━━━━━━━━━━━
💘 𝓢𝓸𝓶𝓮𝔀𝓱𝓮𝓻𝓮 𝓫𝓮𝓽𝔀𝓮𝓮𝓷 𝓵𝓾𝓬𝓴 & 𝓭𝓮𝓼𝓽𝓲𝓷𝔂...

💑 ${namee} 💞 ${name}
❤️ 𝓛𝓸𝓿𝓮 𝓒𝓸𝓷𝓷𝓮𝓬𝓽𝓲𝓸𝓷: ${tle}

📝 𝓡𝓸𝓶𝓪𝓷𝓽𝓲𝓬 𝓛𝓲𝓷𝓮𝓼:
❝ 𝑻𝒖 𝒉𝒂𝒔𝒆 𝒕𝒐 𝒛𝒂𝒎𝒂𝒏𝒂 𝒉𝒂𝒔𝒕𝒂 𝒉𝒂𝒊...
𝑻𝒖 𝒖𝒅𝒂𝒔 𝒕𝒐 𝒅𝒊𝒍 𝒕𝒐𝒕𝒂 𝒉𝒂𝒊... ❞

👑 𝓞𝔀𝓷𝓮𝓻: 𝒯𝒶𝓁𝒽𝒶 𝒫𝒶𝓉𝒉𝒶𝓃 👑
━━━━━━━━━━━━━━━━━━`,
        mentions: arraytag,
        attachment: fs.createReadStream(path)
      }, threadID, () => fs.unlinkSync(path), messageID)
    );
  } catch (error) {
    console.error("Error in pair4 command:", error.message);
    return api.sendMessage("Pairing failed. Try again later or contact admin.", threadID, messageID);
  }
};
