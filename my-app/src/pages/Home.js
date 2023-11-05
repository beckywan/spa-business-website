import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  '/images/wedding-nails.webp',
  '/images/night-nail.jpg',
  '/images/simple-nail.jpg',
];

const Home = () => {
    return (
      <div className='home'>
        <h1>Nail Care, Spa, Beauty</h1>
         <div className="first-nails">
             <img src="/images/fall-nails.jpg" alt="Image of Beautiful Nail Art by Us"/>
             <p>Taking care of your nails is a part of taking care of yourself. Do something for you by checking out Nail Spa. </p>
         </div>  

      <div className="slide-container" style={{ width: "100%" , height: "100%"}}>
        <Slide>
          {
            slideImages.map((each, index) => <img key={index} style={{width: "100%", height: "100%"}} src={each} />)
          }
        </Slide>
      </div>
      </div>
    )
  }
    
export default Home;