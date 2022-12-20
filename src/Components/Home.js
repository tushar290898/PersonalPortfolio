import React, { useEffect } from 'react'
import '../Components/Home.css'
import Skills from './Skills';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Home() {

    useEffect(()=>{
        AOS.init({duration:3000})
    })

    return (
        <div>
            <div className='home-section'>
                <div className='home-content' data-aos="fade-up">
                    <h1>Hey, My name is Tushar</h1>
                    <p>A Frontend developer with passion for learning and creating.</p>
                </div>
            </div>
            <Skills/>
        </div>
    )
}

export default Home
//#0B4B9F