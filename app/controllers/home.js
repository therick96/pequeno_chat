
var homeC = function (server) {
    server.route('/')
        .get(function (req, res){
            res.redirect('/ingresa');
            res.render('home/index', {  titulo : 'Entrar',
                                        subtitulo : 'Chat'});
        });
};

module.exports = homeC;