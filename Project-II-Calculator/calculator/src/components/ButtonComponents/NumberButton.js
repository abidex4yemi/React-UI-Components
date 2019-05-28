import React from 'react';
import './Button.css';

export const NumberButton = props => {
	const { buttonStyle, buttonText, buttonContainerStyle } = props;
	return (
		<td className={buttonContainerStyle}>
			<button className={buttonStyle}>{buttonText}</button>
		</td>
	);
};
