import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {createChild, getChildren, deleteChild} from 'api/api'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'

const h1style={
	textAlign:"center"

}

const inputStyle={
  color:fullWhite,
  fontSize:24,
  fontFamily:"Chalky"
}


const hintStyle={
  color:lightWhite,
  fontSize:24,
  fontFamily:"Chalky"
}



const ChildCreator = React.createClass({
  getInitialState:function(){
  	return{
  		username:"",
  		name:"",
  		email:"",
  		phone:"",
  		password:"",
      visible:{display:"none"}
  	}
  },
  componentWillMount(){
    getChildren()
  },
  handleChange:function(e){
  	var newState = Object.assign({}, this.state)
  	newState[e.target.name] = e.target.value;
  	this.setState(newState)
  },
  handleSubmit:function(e){
  	e.preventDefault();
  	createChild(this.state.phone, this.state.email, this.state.name, this.state.password, this.state.username)
  	this.setState({username:"",name:"",email:"",phone:"",password:""})
  },
  askDeleteChild:function(){
    this.setState({visible:{display:"inline-block", marginLeft:20}})
  },
  deleteChild:function(e){
    deleteChild(e)
  },
  render: function () {
    return (
      <div>
      	<h1 style={h1style}> Username: {localStorage.getItem("parentUN")}</h1>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div style={{width:"50%"}}>
        	<form style={{marginLeft:"5%", width:"75%"}} onSubmit={this.handleSubmit} >
  	   
  	      		<h1> Create Child</h1>
  	      		<TextField hintText="Username" hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} name="username" underlineShow={false} />
  	      		<Divider />
    			    <TextField hintText="Name" hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} name="name" underlineShow={false} />
    			    <Divider />
    			    <TextField hintText="Email" hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} type="email" name="email" underlineShow={false} />
    			    <Divider />
    			    <TextField hintText="Phone 123-234-2345"  hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} name="phone" underlineShow={false} />
    			    <Divider />
    			    <TextField hintText="Password" hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} name="password" underlineShow={false} />
    			    <Divider />
    			    <RaisedButton style={{marginTop:20}} type="submit" label="Create"/>
  	  		
    		</form>
        </div>
        <div style={{width:"50%"}}>
          <ul>
            {this.props.children.map(function(child){
              return <li key={child.id} style={{width:"30%", fontSize:24}}>{(child.name).toUpperCase()}  <RaisedButton style={{marginLeft:30}} title=":...(" onTouchTap={this.askDeleteChild} label="Remove Child"/> <RaisedButton style={this.state.visible} title=":...(" onTouchTap={(e) => this.deleteChild(child.id)} label="Yes"/></li>
            }.bind(this))}
          </ul>
        </div>
      </div>

    </div>
    )
  }
})
  
const stateToProps = function(state){
  console.log(state.parentReducer)
  return{
    children:state.parentReducer.children
  } 
}  

export default connect(stateToProps)(ChildCreator)