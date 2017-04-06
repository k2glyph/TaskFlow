import React from 'react';
import { Provider } from 'react-redux';
// import App from './components/App';

import configureStore from '../core/store';
const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <div> Welcome to React-todo is working fine  for me.</div>
    </Provider>
  );
};

export default Root;
