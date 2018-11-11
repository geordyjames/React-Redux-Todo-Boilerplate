import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions/todo';

class AddOption extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: undefined
		};

		this.handleAddOption = this.handleAddOption.bind(this);
	}

	async handleAddOption(e) {
		e.preventDefault();
		e.persist();
		const option = e.target.elements.option.value.trim();

		if (!option) {
			await Promise.resolve(
				this.setState(() => ({ error: 'Enter valid value to add item' }))
			);
		} else if (this.props.todo.find(todo => todo.name === option)) {
			await Promise.resolve(
				this.setState(() => ({ error: 'This option already exists' }))
			);
		} else {
			await Promise.resolve(this.setState(() => ({ error: null })));
		}

		if (!this.state.error) {
			this.props.handleAddOption(option);
			e.target.elements.option.value = '';
		}
	}

	render() {
		return (
			<form className="uk-margin" onSubmit={this.handleAddOption}>
				<div className="uk-margin" data-uk-margin>
					<input
					className="uk-input uk-form-width-medium"
						type="text"
						name="option"
					/>
					<button className="uk-button uk-button-primary uk-margin-left uk-text-bold">
						<span data-uk-icon="plus"></span> Add Option
					</button>
				</div>
				{this.state.error && (
					<p className="uk-margin uk-text-center uk-text-danger">
						{this.state.error}
					</p>
				)}
			</form>
		);
	}
}

const mapStateToProps = state => ({
	todo: state.todo
});

const mapDispatchToProps = dispatch => ({
	handleAddOption: option => dispatch(add(option))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddOption);