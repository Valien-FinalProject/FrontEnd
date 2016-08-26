import React from 'react';
import {Link} from 'react-router'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import {logout} from 'api/api'
import {browserHistory} from 'react-router'

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 7,
    };
  }

  handleChange = (event, index, value) => this.setState({value});
  logoutParent() {
    logout()
    // browserHistory.push("/")
  };
  render() {
    return (
      <div className="parentBG" style={{width:"100%", height:"100%"}}>
      <Toolbar style={{marginBottom:10}}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem containerElement={<Link to="/calendar" />} value={1} primaryText="View Calendar"/>
            <MenuItem value={2} containerElement={<Link to="/progress" />} primaryText="View Progress" />
            <MenuItem value={3} containerElement={<Link to="/viewRewards" />} primaryText="View Rewards" />
            <MenuItem value={4} containerElement={<Link to="/createChore" />} primaryText="Add Chore" />
            <MenuItem value={5} containerElement={<Link to="/createReward" />} primaryText="Add Reward" />
            <MenuItem value={6} containerElement={<Link to="/createChild"/>} primaryText="Add Child" />
            <MenuItem value={7} containerElement={<Link to="/landing" />} primaryText="Home" />

          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem containerElement={<Link to="/settings" />} primaryText="Settings" />
            <MenuItem onTouchTap={this.logoutParent} primaryText="Logout" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
        {this.props.children}
      </div>
    );
  }
}
