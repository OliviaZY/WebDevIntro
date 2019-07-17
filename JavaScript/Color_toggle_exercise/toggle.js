var button = document.querySelector("button");
button.addEventListener("click", function(){
	var color = document.body.style.background;
	if(color === "purple"){
		document.body.style.background = "pink";
		color = "pink";
	}else{
		document.body.style.background = "purple";
		color = "purple";
	}
	// if(color == "purple")
	// 	document.body.style.background = "amber";
	// else
	// 	document.body.style.background = "purle";
});