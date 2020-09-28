import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from "redux";
import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});
const store = createStore(manageAuthorsAndBooks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
