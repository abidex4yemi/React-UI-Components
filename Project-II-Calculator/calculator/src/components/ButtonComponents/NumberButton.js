import React from 'react';
import './Button.css';

export const NumberButton = props => {
	const { buttonText, buttonValue, handleClick } = props;
	return (
		<button className="digit-button btn" data-value={buttonValue} onClick={handleClick}>
			{buttonText}
		</button>
	);
};
