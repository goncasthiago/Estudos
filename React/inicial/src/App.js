import React from 'react';
import './App.css';
import Button from '../src/Button';
import AppNew from './AppNew';

const customerid = [
	{
		id: 1,
		name: 'Thiago Debia',
		idade: 36
	},
	{
		id: 2,
		name: 'Juliana Cassia',
		idade: 36
	},
	{
		id: 3,
		name: 'Arthur Gonçalves',
		idade: 6
	}
];

function primeiroJSX() {
	return (
		<div>
			<p>Thiago Debia</p>
			<p>Soma: {soma(5, 5)}</p>
			<Button onClick={() => soma(5, 5)} name={'Soma'} />
		</div>
	);
}

function soma(a, b) {
	console.log('clicou');
	return a + b;
}

//criando botões html
const buttonA = <button>Histórico dos Clientes</button>;
const buttonB = <button>Cadastrar Cliente</button>;

const hasCustomer = true;

function App() {
	//Bloco de renderização dos componentes
	const renderHistory = (
		<div>
			<p>Clique no Botão abaixo para visualizar o histórico dos clientes</p>
			<br />
			{buttonA}
		</div>
	);

	const renderAddCustomer = (
		<div>
			<p>Clique abaixo para cadastrar o cliente</p>
			<br />
			{buttonB}
		</div>
	);

	const customer = 'Thiago Debia';

	//Evitando que um componente seja renderizado
	const showCustomer = () => {
		if (!hasCustomer) return null;
		return (
			<div>
				<h1>Nome do Cliente: {customer} </h1>
			</div>
		);
	};

	const renderCustomers = (customer) => {
		return (
			<div key={`customer-${customer.id}`}>
				<li>{customer.name}</li>
				Idade: {customer.idade}
			</div>
		);
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>Digital Innovation One</p>
				<p>Bem Vindo</p>
				{hasCustomer ? renderHistory : renderAddCustomer}
				<div>{showCustomer()}</div>
				<div>
					<ul>{customerid.map(renderCustomers)}</ul>
				</div>
			</header>
		</div>
	);
}

/*

Mostrando elementos de forma condicional

{hasCustomer && (
					<div>
						<p>Clique no Botão abaixo para visualizar o histórico dos clientes</p>
						<br />
						{buttonA}
					</div>
				)}

*/

/*
//Operador ternário para if else

const renderHistory = () => (
		<div>
			<p>Clique no Botão abaixo para visualizar o histórico dos clientes</p>
			<br />
			{buttonA}
		</div>
	);

	const renderAddCustomer = () => (
		<div>
			<p>Clique abaixo para cadastrar o cliente</p>
			<br />
			{buttonB}
		</div>
	);

{hasCustomer ? renderHistory() : renderAddCustomer()}
*/
export default App;
