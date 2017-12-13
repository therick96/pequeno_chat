var usuario = require('../models/users');

var registroController = function (server) {
    server.route('/registro')
        .get(function (req, res){
            res.render('./registro.html', { titulo : 'Registrarse',
                                            subtitulo : 'Registrate'});
        })
        .post(function (req, res) {
            var user = req.body.user;
            var email = req.body.email;
            var pass1 = req.body.clave;
            var pass2 = req.body.clave_repetir;
            var color = '#F44336', mensajito = '';

            if (user && email && pass2 && pass1){
                if (pass2 === pass1){

                    usuario.findOne({ usuario : user}, function (error, usr) {
                        console.log(error, ', ', usr);
                        if (usr){
                            mensajito = 'Nombre de usuario ya registrado';
                            res.render('./registro.html', { titulo : 'Registrarse', subtitulo : 'Registrate', mensajito : mensajito, color : color});
                        }else{
                            color = '#58D68D';
                            mensajito = 'Registrado con exito';
                            console.log(mensajito);
                            var usuer = new usuario({
                                usuario : user,
                                email : email,
                                password : pass1
                            });
                            usuer.save(function (error) {
                                if (error){
                                    mensajito = 'Ocurrio un Error';
                                    return;
                                }
                            });
                            console.log("NO");
                            console.log(mensajito);
                            res.render('./registro.html', { titulo : 'Registrarse', subtitulo : 'Registrate', mensajito : mensajito, color : color});
                        }
                    });
                }else{
                    mensajito = 'Las contraseñas no coinciden';
                    res.render('./registro.html', { titulo : 'Registrarse', subtitulo : 'Registrate', mensajito : mensajito, color : color});
                }
            }else{
                mensajito = 'Existen Campos Vacios';
                res.render('./registro.html', { titulo : 'Registrarse', subtitulo : 'Registrate', mensajito : mensajito, color : color});
            }
            
        });
};


module.exports = registroController;
