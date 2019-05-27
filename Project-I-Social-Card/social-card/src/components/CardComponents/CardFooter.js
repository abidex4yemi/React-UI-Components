import React from 'react';
import './Card.css';

export const CardFooter = props => {
	const { footerText, link } = props;
	return (
		<footer className="card-footer">
			<a href={link}>{footerText}</a>
		</footer>
	);
};
