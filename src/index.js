import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Route, HashRouter} from 'react-router-dom';
import App from './components/App';
import {ResultsContainer} from './components/Results';
import {VotingContainer} from './components/Voting';
import {Provider} from 'react-redux';
import {setState, setClientId, setConnectionState} from './action_creators';
import getClientId from './client_id';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import remoteActionMiddleware from './remote_action_middleware';
import reducer from './reducer';
import io from 'socket.io-client';

const socket = io('http://localhost:8090');

socket.on('state', state =>
    store.dispatch(setState(state)),
);

[
  'connect',
  'connect_error',
  'connect_timeout',
  'reconnect',
  'reconnecting',
  'reconnect_error',
  'reconnect_failed'
].forEach(ev =>
  socket.on(ev, () => store.dispatch(setConnectionState(ev, socket.connected)))
);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);
store.dispatch(setClientId(getClientId()));

const routes = (
  <main>
    <App>
      <Route exact={true} path="/" component={VotingContainer} />
      <Route path="/results" component={ResultsContainer} />
    </App>
  </main>);

console.log(store.getState());

ReactDOM.render((<Provider store = {store}>
                  <HashRouter createElement = {this.createElement}>
                  {routes}
                  </HashRouter>
                </Provider>),
document.getElementById('root'));

registerServiceWorker();
