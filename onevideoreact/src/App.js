import React,{Component} from 'react';
import AddUser from "./components/AddUser";
import Users from "./components/Users";
class App extends Component {

  

  

  render() {

    return (
      <div className="container">
        <h3>User App</h3>
        <hr/>
        <AddUser/>
        <hr/>
        <Users/>
      </div>
    );
  }
}
export default App;
