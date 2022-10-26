// un composant "classe" se crée dans un 
//fichier JS qui hérite de React.copmponent
import logo from '../logo.svg';

import React from 'react';
// si on ne veut pas oublier d'exporter ensuite...
// export default class Header extends React.Component {
class Header extends React.Component {
	monStyle = {};
	//constructeur pour gérer les props
	constructor(props) {
		super(props);
		this.monStyle = {maxWidth: '100px'};
	}
	monClick() {
		console.log("vous avez cliqué le header");
	}
	// méthode obligatoire
	render() {
		// doit retourner un "template"
		return (
			<header onClick={ this.monClick }>
				<img src={ this.props.logo } alt="logo" style={ this.monStyle } />
				<div>
					<h1>{ this.props.titre }</h1>
					<h2>{ this.props.slogan }</h2>
				</div>
			</header>
		)
	}
}
// transformation de la classe en module
export default Header;