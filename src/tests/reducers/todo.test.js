import todoReducer from '../../reducers/todo';
import todos from '../fixtures/todos';

test('should set default state', () => {
	const state = todoReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should add an todo list', () => {
	const option = {
		id: '109',
		name: 'Laptop'
	};
	const action = {
		type: 'ADD',
		option
	};
	const state = todoReducer(todos, action);
	expect(state).toEqual([...todos, option]);
});

test('should remove todo by id', () => {
  const action = {
    type: 'REMOVE',
    id: todos[1].id
  };
  const state = todoReducer(todos, action);
  expect(state).toEqual([todos[0], todos[2]]);
});

test('should not remove todo if id not found', () => {
  const action = {
    type: 'REMOVE',
    id: '-1'
  };
  const state = todoReducer(todos, action);
  expect(state).toEqual(todos);
});