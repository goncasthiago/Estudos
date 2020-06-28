//Promisses
//Três status das promisses
//Pending
//Fulfilled
//Rejected
const mydoSomething = new Promise((resolve, reject) => {
	//throw new Error('Something went wrong');
	setTimeout(function() {
		//faz algo
		resolve('first data');
	}, 1000);
});

const mydoOtherthing = new Promise((resolve, reject) => {
	setTimeout(function() {
		//faz algo
		resolve('second data');
	}, 1000);
});

console.log('Chamando a função com promisse');
mydoSomething
	.then((data) => {
		console.log(data.split(''));
		return mydoOtherthing;
	})
	.then((data2) => console.log(data2.split('')))
	.catch((error) => console.log(error));
/*
function doSomething(callback) {
	setTimeout(function() {
		//faz algo
		callback('first data');
	}, 1000);
}

console.log('Chamando a função com Callbacks');
function doOtherthing(callback) {
	setTimeout(function() {
		//faz algo
		callback('second data');
	}, 1000);
}
function doAll() {
	doSomething(function(data) {
		var processedData = data.split('');

		doOtherthing(function(data2) {
			var processedData2 = data2.split('');

			setTimeout(function() {
				console.log(processedData, processedData2);
			}, 1000);
		});
	});
}

//callback hell
function doAllwTryCatch() {
	try {
		doSomething(function(data) {
			var processedData = data.split('');

			try {
				doOtherthing(function(data2) {
					var processedData2 = data2.split('');

					try {
						setTimeout(function() {
							console.log(processedData, processedData2);
						}, 1000);
					} catch (err) {
						//handle errors
					}
				});
			} catch (err) {
				//handle errors
			}
		});
	} catch (err) {
		//handle error
	}
}
doAll();

//exemplo do mdn

function greeting(name) {
	console.log('Hello ' + name);
}

function processUserInput(callback) {
	//var name = prompt('Please enter your name.');
	let name = 'thiago';
	callback(name);
}

processUserInput(greeting);
*/
/*
//Event Emiter, exclusivo do node

const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('User Logged', (data) => {
	console.log(data);
});

emitter.emit('User logged', { user: 'Thiago Debia' });
*/
