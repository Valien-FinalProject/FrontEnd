import React from 'react';
import Chores from 'ui/childChores/individual'
import Pool from 'ui/childChores/pool'

const style={
	display:"flex",
	flexDirection:"row",
	width:"100%"
}

export default React.createClass({
  render: function () {
    return (
    	<div style={style} >
    		<Chores />
    		<Pool />


    	</div>
      
    )
  }
})