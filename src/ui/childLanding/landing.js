import React from 'react';
import Current from 'ui/landing/current'
import Pending from 'ui/childLanding/childPending'
import Complete from 'ui/landing/complete'

const style={
  backgroundColor:"#EEEEE0"
}
export default React.createClass({
  render: function () {
    return (
      <div id="landingPage">
      	<div style={style} className="landingBox">
      		<Current />
      	</div>
      	<div style={style}className="landingBox">
      		<Pending />
      	</div>
      	<div style={style}className="landingBox">
      		<Complete />
      	</div>

      </div>
    )
  }
})