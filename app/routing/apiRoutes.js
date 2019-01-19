
var friends = require("../data/friends");

//this will export the contents to another file
module.exports = function(app){

app.get("/api/friends", function(req, res) {
    res.json(friends)
  });


app.post("/api/friends", function(req,res){
    res.json()
});

};