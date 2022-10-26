import React from "react";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {

	render() {
		return (
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/p1'>Page 1</Link>
				<Link to='/p2'>Page 2</Link>
				<Link to='/p3'>Page 3</Link>
				<Link to='/p3/45'>Page 3+</Link>
				<Link to="/p4">Page 4</Link>
				<Link to="/p4/s1">Page 4 section 1</Link>
				<Link to="/p4/s2">Page 4 section 2</Link>
			</nav>
		)
	}
}