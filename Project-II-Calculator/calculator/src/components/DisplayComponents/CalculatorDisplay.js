import React from 'react';
import './Display.css';
import { CalculatorScreen } from '../ScreenComponents/CalculatorScreen';
import { NumberButton } from '../ButtonComponents/NumberButton';

export const CalculatorDisplay = props => {
	const digitData = [
		{
			buttonText: 7,
			buttonValue: 7
		},
		{
			buttonText: 8,
			buttonValue: 8
		},
		{
			buttonText: 9,
			buttonValue: 9
		},
		{
			buttonText: 4,
			buttonValue: 4
		},
		{
			buttonText: 5,
			buttonValue: 5
		},
		{
			buttonText: 6,
			buttonValue: 6
		},
		{
			buttonText: 1,
			buttonValue: 1
		},
		{
			buttonText: 2,
			buttonValue: 2
		},
		{
			buttonText: 3,
			buttonValue: 3
		},
		{
			buttonText: 0,
			buttonValue: 0
		}
	];

	const { total } = props;
	return (
		<div className="calculator">
			<CalculatorScreen value="0" total={total} />
			<div className="button-container">
				{digitData.map(button => <NumberButton key={button.buttonValue} {...button} />)}
			</div>
		</div>
	);
};
