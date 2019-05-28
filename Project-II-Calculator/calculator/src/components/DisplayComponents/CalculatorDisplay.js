import React from 'react';
import './Display.css';
import { CalculatorScreen } from '../ScreenComponents/CalculatorScreen';

export const CalculatorDisplay = props => {
	const { total } = props;
	return (
		<div className="calculator">
			<CalculatorScreen value="0" total={total} />
			{/* <table>
				<tbody>
					<tr>
						<td>clear</td>
						<td>divide</td>
					</tr>
				</tbody>
			</table> */}
		</div>
	);
};
