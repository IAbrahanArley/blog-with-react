import React from 'react'

import styles from './login.module.css'
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/userAuthentication';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')
    const user = {
      email,
      password
    };
    const res = login(user);

    console.log(res);
  };

  useEffect(() => {

    if (authError) {
      setError(authError);
    }

  }, [authError]);
  return (
    <div className={styles.login}>
      <h1>
        Entrar
      </h1>
      <p>Faça login para realizar post</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span> Email:</span>
          <input type='email' name='email'
            required
            placeholder='Email do usuário'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </label>
        <label>
          <span> Senha:</span>
          <input type='password' name='password'
            required
            placeholder='Sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!loading && <button className='btn'>Entrar</button>}
        {loading && (<button className='btn' disabled>
          Aguarde...
        </button>)}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login
