import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux";
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({    
    form: formReducer,
    // ...các reducer khác
})
const store = createStore(rootReducer); //Tạo store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
console.log("Store: ", store.getState())
