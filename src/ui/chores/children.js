import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {connect} from 'react-redux'
import {getChildren} from 'api/api'

const radioStyle={
  display:"flex",
  flexDirection:"row",
  width:120
}

const Children =  React.createClass({
  componentWillMount:function(){
    getChildren()
  },
  onTouch:function(){
  	var all = this.refs.all
  	console.log(all.value)
  },
  render: function () {
    return (
      <div>
      	<p>Assign to Child(ren):</p>
      	<div style={radioStyle}>
          {this.props.children.map(function(item, i){
            return <Checkbox key={item.id} value={item.name} label={item.name} />
          })}
          <Checkbox onChange={this.onTouch} checked={this.state.checked} ref="all" value="all" label="all" />
          <Checkbox value="pool" label="pool" />
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