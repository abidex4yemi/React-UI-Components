import React from 'react';
import './Header.css';

export const HeaderTitle = props => {
	const { schoolName } = props;
	return (
		<div>
			<h1>
				Lambda School <span className="handle">{schoolName}</span>Time stamp<span />
			</h1>
		</div>
	);
};
