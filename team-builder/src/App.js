import React, { useState } from 'react';
import './App.css';
import Form from './components/Forms';

function App() {

  const [members, setMembers] = useState([]);

  return (
    <div className="App">
      <div>
        <Form setMembers={setMembers} members={members}/>
        <div>{members.map( (member, index) => {
          return (
            <div>
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
            </div>
          ) 
        })}</div>
      </div>
    </div>
  );
}

export default App;
