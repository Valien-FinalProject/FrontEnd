import React from 'react';


const style={
	width:"70%",
	border:"1px solid black"
}
export default React.createClass({
  render: function () {
    return (
      <div style={style}>
      	<h1>Chores available</h1>
      		<ul>
      			<li>Chore <button>confirm complete</button></li>
      		</ul>

      </div>
    )
  }
})