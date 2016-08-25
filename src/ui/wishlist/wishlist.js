import React from 'react';
import Search from 'ui/wishlist/search'
import ShowWishlist from 'ui/wishlist/showwishlist'



const style={
	display:"flex",
	flexDirection:'row',
	width:"100%"
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