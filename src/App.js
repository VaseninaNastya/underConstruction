import React from 'react';
import './App.css';
import PushingChecklistPage from './pages/pushingChecklist'
import PushingCalculation  from './components/PushingCalculation'
import LoginPage  from './pages/login'
import HomePage  from './pages/home'
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { PrivateRoute } from './utils/PrivateRoute';
import {addPushingActingElementChecklistAction} from './actions/pushingActingElementActions'
import {addPushingCheckedElementChecklistAction} from './actions/pushingCheckedElementActions'
import {addPushingInitialDataAction} from './actions/pushingInitialDataActions'
import {addConcreteGradeAction} from './actions/concreteGradeActions'
import {addReinforcementGradeAction} from './actions/reinforcementGradeActions'
import { Layout,Menu, Form, Input, Button } from 'antd';
import FirebaseContext from './context/firebaseContext';
import { Route, Link, Switch, Redirect } from 'react-router-dom';



class App extends React.Component{
  state ={
    user: null
  }

  componentDidMount(){

    const {
      addPushingActingElementChecklist,
      addPushingCheckedElementChecklist,
      addPushingInitialData,
      addConcreteGrade,
      addReinforcementGrade} = this.props;
    const {auth, getPushingArray, getConcreteGradeArray, getReinforcementGradeArray}=this.context
console.log('4444this.context', this.context);
    auth.onAuthStateChanged((user)=>{
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
    getPushingArray().once('value').then(
      res=>{
        console.log('res.val().actingElement',res.val().actingElement);
      addPushingActingElementChecklist(res.val().actingElement)
      addPushingCheckedElementChecklist(res.val().checkedElement)
      addPushingInitialData(res.val().initialData)
      }
    );
    getConcreteGradeArray().once('value').then(
      res=>{
      addConcreteGrade(res.val().heavyWeightConcrete)
      }
    );
    getReinforcementGradeArray().once('value').then(
      res=>{
      addReinforcementGrade(res.val())
      }
    )
  }
  render(){
    const{user}=this.state
console.log('пропсы в апп', this.props);

const { Header, Content } = Layout;
    return (
      <>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route render={() => (
            <Layout>
              <Header>
                <Menu theme="dark" mode="horizontal">
                  <Menu.Item key="1">
                    <Link to="/home">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/pushing/checklist">Продавливание</Link>
                  </Menu.Item>
                </Menu>
              </Header>
              <Content>
                <Switch>
                  <PrivateRoute path="/" exact component={HomePage} />
                  <PrivateRoute path="/home/:id/:isDone?" component={HomePage} />
                  <PrivateRoute path="/pushing/checklist" component={PushingChecklistPage}></PrivateRoute>
                  <Route path="/pushing/calculation" component={PushingCalculation}></Route>
                  <Redirect to="/" />
                </Switch>
              </Content>
            </Layout>
          )
          } />
        </Switch>
      </>
    )
  }
}


const mapStateToProps =(state)=>{
  return {
      ...state,
  }
}

const mapDispatchToProps =(dispatch)=>{
  return bindActionCreators({
      addPushingActingElementChecklist: addPushingActingElementChecklistAction,
      addPushingCheckedElementChecklist: addPushingCheckedElementChecklistAction,
      addPushingInitialData: addPushingInitialDataAction,
      addConcreteGrade: addConcreteGradeAction,
      addReinforcementGrade: addReinforcementGradeAction,
  }, dispatch)
}





App.contextType = FirebaseContext;
export default connect(mapStateToProps, mapDispatchToProps)(App);
/*        <BrowserRouter>
          <Route path="/pushing/checklist" component={PushingChecklistPage}></Route>
          <Route path="/pushing/calculation" component={PushingCalculation}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/home" component={HomePage}></Route>
        </BrowserRouter>*/








