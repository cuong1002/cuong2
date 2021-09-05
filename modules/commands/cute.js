const fs = require("fs");
module.exports.config = {
	name: "cute",
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
	if (event.body.indexOf("cute") == 0 || (event.body.indexOf("Cute") == 0)) {
		var msg = {
			body: "Sứ Thanh Hoa",
			attachment: fs.createReadStream(__dirname + `/music/Sứ Thanh Hoa.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}