import './posts.css'
import Post from '../post/Post'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async()=>{
      try {
        const res = await axios.get("/getallpost");
        setPosts(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[posts.data])

  return (
    <div className='posts'>
      {posts.map( (p)=>(
        <Post post={p} key={p._id} />
      )).reverse()}
    </div>
  )
}
