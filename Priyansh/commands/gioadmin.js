module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100084696122111") {
    var aid = ["100084696122111"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝗕𝗢𝗦𝗦 𝗕𝗨𝗦𝗬 𝗛𝗔𝗜𝗡🙁\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀 ⎯꯭̽↱𓆩 ⃪꯭༐༐ 𝐒͢͢𝐚𝐧֟፝͜͡𝐚𝐧 𝐊᪵𝐡𝐚֟፝͜͡𝐧ꭗ'⎯꯭̽★ı̄̈ı̄̈💓", "𝗕𝗮𝗯𝗬 𝗠𝗲𝗿𝘆 𝗢𝘄𝗻𝗲𝗿 𝗸𝗼 𝗥𝗲𝘀𝘁 𝗞𝗿𝗻𝘆 𝗗𝗼 𝗠𝗲𝗻𝘁𝗶𝗼𝗻 𝗻𝗶 𝗞𝗿𝗼😐😒\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ⎯꯭̽↱𓆩 ⃪꯭༐༐ 𝐒͢͢𝐚𝐧֟፝͜͡𝐚𝐧 𝐊᪵𝐡𝐚֟፝͜͡𝐧ꭗ'⎯꯭̽★ı̄̈ı̄̈💓", "𝗬𝘄𝗿 𝗘𝗸 𝗕𝗮𝗿𝗿 𝗞𝗲𝗵 𝘁𝘂 𝗱𝗶𝗬𝗮 𝗵𝗮𝗶 𝗠𝘂𝗷𝗛𝘆 𝗯𝘁𝗮𝗼 𝗞𝗬𝗮 𝗸𝗮𝗮𝗺 𝗛𝗮𝗶🤧😣\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍⎯꯭̽↱𓆩 ⃪꯭༐༐ 𝐒͢͢𝐚𝐧֟፝͜͡𝐚𝐧 𝐊᪵𝐡𝐚֟፝͜͡𝐧ꭗ'⎯꯭̽★ı̄̈ı̄̈💓", "BOSS CODING KR RAHIN HAIN\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍⎯꯭̽↱𓆩 ⃪꯭༐༐ 𝐒͢͢𝐚𝐧֟፝͜͡𝐚𝐧 𝐊᪵𝐡𝐚֟፝͜͡𝐧ꭗ'⎯꯭̽★ı̄̈ı̄̈💓", "KYA KAM HA APKO OUSY NAI BULAO\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ⎯꯭̽↱𓆩 ⃪꯭༐༐ 𝐒͢͢𝐚𝐧֟፝͜͡𝐚𝐧 𝐊᪵𝐡𝐚֟፝͜͡𝐧ꭗ'⎯꯭̽★ı̄̈ı̄̈💓", "SANAN SOYA HUWA HAI FZOL MANTION NAI KRO\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀 ⎯꯭̽↱𓆩 ⃪꯭༐༐ 𝐒͢͢𝐚𝐧֟፝͜͡𝐚𝐧 𝐊᪵𝐡𝐚֟፝͜͡𝐧ꭗ'⎯꯭̽★ı̄̈ı̄̈💓"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                     }
