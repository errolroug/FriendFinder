//require express
var express = require("express");

//create and instance of express
var app = express();



//what port will it be on
var PORT = process.env.PORT || 8080;

console.log("This node is running");





//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

  // Log (server-side) when our server has started
console.log("Server listening on http://localhost:" + PORT);

});