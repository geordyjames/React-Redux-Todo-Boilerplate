import uuid from 'uuid';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const login = name => ({
	type: 'LOGIN',
	id: uuid(),
	name
});

export const startLogin = name => {
	return dispatch => {
		// To demo asynchronous fn
		return delay(100).then(() => {
			dispatch(login(name));
		});
	};
};

export const logout = () => ({
	type: 'LOGOUT'
});

export const startLogout = () => {
	return dispatch => {
		// To demo asynchronous fn
		return delay(100).then(() => {
			dispatch(logout());
		});
	};
};
