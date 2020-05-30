import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class EditExercise extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			users: []
		};
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

	componentDidMount() {
		axios
			.get('http://localhost:5000/exercises/' + this.props.match.params.id)
			.then((response) => {
				this.setState({
					username: response.data.username,
					description: response.data.description,
					duration: response.data.duration,
					date: new Date(response.data.date)
				});
			})
			.catch(function(error) {
				console.log(error);
			});

		axios.get('hhtp://localhost:5000/users/').then((response) => {
			this.setState({ users: response.data.map((user) => user.username) });
		});
	}

	onSubmit = (e) => {
		e.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		};

		console.log(exercise);

		axios
			.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
			.then((res) => console.log(res.data));

		//window.location = '/'
	};

	render() {
		return (
			<div>
				<h3>Edit Exercise Log</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<select
							ref="userInput"
							className="form-control"
							value={this.state.username}
							onChange={this.handleUserNameChange}
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
						<label>Duration (minutes): </label>
						<input
							type="text"
							className="form-control"
							value={this.state.duration}
							onChange={this.handleDurationChange}
						/>
					</div>
					<div className="form-group">
						<label>Date: </label>
						<DatePicker selected={this.state.date} onChange={this.onChangeDate} />
					</div>

					<div className="form-group">
						<input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}
