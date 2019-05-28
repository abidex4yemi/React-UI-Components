import React from 'react';
import './Card.css';

export const CardBody = props => {
	const { bodyText, link, linkText } = props;
	return (
		<React.Fragment>
			<p className="card-text">{bodyText}</p>
			<a href={link}>{linkText}</a>
		</React.Fragment>
	);
};
