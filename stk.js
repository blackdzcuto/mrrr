module.exports.config = {
  name: "stk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "Donate cho admin",
  commandCategory: "Admin",
  usages: "stk",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }  
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/CygJIqC.gif",
"https://i.imgur.com/ij2RQ0j.gif",
  ];
	  var callback = () => api.sendMessage({body:`=== ðļ [ ðððððð ] ðļ ===\n
ðð ððð ð―ð°ðŽðŧðŠðķðīðĐðĻðĩðē ðð\nðŧðđðĻĖĖðĩ ðŧðŊðĻðĩðŊ ðŧðžĖ\nððð: ðððððððððð\n\nððĒĖð§ðĄ ððĄðĻ ð­ðĄðŪðĖ ððĻð­ ðŊðĻĖĖðĒ ð ðĒðĖ ðÄ ð§ðĄðŪĖð§ð  ððĖĢð§ ð§ðĖðĻ ððĻĖ ðĨðĻĖð§ð  ð­ðĻĖĖð­ ð­ðĄðĒĖ ð­ðĄðĒĖð§ðĄ ð­ðĄðĻðĖð§ð  ððð§ðĪ ðĒĖð­ ðĶðŪð ðĶðĒĖ ð ðĻĖðĒ, ðĶðĖðĒ ðĒðŪðŪðŪ âĪïļ`,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   };