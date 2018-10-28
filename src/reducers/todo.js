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
    case 'EDIT':
      return state.map((option) => {
        if (option.id === action.id) {
          return {
            ...option,
            ...action.updates
          }
        } else {
          return option;
        }
      });
    case 'SET':
      return action.options;
    default:
      return state;
  }
};
