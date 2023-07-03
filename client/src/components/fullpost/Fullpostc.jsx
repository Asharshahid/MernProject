import React from 'react'
import './fullpostc.css'
import blogPostPic from '../../pictures/blogPostPic.jpg'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
 
function Fullpostc() {

  const navigate = useNavigate()

  const myState = useSelector((state)=> state.setTheUser)
  const user = myState.user

  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const [singlePost, setSinglePost] = useState([])

  useEffect(() => {
    const fetchData = async()=>{
      try {
        const res = await axios.get(`/getpost/${id}`);
        setSinglePost(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[id])


  // DELETE POST BY USING ID

  const handleDeletePost = async(id)=>{
    try {
      const res = await axios.delete(`/deletepost/${id}`);
      console.log(res.data);
      // res.data && window.location.replace("/")
      res.data && navigate("/")
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='singlePost'>
        <div className="siglePostImage">
           <img src={blogPostPic} alt="" />
        </div>        
        <div className="singlePostTitleArea">
            <h4>{singlePost.title}</h4>
            <div className="singlePostIcon" style={{display:user._id===singlePost.userId?"inline-block":"none"}}>
               <Link to={`/updatepost/${singlePost._id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
               <Link onClick={()=>handleDeletePost(singlePost._id)}><i className="fa-solid fa-trash-can"></i></Link>
            </div>
        </div>
        <div className="singlePostAuthorTime">
           <div className="author">Author : 
           <Link to='/' className="authorNameLink">{singlePost.username}</Link> 
           </div>
           <div className="singlePostTime">{new Date(singlePost.createdAt).toDateString()}</div>
        </div> 
        <div className="singlePostDescrption">{singlePost.desc}</div>
    </div>
  )
}

export default Fullpostc