const fs = require('fs');

const leituraAsync = (arquivo) => {
	console.log('fazendo leitura assíncrona');
	console.time('bloqueio assíncrono');
	//função callback vazia para testar bloqueio assíncrono
	fs.readFile(arquivo, () => {});
	console.timeEnd('bloqueio assíncrono');
}

module.exports = leituraAsync;