import React from 'react'
import './skill.css'
import WebDesign from '../../assets/website-design.png'




const Skill = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About me</span>
        <span className='skillDesc'>Hi! I’m Savidu Herath, a passionate Software Engineering student at SLIIT University. 
I love building practical and creative solutions using Java, Web technologies, and modern frameworks.</span>
        <div className='skillBars'>
            
            <div className='skillBar'>
                <img src={WebDesign} alt='Web Design' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h1>Education & Experience:</h1>
                    <p>- Currently pursuing a Software Engineering degree at SLIIT University</p>
                    <p>- Completed projects like a Tourism and Booking Management System, Digital Clock & Stopwatch Apps, and more</p>
                    <p>- Experience in Java,MERN, Web Development, and Database Management</p>
                </div>
            </div>
           
        </div>
       
    </section>
  )
}

export default Skill