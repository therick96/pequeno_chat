var conversacion = require('../models/conversacion');
var usuarios = require('../models/users');

var homeC = function (server, io) {
    io.on("coneccion", function (socket) {
        socket.join("room");
    });

    server.route('/')
        .get(function (req, res){
            //console.log(req.session);
            if ('user' in req.session){
                conversacion.find().sort([["fecha",-1]]).limit(8).populate("user").exec(function (error, respuesta) {
                    res.render('index', {   titulo : 'Entrar',
                                            subtitulo : 'Chat',
                                            usuario : req.session['user'],
                                            datos : respuesta   });
                    //console.log(respuesta);
                });
            }else{
                res.redirect('/ingresa');

            }
        }).post(function (req, res) {
            //console.log(req.user);
            usuarios.findOne({usuario : req.session['user']}).exec(
                function (error, usuario) {
                    var mensaje = new conversacion({
                        mensaje : req.body.mensaje,
                        user : usuario.id
                    });
                    mensaje.save(function (error) {
                        if (error){
                            console.log(error);
                            return;
                        }
                        io.to("room").emit("conversa", {
                            "usuario" : req.session['user'],
                            "fecha" : mensaje.fecha,
                            "mensaje" : req.body.mensaje,
                        });
                    });
                    res.redirect('/');
                }
            );
        });
};

module.exports = homeC;