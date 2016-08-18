import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'


const style={
	width:"48%",
	border:"1px dotted grey"
}
const butStyle={
	button:{
		width:10
	}
}
export default React.createClass({
  render: function () {
    return (
      <div style={style}> 
      	<h1> Your WishList </h1>
      		<ul>
      			<li style={{color:"red"}}> Wish Denied  <RaisedButton label="X" /></li>
      			<li style={{color:"#32cd32"}}> Wish turned into reward <RaisedButton label="X" /></li>
      			<li style={{color:"grey"}}> Wish Pending <RaisedButton style={{width:10}} label="X" /></li>

      		</ul>

      </div>

    )
  }
})