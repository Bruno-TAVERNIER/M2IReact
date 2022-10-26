import React from 'react';
/* classe d'erreur pour afficher une UI de remplacement */
export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state= {hasError: false};
	}

	//interception erreur
	static getDerivedStateFromError(error) {
		console.log(error);
		// mise à jour du state pour afficher l'UI de remplacement
		return {hasError: true};
	}
	//ui de remplacement ou transfert des props
	render() {
		if(this.state.hasError) {
			//on peut afficher ici n'importe quelle UI de secours
			return <h1>Ca sent le brulé...</h1>;
		}
		return this.props.children;
	}
}