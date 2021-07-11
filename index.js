
var http = require('http');  
http.createServer(function (req, res) {   
  res.write("Bot funcionando con host en Replit \n Version: --");   
  res.end(); 
}).listen(8080); //index.js

const { Discord, client, Token, prefix } = require("./Bot/settings.js");

client.on('ready',() => {
  console.log("Ya estoy vivo")
  client.user.setPresence({
    status: "dnd",
    activity:{
      name: "tuto!command para algo",
      type: "PLAYING"
    }
  })
})

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift()
    if (!message.content.startsWith(prefix) || message.author.bot || message.channel instanceof Discord.DMChannel ) return; // Leer Mensajes

    switch(command.toLowerCase()){
      case "help":
        message.reply("Solo hay este comando\n\nPuedes recomendarme mas comandos")
      break
    }

})







//Siempre al final
client.login(Token)