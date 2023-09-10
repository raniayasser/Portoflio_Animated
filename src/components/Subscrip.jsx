import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Subscrip = () => {
  return (
    <section className="subSec">
      <Container>
        <Row>
          <Col md={6} xl={4}  sm={12} >
            <h3> Subscribe to our Newsletter<br/> & Never miss latest updates</h3>
          </Col>
          <Col md={6}  xl={8} lg={12}  sm={12} >
            <div className="new-letter-email">

            <input type="email"  placeholder="Email Address"/>
            <a href="#home">

            <button >Submit</button>
            </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscrip;
