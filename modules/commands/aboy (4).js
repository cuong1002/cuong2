const fs = require("fs");
module.exports.config = {
	name: "4aboy",
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
	if (event.body.indexOf("4aboy") == 0 || (event.body.indexOf("4Aboy") == 0)) {
		var msg = {
			body: "khối aboy hiện có 4 video(Toppic: a,b,c,d,e,f,g,i,k,m,n,o,p,q,r,s)",
			attachment: fs.createReadStream(__dirname + `/videoboy/aboy/4.mp4`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}