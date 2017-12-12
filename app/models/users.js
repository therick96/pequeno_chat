var mongoose = require('../connections/mongoose');
var esquema = mongoose.Schema;

var usuarios = new esquema({
    usuario : {type : String, require : true, index : {unique : true}},
    email : {type : String, require : true},
    password : {type : String, require : true}
});

var user = mongoose.model('usuarios', usuarios);

module.exports = user;