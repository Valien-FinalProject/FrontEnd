import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

const h1style={
	textAlign:"center"

}

const paperStyle={
	width:300,
	clear:"left",
	margin:50,
	display:"inline-block"
}
const paperStyle2={
	width:300,
	margin:50,
	display:"inline-block",
	float:"right"
}

const style={

}
export default React.createClass({
	//Create a function that allows user to alter img src
  render: function () {
    return (
      <div>
      	<h1 style={h1style}> USERNAME</h1>
      	<img src="http://www.greeninc.nl/wp-content/uploads/2013/02/081129-Stock-Photo-YvZ-IMG_0238.jpg" width="200px" height="200px"/>
      	<Paper zDepth={3} style={paperStyle}>
      		<h1>Update Info</h1>
		    <TextField hintText="Current PW" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="New PW" type="password" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Confirm New" type="password" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Email address" type="email" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Phone" type="tel" style={style} underlineShow={false} />
		    <Divider />
		    <RaisedButton type="submit" label="Update" />

		</Paper>

      </div>
    )
  }
})