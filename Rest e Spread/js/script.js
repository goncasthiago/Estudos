//modo antigo

function sum(a, b) {
	var value = 0;

	for (var i = 0; i < arguments.length; i++) {
		value += arguments[i];
	}
	return value;
}

//rest operator

function verifica(...args) {
	return args;
}

function soma(...args) {
	return args.reduce((value, next) => {
		return (value += next);
	}, 0);
}

//passando o argumento via arrow function

const multiplica = (...args) => args.reduce((acc, value) => acc * value, 1);

//passando o rest para outra funcao

const multiplicador = (...rest) => {
	return multiplica.apply(undefined, rest);
};

//fazendo o mesmo com spread operator
const enviaSpread = (...rest) => {
	return multiplica(...rest);
};

//string é iterável, inclusive com for of
const str = 'Thiago Debia Gonçalves';
const arr = [ 1, 2, 3, 4 ];

function logArgs(...args) {
	return args;
}

function logArgumentos(a, b, c) {
	console.log(a, b, c);
}

//Spread operator usado para construir arrays

const arr2 = arr.concat([ 5, 6, 7 ]);
const arr3 = [ ...arr2, 8, 9, 10 ];

//criando objetos com o spread

const obj = {
	test: 123
};

//a ordem faz toda a diferença, ele sobrescreve as propriedades
const obj2 = {
	...obj,
	test2: 'hello'
};

const obj3 = {
	...obj2
};

obj3.test = 5;

//Testes
log('Modelo antigo de usar varios argumentos', sum(2, 2, 2, 2, 2));
log('Verificando o ...args', verifica(2, 2, 2, 2, 2));
log('usando rest e reduce', soma(2, 2, 2, 2, 2));
log('Passando um rest por argumento na funcao', multiplica(2, 2, 3, 2, 2));
log('Passando um spread por argumento na funcao', enviaSpread(2, 2, 3, 2, 2));
log('Passando uma string com o spread', logArgs(...str));
log('Passando um array com o spread', logArgs(...arr));
log('Passando um array com o spread em função de 3 argumentos', logArgumentos(...arr));
log('Contruindo arrys com o concat', arr2);
log('Contruindo arrys com o spread', arr3);
log('Contruindo objetos com o spread', obj2);

log('sobrescrevendo objetos com o spread', obj3);
log('sobrescrevendo objetos com o spread', obj2);
//Funcao para logar os testes
function log(msg, fn) {
	console.log(msg);
	console.log(fn);
}
