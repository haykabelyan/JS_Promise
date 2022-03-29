


const a = new Promise( function(resolve, reject){
	let rand = Math.random().toFixed(1);
	rand > .5 ? resolve('YES') : reject('NO');
} );




const b = function(){
	console.log('START');
	a.then(function(result){console.log(result);}).then(function(){console.log('KIM');})
		.catch(function(error){console.log('CATCH= '+ error);})
		.finally( function(){console.log('FINNALY');} )
	console.log('END');
}
b();
