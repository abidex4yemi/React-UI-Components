import React from 'react';
import './App.css';
import { SocialFeed } from './components/SocialFeed/SocialFeed';

const App = () => {
	return (
		<React.Fragment>
			<header>
				<h1>Welcome to Lambda React class</h1>
			</header>
			<main className="main-content">
				<div className="container">
					<div className="social-cards">
						<SocialFeed />
						<SocialFeed />
						<SocialFeed />
					</div>
				</div>
			</main>
			<footer>
				<p>&copy; by Yemi</p>
			</footer>
		</React.Fragment>
	);
};

export default App;
