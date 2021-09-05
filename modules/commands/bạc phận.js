const fs = require("fs");
module.exports.config = {
	name: "bạc phận",
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
	if (event.body.indexOf("Bạc phận") == 0 || (event.body.indexOf("bạc phận") == 0)) {
		var msg = {
			body: "đây",
			attachment: fs.createReadStream(__dirname + `/music/bp.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}