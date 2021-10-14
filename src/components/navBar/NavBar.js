import logo from './logo.png';
import './NavBar.css';
import {Title} from '../Title/Title.js';
import CartWidget from '../cartWidget/CartWidget.js';


function NavBar() {
	return (

			<div className="Nav">
				<div className="NavBar">
				<img src={logo} className="NavBar-logo" alt="logo" />
				<Title />
				<ul className="">

					<li><a href="/#">Home</a></li>
					<li><a href="/#">Commissions</a></li>
					<li><a href="/#">T-Shirts</a></li>
					<li><a href="/#">Prints</a></li>
					<li><a href="/#">Other</a></li>
					<li><a href="/#">Sale</a></li>

				</ul>

				<CartWidget />

				</div>
			</div>

		);
}

export default NavBar;