import React,{Component} from 'react'
import CardSection from './CardSection'
import {connect}  from 'react-redux'
import {Text,ScrollView,TouchableWithoutFeedback,View,LayoutAnimation} from 'react-native'
import * as actions from '../../actions'


class ListItem extends Component{
  UNSAFE_componentWillUpdate(){
    LayoutAnimation.spring();
  } 
  renderDescription(){
    if(this.props.library.item.id==this.props.selectLibraryId)
  return (<Text style={styles.paraStyle}>{this.props.library.item.description}</Text>)
  }
  render(){
    console.log(this.props);
    const {textStyle}=styles;
    const {id,title}=this.props.library.item

    
    return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={()=>{
        this.props.selectLibrary(id)
      }}>
        <View>
        <CardSection>
          <Text style={textStyle}>
            {title}
          </Text>
        </CardSection>
        <CardSection>
        {this.renderDescription()}
        </CardSection>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
    )
  }
}

const styles={
  textStyle:{
    fontSize:25,
    paddingLeft:15
  },
  paraStyle:{
    fontSize:16,
    paddingLeft:15
  }
}

const mapStateToProps=state=>{
  return {selectLibraryId: state.selectLibraryId}
}
export default connect(mapStateToProps,actions)(ListItem);
