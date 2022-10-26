import { createSlice } from "@reduxjs/toolkit";

//création du state et des fonctions associées (setters/getters)
export const counterSlice = createSlice({
	// state et valeur initiale
	name: 'counter',
	initialState: {
		value: 3
	},
	// fonctions persos
	reducers: {
		increment: (state) => {
			// Redux toolkit nous permet de créer nos mutateurs
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
			//interdiction des valeurs négatives
			if(state.value < 0) state.value = 0;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
			//interdiction des valeurs négatives
			if(state.value < 0) state.value = 0;
		} 
	}
});
// exports pour réutilisation dans les composants
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;