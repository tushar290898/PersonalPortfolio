import React ,{useEffect}from 'react'
import '../Components/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
function About() {

    useEffect(()=>{
        AOS.init({duration:2500})
    })

  return (
    <div className='About-section'>
        <div className='about-container' data-aos="fade-right">
            <h1>About Myself</h1>
            <p>As an aspiring web Developer, I'm learning full stack web development and server based applications. I take part in creating websites from frontend and backend.</p>
            <p>As a Web developer I also analyze user needs to ensure the proper content, graphics and underlying structure are used to meet both the goals of the user and the website’s owner</p>
            <p>In my free time, I enjoy working on a couple of personal projects.</p>
        </div>
        
    </div>
  )
}

export default About