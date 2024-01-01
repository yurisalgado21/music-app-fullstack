import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function RegisterUser() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const displayInvalidPassword = 'invalid-password-check';
  const displayValidPassword = 'valid-password-check';
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formIsValid = () => {
    const isValid = userName.length >= 8 && regexEmail.test(email) && password.length >= 6;
    return isValid;
  }
  
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
            <p className={userName.length < 8
            ? displayInvalidPassword : displayValidPassword}>Possuir mais de 8 caracteres</p>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <br />
            <p className={regexEmail.test(email) ? displayValidPassword : displayInvalidPassword}>Ter um email válido</p>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <p className={password.length < 6 ?
            displayInvalidPassword : displayValidPassword}>Possuir mais de 6 caracteres</p>
            <br />
            <button type="submit" disabled={!formIsValid()} >Register</button>
        </form>
    </div>
  )
}
