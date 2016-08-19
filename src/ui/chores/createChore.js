import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

//API
import {createChore} from 'api/api'

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
      value:""
    }
  },
  handleChange:function(e){
    var newState = Object.assign({}, this.state)
    newState[e.target.name] = e.target.value
    this.setState(newState)
  },
  handleSubmit:function(e){
    console.log("test")
    e.preventDefault()
    createChore(this.state.description, this.state.endDate, this.state.name, this.state.startDate, this.state.value)
    this.setState({value:""})
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
  render: function () {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      	<div><TextField name="name" onChange={this.handleChange} floatingLabelFixed={true} floatingLabelText="Chore Name" hintText="New Chore" /></div>
        <div><TextField name="description" onChange={this.handleChange} floatingLabelFixed={true} floatingLabelText="Chore Description" hintText="Description" multiLine={true} rows={1} rowsMax={3}/> </div>
      	<div><TextField name="value" onChange={this.handleChange} floatingLabelFixed={true} floatingLabelText="Point Value" hintText="Points" type="number" min="1" max="10000" /></div>
      	<DateSelector getMinDate={this.getMinDate} getMaxDate={this.getMaxDate} />
      	<div>Assign Frequency: <Frequency /> </div>
      	<Children />
      	<RaisedButton style={{marginTop:20}} backgroundColor="green" type="submit">Submit </RaisedButton>
      </form>


      </div>
    )
  }
})