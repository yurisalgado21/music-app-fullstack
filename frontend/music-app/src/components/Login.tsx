import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginIsNotVisible, setLoginIsNotVisible] = useState(false);
  const [hideOrShow, setHideOrShow] = useState(false);
  const [changeHidePassword, setChangeHidePassword] = useState('password')

  const hidePasswordOrShow = () => {
    if (hideOrShow === false) {
      setHideOrShow(true);
      setChangeHidePassword('text');
    } else {
      setHideOrShow(false);
      setChangeHidePassword('password');
    }
  }

  const formIsValid = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = userName.length >= 8 && regexEmail.test(email) && password.length >= 6;
    return isValid;
  }
  
  const formNewPasswordIsValid = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regexEmail.test(email) && password.length >= 6;
    return isValid;
  }

  const handleToGoBack = () => {
    setLoginIsNotVisible(false)
  }

  const handleChangePassword = () => {
    setLoginIsNotVisible(true)
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

  const handleNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:3000/login', {
          email,
          password,
      });
      console.log(response.data);
      setLoginIsNotVisible(false)
      setEmail('')
      setPassword('')
  } catch (error) {
      console.error('Error during Login:', error);
  }    

  }

  return (
    <div>
      {!loginIsNotVisible && (
        <>
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
                  <input type={changeHidePassword} value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <button type="button" onClick={hidePasswordOrShow}>Hide Or Show</button>
                  <br />
              </label>
              <button type="submit" disabled={!formIsValid()} >Login</button>
          </form>
          <button type="button" onClick={handleChangePassword}>Forgot my password</button>
        </>
      )}
      {loginIsNotVisible && (
        <>
          <form onSubmit={handleNewPassword}>
              <label>
                  Email:
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <br />
              </label>
              <label>
                  New Password:
                  <input type={changeHidePassword} value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <button type="button" onClick={hidePasswordOrShow}>Hide Or Show</button>
                  <br />
              </label>
              <button type="submit" disabled={!formNewPasswordIsValid()}>Change Password</button>
              <button type="button" onClick={handleToGoBack}>To go back</button>
          </form>
        </>
      )}
    </div>
  )
}
