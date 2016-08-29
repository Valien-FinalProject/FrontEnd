import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

//API
import {createChore, assignChore} from 'api/api'

//Own Components
import DateSelector from 'ui/chores/datePicker'
import Frequency from 'ui/chores/frequency'
import Children from 'ui/chores/children'

import {lightWhite, fullWhite} from 'material-ui/styles/colors'


const hintStyle ={
  color:lightWhite,
  fontFamily:"Chalky",
  fontSize:24
}

const inputStyle={
  fontSize:24,
  color:fullWhite,
  fontFamily:"Chalky"
}

export default React.createClass({
  getInitialState:function(){
    return{
      description:"",
      endDate:{},
      name:"",
      startDate:{},
      value:"",
      days:{},
      id:{}
    }
  },
  handleChange:function(e){
    var newState = Object.assign({}, this.state)
    newState[e.target.name] = e.target.value
    this.setState(newState)
  },
  handleSubmit:function(e){
    e.preventDefault()
    if(Object.keys(this.state.id).length === 0){
    createChore(this.state.description, this.state.endDate, this.state.name, this.state.startDate, this.state.value)
   }

    for(var key in this.state.id){
    if(Object.keys(this.state.id).length > 0 && this.state.id[key] === true){
      assignChore(key, this.state.description, this.state.endDate, this.state.name, this.state.startDate, this.state.value )
    }
    else if( Object.keys(this.state.id).length >0 && this.state.id[key] === false){
       console.log("No point including this")
       // createChore(this.state.description, this.state.endDate, this.state.name, this.state.startDate, this.state.value)
    }
    else{
      console.log("Hit else statement")
      // createChore(this.state.description, this.state.endDate, this.state.name, this.state.startDate, this.state.value)
    }
   }




  },
  getMinDate: function(date) {
    this.setState({
      startDate:Date.parse(date)
    })
  },
  getMaxDate:function(date){
    
    console.log(Date.parse(date))
    this.setState({
      endDate:Date.parse(date)
    })
  },
  getChildrenId:function(children){
    this.setState({
      id:children
    })
  },
  getFrequency:function(days){
    this.setState({
      days:days
    })
  },
  render: function () {
    
    console.log(Object.keys(this.state.id).length)
    return (
      <div style={{color:"white", fontFamily:"Chalky", width:"50%"}}>
        <h1 style={{marginLeft:20}}> Create Chore</h1>
        <div style={{height:40, width:"100%"}} />
      <form style={{width:"65%", marginLeft:20}} ref="chores" onSubmit={this.handleSubmit}>
      	<div><TextField fullWidth={true} name="name" inputStyle={inputStyle} hintStyle={hintStyle} onChange={this.handleChange}  hintText="New Chore" /></div>
        <div style={{height:30, width:"100%"}} />
        <div><TextField fullWidth={true} name="description" inputStyle={inputStyle} hintStyle={hintStyle} onChange={this.handleChange}  hintText="Description" /> </div>
        <div style={{height:30, width:"100%"}} />
      	<div><TextField fullWidth={true} name="value" inputStyle={inputStyle} hintStyle={hintStyle} onChange={this.handleChange}  hintText="Points" type="number" min="1" max="10000" /></div>
        <div style={{height:30, width:"100%"}} />
      	<DateSelector getMinDate={this.getMinDate} getMaxDate={this.getMaxDate} />
      	<Children getChildrenId={this.getChildrenId} />
      	<RaisedButton style={{marginTop:20}} type="submit">Submit </RaisedButton>
      </form>


      </div>
    )
  }
})



// <div>Assign Frequency: <div style={{height:10, width:"100%"}} /> <Frequency getFrequency={this.getFrequency} /> </div>