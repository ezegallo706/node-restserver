'use strict'
require('./config/config');

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/portafolio')
//         .then(() => {
//         	console.log("Conexión a la base de datos establecida satisfactoriamente...");

//         	// Creacion del servidor
//         	app.listen(port, () => {
//         		console.log("Servidor corriendo correctamente en la url: localhost:3700");
//         	});

//         })
//         .catch(err => console.log(err));

mongoose.connect(process_env_URLDB).then(() => {

    console.log('Conexión a la base de datos establecida satisfactoriamente...');

	app.listen(process_env_PORT, () => {
    	console.log('Servidor corriendo corascacrectamente en la url:', process_env_PORT);
	});

})
.catch(err => console.log(err));