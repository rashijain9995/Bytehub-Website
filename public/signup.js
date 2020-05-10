// function signUp(){
// 	var userEmail = document.getElementById("email").value;
// 	var userPassword = document.getElementById("password").value;
// 	var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// 	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
//             var user = firebase.auth().currentUser;
//             var uid;
//             if (user != null) {
//                 uid = user.uid;
//             }
//             var firebaseRef = firebase.database().ref();
//             var userData = {
//                 userEmail: userEmail,
//                 userPassword: userPassword,
//             }
//             firebaseRef.child(uid).set(userData);



// }


// Initialize Firebase 
var config = {
  apiKey: "AIzaSyA4034AE739cWDIpc--Fh4-ADSrB2bC-J8",
  authDomain: "bytehubindia-6083a.firebaseapp.com",
  databaseURL: "https://bytehubindia-6083a.firebaseio.com",
  projectId: "bytehubindia-6083a",
  storageBucket: "bytehubindia-6083a.appspot.com",
  messagingSenderId: "853900768803",
  appId: "1:853900768803:web:ff78dd335471ad263c6396",
  measurementId: "G-MTPCVDR2FX"
};
firebase.initializeApp(config);
firebase.analytics();


// Reference "RegisterData" collection
var RegisterDataRef = firebase.database().ref("RegisterData");

// Listen for form submit
document.getElementById("RegisterForm").addEventListener('submit', registerForm());

// Submit form
function registerForm(e) {
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  var password = getInputVal('password');

  // Save message
  saveMessage(email, password);

   // Clear form
  document.getElementById('RegisterData').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(email, password) {
  var newMessageRef = RegisterDataRef.push();
  newMessageRef.set({
    email: email,
    password : password
  });
}