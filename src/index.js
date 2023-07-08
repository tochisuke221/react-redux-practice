import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/event/new" component={EventsNew} /> */}
        {/* <Route exact path="/" component={EventsIndex} /> */}
        <Route path="/" element={<EventsIndex />} />
        <Route path="/events/new" element={<EventsNew />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
