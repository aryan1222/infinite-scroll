import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({username: '', password: ''});
  const { username, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(username === 'foo' && password === 'bar') {
      localStorage.setItem('username', JSON.stringify(username));

      setFormData({username : '', password : ''})
      navigate('/')
    }
  }

  return (
    <div className="login">
      <h1>Login !</h1>
      <form onSubmit={onSubmit}>
          <input
              type='text'
              placeholder='Username'
              id='username'
              value={username}
              onChange={onChange}
              autoComplete="off"
          />

          <input
              type='password'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
          />
          
          <button className="btn" type='submit'>Login</button>
      </form>

    </div>
  )
}

export default Login