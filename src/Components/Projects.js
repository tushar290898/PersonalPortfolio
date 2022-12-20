import React, {useEffect} from 'react'
import '../Components/Project.css'
import Card from './Card'
import img1 from '../assets/images/Project1.png'
import img2 from '../assets/images/Project2.png'
import img3 from '../assets/images/Project3.png'
import img4 from '../assets/images/Project4.png'
import img5 from '../assets/images/Project5.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Projects() {
  useEffect(()=>{
    AOS.init({duration:2500})
})

  return (
    <div className='project-section' data-aos="fade-left">
            <Card
                image={img1}
                title="Disney Clone"
                info="This is responsive clone webapp based on technology HTML, CSS, Javascript, React, Firebase.
                      User can login and logout using google authentication."
                code="https://github.com/tushar290898/disneyPlusClone"
                live="https://disneyclone-f233e.web.app"
            />
             <Card
                image={img2}
                title="Linkdin Clone"
                info="This is a clone webapp based on technology HTML, CSS, Javascript, React, Firebase.
                     user can login and logout using firebase and post feed."
                code="https://github.com/tushar290898/clone-linkdn"
                live="https://linkdn-clone-5597b.web.app/"
            />  
              <Card
                image={img3}
                title="Weather App"
                info="This is a responsive webapp based on technology HTML CSS Javascript React and External API.
                User can see any temperature of any city."
                live="https://weatherapp-f2949.web.app"
                code="https://github.com/tushar290898/WeatherApp"
            />  
              <Card
                image={img4}
                title="Movie App"
                info="This is a responsive webapp based on technology HTML CSS Javascript React and External API.
                User can search any favourite movie."
                code="https://github.com/tushar290898/MovieApp"
                live="https://movieapp-fedb3.web.app/"
            />  
             <Card
                image={img5}
                title="Travel Website"
                info="This is responsive website of travel company based on technology HTML CSS Javascript React."
                live="https://mrtravel-d6971.web.app/"
                code="https://github.com/tushar290898/Travel-Compnay"
            />  
        
    </div>
  )
}

export default Projects