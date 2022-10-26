import React from 'react';
import { ThemeContext } from '../App';
import Columns from './Columns';

export default class Table extends React.Component {
		render() {
		let ctx = {color: 'pink', background:'white'};
		// pause café
		return (
			<table border="1">
				<tbody>
					<tr>
						<Columns />
					</tr>
					<tr>
						<ThemeContext.Provider value={ ctx }>
						<Columns />
						</ThemeContext.Provider>
					</tr>
					<tr>
						<Columns />
					</tr>
				</tbody>
			</table>
		)
	}
}