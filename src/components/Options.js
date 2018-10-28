import React from 'react';
import Option from './Option';

const Options = props => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Your Options</h3>
		</div>

		{props.options.length === 0 && (
			<p className="widget__message">Please add an option to get started!</p>
		)}
		{props.options.map((option, index) => (
			<Option
        key={option.id}
        id={option.id}
        optionText={option.name}
				count={index + 1}
				handleDeleteOption={props.handleDeleteOption}
			/>
		))}
	</div>
);

export default Options;
