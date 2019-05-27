import React from 'react';
import './Card.css';
import { CardContainer } from './CardContainer';

export const CardContent = () => {
	return (
		<div className="card-content">
			<CardContainer
				link="https://www.reactjs.org"
				headerText="Get started with React"
				bodyText="React makes it painless to create interactive UIs. Design simple views or each state in your application"
				footerText="React.org"
			/>
		</div>
	);
};
