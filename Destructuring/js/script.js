var arr = [ 'Apple', 'Banana', 'Orange', [ 'tomato' ] ];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var [ apple2, banana2, orange2, [ tomato2 ] ] = arr;

var obj = {
	name: 'Thiago',
	props: {
		age: 36,
		favColors: [ 'green', 'blue' ]
	}
};

var name2 = obj.name;
var age = obj.props.age;
var color = obj.props.favColors[0];
//nova variavel tem que ter o mesmo nome do objeto
var { name } = obj;
var { props: { age: age2, favColors: [ color1, color2 ] } } = obj;

//ou podemos mudar o nome da variavel
var { name: name3 } = obj;

//Objeto dento de um Array

var arr1 = [ { name: 'Apple', type: 'Fruit' } ];

var fruit1 = arr1[0].name;

//usando o destructuring
var [ { name: fruit } ] = arr1;

log('Pegando item a item do array', apple);
log('Aplicando o destructuring no array', apple2);
log('Pegando item a item do array multidimensional', tomato);
log('Aplicando o destructuring no array multidimensional', tomato2);
log('Pegando o item name do objeto', name2);
log('Pegando o item name do objeto via destructuring', name);
log('Pegando o item name do objeto via destructuring e mudando o nome da variavel', name3);
log('Pegando uma propriedade do objeto', age);
log('Pegando uma propriedade objeto via destructuring', age2);
log('Pegando um array na propriedade do objeto', color);
log('Pegando um array na propriedade objeto via destructuring', color1);
log('Pegando um objeto dentro do array', fruit1);
log('Pegando um objeto dentro do array com destructuring', fruit);

//Funcao para logar os testes
function log(msg, fn) {
	console.log(msg);
	console.log(fn);
}
