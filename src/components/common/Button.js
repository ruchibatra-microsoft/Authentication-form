import React from 'react'
import {Text, View,TouchableOpacity} from 'react-native'

const Button =({title,onPress})=>{
  const {buttonStyle,textStyle}=styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles={
  textStyle: {
    alignSelf:'center',
    color : '#007aaf',
    fontSize: 25,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle:{
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aaf',
    marginLeft:5,
    marginRight: 5

  }
}

export {Button};