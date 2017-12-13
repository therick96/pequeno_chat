var usuario = require('../models/users');

var registroController = function (server) {
    server.route('/registro')
        .get(function (req, res){
            res.render('./registro.html', { titulo : 'Registrarse',
                                            subtitulo : 'Registrate'});
        })
        .post(function (req, res) {
            usuario.findOne({ usuario : req.body.user},
                function (error, usr) {
                    console.log(error, ', ', usr);
                    if (usr){
                        res.render('./registro.html', { titulo : 'Registrarse',
                                                        subtitulo : 'Registrate',
                                                        mensajito : 'error',
                                                        color : 'red'});
                        console.log("si");
                    }else{
                        res.render('./registro.html', { titulo : 'Registrarse',
                                                        subtitulo : 'Registrate',
                                                        mensajito : 'valido',
                                                        color : '#58D68D'});
                        console.log("NO");
                    }
                });
        });
};


module.exports = registroController;
