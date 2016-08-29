import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import {deleteChild} from 'api/api'

export default React.createClass({
  getInitialState:function(){
  	return{
  		visible:{display:"none"}
  	}
  },
  askDeleteChild:function(){
    this.setState({visible:{display:"inline-block", marginLeft:20}})
  },
  deleteChild:function(e){
    deleteChild(e)
  },
  render: function () {
    return (
      <li style={{fontSize:24}}><p style={{display:"inline-block",width:"33%"}}>{(this.props.name).toUpperCase()}</p>  <RaisedButton style={{marginLeft:30}} title=":...(" onTouchTap={this.askDeleteChild} label="Remove Child"/> <RaisedButton style={this.state.visible} title=":...(" onTouchTap={(e) => this.deleteChild(this.props.id)} label="Yes"/></li>
    )
  }
})