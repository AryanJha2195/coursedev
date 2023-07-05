import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import databaseCoursesData from '../data/data.json';

const DatabaseCourseList = () => {
  return (
    <div className="container">
      <Row>
        {databaseCoursesData.database_courses.map((course, index) => (
          <Col md={4} key={index}>
            <Card style={{ width: '18rem', cursor: "pointer", border: "1px solid Black"}}>
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

export default DatabaseCourseList;
