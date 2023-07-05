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
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-size"
          src={ai}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={sql}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={datas}
          alt="Fourth slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={java}
          alt="Fifth slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>      
    </Carousel>
    </>
  )
}

export default Carsul