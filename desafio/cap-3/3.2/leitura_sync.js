const fs = require('fs');

const leituraSync = (arquivo) => {
	console.log('fazendo leitura síncrona');
	console.time('bloqueio síncrono');
	fs.readFileSync(arquivo);
	console.timeEnd('bloqueio síncrono');
}

module.exports = leituraSync