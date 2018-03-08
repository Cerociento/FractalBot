const Discord = require('discord.js');
const boto = new Discord.Client();
const config = require("./config.json");
const opn = require("opn");
var prefix = config.prefix;
const swearWords = ["apesta", "mierda", "polla"];
var num = 0;

const embed = {
  "color": 16711684,
  "timestamp": "2018-03-07T05:17:24.179Z",
  "footer": {
    "text": "!ayuda"
  },
  "fields": [
    {
      "name": "Trello",
      "value": "https://trello.com/fractalmindstudio",
      "inline": true
    },
    {
      "name": "Google Play",
      "value": "https://play.google.com",
      "inline": true
    },
    {
      "name": "Google",
      "value": "https://google.com",
      "inline": true
    },
    {
      "name": "Youtube",
      "value": "https://youtube.com",
      "inline": true
    },
    {
      "name": "Gmail",
      "value": "https://mail.google.com",
      "inline": true
    },
    {
      "name": "Jira",
      "value": "http://fractalmindstudio.com:8180",
      "inline": true
    }
  ]
};
	'use strict';
	const nodemailer = require('nodemailer');
	const xoauth2 = require("xoauth2");

	//nodemailer.createTestAccount((err, account) => {
			var transporter = nodemailer.createTransport({
					service: "gmail",
					auth:{
						//xoauth2: xoauth2.createXOAuth2Generator({
							type: "Oauth2",
							user: "bototobdisc@gmail.com",
							clientId: "1000279861578-vfrlms81ojqffeumjnp111h2bejnd8kf.apps.googleusercontent.com",
							clientSecret: "YyRyDYKmXzMN2nMZnSfuOFh9",
							refreshToken: "1/WbVOpJLMSSY696xefGPknGiAj1vS8PW3RNJth-zxw4o",
							accessToken: "ya29.Glt3BaopLZ6uGoj2wkRA4P3oFZzqkIsUScHWiD_9eRoRkouVck4oGZJf3I551GNwHoeNgEsxqq3lVg8fyMvsMMtvCcB71HcnnWzK9PuvLN3Na8xB8viHriZVtlbW"
						//})
					}
			})
//	});


boto.on('ready', () => {
	console.log(`Logged in as ${boto.user.tag}!`);
	});
	
boto.on('message', (message) => {

let arg = message.content.split(" ").slice(1);
var argResult = arg.join(" ");

	if(swearWords.some(word => message.content.includes(word)) ) {
		message.reply("Que maleducado, tendré que ir a matarte :yum:");
	  }

	if(!message.content.startsWith(config.prefix)) return;
	if(message.author.bot) return;
	
	if(message.content == prefix + 'hola') {
		message.author.send("hola");
	}

	if(message.content.startsWith(prefix + "mail"))	{
		//message.reply(argResult);
		var mailOptions = {
			from: 'FractalBot <bototobdisc@gmail.com>',
			to: 'Cerociento@vivaldi.net', 
			subject: 'Hello', 
			text: argResult, 
		}

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) 
			{
				 console.log(error);
			}
			else
			{
				console.log("Mail enviado");
			}
	})
	}

	if(message.content.startsWith(prefix + 'link'))	{    
		//message.author.send({embed});

		function OpenUrl()
		{
			if(argResult.indexOf(".com") != -1)
			{
				opn("https://"+ argResult);
			}
			else
			{
				opn("https://"+ argResult +".com");
			}
		}
		if(argResult != "")
			OpenUrl();
	}

	if(message.content.startsWith(prefix))
	{
		message.delete(message);
	}
});

boto.login(process.env.BOT_TOKEN);
