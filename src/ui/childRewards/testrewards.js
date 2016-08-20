import React from 'react';

export default React.createClass({
  handleSubmit:function(points){
  	console.log(points)

  },
  render: function () {
    return (
      <div>
	      <ul>
	      	<li>Reward:{this.props.name} Value:{this.props.value} <button type="submit" onTouchTap={(e) => this.handleSubmit(this.props.value)}>Cash In PTS</button> </li>
	      </ul>

      </div>
    )
  }
})	