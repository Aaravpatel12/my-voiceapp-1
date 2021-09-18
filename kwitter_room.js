const firebaseConfig = {
      apiKey: "AIzaSyDsPtuk0Yp7werjjOGtgMUlmGSccu8rXIg",
      authDomain: "kwitter-d34db.firebaseapp.com",
      databaseURL: "https://kwitter-d34db-default-rtdb.firebaseio.com",
      projectId: "kwitter-d34db",
      storageBucket: "kwitter-d34db.appspot.com",
      messagingSenderId: "501729417847",
      appId: "1:501729417847:web:cde4502fed9b1488518472",
      measurementId: "G-GRY7CYQ57Z"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}