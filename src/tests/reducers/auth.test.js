import authReducer from '../../reducers/auth';

test('should set uid and name for login', () => {
  const action = {
    type: 'LOGIN',
    id: 'abc123',
    name: 'Hello'
  };
  const state = authReducer({}, action);
  expect(state.id).toBe(action.id);
  expect(state.name).toBe(action.name);
});

test('should clear id and name for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'anything' }, action);
  expect(state).toEqual({});
});