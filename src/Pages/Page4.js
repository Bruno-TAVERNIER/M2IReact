//outlet permet d'afficher des "sous pages" dans la page
import { Outlet } from "react-router-dom"
import Navigation from "../Components/Navigation"
export default function Page4() {

	return (
		<div>
		<Navigation />
		<h1>Page 4</h1>
		<p>Outlet permet d'afficher des composants enfant dans la page 4.
			L'intérêt est essentiellement au niveau UI.
		</p>
		<Outlet />
		</div>
	)
}