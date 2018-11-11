import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div
		className="uk-flex uk-flex-center uk-flex-middle"
		style={{ height: '100vh' }}
	>
		<div className="uk-text-center">
			<h1 className="uk-heading-hero">React Redux Todo Boilerplate</h1>
			<button className="uk-button uk-button-primary uk-text-bold" onClick={startLogin}>
        <span data-uk-icon="sign-in"></span> Login
			</button>
		</div>
	</div>
);

const mapDispatchToProps = dispatch => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(
	undefined,
	mapDispatchToProps
)(LoginPage);
