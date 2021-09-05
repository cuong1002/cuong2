const fs = require("fs");
module.exports.config = {
	name: "bto",
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
	if (event.body.indexOf("bto") == 0 || (event.body.indexOf("bto") == 0)) {
		var msg = {
			body: "1bto",
			attachment: fs.createReadStream(__dirname + `/music/bto.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}