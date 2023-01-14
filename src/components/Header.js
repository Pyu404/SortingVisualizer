import React,{useState,useEffect} from 'react'
import './header.css'

function Header() {
    const [showHeaderBar,setShowHeaderBar]=useState(true)

    // const contactHandler=()=>{
    //     setShowHeaderBar(!showHeaderBar)
    // }
    // <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
    //   </div>
  return (
    <div className="header">
      <div className="header-logo">Algo<span>Visuals</span></div>
    </div>
  )
}

export default Header