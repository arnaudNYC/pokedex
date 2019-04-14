import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import store from './store';
import { loadPokedexRequest } from './actions/pokedexActions';

store.dispatch(loadPokedexRequest('national'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
