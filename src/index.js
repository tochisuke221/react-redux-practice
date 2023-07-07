import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import reducer from './reducers'
import  EventsIndex from './components/events_index';
import registerServiceWorker from './registerServiceWorker';

// storeを使うため 
const store = createStore(reducer, applyMiddleware(thunk))
console.log('index.js' + store)
console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
