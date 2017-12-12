var express = require("express"),
    swig = require("swig"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    sesion = require("express-session");

var server = express();

swig.setDefaults({
    'cache' : false
});

server.listen(8000);