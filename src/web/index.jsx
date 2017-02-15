import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import {IntlProvider, FormattedMessage, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';

addLocaleData(fr);

//import messages from '../public/i18n/lang/en-us.json';

import Style from './css/style.scss';

import Header from './components/partial/header.component.jsx';
import Footer from './components/partial/footer.component.jsx';
import Dashboard from './components/dashboard/dashboard.component.jsx';
import About from './components/about/about.component.jsx';
import Login from './components/login/login.component.jsx';

class App extends React.Component {
  render () {
    return (
    	<IntlProvider locale={locale} messages={messages}>
			<div>
				<Header />
				<div  className="container">
					{this.props.children}
					<Footer />
			   	</div>
			   	<FormattedMessage id="info.unsupportedBrowser" defaultMessage="Your browser is not supported" />
		    </div>
	    </IntlProvider>
    )
  }
}

//render(<App/>, document.getElementById('app'));
render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="about" component={About}/>
			<Route path="login" component={Login}/>
			<Route path="dashboard" component={Dashboard}/>
{/*			<Route path="users" component={Users}>
				<Route path="/user/:userId" component={User}/>
			</Route>
			<Route path="*" component={NoMatch}/>*/}
		</Route>
	</Router>
), document.getElementById('app'));