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
                                }else{
                                    res.render('./ingresa.html', {  titulo : 'Entrar',
                                                                    subtitulo : 'Identificate',
                                                                    color : '#F44336',
                                                                    mensajito : 'Usuario o contraseña invalidos'});
                                }
                            });

        });    

    server.route('/logout')
        .get(function (req, res) {
            if ('user' in req.session){
                delete req.session['user'];
                res.redirect('/ingresa');
            }else{
                res.redirect('/ingresa');
            }
        });
};

module.exports = ingresaController;