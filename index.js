var http = require('http');  
http.createServer(function (req, res) {   
  res.write("Bot funcionando con host en Replit \n Version: --");   
  res.end(); 
}).listen(8080); //index.js

const { discord, client, Token, prefix } = require("./Bot/setting.js");














//Siempre al final
client.login(Token)