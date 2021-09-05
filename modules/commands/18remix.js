const fs = require("fs");
module.exports.config = {
	name: "18remix",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "music",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function ({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("18remix") == 0 || (event.body.indexOf("hentai") == 0)) {
		var msg = {
			body: "kimochi",
			attachment: fs.createReadStream(__dirname + `/music/kmc.mp3`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}