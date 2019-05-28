import React from 'react';
import './Card.css';

export const CardHeader = props => {
	const { headerText } = props;
	return <h3 className="card-heading">{headerText}</h3>;
};
