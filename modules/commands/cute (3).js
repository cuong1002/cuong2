const fs = require("fs");
module.exports.config = {
	name: "3cute",
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
	if (event.body.indexOf("3cute") == 0 || (event.body.indexOf("3Cute") == 0)) {
		var msg = {
			body: "De Yang Gatal Gatal Sa",
			attachment: fs.createReadStream(__dirname + `/music/De Yang Gatal Gatal Sa.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}