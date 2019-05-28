import React from 'react';
import './Card.css';

export const CardBanner = props => {
	const { link } = props;
	return (
		<a href={link} className="card-banner">
			banner goes here
		</a>
	);
};
