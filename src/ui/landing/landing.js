import React from 'react';
import Current from 'ui/landing/current'
import Pending from 'ui/landing/pending'
import Complete from 'ui/landing/complete'
import {cookieGetter} from 'api/api'

const style={
  backgroundColor:"#EEEEE0"
}
export default React.createClass({
  handleClick:function(){
    cookieGetter()
  },
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
        <button onClick={this.handleClick}> Cookie Test</button>

      </div>
    )
  }
})