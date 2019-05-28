import React from 'react';
import './App.css';
import { SocialFeed } from './components/SocialFeed/SocialFeed';

const App = () => {
	return (
		<React.Fragment>
			<header className="main-header">
				<div className="container">
					<div className="main-header-content">
						<img
							src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
							alt="Lambda logo"
						/>
						<h1>Welcome to Lambda React class</h1>
					</div>
				</div>
			</header>
			<main className="main-content">
				<div className="container">
					<div className="social-cards">
						<SocialFeed />
						<SocialFeed />
						<SocialFeed />
						<SocialFeed />
					</div>
				</div>
			</main>
			<footer className="main-footer">
				<div className="container">
					<p>&copy; By Yemi</p>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default App;
