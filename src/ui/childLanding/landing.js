import React from 'react';
import Current from 'ui/childLanding/childCurrent'
import Pending from 'ui/childLanding/childPending'
import Complete from 'ui/childLanding/childComplete'
import Cookie from 'js-cookie'


const div3 ={
  backgroundColor:"rgba(0,145,0,.5)",
  overflow:"scroll"
}

const div2 ={
  backgroundColor:"rgba(255,255,0,.5)",
  overflow:"scroll"
}

export default React.createClass({
  render: function () {
    console.log(Cookie.get())
    return (
      <div id="landingPage">
      	<div style={{marginTop:20}} className="landingBox">
      		<Current />
      	</div>

      </div>
    )
  }
})

// <div style={div2} className="landingBox">
//           <Pending />
//         </div>
//         <div style={div3} className="landingBox">
//           <Complete />
//         </div>