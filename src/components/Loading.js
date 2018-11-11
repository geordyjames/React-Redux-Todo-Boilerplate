import React from 'react';

const Loading = props => {
	if (props.error) {
		return (
			<div className="uk-text-center">
				Error! <button className="uk-button uk-button-default" onClick={props.retry}>Retry</button>
			</div>
		);
	} else if (props.timedOut) {
		return (
			<div className="uk-text-center">
				Taking a long time... <button className="uk-button uk-button-default" onClick={props.retry}>Retry</button>
			</div>
		);
	} else if (props.pastDelay) {
		return <div data-uk-spinner className="uk-text-center"></div>;
	} else {
		return null;
	}
};

export default Loading;
