var mosca = require('mosca');
var settings = {
		port:1883,
		host: '0.0.0.0',
		http:{
			port: 3001,
			bundle: true,
			static: './'
		}
	}
//
var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
}); 
