import React from 'react';
import './Header.css';
import { ImageThumbnail } from './ImageThumbnail';
import { HeaderTitle } from './HeaderTitle';

export const HeaderContainer = props => {
	const { src, alt, schoolName } = props;
	return (
		<header className="card-header">
			<ImageThumbnail src={src} alt={alt} />
			<HeaderTitle schoolName={schoolName} />
		</header>
	);
};
