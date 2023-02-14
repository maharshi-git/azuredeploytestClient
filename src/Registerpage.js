import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PurpleForm = (navigate) => {

    // const history = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can replace the console.log with your own logic to submit the form data
  };

  return (
    <Form onSubmit={handleSubmit} className="smallMargin">
      <Form.Group controlId="formName" className='smallMargin'>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="formSurname" className='smallMargin'>
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" name="surname" placeholder="Enter your surname" value={formData.surname} onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="formAddress" className='smallMargin'>
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="formPhone" className='smallMargin'>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
      </Form.Group>

      <Button variant="primary" type="submit" className='smallMargin appButtonPurple'>Register</Button>
      <p className='smallMargin'>Already have an account? <Link to="/Login">Login</Link></p>
    </Form>
  );
};

export default PurpleForm;
