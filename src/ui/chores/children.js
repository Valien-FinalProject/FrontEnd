import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {connect} from 'react-redux'
import {getChildren} from 'api/api'
import CheckboxHolder from 'ui/chores/checkboxholder'

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
  handleCheck:function(name, isChecked){
    console.log(name)
    var newObj ={}
    newObj[name] = isChecked;
    var newdState =  {children:Object.assign(this.state.children, newObj)}
    this.setState(newdState);
    console.log(this.state.children)
    
  },
  render: function () {
    // console.log(this.props.children)
    return (
      <div>
      	<p>Assign to Child(ren):</p>
      	<div style={radioStyle}>
          {this.props.children.map(function(item, i){
            return <Checkbox key={item.id} id={item.id} value={item.name} label={item.name} onCheck={(e, isChecked) => this.handleCheck(item.name, isChecked)} />
          }.bind(this))}
          <Checkbox value="pool" label="Pool" />
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