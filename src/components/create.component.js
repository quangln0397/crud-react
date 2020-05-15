import React, { Component } from 'react';
import axios from 'axios';

class create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            name: ''
        }
    }

    updateName = (e) => {
        this.setState({
            name: e.target.value
        });
        console.log('Name:' + this.state.name);
    }

    updateCompany = (e) => {
        this.setState({
            company: e.target.value
        });
        console.log('Company:' + this.state.company);
    }

    updateAge = (e) => {
        this.setState({
            age: e.target.value
        });
        console.log('Company Age:' + this.state.age);
    }

    submitCompanyInfo = (e) => {
        alert('You have submitted this form !!!');
        e.preventDefault();
        const obj = { ...this.state };
        axios.post('http://localhost:4000/persons/add', obj);
        this.setState({
            name: '',
            company: '',
            age: ''
        })
    }


    render() {
        return (
            <div>
                <div style={{ marginTop: 10 }}>
                    <h3>Add New Business</h3>
                    <form onSubmit={this.submitCompanyInfo}>
                        <div className="form-group">
                            <label>Add Person Name:  </label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.updateName} />
                        </div>
                        <div className="form-group">
                            <label>Add Business Name: </label>
                            <input type="text" className="form-control" value={this.state.company} onChange={this.updateCompany} />
                        </div>
                        <div className="form-group">
                            <label>Add Company Age </label>
                            <input type="text" className="form-control" value={this.state.age} onChange={this.updateAge} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Register Business" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default create;