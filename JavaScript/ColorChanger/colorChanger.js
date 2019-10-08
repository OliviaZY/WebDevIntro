document.getElementById("button").addEventListener("click", myFunc);
function myFunc() {

  if(document.body.style.background == "purple") {
  	document.body.style.background = "white";
  } else {
  	document.body.style.background = "purple";
  }
}