import React from 'react';
import {Carousel} from 'react-bootstrap';
import '../../styles/carousel.css';

const CarouselSlider = () => {
  return(
    <>
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="slide"
          src="https://wallpapercave.com/wp/wp4492340.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
            <div className='text1'>
          <h3>Where to next?</h3>
          <p></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="slide"
          src="https://www.gannett-cdn.com/presto/2022/03/17/USAT/168be99c-b253-4e54-a999-996d21d7458a-GettyImages-1296147185.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className='text2'>
          <h3>Find your perfect trip today!</h3>
          <p></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="slide"
          src="https://img.freepik.com/premium-photo/exotic-tropical-beach-landscape-background-wallpaper-sundown-beach-scene-travel-inspirational-summer-holiday-vacation-concept-tourism-relaxing_1484-2485.jpg?w=2000"
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className='text3'>
          <h3>Try somewhere new!</h3>
          <p></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
export default CarouselSlider