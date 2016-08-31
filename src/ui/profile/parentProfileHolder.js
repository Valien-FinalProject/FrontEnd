import React from 'react';
import Profile from 'ui/profile/profile'
import ChildChange from 'ui/profile/parentChild'
import {getParent, getParentEmail, getParentPhone} from 'api/api'

export default React.createClass({
  componentWillMount:function(){
    getParent(localStorage.getItem("parentId"))
    getParentEmail()
    getParentPhone()
    
  },
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