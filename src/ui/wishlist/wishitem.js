import React from 'react';
import {deleteWish, getWishes} from 'api/api'
import {fullWhite} from 'material-ui/styles/colors'
import {GridTile} from 'material-ui/GridList'


const aStyle={
  textDecoration:"none",
  color:fullWhite,
  fontSize:24,
  fontFamily:"Chalky",
  marginTop:90
}

const liStyle={
  border:"2px solid white",
  boxSizing:'border-box',
  width:"75%",
  margin:"auto",
  marginTop:5
}
export default React.createClass({
  deleteMe:function(){
  	console.log(this.props.id)
  	deleteWish(this.props.id)

  },
  render: function () {
    return (
      		<GridTile id={this.props.id} containerElement={<a href={this.props.url} />} title={this.props.name}> 
            <img src={this.props.image} />
          </GridTile>
        

    )
  }
})