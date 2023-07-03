import React from 'react'
import userIcon from '../../pictures/userIcon.png'
import './loginc.css'
import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginFailed, loginStart, loginSuccess } from '../../redux/action/action'

export default function Loginc() {

  const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const myState = useSelector((state)=> state.setTheUser)
  const dispatch = useDispatch()

  const handleOnSubmit = async(event)=>{
    event.preventDefault();
    dispatch(loginStart())
    try{
      const res = await axios.post("/login",{
        email:emailRef.current.value,
        password:passwordRef.current.value
      })
      dispatch(loginSuccess(res.data));
      localStorage.setItem("user", JSON.stringify(res.data))
      console.log(myState.user);
      res.data && navigate("/")
    }catch(err){
      dispatch(loginFailed())
      alert("Wrong detail")
    }
  };

  return (
      <div className='mainUsername'>
      <div className="mainUser">
        <div className="userSection1">
          <h1>WELCOME!</h1>
          <span>Let's Connect With Us</span>
        </div>
        <form action="" className='userSection2' onSubmit={(event) => handleOnSubmit(event)}>
          <div className="profileImg">
            <img src={userIcon} alt="" />
          </div>
          <div className="inputSection">
            <input type="text" placeholder='Email' ref={emailRef} />
          </div><div className="inputSection">
            <input type="password" placeholder='Password' ref={passwordRef} />
          </div>
          <div className="letgoButton">
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
