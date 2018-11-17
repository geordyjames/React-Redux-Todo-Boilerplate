import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import InputError from './InputError';
import logo from '../images/logo.png';

export class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		};

		this.startLogin = this.startLogin.bind(this);
	}

	startLogin(e) {
		e.preventDefault();
		const name = e.target.elements.name.value.trim();

		if (!name) {
			this.setState(() => ({ error: 'Enter your name to login' }));
		} else {
			this.setState(() => ({ error: null }));
			this.props.startLogin(name);
		}
	}

	render() {
		return (
			<div className="uk-flex uk-flex-center uk-flex-middle full-height">
				<div className="uk-text-center">
					<img src={logo} alt="Logo" />
					<h1 className="uk-heading-hero">React Redux Todo Boilerplate</h1>
					<form className="uk-padding" onSubmit={this.startLogin}>
						<input
							className="uk-input uk-form-width-medium"
							type="text"
							name="name"
							placeholder="Enter your name"
						/>
						<button className="uk-button uk-button-primary uk-margin-left uk-text-bold">
							<span data-uk-icon="sign-in" /> Login
						</button>
						{this.state.error && <InputError error={this.state.error} />}
					</form>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	startLogin: name => dispatch(startLogin(name))
});

export default connect(
	undefined,
	mapDispatchToProps
)(LoginPage);
