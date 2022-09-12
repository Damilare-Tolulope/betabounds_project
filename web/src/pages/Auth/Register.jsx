import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import register from '../../assets/images/register.svg'


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpass, setConfirmPass] = useState('')

  const validatePass = (value) => {
    setConfirmPass(value);
    
  }
  const handleRegister = () => {
    if(name && email && password && confirmpass){
      window.location = "/dashboard"
    }
  }
  
  useEffect(() => {
    
    const confirm = document.getElementById("confirm");
    if(confirmpass && confirmpass !== password){
      confirm.style.border = "1px solid red"
    } else{
      confirm.style.border = "1px solid"
    }
  }, [password, confirmpass])
  

  return (
    <div className='auth register'>
      <img src={register} alt="register" />
      <div className='auth_input'>
        <form>
          <h2>Sign Up</h2>

          <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='Name' />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
          <input id="confirm" value={confirmpass} onChange={(e) => validatePass(e.target.value)} type="password" placeholder='Confirm Password' />

          <Button handleClick={handleRegister} > Sign Up </Button>

          <p>Or sign up with</p>
          <div className='signinWith'>
            <p>F</p>
            <p>G</p>
          </div>
        </form>

        <p className='dont_'>Already have an account? <Link to="/login"><span>Login</span></Link></p>
      </div>
    </div>
  )
}

export default Register