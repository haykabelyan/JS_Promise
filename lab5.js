

let t = setInterval(timer, 1000);

function stopTimer(){
	clearInterval(t);
}

function timer(){
	var date = new Date();
	var time = date.toLocaleTimeString();
	document.getElementById('demo').innerHTML = time;
}

