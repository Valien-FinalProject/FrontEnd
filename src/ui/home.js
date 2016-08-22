import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import {Link } from 'react-router'

export default React.createClass({
  render: function () {
    return (
      <div id="homeContainer">
        <div style={{height:200}} id="homeTopPart">  <h1 style={{textAlign:"center", margin:"auto",backgroundColor:"red", color:"white", width:"75%"}}> Welcome to Valien</h1> </div>
        	<div style={{height:1000, width:"75%", backgroundColor:"red", margin:"auto"}}>
          <div style={{margin:"auto", display:"flex", flexDirection:"row", justifyContent:"space-between", width:"50%"}}>
          	<RaisedButton containerElement={<Link to="/register" />} label="Only Parents can register"/> 
          	<RaisedButton containerElement={<Link to="/parentLogin" />} label="Parent Login"/> 
          	<RaisedButton containerElement={<Link to="/childLogin" />} label="Child Login"/> 
          </div>
          <div style={{color:"white", textAlign:"center"}}>
          <h2>UN:E  PW:E</h2>
        	<h2> Mission Statement:</h2>
        		<p> Our goal is to minimize the tension and workload of both parents and children by making chores and tasks easier to comprehend, reward and accomplish.</p>
          </div>
          </div>
      </div>
    )
  }
})