import { h } from 'hyperapp'
import { Route } from "@hyperapp/router"
import Menu from './Menu'
import Home from './Home'
import Profile from './Profile'

export default (state, actions) => (
	<div class="app">
		<Menu location={state.location} />
		<div class="content container">
			<Route path="/" render={Home({actions: actions})} />
			<Route path="/profile" render={Profile({actions:actions})} />
		</div>
	</div>
);
