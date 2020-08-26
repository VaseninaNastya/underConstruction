import React from 'react';
import './App.css';
import PushingChecklistPage from './pages/pushingChecklist'
import PushingCalculation  from './components/PushingCalculation'
import ReinforcementGrade from './components/ReinforcementGrade'
import ConcreteGrade from './components/ConcreteGrade';
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
      <PushingCalculation/>
      <PushingChecklistPage/>
    </>
  );
}

export default App;
