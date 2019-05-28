import React from 'react';
import { HeaderContent } from '../HeaderComponents/HeaderContent';
import { CardContent } from '../CardComponents/CardContent';
import { Footer } from '../FooterComponents/Footer';

export const SocialFeed = () => {
	return (
		<div className="social-feed">
			<HeaderContent />
			<CardContent />
			<Footer />
		</div>
	);
};
