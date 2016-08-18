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

import {logout, cookieGetter} from 'api/api'



export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value});
  logoutChild(){
    logout()

  };
  checkCookie(){
    cookieGetter()
  };

  render() {
    return (
      <div>
      <Toolbar style={{marginBottom:10}}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} containerElement={<Link to="/childLanding" />}  primaryText="Home"/>
            <MenuItem value={2} containerElement={<Link to="/childProgress" />} primaryText="View Progress" />
            <MenuItem value={3} containerElement={<Link to="/ChildRewards" />} primaryText="View Rewards" />
            <MenuItem value={4} containerElement={<Link to="/ChildChores" />} primaryText="View Chores" />
            <MenuItem value={5} containerElement={<Link to="/wishlist" />} primaryText="WishList" />
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
            <MenuItem onTouchTap={this.checkCookie} primaryText="Cookie Checker" />
            <MenuItem onTouchTap={this.logoutChild} primaryText="Logout" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
        {this.props.children}
      </div>
    );
  }
}
