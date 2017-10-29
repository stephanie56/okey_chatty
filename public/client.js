// open a new connection to socket server
const socket = io.connect('http://localhost:3000');

const chatForm = document.querySelector('form');
const chatList = document.querySelector('#history');
const message = document.querySelector('#message');
const username = document.querySelector('#username');

chatForm.addEventListener('submit', function(e){
  e.preventDefault();
  const user = username.value;
  const text = message.value;
  const newText = `${user || 'Anonymous'}: ${text}`;
  socket.emit('message', newText);
  message.value = "";
})

socket.on('message', function(msg){
  let chatItem = document.createElement('li');
  chatItem.className = 'user__text';
  chatItem.innerHTML = msg;
  chatList.appendChild(chatItem);
});
