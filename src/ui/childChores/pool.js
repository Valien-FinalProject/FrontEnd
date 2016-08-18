import React from 'react';


const style= {
	width:"25%",
	border:"1px solid black",
	marginLeft:"5%"
}
export default React.createClass({
  render: function () {
    return (
      <div style={style}>
      	<h1> Pick a chore from the Pool </h1>
      		<ul>
      			<li> Pool task <button>Accept Chore</button></li>

      		</ul>


      </div>
    )
  }
})	