// on peut aussi avoir des composants "fonction"
export default function Footer(props) {
	let date = new Date().getFullYear();
	//style dynamique
	let Footer = {
		footer: {background: 'black', color: 'white', fontSize: '1.5em'},
		p: {textAlign: 'center'},
		a: {color: 'red'}
	};
	// doit obligatoirement retourner un template
	return (
		<footer style={ Footer.footer }>
			<p style={ Footer.p }> Copyright &copy; { date } - Moi 
				<a style={ Footer.a } href={ props.mentions }>ML</a>
			</p>
		</footer>
	)
}