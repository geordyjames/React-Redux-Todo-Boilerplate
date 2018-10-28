import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { LoginPage, HomePage, NotFoundPage } from './LazyLoading';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/home" component={HomePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
