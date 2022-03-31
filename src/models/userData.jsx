const users = [
	{ id: 1, nro: 1, firstName: 'Snow', lastName: 'Snow', userName: 'admin' },
	{
		id: 2,
		nro: 2,
		firstName: 'Lannister',
		lastName: 'Snow',
		userName: 'admin',
	},
	{
		id: 3,
		nro: 3,
		firstName: 'Lannister',
		lastName: 'Snow',
		userName: 'admin',
	},
	{ id: 4, nro: 4, firstName: 'Stark', lastName: 'Snow', userName: 'admin' },
	{
		id: 5,
		nro: 5,
		firstName: 'Targaryen',
		lastName: 'Snow',
		userName: 'admin',
	},
	{
		id: 6,
		nro: 6,
		firstName: 'Melisandre',
		lastName: 'Snow',
		userName: 'admin',
	},
	{
		id: 7,
		nro: 7,
		firstName: 'Clifford',
		lastName: 'Snow',
		userName: 'admin',
	},
	{
		id: 8,
		nro: 8,
		firstName: 'Frances',
		lastName: 'Snow',
		userName: 'admin',
	},
	{ id: 9, nro: 9, firstName: 'Roxie', lastName: 'Snow', userName: 'admin' },
];

const getUsersId = id => {
	console.log(id);
	return users.find(u => u.id === id);
};

export { users, getUsersId };
