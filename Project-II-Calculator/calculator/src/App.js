import React, { Component } from 'react';
import './App.css';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0
		};
	}

	render() {
		return (
			<React.Fragment>
				<header class="header">
					<h3>Welcome to React Calculator</h3>
				</header>

				{/* <main>
					<div className="container">
						<div className="calculator">
              <CalculatorDisplay />
              <ActionButton />
              <NumberButton />
						</div>
					</div>
				</main> */}
			</React.Fragment>
		);
	}
}
