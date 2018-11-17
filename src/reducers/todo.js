const todoReducerDefaultState = [];

export default (state = todoReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        action.option
      ];
    case 'REMOVE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
