

function random(max){
	return Math.round(Math.random()*max);
}

new Promise(function(resolve, reject){
	let a = random(10);
	a>5 ? resolve(a) : reject('A porq e 5 ic');
}).then( function(value){
	console.log('THEN= '+value);
} );


