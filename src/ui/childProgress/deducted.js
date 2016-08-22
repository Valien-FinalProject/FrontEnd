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
      	<h2>Points Lost :/!</h2>
      	<ul><li>You lost  ____ points for _____!</li></ul>

      </div>
    )
  }
})