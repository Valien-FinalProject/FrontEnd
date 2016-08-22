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
      	<h2>Rewards Cashed In!</h2>
      	<ul><li>You were spent ____ point on a _____!</li></ul>
    

      </div>
    )
  }
})