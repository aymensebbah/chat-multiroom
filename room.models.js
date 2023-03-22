const mongoose = require('mongoose');
// user de bdd mongose
var roomshema = new mongoose.shema({
    name : String });
//fait relation avec application et script
mongoose.model('room', roomshema);  
