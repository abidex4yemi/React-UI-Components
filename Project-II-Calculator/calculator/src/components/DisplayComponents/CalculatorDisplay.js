import React from 'react';
import './Display.css';
import { CalculatorScreen } from '../ScreenComponents/CalculatorScreen';
import { NumberButton } from '../ButtonComponents/NumberButton';
import { ActionButton } from '../ButtonComponents/ActionButton';

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
		},
		{
			buttonText: '.',
			buttonValue: '.'
		}
	];

	const actionData = [
		{
			buttonText: '÷',
			actionType: '÷'
		},
		{
			buttonText: 'x',
			actionType: 'x'
		},
		{
			buttonText: '-',
			actionType: '-'
		},
		{
			buttonText: '+',
			actionType: '+'
		},
		{
			buttonText: '=',
			actionType: '='
		}
	];
	const { handleClick, value } = props;
	return (
		<div className="calculator">
			<CalculatorScreen value={value} />
			<div className="button-container">
				<div className="left">
					<ActionButton buttonText="clear" actionType="clear" handleClick={handleClick} />
					{digitData.map(button => <NumberButton handleClick={handleClick} key={button.buttonValue} {...button} />)}
				</div>

				<div className="right">
					{actionData.map(actionBtn => (
						<ActionButton key={actionData.length++} {...actionBtn} handleClick={handleClick} />
					))}
				</div>
			</div>
		</div>
	);
};
