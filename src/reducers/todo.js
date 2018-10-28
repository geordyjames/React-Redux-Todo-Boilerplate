// Expenses Reducer

const todoReducerDefaultState = [];

export default (state = todoReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        action.todo
      ];
    case 'REMOVE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        };
      });
    case 'SET':
      return action.todos;
    default:
      return state;
  }
};
