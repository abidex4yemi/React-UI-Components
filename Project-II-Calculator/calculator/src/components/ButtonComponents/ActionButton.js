import React from 'react';
import './Button.css';

export const ActionButton = props => {
	const { buttonText, actionType, handleClick } = props;
	return (
		<button className="action-btn btn" type="button" data-value={actionType} onClick={handleClick}>
			{buttonText}
		</button>
	);
};
