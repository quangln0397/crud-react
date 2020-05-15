import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        }
    }


    componentDidMount() {
        axios.get('http://localhost:4000/persons')
            .then(res => {
                console.log(res.data);
                this.setState({ persons: res.data })
            })
    }

    delete(personId) {
        axios.get('http://localhost:4000/persons/delete/' + personId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    } 

    // delete cung khong co re-render lai index
    render() {
        return (
            <div>
                <h3 align="center">Persons List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Age</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons.map((person, index) => {
                            return <tr key={index}>
                                <td>{person.name}</td>
                                <td>{person.company}</td>
                                <td>{person.age}</td>
                                <td>
                                    <Link to={"/edit/" + person._id} className="btn btn-primary">Edit</Link>
                                </td>
                                <td>
                                    <button onClick={this.delete(person._id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default index;