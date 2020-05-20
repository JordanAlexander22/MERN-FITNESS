import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';

export default class CreateExercise extends Component {
	constructor(props) {
		super(props);
		//all of the state being manipulated for this component
		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			users: []
		};
	}

	componentDidMount() {
		//retrieves users from the database and sets state
		axios.get('http://localhost:5000/users/')
			.then(response => {
				if (response.data.length > 0) {
					this.setState({
						users: response.data.map(user => user.username),
						username: response.data[0].username
					});
				}
			})
			.catch ((error) => {
				console.log(error)
			})
	}

	handleUserNameChange = (e) => {
		let username = e.target.value;
		this.setState({ username });
	};

	handleDescriptionChange = (e) => {
		let description = e.target.value;
		this.setState({ description });
	};

	handleDurationChange = (e) => {
		let duration = e.target.value;
		this.setState({ duration });
	};

	onChangeDate = (date) => {
		this.setState({
			date: date
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		};
		//sanity check
		console.log(exercise);

		axios.post('http://localhost:5000/exercises/add', exercise)
		.then(res => console.log(res.data))
		.catch (err => console.log(err));

		window.location = '/';
	};

	render() {
		return (
			<div>
				<h3>Create New Exercise Log</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username:</label>
						<select
							className="form-control"
							onChange={this.handleUserNameChange}
							value={this.state.username}
						>
							{this.state.users.map(function(user) {
								return (
									<option key={user} value={user}>
										{user}
									</option>
								);
							})}
						</select>
					</div>
					<div className="form-group">
						<label>Description: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.description}
							onChange={this.handleDescriptionChange}
						/>
					</div>
					<div className="form-group">
						<label>Duration (in minutes)</label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.duration}
							onChange={this.handleDurationChange}
						/>
					</div>
					<div className="form-group">
						<label>Date: </label>
						<div>
							<DatePicker selected={this.state.date} onChange={this.onChangeDate} />
						</div>
					</div>

					<div className="form-group">
						<input type="submit" value="Create Exercise Log" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}
