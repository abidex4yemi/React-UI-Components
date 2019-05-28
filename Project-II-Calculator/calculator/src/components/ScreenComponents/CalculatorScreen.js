import React from 'react';
import './Screen.css';

export const CalculatorScreen = props => {
	const { value } = props;
	return <div className="display-value">{value}</div>;
};
