import React from 'react';
import FlatButton from 'material-ui/FlatButton'

export default React.createClass({
  render: function () {
    return (
      <div>
      	<h1>PENDING CHORES</h1>
      		<ol>
      			<li>Pending Chore <FlatButton label="Complete" /> <FlatButton label="Incomplete"/></li>
      			<li>Pending Chore <FlatButton label="Complete" /> <FlatButton label="Incomplete"/></li>
      		</ol>
      </div>
    )
  }
})