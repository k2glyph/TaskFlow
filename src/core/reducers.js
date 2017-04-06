import { combineReducers } from 'redux';
import tasksReducer from './tasks/task';


export default combineReducers({
  tasks: tasksReducer
});
