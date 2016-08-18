import React from 'react';
import {deleteWish, getWishes} from 'api/api'


export default React.createClass({
  deleteMe:function(){
  	console.log(this.props.id)
  	deleteWish(this.props.id)

  },
  render: function () {
    return (
      <div>
      	<ul>
      		<li id={this.props.id}>{this.props.name} <button onClick={this.deleteMe}>Delete</button></li>
      	</ul>


      </div>
    )
  }
})