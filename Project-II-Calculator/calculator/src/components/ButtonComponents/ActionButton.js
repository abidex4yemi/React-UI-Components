import React from 'react';
import './Button.css';

export const ActionButton = props => {
	const { buttonStyle, buttonText, buttonValue } = props;
	return (
		<button style={buttonStyle} data-value={buttonValue}>
			{buttonText}
		</button>
	);
};
