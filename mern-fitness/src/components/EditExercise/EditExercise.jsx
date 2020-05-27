import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
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
        }
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
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
        .then (response => {
            this.setState({
                username: response.data.username,
                description: response.data.description,
                duration: response.data.duration,
                date: new Date(response.data.date)
            })

        })
        .catch(function (error) {
            console.log(error)
        })
    }



    render() {
        return (
           <h1>EditExercise Component</h1>
        )
    }
}