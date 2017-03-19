    function loadRides(direction, airport){
        var ref = firebase.database().ref();
	ref.on("value", function(snapshot) {
	  console.log(snapshot.val());
	  }, function (errorObject) {
	   console.log("The read failed: " + errorObject.code);
	    });
	 
         // Attach an asynchronous callback to read the data at our posts reference
	// ref.on("child_added", function(snapshot, prevChildKey) {
	//   var newPost = snapshot.val();
	//   console.log("Author: " + newPost.author);
	//   console.log("Title: " + newPost.title);
	  // console.log("Previous Post ID: " + prevChildKey);
//	});
	
	
	// Retrieve new posts as they are added to our database
      //	 ref.on("child_added", function(snapshot, prevChildKey) {
//	   var newPost = snapshot.val();
//	   console.log("Author: " + newPost.author);
//	   console.log("Title: " + newPost.title);
//	   console.log("Previous Post ID: " + prevChildKey);
//	 });


	 // Get the data on a post that has changed
//	 ref.on("child_changed", function(snapshot) {
//	   var changedPost = snapshot.val();
//	   console.log("The updated post title is " + changedPost.title);
//	 });
          
	 ref.child(direction + '/' + airport).once("value", function(data) {
             data.forEach(function(snapshot) {
                 userName = snapshot.val().user;
	         $("#ride").append('<div class= "style"><img src = "' + snapshot.val().id + '" style="width:68px;height:68px;"/><p>' + snapshot.val().user+ '</p><ul class = "styling"><li> ' + snapshot.val().when + ' '+ snapshot.val().from + ' - ' + snapshot.val().to + '</li><li>' + snapshot.val().comments + '</li><h4>currently 1 rider</h4><button type="button" class="btn btn-outline-info" onclick = "initMessenger(userName)">join this ride</button></ul></div>');
	     });
});


}


    function initMessenger(name){
       if(initApp()){
           console.log('you are signed in');
           document.getElementById('convoHeader').innerHTML = name;
           document.getElementById('messages-card').style.display = "";
	   window.friendlyChat = new FriendlyChat();
	   
       }else{
           document.getElementById('id01').style.display='block';   
           console.log('you are not signed in');
       }

    } 
   
