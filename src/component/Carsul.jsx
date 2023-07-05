import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../styles/carsul.css';
import javascript from '../image/javascriptfull.png';
import ai from '../image/AI.webp';
import datas from '../image/data science.webp'
import java from '../image/java.webp'
import sql from '../image/sql.png'

const Carsul = () => {
  return (
    <>
<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carousel-size"
          src={javascript}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-size"
          src={ai}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={sql}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={datas}
          alt="Fourth slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={java}
          alt="Fifth slide"
        />
        
      </Carousel.Item>      
    </Carousel>
    </>
  )
}

export default Carsul