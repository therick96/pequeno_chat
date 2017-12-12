
var homeC = function (server) {
    server.route('/')
        .get(function (req, res){
            res.render('home/index');
        });
};

module.exports = homeC;