import React, {Component} from "react";
import UserConsumer from "../context";


class User extends Component {
    onDeleteClick(dispatch,e) {
        const {id} = this.props;
        dispatch({type : "DELETE_USER", payload : id})
        
    }
    render() {
        const {id,name,email} = this.props;

        return(
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td><button onClick = {this.onDeleteClick.bind(this,dispatch)} 
                                className="btn btn-danger">Delete</button></td>                
                            </tr>
                        )
                    }
                }
            </UserConsumer>
        )

        
    }
}
export default User;