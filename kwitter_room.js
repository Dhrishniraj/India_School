user_name = localStorage.getItem("user_name1");
document.getElementById("room_name").value=localStorage.getItem("room_name1");
document.getElementById("welcome").innerHTML="Welcome " + user_name + "!" + "<br><hr>";
const firebaseConfig = {
      apiKey: "AIzaSyBuUcYAYcycB3sX5Y48H00KXhy0atx3_C4",
      authDomain: "kwitter-60346.firebaseapp.com",
      databaseURL: "https://kwitter-60346-default-rtdb.firebaseio.com",
      projectId: "kwitter-60346",
      storageBucket: "kwitter-60346.appspot.com",
      messagingSenderId: "211461979537",
      appId: "1:211461979537:web:9b538d3d5fde58c98bee30"
};
    firebase.initializeApp(firebaseConfig);
    function addroom() {
          room_name = document.getElementById("room_name").value;
      if(room_name.length >= 1){
          localStorage.setItem("room_name1", room_name);
          var purpose = "Room name creation of " + user_name;
          firebase.database().ref("/").child(room_name).update({
              purpose: purpose
          });
          window.location="kwitter_page.html";
      }
    }
    
    // Initialize Firebase
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
       console.log(room_names);
       row = '<div class="room_name" id='+room_names+' onclick="redirecttoroomname(this.id)">'+room_names+'</div><hr>';
       document.getElementById("output").innerHTML+=row;
       
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name1", name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name1");
      localStorage.removeItem("room_name1");
      window.location="index.html";
}