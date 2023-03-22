var express = require('express');
//declarer application
var app = expres();
//creation de server http
var server = require('http').createserver(app);
//creation de base donne
var mongoose = require('mongoose');
//definir un dossier et utiliser
app.use(express.static(__dirame+ '/public'));
//lancer server et son port
server.listen(8080,()=> console.log('serveur travail est son port 8080'));
// routeur
app.get('/',function(req,res){

res.render('index.ejs');})
//cas d'erruer
app.use(function(req,res,next){
res.status('404').send('erreur');
//type
res.setheader('content-type','text/html');})
//initialiser sockest et server
var io = require('socket.io').listen(server);
io.on('connection',(socket) =>{ 
    socket.on('psuedo',(pseudo) => {
        //existance de user dans bdd juste verifier
        user.findOne({ pseudo,pseudo},(err,user) =>{
            if(user){
                socket.psuedo=psuedo;
        socket.broadcast.emit('new user',pseudo);
    
            }
            else {
                // user n'a pas dans bdd on ajoute user dans bdd
                var user = new user ();
                user.pseudo=pseudo;
                user.save();
                socket.psuedo=psuedo;
        socket.broadcast.emit('new user',pseudo);
            }
            user.findOne(( err,message) => {
                socket.emit('oldmessage',message)
            })

        })
        
    })
    socket.on('newmessage',(message)=>{
        var chat = new chat();
        chat.content=message;
        //new chat dans bdd

        socket.broadcast.emit('newmessageAll',{psuedo:socket.psuedo ,message : message});
        
    })
    
    socket.on('writting',(psuedo) => {
        socket.broadcast.emit('writting',psuedo);
    })
    socket.on('notwritting',() => {
        socket.broadcast.emit('notwritting');
    })
    socket.on('disconnect',() => {
        socket.broadcast.emit('quit user',socket.psuedo);
    })
    //disconexion
})
//base de donné 
const objectid = mongoose.types.objectid;
require('./model/room.model');
require('./model/chat.model');
require('./model/user.model');
var user = mongoose.model('room');
var user = mongoose.model('chat');
var user = mongoose.model('user');
