import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  })

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3003/users');
    setUsers(result.data.reverse());
  }

  const deleteUser = async id =>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  }


  return (
    <div className='container'>
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead className='table-dark'>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className='btn btn-primary ' to={`/users/${user.id}`}>View</Link>
                    <Link className='btn btn-outline-primary ms-2' to={`/users/edit/${user.id}`}>Edit</Link>
                    <Link className='btn btn-outline-primary ms-2' onClick={() => deleteUser(user.id)}>Delete</Link>
                  </td>
                </tr>
              ) )
            }
          </tbody>
        </table>


      </div>
    </div>
  )
}
