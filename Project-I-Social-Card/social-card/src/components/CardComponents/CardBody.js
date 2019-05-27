import React from 'react';
import './Card.css';

export const CardBody = props => {
	const { bodyText } = props;
	return <p className="card-body">{bodyText}</p>;
};
