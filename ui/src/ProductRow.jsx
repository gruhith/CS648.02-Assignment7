import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProductRow extends Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
	}

	onDelete(e) {
		e.preventDefault();
		this.props.deleteProduct(this.props.product._id)
	}

	render() {
		const { _id, Name, Price, Category, Image } = this.props.product;
		
		return (
			<tr>
				<td>{ Name }</td>
				<td>${ Price }</td>
				<td>{ Category }</td>
				<td><Link to={`/view/${_id}`}>View</Link></td>
				<td><Link to={`/edit/${_id}`}>Edit</Link> / <a href="#" onClick={this.onDelete}>Delete</a></td>
			</tr>
		)
	}
}

export default ProductRow