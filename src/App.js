import React from 'react';

import './App.css';
import database from "./services/firebase";
import MainPushingChecklist from './components/MainPushingChecklist';

/*
const buttonReducer = (state={},  action,)=>{
    switch (action.type){
        case 'CHANGE_STATE':
            database.ref('/button/').set({chosen:!state.chosen});
            return{
                ...state,
                chosen: !state.chosen,
            }
        default: return state
    }
}
*/


function App() {
  return (

<MainPushingChecklist/>
  );
}

export default App;
