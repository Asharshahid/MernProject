import './app.css'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Fullpost from "./pages/Fullpost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Topbar from "./components/topbar/Topbar";
import Writepost from "./pages/Writepost";
import { useSelector } from "react-redux";
import Updatepost from './pages/Updatepost';


function App() {

  const myState = useSelector((state)=> state.setTheUser)
  const user = myState.user

  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path='/'          element={<Home/>} />
        <Route path='/contact'   element={<Contact/>} />
        <Route path='/about'     element={<About/>} />
        <Route path='/write'     element={user?<Writepost/>:<Login/>} />
        <Route path='/profile'   element={user?<Profile/>:<Login/>} />
        <Route path="/post/:_id" element={<Fullpost/>} />
        <Route path="/updatepost/:_id" element={user?<Updatepost/>:<Login/>} />
        <Route path='/login'     element={user?<Home/>:<Login/>} />
        <Route path='/register'  element={user?<Home/>:<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
