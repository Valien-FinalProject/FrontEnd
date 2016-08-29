import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import {Link } from 'react-router'

export default React.createClass({
  render: function () {
    return (
        <div>
          <div style={{height:200, width:"98%", margin:"auto", border:"3px solid white"}}>
            <h1 style={{fontSize:72, textAlign:"center", letterSpacing:".1em"}}>CHALKBOARD CHORES!</h1>
          </div>
        	
          <div style={{margin:"auto", display:"flex", flexDirection:"row", justifyContent:"space-between", width:"50%"}}>
          	<RaisedButton style={{border:"2px solid black", marginTop:3}} containerElement={<Link to="/register" />} label="Register"/> 
          	<RaisedButton style={{border:"2px solid black", marginTop:3}} containerElement={<Link to="/parentLogin" />} label="Parent Login"/> 
          	<RaisedButton style={{border:"2px solid black", marginTop:3}} containerElement={<Link to="/childLogin" />} label="Child Login"/> 
          </div>
          <div style={{color:"white", textAlign:"center"}}>
          <h2>UN:E  PW:E</h2>
        	<h2> Mission Statement:</h2>
        		<p> Our goal is to minimize the tension and workload of both parents and children by making chores and tasks easier to comprehend, reward and accomplish.</p>
         
          </div>
        </div>
    )
  }
})