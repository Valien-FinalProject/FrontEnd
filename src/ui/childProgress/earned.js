import React from 'react';



const style = {
	width:"32%",
	border:"1px solid black",
	overflow:"scroll",
	height:350
}

export default React.createClass({
  render: function () {
    return (
      <div style={style}>
      	<h2>Points Earned!  :)</h2>
      	<ul><li>You earned ____ point(s) for _____!</li></ul>

      </div>
    )
  }
})