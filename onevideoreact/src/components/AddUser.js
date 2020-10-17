import React, { Component } from 'react';
const uniqid = require('uniqid');


class AddUser extends Component {

    state = {
        name : "",
        email : ""
    }

    onNameChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onEmailChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });   
    }
    onAddSubmit(e) {
        const {addUser} =this.props;
        const {name,email} = this.state;
        const newUser = {
            id: uniqid(),
            name :name,
            email :email
        }

        addUser(newUser);

        e.preventDefault();
    }
    
    render() {
        const {name,email} = this.state;
        return (
            <div className="card">
                <h4 className="card-header">Add New User</h4>
                <div className="card-body">
                    <form onSubmit = {this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Enter Name" 
                            className="form-control"
                            value = {name}
                            onChange = {this.onNameChange.bind(this)}>
                            </input>
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Enter Email" 
                            className="form-control"
                            value = {email}
                            onChange = {this.onEmailChange.bind(this)}>
                            
                            </input>
                        </div>
                        <button className="btn btn-danger btn-block" type="submit">Add New User</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddUser;