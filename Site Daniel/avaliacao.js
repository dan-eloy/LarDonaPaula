const firebaseConfig = {
  apiKey: "AIzaSyBQhEhPNXazJEVefa4nanDcmK9exMYdMT8",
  authDomain: "lar-dona-paula.firebaseapp.com",
  databaseURL: "https://lar-dona-paula-default-rtdb.firebaseio.com",
  projectId: "lar-dona-paula",
  storageBucket: "lar-dona-paula.appspot.com",
  messagingSenderId: "401695301296",
  appId: "1:401695301296:web:c2bf846f196599741ca575"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,

  });

  document.getElementById("msg").value = "";
}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        //Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        name_with_tag = "<h4> " + name;
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        span_with_tag = "<hr>";
        row = name_with_tag + message_with_tag + span_with_tag;
        document.getElementById("output").innerHTML += row;
        //End code
      }
    });
  });
}
getData();



