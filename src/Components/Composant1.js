// useState permet de gérer un state dans un composant fonction
// useEffect componentDidMount + ComponentDidUpdate + ComponentWillUnmount
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../Redux/counterSlice";

export default function Composant1() {
	//création du state
	// count est le nom du state
	// setCount est la fonction de modification du state
	// useState(0) initialise le state à 0
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	//contexte redux (state & fonctions de modification)
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	function add() {
		setCount2(count2 + 1);
	}

	// hook de mise à jour du composant
 useEffect(function() {
	console.log('useEffect');
	// mise à jour du title de la page
	document.title = `Vous avez cliqué ${count} ${count2} fois`;
	// stockage dans le localStorage du changement (mini 5Mo)
	let infos = {count: count, count2: count2};
	localStorage.setItem('infos', JSON.stringify(infos));
	// localStorage.getItem('infos'); => JSON.Parse()
	// localStorage.removeItem('infos'); //supprimer un item
	// localStorage.clear(); //supprimer tout
 });

	return (
		<div>
			<h1>Composant 1</h1>
			<p>Tableau d'affichage</p>
			<p>Vous avez cliqué { count } fois</p>
			<button onClick= { () => setCount(count + 1) }>Cliquez ici</button>
			<p>Vous avez cliqué { count2 } fois</p>
			<button onClick={ add } >Cliquez ici aussi</button>
			<hr />
			<p>Dans le store vous avez cliqué { counter.toFixed(2) } fois</p>
			<button onClick={ () => dispatch(increment()) } >+1</button>
			<button onClick= { () => dispatch(decrement()) }>-1</button>
			<button onClick= { () => dispatch(incrementByAmount(10)) } >+10</button>
		</div>
	)
}