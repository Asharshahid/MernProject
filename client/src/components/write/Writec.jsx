import React from 'react';
import './writec.css'
import blogPostPic from '../../pictures/blogPostPic.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

export default function Writec() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  
  const handlePostSubmit = async(e)=>{
    e.preventDefault();
    try{

      const res = await axios.post("/post", {
        title,
        desc
      })
      res.data && navigate("/")
      console.log(res.data)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='write'>
      <div className="writeImage">
        <img src={blogPostPic} alt="" />
      </div>
        <form action="" className="writeForm" onSubmit={(e) => handlePostSubmit(e)}>
            <div className="writeFormGroup fileTitle">
                <div className='twoAreaFileAndTitle'>
                  <label htmlFor="fileInput">
                   <i className="fa-solid fa-circle-plus"></i>
                   </label>
                   <input type="file" id='fileInput' style={{display:"inline-block"}} />
                </div>
                <input type="text" onChange={e=>{setTitle(e.target.value)}} className='writeInput titleInput' style={{display:"inline-block"}} placeholder='Title Of Your Post'  />
            </div>
            <div className="writeFormGroup description" >
                <textarea placeholder='Write description' onChange={e=>{setDesc(e.target.value)}} className='writeInput writeText' type="text"></textarea>
            </div>
            <button className="writeSubmit" type='submit'>Publish</button>
        </form>
    </div>
  )
}
