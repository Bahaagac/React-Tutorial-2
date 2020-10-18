import React, {Component} from "react";
import User from "./User"
import UserConsumer from "../context";


class Users extends Component {

    render(){
        return( 
            <UserConsumer>
                {
                    value => {
                        const {users} = value;
                        return(
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => {
                                            const {id,name,email} = user;
                
                                            return( <User
                                                key = {id}
                                                id = {id}
                                                name = {name}
                                                email = {email}
                                                
                                            />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        )
                    }
                }

            </UserConsumer>
        )
        
    }
}
export default Users;