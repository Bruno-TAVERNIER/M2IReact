import React from 'react';
import { ThemeContext } from '../App';

export default class Columns extends React.Component {
	render() {
		return (
			// ou directement <>
			<React.Fragment>
				<td>Bonjour</td>
				<td>Le monde !</td>
				<td><ThemeContext.Consumer>
					{ ({color}) => (<p>color</p>) }
					</ThemeContext.Consumer></td>
				<td><ThemeContext.Consumer>
					{ ({background}) => (background)}
					</ThemeContext.Consumer></td>
					<td><ThemeContext.Consumer>
					{ ({background, color}) => (<ul><li>{color}</li><li>{background}</li></ul>)}
					</ThemeContext.Consumer></td>
			</React.Fragment>
		)
	}
}