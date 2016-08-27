import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {connect} from 'react-redux'
import {getChildren} from 'api/api'
import CheckboxHolder from 'ui/chores/checkboxholder'
import {fullWhite} from 'material-ui/styles/colors'

const radioStyle={
  display:"flex",
  flexDirection:"row",
  width:120
}

const Children =  React.createClass({
  getInitialState:function(){
    return{
      children:{}
    }
  },
  componentWillMount:function(){
    getChildren()
  },
  handleCheck:function(name, isChecked, id){
    var newObj ={}
    // newObj[name[0]]  = isChecked;
    newObj[name[1]] = isChecked
    var newdState =  {children:Object.assign(this.state.children, newObj)}
    this.setState(newdState);
    this.props.getChildrenId(this.state.children)
    
  },
  render: function () {
    console.log(this.props.children)
    return (
      <div>
      	<p>Assign to {this.props.children.length === 1 ? "Child" : "Children"}:</p>
      	<div style={radioStyle}>
          {this.props.children.map(function(item, i){
            return <Checkbox key={item.id} id={item.id} value={item.name} label={item.name} onCheck={(e, isChecked, id) => this.handleCheck([item.name,item.id], isChecked, item.id)} labelStyle={{color:fullWhite, fontSize:20, fontFamily:"Chalky"}} labelPosition={'left'} />
          }.bind(this))}
        </div>


      </div>
    )
  }
})


const stateToProps = function(state){
	return {
		children:state.parentReducer.children
	}
}

export default connect(stateToProps)(Children)