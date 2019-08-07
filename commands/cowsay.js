const cowsay = require("cowsay");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const cowList = ["beavis.zen",
    "bong",
    "bud-frogs",
    "bunny",
    "cheese",
    "cower",
    "daemon",
    "default",
    "doge",
    "dragon-and-cow",
    "dragon",
    "elephant-in-snake",
    "elephant",
    "eyes",
    "flaming-sheep",
    "ghostbusters",
    "goat",
    "hedgehog",
    "hellokitty",
    "kiss",
    "kitty",
    "koala",
    "kosh",
    "luke-koala",
    "mech-and-cow",
    "meow",
    "milk",
    "moofasa",
    "moose",
    "mutilated",
    "ren",
    "satanic",
    "sheep",
    "skeleton",
    "small",
    "squirrel",
    "stegosaurus",
    "stimpy",
    "supermilker",
    "surgery",
    "telebears",
    "turkey",
    "turtle",
    "tux",
    "vader-koala",
    "vader",
    "whale",
    "www"
  ];
  if (args.length === 0) {
    message.reply("you need to provide some text for the cow to say!");
  } else if (cowList.indexOf(args[0].toLowerCase()) > -1) {
    const cow = args.shift().toLowerCase();
    message.channel.send(`\`\`\`\n${cowsay.say({
      text: args.join(" "),
      f: cow
    })}\n\`\`\``);
  } else {
    message.channel.send(`\`\`\`\n${cowsay.say({ text: args.join(" ") })}\n\`\`\``);
  }
};

exports.aliases = ["cow"];
