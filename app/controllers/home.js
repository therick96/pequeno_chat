
var homeC = function (server) {
    server.route('/')
        .get(function (req, res){
            console.log(req.session);
            if ('user' in req.session){
                res.render('home/index', {  titulo : 'Entrar',
                                            subtitulo : 'Chat'});
            }else{
                res.redirect('/ingresa');

            }
        }).post(function (req, res) {
            console.log(req.user);
        });
};

module.exports = homeC;