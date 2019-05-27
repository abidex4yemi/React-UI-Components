import React from 'react';
import './Header.css';

export const ImageThumbnail = props => {
	const { src, alt } = props;
	return (
		<a href={src} className="logo">
			<img src={src} alt={alt} />
		</a>
	);
};
