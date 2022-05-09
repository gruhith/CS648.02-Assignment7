import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

export default class Navbar extends Component {
	render() {
		return (
			<Nav className="border-bottom mb-3">
				<LinkContainer to="/products">
					<Nav.Link>
						Home
					</Nav.Link>
				</LinkContainer>
			</Nav>
		)
	}
}
