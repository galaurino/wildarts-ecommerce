import logo from './logo.png';
import './NavBar.css';
import { Link } from "react-router-dom";
import { Title } from '../Title/Title.js';
import CartWidget from '../cartWidget/CartWidget.js';

const categories = [
 { url: "clothing", label: "Clothing"},
 { url: "mugs", label: "Mugs"},
 { url: "prints", label: "Prints"},
 { url: "commissions", label: "Commissions"}
];


function NavBar() {
	return (

			<div className="Nav">
				<div className="NavBar">
				<Link to="/">
					<img src={logo} className="NavBar-logo" alt="logo" />
				</Link>
				<Title />
				<div className="Navigation">
					{categories.map(({url, label}) =>(
							<Link key={url} to={`/category/${url}`}>
								{label}
							</Link>
						))}
				</div>
				<Link to="/cart">
					<CartWidget />
				</Link>
				</div>
			</div>

		);
}

export default NavBar;