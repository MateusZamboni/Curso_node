var http = require('http');

var server = http.createServer(function (req, res) {

	var categoria = req.url;

	if (categoria == '/tecnologia'){
		res.end("<html><body>noticias de tecnologia</body></html>");
	}else if(categoria == '/esporte'){
		res.end("<html><body>Portal de Esportes</body></html>");
	}else if (categoria == '/lazer') {
		res.end("<html><body>Portal de Lazer</body></html>");
	}else{	
	res.end("<html><body>Portal de noticias</body></html>");
}
});

server.listen(3000);