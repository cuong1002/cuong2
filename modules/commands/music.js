const fs = require("fs");
module.exports.config = {
name: "music",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "music",
	commandCategory: "nhạc",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("music")==0 || (event.body.indexOf("Music")==0)) {
		var msg = {
				body: "đây",
			attachment: fs.createReadStream(__dirname + `/music/music2.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}