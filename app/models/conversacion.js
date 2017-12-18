var mongoose = require('../connections/mongoose');
var esquema = mongoose.Schema

var conversacionEsquema = new esquema({
    user : {type : esquema.Types.ObjectId, ref : 'usuarios'},
    fecha : {type : Date, default : Date.now()},
    mensaje : {type : String}
});

var conversacion = mongoose.model('conversacion', conversacionEsquema);

module.exports = conversacion;