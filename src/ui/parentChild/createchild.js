import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {createChild, getChildren} from 'api/api'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'
import Deleter from 'ui/parentChild/deleter'

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
  		password:""
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
  	this.setState({
      username:"",
      name:"",
      email:"",
      phone:"",
      password:""
    })
  },
  render: function () {
    return (
      <div>
      	<h1 style={h1style}> Username: {localStorage.getItem("parentUN")}</h1>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div style={{width:"50%"}}>
        	<form style={{marginLeft:"5%", width:"75%"}} onSubmit={this.handleSubmit} >
  	   
  	      		<h1> Create Child</h1>
  	      		<TextField value={this.state.username} hintText="Username" hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} name="username" underlineShow={false} />
  	      		<Divider />
    			    <TextField value={this.state.name} hintText="Name" hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} name="name" underlineShow={false} />
    			    <Divider />
    			    <TextField value={this.state.email} hintText="Email" hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} type="email" name="email" underlineShow={false} />
    			    <Divider />
    			    <TextField value={this.state.phone} hintText="Phone 123-234-2345"  hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} name="phone" underlineShow={false} />
    			    <Divider />
    			    <TextField value={this.state.password} hintText="Password" hintStyle={hintStyle} inputStyle={inputStyle} onChange={this.handleChange} name="password" underlineShow={false} />
    			    <Divider />
    			    <RaisedButton style={{marginTop:20}} type="submit" label="Create"/>
  	  		
    		</form>
        </div>

        <div style={{width:"50%"}}>
        <h1> Remove Child </h1>
          <ul>
            {this.props.children.map(function(child){
              return <Deleter key={child.id} id={child.id} name={child.name} />
            })}
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