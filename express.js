var express = require("express");
var app = express();

app.get("/", function (req, res){

})
app.get("/", function (req, res){
	var menu = req.params; 
	console.log("accueil", req.params.menu);
	res.send("page d'accueil");
})

app.listen(3337, function(){
	console.log("ok");
})