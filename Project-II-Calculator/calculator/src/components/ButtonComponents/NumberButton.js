import React from 'react';
import './Button.css';

export const NumberButton = props => {
	const { buttonText, buttonValue } = props;
	return (
		<button className="digit-button" data-value={buttonValue}>
			{buttonText}
		</button>
	);
};
