import './post.css'
import {Link} from "react-router-dom"; 
import blogPostPic from '../../pictures/blogPostPic.jpg'


export default function Post({post}) {
  return (

    <div className="project">
      <div className="projectImage">
        <img src={blogPostPic} alt="Blog Post" />
      </div>
      <div className="projectInfo">
        <div className="projectStatusAndDate">
          <span className="type1">{post.username}</span>
          <span className="type2">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <div className="projectName">
          <h1>{post.title}</h1>
        </div>
        <div className="twoButton">
        <Link className="btn editBtn" to={`/post/${post._id}`}>Full Post</Link>
          {/* <Link className="btn editBtn" to={"/about"}>Update</Link>
          <button className="btn" to="github.com">Delete</button> */}
        </div>
        <div className="descDiv">
          <p className="postDescrpt">{post.desc}</p>
        </div>
      </div>
    </div>
  )
}
