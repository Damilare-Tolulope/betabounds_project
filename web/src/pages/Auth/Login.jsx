import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Button from '../../components/Button'
import login from '../../assets/images/login.svg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (e) => {
    e.preventDefault()
    if(email && password){
        console.log(email,password)
        window.location = "/dashboard"
        // return <Navigate to='/dashboard' replace />
      }
      return
  }

  return (
    <div className='auth'>
      <img src={login} alt="login" />
      <div className='auth_input'>
        <form>
          <h2>Login as a free membership</h2>

          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />

          <Button handleClick={handleLogin} > Login </Button>

          <p>Or login with</p>
          <div className='signinWith'>
            <p>F</p>
            <p>G</p>
          </div>
        </form>

        <p className='dont_'>Don't have an account? <Link to="/register"><span>Sign Up</span></Link></p>
      </div>
    </div>
  )
}

export default Login