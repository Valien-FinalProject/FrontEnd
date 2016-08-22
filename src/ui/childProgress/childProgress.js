import React from 'react';
import Earned from 'ui/childProgress/earned.js'
import Deducted from 'ui/childProgress/deducted'
import Rewards from 'ui/childProgress/rewards'

export default React.createClass({
  render: function () {
    return (
      <div>
      	<h1 style={{textAlign:"center"}}> {localStorage.getItem("childUN")}'s Progress! </h1>
      	<div style={{display:"flex", direction:"row", justifyContent:"space-between", width:"100%"}}>
          <Earned />
          <Deducted />
          <Rewards />
        </div>
      </div>
    )
  }
})