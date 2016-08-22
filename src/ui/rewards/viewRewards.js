import React from 'react';
import CurrentRewards from 'ui/rewards/currentrewards'
import Wishlist from 'ui/rewards/wishlist'



const style={
  display:"flex",
  flexDirection:"row",
  width:"100%"
}
export default React.createClass({
  getInitialState:function(){
    return{
      value:""
    }
  },
  handleChange:function(e){
     var newState = Object.assign({},this.state);

      newState[e.target.name] = e.target.value;

      this.setState(newState);
  },
  render: function () {
    return (
      <div style={style}>
        
        <CurrentRewards />
        <Wishlist />
      </div>
    )
  }
})