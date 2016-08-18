import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {getChildren} from 'api/api'



const style={
	display:"inline-block",
	width:"50%",
	margin:"auto"
}
const radioStyle={
	display:"flex",
	flexDirection:"row",
	width:120
}

const button={
	marginLeft:20
	
}
const Wishlist = React.createClass({
  componentWillMount:function(){
    getChildren()
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

      	<ul>
      		<li><span style={{marginRight:20}}>Wishlist item </span> <RaisedButton backgroundColor="rgba(0,128,0,.4)" name="approve" label="approve"/><RaisedButton className="deny" backgroundColor="rgba(255,0,0,.4)" name="deny" label="deny" /></li>

      	</ul>
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