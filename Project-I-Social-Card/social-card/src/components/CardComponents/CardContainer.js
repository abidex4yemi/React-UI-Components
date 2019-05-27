import React from 'react';
import './Card.css';
import { CardBanner } from './CardBanner';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export const CardContainer = props => {
	const { link, headerText, bodyText, footerText } = props;

	return (
		<div class="card">
			<CardBanner link={link} />
			<CardHeader headerText={headerText} />
			<CardBody bodyText={bodyText} />
			<CardFooter footerText={footerText} link={link} />
		</div>
	);
};
