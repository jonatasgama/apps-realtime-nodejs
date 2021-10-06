const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const port = 3001;

//função simples para gerenciar as rotas
const rotear = function(pathname){
	if(pathname && pathname !== '/'){
		const arquivo = path.join(__dirname, `${pathname}.html`);
		const existe = fs.existsSync(arquivo);
		if(existe){
			return arquivo;
		}
		return path.join(__dirname, 'erro.html');
	}
	return path.join(__dirname, 'artigos.html');
}


const server = http.createServer((req, res) => {
	const pathname = url.parse(req.url).pathname;
	const pagina = rotear(pathname);
	fs.readFile(pagina, (err, data) => {
		res.writeHeader(200, {'Content-Type':'text/html'});
		res.end(pathname);
	});
});

//iniciando server
server.listen(port, () => {
	console.log(`server rodadndo na porta ${port}`)
})