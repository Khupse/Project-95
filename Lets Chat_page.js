const firebaseConfig = {
      apiKey: "AIzaSyDZBr6bN91MoarZLXKGW9TP4KQGJYJu9PU",
      authDomain: "kwitter-35dbb.firebaseapp.com",
      databaseURL: "https://kwitter-35dbb-default-rtdb.firebaseio.com",
      projectId: "kwitter-35dbb",
      storageBucket: "kwitter-35dbb.appspot.com",
      messagingSenderId: "319165445320",
      appId: "1:319165445320:web:c0fb543c31a445428161fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        function send() {
                              msg = document.getElementById("msg").value;
                              firebase.database().ref("room_name").push({
                                    name: user_name,
                                    message: msg,
                                    like: 0
                              })

                              document.getElementById("msg").value = "";




                        }
                        //End code
                  }
            });
      });
}
getData();




function updateLike(message_id) {
      console.log("clicked like button - " + message_id)
      like = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like: update_likes
      });

}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name");
      window.location.replace("Lets Chat.html")
}