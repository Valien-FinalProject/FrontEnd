import React from 'react';
import {Link} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {yellow600} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'
import {browserHistory} from 'react-router'

import {logout, cookieGetter} from 'api/api'

require('font-awesome/css/font-awesome.min.css');

const holderStyle = {
  display:"inline-block",
  width:"100%",
  height:200,
  marginTop:20,
  paddingBottom:20
}


const iconStyle={
  color:"black"
}


export default React.createClass({
  pushToWish:function(){
    browserHistory.push('/wishlist')
  },
  pushToLanding:function(){
    browserHistory.push('/childLanding')
  },
  pushtoRewards:function(){
    browserHistory.push('/childRewards')
  },
  pushToLogout:function(){
    logout()
  },
  render: function () {
    return (
        <div style={holderStyle}>
          <div style={{margin:"auto", width:"50%", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <FloatingActionButton onTouchTap={this.pushToLanding} backgroundColor="white" iconStyle={iconStyle}>
              <FontIcon
                className="fa fa-list"
                />
            </FloatingActionButton>
            <FloatingActionButton onTouchTap={this.pushtoRewards} backgroundColor="white" iconStyle={iconStyle}>
                <FontIcon
                  className="fa fa-trophy"

                  />
            </FloatingActionButton>
            <FloatingActionButton onTouchTap={this.pushToWish} backgroundColor="white" iconStyle={iconStyle}>
              <FontIcon
                className="fa fa-cloud"
                />
            </FloatingActionButton>
            <FloatingActionButton onTouchTap={this.pushToLogout} backgroundColor="white" iconStyle={iconStyle}>
              <FontIcon
                className="fa fa-sign-out"
                />
            </FloatingActionButton>

          </div>
          {this.props.children}
        </div>
    )
  }
})
