import React, {Component} from 'react'
import {Text,View} from 'react-native'
import firebase from 'firebase';
import {Header, Button,CardSection,Spinner} from './components/common'
import LoginForm from './components/LoginForm'




class App extends Component{

  state={ loggedIn: null}
  UNSAFE_componentWillMount(){
      firebase.initializeApp({
        apiKey: "AIzaSyB_iBy9ShC-EZbQO5dbTwsWsio8KtE_ZCs",
        authDomain: "auth-33446.firebaseapp.com",
        databaseURL: "https://auth-33446.firebaseio.com",
        projectId: "auth-33446",
        storageBucket: "auth-33446.appspot.com",
        messagingSenderId: "299580994955",
        appId: "1:299580994955:web:2de6add2162058c8d3ab8e",
        measurementId: "G-TEW4G363W9"
      })

      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({loggedIn:true})
        }
        else{
          this.setState({loggedIn:false})
        }
      }); 
  }

  renderContent(){
    switch(this.state.loggedIn)
    {
      case true:
        return (
          <CardSection>
            <Button title="Log out" onPress={()=>firebase.auth().signOut()}/>
          </CardSection>
        )
      case false:
        return (<LoginForm/>)
      default:
        return (<CardSection><Spinner/></CardSection>)
    }
   
    
  }
  render(){
    return (
      <View>
        <Header heading ="Login form"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;