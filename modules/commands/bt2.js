const fs = require("fs");
module.exports.config = {
	name: "bt2",
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
	if (event.body.indexOf("batan2") == 0 || (event.body.indexOf("Bt2") == 0)) {
		var msg = {
			body: "bt2",
			attachment: fs.createReadStream(__dirname + `/music/bt2.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}