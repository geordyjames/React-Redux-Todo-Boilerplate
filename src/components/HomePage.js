import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../actions/todo';
import AddOption from './AddOption';
import Options from './Options';

export const HomePage = props => (
	<div className="uk-container">
		<h1 className="uk-heading-primary uk-text-center uk-padding ">
			{props.name}'s Todo List
		</h1>
		<div className="uk-text-center">
			<AddOption />
		</div>
		<div className="uk-flex uk-flex-center">
			<Options
				options={props.todo}
				handleDeleteOption={props.handleDeleteOption}
			/>
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
