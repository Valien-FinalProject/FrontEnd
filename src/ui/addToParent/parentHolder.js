import React from 'react';
import Reward from 'ui/addToParent/addReward'
import Chores from 'ui/chores/createChore'
import Points from 'ui/addToParent/givepoints'

export default React.createClass({
  render: function () {
    return (
	    	<div style={{display:"flex", flexDirection:"row", width:"100%"}}>
	    		<Chores />
	    		<Reward />
	    	</div>	

    		
    	
      
    )
  }
})