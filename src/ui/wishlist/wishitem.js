import React from 'react';
import {deleteWish, getWishes} from 'api/api'


export default React.createClass({
  deleteMe:function(){
  	console.log(this.props.id)
  	deleteWish(this.props.id)

  },
  render: function () {
    return (
      <div style={{height:200}}>
      
      		<li id={this.props.id}><a href={this.props.url}>{this.props.name} <img src={this.props.image} style={{float:"right", display:"inline-block", width:180, height:180}}/></a></li>
      


      </div>
    )
  }
})