import React from 'react';

const Option = props => (
	<li>
		<p className="uk-text-middle uk-align-left uk-margin-small-bottom">
			{props.count}. {props.optionText}
		</p>
		<button
			className="uk-icon-button uk-align-right"
			data-uk-icon="icon: trash"
			onClick={() => {
				props.handleDeleteOption(props.id);
			}}
		/>
	</li>
);

export default Option;
