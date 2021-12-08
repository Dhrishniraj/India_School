function adduser() {
    var user_name = document.getElementById("user_name").value;

    if(user_name.length >= 1) {
        localStorage.setItem("user_name1", user_name);
        window.location = "kwitter_room.html";
    }
    else{
        window.alert("Please enter the username");
    }
}

function update() {
    document.getElementById("user_name").value=localStorage.getItem("user_name1");
}