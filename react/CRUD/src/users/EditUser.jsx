import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';


export default function EditUsers() {
  let navigate = useNavigate();
  const {id} = useParams();
  
  const [user, setUser] = useState({
    name : '',
    username : '',
    email : '',
    phone : '',
    website : '',
  });

  useEffect(()=>{
    loaduser();
  },[]);

  const {name, username, email, phone, website} = user; 

  const onChangeInput = e => {
    setUser({...user, [e.target.name ]: e.target.value});

  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate('/');
  } 


  const loaduser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  }

  return (
    <div className="container w-50">
      <h2 className='my-4'>Edit Users</h2>
      <form onSubmit={e => onSubmit(e)}>
      <div class="mb-3">
        <input type="text" name = 'name' class="form-control" value={name} onChange={e => onChangeInput(e)} placeholder='Enter your name' />
      </div>

      <div class="mb-3">
        <input type="text" name='username' class="form-control" value={username} onChange={e => onChangeInput(e)}placeholder='Enter your Username' />
      </div>
      <div class="mb-3">
        <input type="email" name='email' class="form-control" value={email} onChange={e => onChangeInput(e)} placeholder='Enter your Email' />
      </div>
      <div class="mb-3">
        <input type="text" name='phone' class="form-control" value={phone} onChange={e => onChangeInput(e)} placeholder='Enter your Phone Number' />
      </div>
      <div class="mb-3">
        <input type="text" name='website' class="form-control" value={website} onChange={e => onChangeInput(e)} placeholder='Enter your Website' />
      </div>
     <button type="submit" class="btn btn-primary">Update User</button>
    </form>
    </div>
  )
}
