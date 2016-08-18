import React from 'react';
import {deleteWish} from 'api/api'

export default React.createClass({
  deleteMe: function(){
  	deleteWish(this.props.id)
  },
  render: function () {
    return (
      <div>

      	<li onTouchTap={this.deleteMe}>{this.props.name}</li>

      </div>
    )
  }
})	