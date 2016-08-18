import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const style={
	display:"inline"
}
const rbstyle={
	display:"flex",
	flexDirection:"row"
}

export default React.createClass({
  handleCheck:function(e){
  	var checked = e.target.checked
  	console.log("Alex", checked)

  },
  render: function () {
    return (
      <div style={{display:"flex", flexDirection:"row", width:55, marginRight:3}}>
	      <Checkbox onTouchTap={this.handleCheck} labelPosition={'left'} value="M" label="M" />
	      <Checkbox onTouchTap ={this.handleCheck} labelPosition={'left'} value="Tu" label="Tu" />
	      <Checkbox labelPosition={'left'} value="We" label="W" />
	      <Checkbox labelPosition={'left'} value="Th" label="Th" />
	      <Checkbox labelPosition={'left'} value="Fr" label="F" />
	      <Checkbox labelPosition={'left'} value="Sa" label="Sa" />
	      <Checkbox labelPosition={'left'} value="Su" label="Su" />

	      <RadioButtonGroup style={rbstyle} name="allornone" defaultSelected="None">
	      	<RadioButton labelPosition={'left'} value="All" label="Every Day" />
	      	<RadioButton labelPosition={'left'} value="None" label="One Time"/>
	      </RadioButtonGroup>



      </div>
    )
  }
})