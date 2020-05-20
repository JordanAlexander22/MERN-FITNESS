import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ''
		};
	}

	handleUsername = (e) => {
		this.setState({ username: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const newUser = {
			username: this.state.username
		};

		console.log(newUser);

		// connected backend to the frontend
		axios.post('http://localhost:5000/users/add', newUser)
		.then (res => console.log(res.data))
		.catch (error => console.log(error))

		this.setState({
			username: ''
		});
	};

	render() {
		return (
			<div>
				<h3>Create New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.username}
							onChange={this.handleUsername}
						/>
					</div>
					<div className="form-group">
						<input type="submit" value="Create User" className="btn-btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}
