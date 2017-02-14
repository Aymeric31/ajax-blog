(function(){
	"use strict";
	var app = {
		init:function(){
			// let's go
		},
	};


	$(document).ready(function(){
		app.init();
		$.ajax({
			url: "example.md",
			success: function(data){
				var fichier = $("#md");
				var convert = new showdown.Converter();
				var dataToHtml = convert.makeHtml(data);
				fichier.html(dataToHtml);
			}
		});
		$.ajax({
			url: "menu.json",
			success: function(data){
				var nom = data.nom;
				var urle = data.url;
				for(var i = 0; i<nom.length; i++){
					$("#menu").append("<a href="+urle[i]+">"+nom[i]+"</a> <br />")
					console.log(data.nom[i]);
				};
			},
			error: function(req, res, err){
				console.log(err);
			} 
		});
	// $.getJSON("menu.json"), function(data) {
		
	// }
});
})();
