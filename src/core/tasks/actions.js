import * as types from './types';

let nextTodoId = 0;
export const addTodo = text => ({
  type: types.ADD_TASK,
  id: nextTodoId++,
  text
});

// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// });

export const toggleTodo = id => ({
  type: types.TOGGLE_TASK,
  id
});
