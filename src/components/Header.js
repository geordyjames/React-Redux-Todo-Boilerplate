import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import logo from '../images/logo.png';


export const Header = ({ startLogout }) => (
	<nav className="uk-navbar-container uk-navbar-transparent header" data-uk-navbar>
		<div className="uk-navbar-left  uk-logo">
			<Link
        className="uk-navbar-item uk-logo uk-text-bold header__logo"
				to="/"
			>
				<img src={logo} alt="Logo" />
				React Redux Todo Boilerplate
			</Link>
		</div>
		<div className="uk-navbar-right">
			<div className="uk-navbar-item">
				<button className="uk-button uk-button-default" onClick={startLogout}>
          <span data-uk-icon="sign-out"></span> Logout
				</button>
			</div>
		</div>
	</nav>
);

const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(
	undefined,
	mapDispatchToProps
)(Header);
