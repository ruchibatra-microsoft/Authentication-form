import React, {Component} from 'react'
import {Text,View} from 'react-native'
import {Card, CardSection,Button,Input, Spinner} from './common'
import firebase from 'firebase'
class LoginForm extends Component{
  state={email:'',password:'',error:'',loading:false}

  onPressButton(){
    const {email,password} =this.state;
    this.setState({error:'',loading:true})


    firebase.auth().signInWithEmailAndPassword(email,password).
    then(this.onLoginSuccess.bind(this))
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((this.onLoginSuccess.bind(this)))
      .catch(this.onLoginFail.bind(this))
    })
  }

  onLoginFail(){
    this.setState({
      error:'Authentication failed',
      loading:false,
      email:'',
      password:''
    })
  }

  onLoginSuccess(){
    this.setState({
      email:'',
      password:'',
      error:'',
      loading:false

    })
  }
  renderButton(){
    if(this.state.loading)
      return <Spinner/>

      return (
        <Button title="Log in" onPress={this.onPressButton.bind(this)}/>
      )
  }
  render(){
    return (
    <Card>
      <CardSection>
        <Input 
        label="Email" 
        value={this.state.email} 
        onChangeText={email=>{this.setState({email})}}
        placeholder="userName@gmail.com"
        secureTextEntry={false}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Password"
          value={this.state.password}
          onChangeText={password=>{this.setState({password})}}
          placeholder="password"
          secureTextEntry={true}
        />
      </CardSection>

      <Text style={styles.errorStyle}>{this.state.error}</Text>


      <CardSection>
        {this.renderButton()}
      </CardSection>

    
      
    </Card>)
  }
}

const styles={
  errorStyle:{
    fontSize:25,
    alignSelf:'center',
    color:'red'
  }
}

export default LoginForm;