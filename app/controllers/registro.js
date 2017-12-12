
var registroController = function (server) {
    server.route('/registro')
        .get(function (req, res){
            res.render('./registro.html', { titulo : 'Registrarse',
                                            subtitulo : 'Registrate'});
        });
};


module.exports = registroController;
