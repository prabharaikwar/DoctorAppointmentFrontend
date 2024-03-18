import React from "react";
import "./AppointmentDetails.css";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import Appointment from "../../image/appointment.jpg";

const AppointmentDetails = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={6}>
          <h1>
            Find your near by doctor and book your appointment and get treatment
            fast
          </h1>
          <h3 className="mt-2">Appointment Details</h3>
          <Form action="#home" inline={"true"}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="font-weight-bold">Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter patient Name" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="font-weight-bold">
                Appointment Type
              </Form.Label>
              <Row>
                <Col>
                  <Form.Control placeholder="Consultant" />
                </Col>
                <Col>
                  <Form.Control placeholder="Treatment" />
                </Col>
              </Row>
            </Form.Group>
            <div className="d-flex justify-content-center my-2">
              <Button variant="primary" type="submit" className="booking-btn">
                Booking
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6}>
          <div>
            <img
              src={Appointment}
              alt="Doctor Appointment"
              className="img-fluid mx-auto d-block"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentDetails;
