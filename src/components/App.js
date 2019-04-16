import { h } from 'hyperapp'
import { Route } from "@hyperapp/router"
import Menu from './Menu'
import Home from './Home'
import Profile from './Profile'

export default (state, actions) => (
  <div class="app">
    <Menu />
    <Route path="/" render={Home} />
    <Route path="/profile" render={Profile} />
  </div>
);
