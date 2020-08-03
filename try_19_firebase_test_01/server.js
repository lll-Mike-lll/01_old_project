var a = "mike";
document.getElementById("head_01").innerHTML = a;

window.onload = function(){
  var firebaseRef = firebase.database().ref("user");
  firebaseRef.once('value').then(function(dataSnapshot){
    console.log(dataSnapshot.val());
  });
}
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
