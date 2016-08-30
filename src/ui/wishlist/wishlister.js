import React from 'react';
import {connect } from 'react-redux'
import {getWishes} from 'api/api'
import WishItem from 'ui/wishlist/wishitem'
import {GridList, GridTile} from 'material-ui/GridList'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
    marginTop:100
  },
};

const Wishlister =  React.createClass({
  componentDidMount:function(){
  	getWishes()
  },
  render: function () {
    return (
    	<div style={styles.root} >
    		<GridList cellHeight={200} style={styles.gridList}>
    			{this.props.wishes.reverse().map(function(wish, i){
    				return <WishItem key={wish.id} id={wish.id} name={wish.name} image={wish.imageUrl} url={wish.url} />
    			})}

        </GridList>

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