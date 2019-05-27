import React from 'react';
import './App.css';
import { HeaderContent } from './components/HeaderComponents/HeaderContent';
import { CardContent } from './components/CardComponents/CardContent';

const App = () => {
	return (
		<React.Fragment>
			<HeaderContent />
			<main>
				<div className="container">
					<CardContent />
				</div>
			</main>
		</React.Fragment>
	);
};

export default App;
