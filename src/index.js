import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootRedusers from './reducers'
import Firebase from './services/firebase'
import {addPushingActingElementChecklistAction} from './actions/pushingActingElementActions'
import {addPushingCheckedElementChecklistAction} from './actions/pushingCheckedElementActions'
import {addPushingInitialDataAction} from './actions/pushingInitialDataActions'
import {addConcreteGradeAction} from './actions/concreteGradeActions'
import {addReinforcementGradeAction} from './actions/reinforcementGradeActions'

import { BrowserRouter } from 'react-router-dom'
import FirebaseContext from './context/firebaseContext';

//console.log('context', this.context);

const store = new createStore(rootRedusers);
/*
Firebase.database.ref('/pushing/').once('value').then(
          res=>{

          store.dispatch(addPushingActingElementChecklistAction(res.val().actingElement));
          store.dispatch(addPushingCheckedElementChecklistAction(res.val().checkedElement));
          store.dispatch(addPushingInitialDataAction(res.val().initialData));
          }
        );
        Firebase.database.ref('/concreteGrade/').once('value').then(
          res=>{

          store.dispatch(addConcreteGradeAction(res.val().heavyWeightConcrete));
          }
        );
        Firebase.database.ref('/reinforcementGrade/').once('value').then(
          res=>{

          store.dispatch(addReinforcementGradeAction(res.val()));
          }
        )*/
ReactDOM.render(
  <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </FirebaseContext.Provider>
  </Provider>, document.getElementById('root')
);

