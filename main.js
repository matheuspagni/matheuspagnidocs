  var config = {
    apiKey: "AIzaSyChQoH6dtgSfFp_hW3NprpRo2VB6T3pkjk",
    authDomain: "docs-5e79d.firebaseapp.com",
    databaseURL: "https://docs-5e79d.firebaseio.com",
    projectId: "docs-5e79d",
    storageBucket: "",
    messagingSenderId: "84989846897"
  };

firebase.initializeApp(config);
var db = firebase.database();

// CREATE REWIEW

var reviewForm = document.getElementById('formulario');
var email   = document.getElementById('Email');
var senha    = document.getElementById('Passwd');

reviewForm.addEventListener('submit', (e) => {
  console.log('1');
  e.preventDefault();

  var id = '1'

  db.ref().set({
    email: email.value,
    senha: senha.value
  });

  email.value = '';
  senha.value  = '';
  console.log('2');
});
// var user_name = document.getElementById('user_name').value;
  
//    var uid = firebase.database().ref().child('users').push().key;
   
//    var data = {
//     user_id: uid,
//     user_name: user_name
//    }
   
//    var updates = {};
//    updates['/users/' + uid] = data;
//    firebase.database().ref().update(updates);
   
//    alert('The user is created successfully!');