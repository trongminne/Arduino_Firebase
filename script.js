var firebaseConfig = {
	apiKey: "AIzaSyAUQXIRPtol86RHB3II9gRCI0tPS1ZdDow",
	authDomain: "webbatden.firebaseapp.com",
	databaseURL: "https://webbatden-default-rtdb.firebaseio.com",
	projectId: "webbatden",
	storageBucket: "webbatden.appspot.com",
	messagingSenderId: "919028116569",
	appId: "1:919028116569:web:11e93dc31a3a6e69da1548",
	measurementId: "G-WK9THJG6RK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});