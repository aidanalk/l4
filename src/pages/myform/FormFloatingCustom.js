import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux'
import { addFormDataAction } from '../../redux/actions';


function FormFloatingCustom() {
  
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    username: '',
    rememberMe: false
  })

  const formValue = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const addForm = (event) => {
    event.preventDefault()
    dispatch(addFormDataAction(form))
  }

  return (
    <Form onSubmit={addForm}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="name"
            onChange={formValue}
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Username" onChange={formValue} />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Remember me"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormFloatingCustom;