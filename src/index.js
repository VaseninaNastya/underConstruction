import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootRedusers from './reducers'
import database from './services/firebase'
import {addPushingActingElementChecklistAction} from './actions/pushingActingElementActions'
import {addPushingCheckedElementChecklistAction} from './actions/pushingCheckedElementActions'


const store = new createStore(rootRedusers);
        database.ref('/pushing/').once('value').then(
          res=>{
            console.log('res.val()', res.val().actingElement);
          store.dispatch(addPushingActingElementChecklistAction(res.val().actingElement));
          store.dispatch(addPushingCheckedElementChecklistAction(res.val().checkedElement));
          }
        )



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>, document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
