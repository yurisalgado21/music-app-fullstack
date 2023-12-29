import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function RegisterUser() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/user', {
            userName,
            email,
            password
        });
        console.log(response.data);
        navigate('/login')
    } catch (error) {
        console.error('Error during registration:', error);
    }
  }

  return (
    <div>
        <h2>RegisterUser</h2>
        <form onSubmit={handleRegister}>
            <label>
                Username:
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <br />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}
