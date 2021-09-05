const fs = require("fs");
module.exports.config = {
	name: "girl1",
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
	if (event.body.indexOf("girl1") == 0 || (event.body.indexOf("Girl1") == 0)) {
		var msg = {
			body: "đây",
			attachment: fs.createReadStream(__dirname + `/video/part1.mp4`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}