import React from "react"
import {Form,Button} from 'react-bootstrap';
import PrimaryLayout from "../layouts/PrimayLayout"

const IndexPage = () => (
<PrimaryLayout colum="col-10">
            <div className="p-5">
            <h1>Contact Us</h1>
          <Form>
            <Form.Group controlId="ContactForm.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="ContactForm.Subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject here" />
            </Form.Group>
             <Form.Group controlId="ContactForm.Message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="ContactForm.submit">
              <Button>Submit Message</Button>
            </Form.Group>
          </Form>
            </div>
          
</PrimaryLayout>
)

export default IndexPage
