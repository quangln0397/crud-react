import React, { Component } from 'react';
import axios from 'axios';

class edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            age: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/persons/edit/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    company: res.data.company,
                    age: res.data.age
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value,
        });
    }


    onChangeCompany = (e) => {
        this.setState({
            company: e.target.value,
        });
    }


    onChangeAge = (e) => {
        this.setState({
            age: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = { ...this.state };
        console.log(obj);
        axios.post('http://localhost:4000/persons/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/index');

    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Person Info</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.company}
                            onChange={this.onChangeCompany}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update Person Info"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default edit;