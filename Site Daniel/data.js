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

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionar data"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "avaliacao.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      room_names = childKey;
      console.log("Room Name - " + room_names);
      row = "<div class='room_name' id=" + room_names + " onclick='redirectToRoomName(this.id)' >#" + room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "avaliacao.html";
}
