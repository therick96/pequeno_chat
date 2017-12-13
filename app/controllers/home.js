
var homeC = function (server) {
    server.route('/')
        .get(function (req, res){
            console.log(req.session);
            if ('user' in req.session){
                res.render('index', {   titulo : 'Entrar',
                                        subtitulo : 'Chat',
                                        usuario : req.session['user']});
            }else{
                res.redirect('/ingresa');

            }
        }).post(function (req, res) {
            console.log(req.user);
        });
};

module.exports = homeC;