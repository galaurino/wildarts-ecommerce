import logo from '../logo.png';
import './NavBar.css';
import {Title} from './Elements.js';


function NavBar() {
	return (

			<div className="Nav">
				<div className="NavBar">
				<img src={logo} className="NavBar-logo" alt="logo" />
				<Title />
				<ul>

					<li><a href="/#">Home</a></li>
					<li><a href="/#">Commissions</a></li>
					<li><a href="/#">T-Shirts</a></li>
					<li><a href="/#">Prints</a></li>
					<li><a href="/#">Other</a></li>
					<li><a href="/#">Sale</a></li>

				</ul>
				</div>
			</div>

		);
}

export default NavBar;