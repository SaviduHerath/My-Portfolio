
import './navbar.css';
import React, { useState } from 'react'
import logoT from '../../assets/logoT.png'
import contact from '../../assets/telephone.png'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png'


const NavBar = () => {

  const [showMenu,setShowMenu] = useState(false)

  return (
    <nav className='navbar'>
        <img src={logoT} alt='logo' className='logo'></img>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItems'>Skills</Link>

        </div>
        <button className='desktopMenuBtn' onClick={()=> {
           document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img className='desktopMenuImg' src={contact}></img>Contact Me</button>

        <img src={menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}></img>
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>

        </div>
    </nav>
  )
}

export default NavBar