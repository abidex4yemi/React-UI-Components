import React from 'react';
import './Footer.css';

export const Footer = () => {
	return (
		<footer className="card-footer">
			<div className="footer-content">
				<a href="#!" className="icon-link">
					<i class="far fa-comment" />
				</a>
				<a href="#!" className="icon-link">
					<i class="fas fa-retweet" />
				</a>
				<a href="#!" className="icon-link">
					<i class="far fa-heart" />
				</a>
				<a href="#!" className="icon-link">
					<i class="far fa-envelope" />
				</a>
			</div>
		</footer>
	);
};
