module.exports = (app) => {
	const { contatos } = app.controllers;
	app.get('/contatos', contatos.index);
	app.get('/contatos/:id', contatos.show);
	app.post('/contatos', contatos.create);
	app.get('/contatos/:id/editar', contatos.edit);
	app.put('/contatos/:id', contatos.update);
	app.delete('/contatos/:id', contatos.destroy);
}