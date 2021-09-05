const fs = require("fs");
module.exports.config = {
	name: "1cute",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CUONG",
	description: "music",
	commandCategory: "nhạc",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function ({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("1cute") == 0 || (event.body.indexOf("1Cute") == 0)) {
		var msg = {
			body: "姐姐微信来了",
			attachment: fs.createReadStream(__dirname + `/music/姐姐微信来了booms.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}