import React, { Component } from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

export default class WebRouter extends Component {
	render() {
		return (
			<Router>
			<div>
			  <Switch>
				<Route path="/about">
					about
				</Route>
				<Route path="/users">
				  users
				</Route>
				<Route path="/">
				  home
				</Route>
			  </Switch>
			</div>
		  </Router>
		)
	}
}
