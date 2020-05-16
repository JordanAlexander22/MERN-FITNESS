import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, ExercisesList, EditExercise, CreateUser, CreateExercise } from './components';

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<br />
				<Route path="/" exact component={ExercisesList} />
				<Route path="/edit/:id" exact component={EditExercise} />
				<Route path="/create" exact component={CreateExercise} />
				<Route path="/user" exact component={CreateUser} />
			</div>
		</Router>
	);
}

export default App;
