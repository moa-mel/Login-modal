import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import {addUser} from "./features/userSlice"
import welcomeimg from './welcomeback.svg';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import Button from "./components/Button"

const Login = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: ''
   })

   const handleAddName = () =>{
    setValues({name:''})
    dispatch(addUser({
      id: uuidv4(),
      name: values.name
    }))
    navigate('/user')
   }
  return (
    <div className='main-login'>
                <div className="login-contain">
                 <div className="left-side">
                        <form >
                        <label>Username</label>
                            <input placeholder="Enter your username..." type="text" 
                            value={values.name}
                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                            />
                        <label>Password</label>
                            <input placeholder="Enter password" type="password" 
                            />
                         </form>
                     <Button onClick={handleAddName} >Login</Button>
                 </div>
                  <div className="right-side">
                    <div className="welcomeNote">
                        <h3>Welcome Back!</h3>
                    </div>
                    <div className="welcomeImg">
                        <img src={welcomeimg} id='wel-img-id' alt=""  />
                    </div>
                  </div>

                </div>
        </div>
  )
}

export default Login
