import React from 'react';
import {connect } from 'react-redux'
import {getWishes} from 'api/api'
import WishItem from 'ui/wishlist/wishitem'

const Wishlister =  React.createClass({
  componentDidMount:function(){
  	getWishes()
  },
  render: function () {
    return (
    	<div>
    		<ul>
    			{this.props.wishes.map(function(wish, i){
    				return <WishItem key={wish.id} id={wish.id} name={wish.description} />
    			})}


    		</ul>
    	</div>
      
    )
  }
})

const stateToProps = function(state){
	return{
		wishes:state.childReducer.wishes
	}
}


export default connect(stateToProps)(Wishlister)