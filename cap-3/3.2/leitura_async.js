const fs = require('fs');

const leituraAsync = (arquivo) => {
	console.log('fazendo leitura ass�ncrona');
	console.time('bloqueio ass�ncrono');
	//fun��o callback vazia para testar bloqueio ass�ncrono
	fs.readFile(arquivo, () => {});
	console.timeEnd('bloqueio ass�ncrono');
}

module.exports = leituraAsync;