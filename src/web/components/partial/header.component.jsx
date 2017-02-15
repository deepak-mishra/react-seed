import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

	render(){
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded mb-4">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    	<span className="navbar-toggler-icon"></span>
			  	</button>
			  	<div className="collapse navbar-collapse" id="navbarNavDropdown">
			 		<ul className="navbar-nav mr-auto">
			      		<li className="nav-item active"><Link to="/dashboard" className="nav-link" activeClassName="active">Dashboard</Link></li>
			      		<li className="nav-item"><Link to="/about" className="nav-link" activeClassName="active">About</Link></li>
			      		<li className="nav-item"><Link to="/login" className="nav-link" activeClassName="active">Login</Link></li>
					</ul>
					<span className="navbar-text">Language: &nbsp;</span>
					<div className="btn-group" role="group" aria-label="lang-bar">
						<button type="button" className="btn btn-secondary">EN</button>
						<button type="button" className="btn btn-secondary">FI</button>
						<button type="button" className="btn btn-secondary">HK</button>
					</div>
			  	</div>
			</nav>


		)
	}
}

export default Header;