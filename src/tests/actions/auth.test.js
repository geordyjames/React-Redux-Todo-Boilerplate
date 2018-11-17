import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, startLogin, startLogout } from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);
const defaultAuthState = {};

test('should generate login action object', () => {
	const name = 'Hello';
	const action = login(name);
	expect(action).toEqual({
		type: 'LOGIN',
		id: expect.any(String),
		name
	});
});

test('should generate logout action object', () => {
	const action = logout();
	expect(action).toEqual({
		type: 'LOGOUT'
	});
});

test('should call startLogin action correctly', done => {
	const store = createMockStore(defaultAuthState);
	const name = 'Hello';
	store.dispatch(startLogin(name)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'LOGIN',
			id: expect.any(String),
			name
		});
		done();
	});
});

test('should call startLogout action correctly', done => {
	const store = createMockStore(defaultAuthState);
	store.dispatch(startLogout()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'LOGOUT'
		});
		done();
	});
});
