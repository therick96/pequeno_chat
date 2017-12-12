
var ingresaController = function (server) {
    server.route('/ingresa')
        .get(function (req, res) {
            res.render('./ingresa.html', {  titulo : 'Entrar',
                                            subtitulo : 'Identificate'});
        })
        .post(function(req, res){
            console.log(req.body);
        });    
};

module.exports = ingresaController;