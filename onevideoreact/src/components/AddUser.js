import React, { Component } from 'react';
import UserConsumer from '../context';
const uniqid = require('uniqid');


class AddUser extends Component {

    state = {
        name : "",
        email : ""
    }

 
    
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });   
    }
    onAddSubmit(dispatch,e) {
        e.preventDefault();
        const {name,email} = this.state;
        const newUser = {
            id: uniqid(),
            name :name,
            email :email
        };

        dispatch({ type : "ADD_USER", payload : newUser});

        
    }
    
    render() {
        const {name,email} = this.state;
        
        return<UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="card">
                            <h4 className="card-header">Add New User</h4>
                            <div className="card-body">
                                <form onSubmit = {this.onAddSubmit.bind(this,dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" 
                                        name="name" 
                                        id="name" 
                                        placeholder="Enter Name" 
                                        className="form-control"
                                        value = {name}
                                        onChange = {this.onChange.bind(this)}>
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
                                        onChange = {this.onChange.bind(this)}>
                                        
                                        </input>
                                    </div>
                                    <button className="btn btn-danger btn-block" type="submit">Add New User</button>
                                </form>
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>
        
        
    }
}
export default AddUser;