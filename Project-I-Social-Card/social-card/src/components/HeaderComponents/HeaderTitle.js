import React from 'react';
import './Header.css';
import moment from 'moment';

export const HeaderTitle = props => {
	const { schoolName } = props;
	return (
		<div className="intro-container">
			<h1 className="heading">
				Lambda School <span className="handle">{schoolName} </span>
				<time className="date">{moment().format('D MMM')}</time>
				<span />
			</h1>
			<p className="intro">
				Let’s learn React by building simple interfaces with components, Don’t to overthink it, just keep it simple and
				have fun. Once you are comfortable using components you are well on your way mastering React!
			</p>
		</div>
	);
};
