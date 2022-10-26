import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from '../Redux/counterSlice';
export default function Composant2() {
	//state de Redux
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	// pour le formulaire (useState)
	const [montant, setMontant] = useState(0);
	
	function add(event) {
		if(event.target.value !=='') setMontant(parseFloat(event.target.value));
		else setMontant(0);
	}

	return (
		<div>
			<h1>Composant 2</h1>
			<p>Formulaire ajout</p>
			<p>Valeur du compteur: { counter.toFixed(2) }</p>
			<button onClick={ () => dispatch(increment()) }>+1</button>
			<button onClick={ () => dispatch(decrement()) }>-1</button>
			<input type="number" value={ montant } onChange = { add } />
			<button onClick = { () => dispatch(incrementByAmount(montant))}>+{ montant }</button>
			<button onClick = { () => dispatch(incrementByAmount(-montant))}>-{ montant }</button>
		</div>
	)
}