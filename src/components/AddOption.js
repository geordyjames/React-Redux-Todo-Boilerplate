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
		} else if (this.props.todo.find((todo) => todo.name === option)) {
			await Promise.resolve(
				this.setState(() => ({ error: 'This option already exists' }))
			);
		} else {
      await Promise.resolve(
				this.setState(() => ({ error: null }))
			);
    }

		if (!this.state.error) {
			this.props.handleAddOption(option);
			e.target.elements.option.value = '';
		}
	}

	render() {
		return (
			<div>
				{this.state.error && (
					<p className="add-option-error">{this.state.error}</p>
				)}
				<form className="add-option" onSubmit={this.handleAddOption}>
					<input className="add-option__input" type="text" name="option" />
					<button className="button">Add Option</button>
				</form>
			</div>
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
