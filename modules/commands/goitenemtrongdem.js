const fs = require("fs");
module.exports.config = {
	name: "Gọi tên em trong đêm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CUONG",
	description: "music",
	commandCategory: "video",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function ({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Gọi tên em trong đêm") == 0 || (event.body.indexOf("gọi tên em trong đêm") == 0)) {
		var msg = {
			body: "đây",
			attachment: fs.createReadStream(__dirname + `/video/gtetd.mp4`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}