import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';

const initialState = {};
const middleware = [
    thunk
  ];

const store = createStore(reducer, initialState, compose(
    applyMiddleware(...middleware),
));

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
  , document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
    module.hot.accept('./components/app', () => {
      ReactDOM.render(
          <Provider store={store}>
                <App />
          </Provider>
        , document.getElementById('root')
      );
    });
  }
  
