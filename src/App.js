import React, {Component} from 'react'
import {Text,View} from 'react-native'
import firebase from 'firebase';
import {Header, Button,CardSection,Spinner} from './components/common'
import LoginForm from './components/LoginForm'




class App extends Component{

  state={ loggedIn: null}
  UNSAFE_componentWillMount(){
      firebase.initializeApp({
          //your firebase authentication keys
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
