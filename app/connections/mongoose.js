var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/base_chat');

module.exports = mongoose;