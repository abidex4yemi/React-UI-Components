import React from 'react';
import './Card.css';
import { CardContainer } from './CardContainer';

export const CardContent = () => {
	return (
		<CardContainer
			link="reactjs.org"
			headerText="Get started with React"
			bodyText="React makes it painless to create interactive UIs. Design simple views or each state in your application"
			linkText="React.org"
		/>
	);
};
