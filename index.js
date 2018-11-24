const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "?";
var fs = require("fs");
var data = fs.readFileSync("./src/docs.json", "utf8");
var words = JSON.parse(data);
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (!msg.content.startsWith(prefix)) return;
  var args = msg.content.substring(prefix.length).split(" ");

  switch (args[0]) {
    case "xd":
      msg.channel.send("BIG XD");
      break;

    case "db":
      msg.channel.send(words[args[1].split(" ")].content);
      break;

    case "cai":
      args.shift();
      var toSay = args;
      var isSaying = false;
      var intervalId;

      if (!msg.member.hasPermission("ADMINISTRATOR")) return;

      if (toSay.length) {
        intervalId = setInterval(() => {
          msg.channel.send(toSay.shift());

          if (!toSay.length) {
            clearInterval(intervalId);
          }
        }, 400);
      }

      break;
    default:
      msg.channel.send("``ERROR. COMMAND DOES NOT EXIST``");
      break;
  }
});

client.login("not so fast :)");
console.log("yes");
