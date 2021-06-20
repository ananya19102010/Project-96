// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDswpfHSxZfZLMoDqFxuo6K2EvrTS5_yro",
      authDomain: "let-s-chat-adefb.firebaseapp.com",
      databaseURL: "https://let-s-chat-adefb-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-adefb",
      storageBucket: "let-s-chat-adefb.appspot.com",
      messagingSenderId: "351404058727",
      appId: "1:351404058727:web:30d0b7e4ef26c49a3d8cc2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);;

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room Name -" + Room_names);
                  row = "<div class='room_name'id=" + Room_names + "onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomname(name) {
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}