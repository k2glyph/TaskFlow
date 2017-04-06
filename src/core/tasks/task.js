import * as types from './types';

const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case types.TOGGLE_TASK:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state,
        todo(undefined, action)
      ];
    case types.TOGGLE_TASK:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;
