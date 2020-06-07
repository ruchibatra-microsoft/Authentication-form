import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
  const {textStyle,viewStyle}=styles;
  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.heading}</Text>
  </View>
  )
}

const styles = {
  viewStyle:{
    backgroundColor:'#F8F8F8',
    justifyContent:'center',
    height:60,
    alignItems:'center',
    paddingTop:15,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    showOpacity: 0.2,
    elevation:2,
    position:'relative'
    
  },
  textStyle: {
    fontSize: 25,
    
  }
};

export  {Header};