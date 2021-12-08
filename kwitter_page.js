function logout() {
    localStorage.removeItem("user_name1");
    localStorage.removeItem("room_name1");
    window.location="index.html";
}
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

user_name=localStorage.getItem("user_name1");
room_name=localStorage.getItem("room_name1");
function send(){
    var msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        user_name: user_name,
        message: msg,
        likes: 0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output2").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id=childKey;
    message_data=childData;
    console.log(firebase_message_id);
    console.log(message_data);
    var name = message_data["user_name"];
    var msg2 = message_data["message"];
    var likes = message_data["likes"];
    var user = '<h3>' + name + '<img src="tick.png" class="user_tick">' + '</h3>';
    var msge = '<h4 class="message_h4">' + msg2 + '</h4>';
    var button = '<button ' + 'id=' + '"' + firebase_message_id + '"' + ' value=' + '"' + likes + '"' + ' onclick="' + 'updateLike(this.id)" ' + 'class="' + 'btn btn-success' + '"' + '>';
    var button1 = '<span class="glyphicon glyphicon-thumbs-up">Like: ' + likes + '</span></button><hr>';
    var html = user + msge + button + button1 + '<br>';
    document.getElementById("output2").innerHTML+=html;
}});});}
getData();

function updateLike(message_id) {
    if(localStorage.getItem(("user_liked_message" + message_id)) != "yes"){
        console.log(message_id);
        updatedLike = Number(document.getElementById(message_id).value) + 1;
        console.log(updatedLike);
        firebase.database().ref("/" + room_name).child(message_id).update({
            likes: updatedLike
        });
        likes = updatedLike;
        localStorage.setItem(("user_liked_message" + message_id), "yes");
    }
}