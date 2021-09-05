const fs = require("fs");
module.exports.config = {
	name: "mn1",
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
	if (event.body.indexOf("mn1") == 0 || (event.body.indexOf("Mn1") == 0)) {
		var msg = {
			body: "myn",
			attachment: fs.createReadStream(__dirname + `/music/mn1.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}