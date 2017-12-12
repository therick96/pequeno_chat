var usuario = require('../models/users');

var registroController = function (server) {
    server.route('/registro')
        .get(function (req, res){
            res.render('./registro.html', { titulo : 'Registrarse',
                                            subtitulo : 'Registrate'});
        })
        .post(function (req, res) {
            usuario.findOne({ usuario : req.body.user)
        });
};


module.exports = registroController;
