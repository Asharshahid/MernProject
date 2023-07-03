import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Posts from '../components/posts/Posts'
// import { useEffect } from 'react'
// import axios from "axios";


function Home() {

  // useEffect(()=>{
  //   const fetchPost = async()=>{
  //     const res = await axios.get("/getallpost")
  //     console.log(res.data);
  //   }

  //   fetchPost()
  // },[])
  return (
    <div>
      <Header/>
      <Posts/>
      <Footer/>
    </div>
  )
}

export default Home