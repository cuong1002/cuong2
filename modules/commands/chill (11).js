const fs = require("fs");
module.exports.config = {
	name: "11chill",
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
	if (event.body.indexOf("11chill") == 0 || (event.body.indexOf("11Chill") == 0)) {
		var msg = {
			body: "goodbye to a world",
			attachment: fs.createReadStream(__dirname + `/music/goodbye to a world Gustixa.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}