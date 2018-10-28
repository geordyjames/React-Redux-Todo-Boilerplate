import uuid from 'uuid';

export const login = (name) => ({
	type: 'LOGIN',
  id: uuid(),
  name
});

export const startLogin = () => {
	return dispatch => {
		const name = 'Geordy';
		dispatch(login(name));
	};
};

export const logout = () => ({
	type: 'LOGOUT'
});

export const startLogout = () => {
	return dispatch => {
		dispatch(logout());
	};
};
