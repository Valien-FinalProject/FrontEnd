import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Wishlister from 'ui/wishlist/wishlister'
import {makeAWish, getWishes} from 'api/api'
import {darkWhite, white, blueA700, lightWhite, fullWhite} from 'material-ui/styles/colors.js'

const style={
  fontFamily:"Chalky",
  color:darkWhite,
  fontSize:48,
  textAlign:"center"
}

const styles={
 style:{
  	width:"100%"
  },
  errorStyle:{
    color: lightWhite,
    fontSize:24,
    fontFamily:"Chalky"
  }

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
    	<div style={styles.style}>
    		<h1 style={style}> Add An Item To Your Wishlist!</h1>
            <form onSubmit={this.handleSubmit}>
    		  <TextField inputStyle={{color:fullWhite, fontSize:24, fontFamily:"Chalky"}} hintStyle={styles.errorStyle} fullWidth={true} onChange={this.handleChange} ref="wishes" name="wish" hintText="Add Wish" />
              <RaisedButton style={{marginLeft:"48%", textAlign:"center"}} label="Make A Wish" type="submit" />
            </form>
    		<Wishlister />



    	</div>
      
    )
  }
})