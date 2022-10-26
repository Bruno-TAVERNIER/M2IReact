import Navigation from '../Components/Navigation';
import { useParams, useNavigate } from 'react-router-dom';

export default function Page3() {
	// utilisation du hook en dehors des fonctions de traitement
	const navigate = useNavigate();
	//traitement bouton (vers l'infini et au delà)
	function viead() {
		navigate("/p3/45");
	}
	//récupération paramètres de l'url
	let params = useParams();
	console.log(params);
	// infos à traiter...
	let liste = [
		{id: 83, nom: 'AngularJS'},
		{id: 45, nom: 'ReactJS'},
		{id: 12, nom: 'VueJS'},
	];
	if(params.id) {
		// normalement appel API...
		var language = liste.find(lg => lg.id === parseInt(params.id));
		console.log(language);
		return (
			<div className="App">
				<Navigation />
				<h1>Page 3 avec paramètres</h1>
				<p>{ params.id }</p>
				<p>{ language.id }</p>
				<p>{ language.nom }</p>
		</div>			
		)
	}
	return (
		<div className="App">
			<Navigation />
			<h1>Page 3 sans paramètres</h1>
			<button onClick={ viead }>Version avec params</button>
		</div>
	)
}