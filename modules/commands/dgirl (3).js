const fs = require("fs");
module.exports.config = {
	name: "3dgirl",
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
	if (event.body.indexOf("3dgirl") == 0 || (event.body.indexOf("3Dgirl") == 0)) {
		var msg = {
			body: "khối dgirl hiện có 4 video(Toppic: a,b,c,d,e,f,g,i,k,m,n,p,q,r,s,t,u,y,z)",
			attachment: fs.createReadStream(__dirname + `/videogirl/dgirl/3.mp4`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}