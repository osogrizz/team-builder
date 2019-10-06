import React, { useState } from 'react';

const Form = (props) => {
  console.log('props', props)

  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    role: ''
  })
 
  const handleInput = (evt) => {
    setNewMember({
      ...newMember,
      [evt.target.name]: evt.target.value,
    })
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setMembers([
      ...props.members,
      {
        name: newMember.name,
        email: newMember.email,
        role: newMember.role
      }
    ])
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: 
        <input type="text" name="name" onChange={handleInput} />
      </label>

      <label htmlFor="email">Email: 
        <input type="email" name="email" onChange={handleInput} />
      </label>
      <label htmlFor="role">Role: 
        <input type="role" name="role" onChange={handleInput} />
      </label>
      <button>submit</button>
    </form>  
  )
}

export default Form;