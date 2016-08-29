import React from 'react';
import Search from 'ui/wishlist/search'
import ShowWishlist from 'ui/wishlist/showwishlist'



const style={
	display:"flex",
	flexDirection:'row',
	width:"80%",
  margin:"auto"
}
export default React.createClass({
  render: function () {
    return (
      <div style={style}>
      	<Search />
      	



      </div>
    )
  }
})

// <ShowWishlist />