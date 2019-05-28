import React, { Component } from 'react';
import './App.css';
import { CalculatorDisplay } from './components/DisplayComponents/CalculatorDisplay';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0
		};
	}

	render() {
		const { total } = this.state;

		return (
			<React.Fragment>
				<header className="header">
					<div className="container">
						<h1>Welcome to React Calculator</h1>
					</div>
				</header>

				<main>
					<div className="container">
						<CalculatorDisplay total={total} />
					</div>
				</main>
			</React.Fragment>
		);
	}
}
