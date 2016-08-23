import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import store from 'store'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var style = require('assets/styles/style.scss')
var calStyle = require('../node_modules/react-big-calendar/lib/css/react-big-calendar.scss')

// Layout
import ParentLayout from 'layout/parentlayout';
import LoginLayout from 'layout/topLogoLayout'
import ChildLayout from 'layout/childLayout'
 
// Parent UI

import Landing from 'ui/landing/landing';
import Profile from 'ui/profile/profile'
import Chore from 'ui/chores/createChore'
import Progress from 'ui/parentProgress/progress'
import Calendar from 'ui/calendar'
import Reward from 'ui/rewards/addReward'
import ViewReward from 'ui/rewards/viewRewards'
import Home from 'ui/home'
import CreateChild from 'ui/createchild'



//Login/Register pages
import ParentLogin from 'ui/login/parentLogin'
import ChildLogin from 'ui/login/childLogin'
import Register from 'ui/login/signup'



//Child UI
import CLanding from 'ui/childLanding/landing'
import CProgress from 'ui/childProgress/childProgress'
import CReward from 'ui/childRewards/childRewards'
import CChores from 'ui/childChores/childChores'
import Wishlist from 'ui/wishlist/wishlist'
import CProfile from 'ui/profile/childProfile'

const Site = (
  <MuiThemeProvider>
  	<Provider store={store}>
	    <Router history={browserHistory}>
	    	<Route path="/" component={Home} />
	    	<Route component={LoginLayout}>
	    	<Route component={ChildLayout} >
			    <Route path="/childLanding" component={CLanding} />
			    <Route path="/childProgress" component={CProgress} />
			    <Route path="/childRewards" component={CReward} />
			    <Route path="/childChores" component={CChores} />
			    <Route path="/wishlist" component={Wishlist} />
			    <Route path="/childProfile" component={CProfile}/>
			</Route>
		     <Route path="/childLogin" component={ChildLogin} />
		     <Route path="/register" component={Register} />
		     <Route path="/parentLogin" component={ParentLogin} />
		      <Route component={ParentLayout}>
		      	<Route path="/calendar" component={Calendar} />
		        <Route path="/landing" component={Landing} />
		        <Route path="/settings" component={Profile} />
		        <Route path="/createChore" component={Chore}/>
		        <Route path="/progress" component={Progress} />
		        <Route path="/createReward" component={Reward} />
		        <Route path="/viewRewards" component={ViewReward} />
		        <Route path="/createChild" component={CreateChild} />
		      </Route>
		    </Route>
	    </Router>
	</Provider>
 </MuiThemeProvider>
);

render(Site, document.getElementById('app'));