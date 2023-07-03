import {Link, useNavigate} from 'react-router-dom'
import './topbar.css'
import axios from 'axios'
import { useSelector, useDispatch} from 'react-redux'
import {loginStart, logout } from '../../redux/action/action'

function Topbar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const myState = useSelector((state)=> state.setTheUser)
  const user = myState.user

  const handleLogout = async(event)=>{
      event.preventDefault();
      dispatch(logout())
      try{
        const res = await axios.get("/logout")
        localStorage.removeItem("user");
        res.data && navigate("/login")
  
      }catch(err){
        console.log(err)
        dispatch(loginStart())
      }
    };

    const linkStyle = {
      display: user ? 'block' : 'none',
    };
    const linkStyle2 = {
      display: user ?'none':'block',
    };

  return (

    <nav className="navbar">
        <h1>Logo</h1>
        <input type="checkbox" style={{display:"none"}} id="click"/>
        <label htmlFor="click" className="menu-btn">
            <i className="fas fa-bars"></i>
        </label>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li style={linkStyle}><Link to="/write">Write</Link></li>
            <li style={linkStyle2}><Link to="/login">Login</Link></li>
            <li style={linkStyle2}><Link to="/register">Register</Link></li>
            <li style={linkStyle}><Link to="/logout"onClick={(event) => handleLogout(event)} >Logout</Link></li>

        </ul>
    </nav>
  )
}

export default Topbar;