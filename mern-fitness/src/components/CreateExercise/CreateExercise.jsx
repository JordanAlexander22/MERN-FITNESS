import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class CreateExercise extends Component {
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

    render() {
        return (
           <h1>CreateExercise Component</h1>
        )
    }
}