import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {getChildren} from 'api/api'
import TextField from 'material-ui/TextField'


const style={
	display:"inline-block",
	width:"50%",
  textAlign:"center"
}
const radioStyle={
	display:"flex",
	flexDirection:"row",
	width:120,
  borderBottom:30,
  margin:"8, auto"

}

const button={
	marginLeft:20
	
}
const Wishlist = React.createClass({
  componentWillMount:function(){
    getChildren()
  },
  handleAssign:function(){

  },
  handleDeny:function(){

  },
  handleChange:function(e){
    var newState = Object.assign({}, this.state)
    newState[e.target.name] = e.target.value
    this.setState(newState)

  },
  render: function () {
    
    console.log('chilren',this.props.children)

    return (
      <div style={style}>
      	<h1> Items on your children's wishlist </h1>
      	<RadioButtonGroup style={radioStyle} name="children" defaultSelected="child1" >
      		{this.props.children.map(function(item, i){
            return <RadioButton key={i} value={item.name} label={item.name} />
          })}
      	</RadioButtonGroup>

      	
      		<p style={{marginRight:20}}>Wishlist item </p> 
         
          <TextField type="number" name="points" onChange={this.handleChange} hintText="Assign Points" />
          <RaisedButton onTouchTap={this.handleAssign} type="submit" backgroundColor="rgba(0,128,0,.4)" name="approve" label="approve"/>
          <RaisedButton onTouchTap={this.handleDeny} className="deny" type="submit" backgroundColor="rgba(255,0,0,.4)" name="deny" label="deny" />
          

      	
      </div>
    )
    
  }
})


const stateToProps = function(state){
  console.log("state", state)
  return{
    children:state.parentReducer.children
  }
}

export default connect(stateToProps)(Wishlist)