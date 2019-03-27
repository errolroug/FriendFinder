var path = require("path");


module.exports = function(app){

// this will go to survey and any other path will hit home.html
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
});

}
