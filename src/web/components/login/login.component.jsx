import React from 'react';

class Login extends React.Component {

	render(){
		return(
			<form className="form-signin" noValidate>
			    <h2 className="form-signin-heading"></h2>
			    <div className="alert alert-danger">Email is required </div>
			    <div className="alert alert-danger">Password is required </div>
			    <label htmlFor="inputEmail" className="sr-only">Email address</label>
			    <input type="email" id="inputEmail" className="form-control" name="name" placeholder="email" required autoFocus />
			    <label htmlFor="inputPassword" className="sr-only">password</label>
			    <input type="password" id="inputPassword" className="form-control" placeholder="password" required/>
			    <div className="checkbox">
			      <label>
			        <input type="checkbox" value="remember-me"/> Remember Me
			      </label>
			    </div>
			    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
			</form>
		)
	}
}

export default Login;