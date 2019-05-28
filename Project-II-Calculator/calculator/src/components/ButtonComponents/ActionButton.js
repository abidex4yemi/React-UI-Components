import React from 'react';
import './Button.css';

export const ActionButton = props => {
	const { buttonText } = props;
	return (
		<button className="action-btn btn" type="button">
			{buttonText}
		</button>
	);
};
