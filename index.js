const Server = require('./server');
//Deberia iniciar los repositorios

(async() => {
    await Server.initServer();
})();