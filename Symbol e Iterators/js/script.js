//criando um symbok
const uniqueId = Symbol();
log(uniqueId);

//criando um symbol com um "nome" - serve apenas para debug

const uni = Symbol('Hello');
const uni2 = Symbol('Hello');
//Ele nao é igual mesmo tendo o mesmo nome
log(uni === uni2);

//criando um objeto com esse symbol

const obj = {
	[uniqueId]: 'Hello'
};

log(obj);

// well known symbols

const arr = [ 1, 2, 3, 4 ];
const it = arr[Symbol.iterator]();

//modelo antigo ao ES6
while (true) {
	let { value, done } = it.next();
	if (done) {
		break;
	}
	console.log(value);
}

//comportamento do iterator
log('Comportamento do Iterator');
log(arr[Symbol.iterator]().next());

//como possui o iterador, podemos usar o for of
log('Utilizando o ES6');
for (let value of arr) {
	console.log(value);
}

//usando um iterador no objeto

const obj1 = {
	values: [ 1, 2, 3, 4 ],
	[Symbol.iterator]() {
		let i = 0;
		return {
			next: () => {
				i++;
				return {
					value: this.values[i - 1],
					done: i > this.values.length
				};
			}
		};
	}
};

const itObj = obj1[Symbol.iterator]();
log('Iterando uma propriedade do Objeto');
log(itObj.next());
log(itObj.next());
log(itObj.next());
log(itObj.next());
log(itObj.next());

log('Utilizando o for of');
for (let value of obj1) {
	console.log(value);
}

//Utilizando o iterador com o spread

var arr1 = [ ...obj1 ];
log(arr1);

function log(arg) {
	console.log(arg);
}

//Generators
function* hello() {
	log('Hello');
	yield 1;
	log('from');
	value = yield 2;
	log(value);
}

const gen = hello();
log('Chamando a função');
log(gen);
log('Chamando a funcao com o next 3x');
log(gen.next());
log(gen.next());
log(gen.next('Outside'));

const obj2 = {
	values: [ 1, 2, 3, 4 ],
	*[Symbol.iterator]() {
		for (let i = 0; i < this.values.length; i++) {
			yield this.values[i];
		}
	}
};

log('Usando Generator no objeto');
for (let value of obj2) {
	console.log(value);
}
