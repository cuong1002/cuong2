const fs = require("fs");
module.exports.config = {
	name: "1chill",
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
	if (event.body.indexOf("1chill") == 0 || (event.body.indexOf("1Chill") == 0)) {
		var msg = {
			body: "Spirit (Oceans)",
			attachment: fs.createReadStream(__dirname + `/music/chill1.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}