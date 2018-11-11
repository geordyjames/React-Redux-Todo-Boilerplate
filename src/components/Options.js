import React, { Fragment } from 'react';
import Option from './Option';

const Options = props => (
	<Fragment>
		{props.options.length === 0 && (
			<p className="uk-text-center uk-text-primary">Please add an option to get started!</p>
		)}
		<ul className="uk-list uk-list-divider uk-padding">
			{props.options.map((option, index) => (
				<Option
					key={option.id}
					id={option.id}
					optionText={option.name}
					count={index + 1}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))}
		</ul>
	</Fragment>
);

export default Options;
