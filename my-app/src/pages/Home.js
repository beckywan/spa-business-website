import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  '/images/nail8.jpg',
  '/images/nail6.jpg',
  '/images/nail9.jpg',
  '/images/nail10.jpg',
  '/images/nail5.jpg',
  '/images/nail11.jpg',
  '/images/nail4.jpg',
  '/images/nail3.jpg',
  '/images/nail2.jpg',
  '/images/nail1.jpg',
];

const Home = () => {
    return (
      <div className='home'>
        <h1>Nail Care, Spa, Beauty</h1>
         <div className="first-nails">
             <img src="/images/nail7.jpg" alt="Image of Beautiful Nail Art by Us"/>
             <br></br>
             <p>Taking care of your nails is a part of taking care of yourself. Do something for you by checking out Dynamite Nails. </p>
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