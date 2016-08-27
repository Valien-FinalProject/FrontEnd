import React from 'react';
import {Link} from 'react-router'
import {logout} from 'api/api'
import {browserHistory} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon'

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
    browserHistory.push('/creator')
  },
  pushToLanding:function(){
    browserHistory.push('/landing')
  },
  pushtoRewards:function(){
    browserHistory.push('/viewRewards')
  },
  pushToSettings:function(){
    browserHistory.push('/settings')
  },
  pushToChild:function(){
    browserHistory.push('/childSettings')
  },
  pushToProgress:function(){
    browserHistory.push('/progress')
  },
  pushToLogout:function(){
    logout()
  },
  render: function () {
    return (
        <div style={holderStyle}>
          <div style={{margin:"auto", width:"50%", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <FloatingActionButton title="View Chores" onTouchTap={this.pushToLanding} backgroundColor="white" iconStyle={iconStyle}>
              <FontIcon
                className="fa fa-list"
                />
            </FloatingActionButton>
            <FloatingActionButton title="View Rewards" onTouchTap={this.pushtoRewards} backgroundColor="white" iconStyle={iconStyle}>
                <FontIcon
                  className="fa fa-trophy"

                  />
            </FloatingActionButton>
            <FloatingActionButton title="View Progress" onTouchTap={this.pushToProgress} backgroundColor="white" iconStyle={iconStyle}>
              <FontIcon
                className="fa fa-bar-chart"
                />
            </FloatingActionButton>
            <FloatingActionButton title="Create Reward/Chore" onTouchTap={this.pushToWish} backgroundColor="white" iconStyle={iconStyle}>
              <FontIcon
                className="fa fa-plus"
                />
            </FloatingActionButton>
            <FloatingActionButton title="Manage Children" onTouchTap={this.pushToChild} backgroundColor="white" iconStyle={iconStyle}>
              <FontIcon
                className="fa fa-child"
                />
            </FloatingActionButton>
            <FloatingActionButton title="Manage Settings" onTouchTap={this.pushToSettings} backgroundColor="white" iconStyle={iconStyle}>
              <FontIcon
                className="fa fa-cog"
                />
            </FloatingActionButton>
            
            <FloatingActionButton title="Logout" onTouchTap={this.pushToLogout} backgroundColor="white" iconStyle={iconStyle}>
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