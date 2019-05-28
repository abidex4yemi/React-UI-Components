import React from 'react';
import './Display.css';

export const CalculatorDisplay = props => {
	const { total } = props;
	return <div className="display-value">{total}</div>;
};
