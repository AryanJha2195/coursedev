import React from 'react';
import CourseCard from './CourseCard.jsx';
import coursesData from '../data/data.json'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CourseList = () => {
  return (
    <div className="container">
      <Row>
        {coursesData.courses.map((course, index) => (
          <Col md={4} key={index} >
            <Card style={{ width: '18rem', cursor: "pointer", border: "1px solid Black" }}>
              <Card.Img variant="top" src={course.image} style={{width:"287px", height:"159px"}} alt={course.title} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Card.Text>${course.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    
  );
};

export default CourseList;