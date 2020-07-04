import React from 'react';
import customerid from './customers';
import Button from './components/Button';

//const hasCustomer = true;

const App = () => {
	const handleClick = (id) => {
		alert(`Id do cliente: ${id}`);
	};
	const renderCustomers = (customer, index) => {
		return (
			<div key={`customer-${customer.id}`}>
				<li>
					{customer.name} <Button onClick={() => handleClick(customer.id)}>Deletar o Cliente</Button>
				</li>
				Idade: {customer.idade}
			</div>
		);
	};

	return (
		<div>
			<h1>Clientes</h1>
			<div>
				<ul>{customerid.map(renderCustomers)}</ul>
			</div>
		</div>
	);
};
export default App;
