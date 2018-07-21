//V.21/07/2018
const Discord = require('discord.js');
const boto = new Discord.Client();
const config = require("./config.json");
const opn = require("opn");
var prefix = config.prefix;
const swearWords = ["mierda", "puta", "joder", "gilipollas", "Mierda", "Puta", "Joder", "Gilipollas"];
const shenmueCaca = ["shenmue", "Shenmue"];
let arg;
var argResult;
var argAsunto;
var argCorreos = "";
const persona = new Discord.User();

	'use strict';
	const nodemailer = require('nodemailer');
	const xoauth2 = require("xoauth2");

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

boto.on('ready', (User) => {
	console.log(`Logged in as ${boto.user.username}!`);
	boto.user.setActivity("!ayuda");
	});


boto.on('message', (shenMessage) => {			
	
	let arg = shenMessage.content.split(" ").slice(1);
	var argResult = arg.join(" ");	
	
	if (shenMessage.content === 'join') {
    // Only try to join the sender's voice channel if they are in one themselves
		shenMessage.reply("Lo he intentado...");
    join_voice_chanel(420385279765905420);
  }
	
	
		if(shenmueCaca.some(wordMal => shenMessage.content.includes(wordMal)) ) {
		var shen = Math.floor(Math.random() * 4);
		
		switch(shen)
		{
			case 0:
				shenMessage.reply("Ese 'juego' innombrable es mierdoso :yum:");
				return;
			case 1:
				shenMessage.reply("Está claro que es una basura :unamused:");
				return;
			case 2:
				shenMessage.reply("Esto mola más que ese 'juego' :poop:");
				return;
			case 3:
				shenMessage.reply("Si sigues nombrando a ese 'juego', tendré que ir a matarte :yum:");
				return;							
		}				
	  }
	if(!shenMessage.content.startsWith(config.prefix)) return;
	if(shenMessage.author.bot) return;
	});
	
boto.on('message', (message) => {

	let arg = message.content.split(" ").slice(1);
	var argResult = arg.join(" ");	

	if(swearWords.some(word => message.content.includes(word)) ) {
		var amenaza = Math.floor(Math.random() * 5);
		
		switch(amenaza)
		{
			case 0:
				message.reply("? Que maleducado, tendré que ir a matarte :yum:");
				return;
			case 1:
				message.reply("? ¿Hablas en serio? Poco has probado el jabón :unamused:");
				return;
			case 2:
				message.reply("? ¡¡Eso lo serás tu!! :muscle: :muscle:");
				return;
			case 3:
				message.reply("? Si sigues con esas, tendré que ir a matarte :yum:");
				return;
			case 4:
				message.reply("? Que maleducado, tendré que ir a visitar a tu familia :smiling_imp:");
				return;
				
		}				
	  }
	
	if(!message.content.startsWith(config.prefix)) return;
	if(message.author.bot) return;
	
	
	if(message.content.startsWith(prefix + 'asunto'))	{
			if(argResult != "")
			{
				argAsunto = arg.join(" ");
			}
			else
			{
			argAsunto = "Sin asunto";
			}
	}

	if(message.content.startsWith(prefix + 'correo'))	{
		if(argResult != "")
		{
			argCorreos = arg.join(" ");
		}
}

	if(message.content.startsWith(prefix + "mail"))	{
		//message.reply(argResult);

		const embed = {
			"author": {
				"name": message.author.username,
				"url": "https://mail.google.com",
				"icon_url": message.author.avatarURL
			},
			"color": 16711684,
			"timestamp": "2018-03-07T05:17:24.179Z",
			"footer": {
				"text": "!ayuda"
			},
			"title": "Asunto: " + argAsunto,
			"description": "**Correos:** " + argCorreos + "\n\n" + argResult
		};

		if(argResult != "" && argCorreos != ""){
			var mailOptions = {
				from: 'FractalBot <bototobdisc@gmail.com>',
				to: argCorreos, 
				subject: argAsunto, 
				text: argResult, 
			}

			transporter.sendMail(mailOptions, function (error, info) {
				if (error) 
				{
						console.log(error);
						message.author.send("No se ha mandado, error \n" + argResult);
				}
				else
				{
					console.log("Mail enviado");
					message.author.send({embed});
					argCorreos = "";
					argAsunto = "";
				}
				})
		}else if(argResult != "" && argCorreos == ""){
			argResult = "No se ha mandado, no hay donde\n Cuerpo del mail: " + argResult;
			message.author.send(argResult);
		}else {
			argResult = "No se ha mandado, mail vacío";
			message.author.send(argResult);

	  }
	}

	if(message.content.startsWith(prefix + 'link'))	{  
		
		const embed = {
			"color": 16711684,
			"timestamp": "2018-03-07T05:17:24.179Z",
			"footer": {
				"text": "!ayuda"
			},
			"fields": [
				{
					"name": "Trello",
					"value": "https://trello.com/theunnamedcompanyjam",
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
				}/*,
				{
					"name": "Jira",
					"value": "http://fractalmindstudio.com:8180",
					"inline": true
				}*/
			]
		};

		/*function OpenUrl(){
			if(argResult.indexOf(".com") != -1)
			{
				opn("https://"+ argResult);
			}
			else
			{
				console.log("Ha entrado en la funcion");
				opn("https://"+ argResult +".com");
				console.log("Ha pasado");
			}
		}
		if(argResult != "")
		{
			OpenUrl();
			console.log("HA entrado");
		}
		else*/
			message.author.send({embed});
	}

	if(message.content.startsWith(prefix + ('ayuda'))){
		message.author.send("**AYUDA**\n```!link : Mira los links preestablecidos\n\n!correo + correos : Añade correos al que se manda (separar con comas)\n!asunto + El asunto que quieras (opcional) : Añade asunto para mail\n!mail + Cuerpo del mail: envia un mail```");
	}

	if(message.content.startsWith(prefix))	{
		message.delete(message);
	}
});

boto.login(process.env.BOT_TOKEN);
