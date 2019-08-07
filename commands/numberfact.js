const request = require("request");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  if (args.length === 0) {
    request({ uri: "http://numbersapi.com/random" }, (error, response, body) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send(`🔢 **Did you know?** ${body}`);
    });
  } else {
    if (args[0].match(/^\d+$/)) {
      request({ uri: `http://numbersapi.com/${args[0]}` }, (error, response, body) => {
        if (error) throw new Error(error);
        message.channel.stopTyping();
        message.channel.send(`🔢 **Did you know?** ${body}`);
      });
    } else {
      message.channel.stopTyping();
      message.reply("you need to provide a number!");
    }
  }
};

exports.aliases = ["numfact"];
