import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {getChildren, getChildWish} from 'api/api'
import TextField from 'material-ui/TextField'
import Wish from 'ui/rewards/wishitem'


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
var setVal = localStorage.getItem("ChildIdforDefault")
const Wishlist = React.createClass({
  getInitialState:function(){
    return{
      val:setVal,
    }
  },
  componentWillMount:function(){
    getChildren()
    var x = Number(localStorage.getItem('ChildIdforDefault'))
    getChildWish(x)
    
  },
  handleChange:function(e, value){
    getChildWish(value)
    this.setState({
      val:value
    })

  },
  render: function () {
    return (
      <div style={style}>
      	<h1> Items on your children's wishlist </h1>
      	<RadioButtonGroup style={radioStyle} name="children" onChange={(e, value) => this.handleChange(e, value)} defaultSelected={Number(localStorage.getItem('ChildIdforDefault'))} >
      		{this.props.children.map(function(item, i){
            return <RadioButton labelStyle={{color:"white", fontFamily:"Chalky", marginLeft:0}} key={item.id} value={item.id} label={(item.name).toUpperCase()} />
          })}
      	</RadioButtonGroup>

      	
      		<p style={{marginRight:20, fontSize:30}}>Wishlist {this.props.wishes.length === 1 ? "item" : "items" } </p> 
         <ul>
          {this.props.wishes.map(function(item){
          return <Wish key={item.id} id={item.id} name={item.name} url={item.url} val={this.state.val} image={item.imageUrl} />
        }.bind(this))}
      	 </ul>
      </div>
    )
    
  }
})


const stateToProps = function(state){
  console.log("state", state)
  return{
    children:state.parentReducer.children,
    wishes:state.childReducer.wishes
  }
}

export default connect(stateToProps)(Wishlist)