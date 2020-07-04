import React from 'react';

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

//criando botões html
const buttonA = <button>Histórico dos Clientes</button>;
const buttonB = <button>Cadastrar Cliente</button>;

const hasCustomer = true;

const App = () => {
	const name = 'Digital Innovation';

	const handleChange = (e) => {
		const { value } = e.target;
		console.log(value);
	};

	const showEvent = (e) => {
		console.log(e);
		alert(name);
	};

	const Button = <button onClick={showEvent}>Mostrar Evento</button>;

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

	const handleDeleteCustomer = (e, id) => {
		console.log(`Deletar o id: ${id}`);
	};

	const renderCustomers = (customer, index) => {
		return (
			<div key={`customer-${customer.id}`}>
				<li>
					{customer.name} <button onClick={(e) => handleDeleteCustomer(e, customer.id)}>Delete</button>
				</li>
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

			<p>Digital Innovation One</p>
			<input onChange={handleChange} />
			{Button}
		</div>
	);
};
export default App;
