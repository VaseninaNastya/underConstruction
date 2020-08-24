import React from 'react';
import './App.css';
import PushingChecklistPage from './pages/pushingChecklist'
import PushingInitialData from './components/PushingInitialData'
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
    <>
    
      <PushingInitialData/>
      <PushingChecklistPage/>
    </>
  );
}

export default App;
