import React from 'react';
import {deleteWish, getWishes} from 'api/api'
import {fullWhite} from 'material-ui/styles/colors'


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
      
      		<li style={liStyle} id={this.props.id}><a style={aStyle} href={this.props.url}><p style={{display:"inline-block", marginTop:151, marginBottom:0}}>{this.props.name}</p> <img src={this.props.image} style={{float:"right", display:"inline-block", width:180, height:180}}/></a></li>
      


    )
  }
})