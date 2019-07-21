var p1 = document.getElementById("p1");
var dis1 = document.getElementById("dis1");
var score1 = 0;

var p2 = document.getElementById("p2");
var dis2 = document.getElementById("dis2");
var score2 = 0;

var max = 5;
var metMax = false;

var reset = document.getElementById("res");

p1.addEventListener("click", function() {
	if(!metMax) {
		score1++;
		console.log(max);
		if(score1 < max){

			dis1.textContent = score1;
		}
		else if(score1 == max) {
			metMax = true;
			dis1.textContent = score1;
			dis1.classList.add("winner");
		}
	}
})

p2.addEventListener("click", function() {
	if(!metMax) {
		score2++;
		
		if(score2 < max){

			dis2.textContent = score2;
		}
		else if(score2 == max) {
			metMax = true;
			dis2.textContent = score2;
			dis2.classList.add("winner");
		}
	}
})

reset.addEventListener("click", function(){
	res();
});

function res(){
	score1 = 0;
	score2 = 0;
	dis1.textContent = 0;
	dis2.textContent = 0;
	console.log(score2);
	dis1.classList.remove("winner");
	dis2.classList.remove("winner");
	metMax = false;
}