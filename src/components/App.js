
import React, { useState } from "react";
import './../styles/App.css';
import 'regenerator-runtime/runtime';


const App = () => {

  const [users,setUsers] = useState([]);

  async function fetchUsers(){
      let response = await fetch("https://reqres.in/api/users")
      let data = await response.json();

      setUsers(data.data)
  }
  console.log(users);


  return (
    <div>
        {/* Do not remove the main div */}
        <div className="header">
          <h1>Blue Whales</h1>
          <button className="btn" onClick={fetchUsers}>Get User List</button>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {
                users && users.map((user)=>
                <tr key={user.id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td><img src={`${user.avatar}`} alt="img"/></td>
                </tr>
                ) //: <tr><p>No data found to display</p></tr>
              }
            </tbody>
          </table>
          {
            users.length === 0  ? <p>No data found to display.</p> : '' 
          }
        </div>
    </div>
  )
}

export default App
