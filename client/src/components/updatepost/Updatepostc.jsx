import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import blogPostPic from '../../pictures/blogPostPic.jpg'
import { useEffect } from 'react';
import '../write/writec.css'

function Updatepostc() {

  const navigate = useNavigate()

  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const [data, setData] = useState({});
  const [titleInput, setTitleInput] = useState('');
  const [descInput, setDescInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/getpost/${id}`);
        setData(res.data);
        setTitleInput(res.data.title);
        setDescInput(res.data.desc);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleTitleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescInput(e.target.value);
  };

  const handleUpdateSubmit = async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.put(`/updatepost/${id}`, {
          title:titleInput,
          desc:descInput
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
        <form action="" className="writeForm" onSubmit={(e)=>handleUpdateSubmit(e)}>
            <div className="writeFormGroup fileTitle">
                {/* <div className='twoAreaFileAndTitle'>
                  <label htmlFor="fileInput">
                   <i className="fa-solid fa-circle-plus"></i>
                   </label>
                   <input type="file" id='fileInput' style={{display:"inline-block"}} />
                </div> */}
                <input type="text" value={titleInput} onChange={handleTitleChange} className='writeInput titleInput' style={{display:"inline-block"}} placeholder='Title Of Your Post'  />
            </div>
            <div className="writeFormGroup description" >
                <textarea placeholder='Write description' value={descInput} onChange={handleDescChange} className='writeInput writeText' type="text"></textarea>
            </div>
            <button className="writeSubmit" type='submit'>Update</button>
        </form>
    </div>
  )
}

export default Updatepostc