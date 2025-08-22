module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100084696122111" , "100084696122111"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For SaNaN KhaN", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} 𝐁𝐨𝐭 𝐀𝐫𝐞 𝐍𝐨𝐰 𝐓𝐮𝐫𝐧𝐞𝐝 𝐎𝐟𝐟.𝐎𝐤𝐢𝐢𝐰 𝐁𝐲𝐞 𝐆𝐡𝐚𝐫𝐞𝐞𝐧𝐎𝐧 👀👻😂`,event.threadID, () =>process.exit(0))
}
