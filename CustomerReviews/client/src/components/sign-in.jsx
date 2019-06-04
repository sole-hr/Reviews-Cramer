import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class SignIn extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="med"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Title id="contained-modal-title-vcenter">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </Modal.Title>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <div style={{ display: "inline-block" }}>
              <Form.Check type="checkbox" label="Keep me logged in" />
              <Form.Text className="text-muted">ForgotPassword?</Form.Text>
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Modal.Footer>
          Not Member?
          <button
            className="btn btn-link collapsed"
            type="button"
            style={{ textDecoration: "underline", color: "black" }}
          >
            Join Now
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SignIn;
window.SignIn = SignIn;
