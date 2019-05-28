import React, { Component } from 'react';
import './App.css';
import { CalculatorDisplay } from './components/DisplayComponents/CalculatorDisplay';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			value: ''
		};
	}

	clearValue() {
		this.setState(prevState => ({
			value: prevState.total
		}));
	}

	displayValue(inputValue) {
		this.setState(prevState => ({
			value: `${(prevState.value += inputValue)}`
		}));
	}

	handleClick = evt => {
		const value = evt.target.dataset.value;

		switch (value) {
			case 'clear':
				this.clearValue();
				break;

			default:
				this.displayValue(value);
				break;
		}
	};

	render() {
		const { total, value } = this.state;

		return (
			<React.Fragment>
				<header className="header">
					<div className="container">
						<h1>Welcome to React Calculator</h1>
					</div>
				</header>

				<main>
					<div className="container">
						<CalculatorDisplay value={value} total={total} handleClick={this.handleClick} />
					</div>
				</main>
			</React.Fragment>
		);
	}
}
