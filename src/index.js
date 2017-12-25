import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';

import './main.css';
import reducers from 'reducers';
import Phones from 'containers/phones';
import Layout from 'containers/layout';
import Phone from 'containers/phone';
import Registration from 'containers/registration';
import Login from 'containers/login';
import NotFound from 'containers/not_found';

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route component={Layout}>
			<Route path='/' component={Phones} />
			<Route path='/login' component={Login} />
			<Route path='/phones/:id' component={Phone} />
				<Route path='/registration' component={Registration} />
			<Route path='*' component={NotFound}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
