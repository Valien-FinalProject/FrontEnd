import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {wishGranted} from 'api/api'

export default React.createClass({ 
  getInitialState:function(){
  	return{
  		value:0
  	}
  },
  handleChange:function(e){
  	var value = e.target.value
  	this.setState({value})
  },
  handleAssign:function(e){
  	wishGranted(this.props.val, e, this.state.value)
  },
  handleDeny:function(){

  },
  render: function () {
    return (
      <div>

      		<li>{this.props.name}<a href={this.props.url}><img src={this.props.image}/></a></li>

		  <TextField type="number" name="points" onChange={this.handleChange} hintText="Assign Points" />
          <RaisedButton onTouchTap={(e) => this.handleAssign(this.props.id)} type="submit" backgroundColor="rgba(0,128,0,.4)" name="approve" label="approve"/>
          <RaisedButton onTouchTap={this.handleDeny} className="deny" type="submit" backgroundColor="rgba(255,0,0,.4)" name="deny" label="deny" />


      </div>
    )
  }
})		