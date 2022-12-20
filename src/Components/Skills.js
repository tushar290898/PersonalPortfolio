import React ,{ useEffect }from 'react'
import '../Components/Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Skills() {

    useEffect(()=>{
        AOS.init({duration:2500})
    })

    const skills = (skill) => (
        <div className='skills-buttons'><h3>{skill}</h3></div>
    )


    return (
        <div className='skills-container' >
              <h1>Frontend Skills</h1>
            <div className='skills-content' data-aos="fade-left">
                {skills("HTML")}
                {skills("CSS")}
                {skills("JAVASCRIPT")}
                {skills("BOOTSTRAP")}
                {skills("MATERIA UI")}
                {skills("REACT JS")}
            </div>
        </div>
    )
}

export default Skills