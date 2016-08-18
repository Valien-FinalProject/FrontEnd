import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'



//Own Components
import DateSelector from 'ui/chores/datePicker'
import Frequency from 'ui/chores/frequency'
import Children from 'ui/chores/children'

export default React.createClass({
  render: function () {
    return (
      <div>
      <form>
      	<div>Chore Name: <TextField hintText="New Chore" /></div>
        <div>Chore Description: <TextField hintText="Description" multiLine={true} rows={1} rowsMax={3}/> </div>
      	<div>Assign Points: <TextField hintText="Points" type="number" min="1" max="10000" /></div>
      	<DateSelector />
      	<div>Assign Frequency: <Frequency /> </div>
      	<Children />
      	<RaisedButton type="submit">Submit </RaisedButton>
      </form>


      </div>
    )
  }
})