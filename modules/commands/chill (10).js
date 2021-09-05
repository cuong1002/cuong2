const fs = require("fs");
module.exports.config = {
	name: "10chill",
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
	if (event.body.indexOf("10chill") == 0 || (event.body.indexOf("10Chill") == 0)) {
		var msg = {
			body: "The Girl I've Never Meet",
			attachment: fs.createReadStream(__dirname + `/music/chill10.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}