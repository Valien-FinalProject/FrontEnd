import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import {Link } from 'react-router'

export default React.createClass({
  render: function () {
    return (
      <div id="homeContainer">
        <div id="homeTopPart">  <h1> Welcome to Valien</h1> </div>
        	
        	<RaisedButton containerElement={<Link to="/register" />} label="Only Parents can register"/> 
        	<RaisedButton containerElement={<Link to="/parentLogin" />} label="Parent Login"/> 
        	<RaisedButton containerElement={<Link to="/childLogin" />} label="Child Login"/> 
          <h2>UN:E  PW:E</h2>
        	<h2> Mission Statement:</h2>
        		<p> Our goal is to minimize the tension and workload of both parents and children by making chores and tasks easier to comprehend, reward and accomplish.</p>
      </div>
    )
  }
})