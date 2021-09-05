const fs = require("fs");
module.exports.config = {
	name: "Ktdas",
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
	if (event.body.indexOf("ktdas") == 0 || (event.body.indexOf("Ktdas") == 0)) {
		var msg = {
			body: "ke theo duoi anh sang",
			attachment: fs.createReadStream(__dirname + `/music/ktdas.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}