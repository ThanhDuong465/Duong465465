module.exports.config = {
	name:"hentai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Random video sex theo api",
	commandCategory: "system",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apixin.quyenmy2k7.repl.co/hentai').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `Hentai của mày đây`,
						attachment: fs.createReadStream(__dirname + `/cache/hentai.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hentai.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/hentai.${ext}`)).on("close", callback);
			})
                                   }