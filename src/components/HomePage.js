import React from 'react';
import { connect } from 'react-redux';

export const HomePage = ({ name }) => (
	<div>
		<h1>
			{name}
			's React Redux Todo App
		</h1>
	</div>
);

const mapStateToProps = (state, props) => ({
	name: state.auth.name
});

export default connect(mapStateToProps)(HomePage);
