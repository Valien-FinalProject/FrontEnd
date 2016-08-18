import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Wishlister from 'ui/wishlist/wishlister'
import {makeAWish, getWishes} from 'api/api'



const style={
	width:"50%",
	border:"3px solid green"

}
export default React.createClass({
  getInitialState:function(){
    return{
        wish:""
    }
  },
  handleChange:function(e){
    var newState = Object.assign({}, this.state)
    newState[e.target.name] = e.target.value
    this.setState(newState)
  },
  handleSubmit:function(e){
    e.preventDefault()
    makeAWish(this.state.wish)

    

  },
  render: function () {
    console.log("wishstate", this.state.wish)
    return (
    	<div style={style}>
    		<h1> Add Wish</h1>
            <form onSubmit={this.handleSubmit}>
    		  <TextField onChange={this.handleChange} name="wish" hintText="Add Wish" />
              <RaisedButton label="Make A Wish" type="submit" />
            </form>
    		<Wishlister />



    	</div>
      
    )
  }
})