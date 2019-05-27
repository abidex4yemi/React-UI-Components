import React from 'react';
import './App.css';
import { HeaderContent } from './components/HeaderComponents/HeaderContent';
import { CardContent } from './components/CardComponents/CardContent';
import { Footer } from './components/FooterComponents/Footer';

const App = () => {
	return (
		<React.Fragment>
			<HeaderContent />
			<main>
				<div className="container">
					<CardContent />
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default App;
