import React from 'react'
import './works.css'

import digital from '../../assets/Digital_clock.jpg'
import stopwatch from '../../assets/stopwatch.jpg'
import calculater from '../../assets/calculater.jpg'






const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <div className='worksImgs'>
            <img src={digital} alt='Portfolio1' className='worksImg'></img>
            <div>
            <h1>Digital Clock App</h1>
            <br></br>
            <h2>Technologies:</h2>
            <p>HTML, CSS, JavaScript</p>
             <h2>Description:</h2>
            <p>A real-time digital clock with customizable themes and time display formats.</p>
             <h2>Link:</h2>
            <p>https://github.com/SaviduHerath/Digital-Clock-Program.git</p>
            </div>
        </div>

         <div className='worksImgs'>
            <img src={stopwatch} alt='Portfolio1' className='worksImg'></img>
            <div>
            <h1>Stopwatch App</h1>
            <br></br>
            <h2>Technologies:</h2>
            <p>HTML, CSS, JavaScript</p>
             <h2>Description:</h2>
            <p>A stopwatch with start, stop, and reset functionalities for accurate time tracking.</p>
             <h2>Link:</h2>
            <p>https://github.com/SaviduHerath/Stopwatch-program.git</p>
            </div>
        </div>

        <div className='worksImgs'>
            <img src={calculater} alt='Portfolio1' className='worksImg'></img>
            <div>
            <h1>Calculater-Program</h1>
            <br></br>
            <h2>Technologies:</h2>
            <p>HTML, CSS, JavaScript</p>
             <h2>Description:</h2>
            <p>It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. </p>
             <h2>Link:</h2>
            <p>https://github.com/SaviduHerath/Calculater-Program.git</p>
            </div>
        </div>
        
        
    </section>
  )
}

export default Works