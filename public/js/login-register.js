   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyDOeua4S1ysftagEvbx8b7W-NLxdc5q6pk",
    authDomain: "test2-d372a.firebaseapp.com",
    databaseURL: "https://test2-d372a.firebaseio.com",
    projectId: "test2-d372a",
    storageBucket: "test2-d372a.appspot.com",
    messagingSenderId: "965018859525",
    appId: "1:965018859525:web:9c56e16fd37ef415d9846c",
    measurementId: "G-E2Q7D28DFN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  


firebase.auth().onAuthStateChanged(function(user) {
    
  if (user) {
      // User is signed in.

      var user = firebase.auth().currentUser;
      var email, emailVerified;
      if (user != null) {

          email = user.email;
          emailVerified = user.emailVerified;
              if(emailVerified) {
                  // window.location.href = 'index.html'
              }
        
        }

    } else {
      // No user is signed in.
    }

  
});




function login(){
 var userEmail = document.getElementById("email").value;
 var userPass = document.getElementById("password").value;

 firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : " + errorMessage );
});

}

function reg(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var cPass = document.getElementById("cpassword").value;


  if(userEmail != "" && userPass != "" && cPass != "")
  {
    if (userPass == cPass)
    {
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(){
    var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
  // Email sent.
  window.alert("Email Sent! Please check to verfy")}).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     // ...
     window.alert("Error : " + errorMessage );
    });
  }).catch(function(error) {

  });
    }
    else{
      window.alert("Password and Confirm Password do not match");
    }
  }
  else
  {
    window.alert("Please fill all the details");
  }

}


function logout(){
  firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
}



















googleSignIn=()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
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



fb=()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
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

