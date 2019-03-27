
var friends = require("../data/friends");

//this will export the contents to another file
module.exports = function(app){

app.get("/api/friends", function(req, res) {
    res.json(friends)
  });


app.post("/api/friends", function(req,res){
  
  
  
  //Takes the input as an object

   var newUser = req.body;
   var newScores = newUser.scores;
   var bestFriend = {
     name:"",
     photo:"",
     score:[""],
     friendDifference:""
   };

//add the new User to the friends module
   friends.push(newUser);

  

//first loop for every user
   for(var i = 0; i < friends.length; i++){
     var currentFriend = friends[i];
     //for every friend in the database loop and compare individual scores
        for(var j = 0; j < currentFriend.scores.length;j++){
          //this loops through the arrays and grabs that specific index
          var currentFriendScores = currentFriend.scores[j];
            var currentUserScores = newScores[j];

            //calculate the difference

           var scoreDifference = Math.abs(parseInt(currentUserScores) - parseInt(currentFriendScores));
        }
     
     //if the difference is the least, adjust data in object
        if (scoreDifference <= bestFriend.scoreDifference) {
          // Reset the bestMatch to be the new friend.
          bestFriend.name = currentFriend.name;
          bestFriend.photo = currentFriend.photo;
          bestFriend.score = currentFriend.score
          bestFriend.friendDifference = totalDifference;
          };

    }
  });

};