// Promise

function randomValue(max) {
	return Math.round(Math.random()*max);
}

console.log('a');
setTimeout(function(){
	console.log( randomValue(10) ); 
}, 5000);
console.log('b');
