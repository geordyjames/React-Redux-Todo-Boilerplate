import React from 'react';

const Loading = props => {
	if (props.error) {
		return (
			<div className="uk-flex uk-flex-center uk-flex-middle half-height">
				Error!
				<button
					className="uk-button uk-button-danger uk-text-bold uk-margin-left"
					onClick={props.retry}
				>
					Retry
				</button>
			</div>
		);
	} else if (props.timedOut) {
		return (
			<div className="uk-flex uk-flex-center uk-flex-middle half-height">
				Taking a long time...
				<button
					className="uk-button uk-button-danger uk-text-bold uk-margin-left"
					onClick={props.retry}
				>
					Retry
				</button>
			</div>
		);
	} else if (props.pastDelay) {
		return (
			<div className="uk-flex uk-flex-center uk-flex-middle half-height">
				<div data-uk-spinner="ratio: 3" />
			</div>
		);
	} else {
		return null;
	}
};

export default Loading;
