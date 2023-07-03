import './header.css'
import background1 from './background1.jpg'

export default function header() {
  return (
    <div className="header">
      {/* <div className="headerTextItems">
        <span className='textItemSm'>React , Express, Mongodb & Node</span>
        <span className='textItemLg'>Blog</span>
      </div> */}
      <div className="headerImage">
        {/* <img src="https://images.unsplash.com/photo-1610295388717-7c72886bd20a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /> */}
        <img src={background1} alt="" />
      </div>
    </div>
  )
}
