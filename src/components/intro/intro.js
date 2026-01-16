import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import download from '../../assets/download.png'
import bg from '../../assets/bg.jpeg'
import cvn from '../../assets/cvn.pdf'


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Savidu</span> <br/>
            Web Developer</span>
            <p className='introPara'> I build efficient and creative software solutions. Explore my projects, skills, and experience.
              <br></br>
            </p>
             <a href={cvn} download className="btn">
                <img className="hirebtn" src={download} alt="Hire me" />
                       Download CV
            </a>

        </div>

        <img src={bg} alt='Profile' className='bg'></img>
    </section>
  )
}

export default Intro