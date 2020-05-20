import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

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
		this.setState({
			// simple test to check form functionality
			users: [ 'test user', 'test user1' ],
			username: 'test user'
		});
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
