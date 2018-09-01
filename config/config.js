
// ============================
//  Puerto
// ============================
process_env_PORT = process.env.PORT || 3700;


// ============================
//  Entorno
// ============================
process_env_NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process_env_NODE_ENV === 'dev') {
    // urlDB = 'mongodb://localhost:27017/portafolio';mongodb://
    urlDB = 'mongodb://<eze>:<eze123>@ds139632.mlab.com:39632/minodejsdatabase';
} else {
    urlDB = process.env.MONGO_URI;
}
process_env_URLDB = urlDB;