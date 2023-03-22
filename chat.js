var x = io.connect('http/localhost:8080')
while(!pseudo){
    //declare un variable pseudo
    var pseudo = prompt('quel est votre nom?');
}
Socket.emit('psuedo');
document.title = psuedo +"//"+document.title;
document.getElementById('chatform').addEventListener('submit',(e)=>
e.preventDefault());
const textinput = document.getElementById('msgInput').value='';
if(textinput.length>0){
    socket.emit('newmessage',textinput);

}
//event
Socket.on('new user ',(pseudo) => {
    createelementfunction('new user',pseudo);
    
})
Socket.on('newmessageAll ',(content) => {
    createelementfunction('new user',content);

    
})
Socket.on('oldmessages',(messages) =>{
    messages.forEach(message => {
        if(message.sender === pseudo){
            createelementfunction('oldmessageme',message);
        }
        else{
            createelementfunction('oldmessage',message);
        }
        
    });
})
Socket.on('quit user ',(pseudo) => {
    createelementfunction('quit user',pseudo);
})
socket.on('writting',(pseudo) => {
   document.getElementById('ilecrit').textContent = psuedo+' est en train d écrire ';
})
socket.on('notwritting',() => {
    document.getElementById('ilecrit').textContent = '  ';
 })

 // relation avec writting
 function writting(){
    socket.emit('writting',psuedo);
 }
 function notwritting(){
    socket.emit('notwritting');
 }
 //creer des élements avec des fonction
 function createelementfunction(element, content){
    const newelement = document.createElement('div');
switch(element){
    case'new user':

//passer message
newelement.classList.add(element,'message');
//indiquer le rejoint
newelement.textContent = content +'il a rejoint le chat ' ;
//fait relation entre id de msg et chaque nouvelle element
document.getElementById('msgcontenaire').appendChild(newelement);
break;
//les nouveaux message
case 'newmessage':
    newelement.classList.add(element,'message');
    newelement.innerHTML = psuedo +'/'+ content;
    document.getElementById('msgcontenaire').appendChild(newelement);
break;
case 'newmessageAll':
    newelement.classList.add(element,'message');
    newelement.innerHTML = content.pseudo +'/'+ content.message;
    document.getElementById('msgcontenaire').appendChild(newelement);
break;
//les anciens message
case 'oldmessage':
    newelement.classList.add(element,'message');
    newelement.innerHTML = content.sender +'/'+ content.content;
    document.getElementById('msgcontenaire').appendChild(newelement);
break;
case 'oldmessageme':
    newelement.classList.add('newmessageme','message');
    newelement.innerHTML = content.sender +'/'+ content.content;
    document.getElementById('msgcontenaire').appendChild(newelement);
break;

//passer message
newelement.classList.add(element,'message');
//indiquer le rejoint
newelement.textContent = content +'il a quitté le chat ' ;
//fait relation entre id de msg et chaque nouvelle element
document.getElementById('msgcontenaire').appendChild(newelement);
break;
}}
