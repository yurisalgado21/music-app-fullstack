import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formIsValid = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = userName.length >= 8 && regexEmail.test(email) && password.length >= 6;
    return isValid;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/login', {
            userName,
            email,
            password,
        });
        console.log(response.data);
        navigate('/home')
    } catch (error) {
        console.error('Error during Login:', error);
    }
  }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <label>
                UserName:
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <br />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br />
            </label>
            <label>
                Password:
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
            </label>
            <button type="submit" disabled={!formIsValid()} >Login</button>
        </form>
    </div>
  )
}
