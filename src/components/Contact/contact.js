import React, { useRef } from 'react'
import './contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import html from '../../assets/html.jpg'
import css from '../../assets/css.jpg'
import js from '../../assets/js.jpg'
import react from '../../assets/react.jpg'
import java from '../../assets/java.jpg'
import nodejs from '../../assets/nodejs.jpg'
import mongodb from '../../assets/mongodb.jpg'
import git from '../../assets/git.jpg'
import mysql from '../../assets/mysql.jpg'
import figma from '../../assets/Figma.jpg'
import vscode from '../../assets/vscode.jpg'
import eclipse from '../../assets/eclipse.jpg'
import linkedin from '../../assets/linkedin.jpg'

import UIDesign from '../../assets/ui-design.png'
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_exvzx7u', 'template_il5nj5c', form.current, {
        publicKey: 'PwFN26zwcRxy4bC2N',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Skills</h1>
            <p className='clientDesc'>I have experience in frontend and backend development using modern web technologies. I enjoy building responsive applications, managing databases, and continuously learning new tools to improve my development skills.</p>
            <div className='skillBar'>
                <img src={UIDesign} alt='UI Design' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h1>Skills & Expertise:</h1>
                    <h2>Programming Languages:</h2>
                    <p> Java, C, C++, HTML, CSS, JavaScript, PHP</p>
                    <h2> Frameworks & Tools:</h2>
                    <p>JSP/Servlets, React, MySQL, Git, Apache Tomcat</p>
                    <h2> Soft Skills:</h2>
                    <p>  Problem-solving, teamwork, attention to detail</p>
                </div>
                
            </div>
            <div className='clientImgs'>
                <img src={html} alt='html' className='clientImg'></img>
                <img src={css} alt='css' className='clientImg'></img>
                <img src={js} alt='js' className='clientImg'></img>
                <img src={react} alt='react' className='clientImg'></img>
                <img src={java} alt='java' className='clientImg'></img>
                <img src={nodejs} alt='nodejs' className='clientImg'></img>
                <img src={mongodb} alt='mongodb' className='clientImg'></img>
                <img src={mysql} alt='mysql' className='clientImg'></img>
                <img src={git} alt='git' className='clientImg'></img>
                <img src={figma} alt='figma' className='clientImg'></img>
                <img src={vscode} alt='vscode' className='clientImg'></img>
                <img src={eclipse} alt='eclipse' className='clientImg'></img>

            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form}  onSubmit={sendEmail}>
              <input type='text' className='name' placeholder='Your Name' name='your_name'></input>
              <input type='email' className='email' placeholder='Your Email' name='your_email'></input>
              <textarea className='msg' name='message' rows='5' placeholder='Your Message' ></textarea>
              <button type='submit' className='submitBtn' value='send'>Submit</button>
              <div className='links'>
                <a href="https://www.facebook.com//savidu.herath.2025/" target="_blank" rel="noopener noreferrer">
                   <img src={FacebookIcon} alt="Facebook" className="link" />
                </a>
                <a href="https://github.com/SaviduHerath" target="_blank" rel="noopener noreferrer">
                   <img src={git} alt="git" className="link" />
                </a>

                <a href="https://www.linkedin.com/in/savidu-herath-105442385/" target="_blank" rel="noopener noreferrer">
                   <img src={linkedin} alt='linkedin' className='link'></img>
                </a>

                
                
                
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact