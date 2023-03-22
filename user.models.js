const mongoose = require('mongoose');
// user de bdd mongose
var usershema = new mongoose.shema({
    pseudo : String });
    
//fait relation avec application et script
mongoose.model('user',usershema); 
