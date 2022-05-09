/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "no-alert": "off" */

// eslint-disable-next-line react/prefer-stateless-function

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Alert from 'react-bootstrap/Alert'

import Navbar from './Navbar.jsx'
import ProductList from './ProductList.jsx'
import ProductEdit from './ProductEdit.jsx'
import ProductView from './ProductView.jsx'

const NotFound = () => <h1>Page Not Found</h1>;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toast: {
				show: false,
				message: "",
				variant: ""
			}
		}
		this.showToast = this.showToast.bind(this);
	}

	showToast(variant, message) {
		this.setState((state, props) => (state.toast = {
			show: true, message, variant
		}))
		setTimeout(() => {
			this.setState((state, props) => state.toast.show = false)			
		}, 3000);
	}

	render() {
		const {show, variant, message} = this.state.toast;
		return (
			<Router>
				<Navbar />
				<div className="container-fluid">
					<Switch>
						<Redirect exact from="/" to="/products" />
						<Route path="/products" render={(props) => <ProductList {...props} showToast={this.showToast} />} />
						<Route path="/edit/:id" render={(props) => <ProductEdit {...props} showToast={this.showToast} />} />
						<Route path="/view/:id" component={ProductView} />
						<Route component={NotFound} />
					</Switch>

					<Alert variant={variant} className="custom-toast shadow-sm" show={show}>
						{ message }
					</Alert>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
