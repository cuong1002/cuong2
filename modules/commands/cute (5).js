const fs = require("fs");
module.exports.config = {
	name: "5cute",
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
	if (event.body.indexOf("5cute") == 0 || (event.body.indexOf("5Cute") == 0)) {
		var msg = {
			body: "I Love You",
			attachment: fs.createReadStream(__dirname + `/music/I Love You.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}