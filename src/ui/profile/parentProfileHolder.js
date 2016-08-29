import React from 'react';
import Profile from 'ui/profile/profile'
import ChildChange from 'ui/profile/parentChild'

export default React.createClass({
  render: function () {
    return (
      <div>
      	<h1 style={{textAlign:"center"}}> USERNAME: {localStorage.getItem("parentUN")}</h1>
      	<div style={{display:"flex", flexDirection:"row", width:"100%"}} >
	      	<Profile />
	      	<ChildChange />
      	</div>

      </div>
    )
  }
})