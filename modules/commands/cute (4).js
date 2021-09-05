const fs = require("fs");
module.exports.config = {
	name: "4cute",
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
	if (event.body.indexOf("4cute") == 0 || (event.body.indexOf("4Cute") == 0)) {
		var msg = {
			body: "Kamu Adalah Inspirasiku",
			attachment: fs.createReadStream(__dirname + `/music/Kamu Adalah Inspirasiku.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}