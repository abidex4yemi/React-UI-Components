import React from 'react';
import './Card.css';
import { CardBanner } from './CardBanner';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';

export const CardContainer = props => {
	const { link, headerText, bodyText, linkText } = props;

	return (
		<div className="card-body">
			<CardBanner link={link} />
			<div className="card-content">
				<CardHeader headerText={headerText} />
				<CardBody bodyText={bodyText} linkText={linkText} link={link} />
			</div>
		</div>
	);
};
