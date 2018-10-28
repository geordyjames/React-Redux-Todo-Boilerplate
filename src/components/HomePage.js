import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../actions/todo';

import AddOption from './AddOption';
import Options from './Options';

export const HomePage = props => (
	<div>
		<h1>
			{props.name}
			's React Redux Todo App
		</h1>
		<div className="widget">
			<Options
				options={props.todo}
				handleDeleteOption={props.handleDeleteOption}
			/>
			<AddOption />
		</div>
	</div>
);

const mapStateToProps = state => ({
	name: state.auth.name,
	todo: state.todo
});

const mapDispatchToProps = dispatch => ({
	handleDeleteOption: id => dispatch(remove(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
