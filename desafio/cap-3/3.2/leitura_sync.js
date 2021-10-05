const fs = require('fs');

const leituraSync = (arquivo) => {
	console.log('fazendo leitura s�ncrona');
	console.time('bloqueio s�ncrono');
	fs.readFileSync(arquivo);
	console.timeEnd('bloqueio s�ncrono');
}

module.exports = leituraSync