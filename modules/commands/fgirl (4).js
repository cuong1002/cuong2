const fs = require("fs");
module.exports.config = {
	name: "4fgirl",
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
	if (event.body.indexOf("4fgirl") == 0 || (event.body.indexOf("4Fgirl") == 0)) {
		var msg = {
			body: "khối fgirl hiện có 4 video(Toppic: a,b,c,d,e,f,g,i,k,m,n,p,q,r,s,t,u,y,z)",
			attachment: fs.createReadStream(__dirname + `/videogirl/fgirl/4.mp4`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}