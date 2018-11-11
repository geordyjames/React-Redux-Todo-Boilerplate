import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div
		className="uk-flex uk-flex-center uk-flex-middle"
		style={{ height: '100vh' }}
	>
		404 -{' '}
		<Link className="uk-button uk-button-default" to="/">
			Go home
		</Link>
	</div>
);

export default NotFoundPage;
