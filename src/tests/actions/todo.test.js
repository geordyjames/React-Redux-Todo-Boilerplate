import { add, remove } from '../../actions/todo';

test('should setup add todo action object with provides values', () => {
  const name = 'Hello';
  const action = add(name);
  expect(action).toEqual({
    type: 'ADD',
		option: {
      id: expect.any(String),
      name
    }
  })
});

test('should setup remove todo action object', () => {
  const id = '123456';
  const action = remove(id);
  expect(action).toEqual({
    type: 'REMOVE',
    id
  })
});