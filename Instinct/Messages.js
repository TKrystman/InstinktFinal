//Broadcast Channel API
const APP = {
  channel: new BroadcastChannel('wkrp'),
  win: null,
  init: () => {
    //add button listeners
    
    document.getElementById('btnOpen').addEventListener('click', APP.openTab);
    document
      .getElementById('btnSend')
      .addEventListener('click', APP.sendMessage);
       document
      .getElementById('start')
   
    //register service worker
      
    navigator.serviceWorker.register('serviceWorker.js');

    //listen for broadcasted messages
    APP.channel.addEventListener('message', APP.gotMessage);
  },
  openTab: (ev) => {
    //open a new tab / window
    APP.win = window.open('index.html');
  },
  sendMessage: (ev) => {
    let msg = document.getElementById('txtMessage').value;
    //send the message on the broadcast channel
    if (msg) {
      APP.channel.postMessage({ message: msg });
    }
  },
   
  gotMessage: (ev) => {
    //message received on the wkrp broadcast channel
    if (ev && ev.data) {
      document.getElementById(
        'messages'
      ).innerHTML += `<p>${ev.data.message}</p>`;
      
      
    }
  },
};

//once DOM has loaded as each page loads
document.addEventListener('DOMContentLoaded', APP.init);