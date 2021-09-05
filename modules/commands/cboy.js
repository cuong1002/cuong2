const fs = require("fs");
module.exports.config = {
	name: "1cboy",
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
	if (event.body.indexOf("1cboy") == 0 || (event.body.indexOf("1Cboy") == 0)) {
		var msg = {
			body: "khối cboy hiện có 5 video(Toppic: a,b,c,d,e,f,g,i,k,m,n,o,p,q,r,s)",
			attachment: fs.createReadStream(__dirname + `/videoboy/cboy/1.mp4`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}