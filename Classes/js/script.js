function Animal() {}
Animal.prototype.qtdPatas = 4;
Animal.prototype.movimentar = () => {};
function Cachorro(morde) {
	this.qtdPatas = 4;
	this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = () => {
	console.log('Au! Au!');
};

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug.__proto__);
console.log(pitbull.__proto__);
console.log(pitbull);
