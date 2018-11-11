import uuid from 'uuid';

export const login = (name) => ({
	type: 'LOGIN',
  id: uuid(),
  name
});

export const startLogin = () => {
	return dispatch => {
		const name = 'Geordy';
		setTimeout(() => { // To demo asynchronous fn
			dispatch(login(name));
		}, 100)
	};
};

export const logout = () => ({
	type: 'LOGOUT'
});

export const startLogout = () => {
	return dispatch => {
		setTimeout(() => { // To demo asynchronous fn
			dispatch(logout());
		}, 100)
	};
};
