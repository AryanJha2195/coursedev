import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


const QueryData = () => {
  return (
    <Stack direction="horizontal" gap={3} style={{margin:"0 1rem"}}>
    <Form.Control className="me-auto" placeholder="For Any Query Write Here..." />
    <Button variant="secondary">Submit</Button>
    <div className="vr" />
    <Button variant="danger">Reset</Button>
  </Stack>
  )
}

export default QueryData