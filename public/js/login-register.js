// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA4034AE739cWDIpc--Fh4-ADSrB2bC-J8",
  authDomain: "bytehubindia-6083a.firebaseapp.com",
  databaseURL: "https://bytehubindia-6083a.firebaseio.com",
  projectId: "bytehubindia-6083a",
  storageBucket: "bytehubindia-6083a.appspot.com",
  messagingSenderId: "853900768803",
  appId: "1:853900768803:web:ff78dd335471ad263c6396",
  measurementId: "G-MTPCVDR2FX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




firebase.auth().onAuthStateChanged(function (user) {

  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;
    var email, emailVerified;
    if (user != null) {

      email = user.email;
      document.getElementById("navbarDropdown").innerHTML = email;
      emailVerified = user.emailVerified;
      if (emailVerified) {
        // window.location.href = 'index.html'
      }

    }

  } else {
    // No user is signed in.
  }


});




function login() {
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error : " + errorMessage);
  });

}

function reg() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var cPass = document.getElementById("cpassword").value;


  if (userEmail != "" && userPass != "" && cPass != "") {
    if (userPass == cPass) {
      firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function () {
        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function () {
          // Email sent.
          window.alert("Email Sent! Please check to verfy")
        }).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          window.alert("Error : " + errorMessage);
        });
      }).catch(function (error) {

      });
    }
    else {
      window.alert("Password and Confirm Password do not match");
    }
  }
  else {
    window.alert("Please fill all the details");
  }

}


function logout() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
}



















googleSignIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}



fb = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

// gitSignIn=()=>{
//     var provider = new firebase.auth.GithubAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         // ...
//       }).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//       });

// }

