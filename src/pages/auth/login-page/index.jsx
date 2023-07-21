import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const LoginPage = () => {
  return (
    <>
      <Row className="justify-content-center ">
        <Col sm="12" md="12" lg="6">
          <Form>
            <Form.Group controlId="loginForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="loginForm.password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* checkbox  */}
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me out"
                className="mt-3"
              />
            </Form.Group> */}
            <Button variant="primary " className="w-100 mt-3" type="submit">
              <i className="fa-solid fa-right-to-bracket" />
              &nbsp;Login
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
