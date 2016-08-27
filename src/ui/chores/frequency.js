import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {lightWhite, fullWhite} from 'material-ui/styles/colors'

const style={
	display:"inline"
}
const rbstyle={
	display:"flex",
	flexDirection:"row"
}

const labelStyle={
	color:fullWhite,
	fontSize:20,
	fontFamily:"Chalky"
}

export default React.createClass({
  getInitialState:function(){
  	return{
  		days:{
	  		m:false,
	  		tu:false,
	  		we:false,
	  		th:false,
	  		f:false,
	  		sa:false,
	  		su:false
  		}
  	}
  },
  // handleAll:function(){
  // 	this.setState({
  // 		checked:this.state.checked = true 
  // 	})
  // },
  // handleNone:function(){
  // 	this.setState({
  // 		checked:this.state.checked = false
  // 	})
  // },
  handleCheck:function(day, isChecked){
	// this.setState(newState)
	var newObj = {}
	newObj[day] = isChecked;
	var newState = {days: Object.assign(this.state.days, newObj)}
	console.log(newState)
	this.setState(newState);
	this.props.getFrequency(this.state.days)
  },
  render: function () {
    return (
      <div style={{display:"flex", flexDirection:"row", width:55, marginRight:3, marginLeft:2}}>
	      <Checkbox onCheck={(e, isChecked) => this.handleCheck("m", isChecked)}  labelStyle={labelStyle} name="m" labelPosition={'left'} label="M " />
	      <Checkbox onCheck={(e, isChecked) => this.handleCheck("tu", isChecked)} labelStyle={labelStyle} labelPosition={'left'} label="TU " />
	      <Checkbox onCheck={(e, isChecked) => this.handleCheck("we", isChecked)} labelStyle={labelStyle} labelPosition={'left'} label="W " />
	      <Checkbox onCheck={(e, isChecked) => this.handleCheck("th", isChecked)} labelStyle={labelStyle} labelPosition={'left'} label="TH " />
	      <Checkbox onCheck={(e, isChecked) => this.handleCheck("f", isChecked)}  labelStyle={labelStyle} labelPosition={'left'} label="F " />
	      <Checkbox onCheck={(e, isChecked) => this.handleCheck("sa", isChecked)} labelStyle={labelStyle} labelPosition={'left'} label="SA " />
	      <Checkbox onCheck={(e, isChecked) => this.handleCheck("su", isChecked)} labelStyle={labelStyle} labelPosition={'left'} label="SU " />

      </div>
    )
  }
})
	//<RadioButton onTouchTap={this.handleNone} labelPosition={'left'} value="None" label="One Time"/>
	  // <RadioButtonGroup style={rbstyle} name="allornone" >
	  //     	<RadioButton onTouchTap={this.handleAll} labelPosition={'left'} value="All" label="Every Day" />
	  //     </RadioButtonGroup>

// defaultChecked={this.state.checked}
// defaultChecked={this.state.checked}
// defaultChecked={this.state.checked}
// defaultChecked={this.state.checked}
// defaultChecked={this.state.checked}
// defaultChecked={this.state.checked}
// defaultChecked={this.state.checked}