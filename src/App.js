import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import PushingChecklistPage from './pages/pushingChecklist'
import PushingCalculation  from './components/PushingCalculation'
import LoginPage  from './pages/login'
import HomePage  from './pages/home'
import ReinforcementGrade from './components/ReinforcementGrade'
import ConcreteGrade from './components/ConcreteGrade';
import {fire} from './services/firebase'
class App extends React.Component{
  state ={
    user: null
  }
  componentDidMount(){
    fire.auth().onAuthStateChanged((user)=>{
      console.log('user', user)
      if (user){
        this.setState({
          user
        })
      }else{
        this.setState({
          user:false
        })
      }
    })
  }
  render(){
    const{user}=this.state
    return (
      <>
        <BrowserRouter>
          <Route path="/pushing/checklist" component={PushingChecklistPage}></Route>
          <Route path="/pushing/calculation" component={PushingCalculation}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/home" component={HomePage}></Route>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
/*<BrowserRouter>
<Route path="/pushing/checklist" component={PushingChecklistPage}></Route>
<Route path="/pushing/calculation" component={PushingCalculation}></Route>
<Route path="/login" component={LoginPage}></Route>
</BrowserRouter>*/