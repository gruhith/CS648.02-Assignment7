import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import ProductRow from './ProductRow.jsx'

export default class ProductTable extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rows = this.props.products.map(p => <ProductRow product={p} key={p.id} deleteProduct={this.props.deleteProduct} />)
		return (
			<section>
				<p>Showing {this.props.productCount} available products</p>
				<hr />
				<Table striped bordered hover>
					<thead>
						<tr>
							<td>Product Name</td>
							<td>Price</td>
							<td>Category</td>
							<td>Image</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</Table>
			</ section>
		)
	}
}