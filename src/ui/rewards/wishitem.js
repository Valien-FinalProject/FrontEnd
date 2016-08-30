import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {wishGranted, deleteWishParent } from 'api/api'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'

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
  handleDeny:function(e){
    deleteWishParent(this.props.val, e)

  },
  render: function () {
    return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <div style={{width:"90%", margin:"auto", marginTop:15}}>

      		<li><p style={{display:"inline-block",marginRight:50, fontSize:24}}>Wish: {this.props.name}</p><a href={this.props.url}><img style={{marginTop:5}} src={this.props.image}/></a></li>
      </div>
      <div style={{display:"inline-block"}}>
		  <TextField type="number" name="points" hintStyle={{color:fullWhite, fontSize:20, fontFamily:"Chalky"}} inputStyle={{color:fullWhite, fontSize:20, fontFamily:"Chalky"}} onChange={this.handleChange} hintText="Assign Points" />
    
          <RaisedButton style={{border:"1px solid white", marginRight:5}}labelStyle={{color:"green"}} onTouchTap={(e) => this.handleAssign(this.props.id)} type="submit" name="approve" label="approve"/>
          <RaisedButton style={{border:"1px solid white"}} labelStyle={{color:"red"}} onTouchTap={(e) => this.handleDeny(this.props.id)} className="deny" type="submit" name="deny" label="deny" />
      </div>
    </div>
    )
  }
})		