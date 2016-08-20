import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

//API
import {createChore, assignChore} from 'api/api'

//Own Components
import DateSelector from 'ui/chores/datePicker'
import Frequency from 'ui/chores/frequency'
import Children from 'ui/chores/children'

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
      <div>
      <form onSubmit={this.handleSubmit}>
      	<div><TextField name="name" onChange={this.handleChange} floatingLabelFixed={true} floatingLabelText="Chore Name" hintText="New Chore" /></div>
        <div><TextField name="description" onChange={this.handleChange} floatingLabelFixed={true} floatingLabelText="Chore Description" hintText="Description" multiLine={true} rows={1} rowsMax={3}/> </div>
      	<div><TextField name="value" onChange={this.handleChange} floatingLabelFixed={true} floatingLabelText="Point Value" hintText="Points" type="number" min="1" max="10000" /></div>
      	<DateSelector getMinDate={this.getMinDate} getMaxDate={this.getMaxDate} />
      	<div>Assign Frequency: <Frequency getFrequency={this.getFrequency} /> </div>
      	<Children getChildrenId={this.getChildrenId} />
      	<RaisedButton style={{marginTop:20}} backgroundColor="green" type="submit">Submit </RaisedButton>
      </form>


      </div>
    )
  }
})