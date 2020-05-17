import React, {Component} from 'react';


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

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration:this.state.duration,
            date: this.state.date,
        };

    console.log(exercise);
    window.location = '/';
    }

    render() {
        return (
           <div>
               <h3>Create New Exercise Log</h3>
               <form onSubmit= {this.onSubmit}>
                   <div className= 'form-group'>
                       <label>Username:</label>
                       <select ref= 'userInput'
                       required
                       className= 'form-control'
                       onChange= {this.handleChange.bind(this)}
                       value= {this.state.username}>
                           {
                               this.state.users.map(function(user) {
                                   return <option
                                   key= {user}
                                   value= {user}>{user}
                                   </option>;
                               })
                           }
                       </select>
                   </div>
                   <div className= 'form-group'>
                       <label>Description: </label>
                       <input type= 'text'
                       required
                       className= 'form-control'
                       value= {this.state.description}
                       onChange= {this.handleChange.bind(this)}
                       />
                   </div>
               </form>
           </div>
        )
    }
}