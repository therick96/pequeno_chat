var usuarios = require('../models/users');

var ingresaController = function (server) {
    server.route('/ingresa')
        .get(function (req, res) {
            if ('user' in req.session){
                res.redirect('/');
            }else{
                res.render('./ingresa.html', {  titulo : 'Entrar',
                                                subtitulo : 'Identificate'});
            }
        })
        .post(function(req, res){
            console.log(req.body);
            usuarios.findOne({  usuario : req.body.user,
                                password : req.body.clave
                            }, function (err, usr) {
                                if (usr){
                                    console.log(usr);
                                    req.session["user"] = usr.usuario
                                    res.redirect('/');
                                }
                            });

        });    
};

module.exports = ingresaController;