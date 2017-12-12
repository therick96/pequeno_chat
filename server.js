var express = require("express"),
    swig = require("swig"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    sesion = require("express-session");

var server = express();

swig.setDefaults({
    'cache' : false
});

//Swig
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + "/app/views");

server.use(express.static('./public'));

//Controllers
require("./app/controllers/home")(server);
require("./app/controllers/registro")(server);
require("./app/controllers/ingresa")(server);
//Connections

server.listen(8000);