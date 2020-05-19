// Initialize Firebase 
var config = {
  apiKey: "AIzaSyD3TroT_QhXyskbKebXLBaAKJBMtjdJROs",
  authDomain: "bytehubin.firebaseapp.com",
  databaseURL: "https://bytehubin.firebaseio.com",
  projectId: "bytehubin",
  storageBucket: "bytehubin.appspot.com",
  messagingSenderId: "755031666174",
  appId: "1:755031666174:web:1c0bbeb860efd6a6d124af",
  measurementId: "G-VE8X7LDZM1"
};
firebase.initializeApp(config);
firebase.analytics();

// Reference EventData collection
var EventDataRef = firebase.database().ref('EventData');

// Listen for form submit
document.getElementById('EventForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var college = getInputVal('college');

  // Save message
  saveMessage(name, company, email, phone, message, college);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 10000);

  // Clear form
  document.getElementById('EventForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message, college) {
  var newMessageRef = EventDataRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
    college: college
  });
}