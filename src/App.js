import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">

        <h3>Dynamic Users: {users.length}</h3>
        <ol>
        {
          users.map(user => <li>{user.name}</li>)
        }
        </ol>
        
        {
          users.map(user => <Api
            key={user.id}
            name={user.name}
            email={user.email}
            adrs={user.address.street}
            phn={user.phone}
            work={user.company.name}
          >
          </Api>)
        }
      </header>
    </div>
  );
}

function Api(props) {

  const infoStyle = {
    border: '3px solid gray',
    margin: '10px',
    padding: '5px',
    borderRadius: '10px'
  }
  return (
    <div style={infoStyle}>
      <h5>Name: {props.name}</h5>
      <p>Email: {props.email}</p>
      <p> Address : {props.adrs} street </p>
      <p>Contact no: {props.phn}</p>
      <p>Work Place: {props.work} company</p>
    </div>
  )
}

export default App;
