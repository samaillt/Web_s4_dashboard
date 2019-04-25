import { h } from 'hyperapp'
import { Route } from "@hyperapp/router"
import Menu from './Menu'
import Home from './Home'
import Profile from './Profile'

export default (state, actions) => (
	<div class="app">
		<Menu />
		<div class="content">
			<Route path="/" render={Home({getTopGames: actions.getTopGames, setTopGames: actions.setTopGames})} />
			<Route path="/profile" render={Profile} />
		</div>
	</div>
);
