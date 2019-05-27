import React from 'react';
import './App.css';
import { HeaderContent } from './components/HeaderComponents/HeaderContent';

const App = () => {
	return (
		<React.Fragment>
			<HeaderContent />
			<main>
				<div className="container">main goes here</div>
			</main>
		</React.Fragment>
	);
};

export default App;
