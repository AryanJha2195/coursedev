import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecommendedTopics = () => {
  return (
    <Container>
      <Row>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>PostgreSQL</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>MySQL</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>SQL Server</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>Business Analytics</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>Oracle SQL</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>Data Analysis</Col>
      </Row>
      <Row>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>C++</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>Java</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>Python</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>Angular.JS</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>React.JS</Col>
        <Col style={{border:"2px solid Black", margin: "1rem", cursor: "pointer"}}>NEXT.JS</Col>
      </Row>
    </Container>
  )
}

export default RecommendedTopics