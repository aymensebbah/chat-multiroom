const mongoose = require('mongoose');
 var chatshema = new mongoose.shema({
    _id_room : { type : String},emeteur:String, 
    recepteur:string, 
    content : string,
 });
 mongoose.model('chat',chatshema )
